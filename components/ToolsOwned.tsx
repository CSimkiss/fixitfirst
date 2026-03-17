'use client'

import { useEffect, useState } from 'react'
import { ALL_TOOLS, GUIDE_TOOLS, TOOL_GUIDE_COUNTS, TOOLS_STORAGE_KEY } from '@/lib/tools'
import { screwfixToolUrl } from '@/lib/affiliates'

// ─── Category order derived from ALL_TOOLS insertion — stays in sync ─────────
const CATEGORIES = [...new Set(ALL_TOOLS.map(t => t.category))]

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

/**
 * How many guides using this tool are fully completable with current owned set.
 * (tool is already owned, so owned already includes it)
 */
function countReadyWithTool(toolId: string, owned: string[]): number {
  return guidesForTool(toolId).filter(slug =>
    (GUIDE_TOOLS[slug] ?? []).every(id => owned.includes(id))
  ).length
}

type ScoredTool = {
  id: string
  name: string
  gain: number       // guides newly unlocked
  totalUsage: number // total guides this tool appears in
  score: number
}

/**
 * Top N tools to acquire, ranked by:
 *   score = (unlockedGuides × 2) + totalUsage
 *
 * Tie-breaking:
 *   1. Higher unlockedGuides wins (more immediate value)
 *   2. Hand tools beat power tools (simpler, cheaper)
 *   3. Alphabetical by name
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

    const score = unlockedGuides * 2 + totalUsage
    results.push({ id: tool.id, name: tool.name, gain: unlockedGuides, totalUsage, score })
  }

  results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    if (b.gain !== a.gain) return b.gain - a.gain
    const catA = ALL_TOOLS.find(t => t.id === a.id)?.category ?? ''
    const catB = ALL_TOOLS.find(t => t.id === b.id)?.category ?? ''
    if (catA === 'Hand tools' && catB !== 'Hand tools') return -1
    if (catB === 'Hand tools' && catA !== 'Hand tools') return 1
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
      i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : (minor[w] ?? w.charAt(0).toUpperCase() + w.slice(1))
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
  const starterKit = topTools // top 3, includes primary recommendation as #1

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
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-gray-900">{owned.length}</span> of {ALL_TOOLS.length} tools ticked
        </p>

        {/* Ready count + CTA */}
        {readyCount > 0 && (
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
        )}

        {/* Next-best tool recommendation */}
        {nextBest && (
          <div className="pt-2 border-t border-gray-200 space-y-1.5">
            <p className="text-xs text-gray-400 font-medium">💡 Most useful next tool</p>
            <p className="text-sm font-medium text-gray-800">
              Unlock {nextBest.gain} more fix{nextBest.gain !== 1 ? 'es' : ''} with a{' '}
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
                href={screwfixToolUrl(nextBest.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-gray-600 hover:underline transition-colors"
              >
                Get this tool →
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
            These {starterKit.length} tool{starterKit.length !== 1 ? 's' : ''} unlock the most fixes
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
                  href={screwfixToolUrl(tool.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-orange-600 hover:text-orange-700 hover:underline shrink-0 transition-colors"
                >
                  Get this →
                </a>
              </div>
            ))}
          </div>
          {starterKit.length >= 2 && (
            <a
              href={screwfixToolUrl('home DIY starter kit')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center text-xs font-medium text-orange-700 bg-orange-100 hover:bg-orange-200 px-3 py-2 rounded-lg transition-colors"
            >
              Shop all {starterKit.length} together →
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
                  const checked      = owned.includes(tool.id)
                  const guideCount   = TOOL_GUIDE_COUNTS[tool.id] ?? 0
                  const isHighUtil   = guideCount >= 5
                  const isExpanded   = expandedTool === tool.id
                  const relGuides    = isExpanded ? guidesForTool(tool.id) : []
                  const readyN       = checked ? countReadyWithTool(tool.id, owned) : 0

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
                                isHighUtil
                                  ? 'text-orange-600 font-medium'
                                  : 'text-gray-400'
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
