import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { ALL_GUIDES, GUIDE_BY_SLUG } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'DIY vs Tradesperson Cost Comparison | FixItFirst',
  description: 'Compare DIY cost vs tradesperson cost across all guides. See exactly how much you save doing it yourself.',
}

// Pro (tradesperson) cost data — the only info not already in lib/guides.ts
const PRO_COSTS: Record<string, { label: string; min: number; max: number }> = {
  'fix-a-dripping-tap':    { label: '£80–150',  min: 80,  max: 150 },
  'unblock-a-drain':       { label: '£60–120',  min: 60,  max: 120 },
  'fix-a-running-toilet':  { label: '£80–150',  min: 80,  max: 150 },
  'paint-a-room':          { label: '£200–500', min: 200, max: 500 },
  'put-up-shelves':        { label: '£50–120',  min: 50,  max: 120 },
  'bleed-a-radiator':      { label: '£50–80',   min: 50,  max: 80  },
  'fill-a-hole-in-a-wall': { label: '£50–100',  min: 50,  max: 100 },
  'fit-a-curtain-pole':    { label: '£50–80',   min: 50,  max: 80  },
  'change-a-lightbulb':    { label: '£60–100',  min: 60,  max: 100 },
}

const COMPARISON_SLUGS = Object.keys(PRO_COSTS)

const COMPARISONS = COMPARISON_SLUGS.map(slug => {
  const guide = GUIDE_BY_SLUG[slug]
  const pro = PRO_COSTS[slug]
  const savingMin = pro.min - guide.estimatedSavingsMax  // conservative: pro min minus DIY max
  const savingMinClamped = Math.max(0, savingMin)
  const savingLabel = `£${savingMinClamped}–${pro.max - (guide.estimatedSavingsMin === 0 ? 0 : 0)}`
  // Use estimatedSavingsMin as the saving floor (it already represents pro - diy saving)
  return {
    slug,
    title: guide.title,
    time: guide.time,
    diy: guide.cost,
    pro: pro.label,
    saving: `£${guide.estimatedSavingsMin}–${guide.estimatedSavingsMax}`,
    savingMin: guide.estimatedSavingsMin,
    guideHref: guide.href,
  }
})

const totalSavingMin = COMPARISONS.reduce((acc, c) => acc + c.savingMin, 0)

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <a href="/" className="text-sm text-gray-400 hover:text-orange-400 mb-4 inline-block">← Back to home</a>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">DIY vs Tradesperson</h1>
        <p className="text-gray-300 text-lg">Every guide. Every saving. In one table.</p>
        <div className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-xl">
          <p className="text-sm font-medium text-green-100">Do all {COMPARISONS.length} guides yourself and save</p>
          <p className="text-4xl font-black">£{totalSavingMin}+</p>
          <p className="text-sm text-green-100">vs calling a tradesperson for each job</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Desktop table */}
        <div className="hidden md:block border border-gray-200 rounded-2xl overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Job</th>
                <th className="text-center px-4 py-4 font-semibold text-gray-700">Time</th>
                <th className="text-center px-4 py-4 font-semibold text-green-700">DIY cost</th>
                <th className="text-center px-4 py-4 font-semibold text-red-700">Pro cost</th>
                <th className="text-center px-4 py-4 font-semibold text-orange-700">You save</th>
                <th className="px-4 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {COMPARISONS.map((row, i) => (
                <tr key={row.slug} className={`hover:bg-gray-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className="px-5 py-4 font-medium text-gray-900">{row.title}</td>
                  <td className="px-4 py-4 text-center text-gray-500">{row.time}</td>
                  <td className="px-4 py-4 text-center font-semibold text-green-700">{row.diy}</td>
                  <td className="px-4 py-4 text-center font-semibold text-red-600">{row.pro}</td>
                  <td className="px-4 py-4 text-center">
                    <span className="bg-orange-100 text-orange-800 font-bold px-3 py-1 rounded-full">{row.saving}</span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <a href={row.guideHref} className="text-orange-500 font-medium hover:underline text-xs">Guide →</a>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-orange-50 border-t-2 border-orange-200">
              <tr>
                <td className="px-5 py-4 font-bold text-gray-900">All {COMPARISONS.length} guides</td>
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4 text-center font-bold text-green-700">~£60–200</td>
                <td className="px-4 py-4 text-center font-bold text-red-600">£630–1,400</td>
                <td className="px-4 py-4 text-center">
                  <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded-full">£{totalSavingMin}+</span>
                </td>
                <td className="px-4 py-4"></td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4 mb-8">
          {COMPARISONS.map(row => (
            <div key={row.slug} className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{row.title}</h3>
                <span className="text-xs text-gray-400 ml-2 flex-shrink-0">{row.time}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="text-center bg-green-50 rounded-lg p-2">
                  <p className="text-xs text-green-600 mb-0.5">DIY</p>
                  <p className="font-bold text-green-700 text-sm">{row.diy}</p>
                </div>
                <div className="text-center bg-red-50 rounded-lg p-2">
                  <p className="text-xs text-red-600 mb-0.5">Pro</p>
                  <p className="font-bold text-red-600 text-sm">{row.pro}</p>
                </div>
                <div className="text-center bg-orange-50 rounded-lg p-2">
                  <p className="text-xs text-orange-600 mb-0.5">Save</p>
                  <p className="font-bold text-orange-700 text-sm">{row.saving}</p>
                </div>
              </div>
              <a href={row.guideHref} className="block text-center text-sm text-orange-500 font-medium hover:underline">
                Read the guide →
              </a>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-5 text-sm text-gray-500">
          <p><strong>Note:</strong> Costs are UK averages based on typical tradesperson callout and labour charges. Actual costs vary by region (London is typically 20–40% higher), property type, and complexity. DIY costs assume you already own basic tools.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
