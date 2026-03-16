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
  title: 'How to Fix a Cold Radiator | FixItFirst',
  description: 'Diagnose and fix a cold radiator in 20 minutes. Covers bleeding, thermostatic valves, and lockshield valves. Save £50–80 vs a heating engineer.',
  openGraph: {
    title: 'How to Fix a Cold Radiator | FixItFirst',
    description: 'Diagnose and fix a cold radiator in 20 minutes. Covers bleeding, thermostatic valves, and lockshield valves. Save £50–80 vs a heating engineer.',
    url: 'https://fixit-first.co.uk/guides/fix-a-cold-radiator',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Identify the problem', description: 'With the heating on, feel across the radiator with your hand. Cold at the top = trapped air — go to step 2. Cold at the bottom only = sludge (needs a power flush — call a heating engineer). Completely cold = closed valve — go to step 4.' },
  { title: 'Bleed the radiator — locate the bleed valve', description: 'The bleed valve is a small square peg in the top corner of the radiator (usually the top right). Insert the bleed key into the square hole.' },
  { title: 'Open the bleed valve', description: 'Turn the bleed key anticlockwise about a quarter-turn. Hold the cloth below it. You will hear air hissing out. When the hiss stops and a steady drip of water appears, close the valve clockwise immediately.' },
  { title: 'Check the thermostatic valve (TRV)', description: 'The TRV is the valve with numbered settings (1–5), usually on the side of the radiator at the bottom. Make sure it is not set to 0 (off) or frost protection (snowflake). Turn it to 3–4.' },
  { title: 'Check the lockshield valve', description: 'The lockshield is the valve on the other side of the radiator — it has a plastic cap. Remove the cap and use pliers or a spanner to open the valve a few turns anticlockwise. This valve controls flow balance.' },
  { title: 'Check boiler pressure and reset', description: 'After bleeding any radiator, check the boiler pressure gauge. If it has dropped below 1 bar, repressurise the boiler (see our repressurising guide). Reset the boiler and let the heating run for 30 minutes.' },
]

export default function FixAColdRadiator() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a cold radiator</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £50–80 today</p>
        <p className="text-gray-500 mb-6">20 mins · Beginner · Saves £50–80 vs a heating engineer</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-cold-radiator'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a cold radiator" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-cold-radiator" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">First work out which part of the radiator is cold — hot at the top and cold at the bottom means sludge; cold at the top with hot at the bottom means trapped air (bleeding needed).</p>
          <p className="text-sm text-gray-700">This guide covers the two most common causes: trapped air (bleed it) and a stuck valve (open it). Both are simple fixes.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Radiator bleed key</span> — most homes have one — buy for £1–3 if not</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Small cloth or old towel</span> — to catch the drip when bleeding</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Flat-head screwdriver or pliers</span> — <span className="text-orange-600">buy: to adjust the lockshield valve cap if needed</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-cold-radiator']} />
        <StepProgress steps={steps} slug="fix-a-cold-radiator" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not having a cloth ready when bleeding — water squirts out without warning once the air escapes.</p>
          <p className="text-sm text-yellow-900 mb-2">Leaving the bleed valve open — it only needs a quarter-turn and should be closed as soon as water appears.</p>
          <p className="text-sm text-yellow-900">Forgetting to check boiler pressure after bleeding — bleeding releases water from the system and drops the pressure.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a heating engineer if...</h2>
          <p className="text-sm text-red-900 mb-1">The radiator is cold at the bottom — this is sludge and requires a power flush</p>
          <p className="text-sm text-red-900 mb-1">Multiple radiators throughout the house are cold — indicates a circulation problem</p>
          <p className="text-sm text-red-900">The boiler pressure drops to zero within 24 hours of repressurising</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Bleeding the radiator</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Bleed key (if needed)</span><span className="font-medium">£1–3</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Heating engineer call-out</span><span className="font-medium text-red-600">£50–80</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how air and circulation affect radiator performance. You know how to bleed radiators, read TRV settings, and identify when a problem is beyond a simple fix.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['fix-a-cold-radiator'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['fix-a-cold-radiator'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-cold-radiator'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="fix-a-cold-radiator" />
        <NextGuide currentSlug="fix-a-cold-radiator" />
      </div>
      <RecentViewTracker slug="fix-a-cold-radiator" title="Fix a cold radiator" href="/guides/fix-a-cold-radiator" />
      <MobileNav />
    </main>
  )
}
