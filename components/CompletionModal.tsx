'use client'

import { useEffect } from 'react'
import { TIERS } from '@/lib/progress'
import { totalSavings, tierLevel } from '@/lib/completions'
import { ALL_GUIDES, getRecommendedNextGuide, type Guide } from '@/lib/guides'
import { screwfixToolUrl } from '@/lib/affiliates'
import type { CompletionMap } from '@/lib/completions'

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

  const nextGuide     = getRecommendedNextGuide(completionMap)
  const toolSuggestion = GUIDE_TOOL_SUGGESTION[slug] ?? null

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

          {/* Running totals — supporting context, not the hero */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-orange-500">{completedCount}</p>
              <p className="text-xs text-gray-500 mt-0.5">
                guide{completedCount !== 1 ? 's' : ''} completed
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-green-600">
                {allSaved > 0 ? `£${allSaved}` : '—'}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">total saved</p>
            </div>
          </div>

          {/* Identity / progress reinforcement */}
          <p className="text-sm text-gray-500 text-center -mt-1">
            {completedCount > 1
              ? `That's ${completedCount} jobs you didn't need to pay someone else for.`
              : "You're building real DIY confidence."}
          </p>

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

          {/* Recommended next guide — primary CTA block */}
          {nextGuide && <NextGuideCard guide={nextGuide} onClose={onClose} />}

          {/* Affiliate tool nudge — secondary, below the next-guide CTA */}
          {toolSuggestion && (
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
              <span className="text-base shrink-0">🛒</span>
              <p className="text-xs text-gray-500 leading-snug">
                Useful for next time:{' '}
                <a
                  href={screwfixToolUrl(toolSuggestion.searchTerm)}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="font-medium text-gray-600 hover:underline"
                >
                  {toolSuggestion.name}
                </a>
              </p>
            </div>
          )}

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

function NextGuideCard({ guide, onClose }: { guide: Guide; onClose: () => void }) {
  return (
    <a
      href={guide.href}
      onClick={onClose}
      className="block bg-gray-950 text-white rounded-2xl p-5 group"
    >
      <p className="text-orange-400 text-xs font-semibold uppercase tracking-wide mb-2">
        Recommended next
      </p>
      <p className="font-bold text-lg group-hover:text-orange-400 transition-colors mb-0.5">
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
