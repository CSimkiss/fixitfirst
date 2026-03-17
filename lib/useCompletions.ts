'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import {
  type CompletionMap,
  getCompletionMap,
  setCompletionMap,
  fetchSupabaseCompletions,
  upsertSupabaseCompletion,
  mergeLocalIntoSupabase,
  markComplete as localMarkComplete,
} from '@/lib/completions'
import type { User } from '@supabase/supabase-js'

export type { CompletionMap }

export function useCompletions() {
  const [completionMap, setCompletionMapState] = useState<CompletionMap>({})
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
        setCompletionMapState(map)
        setCompletionMap(map) // keep cache fresh for next visit
      } catch (err) {
        const isTimeout = err instanceof Error && err.message === 'timeout'
        console.error(
          '[useCompletions]',
          isTimeout ? 'timed out after 3s, using cache' : 'fetch failed, using cache',
          err,
        )
        setError('Could not sync your progress from the server. Showing cached data.')
      } finally {
        setSyncing(false)
      }
    }

    // On a new login: merge any guest completions into Supabase first so
    // progress from before sign-up is not lost, then fetch the fresh state.
    async function syncWithMerge(userId: string) {
      setSyncing(true)
      setError(null)
      try {
        await mergeLocalIntoSupabase(userId)
        const map = await fetchSupabaseCompletions(userId)
        setCompletionMapState(map)
        setCompletionMap(map)
      } catch (err) {
        const isTimeout = err instanceof Error && err.message === 'timeout'
        console.error(
          '[useCompletions] merge/sync failed',
          isTimeout ? '(timeout)' : '',
          err,
        )
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
      (event, session) => {
        const currentUser = session?.user ?? null
        setUser(currentUser)

        // Show cache immediately — visible before Supabase responds
        setCompletionMapState(getCompletionMap())

        if (currentUser) {
          if (event === 'SIGNED_IN') {
            // New login: merge guest completions then fetch fresh server state
            syncWithMerge(currentUser.id)
          } else {
            // Returning session: straight sync
            syncFromSupabase(currentUser.id)
          }
        }

        // Auth is resolved; skeleton can go away even if Supabase is still loading
        setAuthResolved(true)
      },
    )

    return () => subscription.unsubscribe()
  }, [])

  const markComplete = useCallback(async (slug: string) => {
    // Optimistic update + localStorage write happen synchronously
    const next = localMarkComplete(slug)
    setCompletionMapState(next)

    if (user) {
      try {
        await upsertSupabaseCompletion(user.id, slug)
      } catch (err) {
        console.error('[useCompletions] Upsert failed, completion kept in localStorage:', err)
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
