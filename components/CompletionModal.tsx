'use client'

import { useEffect } from 'react'
import { TIERS } from '@/lib/progress'
import { totalSavings, tierLevel } from '@/lib/completions'
import { ALL_GUIDES, getTopRecommendations, type Guide, type RecommendationReason } from '@/lib/guides'
import { ALL_BADGES } from '@/lib/badges'
import { amazonToolUrl } from '@/lib/affiliates'
import type { CompletionMap } from '@/lib/completions'

// ─── Renovation prereqs — mirror of PREREQ_SLUGS in the hub ───────────────────
const RENOVATION_PREREQ_SLUGS = [
  'fix-a-dripping-tap',
  'tile-a-splashback',
  'fill-and-sand-a-wall',
  'replace-a-toilet-seat',
  'paint-a-room',
]

// ─── Per-guide tool suggestion ────────────────────────────────────────────────
// One curated tool per guide slug shown as an affiliate nudge in the modal.

const GUIDE_TOOL_SUGGESTION: Record<string, { name: string; searchTerm: string }> = {
  'fix-a-dripping-tap':             { name: 'Adjustable Spanner',       searchTerm: 'adjustable spanner' },
  'bleed-a-radiator':               { name: 'Radiator Bleed Key',        searchTerm: 'radiator bleed key' },
  'bleed-all-radiators':            { name: 'Radiator Bleed Key',        searchTerm: 'radiator bleed key' },
  'unblock-a-drain':                { name: 'Cup Plunger',               searchTerm: 'cup plunger' },
  'unblock-a-toilet':               { name: 'Toilet Plunger',            searchTerm: 'toilet plunger heavy duty' },
  'fill-a-hole-in-a-wall':          { name: 'Filling Knife Set',         searchTerm: 'filling knife set' },
  'fill-and-sand-a-wall':           { name: 'Filling Knife Set',         searchTerm: 'filling knife set' },
  'paint-a-room':                   { name: 'Paint Roller Kit',          searchTerm: 'paint roller kit' },
  'fit-a-curtain-pole':             { name: 'Power Drill',               searchTerm: 'cordless drill' },
  'put-up-shelves':                 { name: 'Power Drill',               searchTerm: 'cordless drill' },
  'change-a-lightbulb':             { name: 'LED Bulbs Multipack',       searchTerm: 'LED bulb bayonet B22' },
  'fix-a-running-toilet':           { name: 'Toilet Repair Kit',         searchTerm: 'toilet cistern repair kit' },
  'fix-a-leaking-pipe-joint':       { name: 'PTFE Tape',                 searchTerm: 'PTFE tape plumbers' },
  'replace-a-toilet-seat':          { name: 'Quick-Release Toilet Seat', searchTerm: 'toilet seat white quick release' },
  'fix-low-water-pressure':         { name: 'Adjustable Spanner',        searchTerm: 'adjustable spanner' },
  'replace-a-shower-head':          { name: 'Chrome Shower Head',        searchTerm: 'shower head chrome adjustable' },
  'repressurise-a-boiler':          { name: 'Boiler Filling Loop',       searchTerm: 'boiler filling loop' },
  'fix-a-cold-radiator':            { name: 'Radiator Bleed Key',        searchTerm: 'radiator bleed key' },
  'fix-a-noisy-radiator':           { name: 'Radiator Bleed Key',        searchTerm: 'radiator bleed key' },
  'replace-a-plug-fuse':            { name: 'Fuse Assortment Pack',      searchTerm: 'plug fuse 3amp 13amp pack' },
  'replace-a-light-switch':         { name: 'Single Light Switch',       searchTerm: 'single gang light switch white' },
  'fix-a-doorbell':                 { name: 'Wireless Doorbell Kit',     searchTerm: 'wireless doorbell kit' },
  'fix-a-squeaky-floorboard':       { name: 'Deck Screws Pack',          searchTerm: 'wood screws self countersinking' },
  'fix-a-sticking-door':            { name: 'Surform Hand Planer',       searchTerm: 'surform plane wood door' },
  'fix-a-sticking-drawer':          { name: 'Furniture Wax Lubricant',   searchTerm: 'furniture wax paste lubricant' },
  'hang-a-picture-frame':           { name: 'Picture Hooks Set',         searchTerm: 'picture hooks assorted pack' },
  'fix-a-broken-cabinet-hinge':     { name: 'Soft-Close Cabinet Hinges', searchTerm: 'soft close cabinet hinge pack' },
  'tile-a-splashback':              { name: 'Ready-Mixed Tile Adhesive', searchTerm: 'tile adhesive ready mixed 5kg' },
  'strip-wallpaper':                { name: 'Wide Wallpaper Scraper',    searchTerm: 'wallpaper scraper wide blade' },
  'repair-a-ceiling-crack':         { name: 'Flexible Ceiling Filler',   searchTerm: 'flexible filler ceiling crack' },
  'replace-a-smoke-alarm-battery':  { name: '9V PP3 Batteries',          searchTerm: '9V battery PP3 pack' },
  'install-a-smart-thermostat':     { name: 'Smart Thermostat Kit',      searchTerm: 'smart thermostat heating' },
  'draft-proof-door-window':        { name: 'Self-Adhesive Draught Strip', searchTerm: 'draught excluder self adhesive strip' },
  'unblock-a-gutter':               { name: 'Gutter Cleaning Scoop',     searchTerm: 'gutter cleaning scoop tool' },
  'fix-a-fence-panel':              { name: 'Fence Panel Clips',         searchTerm: 'fence panel bracket clips' },
  'lay-decking-boards':             { name: 'Stainless Decking Screws',  searchTerm: 'stainless steel decking screws' },
  'fix-a-garden-tap':               { name: 'Outdoor Tap Repair Kit',    searchTerm: 'outdoor tap repair kit' },
  // Micro guides (Phase 1–2 renovation helpers)
  'remove-silicone-sealant':        { name: 'Silicone Remover Tool',     searchTerm: 'silicone sealant remover tool' },
  'use-ptfe-tape':                  { name: 'PTFE Tape',                 searchTerm: 'PTFE tape plumbers' },
  'cap-pipe':                       { name: 'Pipe Stop-End Caps Pack',   searchTerm: 'push fit pipe stop end cap 15mm' },
  'check-wall-level':               { name: 'Spirit Level',              searchTerm: 'spirit level 600mm' },
  'drill-into-tiles':               { name: 'Tile Drill Bit Set',        searchTerm: 'tile drill bit set ceramic porcelain' },
  // Renovation phase guides
  'strip-out-bathroom':             { name: 'Tile Removal Chisel Set',   searchTerm: 'tile chisel removal bolster set' },
  'prep-bathroom-plumbing':         { name: 'Pipe Cutter',               searchTerm: 'pipe cutter 15mm copper' },
  'prepare-walls-for-tiling':       { name: 'Tiling Primer',             searchTerm: 'tiling primer PVA adhesion' },
  'fit-bathroom-fixtures':          { name: 'Silicone Sealant Gun',      searchTerm: 'silicone sealant gun mastic' },
  'finish-bathroom-renovation':     { name: 'Grout Spreader',            searchTerm: 'grout spreader float tile' },
}

