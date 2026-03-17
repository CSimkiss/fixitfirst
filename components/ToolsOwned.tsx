'use client'

import { useEffect, useState } from 'react'
import { ALL_TOOLS, GUIDE_TOOLS, TOOL_GUIDE_COUNTS, TOOLS_STORAGE_KEY } from '@/lib/tools'

// ─── Category order derived from ALL_TOOLS insertion — stays in sync ─────────
const CATEGORIES = [...new Set(ALL_TOOLS.map(t => t.category))]

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Guides where ALL required tools are already owned (or no tools required). */
function countReadyGuides(owned: string[]): number {
  return Object.values(GUIDE_TOOLS).filter(tools =>
    tools.every(id => owned.includes(id))
  ).length
}

/** Unowned tool that would unlock the most additional ready guides if added. */
function findNextBestTool(owned: string[]): { id: string; name: string; gain: number } | null {
  const currentReady = countReadyGuides(owned)
  let bestId   = ''
  let bestName = ''
  let bestGain = 0

  for (const tool of ALL_TOOLS) {
    if (owned.includes(tool.id)) continue
    if (!(TOOL_GUIDE_COUNTS[tool.id] ?? 0)) continue

    const newReady = Object.values(GUIDE_TOOLS).filter(tools =>
      tools.every(id => owned.includes(id) || id === tool.id)
    ).length
    const gain = newReady - currentReady

    if (gain > bestGain) {
      bestGain = gain
      bestId   = tool.id
      bestName = tool.name
    }
  }

  return bestGain > 0 ? { id: bestId, name: bestName, gain: bestGain } : null
}

/** Guides (slugs) that require a given tool. */
function guidesForTool(toolId: string): string[] {
  return Object.entries(GUIDE_TOOLS)
    .filter(([, tools]) => tools.includes(toolId))
    .map(([slug]) => slug)
}

/** Pretty-print a guide slug as a readable title. */
function slugToTitle(slug: string): string {
  const map: Record<string, string> = {
    'a': 'a', 'an': 'an', 'the': 'the', 'in': 'in', 'of': 'of', 'at': 'at',
  }
  return slug
    .split('-')
    .map((w, i) => i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : (map[w] ?? w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ')
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ToolsOwned() {
  const [owned, setOwned]         = useState<string[]>([])
  const [mounted, setMounted]     = useState(false)
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
  const nextBest   = findNextBestTool(owned)

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
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6 space-y-2">
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-gray-900">{owned.length}</span> of {ALL_TOOLS.length} tools ticked
        </p>

        {readyCount > 0 && (
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="text-sm font-semibold text-green-700">
              ✓ You&apos;re ready for {readyCount} guide{readyCount !== 1 ? 's' : ''} right now
            </p>
            <a
              href="/guides?ready=true"
              className="text-xs font-medium text-green-700 bg-green-100 hover:bg-green-200 px-3 py-1 rounded-full transition-colors shrink-0"
            >
              See your ready guides →
            </a>
          </div>
        )}

        {nextBest && (
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="text-sm text-gray-500">
              Add a <span className="font-medium text-gray-700">{nextBest.name}</span>{' '}
              to unlock {nextBest.gain} more guide{nextBest.gain !== 1 ? 's' : ''}
            </p>
            <a
              href={`/guides?unlockTool=${nextBest.id}`}
              className="text-xs text-gray-500 hover:text-orange-600 hover:underline shrink-0 transition-colors"
            >
              View those guides →
            </a>
          </div>
        )}
      </div>

      {/* ── Tool list grouped by category ───────────────────────────────── */}
      <div className="space-y-10">
        {CATEGORIES.map(cat => {
          const tools = ALL_TOOLS.filter(t => t.category === cat)
          return (
            <div key={cat}>
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                {cat}
              </h2>
              <div className="space-y-2">
                {tools.map(tool => {
                  const checked    = owned.includes(tool.id)
                  const guideCount = TOOL_GUIDE_COUNTS[tool.id] ?? 0
                  const isExpanded = expandedTool === tool.id
                  const relGuides  = isExpanded ? guidesForTool(tool.id) : []

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
                            {guideCount > 0 && (
                              <span className="text-xs text-gray-400 mt-0.5">
                                Used in {guideCount} guide{guideCount !== 1 ? 's' : ''}
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
                          {relGuides.length > 3 && (
                            <a
                              href={`/guides?unlockTool=${tool.id}`}
                              className="block text-xs text-gray-400 hover:text-gray-600 hover:underline mt-1 transition-colors"
                            >
                              + {relGuides.length - 3} more — view all guides →
                            </a>
                          )}
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
