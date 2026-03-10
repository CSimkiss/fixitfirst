import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import DifficultyMeter from '@/components/DifficultyMeter'
import { ALL_GUIDES } from '@/lib/guides'
import { GUIDE_TOOLS } from '@/lib/tools'

export const metadata: Metadata = {
  title: 'Plumbing Guides for Beginners | FixItFirst',
  description: 'Step-by-step plumbing guides written for complete beginners. Fix dripping taps, unblock drains, fix running toilets — no experience needed.',
}

const TIPS = [
  { emoji: '🪣', tip: 'Always have a bucket ready before you start any plumbing job. Even a "dry" pipe can surprise you.' },
  { emoji: '🔧', tip: 'Keep PTFE tape in your toolkit. It costs £1 and fixes leaking pipe joints in seconds.' },
  { emoji: '🚰', tip: 'Know where your stopcock is before you start. It\'s usually under the kitchen sink. Turning it off takes 10 seconds.' },
  { emoji: '🧻', tip: 'Keep old towels handy. Not for drying up — for stuffing under pipes to catch slow drips while you work.' },
  { emoji: '⏳', tip: 'Turn water back on slowly. Open isolation valves a quarter turn, wait 30 seconds, then open fully.' },
  { emoji: '📱', tip: 'Take a photo before you disassemble anything. You\'ll thank yourself when it\'s time to put it back together.' },
]

export default function PlumbingPage() {
  const guides = ALL_GUIDES.filter(g => g.category === 'Plumbing')

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-blue-900 text-white px-6 py-16 text-center">
        <a href="/" className="text-sm text-blue-300 hover:text-white mb-4 inline-block">← Back to home</a>
        <div className="text-5xl mb-4">🚿</div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Plumbing</h1>
        <p className="text-blue-100 text-xl max-w-xl mx-auto">Plumbing sounds scary. It&apos;s not. Start here.</p>
        <p className="text-blue-200 text-sm mt-3 max-w-lg mx-auto">Most household plumbing jobs are legal to DIY and only require a spanner and £5 of parts. We promise.</p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* Reassurance box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-blue-900 mb-3 text-lg">Before you worry — here&apos;s the truth</h2>
          <div className="space-y-2 text-sm text-blue-800">
            <p>✅ <strong>Most plumbing is legal to DIY</strong> in the UK — taps, toilets, drains, radiators.</p>
            <p>✅ <strong>You don&apos;t need to touch pipes</strong> for most common fixes — just valves, washers, and fittings.</p>
            <p>✅ <strong>Water is forgiving</strong> — unlike electricity, you can see a leak forming. Slow down and check as you go.</p>
            <p>⚠️ <strong>Gas is different</strong> — never DIY anything involving gas pipes or boiler internals. Gas Safe engineer only.</p>
          </div>
        </div>

        {/* Guides */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Plumbing guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {guides.map(guide => {
            const toolCount = GUIDE_TOOLS[guide.slug]?.length ?? 0
            return (
              <a
                key={guide.slug}
                href={guide.href}
                className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">Plumbing</span>
                  <DifficultyMeter level={guide.difficulty} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{guide.title}</h3>
                <p className="text-xs text-green-700 font-medium mb-2">{guide.saves}</p>
                <div className="flex gap-1.5 flex-wrap mb-3">
                  {toolCount > 0 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">🔧 {toolCount} tool{toolCount !== 1 ? 's' : ''}</span>
                  )}
                  {guide.ukSpecific && (
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">🇬🇧 UK advice</span>
                  )}
                </div>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{guide.time}</span>
                  <span>{guide.cost}</span>
                  <span className="ml-auto bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs">{guide.level}</span>
                </div>
              </a>
            )
          })}
        </div>

        {/* Tips */}
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Plumbing tips every beginner needs</h2>
        <div className="space-y-3 mb-10">
          {TIPS.map((item, i) => (
            <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl flex-shrink-0">{item.emoji}</span>
              <p className="text-sm text-gray-700">{item.tip}</p>
            </div>
          ))}
        </div>

        {/* Emergency box */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="font-bold text-red-800 mb-3">Plumbing emergencies — what to do first</h2>
          <div className="space-y-2 text-sm text-red-900">
            <p><strong>Burst pipe / major leak:</strong> Turn off the stopcock immediately. It&apos;s usually under the kitchen sink or where the pipe enters the house.</p>
            <p><strong>Toilet overflowing:</strong> Lift the cistern lid and push the float ball down to stop the fill valve. Call a plumber.</p>
            <p><strong>No hot water:</strong> Check the boiler pressure gauge (should read 1–1.5 bar). If low, top up via the filling loop.</p>
          </div>
        </div>
      </div>

      <MobileNav />
    </main>
  )
}