// ─── Per-guide "What you just learned" skills ─────────────────────────────────

const GUIDE_LEARNINGS: Record<string, string[]> = {
  'fix-a-dripping-tap':       ['How to isolate the water supply', 'Replacing a tap washer', 'Using PTFE tape on threads'],
  'fix-a-running-toilet':     ['How a cistern fill valve works', 'Replacing a cistern flap valve', 'Adjusting float arm height'],
  'unblock-a-drain':          ['Using a plunger correctly', 'Clearing a P-trap blockage', 'When to use a drain snake'],
  'bleed-a-radiator':         ['How to identify an airlock', 'Using a radiator bleed key', 'Repressurising a boiler after bleeding'],
  'change-a-lightbulb':       ['Identifying bulb fittings (B22, E27, GU10)', 'Safely switching off at the circuit', 'Matching wattage and colour temperature'],
  'fill-a-hole-in-a-wall':    ['Prepping a hole for filler', 'Applying and feathering filler', 'Sanding and priming for a flat finish'],
  'paint-a-room':             ['Cutting in before rolling', 'Maintaining a wet edge', 'Two thin coats vs one thick coat'],
  'put-up-shelves':           ['Locating studs and solid masonry', 'Drilling and plugging into plaster walls', 'Getting shelves level with a spirit level'],
  'fit-a-curtain-pole':       ['Wall anchor types and when to use them', 'Measuring for bracket spacing', 'Drilling into different wall materials'],
  'bleed-all-radiators':      ['Bleeding in the correct order', 'Checking boiler pressure afterwards', 'Identifying radiators that need bleeding most'],
  'fill-and-sand-a-wall':     ['Filling large holes in stages', 'Feathering filler edges flat', 'Sanding without over-sanding paint'],
  'fix-a-leaking-pipe-joint': ['Identifying joint types (compression vs push-fit)', 'Using PTFE tape correctly', 'Tightening compression fittings without over-torquing'],
  'replace-a-toilet-seat':    ['Removing corroded seat bolts', 'Fitting quick-release hinges', 'Measuring toilet pan to buy the right size'],
  'fix-a-cold-radiator':      ['Diagnosing sludge vs airlock', 'Using a bleed key correctly', 'When to call a heating engineer'],
  'fix-a-squeaky-floorboard': ['Finding the joist beneath the board', 'Fixing a board with screws vs nails', 'Using graphite powder as a temporary fix'],
  'fix-a-sticking-door':      ['Diagnosing door binding location', 'Planing a door without removing it', 'Adjusting hinge depth'],
}

