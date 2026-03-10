'use client'

import { useState, useEffect } from 'react'

const stats = [
  { guide: 'Fix a dripping tap',    count: 247, emoji: '🔧' },
  { guide: 'Unblock a drain',       count: 189, emoji: '🚿' },
  { guide: 'Change a lightbulb',    count: 156, emoji: '💡' },
  { guide: 'Bleed a radiator',      count: 134, emoji: '🔥' },
  { guide: 'Put up shelves',        count: 112, emoji: '📚' },
  { guide: 'Paint a room',          count: 98,  emoji: '🎨' },
  { guide: 'Fix a running toilet',  count: 87,  emoji: '🚽' },
  { guide: 'Fill a hole in a wall', count: 76,  emoji: '🧱' },
]

export default function CompletedTicker() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % stats.length)
        setVisible(true)
      }, 300)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const current = stats[index]

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl px-5 py-3 flex items-center gap-3 max-w-xl mx-auto">
      <span className="text-green-600 text-xl shrink-0">✓</span>
      <p
        className="text-sm text-green-800 font-medium transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <span className="font-bold">{current.count} people</span> completed{' '}
        <span className="font-bold">{current.guide}</span> this week {current.emoji}
      </p>
    </div>
  )
}
