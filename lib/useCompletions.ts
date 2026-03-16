'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { COMPLETED_GUIDES_KEY, getLocalDateStr } from '@/lib/progress'
import type { User } from '@supabase/supabase-js'

export type CompletionMap = Record<string, string> // slug → 'YYYY-MM-DD'

const SUPABASE_TIMEOUT_MS = 3_000

// Single Supabase query for all completions, wrapped in a 3-second timeout.
// If the query doesn't respond in time, the timeout wins and the caller
// falls back to the locally-cached copy.
async function fetchSupabaseCompletions(userId: string): Promise<CompletionMap> {
  const queryPromise = supabase
    .from('completions')
    .select('guide_slug, completed_at')
    .eq('user_id', userId)
    .then(({ data, error }) => {
      if (error) throw error
      const map: CompletionMap = {}
      for (const row of data ?? []) {
        map[row.guide_slug] = (row.completed_at as string).split('T')[0]
      }
      return map
    })

  const timeoutPromise = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('timeout')), SUPABASE_TIMEOUT_MS),
  )

  return Promise.race([queryPromise, timeoutPromise])
}

function readLocalCompletions(): CompletionMap {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(COMPLETED_GUIDES_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function writeLocalCompletions(map: CompletionMap) {
  try {
    localStorage.setItem(COMPLETED_GUIDES_KEY, JSON.stringify(map))
  } catch {}
}

export function useCompletions() {
  const [completionMap, setCompletionMap] = useState<CompletionMap>({})
  const [user, setUser] = useState<User | null>(null)
  const [authResolved, setAuthResolved] = useState(false)
  const [syncing, setSyncing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Background Supabase sync — does NOT block the UI.
    // Auth resolution and cache read happen first (synchronously once
    // INITIAL_SESSION fires), then this runs in parallel.
    async function syncFromSupabase(userId: string) {
      setSyncing(true)
      setError(null)
      try {
        const map = await fetchSupabaseCompletions(userId)
        setCompletionMap(map)
        writeLocalCompletions(map) // keep cache fresh for next visit
      } catch (err) {
        const isTimeout = err instanceof Error && err.message === 'timeout'
        console.error(
          '[useCompletions]',
          isTimeout ? 'timed out after 3s, using cache' : 'fetch failed, using cache',
          err,
        )
        // Don't overwrite state — cache is already displayed
        setError('Could not sync your progress from the server. Showing cached data.')
      } finally {
        setSyncing(false)
      }
    }

    // onAuthStateChange fires INITIAL_SESSION synchronously on subscribe
    // (~50ms, reads localStorage). We use that to:
    //   1. Immediately show cached completions — zero wait for the user
    //   2. Kick off a background Supabase sync without blocking the UI
    // The `loading` flag (authResolved) only covers the auth step, not the
    // Supabase round-trip, so the skeleton disappears almost instantly.
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const currentUser = session?.user ?? null
        setUser(currentUser)

        // Show cache immediately — visible before Supabase responds
        setCompletionMap(readLocalCompletions())

        if (currentUser) {
          // Fire-and-forget: sync runs in background, UI already has cache
          syncFromSupabase(currentUser.id)
        }

        // Auth is resolved; skeleton can go away even if Supabase is still loading
        setAuthResolved(true)
      },
    )

    return () => subscription.unsubscribe()
  }, [])

  const markComplete = useCallback(async (slug: string) => {
    const dateStr = getLocalDateStr()

    // Optimistic update + cache write happen together, synchronously
    setCompletionMap(prev => {
      const next = { ...prev, [slug]: dateStr }
      writeLocalCompletions(next)
      return next
    })

    if (user) {
      const { error: upsertError } = await supabase
        .from('completions')
        .upsert(
          { user_id: user.id, guide_slug: slug, completed_at: new Date().toISOString() },
          { onConflict: 'user_id,guide_slug' },
        )

      if (upsertError) {
        console.error('[useCompletions] Upsert failed, completion kept in localStorage:', upsertError)
      }
    }
  }, [user])

  return {
    completionMap,
    user,
    loading: !authResolved, // brief: only until INITIAL_SESSION fires (~50ms)
    syncing,                 // true while background Supabase fetch is running
    error,
    mounted: authResolved,   // backwards-compat alias for !loading
    markComplete,
  }
}
