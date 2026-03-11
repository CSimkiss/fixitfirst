'use client'

import { useState, useEffect } from 'react'

type Level = { id: string; label: string; emoji: string; desc: string; colour: string; active: string }

const LEVELS: Level[] = [
  {
    id: 'nervous',
    label: 'Nervous',
    emoji: '😬',
    desc: "Not sure I can do this",
    colour: 'border-red-200 bg-red-50 text-red-700',
    active: 'border-red-400 bg-red-100 text-red-800',
  },
  {
    id: 'okay',
    label: 'Okay',
    emoji: '🙂',
    desc: "I'll give it a go",
    colour: 'border-yellow-200 bg-yellow-50 text-yellow-700',
    active: 'border-yellow-400 bg-yellow-100 text-yellow-800',
  },
  {
    id: 'confident',
    label: 'Confident',
    emoji: '💪',
    desc: "Done something like this before",
    colour: 'border-green-200 bg-green-50 text-green-700',
    active: 'border-green-400 bg-green-100 text-green-800',
  },
]

export default function ConfidenceSelector({ slug }: { slug: string }) {
  const key = `fixitfirst-confidence-${slug}`
  const [selected, setSelected] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setSelected(localStorage.getItem(key))
    setMounted(true)
  }, [key])

  function pick(id: string) {
    setSelected(id)
    localStorage.setItem(key, id)
  }

  const current = LEVELS.find(l => l.id === selected)

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
      <h2 className="font-semibold text-gray-900 mb-1">How are you feeling about this?</h2>
      <p className="text-xs text-gray-500 mb-4">
        {selected
          ? 'You can update this any time — before or after completing the guide.'
          : 'Pick your confidence level before you start.'}
      </p>
      <div className="grid grid-cols-3 gap-2">
        {LEVELS.map(level => {
          const isActive = mounted && selected === level.id
          return (
            <button
              key={level.id}
              onClick={() => pick(level.id)}
              className={`rounded-xl border-2 p-3 text-center transition-all ${
                isActive ? level.active + ' shadow-sm' : level.colour + ' opacity-70 hover:opacity-100'
              }`}
            >
              <div className="text-2xl mb-1">{level.emoji}</div>
              <p className="text-sm font-semibold">{level.label}</p>
              <p className="text-xs mt-0.5 opacity-80">{level.desc}</p>
            </button>
          )
        })}
      </div>
      {mounted && current && (
        <p className="text-xs text-gray-500 mt-3 text-center">
          You said: {current.emoji} {current.label} — you can change this after completing the guide.
        </p>
      )}
    </div>
  )
}
