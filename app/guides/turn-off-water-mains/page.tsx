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
  title: 'How to Turn Off Your Water Mains | FixItFirst',
  description: 'Find and turn off your water mains stop cock quickly. Essential emergency skill — could save thousands in flood damage. Step-by-step guide.',
  openGraph: {
    title: 'How to Turn Off Your Water Mains | FixItFirst',
    description: 'Find and turn off your water mains stop cock quickly. Essential emergency skill — could save thousands in flood damage. Step-by-step guide.',
    url: 'https://fixit-first.co.uk/guides/turn-off-water-mains',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Find the internal stop cock', description: 'Check under the kitchen sink first — this is where it is in 90% of UK homes. It is a brass valve on the pipe coming through the wall or floor. It may have a lever handle or a round knurled handle.' },
  { title: 'Check secondary locations', description: 'If not under the sink, try: the airing cupboard, the ground floor bathroom, or a utility room. In some flats, it is in a communal cupboard outside your door.' },
  { title: 'Turn off the stop cock', description: 'Turn the stop cock clockwise until it stops. A lever handle should turn 90 degrees so it is perpendicular to the pipe. A round handle may need several turns. The water will stop within a few seconds.' },
  { title: 'Confirm the water is off', description: 'Open a cold tap (not a hot tap — hot water cylinders hold a tank of water). No water means the stop cock is fully off. A trickle means the valve is partially open or worn — keep turning.' },
  { title: 'Find the external stop cock', description: 'Outside each property is an external stop cock, usually under a small metal cover in the pavement or garden. This requires a stop cock key. Know where it is in case the internal one fails.' },
  { title: 'Test it periodically', description: 'Turn the stop cock off and on once a year. Valves that are never turned seize over time. If yours is stiff or will not fully turn off, have a plumber replace it before you have an emergency.' },
]

export default function TurnOffWaterMains() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Turn off your water mains</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Prevents flood damage</p>
        <p className="text-gray-500 mb-6">5 mins · Beginner · Essential knowledge for every homeowner</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['turn-off-water-mains'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Turn off your water mains" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="turn-off-water-mains" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Every adult in the household should know where the main stop cock is and how to turn it off. If a pipe bursts, you may have less than a minute to act.</p>
          <p className="text-sm text-gray-700">The stop cock is almost always under the kitchen sink in UK homes. Take 5 minutes now to find it, before you ever need it.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">No tools usually needed</span> — most stop cocks can be turned by hand</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Flat-head screwdriver</span> — <span className="text-orange-600">some older stop cocks require a screwdriver in the slot — already in most homes</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Stop cock key</span> — <span className="text-orange-600">buy: £3–5 from a plumber's merchant — useful if the stop cock is stiff or in a pit outside</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['turn-off-water-mains']} />
        <StepProgress steps={steps} slug="turn-off-water-mains" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not finding the stop cock until there is already water everywhere — find it now, not in an emergency.</p>
          <p className="text-sm text-yellow-900 mb-2">Turning clockwise to open and anticlockwise to close — it is the opposite. Clockwise closes the valve (right-tight, left-loose).</p>
          <p className="text-sm text-yellow-900">Assuming a lever handle is closed when it is parallel to the pipe — parallel means open, perpendicular means closed.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">The internal stop cock will not turn off even with maximum force</p>
          <p className="text-sm text-red-900 mb-1">Water is still flowing after the stop cock is turned off — call your water supplier immediately</p>
          <p className="text-sm text-red-900">The stop cock is leaking itself</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Finding and using the stop cock</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Stop cock key (useful to own)</span><span className="font-medium">£3–5</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber to replace a seized stop cock</span><span className="font-medium text-red-600">£80–150</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to shut off water to your whole home in seconds. This is the single most important plumbing skill — it limits the damage from any burst pipe or appliance failure.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['turn-off-water-mains'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['turn-off-water-mains'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['turn-off-water-mains'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="turn-off-water-mains" />
        <NextGuide currentSlug="turn-off-water-mains" />
      </div>
      <RecentViewTracker slug="turn-off-water-mains" title="Turn off your water mains" href="/guides/turn-off-water-mains" />
      <MobileNav />
    </main>
  )
}
