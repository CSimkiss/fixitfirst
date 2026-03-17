'use client'

import { useState } from 'react'
import { GUIDE_META } from '@/lib/guide-meta'

export default function DifficultyComparison({ slug }: { slug: string }) {
  const [open, setOpen] = useState(false)
  const meta = GUIDE_META[slug]
  if (!meta) return null

  return (
    <div className="mb-6">
      <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        aria-expanded={open}
      >
        <span className="w-5 h-5 bg-gray-100 border border-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">?</span>
        <span>How does this compare?</span>
      </button>
      {open && (
        <div
          className="absolute z-20 bottom-full mb-2 left-0 bg-gray-900 text-white text-sm rounded-xl px-4 py-3 w-72 shadow-xl"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <p className="font-medium text-orange-400 mb-1 text-xs uppercase tracking-wide">Difficulty comparison</p>
          <p>{meta.difficultyComparison}</p>
          <div className="absolute top-full left-4 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
      </div>
      <p className="text-xs text-gray-400 mt-1">Only basic tools needed — most homes already have them.</p>
    </div>
  )
}
