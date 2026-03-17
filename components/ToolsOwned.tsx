'use client'

import { useEffect, useState } from 'react'
import { ALL_TOOLS, GUIDE_TOOLS, TOOL_GUIDE_COUNTS, TOOLS_STORAGE_KEY } from '@/lib/tools'

// Derive category order from ALL_TOOLS insertion order — stays in sync automatically
const CATEGORIES = [...new Set(ALL_TOOLS.map(t => t.category))]

// How many guides the user can start right now (all required tools owned, or no tools needed)
function countReadyGuides(owned: string[]): number {
  return Object.values(GUIDE_TOOLS).filter(tools =>
    tools.every(id => owned.includes(id))
  ).length
}

// Single unowned tool that would unlock the most additional guides if added
function findNextBestTool(owned: string[]): { name: string; gain: number } | null {
  const currentReady = countReadyGuides(owned)
  let bestName = ''
  let bestGain = 0

  for (const tool of ALL_TOOLS) {
    if (owned.includes(tool.id)) continue
    const guideCount = TOOL_GUIDE_COUNTS[tool.id] ?? 0
    if (guideCount === 0) continue

    const newReady = Object.values(GUIDE_TOOLS).filter(tools =>
      tools.every(id => owned.includes(id) || id === tool.id)
    ).length
    const gain = newReady - currentReady

    if (gain > bestGain) {
      bestGain = gain
      bestName = tool.name
    }
  }

  return bestGain > 0 ? { name: bestName, gain: bestGain } : null
}

export default function ToolsOwned() {
  const [owned, setOwned]     = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

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

  const readyCount  = countReadyGuides(owned)
  const nextBest    = findNextBestTool(owned)

  return (
    <div>
      {/* ── Value panel ─────────────────────────────────────────────── */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6 space-y-1.5">
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-gray-900">{owned.length}</span> of {ALL_TOOLS.length} tools ticked
        </p>
        {readyCount > 0 && (
          <p className="text-sm font-semibold text-green-700">
            ✓ You&apos;re ready for {readyCount} guide{readyCount !== 1 ? 's' : ''} right now
          </p>
        )}
        {nextBest && (
          <p className="text-sm text-gray-500">
            Add a{' '}
            <span className="font-medium text-gray-700">{nextBest.name}</span>
            {' '}to unlock {nextBest.gain} more guide{nextBest.gain !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* ── Tool list grouped by category ───────────────────────────── */}
      <div className="space-y-8">
        {CATEGORIES.map(cat => {
          const tools = ALL_TOOLS.filter(t => t.category === cat)
          return (
            <div key={cat}>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">{cat}</h2>
              <div className="space-y-2">
                {tools.map(tool => {
                  const checked     = owned.includes(tool.id)
                  const guideCount  = TOOL_GUIDE_COUNTS[tool.id] ?? 0

                  return (
                    <label
                      key={tool.id}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        checked
                          ? 'border-green-300 bg-green-50'
                          : 'border-gray-200 bg-white hover:border-orange-200'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(tool.id)}
                        className="w-4 h-4 accent-green-500 shrink-0"
                      />
                      <span className="flex flex-col flex-1 min-w-0">
                        <span className={`text-sm font-medium ${checked ? 'text-green-800' : 'text-gray-700'}`}>
                          {tool.name}
                        </span>
                        {guideCount > 0 && (
                          <span className="text-xs text-gray-400 mt-0.5">
                            Used in {guideCount} guide{guideCount !== 1 ? 's' : ''}
                          </span>
                        )}
                      </span>
                      {checked && (
                        <span className="text-green-500 text-xs font-semibold shrink-0">✓ owned</span>
                      )}
                    </label>
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
