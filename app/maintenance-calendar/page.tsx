import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Home Maintenance Calendar | FixItFirst',
  description: 'A month-by-month guide to home maintenance. Know exactly what to check each month to avoid expensive repairs.',
}

type MonthTask = {
  task: string
  category: 'Heating' | 'Plumbing' | 'Safety' | 'Structure' | 'Exterior' | 'General'
  guideHref?: string
  urgency: 'do-it' | 'check' | 'prepare'
}

const MONTHS: { month: string; emoji: string; intro: string; tasks: MonthTask[] }[] = [
  {
    month: 'January',
    emoji: '🥶',
    intro: 'Coldest month. Frozen pipes and heating failures peak here.',
    tasks: [
      { task: 'Know where your stopcock is — freeze risk is highest now', category: 'Plumbing', urgency: 'do-it' },
      { task: 'Check boiler pressure (should be 1–1.5 bar)', category: 'Heating', urgency: 'do-it' },
      { task: 'Lag any exposed outdoor or loft pipes', category: 'Plumbing', urgency: 'do-it' },
      { task: 'Test smoke and CO alarms — cold air settles, CO risk rises', category: 'Safety', urgency: 'check' },
    ],
  },
  {
    month: 'February',
    emoji: '❄️',
    intro: 'Still cold. Focus on heating efficiency before March bills land.',
    tasks: [
      { task: 'Bleed every radiator in your home', category: 'Heating', guideHref: '/guides/bleed-a-radiator', urgency: 'do-it' },
      { task: 'Check window and door seals — replace any that have failed', category: 'General', urgency: 'check' },
      { task: 'Clear any ice or leaves from gutters', category: 'Exterior', urgency: 'check' },
      { task: 'Check loft insulation — minimum 270mm depth recommended', category: 'Structure', urgency: 'check' },
    ],
  },
  {
    month: 'March',
    emoji: '🌱',
    intro: 'Post-winter inspection time. The freeze is over — now check what it did.',
    tasks: [
      { task: 'Inspect roof for loose or damaged tiles after winter storms', category: 'Structure', urgency: 'check' },
      { task: 'Check exterior brickwork for frost damage or cracks', category: 'Exterior', urgency: 'check' },
      { task: 'Test outdoor taps — turn them on and check for leaks', category: 'Plumbing', urgency: 'check' },
      { task: 'Service your lawnmower before you need it', category: 'General', urgency: 'prepare' },
    ],
  },
  {
    month: 'April',
    emoji: '🌧️',
    intro: 'Wet month. Gutters, drains, and drainage become critical.',
    tasks: [
      { task: 'Clean gutters — spring leaves and debris block them fast', category: 'Exterior', urgency: 'do-it' },
      { task: 'Check all external drains flow freely', category: 'Plumbing', guideHref: '/guides/unblock-a-drain', urgency: 'check' },
      { task: 'Inspect silicone seals around baths, showers, and windows', category: 'General', urgency: 'check' },
      { task: 'Touch up exterior paintwork before summer', category: 'Exterior', urgency: 'prepare' },
    ],
  },
  {
    month: 'May',
    emoji: '☀️',
    intro: 'Longer days. Best month to tackle outdoor DIY.',
    tasks: [
      { task: 'Check garden fencing for winter damage — replace rotten posts', category: 'Exterior', urgency: 'check' },
      { task: 'Oil gate hinges and garden shed locks', category: 'Exterior', urgency: 'do-it' },
      { task: 'Clean extractor fan grilles — they clog in winter', category: 'General', urgency: 'do-it' },
      { task: 'Check patio or decking for loose or raised boards', category: 'Structure', urgency: 'check' },
    ],
  },
  {
    month: 'June',
    emoji: '🌤️',
    intro: 'Dry weather makes it easy to spot exterior issues.',
    tasks: [
      { task: 'Clean between bathroom tiles and check for damp spots', category: 'General', urgency: 'check' },
      { task: 'Check the roof from outside — use binoculars, not a ladder', category: 'Structure', urgency: 'check' },
      { task: 'Lubricate window hinges and locks', category: 'General', urgency: 'do-it' },
      { task: 'Flush the cold water tank if you have one', category: 'Plumbing', urgency: 'check' },
    ],
  },
  {
    month: 'July',
    emoji: '🏖️',
    intro: 'Holidays mean empty houses. Security and prevention matter.',
    tasks: [
      { task: 'Check all locks and window catches before going away', category: 'Safety', urgency: 'do-it' },
      { task: 'Look for damp patches in the loft — summer shows roof leaks', category: 'Structure', urgency: 'check' },
      { task: 'Re-paint or re-stain any timber garden furniture', category: 'Exterior', urgency: 'prepare' },
      { task: 'Check your boiler service is due before winter', category: 'Heating', urgency: 'prepare' },
    ],
  },
  {
    month: 'August',
    emoji: '🌞',
    intro: 'Book your boiler service now — engineers are cheap in summer.',
    tasks: [
      { task: 'Book annual boiler service before the autumn rush', category: 'Heating', urgency: 'do-it' },
      { task: 'Clean windows inside and out — spiders and dust build up', category: 'General', urgency: 'do-it' },
      { task: 'Check expansion tank in loft for signs of corrosion', category: 'Plumbing', urgency: 'check' },
      { task: 'Sand and re-oil any hardwood floors showing wear', category: 'Structure', urgency: 'prepare' },
    ],
  },
  {
    month: 'September',
    emoji: '🍂',
    intro: 'Start of autumn. Prepare everything before the cold hits.',
    tasks: [
      { task: 'Clear gutters and drains before leaves fall en masse', category: 'Exterior', urgency: 'do-it' },
      { task: 'Test your heating — turn it on now, not when it first gets cold', category: 'Heating', urgency: 'do-it' },
      { task: 'Bleed radiators if there are any cold spots', category: 'Heating', guideHref: '/guides/bleed-a-radiator', urgency: 'check' },
      { task: 'Insulate outdoor pipe runs before first frost', category: 'Plumbing', urgency: 'prepare' },
    ],
  },
  {
    month: 'October',
    emoji: '🎃',
    intro: 'Cold is coming. Last chance for outdoor work.',
    tasks: [
      { task: 'Draught-proof letterboxes, keyholes, and cat flaps', category: 'General', urgency: 'do-it' },
      { task: 'Check chimney flue is clear if you have an open fire', category: 'Safety', urgency: 'do-it' },
      { task: 'Put garden furniture away or cover it for winter', category: 'Exterior', urgency: 'prepare' },
      { task: 'Test smoke alarms and CO detector — replace batteries', category: 'Safety', urgency: 'do-it' },
    ],
  },
  {
    month: 'November',
    emoji: '🌧️',
    intro: 'Heating on full blast. Efficiency is everything now.',
    tasks: [
      { task: 'Top up boiler pressure if below 1 bar', category: 'Heating', urgency: 'do-it' },
      { task: 'Fix any dripping taps before bills peak', category: 'Plumbing', guideHref: '/guides/fix-a-dripping-tap', urgency: 'do-it' },
      { task: 'Check timer and thermostat settings on your heating', category: 'Heating', urgency: 'check' },
      { task: 'Clear leaves from paths to prevent slipping hazards', category: 'Exterior', urgency: 'do-it' },
    ],
  },
  {
    month: 'December',
    emoji: '🎄',
    intro: 'Know your home before the freeze hits. Prevention beats crisis.',
    tasks: [
      { task: 'Find and test your stopcock — know how to shut water off fast', category: 'Plumbing', urgency: 'do-it' },
      { task: 'Check pipe insulation in loft and unheated spaces', category: 'Plumbing', urgency: 'check' },
      { task: 'Test smoke and CO alarms before guests stay over', category: 'Safety', urgency: 'do-it' },
      { task: 'Bleed radiators one last time if any feel cold at the top', category: 'Heating', guideHref: '/guides/bleed-a-radiator', urgency: 'check' },
    ],
  },
]