// Generic fallbacks by category
const CATEGORY_LEARNINGS: Record<string, string[]> = {
  Plumbing:   ['How to safely isolate water before any plumbing job', 'Identifying your pipe type (copper vs plastic)', 'When a job needs a qualified plumber'],
  Electrics:  ['Always isolate at the fusebox before starting', 'Testing for current with a voltage tester', 'What Part P means for DIY electrical work'],
  Carpentry:  ['Marking accurately before cutting', 'Choosing the right fixing for the wall type', 'Pre-drilling to prevent wood split'],
  Decorating: ['Prep is 80% of a good paint finish', 'Two thin coats always beats one thick coat', 'Masking tape saves hours of touching up'],
  Heating:    ['Bleeding order matters — start furthest from the boiler', 'Boiler pressure range: 1–1.5 bar is normal', 'Sludge vs airlock — they need different fixes'],
  Tiling:     ['Plumb and level before placing a single tile', 'Back-buttering for better adhesion', 'Spacer sizing affects the grout line look'],
  Fitting:    ['Wall anchor types: plastic plug, cavity anchor, toggle bolt', 'Always scan walls before drilling', 'Spirit level in two axes, not just one'],
  Masonry:    ['Match filler type to the depth of the hole', 'Always prime before painting over filler', 'Flexible filler for cracks that might move'],
}

// ─── Props ────────────────────────────────────────────────────────────────────

