'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

type Job = {
  slug: string
  title: string
  emoji: string
  diyCost: string
  diyCostNote: string
  proMin: number
  proMax: number
  callout: number
  diyCostMin: number
  diyCostMax: number
  timeLabel: string
  guideHref: string
}

const JOBS: Job[] = [
  { slug: 'dripping-tap',  title: 'Fix a dripping tap',    emoji: '🚰', diyCost: '£2–5',   diyCostNote: 'rubber washer + PTFE tape', proMin: 80,  proMax: 150, callout: 60, diyCostMin: 2,  diyCostMax: 5,  timeLabel: '45 mins', guideHref: '/guides/fix-a-dripping-tap'    },
  { slug: 'running-toilet',title: 'Fix a running toilet',  emoji: '🚽', diyCost: '£10–25', diyCostNote: 'replacement fill valve/flap',proMin: 80,  proMax: 150, callout: 60, diyCostMin: 10, diyCostMax: 25, timeLabel: '1 hour',  guideHref: '/guides/fix-a-running-toilet'  },
  { slug: 'blocked-drain', title: 'Unblock a drain',       emoji: '🪣', diyCost: 'Free',   diyCostNote: 'or £3 for a drain snake',  proMin: 60,  proMax: 120, callout: 60, diyCostMin: 0,  diyCostMax: 3,  timeLabel: '20 mins', guideHref: '/guides/unblock-a-drain'       },
  { slug: 'radiator',      title: 'Bleed a radiator',      emoji: '♨️', diyCost: '£1–3',   diyCostNote: 'bleed key + cloth',        proMin: 50,  proMax: 80,  callout: 50, diyCostMin: 1,  diyCostMax: 3,  timeLabel: '15 mins', guideHref: '/guides/bleed-a-radiator'      },
  { slug: 'paint-room',    title: 'Paint a room',          emoji: '🎨', diyCost: '£30–60', diyCostNote: 'paint, brushes, roller',   proMin: 200, proMax: 500, callout: 0,  diyCostMin: 30, diyCostMax: 60, timeLabel: '1 day',   guideHref: '/guides/paint-a-room'          },
  { slug: 'shelves',       title: 'Put up shelves',        emoji: '📚', diyCost: '£10–20', diyCostNote: 'wall plugs, screws',       proMin: 50,  proMax: 120, callout: 40, diyCostMin: 10, diyCostMax: 20, timeLabel: '1 hour',  guideHref: '/guides/put-up-shelves'        },
  { slug: 'wall-hole',     title: 'Fill a hole in a wall', emoji: '🧱', diyCost: '£3–5',   diyCostNote: 'filler + sandpaper',       proMin: 50,  proMax: 100, callout: 40, diyCostMin: 3,  diyCostMax: 5,  timeLabel: '30 mins', guideHref: '/guides/fill-a-hole-in-a-wall' },
  { slug: 'curtain-pole',  title: 'Fit a curtain pole',    emoji: '🪟', diyCost: '£0–15',  diyCostNote: 'fixings (pole not included)',proMin: 50, proMax: 80,  callout: 40, diyCostMin: 0,  diyCostMax: 15, timeLabel: '45 mins', guideHref: '/guides/fit-a-curtain-pole'    },
  { slug: 'lightbulb',     title: 'Change a lightbulb',    emoji: '💡', diyCost: '£5–15',  diyCostNote: 'replacement bulb',         proMin: 60,  proMax: 100, callout: 60, diyCostMin: 5,  diyCostMax: 15, timeLabel: '5 mins',  guideHref: '/guides/change-a-lightbulb'    },
]

export default function CostCalculator() {
  const [selected, setSelected] = useState<string>('')
  const [postcode, setPostcode] = useState('')

  const job = JOBS.find(j => j.slug === selected)
  const proMid = job ? Math.round((job.proMin + job.proMax) / 2) : 0
  const diyMid = job ? Math.round((job.diyCostMin + job.diyCostMax) / 2) : 0
  const saving = job ? proMid - diyMid : 0

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <a href="/" className="text-sm text-gray-400 hover:text-orange-400 mb-4 inline-block">← Back to home</a>
        <div className="text-4xl mb-3">💰</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">DIY Cost Calculator</h1>
        <p className="text-gray-300 max-w-xl mx-auto">See how much you save doing it yourself vs calling a tradesperson.</p>
      </div>

      <div className="max-w-xl mx-auto px-6 py-10">

        <div className="space-y-5 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Your postcode <span className="text-gray-400 font-normal">(used for regional rate estimates)</span></label>
            <input
              type="text"
              value={postcode}
              onChange={e => setPostcode(e.target.value.toUpperCase())}
              placeholder="e.g. SW1A 1AA"
              maxLength={8}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-400 mt-1">Rates shown are UK averages. Costs vary by region — London is typically 20–40% higher.</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select a job</label>
            <div className="grid grid-cols-1 gap-2">
              {JOBS.map(j => (
                <button
                  key={j.slug}
                  onClick={() => setSelected(j.slug)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all ${
                    selected === j.slug
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <span className="text-xl">{j.emoji}</span>
                  <div>
                    <span className="font-medium text-gray-900 text-sm">{j.title}</span>
                    <span className="text-xs text-gray-400 ml-2">{j.timeLabel}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {job && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>

            {/* Cost comparison */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-center">
                <p className="text-xs text-red-600 font-semibold uppercase tracking-wide mb-2">Tradesperson</p>
                <p className="text-3xl font-black text-red-700">£{job.proMin}–{job.proMax}</p>
                {job.callout > 0 && (
                  <p className="text-xs text-red-500 mt-1">incl. ~£{job.callout} callout fee</p>
                )}
                <p className="text-xs text-red-600 mt-2">+ waiting time (often days)</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
                <p className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-2">DIY</p>
                <p className="text-3xl font-black text-green-700">{job.diyCost}</p>
                <p className="text-xs text-green-600 mt-1">{job.diyCostNote}</p>
                <p className="text-xs text-green-600 mt-2">{job.timeLabel} of your time</p>
              </div>
            </div>

            {/* Saving */}
            <div className="bg-orange-500 text-white rounded-xl p-5 text-center">
              <p className="text-sm font-medium text-orange-100 mb-1">Average saving</p>
              <p className="text-4xl font-black">£{saving}</p>
              <p className="text-orange-100 text-sm mt-1">vs typical tradesperson quote</p>
            </div>

            {postcode && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                <p><strong>Regional note for {postcode.split(' ')[0]}:</strong> These are UK average rates. {postcode.startsWith('E') || postcode.startsWith('W') || postcode.startsWith('N') || postcode.startsWith('SW') || postcode.startsWith('SE') || postcode.startsWith('EC') || postcode.startsWith('WC') ? 'London rates are typically 20–40% higher than the national average shown.' : 'Rates in your area are broadly in line with the UK average shown.'}</p>
              </div>
            )}

            <a
              href={job.guideHref}
              className="block w-full bg-orange-500 text-white text-center py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
            >
              Read the guide: {job.title} →
            </a>
          </div>
        )}

        {!job && (
          <div className="text-center py-10 text-gray-400 border border-dashed border-gray-200 rounded-xl">
            <p className="text-3xl mb-2">👆</p>
            <p>Select a job above to see the cost comparison</p>
          </div>
        )}
      </div>
      <MobileNav />
    </main>
  )
}
