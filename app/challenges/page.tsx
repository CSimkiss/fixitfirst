'use client'

import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

type Challenge = {
  id: string
  title: string
  description: string
  emoji: string
  points: number
  difficulty: 'Easy' | 'Medium' | 'Harder'
  guideHref?: string
}

const ALL_CHALLENGES: Challenge[] = [
  {
    id: 'bleed-all-rads',
    title: 'Bleed every radiator in your home',
    description: 'Go room by room and bleed each radiator. Each one takes 2 minutes. Your heating will be noticeably more efficient.',
    emoji: '🔧',
    points: 30,
    difficulty: 'Easy',
    guideHref: '/guides/bleed-a-radiator',
  },
  {
    id: 'fix-drip',
    title: 'Fix that dripping tap you\'ve been ignoring',
    description: 'A dripping tap wastes 5,500 litres of water a year. A £2 washer fixes it. No more excuses.',
    emoji: '💧',
    points: 20,
    difficulty: 'Easy',
    guideHref: '/guides/fix-a-dripping-tap',
  },
  {
    id: 'clear-drain',
    title: 'Clear a slow-draining sink or shower',
    description: 'If your water drains slowly, it takes 20 minutes and zero tools to fix. Do it today.',
    emoji: '🚿',
    points: 10,
    difficulty: 'Easy',
    guideHref: '/guides/unblock-a-drain',
  },
  {
    id: 'fill-holes',
    title: 'Fill all nail holes in one room',
    description: 'Pick one room and fill every hole from old nails and hooks. Sand smooth. You\'ll be amazed how good it looks.',
    emoji: '🪣',
    points: 20,
    difficulty: 'Easy',
    guideHref: '/guides/fill-a-hole-in-a-wall',
  },
  {
    id: 'led-swap',
    title: 'Swap all remaining bulbs to LED',
    description: 'LED bulbs use 80% less energy. Go room to room and swap out any remaining incandescent or halogen bulbs.',
    emoji: '💡',
    points: 15,
    difficulty: 'Easy',
    guideHref: '/guides/change-a-lightbulb',
  },
  {
    id: 'boiler-check',
    title: 'Check your boiler pressure',
    description: 'Boiler pressure should sit between 1 and 1.5 bar. If it\'s low, repressurising takes 5 minutes.',
    emoji: '🌡️',
    points: 10,
    difficulty: 'Easy',
  },
  {
    id: 'smoke-alarm-test',
    title: 'Test every smoke alarm in your home',
    description: 'Hold the test button for a few seconds. If any fail, replace the battery immediately.',
    emoji: '🔔',
    points: 10,
    difficulty: 'Easy',
  },
  {
    id: 'silicone-seal',
    title: 'Re-seal your bath or shower',
    description: 'Old silicone goes mouldy and lets water behind tiles. Remove it, clean the surface, and apply fresh silicone.',
    emoji: '🛁',
    points: 25,
    difficulty: 'Medium',
  },
  {
    id: 'shelf-challenge',
    title: 'Put up a shelf you\'ve been putting off',
    description: 'Pick one wall in your home that needs a shelf. Measure twice, drill once. Give it a proper go.',
    emoji: '📦',
    points: 30,
    difficulty: 'Medium',
    guideHref: '/guides/put-up-shelves',
  },
  {
    id: 'curtain-pole',
    title: 'Fit a curtain pole in a room that needs one',
    description: 'Blinds or bare windows? Curtain poles look great and they\'re surprisingly easy to fit.',
    emoji: '🪟',
    points: 20,
    difficulty: 'Medium',
    guideHref: '/guides/fit-a-curtain-pole',
  },
  {
    id: 'running-toilet',
    title: 'Fix a running toilet',
    description: 'A constantly running toilet wastes up to 400 litres a day. Fix the ballcock or fill valve — it\'s easier than it sounds.',
    emoji: '🚽',
    points: 30,
    difficulty: 'Harder',
    guideHref: '/guides/fix-a-running-toilet',
  },
  {
    id: 'paint-one-wall',
    title: 'Paint a feature wall',
    description: 'You don\'t have to do a whole room. Pick one wall, choose a bold colour, and do it properly. Tape the edges. Roll it out.',
    emoji: '🎨',
    points: 25,
    difficulty: 'Medium',
    guideHref: '/guides/paint-a-room',
  },
]