type Props = {
  slug: string
  completionMap: CompletionMap   // already includes this slug (post-completion)
  onClose: () => void
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CompletionModal({ slug, completionMap, onClose }: Props) {
  const guide = ALL_GUIDES.find(g => g.slug === slug)

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  if (!guide) return null

  // ── Derived stats ──────────────────────────────────────────────────────────
  const completedCount = Object.keys(completionMap).length
  const allSaved       = totalSavings(completionMap)
  const tier           = tierLevel(completionMap)
  const tierIdx        = TIERS.indexOf(tier)
  const nextTier       = TIERS[tierIdx + 1] ?? null

  const thisGuideSaving =
    guide.estimatedSavingsMin > 0
      ? Math.round((guide.estimatedSavingsMin + guide.estimatedSavingsMax) / 2)
      : 0

  // Tier progress bar (0–100%)
  const tierProgress = nextTier
    ? Math.min(100, Math.round(((completedCount - tier.min) / (nextTier.min - tier.min)) * 100))
    : 100
  const guidesToNextTier = nextTier ? nextTier.min - completedCount : 0

  const recommendations = getTopRecommendations(completionMap, 3)
  const nextGuide       = recommendations[0]?.guide ?? null
  const nextReason      = recommendations[0]?.reason ?? 'easiest'
  const toolSuggestion  = GUIDE_TOOL_SUGGESTION[slug] ?? null

  // Renovation readiness funnel
  const prereqCompleted    = RENOVATION_PREREQ_SLUGS.filter(s => completionMap[s]).length
  const prereqPct          = Math.round((prereqCompleted / RENOVATION_PREREQ_SLUGS.length) * 100)
  const showRenovationFunnel = prereqCompleted > 0 && prereqCompleted < RENOVATION_PREREQ_SLUGS.length

  // ── Detect newly unlocked badges (guide-based only; streak/tool badges need
  //    extra context we don't carry here and are handled on the badges page) ──
  const slugsAfter  = Object.keys(completionMap)
  const slugsBefore = slugsAfter.filter(s => s !== slug)
  const newlyUnlockedBadges = ALL_BADGES.filter(
    b => !b.check(slugsBefore, [], 0) && b.check(slugsAfter, [], 0),
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm px-0 md:px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Sheet / Modal */}
      <div className="relative w-full md:max-w-lg bg-white rounded-t-3xl md:rounded-3xl shadow-2xl max-h-[92dvh] flex flex-col overflow-hidden">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="bg-green-500 px-6 pt-6 pb-5 text-white flex-shrink-0">
          {/* Drag handle (mobile) */}
          <div className="w-10 h-1 rounded-full bg-white/40 mx-auto mb-4 md:hidden" />

          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-semibold uppercase tracking-wide opacity-80">
                  Guide completed
                </span>
              </div>
              <h2 className="text-xl font-bold leading-snug">{guide.title}</h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white text-lg leading-none"
            >
              ×
            </button>
          </div>

          {/* Saving for this guide */}
          {thisGuideSaving > 0 && (
            <div className="mt-3 inline-flex items-center gap-1.5 bg-white/20 rounded-full px-4 py-1.5">
              <span className="text-lg">💰</span>
              <span className="font-bold text-sm">~£{thisGuideSaving} saved on this fix</span>
            </div>
          )}
        </div>

        {/* ── Scrollable body ─────────────────────────────────────────────── */}
        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-5">

          {/* Money saved — prominent hero stat */}
          {allSaved > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center">
              <p className="text-3xl font-black text-green-600">£{allSaved}</p>
              <p className="text-sm font-semibold text-green-700 mt-0.5">total saved</p>
              <p className="text-xs text-green-600 mt-1">
                {completedCount > 1
                  ? `${completedCount} jobs you didn't need to pay someone else for`
                  : "That's one less call-out fee"}
              </p>
            </div>
          )}

          {/* Running totals */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-orange-500">{completedCount}</p>
              <p className="text-xs text-gray-500 mt-0.5">
                guide{completedCount !== 1 ? 's' : ''} completed
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-green-600">
                {thisGuideSaving > 0 ? `~£${thisGuideSaving}` : '—'}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">saved this fix</p>
            </div>
          </div>

          {/* What you just learned */}
          {learnedSkills.length > 0 && (
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-3">
                What you just learned
              </p>
              <ul className="space-y-1.5">
                {learnedSkills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-blue-400 mt-0.5 shrink-0">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* What this unlocks */}
          {recommendations.length > 1 && (
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-600 mb-3">
                What this unlocks
              </p>
              <ul className="space-y-1.5">
                {recommendations.slice(1).map(({ guide: g }) => (
                  <li key={g.slug} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-purple-400 mt-0.5 shrink-0">→</span>
                    <span>
                      <span className="font-medium">{g.title}</span>
                      <span className="text-gray-400 ml-1">— {g.saves}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tier progress */}
          <div className={`rounded-2xl p-4 ${tier.bg}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{tier.emoji}</span>
                <span className={`text-sm font-bold ${tier.colour}`}>{tier.name}</span>
              </div>
              {nextTier ? (
                <span className={`text-xs font-medium ${tier.colour} opacity-70`}>
                  {guidesToNextTier === 1
                    ? `One more fix to reach ${nextTier.name}`
                    : `${guidesToNextTier} more fixes to reach ${nextTier.name}`}
                </span>
              ) : (
                <span className={`text-xs font-bold ${tier.colour}`}>Max tier! 🏆</span>
              )}
            </div>
            <div className="h-2 bg-black/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-current rounded-full transition-all duration-700"
                style={{ width: `${tierProgress}%`, color: 'currentColor' }}
              />
            </div>
            {nextTier && (
              <p className={`text-xs mt-1.5 opacity-60 ${tier.colour}`}>
                {tierProgress}% of the way to {nextTier.name}
              </p>
            )}
          </div>

          {/* Renovation readiness funnel */}
          {showRenovationFunnel && (
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-orange-600 mb-2">
                Ready for something bigger?
              </p>
              <p className="text-sm font-bold text-gray-900 mb-1">
                You&apos;re {prereqPct}% ready to renovate your bathroom
              </p>
              <div className="h-1.5 bg-orange-100 rounded-full mb-3">
                <div className="h-1.5 bg-orange-500 rounded-full" style={{ width: `${prereqPct}%` }} />
              </div>
              <a
                href="/projects/bathroom-renovation"
                className="text-sm font-semibold text-orange-600 hover:underline"
              >
                See what you could build →
              </a>
            </div>
          )}

          {/* ── Badge unlock celebration ─────────────────────────────── */}
          {newlyUnlockedBadges.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-3">
                🏅 Badge{newlyUnlockedBadges.length > 1 ? 's' : ''} unlocked!
              </p>
              <div className="flex flex-col gap-2">
                {newlyUnlockedBadges.map(badge => (
                  <div key={badge.id} className="flex items-center gap-3">
                    <span className="text-2xl shrink-0">{badge.emoji}</span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-gray-900">{badge.name}</p>
                      <p className="text-xs text-gray-500">{badge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Affiliate tool nudge — secondary, below the next-guide CTA */}
          {toolSuggestion && (
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
              <span className="text-base shrink-0">🛒</span>
              <p className="text-xs text-gray-500 leading-snug">
                Useful for next time:{' '}
                <a
                  href={amazonToolUrl(toolSuggestion.searchTerm)}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="font-medium text-gray-600 hover:underline"
                >
                  {toolSuggestion.name}
                </a>
              </p>
            </div>
          )}

          {/* Up next for you */}
          {nextGuide && <NextGuideCard guide={nextGuide} reason={nextReason} onClose={onClose} />}

        </div>

        {/* ── Sticky footer CTAs ───────────────────────────────────────────── */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
          {nextGuide ? (
            <>
              <a
                href={nextGuide.href}
                className="flex-1 bg-orange-500 text-white text-center py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
              >
                Start next fix →
              </a>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Keep exploring
              </button>
            </>
          ) : (
            <button
              onClick={onClose}
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
            >
              Brilliant — keep exploring
            </button>
          )}
        </div>

      </div>
    </div>
  )
}

// ─── Sub-component ─────────────────────────────────────────────────────────────

function NextGuideCard({
  guide,
  reason = 'easiest',
  onClose,
}: {
  guide: Guide
  reason?: RecommendationReason
  onClose: () => void
}) {
  const contextLabel =
    reason === 'tool-overlap'    ? 'Uses tools you already have'
    : reason === 'same-category' ? `Next step for your ${guide.category}`
    : reason === 'quick-win'     ? 'Quick win to keep your streak'
    : null

  return (
    <a
      href={guide.href}
      onClick={onClose}
      className="block bg-gray-950 text-white rounded-2xl p-5 group"
    >
      <p className="text-orange-400 text-xs font-semibold uppercase tracking-wide mb-2">
        Up next for you
      </p>
      {contextLabel && (
        <p className="inline-flex items-center gap-1 bg-white/10 text-gray-300 text-xs font-medium rounded-full px-2.5 py-0.5 mb-2">
          <span className="text-green-400">✓</span> {contextLabel}
        </p>
      )}
      <p className="font-bold text-base group-hover:text-orange-400 transition-colors mb-1">
        {guide.title}
      </p>
      <p className="text-green-400 text-sm font-semibold mb-3">{guide.saves}</p>
      <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-4">
        <span>⏱ {guide.time}</span>
        <span>💰 {guide.cost}</span>
        <span className="text-orange-400">+{guide.skillPoints} pts</span>
      </div>
      <p className="text-gray-400 text-xs mb-4">Keep the momentum going with another quick win.</p>
      <span className="inline-flex items-center gap-1.5 bg-orange-500 group-hover:bg-orange-600 transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded-xl">
        Start next fix →
      </span>
    </a>
  )
}
