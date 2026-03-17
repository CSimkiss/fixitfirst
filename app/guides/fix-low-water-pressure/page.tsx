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
  title: 'How to Fix Low Water Pressure | FixItFirst',
  description: 'Diagnose and fix low water pressure at home in under 30 minutes. Covers aerators, stop valves, and when to call the water company. Save £60–100.',
  openGraph: {
    title: 'How to Fix Low Water Pressure | FixItFirst',
    description: 'Diagnose and fix low water pressure at home in under 30 minutes. Covers aerators, stop valves, and when to call the water company. Save £60–100.',
    url: 'https://fixit-first.co.uk/guides/fix-low-water-pressure',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Find out which taps are affected', description: 'Test every cold tap in the house. If pressure is low on one tap only, the problem is local (aerator or valve). If it is low on all taps, the problem is the mains supply or the main stop valve.' },
  { title: 'Check the main stop valve', description: 'The main stop valve is usually under the kitchen sink. Turn it fully anticlockwise to make sure it is fully open. A partially closed valve cuts pressure to the whole house.' },
  { title: 'Check the local isolation valves', description: 'Under each sink is a small isolation valve on the supply pipe. Use a flat-head screwdriver — the slot should be in line with the pipe (open). If it is across the pipe, it is partially closed.' },
  { title: 'Clean the tap aerator', description: 'Unscrew the aerator from the tip of the tap spout (turn anticlockwise). You will see a small mesh filter. Soak it in white vinegar for 30 minutes to dissolve limescale, then rinse and refit.' },
  { title: 'Clean the shower head', description: 'Unscrew the shower head and soak it in a bowl of white vinegar for an hour. Scale build-up inside the head is the most common cause of poor shower pressure.' },
  { title: 'Call the water company if the whole house is affected', description: 'If all taps are equally low pressure and your stop valve is fully open, call your water supplier. Low mains pressure is their responsibility to fix, and it is free.' },
]

export default function FixLowWaterPressure() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix low water pressure</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £60–100 today</p>
        <p className="text-gray-500 mb-6">30 mins · Beginner · Saves £60–100 vs a plumber</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-low-water-pressure'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix low water pressure" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-low-water-pressure" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">First establish whether it is one tap, one room, or the whole house. That tells you where to look.</p>
          <p className="text-sm text-gray-700 mb-2">In the UK, the water company is responsible for pressure at the street. Inside your home, it is usually a blocked aerator, a partially closed valve, or a scale build-up.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
    { icon: 'check', name: 'Adjustable spanner', hint: 'for removing aerators', toolId: 'adjustable-spanner' },
    { icon: 'check', name: 'Small bowl', hint: 'to catch water when removing the aerator' },
    { icon: 'buy', name: 'Descaling solution or white vinegar', hint: 'buy — 4 to soak a blocked aerator', hintOrange: true },
  ]}
          slug="fix-low-water-pressure"
          guideName="Fix low water pressure"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-low-water-pressure']} />
        <StepProgress steps={steps} />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Assuming low pressure on one tap means a whole-house problem — check other taps first.</p>
          <p className="text-sm text-yellow-900 mb-2">Putting the aerator back without rinsing — vinegar and loosened scale will come out of the tap.</p>
          <p className="text-sm text-yellow-900">Not checking whether the stop valve is fully open — this is the most common cause and takes 5 seconds to fix.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">Pressure is low on all taps and your stop valve is fully open — call the water company</p>
          <p className="text-sm text-red-900 mb-1">You suspect the pressure reducer (PRV) on the mains inlet is faulty</p>
          <p className="text-sm text-red-900">There is a visible leak on the mains pipe coming into the property</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Vinegar to descale aerator</span><span className="font-medium">£2–4</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement aerator</span><span className="font-medium">£5–10</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£60–100</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how water pressure works through your home — from the street main to each tap. You can diagnose whether a pressure problem is local or whole-house.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-blue-800 mb-3">What this unlocks</h2>
          <p className="text-sm text-blue-900">These diagnostic skills transfer to identifying airlocks in pipes, tracing why one radiator is cold, and understanding your whole water distribution system.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['fix-low-water-pressure'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['fix-low-water-pressure'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-low-water-pressure'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="fix-low-water-pressure" />
        <NextGuide currentSlug="fix-low-water-pressure" />
      </div>
      <RecentViewTracker slug="fix-low-water-pressure" title="Fix low water pressure" href="/guides/fix-low-water-pressure" />
      <MobileNav />
    </main>
  )
}
