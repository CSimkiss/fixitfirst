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
  title: 'Fix a Dripping Tap | FixItFirst',
  description: 'Learn how to fix a dripping tap in 45 minutes. Step-by-step guide with a full tools list. Save £80–150 vs calling a plumber.',
}

const steps = [
  { title: 'Turn off the water supply', description: 'Find the isolation valve under the sink and turn it 90 degrees until it sits across the pipe.' },
  { title: 'Plug the drain', description: 'Put the plug in so small parts cannot fall down the drain.' },
  { title: 'Remove the tap handle', description: 'Pop off the decorative cap, remove the screw, lift the handle straight up.' },
  { title: 'Remove the packing nut', description: 'Use a spanner anticlockwise. Lift out the cartridge.' },
  { title: 'Replace the washer', description: 'Swap the rubber washer for a matching new one.' },
  { title: 'Reassemble and test', description: 'Put everything back. Open the valve slowly. No drip? Done.' },
]

export default function DrippingTap() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a dripping tap</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £80–150 today</p>
        
<p className="text-gray-500 mb-6">45 mins · Beginner · Saves £80-150 vs a plumber</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-dripping-tap'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a dripping tap" />
          
<PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-dripping-tap" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This fixes a tap that drips when fully closed.</p>
          <p className="text-sm text-gray-700 mb-2">Legal to DIY. Allowed in most rentals.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Adjustable spanner or spanner set</span> — you probably already have one</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Flat-head screwdriver</span> — standard household tool</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement rubber washer</span> — <span className="text-orange-600">buy: £1–2 from any hardware shop</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">PTFE tape</span> — <span className="text-orange-600">buy: £1 from any hardware shop</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-dripping-tap']} />
        <StepProgress steps={steps} slug="fix-a-dripping-tap" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not turning water off fully before starting.</p>
          <p className="text-sm text-yellow-900 mb-2">Buying the wrong washer size.</p>
          <p className="text-sm text-yellow-900">Overtightening the packing nut.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">The isolation valve will not turn</p>
          <p className="text-sm text-red-900 mb-1">Water is coming from behind the wall</p>
          <p className="text-sm text-red-900">The tap body is cracked</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">You have all the tools</span><span className="font-medium">£2-5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Need tools too</span><span className="font-medium">£15-25</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£80-150</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how taps work, how isolation valves work, and how to replace washers. These skills transfer to replacing a full tap and fixing a running toilet.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['fix-a-dripping-tap'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['fix-a-dripping-tap'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-dripping-tap'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="fix-a-dripping-tap" />
        <NextGuide currentSlug="fix-a-dripping-tap" />
      </div>
      <RecentViewTracker slug="fix-a-dripping-tap" title="Fix a dripping tap" href="/guides/fix-a-dripping-tap" />
      <MobileNav />
    </main>
  )
}
