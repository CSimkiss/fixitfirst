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
import RenovationContinue from '@/components/RenovationContinue'

export const metadata: Metadata = {
  title: 'How to Unblock a Sink Without Chemicals | FixItFirst',
  description: 'Unblock a slow or blocked sink without drain cleaner in 15–30 minutes. Four methods in order — try the easiest first. Save £60–100 vs a plumber.',
  openGraph: {
    title: 'How to Unblock a Sink Without Chemicals | FixItFirst',
    description: 'Unblock a slow or blocked sink without drain cleaner in 15–30 minutes. Four methods in order — try the easiest first. Save £60–100 vs a plumber.',
    url: 'https://fixit-first.co.uk/guides/unblock-a-sink',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Start with boiling water',
    description: 'Boil a full kettle and pour it directly and slowly down the drain in two or three stages — a third of the kettle at a time, waiting 30 seconds between each pour. Why: most kitchen sink blockages are caused by grease and fat that have cooled and solidified in the trap or the first section of pipe. Boiling water melts the grease and carries it away down the drain. This works on around 40% of kitchen sink blockages and costs nothing. It does not work on hair blockages (bathrooms) or solid debris — but try it first before anything else. Do not use boiling water on PVC or acrylic basins — the heat can distort the material. Use hot tap water instead.',
  },
  {
    title: 'Try baking soda and white vinegar',
    description: 'Remove any standing water from the sink first — scoop it out with a cup if needed. Pour one mug of bicarbonate of soda down the drain, followed immediately by one mug of white vinegar. Place the plug in and leave for 20–30 minutes. Then flush with hot (not boiling) water. Why: the chemical reaction between bicarbonate of soda (alkaline) and vinegar (acid) produces carbon dioxide gas which fizzes through the blockage, breaking up grease and organic matter. It is particularly effective on the soft, slimy build-up that forms in bathroom sinks from toothpaste, soap, and skin cells. It will not shift a solid blockage — if nothing is draining at all, move to the plunger step.',
  },
  {
    title: 'Use a cup plunger',
    description: 'If there is no water in the sink, add enough to cover the rubber cup of the plunger. If there is a second drain nearby (such as in a double sink), block it with a wet cloth to prevent air escaping. Place the plunger cup directly over the drain so it forms a complete seal. Push down firmly and pull up sharply — do not break the seal on the upstroke. Repeat 8–10 times with consistent, strong strokes. Then remove the plunger and check if water drains. Why: plunging creates alternating pressure and suction in the pipe. The downstroke drives a pulse of water into the blockage; the upstroke pulls it back. This mechanical action shifts compacted debris that chemicals and hot water cannot. A good seal is essential — without it, you are just splashing water.',
  },
  {
    title: 'Remove and clean the trap',
    description: 'If plunging does not clear the blockage, the debris is almost certainly in the trap — the U-shaped or bottle-shaped fitting directly under the sink. Put a bucket under the trap to catch water. Unscrew the trap by hand (anticlockwise — most are plastic and need no tools). Some traps have a removable base; others unscrew in two places. Lift out the trap, empty the contents into the bucket, and clear the blockage with your fingers or an old toothbrush. Rinse the trap under the tap before refitting. Hand-tighten it back on and run the water. Why: the trap is designed to hold water (blocking drain smells) but it also catches debris. Hair, grease, and small objects collect here. Cleaning the trap is almost always the fix for a sink that will not drain at all.',
  },
]

export default function UnblockASink() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Unblock a sink without chemicals</h1>
        <p className="text-4xl font-black text-green-600 mb-1">15–30 mins — four methods, no drain cleaner needed</p>
        <p className="text-gray-600 mb-6">A blocked sink is almost always grease, hair, or soap build-up in the trap. You can clear it yourself without chemicals. Try each method in order — most sinks are fixed by step two or three.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['unblock-a-sink'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Unblock a sink without chemicals" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="unblock-a-sink" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide works for kitchen sinks, bathroom basins, and en-suite sinks. A completely blocked drain (no water moving at all) is usually in the trap — the curved pipe directly under the sink. A slow drain is often earlier build-up in the trap or the pipe leading to it.</p>
          <p className="text-sm text-gray-700 mb-2">If multiple sinks or drains in the house are blocked simultaneously, the problem is in the main drain outside — this guide will not fix that.</p>
          <p className="text-sm text-gray-700">No need to turn off the water supply for this job.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Kettle', hint: 'for boiling water — the first thing to try' },
            { icon: 'check', name: 'Bicarbonate of soda and white vinegar', hint: 'most people have these at home' },
            { icon: 'check', name: 'Bucket', hint: 'to catch water when you remove the trap', toolId: 'bucket' },
            { icon: 'check', name: 'Rubber gloves', hint: 'for removing debris from the trap', toolId: 'rubber-gloves' },
            { icon: 'buy', name: 'Cup plunger', hint: 'essential — a flat-cup plunger designed for sinks, not a toilet plunger', hintOrange: true, toolId: 'plunger' },
          ]}
          slug="unblock-a-sink"
          guideName="Unblock a sink"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['unblock-a-sink']} />
        <StepProgress steps={steps} slug="unblock-a-sink" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Using boiling water on plastic or acrylic basins.</strong> Boiling water can warp or crack acrylic. For anything that is not a stainless steel kitchen sink, use hot tap water — still effective on grease.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Not blocking the overflow or second drain when plunging.</strong> Air escapes through the overflow hole (the small hole near the top of the basin) or a second drain opening. Cover it with a wet cloth before plunging, otherwise you cannot build pressure.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Breaking the plunger seal on the upstroke.</strong> The suction on the upstroke is as important as the pressure on the downstroke. Keep the cup sealed against the drain throughout the full stroke cycle.</p>
          <p className="text-sm text-yellow-900"><strong>Skipping straight to drain cleaner.</strong> Chemical drain cleaners are corrosive, damage older pipes over time, and are hazardous to handle. They are also less effective on hair blockages than mechanical methods. Try all four steps first.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">If none of these work...</h2>
          <p className="text-sm text-red-900 mb-1">If the trap is clear but the sink still drains slowly, the blockage is in the pipe inside the wall — use a drain snake pushed through the wall outlet to clear it</p>
          <p className="text-sm text-red-900 mb-1">If multiple drains are blocked at the same time, the issue is the main drain outside the house — call a drain clearance company</p>
          <p className="text-sm text-red-900">If the drain smells but is not blocked, the trap may be dry (especially in a guest bathroom that is rarely used) — run the tap for 30 seconds to refill it</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Boiling water or baking soda method</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Cup plunger (if needed)</span><span className="font-medium">£5–12</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£60–100</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You know how sink drainage works — the trap, how blockages form, and the right sequence to clear them. These skills transfer to unblocking a bath, clearing a shower waste, and understanding your home&apos;s drain system from sink to street.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/unblock-a-drain" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Unblock an outdoor drain →</a>
            <a href="/guides/fix-a-leaking-pipe-under-sink" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fix a leaking pipe under a sink →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation →</a>
          </div>
        </div>

        {GUIDE_META['unblock-a-sink'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['unblock-a-sink'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="unblock-a-sink"
          relatedSlugs={['unblock-a-drain', 'fix-a-leaking-pipe-under-sink', 'prep-bathroom-plumbing']}
        />
        <GuideActions slug="unblock-a-sink">
          <GuideExtras slug="unblock-a-sink" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="unblock-a-sink" title="Unblock a sink without chemicals" href="/guides/unblock-a-sink" />
      <MobileNav />
    </main>
  )
}
