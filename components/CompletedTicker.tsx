'use client'

import { useState, useEffect } from 'react'

// Rough percentile estimates — motivating but honest
function percentileFor(count: number): number {
  if (count >= 11) return 90
  if (count >= 7)  return 85
  if (count >= 5)  return 75
  if (count >= 3)  return 65
  if (count >= 2)  return 55
  return 45
}

const socialProof = [
  { guide: 'Fix a dripping tap',    count: 247, emoji: '🔧' },
  { guide: 'Unblock a drain',       count: 189, emoji: '🚿' },
  { guide: 'Change a lightbulb',    count: 156, emoji: '💡' },
  { guide: 'Bleed a radiator',      count: 134, emoji: '🔥' },
  { guide: 'Put up shelves',        count: 112, emoji: '📚' },
  { guide: 'Paint a room',          count: 98,  emoji: '🎨' },
  { guide: 'Fix a running toilet',  count: 87,  emoji: '🚽' },
  { guide: 'Fill a hole in a wall', count: 76,  emoji: '🧱' },
]

type Props = {
  /**
   * Pass the user's guide completion count once known.
   * Pass -1 while still loading (shows nothing until resolved).
   */
  completedCount?: number
}

export default function CompletedTicker({ completedCount = -1 }: Props) {
  const [index, setIndex]     = useState(0)
  const [visible, setVisible] = useState(true)

  // Only rotate the social proof ticker when we're showing it
  const showPersonalised = completedCount > 0
  const stillLoading     = completedCount === -1

  useEffect(() => {
    if (showPersonalised) return // no rotation needed for personalised view
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % socialProof.length)
        setVisible(true)
      }, 300)
    }, 4000)
    return () => clearInterval(interval)
  }, [showPersonalised])

  // Don't render while still loading (avoid flash of wrong content)
  if (stillLoading) return null

  const pct     = percentileFor(completedCount)
  const current = socialProof[index]

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl px-5 py-3 flex items-center gap-3 max-w-xl mx-auto">
      <span className="text-green-600 text-xl shrink-0">✓</span>
      {showPersonalised ? (
        <p className="text-sm text-green-800 font-medium">
          You&apos;ve completed{' '}
          <span className="font-bold">{completedCount} guide{completedCount !== 1 ? 's' : ''}</span>
          {' '}— you&apos;re ahead of{' '}
          <span className="font-bold">{pct}% of users</span> on FixItFirst 🎯
        </p>
      ) : (
        <p
          className="text-sm text-green-800 font-medium transition-opacity duration-300"
          style={{ opacity: visible ? 1 : 0 }}
        >
          Join 100s saving money every week —{' '}
          <span className="font-bold">{current.count} people</span> completed{' '}
          <span className="font-bold">{current.guide}</span> {current.emoji}
        </p>
      )}
    </div>
  )
}
