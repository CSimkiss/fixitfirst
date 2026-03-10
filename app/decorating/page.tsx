import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import DifficultyMeter from '@/components/DifficultyMeter'
import { ALL_GUIDES } from '@/lib/guides'
import { GUIDE_TOOLS } from '@/lib/tools'

export const metadata: Metadata = {
  title: 'Decorating Guides for Beginners | FixItFirst',
  description: 'Transform your space with beginner-friendly decorating guides. Painting, filling, fitting — step-by-step instructions anyone can follow.',
}

const TIPS = [
  { emoji: '🎨', tip: 'Always buy 10% more paint than you think you need. Running out mid-wall with a colour-matched tin is a nightmare.' },
  { emoji: '🪄', tip: 'Prep is 80% of the job. Fill holes, sand bumps, wipe down walls — the paint finish is only as good as the surface underneath.' },
  { emoji: '🦺', tip: 'Use masking tape on skirting boards and ceilings before you start. Takes 20 minutes, saves hours of touching up.' },
  { emoji: '🌬️', tip: 'Open windows when painting. Not just for fumes — paint dries faster with good airflow and looks better as a result.' },
  { emoji: '🖌️', tip: 'Cut in (edges and corners with a brush) before rolling. Always work wet-edge to wet-edge to avoid lap marks.' },
  { emoji: '📦', tip: 'Two thin coats always beats one thick coat. Thick coats sag, streak, and take forever to dry.' },
]

const TRANSFORM_STEPS = [
  { step: '1', title: 'Fill holes and cracks', href: '/guides/fill-a-hole-in-a-wall', time: '30 mins' },
  { step: '2', title: 'Prep and prime', href: null, time: '1–2 hours' },
  { step: '3', title: 'Paint the room', href: '/guides/paint-a-room', time: '1 day' },
]

export default function DecoratingPage() {
  const guides = ALL_GUIDES.filter(g => g.category === 'Decorating' || g.category === 'Masonry' || g.category === 'Fitting')

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-purple-900 text-white px-6 py-16 text-center">
        <a href="/" className="text-sm text-purple-300 hover:text-white mb-4 inline-block">← Back to home</a>
        <div className="text-5xl mb-4">🎨</div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Decorating</h1>
        <p className="text-purple-100 text-xl max-w-xl mx-auto">Transform your space. One wall at a time.</p>
        <p className="text-purple-200 text-sm mt-3 max-w-lg mx-auto">A fresh coat of paint is the single highest-impact thing you can do to a room. And anyone can do it.</p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* Room transformation journey */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-purple-900 mb-4">The complete room transformation</h2>
          <div className="space-y-3">
            {TRANSFORM_STEPS.map(step => (
              <div key={step.step} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  {step.href ? (
                    <a href={step.href} className="font-medium text-purple-800 hover:text-purple-600 hover:underline">
                      {step.title}
                    </a>
                  ) : (
                    <span className="font-medium text-gray-500">{step.title} <span className="text-xs">(guide coming soon)</span></span>
                  )}
                  <span className="text-xs text-gray-500 ml-2">— {step.time}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-purple-700 mt-4">Total weekend project. Total cost: £30–80. Impact: enormous.</p>
        </div>

        {/* Guides */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Decorating guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {guides.map(guide => {
            const toolCount = GUIDE_TOOLS[guide.slug]?.length ?? 0
            return (
              <a
                key={guide.slug}
                href={guide.href}
                className="border border-gray-200 rounded-xl p-5 hover:border-purple-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full font-medium">{guide.category}</span>
                  <DifficultyMeter level={guide.difficulty} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">{guide.title}</h3>
                <p className="text-xs text-green-700 font-medium mb-2">{guide.saves}</p>
                {toolCount > 0 && (
                  <div className="flex gap-1.5 flex-wrap mb-3">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">🔧 {toolCount} tool{toolCount !== 1 ? 's' : ''}</span>
                  </div>
                )}
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
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Decorating tips that actually matter</h2>
        <div className="space-y-3 mb-10">
          {TIPS.map((item, i) => (
            <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl flex-shrink-0">{item.emoji}</span>
              <p className="text-sm text-gray-700">{item.tip}</p>
            </div>
          ))}
        </div>

        {/* Paint cost calculator callout */}
        <div className="bg-gray-950 text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-xl mb-2">How much does it cost to paint a room?</h2>
          <p className="text-gray-300 text-sm mb-4">For an average bedroom: 2–3 litres of paint (£15–30), masking tape (£3), brushes and roller (£10–15). Total: £30–50.</p>
          <p className="text-gray-300 text-sm">A decorator would charge £200–500 for the same room. That&apos;s your savings.</p>
          <a href="/guides/paint-a-room" className="inline-block mt-5 bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">Read the painting guide</a>
        </div>
      </div>

      <MobileNav />
    </main>
  )
}
