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
  title: 'How to Fill and Sand a Wall | FixItFirst',
  description: 'Fill holes and cracks in a wall and sand smooth in under an hour. Step-by-step beginner guide. Save £50–100 vs a decorator.',
}

const steps = [
  { title: 'Clean out the hole', description: 'Remove any loose plaster, dust, or old paint from inside the hole with a screwdriver tip or brush. The filler needs to bond with solid material.' },
  { title: 'Dampen the hole', description: 'Wet the inside of the hole with a damp finger or brush. This slows the drying of the filler and improves adhesion.' },
  { title: 'Apply the filler', description: 'Scoop a small amount of filler onto the filling knife. Press it firmly into the hole, slightly overfilling so it sits just proud of the surface.' },
  { title: 'Smooth it off', description: 'Draw the knife flat across the filled area to remove the excess and leave the filler level with the wall. Work in one or two firm strokes.' },
  { title: 'Let it dry fully', description: 'Ready-mixed filler typically takes 2–4 hours to dry. It turns from off-white to bright white when ready. Do not sand before it is fully dry or it will pull out.' },
  { title: 'Sand smooth', description: 'Sand with 120-grit to flatten any proud areas, then finish with 240-grit for a smooth surface. Feather the edges into the surrounding wall. Prime with a mist coat before painting.' },
]

export default function FillAndSandAWall() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fill and sand a wall</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £50–100 today</p>
        <p className="text-gray-500 mb-6">45 mins · Beginner · Saves £50–100 vs a decorator</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fill-and-sand-a-wall'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fill and sand a wall" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fill-and-sand-a-wall" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Filling and sanding is the most important prep work before painting. Skipping it shows through even two coats of paint.</p>
          <p className="text-sm text-gray-700">Most holes and cracks in a wall are caused by nails, screws, minor impacts, or normal shrinkage. All of them can be fixed with the same basic technique.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Filling knife</span> — a 4-inch flexible blade is ideal — you may already have one</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Small bowl of water</span> — to wet the filler before applying</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Ready-mixed filler</span> — <span className="text-orange-600">buy: £3–5 — Polyfilla or own-brand equivalent from any hardware shop</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Sandpaper 120-grit and 240-grit</span> — <span className="text-orange-600">buy: £2–4 — coarse to shape, fine to finish</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Primer or mist coat</span> — <span className="text-orange-600">buy: £3–8 — needed over bare filler before painting</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fill-and-sand-a-wall']} />
        <StepProgress steps={steps} slug="fill-and-sand-a-wall" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Painting straight over filler without priming — filler is porous and shows as a dull patch through paint.</p>
          <p className="text-sm text-yellow-900 mb-2">Not cleaning out the hole first — filler applied over loose material falls out within days.</p>
          <p className="text-sm text-yellow-900">Underfilling and trying to sand it flat — it is better to slightly overfill and sand back.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a decorator if...</h2>
          <p className="text-sm text-red-900 mb-1">Cracks that keep coming back — this indicates structural movement</p>
          <p className="text-sm text-red-900 mb-1">Cracks wider than 5mm or at window and door corners — may need specialist attention</p>
          <p className="text-sm text-red-900">Damp or discolouration around the crack — fix the source of moisture first</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Ready-mixed filler and sandpaper</span><span className="font-medium">£5–9</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">With primer</span><span className="font-medium">£8–17</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Decorator would charge</span><span className="font-medium text-red-600">£50–100</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to prepare walls to a paint-ready standard. Filling and sanding is the skill that separates a professional-looking paint job from an amateur one.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['fill-and-sand-a-wall'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['fill-and-sand-a-wall'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fill-and-sand-a-wall'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="fill-and-sand-a-wall" />
        <NextGuide currentSlug="fill-and-sand-a-wall" />
      </div>
      <RecentViewTracker slug="fill-and-sand-a-wall" title="Fill and sand a wall" href="/guides/fill-and-sand-a-wall" />
      <MobileNav />
    </main>
  )
}
