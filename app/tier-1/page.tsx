import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { ALL_GUIDES } from '@/lib/guides'
import DifficultyMeter from '@/components/DifficultyMeter'

export const metadata: Metadata = {
  title: 'Tier 1 Beginner Guides | FixItFirst',
  description: 'Start here — the easiest DIY fixes that save the most money. Perfect for complete beginners with no experience.',
}

const categoryColours: Record<string, string> = {
  Plumbing:   'bg-blue-50 text-blue-700',
  Electrics:  'bg-yellow-50 text-yellow-700',
  Carpentry:  'bg-amber-50 text-amber-700',
  Decorating: 'bg-purple-50 text-purple-700',
  Masonry:    'bg-stone-50 text-stone-700',
  Heating:    'bg-red-50 text-red-700',
  Fitting:    'bg-teal-50 text-teal-700',
}

// Tier 1 = easiest guides, sorted by difficulty ascending
const tier1Guides = [...ALL_GUIDES].sort((a, b) => a.difficulty - b.difficulty)

export default function Tier1Page() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <section className="bg-gray-950 text-white px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            🌱 Tier 1 — Start here
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Beginner guides</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            These are the easiest fixes that save the most money. No experience needed — just follow the steps.
          </p>
        </div>
      </section>

      <section className="bg-orange-50 border-b border-orange-100 px-6 py-5">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 justify-center text-center text-sm">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-gray-700">No experience needed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-gray-700">Step-by-step instructions</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-gray-700">Save hundreds vs calling a pro</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-gray-700">We tell you when to call for help</span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-900">
            {tier1Guides.length} guides — sorted easiest first
          </h2>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Difficulty:</span>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <div key={i} className={`w-2 h-2 rounded-full ${i <= 2 ? 'bg-orange-500' : 'bg-gray-200'}`} />
              ))}
            </div>
            <span>= easier</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tier1Guides.map(guide => (
            <a
              key={guide.slug}
              href={guide.href}
              className="border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-md transition-all group flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColours[guide.category] ?? 'bg-gray-100 text-gray-600'}`}>
                  {guide.category}
                </span>
                <DifficultyMeter level={guide.difficulty} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
                {guide.title}
              </h3>
              <p className="text-xs text-green-700 font-medium mb-3">{guide.saves}</p>
              <div className="flex gap-3 text-sm text-gray-500 mt-auto">
                <span>{guide.time}</span>
                <span>·</span>
                <span>{guide.cost}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <MobileNav />
    </main>
  )
}
