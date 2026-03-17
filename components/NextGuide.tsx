'use client'

import { useEffect, useState } from 'react'
import { ALL_GUIDES } from '@/lib/guides'
import { getCompletionMap } from '@/lib/completions'

// Recommended learning order, easiest to hardest
const RECOMMENDED_ORDER = [
  'change-a-lightbulb',
  'bleed-a-radiator',
  'unblock-a-drain',
  'fill-a-hole-in-a-wall',
  'fix-a-dripping-tap',
  'fit-a-curtain-pole',
  'put-up-shelves',
  'paint-a-room',
  'fix-a-running-toilet',
]

export default function NextGuide({ currentSlug }: { currentSlug: string }) {
  const [nextGuide, setNextGuide] = useState<typeof ALL_GUIDES[0] | null>(null)

  useEffect(() => {
    try {
      const completed: string[] = Object.keys(getCompletionMap())

      const next = RECOMMENDED_ORDER
        .filter(slug => slug !== currentSlug && !completed.includes(slug))
        .map(slug => ALL_GUIDES.find(g => g.slug === slug))
        .find(Boolean)

      setNextGuide(next ?? null)
    } catch {}
  }, [currentSlug])

  if (!nextGuide) return null

  return (
    <div className="mt-8 bg-gray-950 text-white rounded-2xl p-6">
      <p className="text-orange-400 text-xs font-semibold uppercase tracking-wide mb-2">Next recommended guide</p>
      <a href={nextGuide.href} className="group block">
        <h3 className="text-xl font-bold mb-1 group-hover:text-orange-400 transition-colors">{nextGuide.title}</h3>
        <p className="text-green-400 font-bold mb-3">{nextGuide.saves}</p>
        <div className="flex gap-4 text-sm text-gray-400 mb-4">
          <span>⏱ {nextGuide.time}</span>
          <span>💰 {nextGuide.cost}</span>
          <span className="text-orange-400 font-medium">+{nextGuide.skillPoints} skill points</span>
        </div>
        <span className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-xl font-medium group-hover:bg-orange-600 transition-colors text-sm">
          Go to next guide <span>→</span>
        </span>
      </a>
    </div>
  )
}
