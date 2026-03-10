import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import DifficultyMeter from '@/components/DifficultyMeter'
import { ALL_GUIDES } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Just Got the Keys? Start Here | FixItFirst',
  description: 'Just moved into your first home? Here are the 5 most important DIY skills to learn first — plus what to check in your first week.',
}

const FIRST_WEEK_CHECKS = [
  { emoji: '🚰', task: 'Find your stopcock', why: 'Turn it off and back on so you know it works. Location: usually under the kitchen sink.' },
  { emoji: '⚡', task: 'Find your fusebox', why: 'Know which switch controls which circuit. Label them if they aren\'t already.' },
  { emoji: '🔥', task: 'Find your gas meter and shut-off', why: 'Outside the house or in a meter cupboard. You need to know where it is before an emergency.' },
  { emoji: '♨️', task: 'Check the boiler pressure', why: 'Should read 1–1.5 bar. If it\'s lower, top it up via the filling loop before winter.' },
  { emoji: '🔔', task: 'Test smoke and CO alarms', why: 'Press the test button. Replace batteries if they chirp. Buy a CO alarm if there isn\'t one.' },
]

const PRIORITY_SLUGS = [
  'change-a-lightbulb',
  'bleed-a-radiator',
  'unblock-a-drain',
  'fix-a-dripping-tap',
  'fill-a-hole-in-a-wall',
]

const PRIORITY_REASONS: Record<string, string> = {
  'change-a-lightbulb':    'You\'ll need this within weeks. Takes 5 minutes and costs £5–15.',
  'bleed-a-radiator':      'Do this every October. Cold radiators in winter cost you money every day.',
  'unblock-a-drain':       'Happens in every home. Free to fix yourself, £60–120 to call a plumber.',
  'fix-a-dripping-tap':    'A dripping tap wastes 5,500 litres a year and drives you mad at night.',
  'fill-a-hole-in-a-wall': 'Every renter leaves holes. Every owner makes them. Essential skill.',
}

export default function FirstHomePage() {
  const priorityGuides = PRIORITY_SLUGS
    .map(slug => ALL_GUIDES.find(g => g.slug === slug))
    .filter(Boolean) as typeof ALL_GUIDES

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-16 text-center">
        <a href="/" className="text-sm text-gray-400 hover:text-orange-400 mb-4 inline-block">← Back to home</a>
        <div className="text-5xl mb-4">🔑</div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Just got the keys?</h1>
        <p className="text-gray-200 text-xl max-w-2xl mx-auto">Here&apos;s what to learn first.</p>
        <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">Nobody teaches you this stuff. These 5 skills will cover 90% of what goes wrong in your first year.</p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* First week checklist */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-orange-900 mb-4 text-lg">Do this in your first week</h2>
          <p className="text-sm text-orange-700 mb-4">Before anything breaks, make sure you know where the important things are.</p>
          <div className="space-y-4">
            {FIRST_WEEK_CHECKS.map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.task}</p>
                  <p className="text-sm text-gray-600">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Priority guides */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">The 5 most important guides to learn first</h2>
        <p className="text-gray-500 mb-6">In order of how soon you&apos;ll need them.</p>

        <div className="space-y-4 mb-12">
          {priorityGuides.map((guide, i) => (
            <a
              key={guide.slug}
              href={guide.href}
              className="flex gap-4 border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">{guide.title}</h3>
                  <DifficultyMeter level={guide.difficulty} />
                </div>
                <p className="text-xs text-orange-600 font-medium mb-1">{PRIORITY_REASONS[guide.slug]}</p>
                <div className="flex gap-4 text-xs text-gray-400">
                  <span>{guide.time}</span>
                  <span>{guide.cost}</span>
                  <span className="text-green-600 font-medium">{guide.saves}</span>
                </div>
              </div>
              <span className="text-orange-400 text-lg group-hover:translate-x-1 transition-transform flex-shrink-0 self-center">→</span>
            </a>
          ))}
        </div>

        {/* What to do when something breaks */}
        <div className="bg-gray-50 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-gray-900 mb-4">What to do when something breaks</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <p><strong>1. Don&apos;t panic.</strong> Most household problems look worse than they are.</p>
            <p><strong>2. Search this site first.</strong> If it&apos;s a common problem, we have a guide for it.</p>
            <p><strong>3. Isolate the problem.</strong> Water leak? Turn off the stopcock. Electrical? Turn off at the fusebox.</p>
            <p><strong>4. Assess before acting.</strong> Is it a DIY job or does it need a professional? Our FAQ covers where the line is.</p>
            <p><strong>5. Call a professional when in doubt</strong> — especially for gas, structural work, or anything you&apos;re not confident with.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <a href="/tools-to-buy" className="border border-gray-200 rounded-xl p-5 hover:border-orange-300 transition-colors text-center">
            <p className="text-2xl mb-2">🧰</p>
            <p className="font-semibold text-gray-900 text-sm">Essential tools to buy</p>
            <p className="text-xs text-gray-500 mt-1">10 tools that cover everything</p>
          </a>
          <a href="/safety" className="border border-gray-200 rounded-xl p-5 hover:border-orange-300 transition-colors text-center">
            <p className="text-2xl mb-2">🛡️</p>
            <p className="font-semibold text-gray-900 text-sm">DIY safety rules</p>
            <p className="text-xs text-gray-500 mt-1">Before you start anything</p>
          </a>
        </div>
      </div>

      <MobileNav />
    </main>
  )
}
