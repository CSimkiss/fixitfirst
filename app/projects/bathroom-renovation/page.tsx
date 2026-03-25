'use client'

import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { GUIDE_BY_SLUG } from '@/lib/guides'
import { TOOLS_STORAGE_KEY, ALL_TOOLS } from '@/lib/tools'
import { getCompletionMap } from '@/lib/completions'
import { screwfixToolUrl, amazonToolUrl } from '@/lib/affiliates'

// ─── Share button ─────────────────────────────────────────────────────────────

function ShareButton() {
  const [copied, setCopied] = useState(false)

  function handleShare() {
    const text = 'I just renovated my bathroom with FixItFirst — stripped it, tiled it, fitted it, and finished it myself. https://fixit-first.co.uk/projects/bathroom-renovation'
    if (navigator.share) {
      navigator.share({ title: 'I renovated my bathroom', text }).catch(() => {})
    } else {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      }).catch(() => {})
    }
  }

  return (
    <button
      onClick={handleShare}
      className="w-full border border-white/20 text-gray-300 hover:bg-white/10 px-5 py-3 rounded-xl text-sm font-semibold transition-colors text-center"
    >
      {copied ? '✅ Copied to clipboard' : '↗ Share your renovation'}
    </button>
  )
}

// ─── Tool IDs aggregated across all 6 phases ─────────────────────────────────

const BATHROOM_TOOL_IDS = [
  'drill',
  'drill-bits',
  'adjustable-spanner',
  'spirit-level',
  'tape-measure',
  'sealant-gun',
  'filling-knife',
  'rubber-gloves',
  'ptfe-tape',
  'bucket',
  'utility-knife',
  'sandpaper',
  'screwdriver-flat',
  'screwdriver-cross',
  'pliers',
]

// ─── Prerequisite guides — build these skills first ───────────────────────────

const PREREQ_SLUGS = [
  'fix-a-dripping-tap',
  'tile-a-splashback',
  'fill-and-sand-a-wall',
  'replace-a-toilet-seat',
  'paint-a-room',
]

// ─── Project phases ───────────────────────────────────────────────────────────

type PhaseGuide = {
  slug?: string
  title: string
  note?: string
  placeholder?: boolean
}

type Phase = {
  number: number
  icon: string
  title: string
  description: string
  time: string
  weekendLabel?: string
  guides: PhaseGuide[]
  /**
   * The slug of the guide that serves as the primary entry point for this phase.
   * Undefined means no dedicated guide exists yet — show a "coming soon" fallback
   * rather than routing users to an unrelated guide.
   */
  entrySlug?: string
}

