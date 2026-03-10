import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import DifficultyMeter from '@/components/DifficultyMeter'
import { ALL_GUIDES } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'DIY for Renters | FixItFirst',
  description: 'Renting? Here\'s what repairs you can legally do yourself, what to ask your landlord for, and how to document everything.',
}

const RENTER_CAN = [
  { task: 'Bleed radiators', note: 'Always allowed — this is maintenance, not modification.' },
  { task: 'Change lightbulbs', note: 'Your responsibility as a tenant in most tenancy agreements.' },
  { task: 'Unblock drains', note: 'Tenants are usually responsible for day-to-day blockages.' },
  { task: 'Fix a dripping tap washer', note: 'Allowed in most tenancies — check your agreement.' },
  { task: 'Hang pictures (small nails)', note: 'Usually fine — most landlords expect minor wall holes.' },
  { task: 'Replace blown fuses / trip switches', note: 'Yes — this is routine maintenance.' },
]

const RENTER_CANNOT = [
  { task: 'Drill large holes or install anchors without permission', note: 'Always ask — get permission in writing.' },
  { task: 'Repaint rooms without permission', note: 'Some landlords allow it but require original colours on exit.' },
  { task: 'Replace fixtures (taps, lights, handles) without permission', note: 'Even with better ones — the landlord owns them.' },
  { task: 'Alter the central heating system', note: 'Ask the landlord to arrange a heating engineer.' },
  { task: 'Change door locks without telling the landlord', note: 'You can add a lock but must give the landlord a key.' },
]

const LANDLORD_DUTIES = [
  'Keeping the structure and exterior in repair (walls, roof, gutters)',
  'Keeping installations for water, gas, electricity and sanitation in repair and working order',
  'Heating and hot water systems — maintenance and repairs',
  'Fixing damp caused by structural issues (not condensation from behaviour)',
  'Ensuring the property is free from serious health hazards (mould, pests)',
]

const RENTER_SLUGS = [
  'bleed-a-radiator',
  'change-a-lightbulb',
  'unblock-a-drain',
  'fix-a-dripping-tap',
  'fill-a-hole-in-a-wall',
]

export default function RenterPage() {
  const renterGuides = RENTER_SLUGS
    .map(slug => ALL_GUIDES.find(g => g.slug === slug))
    .filter(Boolean) as typeof ALL_GUIDES

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-teal-800 text-white px-6 py-16 text-center">
        <a href="/" className="text-sm text-teal-300 hover:text-white mb-4 inline-block">← Back to home</a>
        <div className="text-5xl mb-4">🏠</div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">DIY for Renters</h1>
        <p className="text-teal-100 text-xl max-w-xl mx-auto">Know your rights. Know your limits. Stay on good terms with your landlord.</p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* What you can do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h2 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <span>✅</span> You can usually do
            </h2>
            <div className="space-y-3">
              {RENTER_CAN.map((item, i) => (
                <div key={i}>
                  <p className="text-sm font-semibold text-green-900">{item.task}</p>
                  <p className="text-xs text-green-700">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h2 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
              <span>⚠️</span> Ask permission first
            </h2>
            <div className="space-y-3">
              {RENTER_CANNOT.map((item, i) => (
                <div key={i}>
                  <p className="text-sm font-semibold text-amber-900">{item.task}</p>
                  <p className="text-xs text-amber-700">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Landlord duties */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-blue-900 mb-3 text-lg">Your landlord&apos;s legal responsibilities</h2>
          <p className="text-sm text-blue-700 mb-4">Under the <strong>Landlord and Tenant Act 1985</strong> and the <strong>Homes (Fitness for Human Habitation) Act 2018</strong>, landlords are legally required to:</p>
          <ul className="space-y-2">
            {LANDLORD_DUTIES.map((duty, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-blue-900">
                <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                {duty}
              </li>
            ))}
          </ul>
          <p className="text-xs text-blue-600 mt-4">If your landlord refuses to carry out their legal responsibilities, contact your local council&apos;s Environmental Health department.</p>
        </div>

        {/* How to document repairs */}
        <div className="bg-gray-950 text-white rounded-xl p-6 mb-10">
          <h2 className="font-bold text-xl mb-4">How to document repair requests properly</h2>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold flex-shrink-0">1.</span>
              <p><strong className="text-white">Always write it down.</strong> Email or text — not just a phone call. You need a paper trail if things escalate.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold flex-shrink-0">2.</span>
              <p><strong className="text-white">Photograph the problem.</strong> Date-stamped photos are evidence. Keep them somewhere you can find them.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold flex-shrink-0">3.</span>
              <p><strong className="text-white">Be specific.</strong> &quot;The bathroom tap has been dripping since 15 January&quot; is better than &quot;there&apos;s a problem with the tap&quot;.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold flex-shrink-0">4.</span>
              <p><strong className="text-white">Give a reasonable deadline.</strong> 14 days is standard for non-urgent repairs. Emergency (no heating in winter) = 24–48 hours.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold flex-shrink-0">5.</span>
              <p><strong className="text-white">Keep all replies.</strong> If the landlord ignores you, Citizens Advice can help you escalate.</p>
            </div>
          </div>
        </div>

        {/* Renter-friendly guides */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Repairs you can do without asking</h2>
        <p className="text-gray-500 mb-6">These jobs are safe, legal, and expected of you as a tenant.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {renterGuides.map(guide => (
            <a
              key={guide.slug}
              href={guide.href}
              className="border border-gray-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full font-medium">{guide.category}</span>
                <DifficultyMeter level={guide.difficulty} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">{guide.title}</h3>
              <p className="text-xs text-green-700 font-medium mb-3">{guide.saves}</p>
              <div className="flex gap-4 text-sm text-gray-500">
                <span>{guide.time}</span>
                <span>{guide.cost}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <p className="font-semibold text-gray-900 mb-1">Need more advice?</p>
          <p className="text-sm text-gray-600 mb-4">Citizens Advice and Shelter both have excellent free renter advice.</p>
          <a href="/faq" className="inline-block bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">Read our FAQ</a>
        </div>
      </div>

      <MobileNav />
    </main>
  )
}