const urgencyLabel: Record<string, string> = {
  'do-it': 'Do it',
  'check': 'Check',
  'prepare': 'Prepare',
}

const urgencyColour: Record<string, string> = {
  'do-it': 'bg-red-100 text-red-700',
  'check': 'bg-yellow-100 text-yellow-700',
  'prepare': 'bg-blue-100 text-blue-700',
}

const categoryColour: Record<string, string> = {
  Heating: 'bg-orange-50 text-orange-700 border-orange-200',
  Plumbing: 'bg-blue-50 text-blue-700 border-blue-200',
  Safety: 'bg-red-50 text-red-700 border-red-200',
  Structure: 'bg-stone-50 text-stone-700 border-stone-200',
  Exterior: 'bg-green-50 text-green-700 border-green-200',
  General: 'bg-gray-50 text-gray-700 border-gray-200',
}

export default function MaintenanceCalendarPage() {
  const now = new Date()
  const currentMonth = now.getMonth() // 0-indexed

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Home Maintenance Calendar</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Know exactly what to check every month. Small jobs now prevent big bills later.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">

        {/* This month highlight */}
        <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-6">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-wide mb-1">This month</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {MONTHS[currentMonth].emoji} {MONTHS[currentMonth].month}
          </h2>
          <p className="text-gray-600 mb-4">{MONTHS[currentMonth].intro}</p>
          <div className="space-y-2">
            {MONTHS[currentMonth].tasks.map((task, i) => (
              <div key={i} className={`rounded-xl border p-3 flex items-start gap-3 ${categoryColour[task.category]}`}>
                <span className="text-xs font-semibold mt-0.5 shrink-0 px-2 py-0.5 rounded-full bg-white/60">
                  {urgencyLabel[task.urgency]}
                </span>
                <span className="text-sm">
                  {task.task}
                  {task.guideHref && (
                    <a href={task.guideHref} className="ml-2 text-orange-600 hover:underline text-xs font-medium">
                      View guide →
                    </a>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* All months */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {MONTHS.map((m, idx) => {
            const isCurrentMonth = idx === currentMonth
            return (
              <div
                key={m.month}
                className={`rounded-2xl border p-5 ${isCurrentMonth ? 'border-orange-300 bg-orange-50' : 'border-gray-200'}`}
              >
                <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <span>{m.emoji}</span>
                  <span>{m.month}</span>
                  {isCurrentMonth && (
                    <span className="ml-auto text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">Now</span>
                  )}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{m.intro}</p>
                <ul className="space-y-1.5">
                  {m.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                      <span className={`shrink-0 mt-0.5 px-1.5 py-0.5 rounded text-xs font-medium ${urgencyColour[task.urgency]}`}>
                        {urgencyLabel[task.urgency]}
                      </span>
                      <span>
                        {task.task}
                        {task.guideHref && (
                          <a href={task.guideHref} className="ml-1 text-orange-500 hover:underline">→</a>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
          <p className="font-semibold text-blue-900 mb-1">Prevention beats cure every time</p>
          <p className="text-sm text-blue-700">An hour of maintenance saves £100s in emergency call-out fees.</p>
        </div>

      </div>

      <MobileNav />
    </main>
  )
}
