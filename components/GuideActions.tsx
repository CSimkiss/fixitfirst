'use client'

/**
 * GuideActions — unified client island for guide completion.
 *
 * Replaces the separate CompleteButton + NextGuide pair on every guide page.
 * Both use a single useCompletions() instance, so marking a guide complete
 * updates the button label AND the next-guide recommendation in one React render
 * cycle with no page refresh required.
 */

import { useState } from 'react'
import { useCompletions } from '@/lib/useCompletions'
import { ALL_GUIDES } from '@/lib/guides'

// Recommended learning order used to pick the next guide
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

export default function GuideActions({
  slug,
  children,
}: {
  slug: string
  children?: React.ReactNode
}) {
  const { completionMap, markComplete, mounted } = useCompletions()
  const [saving, setSaving] = useState(false)

  const completed = !!completionMap[slug]

  const handleClick = async () => {
    if (completed) return
    setSaving(true)
    await markComplete(slug)
    setSaving(false)
  }

  // Derive next guide reactively — re-computes whenever completionMap changes
  const completedSlugs = Object.keys(completionMap)
  const nextGuide =
    RECOMMENDED_ORDER
      .filter(s => s !== slug && !completedSlugs.includes(s))
      .map(s => ALL_GUIDES.find(g => g.slug === s))
      .find(Boolean) ?? null

  return (
    <>
      {/* Complete button */}
      {!mounted ? (
        <div className="w-full py-4 rounded-xl bg-gray-100 animate-pulse h-14" />
      ) : (
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
      )}

      {/* GuideExtras / any other content between button and next-guide panel */}
      {children}

      {/* Next guide — only shown once auth + completions are resolved */}
      {mounted && nextGuide && (
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
      )}
    </>
  )
}
