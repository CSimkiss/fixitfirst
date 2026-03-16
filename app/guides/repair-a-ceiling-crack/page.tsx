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
  title: 'How to Repair a Crack in a Ceiling | FixItFirst',
  description: 'Repair a hairline or small crack in a ceiling in under an hour. Step-by-step beginner guide. Save £80–150 vs a decorator.',
}

const steps = [
  { title: 'Rake out the crack', description: 'Use the tip of your filling knife or a screwdriver to gently rake out any loose plaster inside the crack. A clean crack accepts filler better than one with crumbling edges.' },
  { title: 'Dust and dampen', description: 'Brush out any dust with a dry paintbrush. Dampen the crack lightly with a wet finger to stop the filler drying too fast and cracking as it cures.' },
  { title: 'Apply the filler', description: 'Press filler into the crack with the filling knife, pushing it firmly in. Smooth off the excess so the filler sits just proud of the surface.' },
  { title: 'Allow to dry fully', description: 'Leave for the time stated on the pack — usually 2–4 hours. Filler turns bright white when fully dry. In a damp or cold room allow longer.' },
  { title: 'Sand smooth', description: 'Lightly sand the repair with 240-grit paper. Work in small circular motions and feather the edges into the surrounding ceiling so there is no visible ridge.' },
  { title: 'Prime and paint', description: 'Apply a thin coat of mist coat (watered-down paint) or stain block over the repair. This prevents the bare filler showing as a dull patch through the finish coat. Paint the ceiling once the primer is dry.' },
]

export default function RepairACeilingCrack() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Repair a crack in a ceiling</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £80–150 today</p>
        <p className="text-gray-500 mb-6">1 hour · Beginner · Saves £80–150 vs a decorator</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['repair-a-ceiling-crack'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Repair a crack in a ceiling" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="repair-a-ceiling-crack" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Most ceiling cracks are cosmetic — caused by normal building movement and temperature change. Hairline cracks that stay the same size over time are safe to fill and paint.</p>
          <p className="text-sm text-gray-700">Work from a step ladder, not a chair. You need both hands free and a stable base.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Step ladder or stable platform</span> — to reach the ceiling safely</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Filling knife (4-inch)</span> — to apply and smooth the filler</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Fine sandpaper 240-grit</span> — to finish the repair</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Flexible filler or fine surface filler</span> — <span className="text-orange-600">buy: £4–8 — flexible filler is better for cracks that may move slightly</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Ceiling paint</span> — <span className="text-orange-600">buy: £6–12 — white matt is standard for ceilings</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['repair-a-ceiling-crack']} />
        <StepProgress steps={steps} slug="repair-a-ceiling-crack" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Painting directly over unfilled filler without a primer coat — the repair shows through as a circle.</p>
          <p className="text-sm text-yellow-900 mb-2">Using a rigid filler on a crack that is still moving — it will crack again within weeks.</p>
          <p className="text-sm text-yellow-900">Not raking out loose material — filler applied over crumbling plaster falls out.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a decorator if...</h2>
          <p className="text-sm text-red-900 mb-1">The crack is wider than 5mm or runs diagonally from a corner — may indicate structural movement</p>
          <p className="text-sm text-red-900 mb-1">The crack keeps coming back after filling — the building is still moving</p>
          <p className="text-sm text-red-900">Large sections of ceiling plaster are loose or bowing downward — do not use that room until it is assessed</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Filler and sandpaper</span><span className="font-medium">£6–12</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">With primer and paint</span><span className="font-medium">£12–22</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Decorator would charge</span><span className="font-medium text-red-600">£80–150</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You can now assess whether a ceiling crack is cosmetic or structural, and repair the cosmetic type to a professional standard.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['repair-a-ceiling-crack'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['repair-a-ceiling-crack'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['repair-a-ceiling-crack'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="repair-a-ceiling-crack" />
        <NextGuide currentSlug="repair-a-ceiling-crack" />
      </div>
      <RecentViewTracker slug="repair-a-ceiling-crack" title="Repair a crack in a ceiling" href="/guides/repair-a-ceiling-crack" />
      <MobileNav />
    </main>
  )
}
