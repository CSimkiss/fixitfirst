'use client'

import { useEffect, useState } from 'react'
import { ALL_TOOLS, GUIDE_TOOLS, TOOL_GUIDE_COUNTS, TOOLS_STORAGE_KEY } from '@/lib/tools'
import { amazonToolUrl } from '@/lib/affiliates'

// ─── Category order derived from ALL_TOOLS insertion — stays in sync ─────────
const CATEGORIES = [...new Set(ALL_TOOLS.map(t => t.category))]

// ─── Guide → guide-category map ───────────────────────────────────────────────
// Used to compute categoryCount (breadth) for niche-penalty scoring.
const GUIDE_CATEGORY: Record<string, string> = {
  // Plumbing
  'fix-a-dripping-tap':           'Plumbing',
  'fix-a-leaking-pipe-joint':     'Plumbing',
  'replace-a-toilet-seat':        'Plumbing',
  'fix-low-water-pressure':       'Plumbing',
  'unblock-a-drain':              'Plumbing',
  'unblock-a-toilet':             'Plumbing',
  'replace-a-shower-head':        'Plumbing',
  'fix-a-running-toilet':         'Plumbing',
  'turn-off-water-mains':         'Plumbing',
  'fix-a-garden-tap':             'Plumbing',
  'unblock-a-gutter':             'Plumbing',
  // Heating
  'bleed-a-radiator':             'Heating',
  'fix-a-cold-radiator':          'Heating',
  'fix-a-noisy-radiator':         'Heating',
  'bleed-all-radiators':          'Heating',
  'repressurise-a-boiler':        'Heating',
  'boiler-breakdown':             'Heating',
  'boiler-breakdown-what-to-do':  'Heating',
  // Electrics
  'change-a-lightbulb':                  'Electrics',
  'replace-a-plug-fuse':                 'Electrics',
  'reset-a-tripped-circuit-breaker':     'Electrics',
  'replace-a-light-switch':             'Electrics',
  'fix-a-doorbell':                      'Electrics',
  'replace-a-smoke-alarm-battery':       'Electrics',
  'read-your-energy-meter':              'Electrics',
  'turn-off-electricity-fuse-box':       'Electrics',
  'install-a-smart-thermostat':          'Electrics',
  // Carpentry
  'put-up-shelves':               'Carpentry',
  'fit-a-curtain-pole':           'Carpentry',
  'hang-a-picture-frame':         'Carpentry',
  'fix-a-squeaky-floorboard':     'Carpentry',
  'fix-a-sticking-door':          'Carpentry',
  'fix-a-sticking-drawer':        'Carpentry',
  'fix-a-broken-cabinet-hinge':   'Carpentry',
  // Decorating
  'paint-a-room':                 'Decorating',
  'fill-a-hole-in-a-wall':        'Decorating',
  'fill-and-sand-a-wall':         'Decorating',
  'strip-wallpaper':              'Decorating',
  'tile-a-splashback':            'Decorating',
  'repair-a-ceiling-crack':       'Decorating',
  // General / Outdoor
  'draft-proof-door-window':      'General',
  'fix-a-fence-panel':            'Outdoor',
  'lay-decking-boards':           'Outdoor',
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Guides where ALL required tools are already owned (or none required). */
function countReadyGuides(owned: string[]): number {
  return Object.values(GUIDE_TOOLS).filter(tools =>
    tools.every(id => owned.includes(id))
  ).length
}

/** Guides (slugs) that require a given tool. */
function guidesForTool(toolId: string): string[] {
  return Object.entries(GUIDE_TOOLS)
    .filter(([, tools]) => tools.includes(toolId))
    .map(([slug]) => slug)
}

/** How many guides using this tool are fully completable with the current owned set. */
function countReadyWithTool(toolId: string, owned: string[]): number {
  return guidesForTool(toolId).filter(slug =>
    (GUIDE_TOOLS[slug] ?? []).every(id => owned.includes(id))
  ).length
}

/**
 * Short benefit summary for a tool, derived from its guide slugs.
 * Takes the last meaningful word from each of the first 3 unique guides.
 * e.g. "tap, toilet, switch" or "radiator, radiators"
 */
function toolBenefitSummary(toolId: string): string {
  const SKIP = new Set(['key', 'all', 'off', 'what', 'do', 'to', 'how', 'your'])
  const slugs = guidesForTool(toolId)
  const seen  = new Set<string>()
  const words: string[] = []

  for (const slug of slugs) {
    const parts = slug.split('-')
    for (let i = parts.length - 1; i >= 0; i--) {
      const w = parts[i]
      if (!SKIP.has(w) && !seen.has(w)) {
        seen.add(w)
        words.push(w)
        break
      }
    }
    if (words.length >= 3) break
  }

  return words.join(', ')
}

type ScoredTool = {
  id: string
  name: string
  gain: number        // guides newly unlocked if added
  totalUsage: number  // total guides this tool appears in
  score: number
}

/**
 * Top N tools to acquire, ranked by:
 *
 *   categoryCount  = distinct guide-categories this tool appears in
 *   nichePenalty   = categoryCount === 1 ? 2 : 0
 *   score          = (unlockedGuides × 2) + totalUsage − nichePenalty
 *
 * Tie-breaking (in order):
 *   1. Higher unlockedGuides (more immediate value)
 *   2. Hand tools before power tools (simpler, cheaper)
 *   3. More beginner-friendly guides (guides requiring ≤2 tools)
 *   4. Higher totalUsage
 *   5. Alphabetical
 *
 * Only tools that would unlock ≥1 guide are included.
 */
function findTopTools(owned: string[], limit: number): ScoredTool[] {
  const currentReady = countReadyGuides(owned)
  const results: ScoredTool[] = []

  for (const tool of ALL_TOOLS) {
    if (owned.includes(tool.id)) continue
    const totalUsage = TOOL_GUIDE_COUNTS[tool.id] ?? 0
    if (!totalUsage) continue

    const newReady = Object.values(GUIDE_TOOLS).filter(tools =>
      tools.every(id => owned.includes(id) || id === tool.id)
    ).length
    const unlockedGuides = newReady - currentReady
    if (unlockedGuides <= 0) continue

    const toolGuides     = guidesForTool(tool.id)
    const categoryCount  = new Set(toolGuides.map(s => GUIDE_CATEGORY[s]).filter(Boolean)).size
    const nichePenalty   = categoryCount === 1 ? 2 : 0
    const score          = unlockedGuides * 2 + totalUsage - nichePenalty

    results.push({ id: tool.id, name: tool.name, gain: unlockedGuides, totalUsage, score })
  }

  results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    if (b.gain !== a.gain) return b.gain - a.gain

    const catA = ALL_TOOLS.find(t => t.id === a.id)?.category ?? ''
    const catB = ALL_TOOLS.find(t => t.id === b.id)?.category ?? ''
    if (catA === 'Hand tools' && catB !== 'Hand tools') return -1
    if (catB === 'Hand tools' && catA !== 'Hand tools') return 1

    // Prefer tools used in more beginner-friendly guides (≤2 tools required)
    const beginnerA = guidesForTool(a.id).filter(s => (GUIDE_TOOLS[s]?.length ?? 0) <= 2).length
    const beginnerB = guidesForTool(b.id).filter(s => (GUIDE_TOOLS[s]?.length ?? 0) <= 2).length
    if (beginnerB !== beginnerA) return beginnerB - beginnerA

    if (b.totalUsage !== a.totalUsage) return b.totalUsage - a.totalUsage
    return a.name.localeCompare(b.name)
  })

  return results.slice(0, limit)
}

