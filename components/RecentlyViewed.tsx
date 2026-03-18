'use client'

import { useState, useEffect } from 'react'

const RECENTLY_VIEWED_KEY = 'fixitfirst-recently-viewed'

type Entry = { slug: string; title: string; href: string }

export default function RecentlyViewed() {
  const [guides, setGuides]   = useState<Entry[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(RECENTLY_VIEWED_KEY)
      if (raw) setGuides(JSON.parse(raw).slice(0, 3))
    } catch {}
    setMounted(true)
  }, [])

  // Don't render until mounted (avoids hydration mismatch)
  // Don't render at all if the user has no viewing history
  if (!mounted || guides.length === 0) return null

  return (
    <section className="px-6 py-8 max-w-5xl mx-auto border-b border-gray-100">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Pick up where you left off
      </h2>
      <div className="flex flex-wrap gap-3">
        {guides.map(g => (
          <a
            key={g.slug}
            href={g.href}
            className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-orange-300 hover:text-orange-500 transition-colors"
          >
            {g.title} →
          </a>
        ))}
      </div>
    </section>
  )
}

