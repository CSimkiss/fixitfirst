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
  title: 'How to Fix a Running Toilet | FixItFirst',
  description: 'How to stop a toilet that keeps running after flushing — covers float arm adjustment and flapper valve replacement. Save £80–150 vs a plumber.',
  openGraph: {
    title: 'How to Fix a Running Toilet | FixItFirst',
    description: 'How to stop a toilet that keeps running after flushing — covers float arm adjustment and flapper valve replacement. Save £80–150 vs a plumber.',
    url: 'https://fixit-first.co.uk/guides/fix-a-running-toilet',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Remove the cistern lid', description: 'Lift the lid off the cistern and set it aside on a towel. Look inside — you will see the float (a ball or cup on an arm), the fill valve, and the flapper at the bottom.' },
  { title: 'Identify the problem', description: 'Flush and watch. If water keeps running: lift the float arm by hand. If the water stops, the float needs adjusting. If water still runs, the flapper is not sealing.' },
  { title: 'Adjust the float arm', description: 'If the float is too high, water overflows into the overflow pipe before the fill valve shuts off. Bend the float arm slightly downward, or adjust the screw/clip on modern ballvalves, so the water stops about 25mm below the overflow pipe.' },
  { title: 'Turn off the water and replace the flapper', description: 'If the flapper is the issue, turn off the isolation valve on the pipe behind the toilet. Flush to empty the cistern. Unhook the old flapper from the pegs at the bottom of the fill valve and note the size. Buy a matching replacement and clip it on.' },
  { title: 'Turn water back on and test', description: 'Open the isolation valve slowly and let the cistern refill. Watch the water level — it should stop filling well below the overflow. Flush and check the running has stopped.' },
  { title: 'Replace the cistern lid', description: 'Once you are satisfied the toilet is no longer running, replace the lid. Listen over the next hour to confirm no more trickling.' },
]

export default function FixARunningToilet() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a running toilet</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £80–150 today</p>
        
<p className="text-gray-500 mb-6">1 hour · Beginner · Saves £80-150 vs a plumber</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-running-toilet'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a running toilet" />
          
<PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-running-toilet" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">A running toilet constantly trickles water into the bowl after flushing. This is almost always caused by a faulty flapper valve or a misadjusted float arm — both are cheap and easy to fix.</p>
          <p className="text-sm text-gray-700 mb-2">You will need to look inside the cistern (the tank at the back of the toilet). It is just water — nothing unpleasant.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Towel or cloth</span> — to set the cistern lid on and catch any drips</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Screwdriver</span> — needed for some cistern types to adjust the ballvalve</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement flapper valve</span> — <span className="text-orange-600">buy only if needed: £5–15, take the old one to the shop to match the size</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-running-toilet']} />
        <StepProgress steps={steps} slug="fix-a-running-toilet" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not turning off the isolation valve before replacing the flapper, leading to water everywhere.</p>
          <p className="text-sm text-yellow-900 mb-2">Buying the wrong size flapper — take the old one to the shop to match it.</p>
          <p className="text-sm text-yellow-900">Setting the float too low, so the cistern does not fill enough to flush properly.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">There is water leaking around the base of the toilet</p>
          <p className="text-sm text-red-900 mb-1">The cistern will not stop filling even after adjusting the float</p>
          <p className="text-sm text-red-900">The isolation valve will not turn off the water supply</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Float arm adjustment only</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement flapper valve</span><span className="font-medium">£10-25</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£80-150</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how a toilet cistern works — the float, fill valve, and flapper. These skills transfer to replacing a full ballvalve, fixing a slow-filling cistern, and understanding your home's water system.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['fix-a-running-toilet'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['fix-a-running-toilet'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-running-toilet'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="fix-a-running-toilet" />
        <NextGuide currentSlug="fix-a-running-toilet" />
      </div>
      <RecentViewTracker slug="fix-a-running-toilet" title="Fix a running toilet" href="/guides/fix-a-running-toilet" />
      <MobileNav />
    </main>
  )
}