/** Pretty-print a guide slug as a readable title. */
function slugToTitle(slug: string): string {
  const minor: Record<string, string> = {
    a: 'a', an: 'an', the: 'the', in: 'in', of: 'of', at: 'at',
  }
  return slug
    .split('-')
    .map((w, i) =>
      i === 0
        ? w.charAt(0).toUpperCase() + w.slice(1)
        : (minor[w] ?? w.charAt(0).toUpperCase() + w.slice(1))
    )
    .join(' ')
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ToolsOwned() {
  const [owned, setOwned]           = useState<string[]>([])
  const [mounted, setMounted]       = useState(false)
  const [expandedTool, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem(TOOLS_STORAGE_KEY)
    setOwned(raw ? JSON.parse(raw) : [])
    setMounted(true)
  }, [])

  const toggle = (id: string) => {
    const next = owned.includes(id) ? owned.filter(t => t !== id) : [...owned, id]
    setOwned(next)
    localStorage.setItem(TOOLS_STORAGE_KEY, JSON.stringify(next))
  }

  if (!mounted) {
    return <div className="animate-pulse bg-gray-100 rounded-xl h-64" />
  }

  const readyCount = countReadyGuides(owned)
  const topTools   = findTopTools(owned, 3)
  const nextBest   = topTools[0] ?? null
  const starterKit = topTools

  return (
    <div>
      {/* ── Badge progression hook ──────────────────────────────────────── */}
      {owned.length < 5 && (
        <a
          href="/badges"
          className="flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 mb-5 group"
        >
          <span>🏅</span>
          <span>
            Add{' '}
            <strong>{5 - owned.length} more tool{5 - owned.length !== 1 ? 's' : ''}</strong>
            {' '}to unlock the <strong>Tool Up</strong> badge
          </span>
          <span className="group-hover:underline text-xs">→</span>
        </a>
      )}

      {/* ── Value panel ─────────────────────────────────────────────────── */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6 space-y-3">

        {/* Tools ticked + nudge */}
        <div>
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">{owned.length}</span> of {ALL_TOOLS.length} tools ticked
          </p>
          <p className="text-xs text-gray-400 mt-0.5">Most people start with 5–7 tools</p>
        </div>

        {/* Ready count + CTA */}
        {readyCount > 0 && (
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <p className="text-sm font-semibold text-green-700">
                ✓ You&apos;re ready for {readyCount} fix{readyCount !== 1 ? 'es' : ''} right now
              </p>
              <a
                href="/guides?ready=true"
                className="text-xs font-medium text-green-700 bg-green-100 hover:bg-green-200 px-3 py-1 rounded-full transition-colors shrink-0"
              >
                Start {readyCount} fix{readyCount !== 1 ? 'es' : ''} right now →
              </a>
            </div>
            <a
              href="/guides?difficulty=easy"
              className="text-xs text-gray-400 hover:text-gray-600 hover:underline transition-colors"
            >
              Start with the easiest fixes →
            </a>
          </div>
        )}

        {/* Next-best tool recommendation */}
        {nextBest && (
          <div className="pt-2 border-t border-gray-200 space-y-1.5">
            <p className="text-xs text-gray-400 font-medium">💡 Most useful next tool</p>
            <p className="text-sm font-medium text-gray-800">
              Unlock{' '}
              <strong className="text-gray-900">{nextBest.gain}</strong>{' '}
              fix{nextBest.gain !== 1 ? 'es' : ''} instantly with a{' '}
              <span className="text-gray-900 font-semibold">{nextBest.name}</span>
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={`/guides?unlockTool=${nextBest.id}`}
                className="text-xs text-orange-500 hover:text-orange-600 hover:underline transition-colors"
              >
                View those guides →
              </a>
              <a
                href={amazonToolUrl(nextBest.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-gray-600 hover:underline transition-colors"
              >
                Find it on Amazon →
              </a>
            </div>
          </div>
        )}
      </div>

      {/* ── Starter kit ─────────────────────────────────────────────────── */}
      {starterKit.length > 0 && (
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-6">
          <p className="text-sm font-semibold text-gray-900 mb-0.5">Get set up faster</p>
          <p className="text-xs text-gray-500 mb-3">
            Skip the guesswork — get everything you need in one go
          </p>
          <div className="space-y-2.5">
            {starterKit.map((tool, idx) => (
              <div key={tool.id} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {idx + 1}. {tool.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Unlocks {tool.gain} fix{tool.gain !== 1 ? 'es' : ''}{' '}
                    <span className="text-gray-400">· used in {tool.totalUsage} guides</span>
                  </p>
                </div>
                <a
                  href={amazonToolUrl(tool.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-orange-600 hover:text-orange-700 hover:underline shrink-0 transition-colors"
                >
                  Find it on Amazon →
                </a>
              </div>
            ))}
          </div>
          {starterKit.length >= 2 && (
            <a
              href={amazonToolUrl('home DIY starter kit')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center text-xs font-medium text-orange-700 bg-orange-100 hover:bg-orange-200 px-3 py-2 rounded-lg transition-colors"
            >
              Shop this kit on Amazon →
            </a>
          )}
        </div>
      )}

      {/* ── Tool list grouped by category ───────────────────────────────── */}
      <div className="space-y-10">
        {CATEGORIES.map(cat => {
          const tools = ALL_TOOLS.filter(t => t.category === cat)
          return (
            <div key={cat}>
              <h2 className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-3">
                {cat}
              </h2>
              <div className="space-y-2">
                {tools.map(tool => {
                  const checked    = owned.includes(tool.id)
                  const guideCount = TOOL_GUIDE_COUNTS[tool.id] ?? 0
                  const isHighUtil = guideCount >= 5
                  const isExpanded = expandedTool === tool.id
                  const relGuides  = isExpanded ? guidesForTool(tool.id) : []
                  const readyN     = checked ? countReadyWithTool(tool.id, owned) : 0
                  const benefit    = isExpanded ? toolBenefitSummary(tool.id) : ''

                  return (
                    <div
                      key={tool.id}
                      className={`rounded-xl border overflow-hidden transition-all ${
                        checked ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-white'
                      }`}
                    >
                      {/* Main row */}
                      <div className="flex items-center gap-3 p-3">
                        <label className="flex items-center gap-3 flex-1 cursor-pointer min-w-0">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggle(tool.id)}
                            className="w-4 h-4 accent-green-500 shrink-0"
                          />
                          <span className="flex flex-col min-w-0">
                            <span className={`text-sm font-medium ${checked ? 'text-green-800' : 'text-gray-700'}`}>
                              {tool.name}
                            </span>

                            {/* Guide count — emphasised when high-utility */}
                            {guideCount > 0 && (
                              <span className={`text-xs mt-0.5 ${
                                isHighUtil ? 'text-orange-600 font-medium' : 'text-gray-400'
                              }`}>
                                Used in {guideCount} guide{guideCount !== 1 ? 's' : ''}
                              </span>
                            )}

                            {/* Ready-for feedback when owned */}
                            {checked && readyN > 0 && (
                              <span className="text-xs text-green-600 mt-0.5">
                                ✔ Ready for {readyN} fix{readyN !== 1 ? 'es' : ''}
                              </span>
                            )}
                          </span>
                        </label>

                        <div className="flex items-center gap-2 shrink-0">
                          {checked && (
                            <span className="text-green-500 text-xs font-semibold">✓</span>
                          )}
                          {guideCount > 0 && (
                            <button
                              type="button"
                              onClick={() => setExpanded(isExpanded ? null : tool.id)}
                              className="text-gray-400 hover:text-gray-600 text-xs px-1.5 py-0.5 rounded transition-colors"
                              aria-label={isExpanded ? 'Hide guides' : 'Show guides'}
                            >
                              {isExpanded ? '▲' : '▼'}
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Expanded guide list */}
                      {isExpanded && (
                        <div className="px-4 pb-3 pt-2 border-t border-gray-100 space-y-1.5">
                          {/* Benefit line */}
                          {benefit && (
                            <p className="text-xs text-gray-500 mb-1.5">
                              Helps you fix: <span className="text-gray-600 font-medium">{benefit}</span>
                            </p>
                          )}
                          <p className="text-xs text-gray-400 font-medium mb-1.5">Used in:</p>
                          {relGuides.slice(0, 3).map(slug => (
                            <a
                              key={slug}
                              href={`/guides/${slug}`}
                              className="flex items-center gap-1.5 text-xs text-orange-600 hover:underline"
                            >
                              <span className="text-orange-400">→</span>
                              {slugToTitle(slug)}
                            </a>
                          ))}
                          <a
                            href={`/guides?unlockTool=${tool.id}`}
                            className="block text-xs text-gray-400 hover:text-gray-600 hover:underline mt-2 transition-colors"
                          >
                            View all {guideCount} guide{guideCount !== 1 ? 's' : ''} →
                          </a>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
