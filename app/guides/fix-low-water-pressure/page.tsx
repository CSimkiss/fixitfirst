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
import RenovationContinue from '@/components/RenovationContinue'

export const metadata: Metadata = {
  title: 'How to Fix Low Water Pressure in a Tap | FixItFirst',
  description: 'Diagnose and fix low water pressure in a tap or shower in 30 minutes. Covers blocked aerators, closed valves, and limescale. Save £60–100 vs a plumber.',
  openGraph: {
    title: 'How to Fix Low Water Pressure in a Tap | FixItFirst',
    description: 'Diagnose and fix low water pressure in a tap or shower in 30 minutes. Covers blocked aerators, closed valves, and limescale. Save £60–100 vs a plumber.',
    url: 'https://fixit-first.co.uk/guides/fix-low-water-pressure',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Establish whether the problem is one tap or all taps',
    description: 'Turn on every cold tap in the house — kitchen, bathroom, outside tap if you have one. Note which ones are affected. If pressure is poor at just one tap, the problem is local to that fitting (blocked aerator, partially closed valve). If all cold taps are equally low, the problem is the mains supply or the main stop valve. If hot taps are the problem but cold taps are fine, the hot water cylinder or boiler pressure is the issue — see our repressurise a boiler guide. Why: diagnosing which category you are in determines what to do next. Cleaning an aerator will not fix a mains pressure problem and vice versa. This step takes two minutes and narrows the cause immediately.',
  },
  {
    title: 'Check the main stop valve is fully open',
    description: 'The main stop valve controls water from the mains into your house. It is usually found under the kitchen sink, in a downstairs cupboard, or in a utility room. Turn it anticlockwise as far as it goes — fully open. A partially closed stop valve reduces pressure to every tap in the house. If it is stiff and not at the fully-open position, this may be your entire problem. Why: stop valves are sometimes accidentally left partially closed after plumbing work, or they close slightly over years of not being operated. A valve that is only 70% open can cut mains pressure significantly — and it takes five seconds to fix.',
  },
  {
    title: 'Check the isolation valve under the affected tap',
    description: 'Under each sink and basin there are one or two small isolation valves on the supply pipes going up to the tap. These have a slot on the top — when the slot is in line with the pipe it is open, when it sits across the pipe it is closed. Use a flat-head screwdriver to confirm both valves are fully open (slot in line with the pipe). Why: isolation valves can be accidentally knocked to a partially closed position, especially under kitchen sinks where items are stored. A valve that is 80% open feels open when you look at it but cuts flow noticeably.',
  },
  {
    title: 'Remove and descale the tap aerator',
    description: 'The aerator is the small mesh filter screwed into the tip of the tap spout — twist it anticlockwise to remove it (some need a coin or flat-head screwdriver). You will see a small metal or plastic disc with one or more mesh screens. Hold it up to the light — if the holes are partially blocked with white limescale deposits, that is your problem. Drop the aerator into a small bowl of white vinegar and leave it for 30–60 minutes. The vinegar dissolves the limescale. Rinse it under the tap and refit. Why: in hard water areas, aerators block completely within a year or two. A 100% blocked aerator cuts flow to a trickle while the water pressure behind it remains normal. This is the most common cause of a single-tap pressure problem in the UK.',
  },
  {
    title: 'Descale the shower head if the shower is affected',
    description: 'Unscrew the shower head from the hose (turn anticlockwise) or remove the hose from the wall fitting. Submerge the shower head in a bowl or bag of white vinegar for 1–2 hours. The limescale build-up inside the spray plate and distribution holes will dissolve. Rinse thoroughly and refit — run the shower for 30 seconds before using it to flush any remaining vinegar. Why: shower heads in hard water areas block progressively over months. The individual spray holes narrow until flow is poor. This is not a pressure problem at the mains — the water pressure is fine, but it cannot get through the blocked nozzles.',
  },
  {
    title: 'Call the water company if all taps are affected and your stop valve is fully open',
    description: 'If every tap in the house has low pressure, your isolation valves are open, and your stop valve is fully open, the problem is on the supply side — either the mains pressure in your street is low, or the pipe from the street to your property is partially blocked or undersized. Call your water supplier (the number is on your bill). Low mains pressure is their responsibility to investigate and fix, at no cost to you. Why: UK water companies have a legal obligation to supply water at a minimum pressure. If your supply falls below 10 metres head (approximately 1 bar), they must act. Log the complaint in writing so it is on record.',
  },
]

