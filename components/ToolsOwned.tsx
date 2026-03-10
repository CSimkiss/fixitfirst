'use client'

import { useEffect, useState } from 'react'
import { ALL_TOOLS, TOOLS_STORAGE_KEY } from '@/lib/tools'

const CATEGORIES = ['Hand tools', 'Power tools', 'Measuring', 'Safety & access', 'Decorating', 'Plumbing']

export default function ToolsOwned() {
  const [owned, setOwned] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem(TOOLS_STORAGE_KEY)
    setOwned(raw ? JSON.parse(raw) : [])
    setMounted(true)
  }, [])

  const toggle = (id: string) => {
    const next = owned.includes(id) ? owned.filter((t) => t !== id) : [...owned, id]
    setOwned(next)
    localStorage.setItem(TOOLS_STORAGE_KEY, JSON.stringify(next))
  }

  if (!mounted) {
    return <div className="animate-pulse bg-gray-100 rounded-xl h-64" />
  }

  return (
    <div>
      <p className="text-gray-500 mb-6">
        <span className="font-semibold text-gray-900">{owned.length}</span> of {ALL_TOOLS.length} tools ticked
      </p>
      <div className="space-y-8">
        {CATEGORIES.map((cat) => {
          const tools = ALL_TOOLS.filter((t) => t.category === cat)
          return (
            <div key={cat}>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">{cat}</h2>
              <div className="space-y-2">
                {tools.map((tool) => {
                  const checked = owned.includes(tool.id)
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
                      <span className={`text-sm font-medium ${checked ? 'text-green-800' : 'text-gray-700'}`}>
                        {tool.name}
                      </span>
                      {checked && <span className="ml-auto text-green-500 text-xs font-semibold">✓ owned</span>}
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
