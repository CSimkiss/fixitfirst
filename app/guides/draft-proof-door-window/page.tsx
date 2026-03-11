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
  title: 'How to Draft Proof a Door or Window | FixItFirst',
  description: 'Draft proof a door or window in 30 minutes. Step-by-step guide covering self-adhesive foam strips, brush strips, and door sweeps. Save £50–150 per year.',
}

const steps = [
  { title: 'Identify where the draft is coming from', description: 'On a cold or windy day, hold your hand around the edges of doors and windows. Feel for cold air. Alternatively, hold a lit candle near the frame and watch the flame for movement.' },
  { title: 'Clean the frame surfaces', description: 'Wipe the area where you will apply the strip with a damp cloth and allow to dry completely. Adhesive strips do not stick to dusty or greasy surfaces.' },
  { title: 'Measure and cut the strip', description: 'Measure each side of the frame and cut the foam or brush strip to length. Cut cleanly with scissors or a craft knife.' },
  { title: 'Apply the foam strip to the frame', description: 'Peel the backing off the self-adhesive strip and press it firmly onto the inside of the door or window frame — the surface the door closes against. Work in one continuous length per side where possible.' },
  { title: 'Fit a door sweep for the bottom gap', description: 'For the gap under an external door, screw a door sweep to the bottom of the door on the inside. Adjust the height so it lightly brushes the floor when the door closes.' },
  { title: 'Test and adjust', description: 'Close the door or window. The draft should be gone. If still present, check for gaps you missed or add a second layer of strip to close a larger gap.' },
]

export default function DraftProofDoorWindow() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Draft proof a door or window</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £50–150 per year</p>
        <p className="text-gray-500 mb-6">30 mins · Beginner · Saves £50–150 per year on heating</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['draft-proof-door-window'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Draft proof a door or window" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="draft-proof-door-window" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Drafts account for up to 25% of heat loss in older UK homes. Draft proofing is one of the highest return-on-investment home improvements you can make — materials cost £5–15 and pay back in weeks.</p>
          <p className="text-sm text-gray-700 mb-2">Feel for cold air around door and window frames on a windy day — that is where to focus first.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Scissors or craft knife</span> — to cut the strip to length</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Tape measure</span> — to measure the frame length</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Clean cloth</span> — to wipe the frame before applying adhesive strips</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Self-adhesive foam strip</span> — <span className="text-orange-600">buy: buy: £3–6 — use E-profile for large gaps, P-profile for small gaps</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Brush strip or door sweep</span> — <span className="text-orange-600">buy: buy: £5–10 — for the gap under an external door</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['draft-proof-door-window']} />
        <StepProgress steps={steps} slug="draft-proof-door-window" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Using foam strip that is too thick — the door will not close properly. Match the strip profile to the gap size.</p>
          <p className="text-sm text-yellow-900 mb-2">Not cleaning the frame before applying adhesive — the strip will peel off within days.</p>
          <p className="text-sm text-yellow-900">Only doing one side of a window frame — drafts come in at all four sides of a poorly fitting frame.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a tradesperson if...</h2>
          <p className="text-sm text-red-900 mb-1">The door or window frame itself is warped or rotten — draft proofing will not help and the frame needs replacing</p>
          <p className="text-sm text-red-900">You have a solid draft at a window despite new strips — the glass seal may be broken (misted double glazing)</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Foam strip for one door</span><span className="font-medium">£3–6</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Door sweep</span><span className="font-medium">£5–10</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Full house draft proofing materials</span><span className="font-medium">£20–40</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Tradesperson would charge</span><span className="font-medium text-red-600">£80–150</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know the different types of draft proofing and where to apply them. This is one of the most cost-effective energy-saving measures available — no specialist skills required.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-blue-800 mb-3">What this unlocks</h2>
          <p className="text-sm text-blue-900">Once doors and windows are sealed, the next step is loft insulation and cavity wall insulation — the two biggest sources of heat loss in most UK homes.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['draft-proof-door-window'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['draft-proof-door-window'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['draft-proof-door-window'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="draft-proof-door-window" />
        <NextGuide currentSlug="draft-proof-door-window" />
      </div>
      <RecentViewTracker slug="draft-proof-door-window" title="Draft proof a door or window" href="/guides/draft-proof-door-window" />
      <MobileNav />
    </main>
  )
}
