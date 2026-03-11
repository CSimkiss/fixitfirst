'use client'

import { useState, useEffect } from 'react'
import { GUIDE_META } from '@/lib/guide-meta'

export default function HelpfulRating({ slug }: { slug: string }) {
  const VOTE_KEY = `fixitfirst-helpful-${slug}`
  const [vote, setVote] = useState<'up' | 'down' | null>(null)
  const [mounted, setMounted] = useState(false)

  // Base helpful count: 83% of completedCount
  const baseCount = Math.floor((GUIDE_META[slug]?.completedCount ?? 1000) * 0.83)

  useEffect(() => {
    const v = localStorage.getItem(VOTE_KEY)
    if (v === 'up' || v === 'down') setVote(v)
    setMounted(true)
  }, [VOTE_KEY])

  function castVote(v: 'up' | 'down') {
    if (vote === v) {
      // toggle off
      setVote(null)
      localStorage.removeItem(VOTE_KEY)
    } else {
      setVote(v)
      localStorage.setItem(VOTE_KEY, v)
    }
  }

  const helpfulCount = baseCount + (mounted && vote === 'up' ? 1 : 0)

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-semibold text-gray-700">Did this guide help?</p>
          {mounted && (
            <p className="text-xs text-gray-400 mt-0.5">
              {helpfulCount.toLocaleString()} people found this helpful
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => castVote('up')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all ${
              mounted && vote === 'up'
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'border-gray-200 hover:border-green-400 text-gray-600'
            }`}
          >
            <span className="text-base">👍</span>
            <span>Yes</span>
          </button>
          <button
            onClick={() => castVote('down')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all ${
              mounted && vote === 'down'
                ? 'border-red-400 bg-red-50 text-red-700'
                : 'border-gray-200 hover:border-red-300 text-gray-600'
            }`}
          >
            <span className="text-base">👎</span>
            <span>No</span>
          </button>
        </div>
      </div>
      {mounted && vote === 'down' && (
        <p className="text-xs text-gray-500 mt-3 border-t border-gray-200 pt-3">
          Sorry to hear that. We&apos;re always improving — if something was unclear, try our{' '}
          <a href="/faq" className="text-orange-500 hover:underline">FAQ</a> or{' '}
          <a href="/glossary" className="text-orange-500 hover:underline">glossary</a>.
        </p>
      )}
    </div>
  )
}