export default function FixLowWaterPressure() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix low water pressure in a tap</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £60–100 in 30 mins — no plumber needed</p>
        <p className="text-gray-600 mb-6">Low water pressure in one tap is almost always a blocked aerator or a partially closed valve — both take minutes to fix. This guide walks you through the diagnosis in order so you fix the right thing first time.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-low-water-pressure'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix low water pressure in a tap" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-low-water-pressure" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">First establish whether it is one tap, one room, or the whole house. That tells you immediately where to look. The fix for a single-tap problem (blocked aerator) is completely different from a whole-house problem (stop valve or mains).</p>
          <p className="text-sm text-gray-700 mb-2">In hard water areas — most of England — limescale is the most common cause. The water supplier&apos;s website will tell you your water hardness level if you are unsure.</p>
          <p className="text-sm text-gray-700">You do not need to turn off the water to remove and descale an aerator on a tap with an isolation valve.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Flat-head screwdriver', hint: 'to check isolation valve positions and remove some aerators', toolId: 'screwdriver-flat' },
            { icon: 'check', name: 'Small bowl', hint: 'to soak the aerator in vinegar' },
            { icon: 'buy', name: 'White vinegar', hint: 'essential for descaling — any supermarket, under £2', hintOrange: true },
            { icon: 'buy', name: 'Replacement aerator (if damaged)', hint: 'match the thread size — take the old one to the hardware shop', hintOrange: true },
          ]}
          slug="fix-low-water-pressure"
          guideName="Fix low water pressure in a tap"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-low-water-pressure']} />
        <StepProgress steps={steps} slug="fix-low-water-pressure" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Assuming one low-pressure tap means a whole-house problem.</strong> Check every tap first. A blocked aerator on one fitting looks like poor pressure, but the rest of the house is fine. Two minutes of testing tells you which category you are in.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Putting the aerator back without rinsing properly.</strong> Vinegar loosens limescale but does not always flush it clear. Rinse the aerator under a running tap for 30 seconds to clear all loosened debris before refitting.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Not checking the stop valve position.</strong> A stop valve 80% open feels fully open when you turn the handle — but it is cutting pressure to the whole house. Make sure it is turned fully anticlockwise and cannot rotate any further.</p>
          <p className="text-sm text-yellow-900"><strong>Trying to fix mains pressure yourself.</strong> If the water company&apos;s supply is low, there is nothing on your property that will fix it. The PRV (pressure reducing valve) on the mains inlet adjusts the incoming pressure, but it should only be touched by a plumber.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">You suspect the PRV (pressure reducing valve) on the mains inlet is faulty — this is a specialist job</p>
          <p className="text-sm text-red-900 mb-1">There is a visible leak on the mains pipe coming into the property — loss of pressure plus a leak means the pipe itself is the problem</p>
          <p className="text-sm text-red-900">Pressure has dropped suddenly on all taps at once — this often indicates a burst pipe or major leak elsewhere in the system</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Open the stop valve / isolation valve</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">White vinegar to descale aerator</span><span className="font-medium">£1–2</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement aerator</span><span className="font-medium">£5–10</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£60–100</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You can diagnose a water pressure problem at home — distinguishing between a local issue (aerator, valve) and a mains issue — and fix the most common causes yourself. The diagnostic approach here transfers to tracing airlocks in pipes, understanding why one radiator is cold, and identifying where in the system any water problem originates.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/fix-a-dripping-tap" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fix a dripping tap →</a>
            <a href="/guides/replace-a-shower-head" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Replace a shower head →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation →</a>
          </div>
        </div>

        {GUIDE_META['fix-low-water-pressure'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-low-water-pressure'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="fix-low-water-pressure"
          relatedSlugs={['fix-a-dripping-tap', 'replace-a-shower-head', 'fix-a-running-toilet']}
        />
        <GuideActions slug="fix-low-water-pressure">
          <GuideExtras slug="fix-low-water-pressure" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="fix-low-water-pressure" title="Fix low water pressure in a tap" href="/guides/fix-low-water-pressure" />
      <MobileNav />
    </main>
  )
}
