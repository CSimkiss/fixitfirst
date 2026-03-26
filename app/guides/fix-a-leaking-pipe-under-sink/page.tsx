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
  title: 'How to Fix a Leaking Pipe Under a Sink | FixItFirst',
  description: 'Stop a leak under your kitchen or bathroom sink yourself in 30 minutes. Covers bottle traps, waste connections, and push-fit joints. Save £60–120 vs a plumber.',
  openGraph: {
    title: 'How to Fix a Leaking Pipe Under a Sink | FixItFirst',
    description: 'Stop a leak under your kitchen or bathroom sink yourself in 30 minutes. Covers bottle traps, waste connections, and push-fit joints. Save £60–120 vs a plumber.',
    url: 'https://fixit-first.co.uk/guides/fix-a-leaking-pipe-under-sink',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Find the exact source of the leak',
    description: 'Put a bucket or tray under the pipework before you do anything else. Then run the tap slowly and watch closely. Most under-sink leaks come from one of three places: the connection at the plughole (where the waste pipe meets the basin), a joint between two sections of waste pipe, or the trap itself — the U-shaped or bottle-shaped fitting that holds water to block drain smells. Dry all the pipework with a towel, then run water again and watch for where the first drip appears. Why: you need to be certain which joint is leaking before you start loosening anything. Tightening the wrong joint wastes time and can disturb connections that were not leaking.',
  },
  {
    title: 'Tighten the leaking connection if it is just loose',
    description: 'Under-sink waste pipes connect with hand-tightened plastic nuts — no tools needed. If the leak is at a joint, try tightening the nut by hand first. If it was finger-tight or loose, tighten it fully (firm, but do not force it). Run the tap and recheck. Why: most under-sink leaks are simply loose connections — the nuts work themselves loose over time from vibration and thermal expansion. About half of all under-sink leaks are fixed by hand-tightening alone. Always try this before taking anything apart.',
  },
  {
    title: 'Replace the rubber seal if tightening does not stop the drip',
    description: 'If tightening the nut does not stop the leak, the rubber seal or washer inside the fitting has deteriorated. Place your bucket under the fitting, unscrew the nut by hand (anticlockwise), and pull the two sections apart. Inside the nut you will find a flat rubber washer or a tapered cone-shaped seal. Take it to a hardware shop to match it — standard sizes are 32mm for basins and 40mm for kitchen sinks. Press the new seal into position and hand-tighten the nut. Why: rubber seals harden and crack over time, especially in hot water situations. No amount of tightening will fix a failed seal — it needs to be replaced. They cost £1–3.',
  },
  {
    title: 'Replace the trap if it is cracked or the seal is integrated',
    description: 'If the leak is from the trap body itself (rather than a joint), the trap needs replacing — you cannot patch a cracked trap. Unscrew the top of the trap from the waste outlet and the bottom from the wall pipe. Take the old trap to a hardware shop to match the size and outlet position. Fit the new trap hand-tight, checking that both rubber seals are correctly seated before tightening. Why: traps are cheap (£5–15) and designed to be homeowner-replaceable. Most plumbing supply shops carry standard 32mm and 40mm traps. If you have a basin with a pedestal, the trap is usually a bottle trap; under a kitchen sink it is usually a P-trap or S-trap.',
  },
  {
    title: 'Apply plumber\'s putty only at the waste outlet if needed',
    description: 'If the leak is from the waste outlet itself — the chrome or plastic fitting in the bottom of the basin — unscrew the back nut under the basin (use slip-joint pliers if it is stiff). Lift the outlet, scrape away the old putty or seal, and apply a ring of plumber\'s putty around the rim before pressing the outlet back in. Hand-tighten the back nut. Why: the waste outlet sits in a hole in the basin and seals against the basin surface with putty or a rubber gasket. When this seal fails, water leaks down through the hole and drips from the waste outlet connection below — it looks like the trap is leaking but the actual failure point is higher up.',
  },
  {
    title: 'Test under running water for two full minutes',
    description: 'Run the tap at full flow for two minutes while watching every joint you worked on. Fill the basin and let it drain completely — this puts maximum flow through the waste system. Dry all joints before the test so any new drip is immediately visible. Check again 30 minutes later. Why: some leaks only appear under sustained flow or when the trap is full. A quick test pass is not enough confirmation. A joint that is dry after two full minutes of running is almost certainly fixed.',
  },
]

