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
  title: 'How to Unblock a Drain | FixItFirst',
  description: 'How to unblock a sink, bath, or shower drain in 20 minutes — no chemicals needed. Step-by-step guide. Save £60–120 vs calling a plumber.',
  openGraph: {
    title: 'How to Unblock a Drain | FixItFirst',
    description: 'How to unblock a sink, bath, or shower drain in 20 minutes — no chemicals needed. Step-by-step guide. Save £60–120 vs calling a plumber.',
    url: 'https://fixit-first.co.uk/guides/unblock-a-drain',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Remove the drain cover', description: 'Unscrew or lift off the drain cover. Remove any visible hair or debris by hand — wear rubber gloves.' },
  { title: 'Pour boiling water', description: 'Carefully pour a full kettle of boiling water directly down the drain. This breaks up grease and soap build-up.' },
  { title: 'Use a plunger', description: 'Cover the drain with a cup plunger. Push down firmly and pull up sharply 10 times. Run water to test.' },
  { title: 'Try bicarbonate of soda and vinegar', description: 'Pour half a cup of bicarbonate of soda down the drain, then half a cup of white vinegar. Cover for 30 minutes, then flush with hot water.' },
  { title: 'Use a drain snake', description: 'Feed a drain snake or a bent wire coat hanger into the pipe. Rotate and pull to hook the blockage and drag it out.' },
  { title: 'Test and replace the cover', description: 'Run the tap for a minute. If water drains freely, refit the drain cover. Done.' },
]

export default function UnblockADrain() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Unblock a drain</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £60–120 today</p>
        
<p className="text-gray-500 mb-6">20 mins · Beginner · Saves £60-120 vs a plumber</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['unblock-a-drain'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Unblock a drain" />
          
<PrintButton />
        </div>
        <DifficultyComparison slug="unblock-a-drain" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This works for slow or fully blocked sink, bath, and shower drains.</p>
          <p className="text-sm text-gray-700 mb-2">Legal to DIY. No special skills needed.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
    { icon: 'check', name: 'Rubber gloves', hint: 'standard household item', toolId: 'rubber-gloves' },
    { icon: 'check', name: 'Kettle', hint: 'for boiling water flush' },
    { icon: 'check', name: 'Bicarbonate of soda and white vinegar', hint: 'most homes have these' },
    { icon: 'buy', name: 'Cup plunger', hint: 'buy — 8, worth having in every home', hintOrange: true, toolId: 'plunger' },
    { icon: 'buy', name: 'Drain snake', hint: 'buy — 10 if the plunger doesn\'t work (or use a bent wire coat hanger)', hintOrange: true, toolId: 'drain-snake' },
  ]}
          slug="unblock-a-drain"
          guideName="Unblock a drain"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['unblock-a-drain']} />
        <StepProgress steps={steps} slug="unblock-a-drain" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Using chemical drain cleaner at the same time as a plunger — the chemicals can splash back dangerously.</p>
          <p className="text-sm text-yellow-900 mb-2">Not wearing gloves when handling drain debris.</p>
          <p className="text-sm text-yellow-900">Pouring boiling water into plastic pipes — use very hot but not boiling water for plastic.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">Multiple drains in your home are blocked at the same time</p>
          <p className="text-sm text-red-900 mb-1">You can smell sewage coming up through the drain</p>
          <p className="text-sm text-red-900">Water is gurgling in other drains when you flush</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Household items only</span><span className="font-medium">£0</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Buy a drain snake</span><span className="font-medium">£5-10</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£60-120</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how drain blockages form and how to clear them using multiple techniques. These skills apply to any blocked sink, bath, or shower in your home.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['unblock-a-drain'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['unblock-a-drain'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['unblock-a-drain'].renterWarning}</p>
          </div>
        )}
        <GuideActions slug="unblock-a-drain">
          <GuideExtras slug="unblock-a-drain" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="unblock-a-drain" title="Unblock a drain" href="/guides/unblock-a-drain" />
      <MobileNav />
    </main>
  )
}
