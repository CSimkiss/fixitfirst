'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import MobileNav from '@/components/MobileNav'
import EmailCapture from '@/components/EmailCapture'
import Nav from '@/components/Nav'
import Onboarding from '@/components/Onboarding'
import RecentlyViewed from '@/components/RecentlyViewed'
import DifficultyMeter from '@/components/DifficultyMeter'
import CompletedTicker from '@/components/CompletedTicker'
import { GUIDE_TOOLS, TOOLS_STORAGE_KEY } from '@/lib/tools'
import { ALL_GUIDES, MOST_COMMON_GUIDE, searchGuides } from '@/lib/guides'
import { ALL_BADGES } from '@/lib/badges'
import { getCompletionMap } from '@/lib/completions'
import { getStreak } from '@/lib/progress'

// Derive the real count directly from the data so this never goes stale
const GUIDE_COUNT = ALL_GUIDES.length

const SEARCH_PLACEHOLDERS = ['Leaking tap', 'Blocked drain', 'No hot water', 'Hole in wall']

const guides = [
  { title: "Fix a dripping tap",    time: "45 mins", cost: "£2–5",   level: "Beginner", category: "Plumbing",   href: "/guides/fix-a-dripping-tap",    difficulty: 2, saves: "Save £80–150 today" },
  { title: "Put up shelves",        time: "1 hour",  cost: "£10–20", level: "Beginner", category: "Carpentry",  href: "/guides/put-up-shelves",        difficulty: 3, saves: "Save £50–80 today" },
  { title: "Paint a room",          time: "1 day",   cost: "£30–60", level: "Beginner", category: "Decorating", href: "/guides/paint-a-room",          difficulty: 2, saves: "Save £200–500 today" },
  { title: "Unblock a drain",       time: "20 mins", cost: "Free",   level: "Beginner", category: "Plumbing",   href: "/guides/unblock-a-drain",       difficulty: 1, saves: "Save £60–120 today" },
  { title: "Bleed a radiator",      time: "15 mins", cost: "£1–3",   level: "Beginner", category: "Heating",    href: "/guides/bleed-a-radiator",      difficulty: 1, saves: "Save £50–80 today" },
  { title: "Fill a hole in a wall", time: "30 mins", cost: "£3–5",   level: "Beginner", category: "Masonry",    href: "/guides/fill-a-hole-in-a-wall", difficulty: 2, saves: "Save £50–100 today" },
  { title: "Fit a curtain pole",    time: "45 mins", cost: "£0–15",  level: "Beginner", category: "Fitting",    href: "/guides/fit-a-curtain-pole",    difficulty: 2, saves: "Save £50–80 today" },
  { title: "Change a lightbulb",    time: "5 mins",  cost: "£5–15",  level: "Beginner", category: "Electrics",  href: "/guides/change-a-lightbulb",    difficulty: 1, saves: "Save £60–100 today" },
  { title: "Fix a running toilet",  time: "1 hour",  cost: "£10–25", level: "Beginner", category: "Plumbing",   href: "/guides/fix-a-running-toilet",  difficulty: 3, saves: "Save £80–150 today" },
]

const categories = ["All", "⚡ Quick wins", "Plumbing", "Electrics", "Carpentry", "Decorating", "Masonry", "Heating", "Fitting"]

// Prerequisite slugs for bathroom renovation readiness check (mirrors hub)
const BATHROOM_PREREQ_SLUGS = [
  'fix-a-dripping-tap',
  'tile-a-splashback',
  'fill-and-sand-a-wall',
  'replace-a-toilet-seat',
  'paint-a-room',
]

// All renovation phase guide slugs — used to compute rough progress % on homepage
const RENOVATION_PHASE_SLUGS = [
  'strip-out-bathroom', 'remove-silicone-sealant',
  'prep-bathroom-plumbing', 'cap-pipe', 'use-ptfe-tape',
  'prepare-walls-for-tiling', 'check-wall-level', 'fill-a-hole-in-a-wall',
  'tile-a-splashback', 'drill-into-tiles',
  'fit-bathroom-fixtures', 'replace-a-shower-head', 'replace-a-toilet-seat',
  'finish-bathroom-renovation', 'paint-a-room',
]

