'use client'

import { useState, useEffect } from 'react'
import { COMPLETED_GUIDES_KEY, getLocalDateStr } from '@/lib/progress'

export default function CompleteButton() {
  const [completed, setCompleted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const slug = window.location.pathname.split('/').filter(Boolean).pop() ?? ''
    const raw = localStorage.getItem(COMPLETED_GUIDES_KEY)
    const map: Record<string, string> = raw ? JSON.parse(raw) : {}
    setCompleted(!!map[slug])
    setMounted(true)
  }, [])

  const handleClick = () => {
    const slug = window.location.pathname.split('/').filter(Boolean).pop() ?? ''
    const raw = localStorage.getItem(COMPLETED_GUIDES_KEY)
    const map: Record<string, string> = raw ? JSON.parse(raw) : {}
    map[slug] = getLocalDateStr()
    localStorage.setItem(COMPLETED_GUIDES_KEY, JSON.stringify(map))
    setCompleted(true)
  }

  if (!mounted) {
    return <div className="w-full py-4 rounded-xl bg-gray-100 animate-pulse h-14" />
  }

  return (
    <button
      onClick={handleClick}
      disabled={completed}
      className={`w-full py-4 rounded-xl text-lg font-semibold transition-all ${
        completed
          ? 'bg-green-500 text-white cursor-default'
          : 'bg-orange-500 text-white hover:bg-orange-600'
      }`}
    >
      {completed ? '✓ Completed!' : 'Mark as Complete'}
    </button>
  )
}
