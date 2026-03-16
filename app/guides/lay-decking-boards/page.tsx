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
  title: 'Lay Decking Boards | FixItFirst',
  description: 'Lay decking boards yourself in a full day. Step-by-step guide covering joist frames, board spacing, fixing, and finishing. Save £500–1,500 on labour.',
}

const steps = [
  { title: 'Plan the area and calculate materials', description: 'Measure the area and decide on the deck layout and height. For ground-level decks, you need joists (50x100mm treated timber) at 400mm centres, deck boards (typically 28mm thick, 120mm wide), fixing screws, and weed membrane. Add 10% to board quantities for waste and cuts.' },
  { title: 'Lay the joist frame', description: 'Lay the outer frame first, checking it is square (measure diagonally both ways — equal measurements mean it is square). Lay inner joists at 400mm centres. All timber must be pressure-treated. Raise the frame on adjustable deck feet or pads to allow airflow underneath and prevent ground contact.' },
  { title: 'Lay weed membrane', description: 'Cut weed membrane to fit the area under the decking and secure it to the ground or base. This prevents weeds growing up between boards and reduces maintenance significantly.' },
  { title: 'Start laying boards from the house outward', description: 'Begin the first board against the house wall, leaving a 10mm expansion gap. Fix with two screws per joist crossing — stainless steel or coated decking screws, 65–75mm long. Pre-drill near the board ends to prevent splitting.' },
  { title: 'Maintain consistent board spacing', description: 'Use a 5mm spacer (an off-cut of decking is ideal) between each board for drainage and expansion. Lay boards bark-side up (the concave side faces up) — this directs rainwater away and reduces cupping. Check straightness every 5–6 boards with a long straight edge.' },
  { title: 'Trim edges and treat all cut ends', description: 'Once all full boards are down, snap a chalk line for the final edge and cut with a circular saw in one pass. Treat all cut ends immediately with end-grain preservative — this is where moisture enters fastest. Treat the whole deck with decking oil or stain once complete.' },
]

export default function LayDeckingBoards() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Lay decking boards</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £500–1,500 on labour</p>
        <p className="text-gray-500 mb-6">Full day · Intermediate · Saves £500–1,500 on labour costs</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['lay-decking-boards'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Lay decking boards" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="lay-decking-boards" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Ground-level decking (under 600mm high, not attached to the house structure) does not require planning permission in England and Wales in most cases. Raised decks or those attached to the house may need Building Regulations approval — check with your local council if unsure.</p>
          <p className="text-sm text-gray-700">This guide covers ground-level or low-level deck construction with a timber joist frame. Allow one full day for a deck up to 20m². Larger or raised decks need more time and possibly professional structural help.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Circular saw or mitre saw</span> — to cut boards and joists to length</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Cordless drill</span> — with screwdriver and drill bits</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Tape measure, pencil, string line</span> — for marking out and keeping straight</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Spirit level and square</span> — for checking frame level and square</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Pressure-treated timber joists</span> — <span className="text-orange-600">buy: 50x100mm UC4 treated — priced per length at timber merchants or large DIY stores</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Decking boards</span> — <span className="text-orange-600">buy: £3–8 per board — choose pressure-treated softwood or hardwood such as Bangkirai or Ipe</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Stainless steel decking screws (65mm)</span> — <span className="text-orange-600">buy: £10–15 per box of 200 — must be stainless or coated for outdoor use</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['lay-decking-boards']} />
        <StepProgress steps={steps} slug="lay-decking-boards" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Using untreated timber for the frame — it will rot within 2–3 years. Always use UC4 pressure-treated timber for any ground-contact applications.</p>
          <p className="text-sm text-yellow-900 mb-2">Not pre-drilling near board ends — screwing close to the end without a pilot hole splits the board.</p>
          <p className="text-sm text-yellow-900">Skipping the board treatment on completion — bare or cut decking absorbs water immediately. Apply decking oil or stain within a week of installation.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a landscaper if...</h2>
          <p className="text-sm text-red-900 mb-1">The deck needs to be over 600mm high — this requires structural calculations and likely Building Regulations approval</p>
          <p className="text-sm text-red-900 mb-1">The ground is significantly uneven or sloped — a level frame on uneven ground requires experience to get right</p>
          <p className="text-sm text-red-900">You need to cut through or near drains, cables, or tree roots underground — always check for underground services first</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Materials for 10m² deck (DIY)</span><span className="font-medium">£200–400</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Materials for 20m² deck (DIY)</span><span className="font-medium">£400–700</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Landscaper for same job (labour + materials)</span><span className="font-medium text-red-600">£900–2,200</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to build a timber deck frame, lay and fix boards correctly, and finish to a professional standard. The framing and fastening skills transfer directly to raised garden beds, outbuildings, and timber storage structures.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['lay-decking-boards'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['lay-decking-boards'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['lay-decking-boards'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="lay-decking-boards" />
        <NextGuide currentSlug="lay-decking-boards" />
      </div>
      <RecentViewTracker slug="lay-decking-boards" title="Lay decking boards" href="/guides/lay-decking-boards" />
      <MobileNav />
    </main>
  )
}
