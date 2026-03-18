'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import DashboardSkeleton from '@/components/DashboardSkeleton'
import { useCompletions } from '@/lib/useCompletions'
import { TIERS, getStreak } from '@/lib/progress'
import { totalSavings, tierLevel } from '@/lib/completions'
import { ALL_GUIDES } from '@/lib/guides'
import { ALL_BADGES } from '@/lib/badges'
import { ALL_TOOLS, GUIDE_TOOLS, TOOLS_STORAGE_KEY, type Tool } from '@/lib/tools'
import { RETAILERS } from '@/lib/affiliates'
import StatCard from '@/components/StatCard'

// ─── ToolCard ─────────────────────────────────────────────────────────────────

function ToolCard({
  tool,
  guideNames,
  owned,
}: {
  tool: Tool
  guideNames: string[]
  owned: boolean
}) {
  return (
    <div className={`rounded-xl border p-4 flex flex-col gap-3 ${
      owned ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200'
    }`}>

      {/* Icon + name + category */}
      <div className="flex items-start gap-3">
        <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
          owned ? 'bg-green-100' : 'bg-gray-100'
        }`}>
          {owned ? (
            <svg className="w-4 h-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M19 5.5a4.5 4.5 0 0 1-4.791 4.49c-.873-.055-1.808.128-2.368.8l-6.024 7.23a2.724 2.724 0 1 1-3.837-3.837L9.21 8.16c.672-.56.855-1.495.8-2.368a4.5 4.5 0 0 1 5.873-4.575c.324.105.39.51.15.752L13.34 4.16a.905.905 0 0 0 0 1.277l1.224 1.224a.905.905 0 0 0 1.276 0l2.192-2.192c.241-.241.647-.174.752.15.14.435.216.9.216 1.381ZM4.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div className="min-w-0">
          <p className={`text-sm font-medium leading-snug ${owned ? 'text-gray-400' : 'text-gray-900'}`}>
            {tool.name}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">{tool.category}</p>
        </div>
      </div>

      {/* Guide chips — which guides use this tool */}
      {guideNames.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {guideNames.map(title => (
            <span
              key={title}
              className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md"
            >
              {title}
            </span>
          ))}
        </div>
      )}

      {/* Retailer links — subtle text links, only shown when not owned */}
      {!owned && (
        <div className="flex items-center gap-1.5 flex-wrap">
          <svg className="w-3 h-3 text-gray-300 shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.35 5h12.15a1 1 0 0 1 .98 1.2l-1.5 7.5A1 1 0 0 1 16 14.5H7a1 1 0 0 1-.98-.8L4.342 6.395 4.09 4.51A.25.25 0 0 0 3.842 4.5H1.75A.75.75 0 0 1 1 3.75Zm6.5 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
          </svg>
          <span className="text-xs text-gray-300">Find it at:</span>
          {RETAILERS.map((r, i) => (
            <span key={r.id} className="flex items-center gap-1">
              {i > 0 && <span className="text-gray-200 select-none">·</span>}
              <a
                href={r.buildUrl(tool.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-gray-700 transition-colors inline-flex items-center gap-0.5"
              >
                {r.name}
                <svg className="w-2.5 h-2.5 opacity-40" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Zm6.75-3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V4.06l-6.22 6.22a.75.75 0 0 1-1.06-1.06L14.44 3h-3.19a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
              </a>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const router = useRouter()
  const { completionMap, user, loading, syncing, error } = useCompletions()
  const [ownedTools, setOwnedTools] = useState<string[]>([])
  useEffect(() => {
    try {
      const raw = localStorage.getItem(TOOLS_STORAGE_KEY)
      if (raw) setOwnedTools(JSON.parse(raw))
    } catch {}
  }, [])

  // Redirect guests once auth is resolved — never redirect while still loading
  useEffect(() => {
    if (!loading && !user) router.replace('/login')
  }, [loading, user, router])

  // Show skeleton while auth + data are loading — page structure appears instantly
  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 pb-20 md:pb-0">
        <Nav />
        <DashboardSkeleton />
        <MobileNav />
      </main>
    )
  }

  // Auth resolved, no user → redirect underway
  if (!user) return null

  const completedSlugs = Object.keys(completionMap)
  const completedCount = completedSlugs.length
  const tier = tierLevel(completionMap)
  const nextTier = TIERS[TIERS.indexOf(tier) + 1]

  const totalSaved = totalSavings(completionMap)

  const earnedBadges = ALL_BADGES.filter(b => b.check(completedSlugs, ownedTools))
  const nextGuide = ALL_GUIDES.find(g => !completionMap[g.slug])
  const totalPoints = completedSlugs.reduce(
    (sum, slug) => sum + (ALL_GUIDES.find(g => g.slug === slug)?.skillPoints ?? 0),
    0,
  )

  const streak = getStreak(Object.values(completionMap))
  const nextGuideHasAllTools = nextGuide
    ? (GUIDE_TOOLS[nextGuide.slug] ?? []).length > 0 &&
      (GUIDE_TOOLS[nextGuide.slug] ?? []).every(id => ownedTools.includes(id))
    : false

  // Invert GUIDE_TOOLS: toolId → guide titles that need it
  const toolToGuides: Record<string, string[]> = {}
  for (const [slug, toolIds] of Object.entries(GUIDE_TOOLS)) {
    const guide = ALL_GUIDES.find(g => g.slug === slug)
    if (!guide) continue
    for (const toolId of toolIds) {
      ;(toolToGuides[toolId] ??= []).push(guide.title)
    }
  }

  const ownedToolObjects  = ALL_TOOLS.filter(t =>  ownedTools.includes(t.id))
  const neededToolObjects = ALL_TOOLS.filter(t => !ownedTools.includes(t.id))

  return (
    <main className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Nav />

      {/* Header */}
      <div className="bg-gray-950 text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-0.5">Welcome back</h1>
          <p className="text-gray-400 text-xs md:text-sm truncate">{user.email}</p>
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <span className="text-2xl">{tier.emoji}</span>
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${tier.bg} ${tier.colour}`}>
              {tier.name}
            </span>
            {nextTier && (
              <span className="text-gray-500 text-sm">
                · {nextTier.min - completedCount} guide{nextTier.min - completedCount !== 1 ? 's' : ''} to {nextTier.name}
              </span>
            )}
            {syncing && (
              <span className="flex items-center gap-1.5 text-xs text-gray-500 ml-auto">
                <svg className="w-3 h-3 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Syncing…
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">

        {/* Error banner — shown when Supabase fetch failed and we fell back to local data */}
        {error && (
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-300 rounded-xl px-5 py-4 text-sm text-amber-800">
            <span className="shrink-0 text-lg">⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            value={completedCount}
            valueClass="text-orange-500 group-hover:text-orange-600 transition-colors"
            label="Guides completed"
            href="/progress"
            hoverBorderClass="hover:border-orange-300"
          />
          <StatCard
            value={`£${totalSaved}`}
            valueClass="text-green-600 group-hover:text-green-700 transition-colors"
            label="Money saved"
            href="/savings-tracker"
            hoverBorderClass="hover:border-green-300"
          />
          <StatCard
            value={<>⭐ {totalPoints}</>}
            valueClass="text-purple-600 group-hover:text-purple-700 transition-colors"
            label="Skill points"
            href="/skill-level"
            hoverBorderClass="hover:border-purple-300"
          />
          <StatCard
            value={earnedBadges.length}
            valueClass="text-yellow-500 group-hover:text-yellow-600 transition-colors"
            label="Badges earned"
            href="/badges"
            hoverBorderClass="hover:border-yellow-300"
          />
        </div>

        {/* ── Recommended next guide ─────────────────────────────────── */}
        {nextGuide && (
          <div className="mt-2">
            <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-3">Recommended next</p>
            <a
              href={nextGuide.href}
              className="block bg-white border-2 border-orange-300 rounded-2xl p-6 shadow-sm hover:border-orange-400 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {streak > 0 && (
                    <p className="text-sm text-orange-500 font-medium mb-1">🔥 Keep your streak going</p>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-1">
                    {nextGuide.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">Takes {nextGuide.time} — you can do this now</p>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                    <span>💰 {nextGuide.cost}</span>
                    <span>·</span>
                    <span>⭐ {nextGuide.skillPoints} pts</span>
                  </div>
                  <p className="text-sm font-medium text-green-600 mt-2">{nextGuide.saves}</p>
                  <p className="text-xs text-gray-400 mt-2">Uses tools you already have</p>
                </div>
                <div className="shrink-0 bg-orange-500 text-white rounded-xl px-4 py-2 text-sm font-semibold group-hover:bg-orange-600 transition-colors whitespace-nowrap">
                  Start now →
                </div>
              </div>
            </a>
          </div>
        )}

        {/* ── Streak ─────────────────────────────────────────────────── */}
        {streak > 0 && (
          <div className="bg-orange-50 border border-orange-200 rounded-2xl px-5 py-4 flex items-center gap-3">
            <span className="text-2xl shrink-0" aria-hidden="true">🔥</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{streak} day streak — don&apos;t break it</p>
              <p className="text-xs text-gray-500 mt-0.5">Do this next fix to keep it alive</p>
            </div>
          </div>
        )}

        {/* Current tier card — links to full skill-level breakdown */}
        <a
          href="/skill-level"
          className={`block rounded-2xl border-2 p-6 flex items-center gap-5 hover:opacity-90 transition-opacity ${tier.bg} border-current ${tier.colour}`}
        >
          <span className="text-5xl shrink-0">{tier.emoji}</span>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-1">Your skill level</p>
            <h2 className="text-2xl font-bold">{tier.name}</h2>
            <p className="opacity-70 text-sm mt-0.5">{tier.description}</p>
            <p className="opacity-60 text-sm mt-0.5">You&apos;re building real DIY confidence</p>
            {nextTier && (
              <p className="text-sm mt-2 opacity-60">
                {nextTier.min - completedCount} more fix{nextTier.min - completedCount !== 1 ? 'es' : ''} to reach <strong>{nextTier.name}</strong>
              </p>
            )}
            {!nextTier && (
              <p className="text-sm mt-2 opacity-60 font-semibold">🏆 Maximum tier reached!</p>
            )}
            <p className="text-xs mt-3 font-semibold opacity-70">
              Explore your level →
            </p>
          </div>
        </a>

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
                <div key={badge.id} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">{badge.emoji}</div>
                  <p className="text-sm font-semibold text-gray-800">{badge.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{badge.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tools */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">My tools</h2>
              <p className="text-sm text-gray-400 mt-0.5">You&apos;ve got what you need for your next fix</p>
            </div>
            <a href="/tools" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
              Manage →
            </a>
          </div>

          {/* Tools you own */}
          {ownedToolObjects.length > 0 && (
            <div className="mb-6">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                You own · {ownedToolObjects.length}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {ownedToolObjects.map(tool => (
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    guideNames={toolToGuides[tool.id] ?? []}
                    owned
                  />
                ))}
              </div>
            </div>
          )}

          {/* Tools you still need */}
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
              Still to get · {neededToolObjects.length}
            </p>
            {neededToolObjects.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-xl p-5 text-center text-gray-400">
                <p className="text-sm">You have everything you need — well equipped!</p>
              </div>
            ) : ownedToolObjects.length === 0 ? (
              <>
                <div className="bg-gray-50 border border-dashed border-gray-200 rounded-xl p-4 mb-3 text-center">
                  <p className="text-xs text-gray-400">
                    <a href="/tools" className="text-orange-500 hover:underline">Mark what you already own</a>
                    {' '}to track your kit.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {neededToolObjects.map(tool => (
                    <ToolCard
                      key={tool.id}
                      tool={tool}
                      guideNames={toolToGuides[tool.id] ?? []}
                      owned={false}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {neededToolObjects.map(tool => (
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    guideNames={toolToGuides[tool.id] ?? []}
                    owned={false}
                  />
                ))}
              </div>
            )}
          </div>
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
