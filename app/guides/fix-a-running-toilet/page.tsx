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
  title: 'How to Fix a Running Toilet (Won\'t Stop Filling) | FixItFirst',
  description: 'Stop a toilet that keeps running after flushing. Covers float adjustment and flapper replacement. Save £80–150 vs a plumber in under an hour.',
  openGraph: {
    title: 'How to Fix a Running Toilet (Won\'t Stop Filling) | FixItFirst',
    description: 'Stop a toilet that keeps running after flushing. Covers float adjustment and flapper replacement. Save £80–150 vs a plumber in under an hour.',
    url: 'https://fixit-first.co.uk/guides/fix-a-running-toilet',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Remove the cistern lid and identify the fault',
    description: 'Lift the lid off the cistern and set it down carefully on a towel. Flush the toilet and watch what happens inside. There are two things that cause a running toilet: a float set too high (water reaches the overflow pipe before the fill valve shuts off) or a flapper valve that will not seat properly (water leaks from the cistern into the bowl continuously). To tell them apart: lift the float arm upward with your hand. If the water immediately stops, the float is the problem. If water keeps running, the flapper is not sealing. Why: identifying which fault you have before doing anything avoids buying parts you do not need and fixes the right thing first time.',
  },
  {
    title: 'Adjust the float if it is too high',
    description: 'The float rises as the cistern fills and triggers the fill valve to shut off when the water reaches the right level. If the float is set too high, the water reaches the overflow pipe before the valve closes — and runs continuously down the overflow (you will hear this as a trickle from the overflow pipe outside). On older ballvalves, gently bend the float arm downward so the water cuts off lower. On modern ballvalves, there is a plastic adjustment screw or clip — turn it to lower the cutoff point. The correct water level is 25mm below the top of the overflow pipe. Why: this is one of the most common causes of a running toilet and requires no parts — just an adjustment. Do not skip this step even if you suspect the flapper.',
  },
  {
    title: 'Press on the flapper to test it',
    description: 'If adjusting the float did not fix the problem, press firmly on the rubber flapper at the bottom of the cistern with your hand while the toilet is running. If the water stops when you press down, the flapper is not sealing properly — either it is warped, hardened with age, or there is grit or limescale preventing it from sitting flat. Remove the flapper and inspect it. Rinse it under the tap and clean the seat (the rim the flapper presses against) with an old cloth. Refit and test. Why: a flapper costs £5–15 and takes 10 minutes to replace. But first check whether cleaning the seat fixes the seal — sometimes a piece of debris is the only issue and no new part is needed.',
  },
  {
    title: 'Replace the flapper if it is worn or warped',
    description: 'Turn off the isolation valve on the pipe behind the toilet (turn the slot to sit across the pipe). Flush to empty the cistern. Unhook the old flapper — it clips onto two pegs on either side of the overflow tube at the base of the cistern. Take the old flapper to a plumbers\' merchant or hardware shop to match the size before buying a new one; flappers are not universal. Clip the new flapper onto the same pegs and hook the chain back onto the flush handle arm. The chain should have a little slack — about 1–2 links — but not so much that it gets trapped under the flapper. Why: a chain that is too tight holds the flapper open slightly, preventing a seal. Too much slack and the flapper does not lift fully when you flush.',
  },
  {
    title: 'Turn the water back on and check the fill level',
    description: 'Open the isolation valve slowly — a quarter turn first, pause for 30 seconds, then fully open. Watch the cistern fill. The water level must stop at least 25mm below the top of the overflow pipe. If it fills higher than that, adjust the float downward until the cutoff point is correct. Why: the gap between the water level and the overflow pipe is the safety margin. If the water level sits at or above the overflow lip, any slight increase in pressure will cause it to run. The 25mm gap ensures it cannot overflow even if the valve is slow to shut.',
  },
  {
    title: 'Listen for 30 minutes after reassembling',
    description: 'Replace the cistern lid. Stand outside the bathroom door and listen. A correctly fixed toilet is completely silent between flushes — no trickle, no hiss. A running toilet you can hear from across a room is wasting 200–400 litres of water per day. If you can hear anything after 30 minutes, re-check the flapper is seated flat and that the float is not set too high. Why: a new flapper sometimes takes a few minutes to fully seat as the rubber softens in the water. Give it time before deciding the fix has not worked.',
  },
]

