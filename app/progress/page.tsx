'use client'

import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { TIERS } from '@/lib/progress'
import { ALL_GUIDES, getRecommendation } from '@/lib/guides'
import { useCompletions } from '@/lib/useCompletions'
import { streakCount, tierLevel, totalSavings } from '@/lib/completions'
import { ALL_BADGES } from '@/lib/badges'
import { ALL_TOOLS, GUIDE_TOOLS as GUIDE_TOOL_MAP, TOOLS_STORAGE_KEY } from '@/lib/tools'
import { screwfixToolUrl } from '@/lib/affiliates'
import StatCard from '@/components/StatCard'

const CATEGORY_COLOURS: Record<string, string> = {
  Plumbing:   'bg-blue-50 text-blue-700',
  Electrics:  'bg-yellow-50 text-yellow-700',
  Carpentry:  'bg-amber-50 text-amber-700',
  Decorating: 'bg-purple-50 text-purple-700',
  Masonry:    'bg-stone-50 text-stone-700',
  Heating:    'bg-red-50 text-red-700',
  Fitting:    'bg-teal-50 text-teal-700',
}

const MILESTONES = [
  { at: 3,  label: 'Bathroom Basics' },
  { at: 6,  label: 'Kitchen Confidence' },
  { at: 10, label: 'Home Master' },
  { at: 20, label: 'Full DIY Independence' },
]


interface GuideCardProps {
  guide: typeof ALL_GUIDES[0]
  done: boolean
  date?: string
  ownedSet: Set<string>
  toolById: Record<string, { id: string; name: string; category: string }>
}

