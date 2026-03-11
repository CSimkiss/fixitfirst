import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { ALL_GUIDES } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Quick Wins — Fixes Under 30 Minutes | FixItFirst',
  description: 'Got 20 minutes? Fix something today. Quick DIY wins that take under 30 minutes and save you real money.',
}

const QUICK_WIN_DETAIL: Record<string, { tagline: string; emoji: string }> = {
  'change-a-lightbulb':    { tagline: 'Literally 5 minutes. No excuses.', emoji: '💡' },
  'bleed-a-radiator':      { tagline: 'Makes your heating 15% more efficient. That\'s real money.', emoji: '🔧' },
  'unblock-a-drain':       { tagline: 'No tools needed. Just a bit of bravery.', emoji: '🚿' },
  'fill-a-hole-in-a-wall': { tagline: 'Looks pro. Costs £3. Takes half an hour.', emoji: '🪣' },
}

export default function QuickWinsPage() {
  const quickWins = ALL_GUIDES.filter(g => g.quickWin)
  const sortedByTime = [...quickWins].sort((a, b) => {
    const parseTime = (t: string) => parseInt(t.replace(/[^0-9]/g, '')) || 999
    return parseTime(a.time) - parseTime(b.time)
  })

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      {/* Hero */}
      <div className="bg-gray-950 text-white px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-1.5 mb-4">
          <span className="text-yellow-400 font-semibold text-sm">⚡ Quick wins</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Got 20 minutes?<br />Fix something today.
        </h1>
        <p className="text-gray-300 text-xl max-w-xl mx-auto">
          These {sortedByTime.length} guides take under 30 minutes and save you real money — no experience needed.
        </p>
      </div>

      {/* Stats strip */}
      <div className="bg-yellow-500 text-yellow-950 py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-2xl font-black">5 min</div>
            <div className="text-yellow-800 text-sm">Quickest fix</div>
          </div>
          <div>
            <div className="text-2xl font-black">{sortedByTime.length} guides</div>
            <div className="text-yellow-800 text-sm">All under 30 mins</div>
          </div>
          <div>
            <div className="text-2xl font-black">£0</div>
            <div className="text-yellow-800 text-sm">Minimum cost</div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-6">
        <p className="text-gray-500 text-center text-sm">Sorted by time — fastest first</p>

        {sortedByTime.map((guide, idx) => {
          const detail = QUICK_WIN_DETAIL[guide.slug]
          return (
            <a
              key={guide.slug}
              href={guide.href}
              className="block border-2 border-yellow-200 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-md transition-all group bg-yellow-50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  {detail?.emoji ?? '🔧'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full font-bold">
                      #{idx + 1} fastest
                    </span>
                    <span className="text-xs bg-white text-gray-600 px-2 py-0.5 rounded-full border">
                      ⏱ {guide.time}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-1">
                    {guide.title}
                  </h2>
                  {detail && (
                    <p className="text-sm text-gray-600 mb-2">{detail.tagline}</p>
                  )}
                  <div className="flex gap-3 flex-wrap">
                    <span className="text-sm font-semibold text-green-700">{guide.saves}</span>
                    <span className="text-sm text-gray-500">Cost: {guide.cost}</span>
                  </div>
                </div>
                <div className="text-orange-500 group-hover:translate-x-1 transition-transform text-xl shrink-0 hidden sm:block">
                  →
                </div>
              </div>
            </a>
          )
        })}

        <div className="bg-gray-50 rounded-2xl p-6 text-center">
          <h2 className="font-semibold text-gray-900 mb-2">Want more?</h2>
          <p className="text-gray-500 text-sm mb-4">Once you&apos;ve nailed these, our other guides take longer but save significantly more.</p>
          <a
            href="/guides"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-sm"
          >
            Browse all guides →
          </a>
        </div>
      </div>

      <MobileNav />
    </main>
  )
}
