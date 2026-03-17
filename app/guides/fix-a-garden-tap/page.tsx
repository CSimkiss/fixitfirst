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
  title: 'How to Fix a Leaking Garden Tap | FixItFirst',
  description: 'Fix a leaking garden tap in 30 minutes. Step-by-step guide — covers the tap washer, gland packing, and back-plate connections. Save £60–100.',
  openGraph: {
    title: 'How to Fix a Leaking Garden Tap | FixItFirst',
    description: 'Fix a leaking garden tap in 30 minutes. Step-by-step guide — covers the tap washer, gland packing, and back-plate connections. Save £60–100.',
    url: 'https://fixit-first.co.uk/guides/fix-a-garden-tap',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Identify where the leak is coming from', description: 'Turn the tap on and off and observe carefully. Leaking from the spout when closed = worn washer. Leaking from around the spindle (the stem the handle sits on) = worn gland packing. Leaking from the back-plate (where the tap meets the wall) = a connector joint issue.' },
  { title: 'Turn off the water supply', description: 'Most garden taps have an isolation valve inside the house — usually under the kitchen sink or in the under-stairs cupboard. Turn it 90 degrees until the slot is perpendicular to the pipe. Open the garden tap to release any remaining water in the pipe.' },
  { title: 'Replace the washer (for spout drips)', description: 'Unscrew the tap handle (usually a cross-head screw under a cap on top). Remove the packing nut with an adjustable spanner. Pull out the headgear assembly. The washer is the rubber disc at the bottom — prise it off and replace it with a matching new one.' },
  { title: 'Re-pack the gland (for spindle leaks)', description: 'If water leaks around the spindle when the tap is open, the gland packing is worn. Unscrew the gland nut slightly and wrap PTFE tape around the spindle three times, then retighten. Alternatively, replace the gland packing material inside the nut.' },
  { title: 'Check the back-plate connections', description: 'If the leak is at the wall, the threaded connection may be loose or the seal may have failed. Use PTFE tape on the threaded inlet and tighten the back-plate. Do not overtighten on older plastic plumbing.' },
  { title: 'Restore water and test', description: 'Turn the isolation valve back on. Open and close the garden tap several times. Check all the points where you worked — the spout, the spindle, and the back-plate. No drips means success.' },
]

export default function FixAGardenTap() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a leaking garden tap</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £60–100 in 30 mins — no plumber needed</p>
        <p className="text-gray-600 mb-6">Most people call a plumber for this. You probably don't need to.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-garden-tap'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a leaking garden tap" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-garden-tap" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Garden taps leak for one of three reasons: a worn washer (most common), worn gland packing around the spindle, or a loose back-plate connection. Identifying the exact leak point before starting saves time and money on parts.</p>
          <p className="text-sm text-gray-700">A dripping garden tap wastes up to 5,000 litres of water per year. With water meter charges this adds £15–30 to your annual water bill — worth fixing quickly.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
    { icon: 'check', name: 'Adjustable spanner', hint: 'to remove the packing nut', toolId: 'adjustable-spanner' },
    { icon: 'check', name: 'Cross-head screwdriver', hint: 'to remove the tap handle', toolId: 'screwdriver-cross' },
    { icon: 'buy', name: 'Replacement tap washer', hint: 'buy — take the old one to the hardware shop to match the size', hintOrange: true },
    { icon: 'buy', name: 'PTFE tape', hint: 'buy — for sealing threaded connections', hintOrange: true },
  ]}
          slug="fix-a-garden-tap"
          guideName="Fix a leaking garden tap"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-garden-tap']} />
        <StepProgress steps={steps} slug="fix-a-garden-tap" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not turning off the water supply before disassembling — water will spray everywhere.</p>
          <p className="text-sm text-yellow-900 mb-2">Buying the wrong washer size — take the old washer with you to the hardware shop. Garden tap washers are larger than indoor tap washers.</p>
          <p className="text-sm text-yellow-900">Overtightening when reassembling — too tight cracks older plastic body taps and damages thread seals.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">The tap body itself is cracked or corroded — it needs replacing</p>
          <p className="text-sm text-red-900 mb-1">The back-plate is leaking inside the wall — this requires access to the pipe within</p>
          <p className="text-sm text-red-900">The isolation valve inside has seized and cannot be turned off</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Washer and PTFE tape</span><span className="font-medium">£2–5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Full tap replacement (if body damaged)</span><span className="font-medium">£15–40</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£60–100</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to diagnose tap leaks and replace a washer or gland packing. These exact skills transfer to fixing indoor taps — the mechanism is identical.</p>
        </div>
        <p className="text-sm text-gray-500 text-center mb-3">Most people would pay a tradesperson for this.</p>
        {GUIDE_META['fix-a-garden-tap'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-garden-tap'].renterWarning}</p>
          </div>
        )}
        <GuideActions slug="fix-a-garden-tap">
          <GuideExtras slug="fix-a-garden-tap" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="fix-a-garden-tap" title="Fix a leaking garden tap" href="/guides/fix-a-garden-tap" />
      <MobileNav />
    </main>
  )
}