// Derived dynamically from the guide with the highest popularityScore
const FEATURED_GUIDE = {
  ...MOST_COMMON_GUIDE,
  description: MOST_COMMON_GUIDE.description ??
    `Save £${MOST_COMMON_GUIDE.estimatedSavingsMin}–${MOST_COMMON_GUIDE.estimatedSavingsMax} by doing this yourself instead of calling a pro.`,
}

export default function Home() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [placeholderIdx, setPlaceholderIdx] = useState(0)
  const searchRef = useRef<HTMLDivElement>(null)

  // Personalisation — read from localStorage after mount
  const [completedSlugs, setCompletedSlugs]   = useState<string[]>([])
  const [ownedTools, setOwnedTools]           = useState<string[]>([])
  const [streak, setStreak]                   = useState(0)
  const [completionDates, setCompletionDates] = useState<string[]>([])
  const [loaded, setLoaded]                   = useState(false)
  const [savedBathroomProject, setSavedBathroomProject] = useState(false)

  useEffect(() => {
    try {
      const map  = getCompletionMap()
      const slugs = Object.keys(map)
      const dates = Object.values(map)
      setCompletedSlugs(slugs)
      setCompletionDates(dates)
      setStreak(getStreak(dates))
      const raw = localStorage.getItem(TOOLS_STORAGE_KEY)
      if (raw) setOwnedTools(JSON.parse(raw))
      setSavedBathroomProject(localStorage.getItem('saved-project-bathroom') === 'true')
    } catch {}
    setLoaded(true)
  }, [])

  // Rotate search placeholder every 2.5 s
  useEffect(() => {
    const t = setInterval(() => setPlaceholderIdx(i => (i + 1) % SEARCH_PLACEHOLDERS.length), 2500)
    return () => clearInterval(t)
  }, [])

  // Close autosuggest when clicking outside the search box
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  // ── Smart CTA ──────────────────────────────────────────────────────────────
  // Only computed after load to avoid flash of wrong content
  const lockedBadges = loaded
    ? ALL_BADGES.filter(b => !b.check(completedSlugs, ownedTools, streak, completionDates))
    : []

  const closestBadge = loaded
    ? (lockedBadges
        .map(b => ({ badge: b, progress: b.progress(completedSlugs, ownedTools, streak, completionDates) }))
        .filter(({ progress }) => progress.remaining > 0)
        .sort((a, b) => a.progress.remaining - b.progress.remaining || b.progress.pct - a.progress.pct)[0] ?? null)
    : null

  const oneStepBadge = closestBadge?.progress.remaining === 1 ? closestBadge : null

  // Determine label + destination
  let ctaLabel = 'Start your first fix'
  let ctaHref  = MOST_COMMON_GUIDE.href
  if (loaded && oneStepBadge) {
    ctaLabel = `Finish your ${oneStepBadge.badge.name} ⚡`
    ctaHref  = oneStepBadge.badge.actionHref
  } else if (loaded && completedSlugs.length > 0) {
    ctaLabel = 'Continue your progress'
    ctaHref  = '/progress'
  }

  // ── Renovation state ───────────────────────────────────────────────────────
  const isInRenovation = loaded && (savedBathroomProject || completedSlugs.includes('strip-out-bathroom'))
  const renovationPct  = loaded
    ? Math.round(RENOVATION_PHASE_SLUGS.filter(s => completedSlugs.includes(s)).length / RENOVATION_PHASE_SLUGS.length * 100)
    : 0

  // Which phase are we on? (rough approximation for homepage copy)
  const currentPhaseLabel = (() => {
    if (!loaded) return null
    if (completedSlugs.includes('finish-bathroom-renovation')) return null // done
    if (completedSlugs.includes('fit-bathroom-fixtures')) return 'Phase 6: Finishing'
    if (completedSlugs.includes('tile-a-splashback')) return 'Phase 5: Fitting'
    if (completedSlugs.includes('prepare-walls-for-tiling')) return 'Phase 4: Tiling'
    if (completedSlugs.includes('prep-bathroom-plumbing')) return 'Phase 3: Wall Prep'
    if (completedSlugs.includes('strip-out-bathroom')) return 'Phase 2: Plumbing Prep'
    return 'Phase 1: Strip Out'
  })()

  // ── Autosuggest — uses searchGuides() to match synonyms + searchTerms ─────
  const { guides: suggestionGuides } = query.length >= 2 && showSuggestions
    ? searchGuides(query)
    : { guides: [] }
  const suggestions = suggestionGuides.slice(0, 5)

  const filteredGuides = activeCategory === 'All'
    ? guides
    : activeCategory === '⚡ Quick wins'
    ? guides.filter(g => ALL_GUIDES.find(ag => ag.slug === (g.href.split('/').pop() ?? ''))?.quickWin === true)
    : guides.filter(g => g.category === activeCategory)

  function handleSearch() {
    const q = query.trim()
    if (!q) return
    const { guides: hits, fuzzy } = searchGuides(q)
    // Single unambiguous non-fuzzy match → go straight to the guide
    if (!fuzzy && hits.length === 1) {
      router.push(hits[0].href)
      return
    }
    router.push(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">

      {/* Onboarding modal — only shows on first visit */}
      <Onboarding />

      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-gray-950 text-white px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Fix it yourself.<br />Save £50–£200 every time.
          </h1>
          <p className="text-xl text-gray-300 mb-10">We will. One fix at a time.</p>

          {/* Search with autosuggest */}
          <div ref={searchRef} className="relative max-w-xl mx-auto">
            <input
              type="text"
              value={query}
              onChange={e => { setQuery(e.target.value); setShowSuggestions(true) }}
              onFocus={() => setShowSuggestions(true)}
              onKeyDown={e => {
                if (e.key === 'Enter') { setShowSuggestions(false); handleSearch() }
                if (e.key === 'Escape') setShowSuggestions(false)
              }}
              placeholder={`What needs fixing? e.g. ${SEARCH_PLACEHOLDERS[placeholderIdx]}…`}
              className="w-full bg-white text-gray-900 rounded-xl px-5 py-4 text-lg pr-16 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={() => { setShowSuggestions(false); handleSearch() }}
              className="absolute right-3 top-3 bg-orange-500 text-white px-4 py-2 rounded-lg font-medium"
            >
              Go
            </button>

            {/* Autosuggest dropdown */}
            {suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-xl shadow-lg border border-gray-100 z-20 overflow-hidden text-left">
                {suggestions.map(g => (
                  <a
                    key={g.slug}
                    href={g.href}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 text-sm text-gray-700 hover:text-orange-600 transition-colors border-b border-gray-50 last:border-0"
                  >
                    <span className="text-xl shrink-0">{g.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{g.title}</p>
                      <p className="text-xs text-green-600">{g.saves}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick chips */}
          <div className="flex gap-2 mt-5 flex-wrap justify-center">
            <a
              href={MOST_COMMON_GUIDE.href}
              className="bg-orange-500 hover:bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold border border-orange-400"
            >
              ★ Start here: {MOST_COMMON_GUIDE.title}
            </a>
            {["Blocked drain", "No hot water", "Leaking toilet", "Paint a room"].map((q) => (
              <span
                key={q}
                onClick={() => router.push(`/search?q=${encodeURIComponent(q)}`)}
                className="bg-white/10 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-white/20 border border-white/20"
              >
                {q}
              </span>
            ))}
          </div>

          {/* Smart primary CTA */}
          <div className="mt-8">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-orange-500/30"
            >
              {ctaLabel} →
            </a>
            <p className="text-gray-400 text-sm mt-3">Takes 10–20 mins · No experience needed</p>
          </div>
        </div>
      </section>

      {/* ── Recently viewed — only rendered when user has history ──────────── */}
      <RecentlyViewed />

      {/* ── Your projects — shown when user has saved or started bathroom reno */}
      {loaded && isInRenovation && (
        <section className="px-6 py-6 max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Your projects</h2>
          <a
            href="/projects/bathroom-renovation"
            className="flex items-center gap-4 bg-gray-950 text-white rounded-2xl p-5 hover:opacity-90 transition-opacity group"
          >
            <div className="text-3xl shrink-0">🏗️</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <p className="font-semibold text-white">Bathroom Renovation</p>
                {completedSlugs.includes('strip-out-bathroom') ? (
                  <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full font-medium">In progress</span>
                ) : (
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">Saved</span>
                )}
              </div>
              {renovationPct > 0 ? (
                <>
                  <div className="flex items-center gap-2 mt-1 mb-1">
                    <div className="flex-1 bg-white/10 rounded-full h-1.5">
                      <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: `${renovationPct}%` }} />
                    </div>
                    <span className="text-orange-400 text-xs font-bold shrink-0">{renovationPct}%</span>
                  </div>
                  {currentPhaseLabel && (
                    <p className="text-gray-400 text-xs">Next up: {currentPhaseLabel}</p>
                  )}
                </>
              ) : (
                <p className="text-gray-400 text-sm mt-1">6 phases · 2–5 weekends</p>
              )}
            </div>
            <div className="text-orange-400 font-semibold text-sm shrink-0 group-hover:text-orange-300">
              Continue →
            </div>
          </a>
        </section>
      )}

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="bg-orange-500 text-white py-6 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          <div><div className="text-2xl font-bold">{GUIDE_COUNT}</div><div className="text-orange-100 text-sm">Guides</div></div>
          <div><div className="text-2xl font-bold">Free</div><div className="text-orange-100 text-sm">To get started</div></div>
          <div><div className="text-2xl font-bold">6 tiers</div><div className="text-orange-100 text-sm">Beginner to builder</div></div>
          <div><div className="text-2xl font-bold">100s saved</div><div className="text-orange-100 text-sm">vs calling a pro</div></div>
        </div>
      </section>

      {/* ── Social proof / progress ticker ────────────────────────────────── */}
      <div className="px-6 py-4 max-w-5xl mx-auto">
        <CompletedTicker completedCount={loaded ? completedSlugs.length : -1} />
      </div>

      {/* ── Featured fix ──────────────────────────────────────────────────── */}
      <section className="px-6 py-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Start here — most common fix</span>
        </div>
        <a
          href={FEATURED_GUIDE.href}
          className="block border-2 border-orange-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group bg-orange-50"
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">{FEATURED_GUIDE.category}</span>
                <DifficultyMeter level={FEATURED_GUIDE.difficulty} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">{FEATURED_GUIDE.title}</h2>
              <p className="text-3xl font-black text-green-600 mb-3">{FEATURED_GUIDE.saves}</p>
              <p className="text-gray-600 text-sm mb-4 max-w-xl">{FEATURED_GUIDE.description}</p>
              <div className="flex gap-4 text-sm text-gray-500 flex-wrap">
                <span>⏱ {FEATURED_GUIDE.time}</span>
                <span>💰 {FEATURED_GUIDE.cost}</span>
                <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">{FEATURED_GUIDE.level}</span>
              </div>
            </div>
            <div className="flex-shrink-0 hidden sm:block">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center text-4xl">{FEATURED_GUIDE.emoji}</div>
            </div>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm group-hover:bg-orange-600 transition-colors">
            Start this fix →
          </div>
        </a>
      </section>

      {/* ── Project hook — personalised based on renovation state ─────────── */}
      {loaded && (() => {
        // Active renovation users: "Continue your renovation"
        if (isInRenovation && renovationPct < 100) {
          return (
            <section className="px-6 pb-8 max-w-5xl mx-auto">
              <a
                href="/projects/bathroom-renovation"
                className="block bg-gray-950 text-white rounded-2xl p-6 hover:opacity-90 transition-opacity group"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-orange-400 mb-2">Pick up where you left off</p>
                <h2 className="text-xl font-bold text-white mb-1">Continue your bathroom renovation</h2>
                <p className="text-gray-400 text-sm mb-4">
                  {renovationPct > 0
                    ? `You're ${renovationPct}% through — most people never get this far`
                    : 'Your project is saved and waiting — Phase 1 is ready to start'}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white/10 rounded-full h-1.5">
                    <div className="bg-orange-500 h-1.5 rounded-full transition-all" style={{ width: `${renovationPct}%` }} />
                  </div>
                  <span className="text-orange-400 font-bold text-sm shrink-0 group-hover:text-orange-300">
                    Continue →
                  </span>
                </div>
              </a>
            </section>
          )
        }

        // 2+ completions, not yet in renovation: "Ready for something bigger?"
        if (!isInRenovation && completedSlugs.length >= 2) {
          const prereqCount = BATHROOM_PREREQ_SLUGS.filter(s => completedSlugs.includes(s)).length
          const prereqPct   = Math.round((prereqCount / BATHROOM_PREREQ_SLUGS.length) * 100)
          return (
            <section className="px-6 pb-8 max-w-5xl mx-auto">
              <a
                href="/projects/bathroom-renovation"
                className="block bg-gray-950 text-white rounded-2xl p-6 hover:opacity-90 transition-opacity group"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-orange-400 mb-2">Ready for something bigger?</p>
                <h2 className="text-xl font-bold text-white mb-1">Renovate your bathroom yourself</h2>
                <p className="text-gray-400 text-sm mb-4">
                  {prereqPct > 0
                    ? `You're already ${prereqPct}% ready — most people never get this far`
                    : 'A guided 6-phase project — strip out, tile, fit, and finish without a contractor'}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white/10 rounded-full h-1.5">
                    <div className="bg-orange-500 h-1.5 rounded-full transition-all" style={{ width: `${prereqPct}%` }} />
                  </div>
                  <span className="text-orange-400 font-bold text-sm shrink-0 group-hover:text-orange-300">
                    View project →
                  </span>
                </div>
              </a>
            </section>
          )
        }

        return null
      })()}

      {/* ── Popular guides ────────────────────────────────────────────────── */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular Guides</h2>
          <a href="/guides" className="text-orange-500 text-sm font-medium hover:underline">View all guides →</a>
        </div>
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${cat === activeCategory ? "bg-orange-500 text-white border-orange-500" : "bg-white text-gray-600 border-gray-200 hover:border-orange-300"}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-400 mb-4">Pick any — or start with the one above</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGuides.map((guide) => {
            const slug = guide.href.split('/').pop() ?? ''
            const toolCount = GUIDE_TOOLS[slug]?.length ?? 0
            const guideData = ALL_GUIDES.find(g => g.slug === slug)
            const isUK = guideData?.ukSpecific ?? false
            const isQuickWin = guideData?.quickWin ?? false
            const cardClass = "border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-md cursor-pointer transition-all group"
            const cardContent = (
              <>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{guide.category}</span>
                  <DifficultyMeter level={guide.difficulty} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">{guide.title}</h3>
                {/* Value first: savings prominent directly under title */}
                <p className="text-sm font-bold text-green-600 mb-2">{guide.saves}</p>
                {(toolCount > 0 || isUK || isQuickWin) && (
                  <div className="flex gap-1.5 flex-wrap mb-3">
                    {isQuickWin && (
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">⚡ Quick win</span>
                    )}
                    {toolCount > 0 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">🔧 {toolCount} tool{toolCount !== 1 ? 's' : ''}</span>
                    )}
                    {isUK && (
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">🇬🇧 UK advice</span>
                    )}
                  </div>
                )}
                <div className="flex gap-4 text-sm text-gray-500 mt-2">
                  <span>{guide.time}</span>
                  <span>{guide.cost}</span>
                  <span className="ml-auto bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs">{guide.level}</span>
                </div>
              </>
            )
            return guide.href
              ? <a key={guide.title} href={guide.href} className={cardClass}>{cardContent}</a>
              : <div key={guide.title} className={cardClass}>{cardContent}</div>
          })}
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────────── */}
      <section className="bg-gray-50 px-6 py-10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg font-semibold text-gray-500 mb-8">How FixItFirst works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Find your fix", desc: "Search what's broken or browse by category. Instant results." },
              { step: "2", title: "Follow the steps", desc: "Clear, beginner-friendly instructions. No jargon, no assumptions." },
              { step: "3", title: "Save money", desc: "Skip the callout fee. Most fixes cost under £10 and take under an hour." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Email capture ─────────────────────────────────────────────────── */}
      <section className="bg-gray-950 text-white px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-wide mb-4">Coming soon</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get notified when we launch</h2>
          <p className="text-gray-300 mb-8 text-lg">We&apos;re building something that will save you hundreds of pounds a year. Be the first to know.</p>
          <EmailCapture source="homepage" />
          <p className="text-gray-500 text-sm mt-4">No spam. Unsubscribe any time.</p>
        </div>
      </section>

      <MobileNav />
    </main>
  )
}