export default function FixALeakingPipeUnderSink() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a leaking pipe under a sink</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £60–120 in 30 mins — no plumber needed</p>
        <p className="text-gray-600 mb-6">A drip under the sink is usually a loose fitting or a failed rubber seal. Both take minutes to fix and cost almost nothing. This guide shows you exactly where to look and what to do.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-leaking-pipe-under-sink'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a leaking pipe under a sink" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-leaking-pipe-under-sink" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide covers waste pipes under sinks — the grey or white plastic drainpipes that take water away from the basin to the wall. These are not under pressure; they only carry water when the tap is running or the basin is draining.</p>
          <p className="text-sm text-gray-700 mb-2">If the leak is from the small chrome pipes supplying the tap (the ones connected to the tap itself, under pressure), see our <a href="/guides/fix-a-leaking-pipe-joint" className="text-orange-600 hover:underline font-medium">Fix a leaking pipe joint</a> guide instead.</p>
          <p className="text-sm text-gray-700">You do not need to turn off the water supply for this job unless you are replacing the waste outlet at the bottom of the basin.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Bucket or tray', hint: 'to catch water when you undo the trap', toolId: 'bucket' },
            { icon: 'check', name: 'Cloth or sponge', hint: 'to dry pipework so you can see exactly where the drip is', toolId: 'sponge-cloths' },
            { icon: 'check', name: 'Slip-joint pliers', hint: 'only needed if the trap nut is too stiff to undo by hand', toolId: 'adjustable-grips' },
            { icon: 'buy', name: 'Replacement trap seal / washer', hint: '32mm for basins, 40mm for kitchen sinks — buy a pack, they are pennies', hintOrange: true },
            { icon: 'buy', name: 'Replacement bottle trap (if needed)', hint: '£5–15 at any plumbers\' merchant or hardware shop', hintOrange: true },
          ]}
          slug="fix-a-leaking-pipe-under-sink"
          guideName="Fix a leaking pipe under a sink"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-leaking-pipe-under-sink']} />
        <StepProgress steps={steps} slug="fix-a-leaking-pipe-under-sink" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Not drying the pipes before testing.</strong> If the pipes are wet, you cannot tell where a new drip is coming from. Dry everything first, then run the tap.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Overtightening plastic trap nuts.</strong> The threads are plastic — they strip easily. Hand-tight is enough. If it still leaks after hand-tight, the issue is the seal, not the tightness.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Buying the wrong size replacement.</strong> Waste fittings come in 32mm (basins) and 40mm (sinks and baths). Take the old fitting with you when buying a replacement.</p>
          <p className="text-sm text-yellow-900"><strong>Tightening the wrong joint.</strong> Identify the exact source of the drip before touching anything. The drip point and the origin of the leak are sometimes different — a loose joint higher up can run down the pipe and drip from a lower point.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">Water is leaking from the supply pipes to the tap — the thin pipes under pressure — not the waste pipes</p>
          <p className="text-sm text-red-900 mb-1">The pipe in the wall is visibly cracked or the wall around the waste outlet is wet or stained</p>
          <p className="text-sm text-red-900 mb-1">The basin itself is cracked around the waste outlet</p>
          <p className="text-sm text-red-900">The leak returns within a day of replacing the seal</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Tightening a loose nut</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement rubber seal</span><span className="font-medium">£1–5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement bottle trap</span><span className="font-medium">£8–20</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£60–120</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You understand how under-sink waste plumbing is put together — the trap, the seals, and how to tell a supply pipe leak from a waste pipe leak. These skills transfer to replacing a full basin waste, fitting a new trap, and understanding waste runs throughout your home.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/fix-a-leaking-pipe-joint" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fix a leaking pipe joint →</a>
            <a href="/guides/unblock-a-sink" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Unblock a sink →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation →</a>
          </div>
        </div>

        {GUIDE_META['fix-a-leaking-pipe-under-sink'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-leaking-pipe-under-sink'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="fix-a-leaking-pipe-under-sink"
          relatedSlugs={['fix-a-leaking-pipe-joint', 'unblock-a-sink', 'prep-bathroom-plumbing']}
        />
        <GuideActions slug="fix-a-leaking-pipe-under-sink">
          <GuideExtras slug="fix-a-leaking-pipe-under-sink" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="fix-a-leaking-pipe-under-sink" title="Fix a leaking pipe under a sink" href="/guides/fix-a-leaking-pipe-under-sink" />
      <MobileNav />
    </main>
  )
}
