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
  title: 'How to Replace a Shower Head | FixItFirst',
  description: 'Replace a shower head in 15 minutes with no tools. Step-by-step guide. Save £40–80 vs calling a plumber.',
  openGraph: {
    title: 'How to Replace a Shower Head | FixItFirst',
    description: 'Replace a shower head in 15 minutes with no tools. Step-by-step guide. Save £40–80 vs calling a plumber.',
    url: 'https://fixit-first.co.uk/guides/replace-a-shower-head',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Unscrew the old shower head', description: 'Grip the connection between the hose and the shower head with your hand or pliers (wrap in a cloth to protect the chrome). Twist anticlockwise — it should come off easily. If stiff, use the spanner.' },
  { title: 'Check the thread', description: 'Look at the threaded end of the hose. Clean off any old PTFE tape or scale with a cloth. Standard UK shower hoses use ½-inch BSP thread — check your new shower head says the same.' },
  { title: 'Wrap PTFE tape', description: 'Wrap 4–6 turns of PTFE tape clockwise around the thread on the hose end, pulling it tight as you wrap. This prevents any drips at the joint.' },
  { title: 'Screw on the new head', description: 'Thread the new shower head onto the hose clockwise, hand-tight first. Then give it one more quarter-turn with the spanner. Do not overtighten.' },
  { title: 'Test for leaks', description: 'Turn on the shower and check the connection for drips. If it drips, turn off, add another layer of PTFE tape, and retighten.' },
  { title: 'Adjust height and angle', description: 'Most shower heads have an adjustable ball joint at the hose connection — loosen the lock ring, set the angle you want, retighten.' },
]

export default function ReplaceAShowerHead() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Replace a shower head</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £40–80 today</p>
        <p className="text-gray-500 mb-6">15 mins · Beginner · Saves £40–80 vs a plumber</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['replace-a-shower-head'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Replace a shower head" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="replace-a-shower-head" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Replacing a shower head is one of the easiest plumbing jobs — in most cases you just unscrew the old one and screw on the new one.</p>
          <p className="text-sm text-gray-700 mb-2">Standard UK shower hoses use a universal ½-inch BSP connection. Any shower head from a hardware shop will fit. You do not need to turn off the water.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Adjustable spanner or pliers</span> — to grip the connection — wrap jaws in a cloth to avoid scratching</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Old cloth</span> — to grip and protect the chrome</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement shower head</span> — <span className="text-orange-600">buy: buy: £10–40 from any hardware shop or supermarket</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">PTFE tape</span> — <span className="text-orange-600">buy: buy: £1 — recommended for a reliable seal</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['replace-a-shower-head']} />
        <StepProgress steps={steps} />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not wrapping PTFE tape — the joint will almost certainly drip without it.</p>
          <p className="text-sm text-yellow-900 mb-2">Overtightening and cracking the plastic head — hand-tight plus a quarter-turn is plenty.</p>
          <p className="text-sm text-yellow-900">Buying a shower head without checking the hose thread — though almost all UK showers use ½ BSP, it is worth checking.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">The hose itself is damaged or the connection to the wall valve is leaking</p>
          <p className="text-sm text-red-900">Water is coming from inside the shower tray or wall rather than the head or hose</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Basic replacement shower head</span><span className="font-medium">£10–20</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Premium rainfall head</span><span className="font-medium">£25–40</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£40–80 (plus parts)</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand BSP shower connections and can confidently replace hoses and heads. This transfers to fitting a shower rail, replacing a bath mixer spout, and understanding flexible pipe connectors.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-blue-800 mb-3">What this unlocks</h2>
          <p className="text-sm text-blue-900">You can now replace the shower hose, fit a shower riser rail, or upgrade to a rainfall shower head — all using the same skill.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['replace-a-shower-head'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['replace-a-shower-head'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['replace-a-shower-head'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="replace-a-shower-head" />
        <NextGuide currentSlug="replace-a-shower-head" />
      </div>
      <RecentViewTracker slug="replace-a-shower-head" title="Replace a shower head" href="/guides/replace-a-shower-head" />
      <MobileNav />
    </main>
  )
}
