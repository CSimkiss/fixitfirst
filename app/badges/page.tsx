'use client'

import { useState, useEffect, useRef } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { ALL_BADGES } from '@/lib/badges'
import { getCompletionMap } from '@/lib/completions'
import { getStreak } from '@/lib/progress'
import { TOOLS_STORAGE_KEY } from '@/lib/tools'

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BadgesPage() {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([])
  const [completionDates, setCompletionDates] = useState<string[]>([])
  const [ownedTools, setOwnedTools]           = useState<string[]>([])
  const [streak, setStreak]                   = useState(0)
  const [loaded, setLoaded]                   = useState(false)
  // Track which badge ids were previously earned (from sessionStorage) so we
  // can animate newly unlocked ones this session.
  const prevEarnedRef = useRef<Set<string>>(new Set())

  useEffect(() => {
    try {
      const map = getCompletionMap()
      const slugs = Object.keys(map)
      const dates = Object.values(map)
      setCompletedSlugs(slugs)
      setCompletionDates(dates)
      setStreak(getStreak(dates))
      const tools = localStorage.getItem(TOOLS_STORAGE_KEY)
      if (tools) setOwnedTools(JSON.parse(tools))

      // Load previously known earned badge ids from sessionStorage
      try {
        const raw = sessionStorage.getItem('fif-earned-badges')
        prevEarnedRef.current = new Set(raw ? JSON.parse(raw) : [])
      } catch {}
    } catch {}
    setLoaded(true)
  }, [])

  const earned = ALL_BADGES.filter(b =>  b.check(completedSlugs, ownedTools, streak, completionDates))
  const locked = ALL_BADGES.filter(b => !b.check(completedSlugs, ownedTools, streak, completionDates))

  // Persist current earned set to sessionStorage after render
  useEffect(() => {
    if (!loaded) return
    try {
      sessionStorage.setItem('fif-earned-badges', JSON.stringify(earned.map(b => b.id)))
    } catch {}
  }, [loaded, earned])

  // Closest-to-unlock: locked badge with smallest remaining, tie-break by highest pct
  const lockedWithProgress = locked.map(b => ({
    badge: b,
    progress: b.progress(completedSlugs, ownedTools, streak, completionDates),
  }))

  const closest = lockedWithProgress
    .filter(({ progress }) => progress.remaining > 0)
    .sort((a, b) =>
      a.progress.remaining - b.progress.remaining ||
      b.progress.pct - a.progress.pct,
    )[0] ?? null

  const isNewlyEarned = (id: string) =>
    loaded && !prevEarnedRef.current.has(id) && earned.some(b => b.id === id)

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
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
            {/* ── No badges at all yet — first-time empty state ────────── */}
            {earned.length === 0 && locked.length === 0 && (
              <div className="text-center py-16">
                <p className="text-4xl mb-3">🔒</p>
                <p className="text-gray-500 font-medium mb-1">No badges yet</p>
                <p className="text-sm text-gray-400 mb-5">Complete your first guide to earn one.</p>
                <a
                  href="/guides"
                  className="inline-block bg-orange-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-600 transition-colors"
                >
                  Browse guides →
                </a>
              </div>
            )}

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
                    {/* 1-step-away nudge */}
                    {closest.progress.remaining === 1 && (
                      <p className="mt-1.5 text-xs font-semibold text-orange-600 bg-orange-100 inline-block px-2 py-0.5 rounded-full">
                        You&apos;re 1 step away from unlocking this!
                      </p>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
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
                  {closest.badge.actionLabel} →
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
                    const { unlockContext } = badge.progress(completedSlugs, ownedTools, streak, completionDates)
                    const isNew = isNewlyEarned(badge.id)
                    return (
                      <a
                        key={badge.id}
                        href={badge.actionHref}
                        className={[
                          'border-2 border-orange-200 bg-orange-50 rounded-xl p-5 flex items-start gap-4',
                          'hover:border-orange-400 hover:shadow-sm transition-all',
                          isNew ? 'animate-badge-pop' : '',
                        ].join(' ')}
                      >
                        <div className={`text-4xl shrink-0 ${isNew ? 'animate-badge-pop' : ''}`}>
                          {badge.emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-900">{badge.name}</p>
                          <p className="text-sm text-gray-600 mt-0.5">{badge.description}</p>
                          <div className="flex items-center gap-2 flex-wrap mt-2">
                            <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">
                              {isNew ? '🎉 Just unlocked!' : 'Earned ✓'}
                            </span>
                            <span className="text-xs text-orange-500 hover:underline">
                              {badge.actionLabel} →
                            </span>
                          </div>
                          {unlockContext && (
                            <p className="text-xs text-gray-400 mt-1.5">{unlockContext}</p>
                          )}
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ── Zero-earned state (with locked badges present) ─────────── */}
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
                      {/* Faded header */}
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
                        href={badge.actionHref}
                        className="text-xs text-orange-500 hover:text-orange-600 hover:underline transition-colors"
                      >
                        {badge.actionLabel} →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>

      <MobileNav />
    </main>
  )
}
