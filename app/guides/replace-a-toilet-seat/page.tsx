import type { Metadata } from 'next'
import StepProgress from '@/components/StepProgress'
import CompleteButton from '@/components/CompleteButton'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import ToolsWarning from '@/components/ToolsWarning'
import { GUIDE_TOOLS } from '@/lib/tools'
import RecentViewTracker from '@/components/RecentViewTracker'
import SocialShare from '@/components/SocialShare'
import GuideExtras from '@/components/GuideExtras'
import PrintButton from '@/components/PrintButton'
import NextGuide from '@/components/NextGuide'
import DifficultyComparison from '@/components/DifficultyComparison'
import { GUIDE_META } from '@/lib/guide-meta'

export const metadata: Metadata = {
  title: 'How to Replace a Toilet Seat | FixItFirst',
  description: 'Replace a toilet seat in 20 minutes with no plumbing knowledge. Step-by-step guide. Save £40–80 vs calling a plumber.',
  openGraph: {
    title: 'How to Replace a Toilet Seat | FixItFirst',
    description: 'Replace a toilet seat in 20 minutes with no plumbing knowledge. Step-by-step guide. Save £40–80 vs calling a plumber.',
    url: 'https://fixit-first.co.uk/guides/replace-a-toilet-seat',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Remove the old seat', description: 'Open the hinge covers on top of the seat (they flip up or prise off). Unscrew the bolts — usually cross-head screws on top, plastic wing-nuts underneath. Lift the old seat off.' },
  { title: 'Clean the hinge area', description: 'Wipe around the hinge bolt holes with a damp cloth and mild spray cleaner. Old seats leave a surprising amount of grime underneath.' },
  { title: 'Check your measurements', description: 'Measure the distance between the two hinge bolt holes — standard UK pans are 155mm apart. Also note the pan shape (D-shaped, round, or square-front) so the new seat fits correctly.' },
  { title: 'Fit the hinge bolts', description: 'Drop the new hinge bolts down through the pan holes from above. Thread the spacer and wing-nut on from underneath and hand-tighten.' },
  { title: 'Position and tighten', description: 'Seat the lid and seat on the hinges and check it sits centrally over the bowl. Tighten the wing-nuts until snug — do not overtighten or you will crack the ceramic.' },
  { title: 'Test the soft-close mechanism', description: 'Lower the seat and lid slowly — they should close gently under their own weight. If they drop too fast, adjust the hinge dampers (small screws on the hinge body) if present.' },
]

export default function ReplaceAToiletSeat() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Replace a toilet seat</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £40–80 today</p>
        <p className="text-gray-500 mb-6">20 mins · Beginner · Saves £40–80 vs a plumber</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['replace-a-toilet-seat'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Replace a toilet seat" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="replace-a-toilet-seat" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This is one of the easiest jobs in the house. No tools needed beyond a screwdriver for most modern seats.</p>
          <p className="text-sm text-gray-700 mb-2">Measure your toilet pan before buying a replacement — pan shapes vary (round, D-shape, square-front). Check the distance between the hinge bolt holes too.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Screwdriver (cross-head)</span> — most hinge bolts use cross-head fixings</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Adjustable spanner or pliers</span> — to grip the nut under the pan if needed</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement toilet seat</span> — <span className="text-orange-600">buy: buy: £15–40 — measure your pan first</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['replace-a-toilet-seat']} />
        <StepProgress steps={steps} />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Buying a seat without measuring — pan hole spacing and pan shape vary between manufacturers.</p>
          <p className="text-sm text-yellow-900 mb-2">Overtightening the wing-nuts — this can crack the ceramic, which is an expensive mistake.</p>
          <p className="text-sm text-yellow-900">Not checking the seat is centred before tightening — it looks obviously wrong once fitted.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">There are cracks in the ceramic pan around the bolt holes</p>
          <p className="text-sm text-red-900">The pan fixing points are broken and cannot hold bolts</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Basic replacement seat</span><span className="font-medium">£15–25</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Soft-close seat</span><span className="font-medium">£25–40</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£40–80 (plus seat cost)</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You can now fit any standard toilet seat and understand pan sizing. This transfers to replacing the cistern lid, fitting a bidet seat, and other bathroom fitting work.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-blue-800 mb-3">What this unlocks</h2>
          <p className="text-sm text-blue-900">You can now tackle other bathroom fitting tasks: replacing a towel rail, fitting a toilet roll holder, or replacing a basin pop-up plug mechanism.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['replace-a-toilet-seat'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['replace-a-toilet-seat'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['replace-a-toilet-seat'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="replace-a-toilet-seat" />
        <NextGuide currentSlug="replace-a-toilet-seat" />
      </div>
      <RecentViewTracker slug="replace-a-toilet-seat" title="Replace a toilet seat" href="/guides/replace-a-toilet-seat" />
      <MobileNav />
    </main>
  )
}
