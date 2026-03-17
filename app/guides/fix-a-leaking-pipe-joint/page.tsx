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
  title: 'How to Fix a Leaking Pipe Joint | FixItFirst',
  description: 'Stop a leaking pipe joint yourself in 30 minutes. Step-by-step guide covering PTFE tape and compression fittings. Save £60–120 vs a plumber.',
  openGraph: {
    title: 'How to Fix a Leaking Pipe Joint | FixItFirst',
    description: 'Stop a leaking pipe joint yourself in 30 minutes. Step-by-step guide covering PTFE tape and compression fittings. Save £60–120 vs a plumber.',
    url: 'https://fixit-first.co.uk/guides/fix-a-leaking-pipe-joint',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Turn off the water supply', description: 'Close the isolation valve on the pipe leading to the leak, or turn off the mains stop cock under the kitchen sink if there is no local valve.' },
  { title: 'Dry the joint completely', description: 'Mop up standing water and dry the joint with a towel. The joint must be fully dry before you can see where the leak is coming from.' },
  { title: 'For threaded joints — wrap with PTFE tape', description: 'Undo the joint with your spanner (anticlockwise). Remove any old tape. Wrap new PTFE tape clockwise around the thread 4–6 times, stretching it slightly as you wrap so it seats into the thread.' },
  { title: 'For compression joints — check the olive', description: 'Undo the compression nut. The olive is the small brass ring inside. If it is damaged or the nut has been overtightened and distorted it, replace both the olive and re-tighten the nut.' },
  { title: 'Reassemble and tighten', description: 'Screw the joint back together hand-tight, then give it another half-turn with the spanner. Do not overtighten — finger-tight plus half a turn is enough for most joints.' },
  { title: 'Turn water back on and check', description: 'Slowly open the isolation valve. Watch the joint for 2 minutes. If still dripping, give the nut a further quarter-turn. If it still leaks, call a plumber.' },
]

export default function FixALeakingPipeJoint() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a leaking pipe joint</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £60–120 in 30 mins — no plumber needed</p>
        <p className="text-gray-600 mb-6">Most people call a plumber for this. You probably don't need to.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-leaking-pipe-joint'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a leaking pipe joint" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-leaking-pipe-joint" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide covers leaks at threaded or compression pipe joints — the most common kind. If water is spraying from the middle of a pipe rather than at a joint, that is a different problem.</p>
          <p className="text-sm text-gray-700 mb-2">Turn off the water before you start and have towels ready. Most joint leaks are a simple fix.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
    { icon: 'check', name: 'Adjustable spanner', hint: 'you almost certainly already have one', toolId: 'adjustable-spanner' },
    { icon: 'check', name: 'Old towels or cloths', hint: 'to dry the joint and catch drips' },
    { icon: 'buy', name: 'PTFE thread seal tape', hint: 'buy from any hardware shop', hintOrange: true },
    { icon: 'buy', name: 'Replacement olive if needed', hint: 'buy — take the old one to match', hintOrange: true },
  ]}
          slug="fix-a-leaking-pipe-joint"
          guideName="Fix a leaking pipe joint"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-leaking-pipe-joint']} />
        <StepProgress steps={steps} />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Overtightening the joint — this distorts the olive in compression fittings and can crack plastic fittings.</p>
          <p className="text-sm text-yellow-900 mb-2">Forgetting to wrap PTFE tape clockwise — if you wrap it anticlockwise, it unravels when you tighten the fitting.</p>
          <p className="text-sm text-yellow-900">Not drying the joint before testing — residual drips look like a leak when the joint is actually sealed.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">Water is coming from a split or corroded section of pipe, not a joint</p>
          <p className="text-sm text-red-900 mb-1">The joint is in the wall or floor and you cannot access it properly</p>
          <p className="text-sm text-red-900">The leak returns within a day of your repair</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">PTFE tape only</span><span className="font-medium">£2</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">PTFE tape + replacement olive</span><span className="font-medium">£5–8</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£60–120</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how threaded and compression fittings work. These skills transfer to replacing tap connectors, fitting isolation valves, and understanding your whole water system.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-blue-800 mb-3">What this unlocks</h2>
          <p className="text-sm text-blue-900">Once you can fix a leaking joint, you can replace tap connectors, install isolating valves, and tackle most under-sink plumbing work with confidence.</p>
        </div>
        <p className="text-sm text-gray-500 text-center mb-3">Most people would pay a tradesperson for this.</p>
        {GUIDE_META['fix-a-leaking-pipe-joint'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-leaking-pipe-joint'].renterWarning}</p>
          </div>
        )}
        <GuideActions slug="fix-a-leaking-pipe-joint">
          <GuideExtras slug="fix-a-leaking-pipe-joint" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="fix-a-leaking-pipe-joint" title="Fix a leaking pipe joint" href="/guides/fix-a-leaking-pipe-joint" />
      <MobileNav />
    </main>
  )
}