const PHASES: Phase[] = [
  {
    number: 1,
    icon: '🪣',
    title: 'Strip Out',
    description: 'Remove old fittings, sealant, and accessories before anything else',
    time: 'Half a day',
    weekendLabel: 'Weekend 1',
    entrySlug: 'strip-out-bathroom',
    guides: [
      { slug: 'strip-out-bathroom', title: 'Strip out your bathroom', note: 'Isolate water, remove fixtures, prep surfaces' },
      { title: 'Remove remaining fixtures and accessories', note: 'Towel rails, mirrors, shelves', placeholder: true },
    ],
  },
  {
    number: 2,
    icon: '🔧',
    title: 'Plumbing Prep',
    description: 'This is where your bathroom starts to take shape — sort all pipework before anything goes on the walls',
    time: '1–3 hours',
    weekendLabel: 'Weekend 2',
    entrySlug: 'prep-bathroom-plumbing',
    guides: [
      { slug: 'prep-bathroom-plumbing',      title: 'Prep bathroom plumbing',        note: 'Isolate, disconnect, cap — before anything goes in' },
      { slug: 'fix-a-dripping-tap',          title: 'Fit new taps or basin taps',    note: 'Replace like-for-like or upgrade' },
      { slug: 'fix-a-leaking-pipe-joint',    title: 'Check and repair pipe joints',  note: 'Do this before any tiling' },
      { slug: 'fix-low-water-pressure',      title: 'Check water pressure',          note: 'Confirm pressure before fitting new fixtures' },
    ],
  },
  {
    number: 3,
    icon: '🧱',
    title: 'Wall Prep',
    description: 'Smooth, fill, and prime all surfaces before any tiling or painting',
    time: '45 mins – 2 hours',
    weekendLabel: 'Weekend 2–3',
    entrySlug: 'prepare-walls-for-tiling',
    guides: [
      { slug: 'prepare-walls-for-tiling', title: 'Prepare walls for tiling',    note: 'Clean, fill, sand, and prime before any tiles go on' },
      { slug: 'fill-a-hole-in-a-wall',    title: 'Fill holes and cracks',       note: 'For deeper repairs before the prep coat' },
      { slug: 'fill-and-sand-a-wall',     title: 'Fill and sand walls smooth',  note: 'Full-wall smoothing if needed' },
    ],
  },
  {
    number: 4,
    icon: '⬜',
    title: 'Tiling',
    description: 'Tile the shower area, splashback, or feature wall',
    time: 'Half a day – full day',
    weekendLabel: 'Weekend 3–4',
    entrySlug: 'tile-a-splashback',
    guides: [
      { slug: 'tile-a-splashback', title: 'Tile splashback or shower wall', note: 'Use waterproof adhesive throughout' },
      { title: 'Grout the tiles', note: 'Leave adhesive 24hrs to cure before grouting', placeholder: true },
    ],
  },
  {
    number: 5,
    icon: '🚿',
    title: 'Fitting',
    description: 'Install new fixtures — shower head, toilet seat, towel rail, and accessories',
    time: '1–3 hours',
    weekendLabel: 'Weekend 4',
    entrySlug: 'fit-bathroom-fixtures',
    guides: [
      { slug: 'fit-bathroom-fixtures',  title: 'Fit basin, accessories & finishing elements', note: 'Mark level, drill tiles carefully, seal all edges' },
      { slug: 'replace-a-shower-head',  title: 'Fit new shower head' },
      { slug: 'replace-a-toilet-seat',  title: 'Fit new toilet seat' },
    ],
  },
  {
    number: 6,
    icon: '✨',
    title: 'Finishing',
    description: 'Seal, paint, and do final checks — the satisfying part',
    time: '2–4 hours',
    weekendLabel: 'Weekend 5',
    entrySlug: 'finish-bathroom-renovation',
    guides: [
      { slug: 'finish-bathroom-renovation', title: 'Seal, paint & final checks', note: 'Use sanitary silicone and inspect every joint before use' },
      { slug: 'paint-a-room', title: 'Paint walls and ceiling', note: 'Use moisture-resistant paint for bathrooms' },
    ],
  },
]

// ─── Phase 1 tools (for the "Before you start" bundle) ───────────────────────

const PHASE1_TOOL_IDS = ['utility-knife', 'adjustable-spanner', 'screwdriver-flat', 'screwdriver-cross', 'rubber-gloves', 'bucket']

// ─── Phase status logic ───────────────────────────────────────────────────────

type PhaseStatus = 'locked' | 'available' | 'in-progress' | 'completed'

function getPhaseStatus(
  phase: Phase,
  completedSlugs: string[],
  phaseIdx: number,
  phases: Phase[],
  loaded: boolean,
): PhaseStatus {
  if (!loaded) return 'available'

  const real = phase.guides.filter(g => g.slug && !g.placeholder)
  if (real.length === 0) return 'available'

  const done = real.filter(g => g.slug && completedSlugs.includes(g.slug)).length
  if (done === real.length) return 'completed'
  if (done > 0) return 'in-progress'

  // Lock if the previous phase's non-placeholder guides aren't finished
  if (phaseIdx > 0) {
    const prev = phases[phaseIdx - 1]
    const prevReal = prev.guides.filter(g => g.slug && !g.placeholder)
    if (prevReal.length > 0) {
      const prevDone = prevReal.filter(g => g.slug && completedSlugs.includes(g.slug)).length
      if (prevDone < prevReal.length) return 'locked'
    }
  }

  return 'available'
}

// ─── Pro-required items ───────────────────────────────────────────────────────

const PRO_ITEMS = [
  {
    level: 'red' as const,
    title: 'Moving pipework inside walls',
    desc: 'First-fix plumbing (moving soil pipes, relocating supply pipes) must be done by a qualified plumber.',
  },
  {
    level: 'red' as const,
    title: 'Electrical work in bathroom zones',
    desc: 'Bathrooms are "special locations" under UK Part P. Lights, extractor fans, and sockets require a certified electrician.',
  },
  {
    level: 'amber' as const,
    title: 'Structural changes',
    desc: 'Removing walls, moving doorways, or changing the floor structure — get a structural engineer or builder first.',
  },
  {
    level: 'amber' as const,
    title: 'Wet room or walk-in shower drainage',
    desc: 'Tanking and specialist waterproofing is best done professionally to prevent hidden damp damage.',
  },
]