export default function FixARunningToilet() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a running toilet (won&apos;t stop filling)</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £80–150 — no plumber needed</p>
        <p className="text-gray-600 mb-6">A toilet that keeps running wastes 200–400 litres of water a day. It is almost always the float arm or the flapper valve — both are cheap and straightforward to fix.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-running-toilet'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a running toilet" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-running-toilet" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">A running toilet constantly trickles water into the bowl or down the overflow pipe after flushing. This is almost always one of two things: the float arm is set too high, or the flapper valve is not sealing.</p>
          <p className="text-sm text-gray-700 mb-2">You will be working inside the cistern — the tank at the back of the toilet. It contains only clean water. Nothing unpleasant.</p>
          <p className="text-sm text-gray-700">You do not need to turn off the mains supply. There is an isolation valve on the pipe behind the toilet that controls just this cistern.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Towel or cloth', hint: 'to rest the cistern lid on and catch any drips' },
            { icon: 'check', name: 'Flat-head screwdriver', hint: 'for adjusting the isolation valve and some ballvalves', toolId: 'screwdriver-flat' },
            { icon: 'buy', name: 'Replacement flapper valve', hint: 'only needed if cleaning does not fix the seal — take the old one to match the size', hintOrange: true },
          ]}
          slug="fix-a-running-toilet"
          guideName="Fix a running toilet"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-running-toilet']} />
        <StepProgress steps={steps} slug="fix-a-running-toilet" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Replacing the flapper before checking the float.</strong> The float adjustment costs nothing and takes 30 seconds. Check it first — it is the cause of roughly half of all running toilets.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Buying the wrong size flapper.</strong> Flappers are not universal. Take the old one to the shop to match it. A flapper that is slightly too small or too large will not seal properly.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Chain too tight or too loose.</strong> The flapper chain needs 1–2 links of slack. Too tight and the flapper stays slightly open; too loose and it gets trapped under the flapper during flushing.</p>
          <p className="text-sm text-yellow-900"><strong>Not turning off the isolation valve before removing the flapper.</strong> The cistern will not stop refilling while the valve is open. Turn it off first.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">The isolation valve will not close — you will need a plumber to fit a new valve before any other work can be done</p>
          <p className="text-sm text-red-900 mb-1">Water is leaking from around the base of the toilet, not from the cistern</p>
          <p className="text-sm text-red-900 mb-1">The cistern will not stop filling even after adjusting the float all the way down — the fill valve itself may need replacing</p>
          <p className="text-sm text-red-900">The overflow pipe outside the house is discharging water continuously — this is a legal requirement to fix promptly</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Float arm adjustment only</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement flapper valve</span><span className="font-medium">£10–25</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£80–150</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You now understand how a toilet cistern works — the float arm, the fill valve, and the flapper. You can diagnose a running toilet, tell the difference between a float problem and a flapper problem, and fix both. These skills transfer directly to replacing a full ballvalve, fixing a slow-filling cistern, and understanding your home&apos;s water system.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/replace-a-toilet-seat" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Replace a toilet seat →</a>
            <a href="/guides/fix-a-dripping-tap" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fix a dripping tap →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation →</a>
          </div>
        </div>

        {GUIDE_META['fix-a-running-toilet'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-running-toilet'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="fix-a-running-toilet"
          relatedSlugs={['fix-a-dripping-tap', 'replace-a-toilet-seat', 'fix-a-leaking-pipe-joint']}
        />
        <GuideActions slug="fix-a-running-toilet">
          <GuideExtras slug="fix-a-running-toilet" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="fix-a-running-toilet" title="Fix a running toilet" href="/guides/fix-a-running-toilet" />
      <MobileNav />
    </main>
  )
}
