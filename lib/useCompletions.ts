'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { COMPLETED_GUIDES_KEY, getLocalDateStr } from '@/lib/progress'
import type { User } from '@supabase/supabase-js'

export type CompletionMap = Record<string, string> // slug → 'YYYY-MM-DD'

async function fetchSupabaseCompletions(userId: string): Promise<CompletionMap> {
  const { data, error } = await supabase
    .from('completions')
    .select('guide_slug, completed_at')
    .eq('user_id', userId)

  if (error) throw error

  const map: CompletionMap = {}
  for (const row of data ?? []) {
    map[row.guide_slug] = (row.completed_at as string).split('T')[0]
  }
  return map
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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // onAuthStateChange fires INITIAL_SESSION synchronously on subscribe,
    // giving us the session reliably without a separate getSession() call.
    // Using both getSession() + onAuthStateChange causes a race condition
    // where two async operations compete to set state, producing blank screens.
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const currentUser = session?.user ?? null
        setUser(currentUser)

        if (currentUser) {
          try {
            setError(null)
            const map = await fetchSupabaseCompletions(currentUser.id)
            setCompletionMap(map)
          } catch (err) {
            console.error('[useCompletions] Supabase fetch failed, falling back to localStorage:', err)
            setError('Could not load your saved progress. Showing local data instead.')
            setCompletionMap(readLocalCompletions())
          }
        } else {
          setError(null)
          setCompletionMap(readLocalCompletions())
        }

        setLoading(false)
      },
    )

    return () => subscription.unsubscribe()
  }, [])

  const markComplete = useCallback(async (slug: string) => {
    const dateStr = getLocalDateStr()

    // Optimistic update — UI reflects the change immediately
    setCompletionMap(prev => ({ ...prev, [slug]: dateStr }))

    if (user) {
      const { error: upsertError } = await supabase
        .from('completions')
        .upsert(
          { user_id: user.id, guide_slug: slug, completed_at: new Date().toISOString() },
          { onConflict: 'user_id,guide_slug' },
        )

      if (upsertError) {
        console.error('[useCompletions] Failed to save to Supabase, writing to localStorage:', upsertError)
        // Persist locally so the completion is not lost on refresh
        const local = readLocalCompletions()
        local[slug] = dateStr
        writeLocalCompletions(local)
      }
    } else {
      const local = readLocalCompletions()
      local[slug] = dateStr
      writeLocalCompletions(local)
    }
  }, [user])

  return {
    completionMap,
    user,
    loading,
    error,
    // `mounted` kept for backwards compatibility — true once loading is done
    mounted: !loading,
    markComplete,
  }
}
