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
  title: 'How to Turn Off Your Electricity at the Fuse Box | FixItFirst',
  description: 'Learn how to turn off your electricity at the consumer unit in seconds. Essential emergency skill every homeowner and renter needs.',
  openGraph: {
    title: 'How to Turn Off Your Electricity at the Fuse Box | FixItFirst',
    description: 'Learn how to turn off your electricity at the consumer unit in seconds. Essential emergency skill every homeowner and renter needs.',
    url: 'https://fixit-first.co.uk/guides/turn-off-electricity-fuse-box',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Find your consumer unit', description: 'Look under the stairs, in the hallway, kitchen, or garage. It is a white or grey box, usually mounted at head height, with a hinged cover. Open the cover to see the switches inside.' },
  { title: 'Identify the main switch', description: 'At the top or left of the unit is a large switch — usually labelled Main Switch. This controls power to the whole property.' },
  { title: 'Turn off the main switch', description: 'Push the main switch firmly to the off position (usually down). All power to the property will cut immediately.' },
  { title: 'Turn off individual circuits', description: 'If you only want to cut power to one room, find the breaker labelled for that circuit (e.g. Kitchen Sockets, Upstairs Lights) and switch it off individually.' },
  { title: 'Confirm the power is off', description: 'Try a light switch or plug in a phone charger on the circuit you have turned off. No response means the power is off.' },
  { title: 'Mark the location', description: 'Stick a label on the consumer unit door or take a photo so everyone in the house knows where it is. Also note the location for future reference.' },
]

export default function TurnOffElectricityFuseBox() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Turn off your electricity at the fuse box</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Essential safety knowledge</p>
        <p className="text-gray-500 mb-6">5 mins · Beginner · Essential safety knowledge</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['turn-off-electricity-fuse-box'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Turn off your electricity at the fuse box" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="turn-off-electricity-fuse-box" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Every adult in the home should know where the consumer unit (fuse box) is and how to turn off the power. In an electrical emergency, seconds matter.</p>
          <p className="text-sm text-gray-700">Your consumer unit is usually under the stairs, in a hallway cupboard, or in the kitchen. It is a grey or white box with rows of switches inside.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Nothing needed</span> — just your consumer unit</span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['turn-off-electricity-fuse-box']} />
        <StepProgress steps={steps} slug="turn-off-electricity-fuse-box" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not finding the consumer unit until there is already an emergency — find it now and tell everyone in the house.</p>
          <p className="text-sm text-yellow-900 mb-2">Assuming turning off a light switch cuts the power to the wiring — it does not. Only the consumer unit breaker does.</p>
          <p className="text-sm text-yellow-900">Not confirming the power is off before working on electrics — always test with a lamp or socket tester first.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call an electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">The main switch is already off but the property still has power — there may be a second supply</p>
          <p className="text-sm text-red-900 mb-1">There is burning, sparking, or a burning smell from the consumer unit</p>
          <p className="text-sm text-red-900">The cover is damaged or the wiring inside looks burnt or scorched</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Turning off the electricity</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Electrician if consumer unit is faulty</span><span className="font-medium">£100–250</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Emergency electrician call-out</span><span className="font-medium text-red-600">£100–250</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to isolate power to the whole home or individual circuits in seconds. This is the most important electrical skill a homeowner or renter can have.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['turn-off-electricity-fuse-box'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['turn-off-electricity-fuse-box'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['turn-off-electricity-fuse-box'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="turn-off-electricity-fuse-box" />
        <NextGuide currentSlug="turn-off-electricity-fuse-box" />
      </div>
      <RecentViewTracker slug="turn-off-electricity-fuse-box" title="Turn off your electricity at the fuse box" href="/guides/turn-off-electricity-fuse-box" />
      <MobileNav />
    </main>
  )
}
