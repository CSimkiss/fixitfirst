'use client'

import { useEffect, useState } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { COMPLETED_GUIDES_KEY, TIERS, getTier, getStreak } from '@/lib/progress'

const ALL_GUIDES = [
  { slug: 'fix-a-dripping-tap',    title: 'Fix a dripping tap',    category: 'Plumbing'   },
  { slug: 'unblock-a-drain',       title: 'Unblock a drain',       category: 'Plumbing'   },
  { slug: 'fix-a-running-toilet',  title: 'Fix a running toilet',  category: 'Plumbing'   },
  { slug: 'change-a-lightbulb',    title: 'Change a lightbulb',    category: 'Electrics'  },
  { slug: 'put-up-shelves',        title: 'Put up shelves',        category: 'Carpentry'  },
  { slug: 'fit-a-curtain-pole',    title: 'Fit a curtain pole',    category: 'Fitting'    },
  { slug: 'paint-a-room',          title: 'Paint a room',          category: 'Decorating' },
  { slug: 'fill-a-hole-in-a-wall', title: 'Fill a hole in a wall', category: 'Masonry'    },
  { slug: 'bleed-a-radiator',      title: 'Bleed a radiator',      category: 'Heating'    },
]

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
  const [completionMap, setCompletionMap] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem(COMPLETED_GUIDES_KEY)
    setCompletionMap(raw ? JSON.parse(raw) : {})
    setMounted(true)
  }, [])

  if (!mounted) return null

  const completedCount = Object.keys(completionMap).length
  const tier = getTier(completedCount)
  const streak = getStreak(Object.values(completionMap))
  const nextTier = TIERS[TIERS.indexOf(tier) + 1]

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
                  <div className="min-w-0">
                    <p className={`text-sm font-semibold leading-snug group-hover:text-orange-500 transition-colors ${done ? 'text-green-900' : 'text-gray-700'}`}>
                      {guide.title}
                    </p>
                    <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${CATEGORY_COLOURS[guide.category] ?? 'bg-gray-100 text-gray-600'}`}>
                      {guide.category}
                    </span>
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