// Rotate 4 challenges per "week"
function getThisWeeksChallenges(): Challenge[] {
  const weekNum = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000))
  const startIdx = (weekNum * 4) % ALL_CHALLENGES.length
  const result: Challenge[] = []
  for (let i = 0; i < 4; i++) {
    result.push(ALL_CHALLENGES[(startIdx + i) % ALL_CHALLENGES.length])
  }
  return result
}

const STORAGE_KEY = 'fixitfirst-challenges'
const POINTS_KEY = 'fixitfirst-challenge-points'

const difficultyColour: Record<string, string> = {
  Easy: 'bg-green-100 text-green-700',
  Medium: 'bg-yellow-100 text-yellow-700',
  Harder: 'bg-red-100 text-red-700',
}

export default function ChallengesPage() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({})
  const [totalPoints, setTotalPoints] = useState(0)
  const [mounted, setMounted] = useState(false)

  const thisWeek = getThisWeeksChallenges()

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    const pts = localStorage.getItem(POINTS_KEY)
    setCompleted(raw ? JSON.parse(raw) : {})
    setTotalPoints(pts ? parseInt(pts) : 0)
    setMounted(true)
  }, [])

  function toggle(challenge: Challenge) {
    setCompleted(prev => {
      const next = { ...prev }
      const wasComplete = !!next[challenge.id]
      if (wasComplete) {
        delete next[challenge.id]
        setTotalPoints(p => Math.max(0, p - challenge.points))
        localStorage.setItem(POINTS_KEY, String(Math.max(0, totalPoints - challenge.points)))
      } else {
        next[challenge.id] = true
        setTotalPoints(p => p + challenge.points)
        localStorage.setItem(POINTS_KEY, String(totalPoints + challenge.points))
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }

  const thisWeekDone = thisWeek.filter(c => completed[c.id]).length

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <p className="text-orange-400 text-sm font-semibold uppercase tracking-wide mb-2">Weekly challenge</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">This week&apos;s fixes</h1>
        <p className="text-gray-300 text-lg mb-6">Four tasks. One week. How many can you tick off?</p>
        {mounted && (
          <div className="inline-flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl px-6 py-3">
            <div className="text-center">
              <p className="text-2xl font-bold">{thisWeekDone}/{thisWeek.length}</p>
              <p className="text-gray-400 text-xs">This week</p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-400">⭐ {totalPoints}</p>
              <p className="text-gray-400 text-xs">Total points</p>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-10">

        {/* This week's challenges */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">This week&apos;s challenges</h2>
          <div className="space-y-4">
            {thisWeek.map((challenge) => {
              const done = mounted && !!completed[challenge.id]
              return (
                <div
                  key={challenge.id}
                  className={`rounded-2xl border-2 p-6 transition-all ${done ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-white hover:border-orange-200'}`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => toggle(challenge)}
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold transition-all ${
                        done ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-orange-400'
                      }`}
                    >
                      {done ? '✓' : ''}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-xl">{challenge.emoji}</span>
                        <h3 className={`font-semibold ${done ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                          {challenge.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyColour[challenge.difficulty]}`}>
                          {challenge.difficulty}
                        </span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">
                          ⭐ +{challenge.points} pts
                        </span>
                        {challenge.guideHref && (
                          <a
                            href={challenge.guideHref}
                            className="text-xs text-orange-500 hover:underline"
                          >
                            View guide →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* All challenges */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">All challenges</h2>
          <p className="text-sm text-gray-500 mb-4">Complete any time — points count whenever you tick them off.</p>
          <div className="space-y-3">
            {ALL_CHALLENGES.filter(c => !thisWeek.find(tw => tw.id === c.id)).map((challenge) => {
              const done = mounted && !!completed[challenge.id]
              return (
                <div
                  key={challenge.id}
                  className={`rounded-xl border p-4 flex items-start gap-3 transition-all ${done ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:border-orange-200'}`}
                >
                  <button
                    onClick={() => toggle(challenge)}
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold transition-all ${
                      done ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-orange-400'
                    }`}
                  >
                    {done ? '✓' : ''}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span>{challenge.emoji}</span>
                      <span className={`text-sm font-medium ${done ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                        {challenge.title}
                      </span>
                      <span className="ml-auto text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium shrink-0">
                        ⭐ +{challenge.points}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>

      <MobileNav />
    </main>
  )
}
