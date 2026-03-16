'use client'

import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { TIERS, getTier, getStreak } from '@/lib/progress'
import { ALL_GUIDES } from '@/lib/guides'
import { useCompletions } from '@/lib/useCompletions'

const CATEGORY_COLOURS: Record<string, string> = {
  Plumbing:   'bg-blue-50 text-blue-700',
  Electrics:  'bg-yellow-50 text-yellow-700',
  Carpentry:  'bg-amber-50 text-amber-700',
  Decorating: 'bg-purple-50 text-purple-700',
  Masonry:    'bg-stone-50 text-stone-700',
  Heating:    'bg-red-50 text-red-700',
  Fitting:    'bg-teal-50 text-teal-700',
}

export default function ProgressPage() {
  const { completionMap, user, loading, syncing, error } = useCompletions()

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
  const tier = getTier(completedCount)
  const streak = getStreak(Object.values(completionMap))
  const nextTier = TIERS[TIERS.indexOf(tier) + 1]
  const totalPoints = completedSlugs.reduce((sum, slug) => {
    return sum + (ALL_GUIDES.find(g => g.slug === slug)?.skillPoints ?? 0)
  }, 0)
  const maxPoints = ALL_GUIDES.reduce((sum, g) => sum + g.skillPoints, 0)

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      {/* Hero */}
      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <p className="text-gray-400 text-sm mb-2">Your skill level</p>
        <div className="inline-flex items-center gap-3 mb-2">
          <span className="text-4xl">{tier.emoji}</span>
          <h1 className="text-4xl md:text-5xl font-bold">{tier.name}</h1>
        </div>
        <p className="text-gray-300 text-lg mb-1">{tier.description}</p>
        <p className="text-gray-400 text-sm">
          {completedCount} of {ALL_GUIDES.length} guides completed
          {nextTier && ` · ${nextTier.min - completedCount} more to reach ${nextTier.name}`}
          {!nextTier && ' · All guides complete!'}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-5 py-2">
          <span className="text-orange-400 text-lg font-bold">⭐ {totalPoints}</span>
          <span className="text-gray-400 text-sm">/ {maxPoints} skill points</span>
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
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-10">

        {/* Streak */}
        <div className="flex items-center gap-4 bg-orange-50 border border-orange-200 rounded-2xl px-6 py-5">
          <span className="text-4xl">{streak > 0 ? '🔥' : '💤'}</span>
          <div>
            <p className="text-2xl font-bold text-gray-900">
              {streak > 0 ? `${streak} day streak` : 'No active streak'}
            </p>
            <p className="text-sm text-gray-500">
              {streak > 0
                ? 'Complete a guide today to keep it going'
                : 'Complete a guide to start your streak'}
            </p>
          </div>
        </div>

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

        {/* Tier roadmap */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Skill tiers</h2>
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

        {/* Guide grid */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Your guides</h2>
          {completedCount === 0 && (
            <p className="text-sm text-gray-400 mb-4">
              Complete a guide and hit &ldquo;Mark as Complete&rdquo; to track your progress here.
            </p>
          )}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_GUIDES.map((guide) => {
              const done = !!completionMap[guide.slug]
              const date = completionMap[guide.slug]
              return (
                <a
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className={`rounded-xl border p-4 flex gap-3 items-start hover:border-orange-300 transition-all group ${
                    done ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'
                  }`}
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
              )
            })}
          </div>
        </div>

      </div>
      <MobileNav />
    </main>
  )
}
