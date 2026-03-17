'use client'

import { useState, useEffect } from 'react'

const RECENTLY_VIEWED_KEY = 'fixitfirst-recently-viewed'

type Entry = { slug: string; title: string; href: string }

const STARTER_GUIDES: Entry[] = [
  { slug: 'fix-a-dripping-tap', title: 'Fix a dripping tap',  href: '/guides/fix-a-dripping-tap'  },
  { slug: 'unblock-a-drain',    title: 'Unblock a drain',     href: '/guides/unblock-a-drain'     },
]

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

  // Avoid flash of wrong content during SSR / hydration
  if (!mounted) return null

  if (guides.length === 0) {
    return (
      <section className="px-6 py-6 max-w-5xl mx-auto border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Start here (most popular fix)
        </h2>
        <div className="flex flex-wrap gap-3">
          {STARTER_GUIDES.map(g => (
            <a
              key={g.slug}
              href={g.href}
              className="border-2 border-orange-300 bg-orange-50 rounded-xl px-4 py-2.5 text-sm font-semibold text-orange-700 hover:border-orange-500 hover:bg-orange-100 transition-colors"
            >
              {g.title} →
            </a>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 py-8 max-w-5xl mx-auto border-b border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Recently viewed</h2>
      <div className="flex flex-wrap gap-3">
        {guides.map(g => (
          <a
            key={g.slug}
            href={g.href}
            className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-orange-300 hover:text-orange-500 transition-colors"
          >
            {g.title}
          </a>
        ))}
      </div>
    </section>
  )
}
