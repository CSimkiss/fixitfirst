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
  title: 'Fix a Squeaky Floorboard | FixItFirst',
  description: 'Fix a squeaky floorboard in 20 minutes using a screw. Step-by-step beginner guide. Save £40–60 vs calling a carpenter.',
}

const steps = [
  { title: 'Find and mark the squeak', description: 'Walk slowly across the board and mark the squeaky area with a small piece of tape.' },
  { title: 'Check for pipes and cables', description: 'Run a cable/pipe detector across the full length of the board before drilling anything. Cables run vertically from sockets and switches; pipes run to radiators and bathrooms.' },
  { title: 'Find the joist', description: 'Knock along the board with your knuckle. A dull, solid sound means there is a joist below; a hollow sound means there is not. Joists are typically spaced 400mm apart.' },
  { title: 'Drill a pilot hole', description: 'Drill a pilot hole through the board into the joist below — use a bit slightly narrower than your screw shank. This prevents the board splitting.' },
  { title: 'Drive the screw', description: 'Drive a 50mm wood screw through the pilot hole. The screw should pull the board firmly down onto the joist. Drive the head just below the surface.' },
  { title: 'Fill and finish', description: 'Fill the screw hole with wood filler if the floor is exposed. Allow to dry, sand flush, and touch up with floor paint or varnish if needed.' },
]

export default function FixASqueakyFloorboard() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a squeaky floorboard</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £40–60 today</p>
        <p className="text-gray-500 mb-6">20 mins · Beginner · Saves £40–60 vs a carpenter</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-squeaky-floorboard'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a squeaky floorboard" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-squeaky-floorboard" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Squeaky floorboards are caused by the board rubbing against a joist or a neighbouring board. Screwing the board down tight stops the movement and kills the squeak.</p>
          <p className="text-sm text-gray-700">Always use a pipe and cable detector before drilling into a floor. Pipes and cables run under floors — particularly near bathrooms, kitchens, and walls.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Pipe &amp; cable detector</span> — essential before screwing into a floor</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Drill or screwdriver</span> — to drive the screw</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">50mm wood screws</span> — <span className="text-orange-600">buy: £1–3 — countersinking screws are ideal</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Wood filler</span> — <span className="text-orange-600">buy: £3–5 if the floor is visible and you want a neat finish</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-squeaky-floorboard']} />
        <StepProgress steps={steps} slug="fix-a-squeaky-floorboard" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Screwing without checking for cables and pipes first — this is the most dangerous mistake on this job.</p>
          <p className="text-sm text-yellow-900 mb-2">Screwing between joists — the board just flexes and squeaks again. You must hit the joist.</p>
          <p className="text-sm text-yellow-900">Using screws that are too short — they need to go at least 25mm into the joist to hold.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a carpenter if...</h2>
          <p className="text-sm text-red-900 mb-1">The board has significant bounce or flex — this may indicate a damaged joist</p>
          <p className="text-sm text-red-900 mb-1">There is damp, rot, or discolouration visible when you inspect the board</p>
          <p className="text-sm text-red-900">You cannot locate the joist and the squeak is in a bathroom or kitchen</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Wood screws only</span><span className="font-medium">£2–3</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Screws and filler</span><span className="font-medium">£5–8</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Carpenter would charge</span><span className="font-medium text-red-600">£40–60</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how floorboards and joists relate, how to locate a joist by sound, and how to safely screw into a floor. This transfers to fitting skirting boards and laying new flooring.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['fix-a-squeaky-floorboard'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['fix-a-squeaky-floorboard'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-squeaky-floorboard'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="fix-a-squeaky-floorboard" />
        <NextGuide currentSlug="fix-a-squeaky-floorboard" />
      </div>
      <RecentViewTracker slug="fix-a-squeaky-floorboard" title="Fix a squeaky floorboard" href="/guides/fix-a-squeaky-floorboard" />
      <MobileNav />
    </main>
  )
}
