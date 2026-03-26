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
export const metadata: Metadata = {
  title: 'How to Reseal a Shower or Bath Properly | FixItFirst',
  description: 'Reseal a shower or bath in 1–2 hours. Step-by-step guide to removing old silicone, cleaning the surface, and applying new sealant cleanly. Save £80–150 vs a tradesperson.',
  openGraph: {
    title: 'How to Reseal a Shower or Bath Properly | FixItFirst',
    description: 'Reseal a shower or bath in 1–2 hours. Step-by-step guide to removing old silicone, cleaning the surface, and applying new sealant cleanly. Save £80–150 vs a tradesperson.',
    url: 'https://fixit-first.co.uk/guides/reseal-a-shower-or-bath',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Remove all the old sealant', description: 'This is the step most people do badly — and it is why their resealing fails. Do not apply new sealant over old. The old bead must come out completely, including the residue that clings to the tile edge and the bath edge. Use a utility knife to score along both edges of the old bead, then pull it away in strips. A dedicated sealant removal tool (a few pounds from any hardware shop) makes this much easier. For stubborn residue, a silicone sealant remover spray breaks down the adhesion — leave it for the time specified on the bottle before scraping off.' },
  { title: 'Clean the surface and remove all residue', description: 'Any silicone residue left behind will prevent the new sealant from bonding. After mechanical removal, wipe the entire joint area with white spirit or a silicone remover solution on a cloth — this dissolves the invisible film that remains after scraping. Then clean with a household cleaner to remove any soap scum, body fat, or grease. Finally, wipe with clean water and dry completely. New silicone will not stick to a wet surface — this is the most common reason resealing fails within weeks.' },
  { title: 'Fill the bath or shower tray with water before sealing', description: 'This step surprises most beginners — but it is critical. Baths and shower trays flex under weight. When you fill the bath with water (or stand in the shower), the unit expands slightly and the gap between the bath and wall opens by 1–2 mm. If you seal with the bath empty, the sealant gets stretched when the bath is full, pulls away from one surface, and lets water in. Fill the bath with cold water before applying sealant and leave it filled until the sealant has cured.' },
  { title: 'Apply masking tape to both sides of the joint', description: 'Run a strip of masking tape along the tile (or wall) above the joint, and a second strip along the bath or shower tray below it. Leave only the exact width of the sealant bead exposed between the two strips. This is the technique that separates a professional-looking finish from a messy one. The tape keeps sealant off the tile and bath surfaces, and when removed immediately after smoothing, leaves a perfectly straight, clean edge.' },
  { title: 'Apply the sealant in one continuous pass', description: 'Cut the nozzle at a 45-degree angle to a small opening (start smaller than you think — you can always cut more). Load the cartridge into the sealant gun and apply a continuous, even bead along the full joint without stopping. Move at a consistent speed and maintain a consistent angle. Any start-stop joins will show as bumps in the finished bead. If you have a long run, work methodically from one end to the other rather than in sections.' },
  { title: 'Smooth, remove tape, and cure for 24 hours', description: 'Dip your finger in water or washing-up liquid and run it firmly along the bead in one smooth motion to press it into the joint and create a concave surface. Do this immediately — silicone begins to skin within minutes. Pull the masking tape away at a 45-degree angle while the sealant is still wet (usually within 2–3 minutes of application). Do not touch, wet, or use the bath or shower for a minimum of 24 hours. Some bathroom sealants require 48 hours — check the tube.' },
]

export default function ResealAShowerOrBath() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reseal a shower or bath properly</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £80–150 in 1–2 hrs — no tradesperson needed</p>
        <p className="text-gray-600 mb-6">Failed sealant lets water behind tiles and into walls — it is one of the most common causes of bathroom water damage. The repair takes 2 hours and costs under £15 if you have the tools.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['reseal-a-shower-or-bath'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Reseal a shower or bath properly" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="reseal-a-shower-or-bath" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide covers resealing where the bath or shower tray meets the wall or tiles — the most common joint that fails. It uses silicone sealant, which is waterproof and flexible (important because baths move under weight).</p>
          <p className="text-sm text-gray-700 mb-2">Always use a sealant labelled as <strong>bathroom silicone</strong> or <strong>sanitary sealant</strong>. These contain anti-mould additives. Standard decorator's caulk is not waterproof enough for this application and will fail quickly.</p>
          <p className="text-sm text-gray-700">The most important thing to understand: this job takes 2 hours of work but the result takes 24–48 hours to be usable. Plan it for a time when the bathroom can be left unused overnight.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
            { icon: 'check', name: 'Utility knife / Stanley knife', hint: 'to score and remove old silicone bead', toolId: 'utility-knife' },
            { icon: 'buy', name: 'Silicone sealant remover spray', hint: 'dissolves residue that scraping leaves behind — do not skip this', hintOrange: true, toolId: 'utility-knife' },
            { icon: 'check', name: 'Masking tape', hint: 'the single biggest factor in a clean, professional finish', toolId: 'masking-tape' },
            { icon: 'buy', name: 'Bathroom silicone sealant (anti-mould)', hint: 'must say bathroom or sanitary — not decorator\'s caulk', hintOrange: true, toolId: 'sealant-gun' },
            { icon: 'check', name: 'Sealant gun', hint: 'for smooth, controlled application', toolId: 'sealant-gun' },
            { icon: 'check', name: 'Sponge and cloths', hint: 'for cleaning the surface and smoothing the bead', toolId: 'sponge-cloths' },
          ]}
          slug="reseal-a-shower-or-bath"
          guideName="Reseal a shower or bath"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['reseal-a-shower-or-bath']} />
        <StepProgress steps={steps} slug="reseal-a-shower-or-bath" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Applying new sealant over old. The new sealant cannot bond to the old, so it peels off within weeks. Always remove everything first.</p>
          <p className="text-sm text-yellow-900 mb-2">Not filling the bath before sealing. A bath sealed empty will pull away from the wall every time it is used. Fill it first — this one step is what most failed bathroom sealing jobs have in common.</p>
          <p className="text-sm text-yellow-900 mb-2">Sealing a wet or greasy surface. Silicone needs a dry, clean surface to bond. If you rush this step, the sealant will peel away without damaging the surface beneath it.</p>
          <p className="text-sm text-yellow-900">Removing the masking tape after the sealant has skinned. The tape must come off while the sealant is still wet — if you wait too long, the tape tears the fresh bead rather than leaving a clean edge.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and investigate further if...</h2>
          <p className="text-sm text-red-900 mb-1">The tiles behind the old sealant are loose, hollow-sounding, or cracked — this suggests water has already got in and the wall needs proper repair before resealing</p>
          <p className="text-sm text-red-900 mb-1">The bath or shower tray itself is cracked — new sealant over a crack will not stop water escaping; the unit needs replacing</p>
          <p className="text-sm text-red-900 mb-1">There is a significant gap (more than 5mm) between the bath and wall — this may indicate the bath has moved or dropped; investigate the fixings before resealing</p>
          <p className="text-sm text-red-900">Mould on the wall behind the sealant that looks wet or spreading — this needs investigation before sealing over it</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Bathroom silicone sealant cartridge</span><span className="font-medium">£6–12</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Silicone remover spray</span><span className="font-medium">£5–8</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">You have tools already (gun, knife, tape)</span><span className="font-medium">£0</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Tradesperson would charge</span><span className="font-medium text-red-600">£80–150</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand surface preparation, sealant adhesion, and how to apply and finish silicone neatly. These skills transfer to sealing around kitchen worktops, around window frames, and to any joint in the home that needs a flexible waterproof seal. Silicone application is a skill used in almost every trade — and it is much easier once you understand why each step matters.</p>
        </div>
        <p className="text-sm text-gray-500 text-center mb-3">Most people would pay a tradesperson for this.</p>
        {GUIDE_META['reseal-a-shower-or-bath'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['reseal-a-shower-or-bath'].renterWarning}</p>
          </div>
        )}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Up next</h2>
          <div className="space-y-2">
            <a href="/guides/remove-silicone-sealant" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-xl shrink-0">🔧</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">Remove old silicone sealant</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Save £50–100 today</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">15–20 mins</span>
            </a>
            <a href="/guides/paint-a-bathroom" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-xl shrink-0">🎨</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">Paint a bathroom properly (moisture-safe)</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Save £200–400 today</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">1 day</span>
            </a>
            <a href="/guides/finish-bathroom-renovation" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-xl shrink-0">✨</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">Finish a bathroom (seal, paint & final checks)</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Save £80–200 today</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">1–2 hrs</span>
            </a>
          </div>
        </div>
        <GuideActions slug="reseal-a-shower-or-bath">
          <GuideExtras slug="reseal-a-shower-or-bath" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="reseal-a-shower-or-bath" title="Reseal a shower or bath properly" href="/guides/reseal-a-shower-or-bath" />
      <MobileNav />
    </main>
  )
}
