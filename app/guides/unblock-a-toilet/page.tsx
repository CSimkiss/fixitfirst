import type { Metadata } from 'next'
import StepProgress from '@/components/StepProgress'
import GuideActions from '@/components/GuideActions'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import ToolsWarning from '@/components/ToolsWarning'
import ToolsSection from '@/components/ToolsSection'
import StarterKit from '@/components/StarterKit'
import { GUIDE_TOOLS } from '@/lib/tools'
import RecentViewTracker from '@/components/RecentViewTracker'
import SocialShare from '@/components/SocialShare'
import GuideExtras from '@/components/GuideExtras'
import PrintButton from '@/components/PrintButton'
import DifficultyComparison from '@/components/DifficultyComparison'
import { GUIDE_META } from '@/lib/guide-meta'

export const metadata: Metadata = {
  title: 'How to Unblock a Toilet | FixItFirst',
  description: 'Unblock a toilet yourself in under 20 minutes using a plunger. Step-by-step guide for complete beginners. Save £60–120 vs a plumber.',
  openGraph: {
    title: 'How to Unblock a Toilet | FixItFirst',
    description: 'Unblock a toilet yourself in under 20 minutes using a plunger. Step-by-step guide for complete beginners. Save £60–120 vs a plumber.',
    url: 'https://fixit-first.co.uk/guides/unblock-a-toilet',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Put on rubber gloves and protect the floor', description: 'Lay old towels or newspaper around the base of the toilet. If the water level in the bowl is very high, bail some out into a bucket first using an old jug.' },
  { title: 'Position the plunger', description: 'Push the flange plunger into the toilet bowl and seat it firmly over the drain hole. Make sure there is a good seal — the plunger should be completely submerged and covering the hole.' },
  { title: 'Plunge with a steady rhythm', description: 'Push down firmly and pull back up without breaking the seal. Do 10–15 strokes with increasing force. The suction and pressure combination dislodges most blockages.' },
  { title: 'Test with a flush', description: 'Remove the plunger and flush. If the water drains away normally, you are done. If it is still blocked or drains slowly, repeat the plunging for another 10–15 strokes.' },
  { title: 'Try hot water if plunging fails', description: 'Pour a full kettle of very hot (not boiling) water into the bowl from waist height. The heat and pressure help break down softer blockages. Wait 5 minutes, then flush.' },
  { title: 'Sanitise and clean up', description: 'Rinse the plunger in the toilet bowl after a successful flush. Wipe down the toilet and surrounding floor. Wash your hands thoroughly.' },
]

export default function UnblockAToilet() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Unblock a toilet</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £60–120 today</p>
        <p className="text-gray-500 mb-6">20 mins · Beginner · Saves £60–120 vs a plumber</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['unblock-a-toilet'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Unblock a toilet" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="unblock-a-toilet" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Do not keep flushing a blocked toilet — you risk overflowing the bowl. One flush to confirm it is blocked, then stop.</p>
          <p className="text-sm text-gray-700 mb-2">The vast majority of toilet blockages clear with a plunger in under 10 minutes. You do not need chemicals.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
    { icon: 'buy', name: 'Toilet plunger (flange plunger)', hint: 'buy — a flange plunger (with a fold-out inner cup) works much better than a flat cup plunger for toilets', hintOrange: true, toolId: 'plunger' },
    { icon: 'check', name: 'Rubber gloves', hint: 'essential — wear them', toolId: 'rubber-gloves' },
    { icon: 'check', name: 'Old towels or newspaper', hint: 'to protect the floor around the toilet' },
  ]}
          slug="unblock-a-toilet"
          guideName="Unblock a toilet"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['unblock-a-toilet']} />
        <StepProgress steps={steps} />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Using a flat cup plunger designed for sinks — it does not create enough suction in a toilet. Use a flange plunger.</p>
          <p className="text-sm text-yellow-900 mb-2">Giving up after 5 strokes — most blockages need 10–20 firm plunges to shift.</p>
          <p className="text-sm text-yellow-900">Pouring chemical drain cleaner in first — this is ineffective on solid blockages and makes the job unpleasant if you then need to use a plunger.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">The toilet is still blocked after 20 minutes of plunging</p>
          <p className="text-sm text-red-900 mb-1">Multiple drains in the house are blocked at the same time — this indicates a main drain issue</p>
          <p className="text-sm text-red-900">You can hear gurgling from other drains when you flush</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Flange plunger (if you need one)</span><span className="font-medium">£8–12</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Hot water + plunging</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£60–120</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to clear a toilet blockage and — crucially — when a blockage indicates a bigger problem in the main drain. The plunger technique transfers to unblocking any drain.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-blue-800 mb-3">What this unlocks</h2>
          <p className="text-sm text-blue-900">With a plunger, you can now tackle blocked baths, showers, and sinks too. Next step: unblocking an outside drain if your whole system backs up.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['unblock-a-toilet'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['unblock-a-toilet'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['unblock-a-toilet'].renterWarning}</p>
          </div>
        )}
        <GuideActions slug="unblock-a-toilet">
          <GuideExtras slug="unblock-a-toilet" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="unblock-a-toilet" title="Unblock a toilet" href="/guides/unblock-a-toilet" />
      <MobileNav />
    </main>
  )
}