function GuideCard({ guide, done, date, ownedSet, toolById }: GuideCardProps) {
  const missing = done
    ? []
    : (GUIDE_TOOL_MAP[guide.slug] ?? []).filter(id => !ownedSet.has(id) && toolById[id])

  return (
    <div
      className={`rounded-xl border p-4 flex flex-col gap-2 ${
        done ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'
      }`}
    >
      <a
        href={`/guides/${guide.slug}`}
        className="flex gap-3 items-start group"
      >
        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold ${
          done ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'
        }`}>
          {done ? '✓' : '○'}
        </div>
        <div className="min-w-0 flex-1">
          <p className={`text-sm font-semibold leading-snug group-hover:text-orange-500 transition-colors ${done ? 'text-green-900' : 'text-gray-700'}`}>
            {guide.title}
          </p>
          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
            <span className={`text-xs px-2 py-0.5 rounded-full ${CATEGORY_COLOURS[guide.category] ?? 'bg-gray-100 text-gray-600'}`}>
              {guide.category}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${done ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-400'}`}>
              ⭐ {guide.skillPoints} pts
            </span>
          </div>
          {done && date && (
            <p className="text-xs text-green-600 mt-1">Completed {date}</p>
          )}
        </div>
      </a>

      {/* Tool monetisation — only for incomplete guides with unowned tools */}
      {!done && missing.length > 0 && (
        <div className="pl-10 text-xs text-gray-500">
          <span className="font-medium text-gray-600">You&apos;ll need: </span>
          {missing.map((id, i) => (
            <span key={id}>
              {toolById[id].name}
              {' '}
              <a
                href={screwfixToolUrl(toolById[id].name)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                Find it
              </a>
              {i < missing.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      )}

      {/* Find a pro fallback — only for incomplete guides */}
      {!done && (
        <div className="pl-10">
          <a
            href="/find-a-pro"
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            Don&apos;t want to do this? Find a pro →
          </a>
        </div>
      )}
    </div>
  )
}

export default function ProgressPage() {
  const { completionMap, user, loading, syncing, error } = useCompletions()
  const [ownedTools, setOwnedTools] = useState<string[]>([])
  const [trackOpen, setTrackOpen] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(TOOLS_STORAGE_KEY)
      if (raw) setOwnedTools(JSON.parse(raw))
    } catch {}
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen bg-white pb-20 md:pb-0">
        <Nav />
        <div className="animate-pulse">
          <div className="bg-gray-950 px-6 py-14 text-center">
            <div className="h-3 w-24 bg-gray-700 rounded mx-auto mb-3" />
            <div className="h-10 w-40 bg-gray-700 rounded mx-auto mb-3" />
            <div className="h-4 w-56 bg-gray-800 rounded mx-auto mb-2" />
            <div className="h-3 w-48 bg-gray-800 rounded mx-auto" />
          </div>
          <div className="max-w-3xl mx-auto px-6 py-10 space-y-4">
            <div className="h-20 bg-gray-100 rounded-2xl" />
            <div className="h-48 bg-gray-100 rounded-2xl" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => <div key={i} className="h-20 bg-gray-100 rounded-xl" />)}
            </div>
          </div>
        </div>
        <MobileNav />
      </main>
    )
  }

  const completedSlugs = Object.keys(completionMap)
  const completedCount = completedSlugs.length
  const tier = tierLevel(completionMap)
  const streak = streakCount(completionMap)
  const nextTier = TIERS[TIERS.indexOf(tier) + 1]
  const totalPoints = completedSlugs.reduce((sum, slug) => {
    return sum + (ALL_GUIDES.find(g => g.slug === slug)?.skillPoints ?? 0)
  }, 0)
  const maxPoints = ALL_GUIDES.reduce((sum, g) => sum + g.skillPoints, 0)
  const totalSaved = totalSavings(completionMap)
  const earnedBadges = ALL_BADGES.filter(b => b.check(completedSlugs, [], streak))
  const earnedBadgesCount = earnedBadges.length

  // Opens the collapsible (if needed) then scrolls to target id
  function scrollTo(id: string, needsCollapsible = false) {
    if (needsCollapsible) setTrackOpen(true)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }, needsCollapsible ? 350 : 0)
  }

  // Level system
  const levelNumber = TIERS.indexOf(tier) + 1

  // Next recommendation
  const recommendation = getRecommendation(completionMap)

  // Guide sections
  const completedGuides = ALL_GUIDES.filter(g => completionMap[g.slug])
  const incompleteGuides = ALL_GUIDES.filter(g => !completionMap[g.slug])
  const sortedIncomplete = [...incompleteGuides].sort(
    (a, b) => a.difficulty - b.difficulty || a.timeMinutes - b.timeMinutes
  )
  const recommendedNext = sortedIncomplete.slice(0, 3)
  const recommendedSlugs = new Set(recommendedNext.map(g => g.slug))
  const remainingGuides = incompleteGuides.filter(g => !recommendedSlugs.has(g.slug))

  // Milestone
  const nextMilestone = MILESTONES.find(m => completedCount < m.at)

  // Tool lookup helpers
  const toolById = Object.fromEntries(ALL_TOOLS.map(t => [t.id, t]))
  const ownedSet = new Set(ownedTools)

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      {/* ── 1. Skill level hero ─────────────────────────────────────────────── */}
      {(() => {
        const fixesLeft      = nextTier ? nextTier.min - completedCount : 0
        const isNearNextTier = nextTier && fixesLeft <= 2

        return (
          <a
            href="/skill-level"
            className="block bg-gray-950 text-white px-6 py-14 text-center hover:bg-gray-900 transition-colors"
          >
            <p className="text-gray-400 text-sm mb-2">Your skill level</p>
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="text-4xl">{tier.emoji}</span>
              <h1 className="text-4xl md:text-5xl font-bold">{tier.name}</h1>
            </div>
            <p className="text-gray-300 text-lg mb-1">{tier.description}</p>
            <p className="text-gray-400 text-sm">
              {completedCount} of {ALL_GUIDES.length} guides completed
              {nextTier && ` · ${fixesLeft} more to reach ${nextTier.name}`}
              {!nextTier && ' · All guides complete!'}
            </p>

            {/* Close-to-next-tier highlight */}
            {isNearNextTier && (
              <p className="mt-2 text-sm font-medium text-orange-300">
                You&apos;re close to {nextTier.name} — finish these next
              </p>
            )}

            <div className="mt-4 inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-5 py-2">
              <span className="text-orange-400 text-lg font-bold">⭐ {totalPoints}</span>
              <span className="text-gray-400 text-sm">/ {maxPoints} skill points</span>
            </div>

            {/* Primary CTA */}
            <div className="mt-5">
              <span className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold text-sm">
                Explore your skill level →
              </span>
              <p className="text-xs text-gray-500 mt-2">
                See what you can do — and what&apos;s coming next
              </p>
            </div>

            {syncing && (
              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-500">
                <svg className="w-3 h-3 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Syncing with server…
              </div>
            )}
          </a>
        )
      })()}

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-10">

        {/* Level badge */}
        <div>
          <span className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 text-sm font-semibold text-purple-700">
            {tier.emoji} Level {levelNumber}: {tier.name}
          </span>
        </div>

        {/* ── 2. What this level means — tier roadmap ──────────────────────── */}
        <div id="skill-tiers-anchor" className="scroll-mt-20">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">What this level means</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {TIERS.map((t) => {
              const isActive = tier.name === t.name
              const isUnlocked = completedCount >= t.min
              return (
                <div
                  key={t.name}
                  className={`rounded-xl p-4 border-2 transition-all ${
                    isActive
                      ? `${t.bg} border-current ${t.colour}`
                      : isUnlocked
                      ? 'bg-gray-50 border-gray-200 text-gray-600'
                      : 'bg-white border-gray-100 text-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={isUnlocked ? '' : 'grayscale opacity-40'}>{t.emoji}</span>
                    <span className="font-semibold text-sm">{t.name}</span>
                    {isActive && <span className="ml-auto text-xs font-bold uppercase tracking-wide">You</span>}
                  </div>
                  <p className="text-xs opacity-70">{t.description}</p>
                  <p className="text-xs opacity-50 mt-1">
                    {t.min === t.max ? `${t.min} guide${t.min !== 1 ? 's' : ''}` : `${t.min}–${t.max} guides`}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── 3. What to do next — recommendation card ─────────────────────── */}
        {recommendation && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">What to do next</h2>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-orange-500 mb-2">Your next fix</p>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{recommendation.guide.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>⏱ {recommendation.guide.time}</span>
                {recommendation.guide.estimatedSavingsMax > 0 && (
                  <span>💰 Save £{recommendation.guide.estimatedSavingsMin}–{recommendation.guide.estimatedSavingsMax}</span>
                )}
              </div>
              <a
                href={recommendation.guide.href}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
              >
                Start next fix →
              </a>
            </div>
          </div>
        )}

        {/* Error banner — Supabase fetch failed, fell back to localStorage */}
        {error && (
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-300 rounded-xl px-5 py-4 text-sm text-amber-800">
            <span className="shrink-0 text-lg">⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Sign-in prompt for guests */}
        {!user && (
          <div className="flex items-start gap-4 bg-blue-50 border border-blue-200 rounded-2xl px-6 py-5">
            <span className="text-2xl shrink-0">☁️</span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-blue-900 mb-1">Sign in to save your progress across devices</p>
              <p className="text-sm text-blue-700 mb-3">Your completions are currently saved to this browser only. Create a free account to sync them everywhere.</p>
              <div className="flex gap-3 flex-wrap">
                <a href="/sign-up" className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Create free account
                </a>
                <a href="/login" className="text-sm font-medium text-blue-600 hover:underline self-center">
                  Log in
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ── "Track everything" collapsible ───────────────────────────────── */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden">

          {/* Collapsible header */}
          <button
            onClick={() => setTrackOpen(o => !o)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
            aria-expanded={trackOpen}
          >
            <div>
              <p className="text-lg font-semibold text-gray-900">Track everything</p>
              <p className="text-sm text-gray-400 mt-0.5">Your stats, streak, badges and full history</p>
            </div>
            {/* Chevron */}
            <svg
              className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${trackOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Animated content wrapper */}
          <div
            style={{
              display: 'grid',
              gridTemplateRows: trackOpen ? '1fr' : '0fr',
              transition: 'grid-template-rows 300ms ease',
            }}
          >
            <div style={{ overflow: 'hidden' }}>
              <div className="px-6 pb-8 pt-2 space-y-10 border-t border-gray-100">

                {/* Streak */}
                <div className="flex items-center gap-4 bg-orange-50 border border-orange-200 rounded-2xl px-6 py-5">
                  <span className="text-4xl">{streak > 0 ? '🔥' : '💤'}</span>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {streak > 0 ? `${streak} day streak — don't break it` : 'No active streak'}
                    </p>
                    <p className="text-sm text-gray-500">
                      {streak > 0
                        ? 'Complete one fix today to keep it alive'
                        : 'Complete a guide to start your streak'}
                    </p>
                  </div>
                </div>

                {/* Summary stats */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Skill Points */}
                  <StatCard
                    value={<>⭐ {totalPoints}</>}
                    valueClass="text-purple-600 group-hover:text-purple-700 transition-colors"
                    label="Skill points"
                    onClick={() => scrollTo('skill-tiers-anchor')}
                    hoverBorderClass="hover:border-purple-300"
                  />

                  {/* Guides Completed */}
                  <StatCard
                    value={completedCount}
                    valueClass="text-orange-500 group-hover:text-orange-600 transition-colors"
                    label="Guides completed"
                    onClick={user ? () => scrollTo('your-guides-anchor', true) : undefined}
                    hoverBorderClass="hover:border-orange-300"
                    locked={!user}
                    lockedHint="Sign in to save progress across devices"
                  />

                  {/* Money Saved */}
                  <StatCard
                    value={`£${totalSaved}`}
                    valueClass="text-green-600 group-hover:text-green-700 transition-colors"
                    label="Money saved"
                    href={user ? '/savings-tracker' : undefined}
                    hoverBorderClass="hover:border-green-300"
                    locked={!user}
                    lockedHint="Sign in to save progress across devices"
                  />

                  {/* Badges Earned */}
                  <StatCard
                    value={earnedBadgesCount}
                    valueClass="text-yellow-500 group-hover:text-yellow-600 transition-colors"
                    label="Badges earned"
                    onClick={user ? () => scrollTo('badges-anchor', true) : undefined}
                    hoverBorderClass="hover:border-yellow-300"
                    locked={!user}
                    lockedHint="Sign in to save progress across devices"
                  />
                </div>

                {/* Guide grid — split into sections */}
                <div id="your-guides-anchor" className="scroll-mt-20 space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Your guides</h2>
                    {completedCount === 0 && (
                      <p className="text-sm text-gray-400">
                        Complete a guide and hit &ldquo;Mark as Complete&rdquo; to track progress
                      </p>
                    )}
                  </div>

                  {/* Milestone block */}
                  {nextMilestone && (
                    <div className="flex items-center gap-3 bg-purple-50 border border-purple-200 rounded-xl px-5 py-4 text-sm">
                      <span className="text-lg">🏆</span>
                      <p className="text-purple-800">
                        <span className="font-semibold">
                          Complete {nextMilestone.at - completedCount} more fix{nextMilestone.at - completedCount !== 1 ? 'es' : ''} to unlock:
                        </span>{' '}
                        {nextMilestone.label}
                      </p>
                    </div>
                  )}

                  {/* Completed guides */}
                  {completedGuides.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-3">
                        ✓ Completed ({completedGuides.length})
                      </h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {completedGuides.map((guide) => (
                          <GuideCard
                            key={guide.slug}
                            guide={guide}
                            done
                            date={completionMap[guide.slug]}
                            ownedSet={ownedSet}
                            toolById={toolById}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recommended next */}
                  {recommendedNext.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3">
                        Recommended next
                      </h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {recommendedNext.map((guide) => (
                          <GuideCard
                            key={guide.slug}
                            guide={guide}
                            done={false}
                            ownedSet={ownedSet}
                            toolById={toolById}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Remaining guides */}
                  {remainingGuides.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                        Remaining ({remainingGuides.length})
                      </h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {remainingGuides.map((guide) => (
                          <GuideCard
                            key={guide.slug}
                            guide={guide}
                            done={false}
                            ownedSet={ownedSet}
                            toolById={toolById}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Badges */}
                <div id="badges-anchor" className="scroll-mt-20">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Badges earned</h2>
                    <a href="/badges" className="text-sm text-orange-500 hover:underline">View all →</a>
                  </div>
                  {earnedBadges.length === 0 ? (
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center text-gray-400">
                      <p className="text-3xl mb-2">🔒</p>
                      <p className="text-sm">Complete your first guide to earn a badge.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {earnedBadges.map(badge => (
                        <div key={badge.id} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                          <div className="text-3xl mb-2">{badge.emoji}</div>
                          <p className="text-sm font-semibold text-gray-800">{badge.name}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{badge.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
      <MobileNav />
    </main>
  )
}