// ─── Materials list ───────────────────────────────────────────────────────────

const MATERIALS = [
  'Floor and wall tiles (measure carefully + 10% extra)',
  'Waterproof tile adhesive and spacers',
  'Grout (colour-matched to your tiles)',
  'Silicone sealant (mould-resistant)',
  'Moisture-resistant paint for walls and ceiling',
  'PTFE tape for plumbing joints',
  'Rawl plugs (mixed sizes)',
  'New basin / toilet / shower fittings',
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BathroomRenovation() {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([])
  const [ownedTools, setOwnedTools]         = useState<string[]>([])
  const [savedProject, setSavedProject]     = useState(false)
  const [loaded, setLoaded]                 = useState(false)

  useEffect(() => {
    try {
      const map = getCompletionMap()
      setCompletedSlugs(Object.keys(map))
      const raw = localStorage.getItem(TOOLS_STORAGE_KEY)
      if (raw) setOwnedTools(JSON.parse(raw))
      setSavedProject(localStorage.getItem('saved-project-bathroom') === 'true')
    } catch {}
    setLoaded(true)
  }, [])

  // ── Tool calculations ──────────────────────────────────────────────────────
  const bathroomTools = BATHROOM_TOOL_IDS
    .map(id => ALL_TOOLS.find(t => t.id === id))
    .filter(Boolean) as (typeof ALL_TOOLS[number])[]

  const ownedCount   = bathroomTools.filter(t => ownedTools.includes(t.id)).length
  const missingTools = bathroomTools.filter(t => !ownedTools.includes(t.id))
  const hasMostTools = !loaded || ownedCount >= Math.ceil(bathroomTools.length * 0.6)

  // ── Readiness calculation ──────────────────────────────────────────────────
  const completedPrereqs = PREREQ_SLUGS.filter(s => completedSlugs.includes(s))
  const readinessPct     = Math.round((completedPrereqs.length / PREREQ_SLUGS.length) * 100)
  const hasStarted       = loaded && completedSlugs.length > 0

  // ── Renovation progress ────────────────────────────────────────────────────
  const allPhaseGuideSlugs = [...new Set(
    PHASES.flatMap(p => p.guides.filter(g => g.slug && !g.placeholder).map(g => g.slug!))
  )]
  const completedPhaseGuideCount = loaded
    ? allPhaseGuideSlugs.filter(s => completedSlugs.includes(s)).length
    : 0
  const renovationPct = allPhaseGuideSlugs.length > 0
    ? Math.round((completedPhaseGuideCount / allPhaseGuideSlugs.length) * 100)
    : 0
  const hasStartedRenovation = loaded && completedPhaseGuideCount > 0
  const renovationComplete   = loaded && renovationPct === 100

  // ── "Your next step" — first incomplete real guide in the earliest open phase ─
  const nextStep = (loaded && !renovationComplete)
    ? (() => {
        for (let i = 0; i < PHASES.length; i++) {
          const phase  = PHASES[i]
          const status = getPhaseStatus(phase, completedSlugs, i, PHASES, loaded)
          if (status === 'locked' || status === 'completed') continue
          for (const pg of phase.guides) {
            if (pg.placeholder || !pg.slug) continue
            if (completedSlugs.includes(pg.slug)) continue
            const guide = GUIDE_BY_SLUG[pg.slug]
            if (!guide) continue
            return { guide, phase }
          }
        }
        return null
      })()
    : null

  // "Next up" phase: first phase that is 'available' after a completed one
  const phase1Status = loaded ? getPhaseStatus(PHASES[0], completedSlugs, 0, PHASES, loaded) : 'available'
  const showPhase2NextUp = loaded && phase1Status === 'completed'

  // Phase 1 tool bundle — tools and which ones the user is missing
  const phase1Tools = PHASE1_TOOL_IDS
    .map(id => ALL_TOOLS.find(t => t.id === id))
    .filter(Boolean) as (typeof ALL_TOOLS[number])[]
  const missingPhase1Tools = phase1Tools.filter(t => !ownedTools.includes(t.id))

  // ── Save project ───────────────────────────────────────────────────────────
  function toggleSave() {
    const next = !savedProject
    setSavedProject(next)
    try { localStorage.setItem('saved-project-bathroom', String(next)) } catch {}
  }

  // Phase 1 entry: only navigate if a dedicated strip-out guide exists.
  // Never route users to an unrelated guide just because it appears in Phase 1.
  const phase1EntryGuide = PHASES[0].entrySlug ? GUIDE_BY_SLUG[PHASES[0].entrySlug] : null
  const phase1HasEntry   = !!phase1EntryGuide

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      {/* ── 1. HEADER ──────────────────────────────────────────────────────── */}
      <section className="bg-gray-950 text-white px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/projects" className="text-orange-400 text-sm mb-5 inline-block hover:underline">← All projects</a>

          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              🏗️ Tier 5 — Builder
            </span>
            <span className="text-gray-500 text-xs">Project hub · 6 phases</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            Renovate Your Bathroom<br />
            <span className="text-orange-400">Step by Step</span>
          </h1>
          <p className="text-gray-300 text-lg mb-7 max-w-xl">
            Turn your bathroom into something new — one phase at a time.
            No contractor needed for most of it.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3 mb-7">
            {[
              { label: 'Total time',        value: '2–5 weekends' },
              { label: 'Materials budget',  value: '£300–£2,000+' },
              { label: 'Difficulty',        value: '5 / 5' },
              { label: 'Phases',            value: '6 stages' },
            ].map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl px-4 py-2.5 text-center min-w-[100px]">
                <div className="font-bold text-white text-sm">{s.value}</div>
                <div className="text-gray-400 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Renovation progress bar — shown once user has started */}
          {loaded && renovationPct > 0 && (
            <div className="mb-5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-gray-300">Renovation progress</span>
                <span className="text-sm font-bold text-orange-400">{renovationPct}% complete</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all duration-700"
                  style={{ width: `${renovationPct}%` }}
                />
              </div>
            </div>
          )}

          {/* "Started / complete" message */}
          {loaded && renovationComplete && (
            <div className="bg-green-900/40 border border-green-600/40 rounded-lg px-4 py-2 mb-5 text-sm text-green-300 font-bold">
              🏆 Renovation complete — you did it
            </div>
          )}
          {loaded && hasStartedRenovation && !renovationComplete && (
            <div className="bg-green-900/30 border border-green-700/30 rounded-lg px-4 py-2 mb-5 text-sm text-green-300 font-medium">
              Nice — you've started your renovation 🪣
            </div>
          )}

          {/* Tool status chip — only shown once localStorage is read */}
          {loaded && (
            <div className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg mb-6 ${
              hasMostTools
                ? 'bg-green-900/40 text-green-300 border border-green-700/50'
                : 'bg-yellow-900/40 text-yellow-300 border border-yellow-700/50'
            }`}>
              {hasMostTools
                ? `✅ You have most tools needed (${ownedCount} / ${bathroomTools.length})`
                : `⚠️ You're missing ${missingTools.length} key tool${missingTools.length !== 1 ? 's' : ''} — see the list below`}
            </div>
          )}

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap items-start">
            {phase1HasEntry ? (
              <a
                href={phase1EntryGuide!.href}
                className="bg-orange-500 hover:bg-orange-400 text-white px-7 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-orange-500/20"
              >
                Start with Phase 1 →
              </a>
            ) : (
              <div>
                <div className="inline-flex items-center gap-2 bg-gray-700 text-gray-400 px-7 py-3 rounded-xl font-semibold cursor-default select-none">
                  📋 Phase 1 guide coming soon
                </div>
                <p className="text-gray-500 text-xs mt-2 max-w-xs">
                  We haven't written the dedicated strip-out guide yet.
                  Use the phase checklist below to understand the process.
                </p>
                <a
                  href="/search?q=bathroom"
                  className="inline-block mt-2 text-orange-400 text-sm hover:underline"
                >
                  Browse related bathroom guides →
                </a>
              </div>
            )}
            <div className="flex flex-col gap-1">
              <button
                onClick={toggleSave}
                className={`px-7 py-3 rounded-xl font-semibold border transition-colors ${
                  savedProject
                    ? 'bg-white/20 border-white/30 text-white'
                    : 'border-white/20 text-gray-300 hover:bg-white/10'
                }`}
              >
                {savedProject ? '✅ Project saved' : '🔖 Save project'}
              </button>
              <p className="text-xs text-center text-gray-500">
                {savedProject
                  ? 'Saved — we\'ll track your progress'
                  : 'Save this project — we\'ll guide you through each step'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. READINESS BLOCK ─────────────────────────────────────────────── */}
      <section className="px-6 py-8 max-w-3xl mx-auto">
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
          {hasStarted ? (
            <>
              {/* Progress header */}
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <h2 className="font-bold text-gray-900 text-lg">Your project readiness</h2>
                <span className="text-2xl font-black text-orange-500">{readinessPct}%</span>
              </div>
              <div className="w-full bg-orange-100 rounded-full h-2.5 mb-5">
                <div
                  className="bg-orange-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${readinessPct}%` }}
                />
              </div>

              {readinessPct > 0 && readinessPct < 100 && (
                <p className="text-xs text-orange-600 font-medium mb-4">
                  You&apos;re already {readinessPct}% ready — most people never get this far
                </p>
              )}

              <p className="text-sm text-gray-600 mb-4">
                Complete these foundational guides to build the skills this project needs:
              </p>

              {/* Prerequisite checklist */}
              <div className="space-y-2">
                {PREREQ_SLUGS.map(slug => {
                  const guide = GUIDE_BY_SLUG[slug]
                  const done  = completedSlugs.includes(slug)
                  return (
                    <a
                      key={slug}
                      href={guide?.href ?? '#'}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-orange-100 hover:border-orange-300 transition-colors group"
                    >
                      <span className="text-lg shrink-0">{done ? '✅' : '❌'}</span>
                      <span className={`flex-1 text-sm font-medium min-w-0 ${
                        done ? 'text-gray-400 line-through' : 'text-gray-800 group-hover:text-orange-600'
                      }`}>
                        {guide?.title ?? slug}
                      </span>
                      {!done && guide && (
                        <span className="text-xs text-orange-500 font-medium shrink-0">
                          {guide.time} →
                        </span>
                      )}
                    </a>
                  )
                })}
              </div>

              {readinessPct < 100 && (
                <p className="text-xs text-orange-600 mt-4 font-medium">
                  ↑ Complete these first to make this renovation much smoother
                </p>
              )}
              {readinessPct === 100 && (
                <p className="text-sm text-green-700 font-semibold mt-4 bg-green-50 p-3 rounded-xl">
                  🎉 You have all the prerequisite skills. You're ready to start!
                </p>
              )}
            </>
          ) : (
            /* Not started state */
            <div className="text-center py-2">
              <p className="text-3xl mb-3">🧱</p>
              <h2 className="font-bold text-gray-900 mb-2">Build your skills first</h2>
              <p className="text-sm text-gray-600 mb-5 max-w-sm mx-auto">
                A full bathroom renovation uses the same skills as smaller guides — taps, tiling, filling, painting.
                Complete a few of those first and this project becomes manageable.
              </p>
              <a
                href="/guides"
                className="inline-block bg-orange-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-600 transition-colors"
              >
                Browse starter guides →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── 2b. YOUR NEXT STEP ─────────────────────────────────────────────── */}
      {nextStep && (
        <section className="px-6 pb-2 max-w-3xl mx-auto">
          <a
            href={nextStep.guide.href}
            className="flex items-center gap-4 bg-gray-950 text-white rounded-2xl px-5 py-4 hover:bg-gray-900 transition-colors group"
          >
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 text-lg group-hover:bg-orange-400 transition-colors">
              →
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide font-medium">
                Your next step · Phase {nextStep.phase.number}: {nextStep.phase.title}
              </p>
              <p className="font-semibold text-white text-sm leading-snug">{nextStep.guide.title}</p>
              <p className="text-xs text-gray-400 mt-0.5">{nextStep.guide.time}</p>
            </div>
            <span className="text-orange-400 font-bold text-sm shrink-0">Continue →</span>
          </a>
        </section>
      )}

      {/* ── 3. PHASES ──────────────────────────────────────────────────────── */}
      <section className="px-6 pb-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">The 6 phases</h2>
        <p className="text-gray-500 text-sm mb-1">
          Work through each phase in order. The sequence matters — plumbing before walls, walls before tiles.
        </p>
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <p className="text-gray-400 text-xs">2–5 weekends total</p>
          {loaded && phase1Status !== 'completed' && (
            <span className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full">
              You could complete Phase 1 today
            </span>
          )}
        </div>

        {/* Before you start Phase 1 — tool bundle */}
        {loaded && phase1Status === 'available' && (
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-6">
            <h3 className="font-semibold text-gray-900 mb-1">Before you start Phase 1</h3>
            <p className="text-sm text-gray-500 mb-4">
              You'll need these tools for the strip-out.
              {missingPhase1Tools.length > 0
                ? ` You're missing ${missingPhase1Tools.length} — grab them before you start.`
                : " You have everything you need — you're ready to go."}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
              {phase1Tools.map(tool => {
                const owned = ownedTools.includes(tool.id)
                return (
                  <div
                    key={tool.id}
                    className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs ${
                      owned ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'
                    }`}
                  >
                    <span className="shrink-0">{owned ? '✅' : '⚠️'}</span>
                    <span className={`flex-1 font-medium min-w-0 truncate ${owned ? 'text-green-800' : 'text-gray-700'}`}>
                      {tool.name}
                    </span>
                    {!owned && (
                      <a
                        href={screwfixToolUrl(tool.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 font-semibold hover:underline shrink-0"
                      >
                        Get
                      </a>
                    )}
                  </div>
                )
              })}
            </div>
            {missingPhase1Tools.length > 0 && (
              <a
                href={screwfixToolUrl('bathroom strip out tools kit')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-red-600 font-semibold hover:underline"
              >
                Get everything for this step →
              </a>
            )}
          </div>
        )}

        <div className="space-y-4">
          {PHASES.map((phase, idx) => {
            const status = getPhaseStatus(phase, completedSlugs, idx, PHASES, loaded)
            const isLocked    = status === 'locked'
            const isCompleted = status === 'completed'
            const isInProg    = status === 'in-progress'
            const isNextUp    = phase.number === 2 && showPhase2NextUp

            const statusCfg = {
              locked:       { label: '🔒 Locked',       cls: 'bg-gray-100 text-gray-400' },
              available:    { label: 'Available',        cls: 'bg-blue-50 text-blue-600' },
              'in-progress':{ label: '⚡ In Progress',   cls: 'bg-orange-100 text-orange-600' },
              completed:    { label: '✓ Completed',      cls: 'bg-green-100 text-green-600' },
            }[status]

            return (
              <div
                key={phase.number}
                className={`border rounded-2xl overflow-hidden transition-all ${
                  isLocked    ? 'border-gray-100 bg-gray-50/60 opacity-70'    :
                  isCompleted ? 'border-green-200 bg-green-50'                :
                  isInProg    ? 'border-orange-200 bg-orange-50'              :
                  isNextUp    ? 'border-orange-300 bg-white ring-1 ring-orange-200' :
                                'border-gray-200 bg-white'
                }`}
              >
                {/* Phase header */}
                <div className="p-5 flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-bold shrink-0 ${
                    isCompleted ? 'bg-green-500 text-white' :
                    isInProg    ? 'bg-orange-500 text-white' :
                    isLocked    ? 'bg-gray-200 text-gray-400' :
                                  'bg-gray-900 text-white'
                  }`}>
                    {isCompleted ? '✓' : phase.number}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-bold text-gray-900 text-lg leading-tight">{phase.title}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusCfg.cls}`}>
                        {statusCfg.label}
                      </span>
                      {isNextUp && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-orange-500 text-white">
                          Next up
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{phase.description}</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs text-gray-400">⏱ {phase.time}</span>
                      {phase.weekendLabel && (
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{phase.weekendLabel}</span>
                      )}
                    </div>
                  </div>

                  <span className="text-2xl hidden sm:block shrink-0">{phase.icon}</span>
                </div>

                {/* Guide list — hidden when locked */}
                {!isLocked && (
                  <div className="px-5 pb-5 space-y-2 border-t border-gray-100 pt-4">
                    {isCompleted && (
                      <p className="text-xs text-green-700 font-semibold bg-green-100 border border-green-200 rounded-lg px-3 py-2">
                        ✓ Phase {phase.number} complete — keep going
                      </p>
                    )}
                    {phase.guides.map((pg, gi) => {
                      const guide    = pg.slug ? GUIDE_BY_SLUG[pg.slug] : null
                      const isDone   = pg.slug ? completedSlugs.includes(pg.slug) : false
                      const isHolder = pg.placeholder

                      if (isHolder) {
                        return (
                          <div
                            key={gi}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-dashed border-gray-200"
                          >
                            <span className="text-base shrink-0">📋</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-500">{pg.title}</p>
                              {pg.note && <p className="text-xs text-gray-400 mt-0.5">{pg.note}</p>}
                            </div>
                            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                              Guide coming soon
                            </span>
                          </div>
                        )
                      }

                      if (!guide) return null

                      return (
                        <a
                          key={gi}
                          href={guide.href}
                          className={`flex items-center gap-3 p-3 rounded-xl border transition-all group ${
                            isDone
                              ? 'bg-green-50 border-green-200'
                              : 'bg-white border-gray-200 hover:border-orange-300 hover:shadow-sm'
                          }`}
                        >
                          <span className="text-xl shrink-0">{isDone ? '✅' : guide.emoji}</span>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium ${
                              isDone ? 'text-gray-400 line-through' : 'text-gray-800 group-hover:text-orange-600'
                            }`}>
                              {pg.title}
                            </p>
                            {pg.note && (
                              <p className="text-xs text-gray-400 mt-0.5">{pg.note}</p>
                            )}
                            {!isDone && guide.estimatedSavingsMax > 0 && (
                              <p className="text-xs text-green-600 font-medium mt-0.5">{guide.saves}</p>
                            )}
                          </div>
                          <div className="text-right shrink-0 text-xs text-gray-400 space-y-0.5">
                            <div>{guide.time}</div>
                            <div>{guide.cost}</div>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                )}

                {/* Locked message */}
                {isLocked && (
                  <div className="px-5 pb-4 pt-0">
                    <p className="text-sm text-gray-400">
                      Complete Phase {phase.number - 1} first to unlock this stage
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 3b. COMPLETION CARD ────────────────────────────────────────────── */}
      {renovationComplete && (
        <section className="px-6 pb-8 max-w-3xl mx-auto">
          <div className="bg-gray-950 text-white rounded-2xl overflow-hidden">

            {/* Top celebration band */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-5 flex items-center gap-4">
              <span className="text-4xl shrink-0">🏆</span>
              <div>
                <p className="font-black text-white text-xl leading-tight">You renovated your bathroom</p>
                <p className="text-orange-100 text-sm mt-0.5">All 6 phases complete</p>
              </div>
            </div>

            <div className="p-6 space-y-6">

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-orange-400">2–5</p>
                  <p className="text-gray-300 text-xs mt-1">weekends invested</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-green-400">£800–£2k</p>
                  <p className="text-gray-300 text-xs mt-1">saved vs a professional</p>
                </div>
              </div>

              {/* Savings detail */}
              <div className="bg-green-900/30 border border-green-700/30 rounded-xl p-4">
                <p className="text-green-300 text-sm font-semibold mb-1">What you saved</p>
                <p className="text-gray-300 text-sm">
                  You saved approximately <span className="text-white font-bold">£800–£2,000</span> compared
                  to hiring a contractor for the full renovation — stripping, plumbing prep,
                  wall prep, tiling, fitting, and finishing.
                </p>
              </div>

              {/* Skills gained */}
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-3">Skills you built</p>
                <div className="space-y-2">
                  {[
                    'Isolating water and safely removing fixtures',
                    'Wall prep, filling, and priming to tile-ready standard',
                    'Setting out and tiling a bathroom wall',
                    'Drilling into tiles and fitting functional fixtures',
                    'Applying silicone sealant and doing a professional final inspection',
                  ].map(skill => (
                    <div key={skill} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-green-400 shrink-0 mt-0.5">✓</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next project */}
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-3">Take on your next project</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="/projects"
                    className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl p-4 transition-colors group"
                  >
                    <p className="text-2xl mb-2">🍳</p>
                    <p className="font-semibold text-white text-sm group-hover:text-orange-300 transition-colors">Kitchen renovation</p>
                    <p className="text-gray-400 text-xs mt-1">The skills transfer directly</p>
                  </a>
                  <a
                    href="/projects"
                    className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl p-4 transition-colors group"
                  >
                    <p className="text-2xl mb-2">🌿</p>
                    <p className="font-semibold text-white text-sm group-hover:text-orange-300 transition-colors">Garden project</p>
                    <p className="text-gray-400 text-xs mt-1">Decking, fencing, and paving</p>
                  </a>
                </div>
              </div>

              {/* Share */}
              <ShareButton />

            </div>
          </div>
        </section>
      )}

      {/* ── 4. WHAT YOU'LL NEED ────────────────────────────────────────────── */}
      <section className="px-6 py-10 max-w-3xl mx-auto border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">What you'll need</h2>
        <p className="text-sm text-gray-500 mb-6">
          Aggregated across all 6 phases.
          {loaded && ownedCount > 0 && ` You already own ${ownedCount} of these.`}
        </p>

        {/* Tools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
          {bathroomTools.map(tool => {
            const owned = ownedTools.includes(tool.id)
            return (
              <div
                key={tool.id}
                className={`flex items-center gap-3 p-3 rounded-xl border text-sm ${
                  owned ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'
                }`}
              >
                <span className="text-base">{owned ? '✅' : '⚠️'}</span>
                <span className={`flex-1 font-medium min-w-0 ${owned ? 'text-green-800' : 'text-gray-700'}`}>
                  {tool.name}
                </span>
                {!owned && (
                  <div className="flex gap-1.5 shrink-0">
                    <a
                      href={screwfixToolUrl(tool.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-red-600 text-white px-2 py-0.5 rounded font-medium hover:bg-red-700 transition-colors"
                    >
                      Screwfix
                    </a>
                    <a
                      href={amazonToolUrl(tool.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded font-medium hover:bg-orange-600 transition-colors"
                    >
                      Amazon
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Materials list */}
        <div className="bg-gray-50 rounded-2xl p-5 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide text-gray-500">Materials to buy</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {MATERIALS.map(item => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-gray-300 mt-1 shrink-0">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliate bundle CTA */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 text-center">
          <p className="font-bold text-gray-900 mb-1">Get everything in one go</p>
          <p className="text-sm text-gray-500 mb-4">
            Shop bathroom renovation tools and materials at Screwfix or Amazon
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href={screwfixToolUrl('bathroom renovation tools')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              Shop Screwfix →
            </a>
            <a
              href={amazonToolUrl('bathroom renovation kit')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              Shop Amazon →
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. WHEN TO CALL A PRO ──────────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100 px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-1">When to call a professional</h2>
          <p className="text-sm text-gray-500 mb-6">
            Most of this project is DIY-able. But some work requires a qualified trades person — either by law or to avoid expensive hidden damage.
          </p>

          <div className="space-y-3">
            {PRO_ITEMS.map(item => (
              <div
                key={item.title}
                className={`flex gap-4 rounded-xl p-4 border ${
                  item.level === 'red'
                    ? 'bg-red-50 border-red-100'
                    : 'bg-amber-50 border-amber-100'
                }`}
              >
                <span className="text-xl shrink-0 mt-0.5">
                  {item.level === 'red' ? '🔴' : '🟡'}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trades CTA */}
          <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-gray-900 mb-1">Not ready for this stage?</p>
              <p className="text-sm text-gray-500">
                Find a vetted local professional for the parts that need one.
              </p>
            </div>
            <a
              href="/find-a-pro"
              className="shrink-0 border border-gray-300 text-gray-700 px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Find a local pro →
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM CTA ──────────────────────────────────────────────────── */}
      <section className="bg-gray-950 text-white px-6 py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-3">Ready to start?</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Begin with Phase 1 — Strip Out</h2>
          {phase1HasEntry ? (
            <>
              <p className="text-gray-400 text-sm mb-7 max-w-md mx-auto">
                The hardest part is starting. Phase 1 takes half a day, uses existing guides, and costs nothing beyond a Stanley knife.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a
                  href={phase1EntryGuide!.href}
                  className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-3.5 rounded-xl font-bold transition-colors shadow-lg shadow-orange-500/25"
                >
                  Start Phase 1 →
                </a>
                <a
                  href="/guides"
                  className="border border-white/20 text-gray-300 hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold transition-colors"
                >
                  Browse all guides
                </a>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-400 text-sm mb-3 max-w-md mx-auto">
                The dedicated strip-out guide is coming soon. In the meantime, use the Phase 1 checklist above — or build your skills with related bathroom guides first.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a
                  href="/search?q=bathroom"
                  className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-3.5 rounded-xl font-bold transition-colors"
                >
                  Browse bathroom guides →
                </a>
                <a
                  href="/guides"
                  className="border border-white/20 text-gray-300 hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold transition-colors"
                >
                  All guides
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      <MobileNav />
    </main>
  )
}
