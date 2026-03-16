'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { useCompletions } from '@/lib/useCompletions'
import { getTier, TIERS } from '@/lib/progress'
import { ALL_GUIDES } from '@/lib/guides'
import { ALL_BADGES } from '@/lib/badges'
import { TOOLS_STORAGE_KEY } from '@/lib/tools'

// Midpoint savings per guide (£)
const SAVINGS_MIDPOINT: Record<string, number> = {
  'fix-a-dripping-tap':      115,
  'put-up-shelves':           65,
  'paint-a-room':            350,
  'unblock-a-drain':          90,
  'bleed-a-radiator':         65,
  'fill-a-hole-in-a-wall':    75,
  'fit-a-curtain-pole':       65,
  'change-a-lightbulb':       80,
  'fix-a-running-toilet':    115,
  'fix-a-leaking-pipe-joint': 90,
  'replace-a-toilet-seat':    60,
  'fix-low-water-pressure':   80,
  'unblock-a-toilet':         90,
  'replace-a-shower-head':    60,
  'tile-a-splashback':       225,
  'strip-wallpaper':         150,
  'repair-a-ceiling-crack':  115,
  'fill-and-sand-a-wall':     75,
  'fix-a-squeaky-floorboard': 50,
  'fix-a-sticking-door':      65,
  'hang-a-picture-frame':     45,
  'fix-a-broken-cabinet-hinge': 45,
  'fix-a-sticking-drawer':    40,
  'replace-a-plug-fuse':      45,
  'reset-a-tripped-circuit-breaker': 50,
  'replace-a-light-switch':   80,
  'fix-a-doorbell':           60,
  'put-up-shelves':           65,
  'repressurise-a-boiler':    65,
  'fix-a-cold-radiator':      65,
  'boiler-breakdown':        200,
}

export default function DashboardPage() {
  const router = useRouter()
  const { completionMap, user, mounted } = useCompletions()
  const [ownedTools, setOwnedTools] = useState<string[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(TOOLS_STORAGE_KEY)
      if (raw) setOwnedTools(JSON.parse(raw))
    } catch {}
  }, [])

  // Redirect guests to login
  useEffect(() => {
    if (mounted && !user) router.replace('/login')
  }, [mounted, user, router])

  if (!mounted || !user) return null

  const completedSlugs = Object.keys(completionMap)
  const completedCount = completedSlugs.length
  const tier = getTier(completedCount)
  const nextTier = TIERS[TIERS.indexOf(tier) + 1]

  const totalSaved = completedSlugs.reduce(
    (sum, slug) => sum + (SAVINGS_MIDPOINT[slug] ?? 0),
    0,
  )

  const earnedBadges = ALL_BADGES.filter(b => b.check(completedSlugs, ownedTools))

  // First guide the user hasn't completed yet
  const nextGuide = ALL_GUIDES.find(g => !completionMap[g.slug])

  const totalPoints = completedSlugs.reduce(
    (sum, slug) => sum + (ALL_GUIDES.find(g => g.slug === slug)?.skillPoints ?? 0),
    0,
  )

  return (
    <main className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Nav />

      {/* Header */}
      <div className="bg-gray-950 text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 text-sm mb-1">Welcome back</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-1 truncate">{user.email}</h1>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-2xl">{tier.emoji}</span>
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${tier.bg} ${tier.colour}`}>
              {tier.name}
            </span>
            {nextTier && (
              <span className="text-gray-500 text-sm">
                · {nextTier.min - completedCount} guide{nextTier.min - completedCount !== 1 ? 's' : ''} to {nextTier.name}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-5 text-center">
            <p className="text-3xl font-black text-orange-500">{completedCount}</p>
            <p className="text-sm text-gray-500 mt-1">Guides completed</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-5 text-center">
            <p className="text-3xl font-black text-green-600">£{totalSaved}</p>
            <p className="text-sm text-gray-500 mt-1">Money saved</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-5 text-center">
            <p className="text-3xl font-black text-purple-600">⭐ {totalPoints}</p>
            <p className="text-sm text-gray-500 mt-1">Skill points</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-5 text-center">
            <p className="text-3xl font-black text-yellow-500">{earnedBadges.length}</p>
            <p className="text-sm text-gray-500 mt-1">Badges earned</p>
          </div>
        </div>

        {/* Current tier card */}
        <div className={`rounded-2xl border-2 p-6 flex items-center gap-5 ${tier.bg} border-current ${tier.colour}`}>
          <span className="text-5xl shrink-0">{tier.emoji}</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-1">Current tier</p>
            <h2 className="text-2xl font-bold">{tier.name}</h2>
            <p className="opacity-70 text-sm mt-0.5">{tier.description}</p>
            {nextTier && (
              <p className="text-sm mt-2 opacity-60">
                Complete {nextTier.min - completedCount} more guide{nextTier.min - completedCount !== 1 ? 's' : ''} to reach <strong>{nextTier.name}</strong>
              </p>
            )}
            {!nextTier && (
              <p className="text-sm mt-2 opacity-60 font-semibold">🏆 Maximum tier reached!</p>
            )}
          </div>
        </div>

        {/* Continue learning */}
        {nextGuide && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Continue learning</h2>
            <a
              href={nextGuide.href}
              className="block bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-2">Next recommended guide</p>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-2">
                    {nextGuide.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                    <span>⏱ {nextGuide.time}</span>
                    <span>·</span>
                    <span>💰 {nextGuide.cost}</span>
                    <span>·</span>
                    <span>⭐ {nextGuide.skillPoints} pts</span>
                  </div>
                  <p className="text-sm font-medium text-green-600 mt-2">{nextGuide.saves}</p>
                </div>
                <div className="shrink-0 bg-orange-500 text-white rounded-xl px-4 py-2 text-sm font-semibold group-hover:bg-orange-600 transition-colors whitespace-nowrap">
                  Start →
                </div>
              </div>
            </a>
          </div>
        )}

        {/* Badges */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Badges earned</h2>
            <a href="/badges" className="text-sm text-orange-500 hover:underline">View all →</a>
          </div>
          {earnedBadges.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center text-gray-400">
              <p className="text-3xl mb-2">🔒</p>
              <p className="text-sm">Complete your first guide to earn a badge.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {earnedBadges.map(badge => (
                <div
                  key={badge.id}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-center"
                >
                  <div className="text-3xl mb-2">{badge.emoji}</div>
                  <p className="text-sm font-semibold text-gray-800">{badge.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{badge.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'My Progress', href: '/progress', emoji: '📊' },
            { label: 'Savings Tracker', href: '/savings-tracker', emoji: '💰' },
            { label: 'All Guides', href: '/guides', emoji: '📚' },
            { label: 'My Profile', href: '/profile', emoji: '👤' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-orange-300 transition-all"
            >
              <div className="text-2xl mb-1">{link.emoji}</div>
              <p className="text-sm font-medium text-gray-700">{link.label}</p>
            </a>
          ))}
        </div>

      </div>
      <MobileNav />
    </main>
  )
}
