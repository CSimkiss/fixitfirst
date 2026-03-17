import type { Metadata } from 'next'
import StepProgress from '@/components/StepProgress'
import CompleteButton from '@/components/CompleteButton'
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
import NextGuide from '@/components/NextGuide'
import DifficultyComparison from '@/components/DifficultyComparison'
import { GUIDE_META } from '@/lib/guide-meta'

export const metadata: Metadata = {
  title: 'How to Repressurise a Boiler | FixItFirst',
  description: 'Repressurise your boiler in 10 minutes. Step-by-step UK guide — covers finding the filling loop and reading the pressure gauge. Save £50–80.',
  openGraph: {
    title: 'How to Repressurise a Boiler | FixItFirst',
    description: 'Repressurise your boiler in 10 minutes. Step-by-step UK guide — covers finding the filling loop and reading the pressure gauge. Save £50–80.',
    url: 'https://fixit-first.co.uk/guides/repressurise-a-boiler',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Check the pressure gauge', description: 'Look at the pressure gauge on the front of the boiler. It is usually a dial or digital display. Normal pressure is 1–1.5 bar. Below 1 bar means the system has lost pressure and needs topping up.' },
  { title: 'Locate the filling loop', description: 'The filling loop is a silver braided hose (about 30cm long) with valves at each end, usually found under the boiler or in the airing cupboard. Some are external (a separate hose), some are internal (a key on the boiler body).' },
  { title: 'Connect external filling loops', description: 'If the filling loop is separate, connect it to the two valves. The ends screw or push-click on. Make sure it is secure at both ends.' },
  { title: 'Open the filling valves', description: 'Open both valves — usually by turning them a quarter-turn so the slot aligns with the hose. You will hear water entering the system.' },
  { title: 'Watch the pressure gauge', description: 'Watch the gauge rise slowly. Stop when the needle reaches 1.5 bar. Do not let it go above 2 bar — this can trigger the pressure relief valve and waste water.' },
  { title: 'Close the valves and remove the loop', description: 'Close both valves, remove the filling loop if it was external, and reset the boiler (usually a reset button, held for 3 seconds). The boiler should fire up normally.' },
]

export default function RepressuriseABoiler() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Repressurise a boiler</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £50–80 today</p>
        <p className="text-gray-500 mb-6">10 mins · Beginner · Saves £50–80 vs a heating engineer</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['repressurise-a-boiler'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Repressurise a boiler" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="repressurise-a-boiler" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">If your boiler has an error code or your radiators are cold throughout the house, check the pressure gauge on the boiler front. If it reads below 1 bar, the system needs repressurising.</p>
          <p className="text-sm text-gray-700">This is a safe, straightforward job on any sealed central heating system (the most common type in UK homes). It takes 10 minutes.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
    { icon: 'check', name: 'No tools needed', hint: 'everything required is already on your boiler' },
  ]}
          slug="repressurise-a-boiler"
          guideName="Repressurise a boiler"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['repressurise-a-boiler']} />
        <StepProgress steps={steps} slug="repressurise-a-boiler" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Overfilling past 2 bar — the boiler will lock out again and you will need to bleed a radiator to release pressure.</p>
          <p className="text-sm text-yellow-900 mb-2">Not closing both valves before removing the hose — water will spray out.</p>
          <p className="text-sm text-yellow-900">Assuming the boiler needs repressurising every week — if pressure keeps dropping, there is a leak in the system that needs a heating engineer.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a heating engineer if...</h2>
          <p className="text-sm text-red-900 mb-1">The pressure gauge rises immediately after repressurising and trips the relief valve — there is too much water in the system</p>
          <p className="text-sm text-red-900 mb-1">You cannot find the filling loop or it appears damaged</p>
          <p className="text-sm text-red-900">The boiler pressure drops again within a few days — there is a leak that needs finding</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Repressurising the boiler</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">If there is an underlying leak</span><span className="font-medium">£100–300 to find and fix</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Heating engineer call-out</span><span className="font-medium text-red-600">£50–80</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how a sealed central heating system holds pressure and how to restore it. This gives you the knowledge to understand boiler error codes and when to call for help.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['repressurise-a-boiler'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['repressurise-a-boiler'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['repressurise-a-boiler'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="repressurise-a-boiler" />
        <NextGuide currentSlug="repressurise-a-boiler" />
      </div>
      <RecentViewTracker slug="repressurise-a-boiler" title="Repressurise a boiler" href="/guides/repressurise-a-boiler" />
      <MobileNav />
    </main>
  )
}
