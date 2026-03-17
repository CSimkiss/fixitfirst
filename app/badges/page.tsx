'use client'

import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { ALL_BADGES } from '@/lib/badges'
import { getCompletionMap } from '@/lib/completions'
import { TOOLS_STORAGE_KEY } from '@/lib/tools'

// ─── Progress helpers ─────────────────────────────────────────────────────────

const PLUMBING_SLUGS = ['fix-a-dripping-tap', 'unblock-a-drain', 'fix-a-running-toilet']
const QUICK_SLUGS    = ['change-a-lightbulb', 'bleed-a-radiator', 'unblock-a-drain']

type Progress = {
  current: number
  total: number
  pct: number
  remaining: number
  label: string        // e.g. "3 / 5 guides completed"
  ctaHref: string
  ctaLabel: string
  nextHref: string     // deepest next-step link for "Start next fix →"
  unlockContext: string // shown on earned badges
}

function getBadgeProgress(
  id: string,
  completedSlugs: string[],
  ownedTools: string[],
): Progress {
  const n = completedSlugs.length
  const t = ownedTools.length

  switch (id) {
    case 'first-fix': {
      const current = Math.min(n, 1)
      return {
        current, total: 1, pct: current * 100,
        remaining: Math.max(0, 1 - n),
        label: `${current} / 1 guide completed`,
        ctaHref: '/guides', ctaLabel: 'View guides →',
        nextHref: '/guides',
        unlockContext: 'Completed your first guide',
      }
    }
    case 'triple-threat': {
      const current = Math.min(n, 3)
      return {
        current, total: 3, pct: (current / 3) * 100,
        remaining: Math.max(0, 3 - n),
        label: `${current} / 3 guides completed`,
        ctaHref: '/guides', ctaLabel: 'View guides →',
        nextHref: '/guides',
        unlockContext: 'Completed 3 or more guides',
      }
    }
    case 'halfway': {
      const current = Math.min(n, 5)
      return {
        current, total: 5, pct: (current / 5) * 100,
        remaining: Math.max(0, 5 - n),
        label: `${current} / 5 guides completed`,
        ctaHref: '/guides', ctaLabel: 'View guides →',
        nextHref: '/guides',
        unlockContext: 'Completed 5+ guides',
      }
    }
    case 'full-house': {
      const current = Math.min(n, 9)
      return {
        current, total: 9, pct: (current / 9) * 100,
        remaining: Math.max(0, 9 - n),
        label: `${current} / 9 guides completed`,
        ctaHref: '/guides', ctaLabel: 'View guides →',
        nextHref: '/guides',
        unlockContext: 'Completed 9+ guides',
      }
    }
    case 'plumber-training': {
      const current = PLUMBING_SLUGS.filter(s => completedSlugs.includes(s)).length
      const nextPlumbing = PLUMBING_SLUGS.find(s => !completedSlugs.includes(s))
      return {
        current, total: 3, pct: (current / 3) * 100,
        remaining: Math.max(0, 3 - current),
        label: `${current} / 3 plumbing guides done`,
        ctaHref: '/guides', ctaLabel: 'View plumbing guides →',
        nextHref: nextPlumbing ? `/guides/${nextPlumbing}` : '/guides',
        unlockContext: 'Completed all 3 plumbing guides',
      }
    }
    case 'tool-up': {
      const current = Math.min(t, 5)
      return {
        current, total: 5, pct: (current / 5) * 100,
        remaining: Math.max(0, 5 - t),
        label: `${current} / 5 tools added`,
        ctaHref: '/tools', ctaLabel: 'Add tools →',
        nextHref: '/tools',
        unlockContext: 'Added 5+ tools to your library',
      }
    }
    case 'quick-fix': {
      const current = QUICK_SLUGS.some(s => completedSlugs.includes(s)) ? 1 : 0
      const nextQuick = QUICK_SLUGS.find(s => !completedSlugs.includes(s))
      return {
        current, total: 1, pct: current * 100,
        remaining: current === 0 ? 1 : 0,
        label: current === 0 ? '0 / 1 quick guide done' : '1 / 1 — done',
        ctaHref: '/guides', ctaLabel: 'View quick guides →',
        nextHref: nextQuick ? `/guides/${nextQuick}` : '/guides',
        unlockContext: 'Completed a sub-20-minute guide',
      }
    }
    case 'decorator': {
      const current = completedSlugs.includes('paint-a-room') ? 1 : 0
      return {
        current, total: 1, pct: current * 100,
        remaining: current === 0 ? 1 : 0,
        label: current === 0 ? 'Paint a room — not done yet' : 'Done',
        ctaHref: '/guides/paint-a-room', ctaLabel: 'View guide →',
        nextHref: '/guides/paint-a-room',
        unlockContext: 'Completed the Paint a room guide',
      }
    }
    default:
      return {
        current: 0, total: 1, pct: 0, remaining: 1, label: '',
        ctaHref: '/guides', ctaLabel: 'View guides →', nextHref: '/guides',
        unlockContext: '',
      }
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BadgesPage() {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([])
  const [ownedTools, setOwnedTools] = useState<string[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      setCompletedSlugs(Object.keys(getCompletionMap()))
      const tools = localStorage.getItem(TOOLS_STORAGE_KEY)
      if (tools) setOwnedTools(JSON.parse(tools))
    } catch {}
    setLoaded(true)
  }, [])

  const earned = ALL_BADGES.filter(b =>  b.check(completedSlugs, ownedTools))
  const locked = ALL_BADGES.filter(b => !b.check(completedSlugs, ownedTools))

  // Closest-to-unlock: locked badge with smallest remaining, tie-break by highest pct
  const lockedWithProgress = locked.map(b => ({
    badge: b,
    progress: getBadgeProgress(b.id, completedSlugs, ownedTools),
  }))

  const closest = lockedWithProgress
    .filter(({ progress }) => progress.remaining > 0)
    .sort((a, b) =>
      a.progress.remaining - b.progress.remaining ||
      b.progress.pct - a.progress.pct,
    )[0] ?? null

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      {/* ── Hero (unchanged) ────────────────────────────────────────────── */}
      <section className="bg-gray-950 text-white px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-4">🏅</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Your Badges</h1>
          <p className="text-gray-300 text-lg">
            Earn badges by completing guides and building your tool library.
          </p>
          {loaded && (
            <div className="mt-6 inline-flex items-center gap-3 bg-white/10 rounded-full px-5 py-2 text-sm">
              <span className="text-orange-300 font-bold">{earned.length}</span>
              <span className="text-gray-400">earned</span>
              <span className="text-gray-600">·</span>
              <span className="text-gray-400 font-bold">{locked.length}</span>
              <span className="text-gray-400">to unlock</span>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        {!loaded ? (
          <p className="text-gray-400 text-center py-16">Loading your badges…</p>
        ) : (
          <>
            {/* ── Closest to unlock ──────────────────────────────────────── */}
            {closest && (
              <div className="mb-10 bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-500 mb-3">
                  Closest to unlock
                </p>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl shrink-0">{closest.badge.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900">{closest.badge.name}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{closest.badge.description}</p>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{closest.progress.label}</span>
                    <span className="font-medium text-orange-600">
                      {closest.progress.remaining} more to unlock
                    </span>
                  </div>
                  <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-400 rounded-full transition-all duration-500"
                      style={{ width: `${Math.max(closest.progress.pct, closest.progress.current > 0 ? 5 : 0)}%` }}
                    />
                  </div>
                </div>

                <a
                  href={closest.progress.nextHref}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
                >
                  Start next fix →
                </a>
              </div>
            )}

            {/* ── Earned ─────────────────────────────────────────────────── */}
            {earned.length > 0 && (
              <div className="mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>Earned</span>
                  <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {earned.length}
                  </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {earned.map(badge => {
                    const { unlockContext } = getBadgeProgress(badge.id, completedSlugs, ownedTools)
                    return (
                      <div
                        key={badge.id}
                        className="border-2 border-orange-200 bg-orange-50 rounded-xl p-5 flex items-start gap-4"
                      >
                        <div className="text-4xl shrink-0">{badge.emoji}</div>
                        <div>
                          <p className="font-bold text-gray-900">{badge.name}</p>
                          <p className="text-sm text-gray-600 mt-0.5">{badge.description}</p>
                          <span className="inline-block mt-2 text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">
                            Earned ✓
                          </span>
                          {unlockContext && (
                            <p className="text-xs text-gray-400 mt-1.5">{unlockContext}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ── To unlock ──────────────────────────────────────────────── */}
            {locked.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>To unlock</span>
                  <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">
                    {locked.length}
                  </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {lockedWithProgress.map(({ badge, progress }) => (
                    <div
                      key={badge.id}
                      className="border border-gray-200 bg-gray-50 rounded-xl p-5"
                    >
                      {/* Faded header — unchanged visual */}
                      <div className="flex items-start gap-4 opacity-60 mb-3">
                        <div className="text-4xl shrink-0 grayscale">{badge.emoji}</div>
                        <div>
                          <p className="font-bold text-gray-700">{badge.name}</p>
                          <p className="text-sm text-gray-500 mt-0.5">{badge.description}</p>
                          <p className="text-xs text-gray-400 mt-2 italic">{badge.hint}</p>
                        </div>
                      </div>

                      {/* Progress indicator */}
                      {progress.label && (
                        <div className="space-y-1.5 mb-3">
                          <div className="flex items-center justify-between text-xs text-gray-400">
                            <span>{progress.label}</span>
                            {progress.remaining > 0 && (
                              <span>{progress.remaining} more</span>
                            )}
                          </div>
                          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gray-400 rounded-full transition-all duration-500"
                              style={{ width: `${progress.pct}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Contextual CTA */}
                      <a
                        href={progress.ctaHref}
                        className="text-xs text-orange-500 hover:text-orange-600 hover:underline transition-colors"
                      >
                        {progress.ctaLabel}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state (unchanged) */}
            {earned.length === 0 && locked.length > 0 && (
              <div className="text-center py-8 border border-dashed border-gray-200 rounded-xl mb-8">
                <p className="text-gray-400 mb-2">No badges yet</p>
                <p className="text-sm text-gray-400">Complete your first guide to earn your first badge.</p>
                <a
                  href="/guides"
                  className="inline-block mt-4 bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
                >
                  Browse guides
                </a>
              </div>
            )}
          </>
        )}
      </section>

      <MobileNav />
    </main>
  )
}
