'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { COMPLETED_GUIDES_KEY, getLocalDateStr } from '@/lib/progress'
import type { User } from '@supabase/supabase-js'

export type CompletionMap = Record<string, string> // slug → 'YYYY-MM-DD'

async function fetchSupabaseCompletions(userId: string): Promise<CompletionMap> {
  const { data } = await supabase
    .from('completions')
    .select('guide_slug, completed_at')
    .eq('user_id', userId)

  const map: CompletionMap = {}
  if (data) {
    for (const row of data) {
      map[row.guide_slug] = (row.completed_at as string).split('T')[0]
    }
  }
  return map
}

function readLocalCompletions(): CompletionMap {
  if (typeof window === 'undefined') return {}
  const raw = localStorage.getItem(COMPLETED_GUIDES_KEY)
  return raw ? JSON.parse(raw) : {}
}

export function useCompletions() {
  const [completionMap, setCompletionMap] = useState<CompletionMap>({})
  const [user, setUser] = useState<User | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    async function init() {
      const { data: { session } } = await supabase.auth.getSession()
      const currentUser = session?.user ?? null
      setUser(currentUser)

      if (currentUser) {
        setCompletionMap(await fetchSupabaseCompletions(currentUser.id))
      } else {
        setCompletionMap(readLocalCompletions())
      }
      setMounted(true)
    }

    init()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const currentUser = session?.user ?? null
      setUser(currentUser)
      if (currentUser) {
        setCompletionMap(await fetchSupabaseCompletions(currentUser.id))
      } else {
        setCompletionMap(readLocalCompletions())
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const markComplete = useCallback(async (slug: string) => {
    if (user) {
      const { error } = await supabase
        .from('completions')
        .upsert(
          { user_id: user.id, guide_slug: slug, completed_at: new Date().toISOString() },
          { onConflict: 'user_id,guide_slug' },
        )
      if (!error) {
        setCompletionMap(prev => ({ ...prev, [slug]: getLocalDateStr() }))
      }
    } else {
      const map = readLocalCompletions()
      map[slug] = getLocalDateStr()
      localStorage.setItem(COMPLETED_GUIDES_KEY, JSON.stringify(map))
      setCompletionMap({ ...map })
    }
  }, [user])

  return { completionMap, user, mounted, markComplete }
}
