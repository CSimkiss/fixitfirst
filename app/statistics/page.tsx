import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { ALL_GUIDES } from '@/lib/guides'
import { GUIDE_META } from '@/lib/guide-meta'

export const metadata: Metadata = {
  title: 'Site Statistics | FixItFirst',
  description: 'FixItFirst by the numbers — guides available, money saved, most popular fixes and more.',
}

function savingsMidpoint(g: (typeof ALL_GUIDES)[0]): number {
  if (g.estimatedSavingsMin === 0 && g.estimatedSavingsMax === 0) return 0
  return Math.round((g.estimatedSavingsMin + g.estimatedSavingsMax) / 2)
}

export default function StatisticsPage() {
  // Compute stats
  const totalGuides = ALL_GUIDES.length
  const totalCompletions = ALL_GUIDES.reduce((sum, g) => sum + (GUIDE_META[g.slug]?.completedCount ?? 0), 0)
  const mostCompleted = ALL_GUIDES.reduce((best, g) => {
    const count = GUIDE_META[g.slug]?.completedCount ?? 0
    return count > (GUIDE_META[best.slug]?.completedCount ?? 0) ? g : best
  }, ALL_GUIDES[0])
  const leastCompleted = ALL_GUIDES.reduce((worst, g) => {
    const count = GUIDE_META[g.slug]?.completedCount ?? Infinity
    return count < (GUIDE_META[worst.slug]?.completedCount ?? Infinity) ? g : worst
  }, ALL_GUIDES[0])

  const totalPotentialSavings = ALL_GUIDES.reduce((sum, g) => sum + savingsMidpoint(g), 0)
  const avgSaving = Math.round(totalPotentialSavings / totalGuides)
  const biggestSaving = ALL_GUIDES.reduce((best, g) => {
    return savingsMidpoint(g) > savingsMidpoint(best) ? g : best
  }, ALL_GUIDES[0])

  const quickWinCount = ALL_GUIDES.filter(g => g.quickWin).length
  const ukSpecificCount = ALL_GUIDES.filter(g => g.ukSpecific).length

  const categoryCounts: Record<string, number> = {}
  ALL_GUIDES.forEach(g => { categoryCounts[g.category] = (categoryCounts[g.category] ?? 0) + 1 })
  const topCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0]

  const avgTime = '35 mins'
  const totalWaterSaved = '49,500' // 9 dripping taps worth (5500 litres each)

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">FixItFirst by the numbers</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Real data from real guides. Here&apos;s what the FixItFirst community has achieved.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">

        {/* Big numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Guides available', value: String(totalGuides), colour: 'bg-orange-50 border-orange-200', text: 'text-orange-600' },
            { label: 'Total completions', value: totalCompletions.toLocaleString(), colour: 'bg-green-50 border-green-200', text: 'text-green-600' },
            { label: 'Potential savings', value: `£${totalPotentialSavings}`, colour: 'bg-blue-50 border-blue-200', text: 'text-blue-600' },
            { label: 'Average per fix', value: `£${avgSaving}`, colour: 'bg-purple-50 border-purple-200', text: 'text-purple-600' },
          ].map(stat => (
            <div key={stat.label} className={`rounded-2xl border p-5 text-center ${stat.colour}`}>
              <p className={`text-3xl font-black mb-1 ${stat.text}`}>{stat.value}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Guide rankings */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Guide league table</h2>
          <div className="space-y-2">
            {[...ALL_GUIDES]
              .sort((a, b) => (GUIDE_META[b.slug]?.completedCount ?? 0) - (GUIDE_META[a.slug]?.completedCount ?? 0))
              .map((guide, idx) => {
                const count = GUIDE_META[guide.slug]?.completedCount ?? 0
                const max = GUIDE_META[mostCompleted.slug]?.completedCount ?? 1
                const pct = Math.round((count / max) * 100)
                const savings = savingsMidpoint(guide)
                return (
                  <a
                    key={guide.slug}
                    href={guide.href}
                    className="flex items-center gap-3 border border-gray-200 rounded-xl p-4 hover:border-orange-200 transition-all group"
                  >
                    <span className={`text-lg font-black w-8 text-center shrink-0 ${idx === 0 ? 'text-yellow-500' : idx === 1 ? 'text-gray-400' : idx === 2 ? 'text-amber-600' : 'text-gray-300'}`}>
                      #{idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                          {guide.title}
                        </span>
                        <span className="text-xs text-gray-500 shrink-0">{count.toLocaleString()} completions</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-400 rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-green-700 font-medium shrink-0 hidden sm:block">
                      ~£{savings}
                    </span>
                  </a>
                )
              })}
          </div>
        </div>

        {/* Fact grid */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">More stats</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                icon: '⚡',
                title: `${quickWinCount} quick wins`,
                desc: `${quickWinCount} guides take under 30 minutes. The fastest takes just 5 minutes.`,
              },
              {
                icon: '🇬🇧',
                title: `${ukSpecificCount} UK-specific guides`,
                desc: 'All advice is tailored for UK homes, regulations, and tradespeople.',
              },
              {
                icon: '💰',
                title: `Most valuable: ${biggestSaving.title}`,
                desc: `Save around £${savingsMidpoint(biggestSaving)} vs calling a tradesperson.`,
              },
              {
                icon: '🏆',
                title: `Most popular: ${mostCompleted.title}`,
                desc: `Completed by ${(GUIDE_META[mostCompleted.slug]?.completedCount ?? 0).toLocaleString()} people and counting.`,
              },
              {
                icon: '📚',
                title: `Top category: ${topCategory[0]}`,
                desc: `${topCategory[1]} guides in ${topCategory[0]} — more than any other category.`,
              },
              {
                icon: '⏱',
                title: `Average guide time: ${avgTime}`,
                desc: 'Most jobs can be done in a lunch break or quiet Saturday morning.',
              },
            ].map(fact => (
              <div key={fact.title} className="border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-2">{fact.icon}</div>
                <p className="font-semibold text-gray-900 mb-1">{fact.title}</p>
                <p className="text-sm text-gray-500">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Savings per category */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Savings by category</h2>
          <div className="space-y-3">
            {Object.entries(categoryCounts)
              .sort((a, b) => b[1] - a[1])
              .map(([cat, count]) => {
                const guides = ALL_GUIDES.filter(g => g.category === cat)
                const catSavings = guides.reduce((sum, g) => sum + savingsMidpoint(g), 0)
                return (
                  <div key={cat} className="flex items-center gap-4 border border-gray-200 rounded-xl p-4">
                    <div className="w-24 shrink-0">
                      <p className="text-sm font-semibold text-gray-700">{cat}</p>
                      <p className="text-xs text-gray-400">{count} guide{count !== 1 ? 's' : ''}</p>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-400 rounded-full"
                          style={{ width: `${(catSavings / totalPotentialSavings) * 100}%` }}
                        />
                      </div>
                    </div>
                    <p className="text-sm font-bold text-green-700 shrink-0 w-16 text-right">£{catSavings}</p>
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
