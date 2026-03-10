'use client'

import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

type ChecklistItem = {
  id: string
  text: string
  category: string
  tip?: string
}

const CHECKLIST: ChecklistItem[] = [
  // Heating
  { id: 'bleed-radiators', category: 'Heating', text: 'Bleed all radiators', tip: 'Use a radiator key — takes 5 mins per radiator. Our guide shows you how.' },
  { id: 'check-boiler-pressure', category: 'Heating', text: 'Check boiler pressure (should read 1–1.5 bar)', tip: 'Look at the gauge on your boiler. If below 1 bar, top it up using the filling loop.' },
  { id: 'boiler-service', category: 'Heating', text: 'Book an annual boiler service', tip: 'Gas Safe registered engineer only. Usually £60–100. Catches problems early.' },
  { id: 'trvs', category: 'Heating', text: 'Check thermostatic radiator valves (TRVs) turn freely', tip: "If they're stuck from summer, they may not respond to temperature changes." },
  // Plumbing
  { id: 'lag-pipes', category: 'Plumbing', text: 'Lag exposed pipes in loft, garage and outbuildings', tip: 'Foam lagging costs £2–3 per metre. Prevents burst pipes in a cold snap.' },
  { id: 'outside-taps', category: 'Plumbing', text: 'Turn off outside taps and drain them', tip: 'Find the indoor isolation valve (usually under the sink) and turn it off. Leave outdoor tap open.' },
  { id: 'under-sinks', category: 'Plumbing', text: 'Check under sinks for slow drips or staining', tip: 'Catching a slow drip now saves a bigger problem in January.' },
  // Insulation & Draughts
  { id: 'draught-doors', category: 'Insulation', text: 'Check draught excluders on external doors', tip: 'You can feel draughts with a lit incense stick on a windy day. Self-adhesive strips cost £3–5.' },
  { id: 'window-seals', category: 'Insulation', text: 'Check window seals aren\'t cracked or peeling', tip: 'Silicone sealant is £3 a tube and takes 10 minutes to apply.' },
  { id: 'loft-hatch', category: 'Insulation', text: 'Check loft hatch has draught seal and insulation on top', tip: 'A cold loft hatch can lose as much heat as a window left open.' },
  // Outdoor
  { id: 'clear-gutters', category: 'Outdoor', text: 'Clear gutters and downpipes of leaves and debris', tip: 'Blocked gutters overflow and can cause damp. Use a trowel from a ladder — always have someone with you.' },
  { id: 'check-roof', category: 'Outdoor', text: 'Visually check roof tiles from ground level', tip: 'Look for obviously missing or slipped tiles with binoculars. Don\'t go up yourself — call a roofer.' },
  // Safety
  { id: 'smoke-alarms', category: 'Safety', text: 'Test smoke and carbon monoxide alarms', tip: 'Press the test button. Replace batteries if they chirp, or replace the whole unit if over 10 years old.' },
  { id: 'co-alarm', category: 'Safety', text: 'Check carbon monoxide alarm is present (required if gas boiler)', tip: 'CO is colourless and odourless. A CO alarm is legally required near all gas appliances.' },
]

const CATEGORY_COLOURS: Record<string, string> = {
  Heating:    'bg-red-100 text-red-700',
  Plumbing:   'bg-blue-100 text-blue-700',
  Insulation: 'bg-yellow-100 text-yellow-700',
  Outdoor:    'bg-green-100 text-green-700',
  Safety:     'bg-purple-100 text-purple-700',
}

const STORAGE_KEY = 'fixitfirst-winter-checklist'

export default function WinterChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [openTip, setOpenTip] = useState<string | null>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setChecked(new Set(JSON.parse(saved)))
    } catch {}
  }, [])

  function toggle(id: string) {
    setChecked(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])) } catch {}
      return next
    })
  }

  function resetAll() {
    setChecked(new Set())
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
  }

  const total = CHECKLIST.length
  const done = checked.size
  const percent = Math.round((done / total) * 100)

  const categories = Array.from(new Set(CHECKLIST.map(i => i.category)))

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-2xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">← Back to home</a>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">❄️</span>
            <h1 className="text-3xl font-bold text-gray-900">Winter Home Checklist</h1>
          </div>
          <p className="text-gray-500 mb-6">Get your home ready before the cold hits. Tick each item off as you go — your progress saves automatically.</p>

          {/* Progress bar */}
          <div className="bg-gray-100 rounded-xl p-5 mb-2">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900">{done} of {total} done</span>
              <span className="text-sm font-medium text-orange-500">{percent}%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
            {done === total && (
              <p className="text-green-700 font-medium text-sm mt-3">🎉 Your home is winter-ready!</p>
            )}
          </div>
        </div>

        {categories.map(cat => {
          const items = CHECKLIST.filter(i => i.category === cat)
          const catDone = items.filter(i => checked.has(i.id)).length
          return (
            <div key={cat} className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold text-gray-900">{cat}</h2>
                <span className="text-xs text-gray-400">{catDone}/{items.length}</span>
              </div>
              <div className="space-y-3">
                {items.map(item => (
                  <div key={item.id} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div
                      className={`flex items-start gap-3 p-4 cursor-pointer transition-colors ${checked.has(item.id) ? 'bg-green-50' : 'bg-white hover:bg-gray-50'}`}
                      onClick={() => toggle(item.id)}
                    >
                      <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${checked.has(item.id) ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                        {checked.has(item.id) && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium ${checked.has(item.id) ? 'line-through text-gray-400' : 'text-gray-900'}`}>{item.text}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium mt-1 inline-block ${CATEGORY_COLOURS[cat]}`}>{cat}</span>
                      </div>
                      {item.tip && (
                        <button
                          onClick={e => { e.stopPropagation(); setOpenTip(openTip === item.id ? null : item.id) }}
                          className="text-gray-400 hover:text-gray-600 flex-shrink-0 text-lg"
                          aria-label="Show tip"
                        >
                          💡
                        </button>
                      )}
                    </div>
                    {item.tip && openTip === item.id && (
                      <div className="px-4 pb-4 pt-0 bg-blue-50 border-t border-blue-100">
                        <p className="text-sm text-blue-800">{item.tip}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">Progress saves to your browser automatically.</p>
          {done > 0 && (
            <button
              onClick={resetAll}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Reset all
            </button>
          )}
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
