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
  title: 'Replace a Plug Fuse | FixItFirst',
  description: 'Replace a plug fuse in 5 minutes. Step-by-step UK guide — covers fuse ratings, how to test a fuse, and what to do if it blows again. Save £30–60.',
}

const steps = [
  { title: 'Unplug from the wall', description: 'Never work on a plugged-in appliance. Pull it out of the socket first.' },
  { title: 'Unscrew the plug', description: 'Flip the plug over. There is a single screw in the centre — undo it with a flat-head screwdriver. The plug opens into two halves.' },
  { title: 'Remove the fuse', description: 'The fuse is the small cylinder sitting between the live and neutral pins. Pop one end out with the tip of a screwdriver, or pull it with your fingernail.' },
  { title: 'Check the fuse', description: 'Hold it up to a light. A blown fuse often shows a visible broken wire inside. If you cannot tell by looking, swap it for a new one of the same rating and test the appliance.' },
  { title: 'Fit the correct replacement', description: 'Check the rating stamped on the old fuse — usually 3A (for appliances under 700W like lamps and radios) or 13A (for appliances above 700W like kettles and irons). Use the exact same rating.' },
  { title: 'Reassemble and test', description: 'Press the new fuse into the clips, close the plug, tighten the screw, and plug the appliance in to test.' },
]

export default function ReplaceAPlugFuse() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Replace a plug fuse</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £30–60 today</p>
        <p className="text-gray-500 mb-6">5 mins · Beginner · Saves £30–60 vs an electrician</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['replace-a-plug-fuse'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Replace a plug fuse" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="replace-a-plug-fuse" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">UK plugs contain a small fuse inside them. When an appliance suddenly stops working, the plug fuse is the first thing to check — it costs £1 and takes 2 minutes.</p>
          <p className="text-sm text-gray-700 mb-2">This fix works for any standard UK 3-pin plug. If the appliance trips the whole circuit rather than just going dead, see our circuit breaker guide instead.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Flat-head screwdriver</span> — to open the plug</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement fuse</span> — <span className="text-orange-600">buy: buy: £1–3 — must match the existing rating (3A or 13A stamped on the side)</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['replace-a-plug-fuse']} />
        <StepProgress steps={steps} slug="replace-a-plug-fuse" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Fitting a higher-rated fuse to stop it blowing — a 13A fuse in a lamp is a fire risk. Always match the rating.</p>
          <p className="text-sm text-yellow-900 mb-2">Not investigating why it blew — if the new fuse blows immediately, the appliance is faulty. Stop using it.</p>
          <p className="text-sm text-yellow-900">Opening a plug that is still in the socket — always unplug first.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">The new fuse blows immediately — the appliance is faulty; stop using it and get it repaired or replaced</p>
          <p className="text-sm text-red-900 mb-1">There are scorch marks inside the plug or on the cable</p>
          <p className="text-sm text-red-900">The cable is damaged or the wires are exposed</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement fuse</span><span className="font-medium">£1–3</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Pack of spare fuses</span><span className="font-medium">£3–5</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Electrician call-out</span><span className="font-medium text-red-600">£30–60</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how UK plug fuses work, how to match fuse ratings to appliances, and how to diagnose a blown fuse. This applies to every plug-top appliance in your home.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['replace-a-plug-fuse'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['replace-a-plug-fuse'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['replace-a-plug-fuse'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="replace-a-plug-fuse" />
        <NextGuide currentSlug="replace-a-plug-fuse" />
      </div>
      <RecentViewTracker slug="replace-a-plug-fuse" title="Replace a plug fuse" href="/guides/replace-a-plug-fuse" />
      <MobileNav />
    </main>
  )
}
