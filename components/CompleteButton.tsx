'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { COMPLETED_GUIDES_KEY, getLocalDateStr } from '@/lib/progress'
import type { User } from '@supabase/supabase-js'

export default function CompleteButton() {
  const [completed, setCompleted] = useState(false)
  const [saving, setSaving] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const slug = window.location.pathname.split('/').filter(Boolean).pop() ?? ''

    async function init() {
      const { data: { session } } = await supabase.auth.getSession()
      const currentUser = session?.user ?? null
      setUser(currentUser)

      if (currentUser) {
        const { data } = await supabase
          .from('completions')
          .select('guide_slug')
          .eq('user_id', currentUser.id)
          .eq('guide_slug', slug)
          .maybeSingle()
        setCompleted(!!data)
      } else {
        const raw = localStorage.getItem(COMPLETED_GUIDES_KEY)
        const map: Record<string, string> = raw ? JSON.parse(raw) : {}
        setCompleted(!!map[slug])
      }
      setMounted(true)
    }

    init()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  const handleClick = async () => {
    const slug = window.location.pathname.split('/').filter(Boolean).pop() ?? ''
    setSaving(true)

    if (user) {
      const { error } = await supabase
        .from('completions')
        .upsert(
          { user_id: user.id, guide_slug: slug, completed_at: new Date().toISOString() },
          { onConflict: 'user_id,guide_slug' },
        )
      if (!error) setCompleted(true)
    } else {
      const raw = localStorage.getItem(COMPLETED_GUIDES_KEY)
      const map: Record<string, string> = raw ? JSON.parse(raw) : {}
      map[slug] = getLocalDateStr()
      localStorage.setItem(COMPLETED_GUIDES_KEY, JSON.stringify(map))
      setCompleted(true)
    }
    setSaving(false)
  }

  if (!mounted) {
    return <div className="w-full py-4 rounded-xl bg-gray-100 animate-pulse h-14" />
  }

  return (
    <button
      onClick={handleClick}
      disabled={completed || saving}
      className={`w-full py-4 rounded-xl text-lg font-semibold transition-all ${
        completed
          ? 'bg-green-500 text-white cursor-default'
          : 'bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-70'
      }`}
    >
      {completed ? '✓ Completed!' : saving ? 'Saving…' : 'Mark as Complete'}
    </button>
  )
}
