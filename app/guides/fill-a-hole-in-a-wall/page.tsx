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
import DifficultyComparison from '@/components/DifficultyComparison'
import { GUIDE_META } from '@/lib/guide-meta'

export const metadata: Metadata = {
  title: 'How to Fill a Hole in a Wall | FixItFirst',
  description: 'How to fill holes and cracks in plaster or plasterboard walls. 30-minute guide for beginners using £3–5 of materials. Save £50–100 vs a tradesperson.',
}

const steps = [
  { title: 'Clean the hole', description: 'Remove any loose plaster, dust, or old filler from the hole using a screwdriver tip or stiff brush. The hole needs to be clean for the filler to bond.' },
  { title: 'Dampen the surface', description: 'Lightly dampen the inside of the hole with a wet finger or cloth. This stops the wall absorbing moisture from the filler too quickly, which causes cracking.' },
  { title: 'Apply the filler', description: 'Scoop filler onto your filling knife and press it firmly into the hole. For deep holes, apply in layers no thicker than 10mm. Overfill slightly — it will shrink as it dries.' },
  { title: 'Smooth the surface', description: 'Draw the filling knife flat across the surface to remove the excess and leave it flush with the wall. Wipe away any smears with a damp cloth.' },
  { title: 'Let it dry fully', description: 'Wait until the filler turns from pink or grey to bright white — usually 2–4 hours. For deep fills, leave it overnight.' },
  { title: 'Sand and prime', description: 'Sand the dried filler smooth with fine sandpaper. Apply a thin coat of PVA or mist coat before painting to stop the filler soaking up paint unevenly.' },
]

export default function FillAHoleInAWall() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fill a hole in a wall</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £50–100 today</p>
        
<p className="text-gray-500 mb-6">30 mins · Beginner · Saves £50-100 vs a tradesperson</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fill-a-hole-in-a-wall'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fill a hole in a wall" />
          
<PrintButton />
        </div>
        <DifficultyComparison slug="fill-a-hole-in-a-wall" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This works for small to medium holes and cracks in plaster, plasterboard, or brick walls — caused by rawl plugs, nails, or general wear.</p>
          <p className="text-sm text-gray-700 mb-2">You will need ready-mixed filler (£3–5 from any DIY shop), a filling knife, fine sandpaper, and a damp cloth.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Ready-mixed filler</span> — <span className="text-orange-600">buy: £3–5 from any DIY or hardware shop</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Filling knife / putty knife</span> — <span className="text-orange-600">buy: £3–5, reusable for future repairs</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Fine sandpaper (120–180 grit)</span> — most homes have some</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Damp cloth</span> — any kitchen cloth will do</span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fill-a-hole-in-a-wall']} />
        <StepProgress steps={steps} />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Skipping the dampening step, causing the filler to crack as it dries.</p>
          <p className="text-sm text-yellow-900 mb-2">Applying one thick layer on a deep hole instead of building it up in thinner coats.</p>
          <p className="text-sm text-yellow-900">Painting straight over filler without priming, leaving a dull patch on the wall.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a tradesperson if...</h2>
          <p className="text-sm text-red-900 mb-1">Cracks keep reappearing in the same place — this can indicate structural movement</p>
          <p className="text-sm text-red-900 mb-1">The crack runs diagonally from a door or window corner</p>
          <p className="text-sm text-red-900">The hole is larger than your fist</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Filler and sandpaper</span><span className="font-medium">£3-5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">With filling knife too</span><span className="font-medium">£8-12</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Tradesperson would charge</span><span className="font-medium text-red-600">£50-100</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how wall filler works and how to apply it cleanly. These skills transfer to skimming larger areas, repairing cracks in ceilings, and preparing walls for decorating.</p>
        </div>
        <CompleteButton />
        <GuideExtras slug="fill-a-hole-in-a-wall" />
      </div>
      <RecentViewTracker slug="fill-a-hole-in-a-wall" title="Fill a hole in a wall" href="/guides/fill-a-hole-in-a-wall" />
      <MobileNav />
    </main>
  )
}
