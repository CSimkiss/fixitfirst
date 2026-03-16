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
  title: 'Unblock a Gutter | FixItFirst',
  description: 'Unblock a gutter and clear a downpipe in 1 hour. Step-by-step guide covering safe ladder use, debris removal, and checking gutter fall. Save £80–150.',
}

const steps = [
  { title: 'Set up your ladder safely', description: 'Use a ladder with a standoff bracket so it rests against the wall, not the gutter (which it will damage or push out of alignment). Place the ladder on firm, level ground. Have someone hold the base or use a ladder stabiliser. Never lean out — move the ladder instead.' },
  { title: 'Remove large debris by hand', description: 'Working from the top (furthest from the downpipe), scoop out leaves, moss, and debris into a bucket. A garden trowel or old rubber spatula works well. Wear gloves — gutter debris can contain bird droppings and mould.' },
  { title: 'Flush from the top with water', description: 'Use a garden hose with a trigger nozzle, starting from the end furthest from the downpipe. Water should flow freely towards the downpipe. If it pools or overflows the gutter instead of flowing to the downpipe, the gutter may be sagging — check the brackets.' },
  { title: 'Clear a blocked downpipe', description: 'If water reaches the downpipe but doesn\'t drain away, the downpipe is blocked. Use a drain rod or a long flexible brush fed from the top. Alternatively, disconnect the bottom of the downpipe (where it meets the drain) and flush from above with a hose.' },
  { title: 'Check the gutter fall', description: 'Gutters should slope slightly towards the downpipe — about 1cm drop per metre of run. If water pools in the gutter after clearing, a bracket may have dropped. Re-fix brackets to restore the fall using screws into the fascia.' },
  { title: 'Rinse and inspect for damage', description: 'Flush the full gutter length once more with clean water. Check for cracks, separated joints, or leaking brackets. Seal small cracks with gutter sealant. Loose joint sections can be reconnected with clips and sealant.' },
]

export default function UnblockAGutter() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Unblock a gutter</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £80–150 today</p>
        <p className="text-gray-500 mb-6">1 hour · Beginner · Saves £80–150 vs a tradesperson</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['unblock-a-gutter'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Unblock a gutter" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="unblock-a-gutter" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Blocked gutters cause water to overflow and run down the outside of the house, leading to damp walls, damaged fascias, and flooded foundations over time. Clearing them takes an hour and protects thousands of pounds of property.</p>
          <p className="text-sm text-gray-700">Clean gutters once a year — autumn, after leaves have fallen, is the best time. If you have overhanging trees, twice a year may be needed.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Ladder with standoff bracket</span> — essential for safe gutter access</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Rubber gloves and bucket</span> — for debris removal</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Garden hose</span> — to flush and test the gutter flow</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Drain rods or flexible brush</span> — <span className="text-orange-600">buy: £10–20 — for blocked downpipes</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Gutter sealant</span> — <span className="text-orange-600">buy: £4–8 — for cracked joints or small holes</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['unblock-a-gutter']} />
        <StepProgress steps={steps} slug="unblock-a-gutter" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Resting the ladder against the gutter — this pushes joints apart and damages plastic guttering. Always use a standoff.</p>
          <p className="text-sm text-yellow-900 mb-2">Starting at the downpipe end — this pushes debris towards the outlet and can block it further. Always start at the far end and work towards the downpipe.</p>
          <p className="text-sm text-yellow-900">Not checking the gutter fall after clearing — a cleared gutter that sags will pool water and overflow exactly where it sagged.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a professional if...</h2>
          <p className="text-sm text-red-900 mb-1">The gutters are higher than a standard 6m ladder can safely reach (e.g. a 3-storey building)</p>
          <p className="text-sm text-red-900 mb-1">The fascia board is rotten and cannot hold brackets — structural fascia repair is needed first</p>
          <p className="text-sm text-red-900">You are not comfortable working at height — it is not worth the risk</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Tools and sealant</span><span className="font-medium">£15–30</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement gutter section (if cracked)</span><span className="font-medium">£10–25</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Tradesperson to clear and inspect</span><span className="font-medium text-red-600">£80–150</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to clear, flush, and inspect your gutters — and how to identify when a bracket, joint, or fascia needs attention. Annual gutter maintenance prevents expensive damp problems inside the house.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['unblock-a-gutter'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['unblock-a-gutter'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['unblock-a-gutter'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="unblock-a-gutter" />
        <NextGuide currentSlug="unblock-a-gutter" />
      </div>
      <RecentViewTracker slug="unblock-a-gutter" title="Unblock a gutter" href="/guides/unblock-a-gutter" />
      <MobileNav />
    </main>
  )
}
