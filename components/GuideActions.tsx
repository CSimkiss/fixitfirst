'use client'

/**
 * GuideActions — unified client island for guide completion.
 *
 * Replaces the separate CompleteButton + NextGuide pair on every guide page.
 * Both use a single useCompletions() instance, so marking a guide complete
 * updates the button label AND the next-guide recommendation in one React render
 * cycle with no page refresh required.
 *
 * On completion a CompletionModal is shown celebrating progress, showing
 * running totals, tier status, an affiliate tool nudge, and the next guide.
 */

import { useState } from 'react'
import { useCompletions } from '@/lib/useCompletions'
import { ALL_GUIDES, GUIDE_BY_SLUG, getRecommendedNextGuide } from '@/lib/guides'
import SocialShare from '@/components/SocialShare'
import CompletionModal from '@/components/CompletionModal'

export default function GuideActions({
  slug,
  children,
}: {
  slug: string
  children?: React.ReactNode
}) {
  const { completionMap, markComplete, mounted } = useCompletions()
  const [saving, setSaving]       = useState(false)
  const [showModal, setShowModal] = useState(false)

  const completed = !!completionMap[slug]
  const guide = GUIDE_BY_SLUG[slug]
  const savingsMin = guide?.estimatedSavingsMin ?? 0
  const savingsMax = guide?.estimatedSavingsMax ?? 0
  const shareAmount = savingsMin > 0
    ? (savingsMax > savingsMin ? Math.round((savingsMin + savingsMax) / 2) : savingsMin)
    : null

  const handleClick = async () => {
    if (completed) return
    setSaving(true)
    await markComplete(slug)
    setSaving(false)
    setShowModal(true)
  }

  // Derive next guide reactively — re-computes whenever completionMap changes
  const nextGuide = getRecommendedNextGuide(completionMap, ALL_GUIDES.filter(g => g.slug !== slug))

  return (
    <>
      {/* Complete button */}
      {!mounted ? (
        <div className="w-full py-4 rounded-xl bg-gray-100 animate-pulse h-14" />
      ) : (
        <div className={`rounded-xl transition-all ${completed ? 'bg-green-50 border border-green-200 p-5' : ''}`}>
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
          {completed && savingsMin > 0 && (
            <p className="text-green-700 text-sm font-medium mt-3 text-center">
              You just saved ~£{savingsMin} — that&apos;s one less job you needed to pay for.
            </p>
          )}
          {completed && (
            <div className="mt-4 pt-4 border-t border-green-200">
              <p className="text-sm font-semibold text-gray-700 mb-3">
                {shareAmount
                  ? `Know someone with this problem? This could save them ~£${shareAmount} — send it`
                  : 'Know someone with this problem? Send them this guide and save them a plumber call.'}
              </p>
              <div className="flex gap-3 flex-wrap">
                <SocialShare title={guide?.title ?? slug} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mid-page next fix card — shown once completions are resolved */}
      {mounted && nextGuide && (
        <div className="mt-6 border border-gray-200 rounded-xl p-4 bg-gray-50">
          <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-1">Next quick win</p>
          <p className="font-semibold text-gray-900 text-sm mb-3">{nextGuide.title}</p>
          <a
            href={nextGuide.href}
            className="inline-flex items-center gap-1 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Start next fix →
          </a>
        </div>
      )}

      {/* GuideExtras / any other content between button and next-guide panel */}
      {children}

      {/* Next guide — only shown once auth + completions are resolved */}
      {mounted && nextGuide && (
        <div className="mt-8 bg-gray-950 text-white rounded-2xl p-6">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-wide mb-2">Don&apos;t stop now — next fix</p>
          <a href={nextGuide.href} className="group block">
            <h3 className="text-xl font-bold mb-1 group-hover:text-orange-400 transition-colors">{nextGuide.title}</h3>
            <p className="text-green-400 font-bold mb-3">{nextGuide.saves}</p>
            <div className="flex gap-4 text-sm text-gray-400 mb-4">
              <span>⏱ {nextGuide.time}</span>
              <span>💰 {nextGuide.cost}</span>
              <span className="text-orange-400 font-medium">+{nextGuide.skillPoints} skill points</span>
            </div>
            <span className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-xl font-medium group-hover:bg-orange-600 transition-colors text-sm">
              Start next fix <span>→</span>
            </span>
          </a>
        </div>
      )}

      {/* Completion modal — portal rendered via fixed positioning */}
      {showModal && (
        <CompletionModal
          slug={slug}
          completionMap={completionMap}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}
