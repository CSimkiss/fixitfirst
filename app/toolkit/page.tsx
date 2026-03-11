'use client'

import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { ALL_TOOLS, TOOLS_STORAGE_KEY, GUIDE_TOOLS } from '@/lib/tools'
import { ALL_GUIDES } from '@/lib/guides'

const TOOL_EMOJIS: Record<string, string> = {
  'screwdriver-flat':  '🪛',
  'screwdriver-cross': '🪛',
  'adjustable-spanner':'🔧',
  'hammer':            '🔨',
  'pliers':            '🪚',
  'drill':             '🔌',
  'drill-bits':        '🪚',
  'spirit-level':      '📐',
  'tape-measure':      '📏',
  'cable-detector':    '🔍',
  'rubber-gloves':     '🧤',
  'step-ladder':       '🪜',
  'filling-knife':     '🖼️',
  'paintbrush':        '🖌️',
  'roller-tray':       '🎨',
  'bleed-key':         '🔑',
  'plunger':           '🚿',
  'drain-snake':       '🐍',
}

const APPROXIMATE_COSTS: Record<string, string> = {
  'screwdriver-flat':  '£2–5',
  'screwdriver-cross': '£2–5',
  'adjustable-spanner':'£8–15',
  'hammer':            '£8–15',
  'pliers':            '£5–10',
  'drill':             '£40–80',
  'drill-bits':        '£10–20',
  'spirit-level':      '£8–20',
  'tape-measure':      '£5–10',
  'cable-detector':    '£20–40',
  'rubber-gloves':     '£2–5',
  'step-ladder':       '£20–50',
  'filling-knife':     '£3–8',
  'paintbrush':        '£4–10',
  'roller-tray':       '£6–15',
  'bleed-key':         '£1–3',
  'plunger':           '£5–10',
  'drain-snake':       '£10–20',
}

// Group tools by category
const CATEGORIES = Array.from(new Set(ALL_TOOLS.map(t => t.category)))

export default function ToolkitPage() {
  const [owned, setOwned] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem(TOOLS_STORAGE_KEY)
    setOwned(raw ? JSON.parse(raw) : [])
    setMounted(true)
  }, [])

  function toggle(id: string) {
    setOwned(prev => {
      const next = prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
      localStorage.setItem(TOOLS_STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }

  const ownedCount = owned.length
  const totalTools = ALL_TOOLS.length

  // Shopping list = tools not owned that unlock new guides
  const neededTools = ALL_TOOLS.filter(t => !owned.includes(t.id))
  const unlockedGuides = ALL_GUIDES.filter(g => {
    const needed = GUIDE_TOOLS[g.slug] ?? []
    return needed.every(id => owned.includes(id))
  })

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Your Tool Library</h1>
        <p className="text-gray-300 text-lg mb-6">
          Tick the tools you own. We&apos;ll show you which guides you can do right now.
        </p>
        {mounted && (
          <div className="inline-flex items-center gap-6 bg-white/10 border border-white/20 rounded-2xl px-6 py-3">
            <div className="text-center">
              <p className="text-2xl font-bold">{ownedCount}/{totalTools}</p>
              <p className="text-gray-400 text-xs">Tools owned</p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">{unlockedGuides.length}</p>
              <p className="text-gray-400 text-xs">Guides unlocked</p>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">

        {/* Tool grid by category */}
        {CATEGORIES.map(cat => (
          <div key={cat}>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{cat}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {ALL_TOOLS.filter(t => t.category === cat).map(tool => {
                const isOwned = mounted && owned.includes(tool.id)
                return (
                  <button
                    key={tool.id}
                    onClick={() => toggle(tool.id)}
                    className={`rounded-xl border-2 p-4 text-left transition-all ${
                      isOwned
                        ? 'border-green-400 bg-green-50'
                        : 'border-gray-200 hover:border-orange-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-2xl">{TOOL_EMOJIS[tool.id] ?? '🔧'}</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                        isOwned ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'
                      }`}>
                        {isOwned ? '✓' : ''}
                      </div>
                    </div>
                    <p className="text-xs font-medium text-gray-900 leading-snug">{tool.name}</p>
                    {!isOwned && (
                      <p className="text-xs text-gray-400 mt-1">{APPROXIMATE_COSTS[tool.id]}</p>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        ))}

        {/* Guides you can do now */}
        {mounted && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Guides you can do right now</h2>
            <p className="text-sm text-gray-500 mb-4">Based on the tools you own.</p>
            {unlockedGuides.length === 0 ? (
              <p className="text-gray-400 text-sm">Tick some tools to see which guides you can start.</p>
            ) : (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {unlockedGuides.map(g => (
                  <a
                    key={g.slug}
                    href={g.href}
                    className="border border-green-200 rounded-xl p-4 bg-green-50 hover:border-green-400 transition-all"
                  >
                    <p className="font-semibold text-gray-900 text-sm">{g.title}</p>
                    <p className="text-xs text-green-700 font-medium">{g.saves}</p>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Shopping list */}
        {mounted && neededTools.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Shopping list</h2>
            <p className="text-sm text-gray-500 mb-4">Tools you don&apos;t own yet — approximate costs.</p>
            <div className="space-y-2">
              {neededTools.map(tool => {
                // Which guides would this unlock (if combined with existing tools)?
                const guidesNeedingThis = ALL_GUIDES.filter(g => {
                  const needed = GUIDE_TOOLS[g.slug] ?? []
                  return needed.includes(tool.id)
                })
                return (
                  <div key={tool.id} className="flex items-center gap-3 border border-gray-200 rounded-xl p-3">
                    <span className="text-xl shrink-0">{TOOL_EMOJIS[tool.id] ?? '🔧'}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800">{tool.name}</p>
                      {guidesNeedingThis.length > 0 && (
                        <p className="text-xs text-gray-500">
                          Needed for: {guidesNeedingThis.map(g => g.title).join(', ')}
                        </p>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-600 shrink-0">
                      {APPROXIMATE_COSTS[tool.id] ?? '£?'}
                    </span>
                  </div>
                )
              })}
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Total to complete your kit: £{
                neededTools.reduce((sum, t) => {
                  const cost = APPROXIMATE_COSTS[t.id] ?? '£0'
                  const mid = cost.replace('£','').split('–').map(Number)
                  return sum + Math.round((mid[0] + (mid[1] ?? mid[0])) / 2)
                }, 0)
              } approx
            </p>
          </div>
        )}

      </div>

      <MobileNav />
    </main>
  )
}
