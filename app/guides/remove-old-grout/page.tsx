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
  title: 'How to Remove Old Grout From Tiles | FixItFirst',
  description: 'Remove old or cracked grout from wall and floor tiles cleanly without damaging them. Covers manual tools and oscillating tools. Essential before regrouting.',
  openGraph: {
    title: 'How to Remove Old Grout From Tiles | FixItFirst',
    description: 'Remove old or cracked grout from wall and floor tiles cleanly without damaging them. Covers manual tools and oscillating tools. Essential before regrouting.',
    url: 'https://fixit-first.co.uk/guides/remove-old-grout',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Identify whether the grout is sanded or unsanded',
    description: 'Look at the grout joints. Sanded grout (used for joints wider than 3mm) has a slightly rough, grainy texture. Unsanded grout (used for narrow joints under 3mm) looks smooth. Floor tiles typically use sanded grout. Wall tiles typically use unsanded grout. Why: this matters because sanded grout is harder and denser — it takes longer to remove and dulls tools faster. Unsanded grout in a narrow joint requires more precise tool control so you do not slip onto the tile face. Knowing what you are working with helps you set the right pace and choose the right tool width.',
  },
  {
    title: 'Choose the right removal tool for your situation',
    description: 'For small areas (one or two tiles) or narrow joints: use a manual grout rake — a handle with a carbide-tipped blade. Run it firmly along the joint in short strokes. For larger areas (a whole wall or floor): hire or buy an oscillating multi-tool with a grout removal blade. These remove grout in a fraction of the time. Never use a chisel and hammer — you will crack tiles. Why: the right tool makes grout removal manageable. An oscillating tool on a large area saves hours of work. A manual rake on a large area is exhausting and inconsistent. The tool choice is the most important decision before you start.',
  },
  {
    title: 'Work along the joint — do not press into the tile face',
    description: 'Hold the tool at a shallow angle and work along the centre of the grout joint. Apply moderate, consistent pressure. Do not press the blade sideways against the tile edges — the blade should run down the middle of the joint. Take off grout in layers rather than trying to clear the full depth in one pass. Aim to remove grout to about two-thirds of the tile depth (roughly 5–8mm for a standard wall tile). You do not need to remove every last trace. Why: the most common damage when removing grout is chipping the glaze on the tile edge. This happens when the tool slips sideways. Working along the middle of the joint at a consistent angle keeps the blade away from the tile edge.',
  },
  {
    title: 'Vacuum the joints as you go',
    description: 'Every few minutes, vacuum the loose grout dust from the joints with a brush attachment. Do not blow or wipe — this spreads fine dust into your eyes and covers surrounding surfaces. Keep the work area clear so you can see the joint clearly as you progress. Why: accumulated grout dust in the joint obscures whether you have removed enough material. Fresh grout bonds best to clean, debris-free joints. Vacuuming as you go takes seconds and makes both the removal and the regrouting easier.',
  },
  {
    title: 'Check depth and clean the joints before regrouting',
    description: 'Run your finger along the cleared joint. You should feel a clear channel — the depth should be at least 2/3 of the tile thickness, with no loose or crumbling material. If any old grout is still crumbly or sitting loose, work it out now. Once satisfied, wipe the tile surface with a damp cloth to remove grout dust from the tile faces, and allow to dry. Why: new grout pushed over remaining old grout or dust will not bond and will crack or crumble within months. The joint needs to be clean and sound for the new grout to last.',
  },
]

export default function RemoveOldGrout() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Remove old grout from tiles</h1>
        <p className="text-4xl font-black text-green-600 mb-1">30–60 mins — essential skill before regrouting</p>
        <p className="text-gray-600 mb-6">Old grout has to come out completely before new grout can bond. Done right, the tiles stay intact. This guide shows the correct technique and tools for wall and floor tiles.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['remove-old-grout'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Remove old grout from tiles" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="remove-old-grout" />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
          <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-1">Part of the Bathroom Renovation project</p>
          <p className="text-sm text-gray-700 mb-2">Grout removal is a key preparation skill in the <strong>Phase 4: Tiling</strong> stage of a full bathroom renovation.</p>
          <a href="/projects/bathroom-renovation" className="text-sm font-semibold text-orange-600 hover:underline">
            If you&apos;re renovating your bathroom, start here →
          </a>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide covers removing grout from existing tiles so they can be regrouted — either because the grout is cracked, stained, or part of a renovation where all the grout is being refreshed.</p>
          <p className="text-sm text-gray-700 mb-2">If you are removing tiles entirely (rather than just the grout), you do not need to be careful about damaging them — use a cold chisel and work more aggressively.</p>
          <p className="text-sm text-gray-700">Wear safety glasses. Grout fragments fly at speed from both manual and oscillating tools.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Safety glasses', hint: 'grout fragments fly — non-negotiable', toolId: 'safety-glasses' },
            { icon: 'check', name: 'Vacuum with brush attachment', hint: 'to clear dust from joints as you work', toolId: 'vacuum' },
            { icon: 'buy', name: 'Manual grout rake', hint: 'carbide-tipped blade — for small areas or narrow joints', hintOrange: true },
            { icon: 'buy', name: 'Oscillating multi-tool with grout blade', hint: 'hire or buy — essential for anything larger than a few tiles', hintOrange: true },
          ]}
          slug="remove-old-grout"
          guideName="Remove old grout from tiles"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['remove-old-grout']} />
        <StepProgress steps={steps} slug="remove-old-grout" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Using a chisel and hammer.</strong> This is how tiles crack. Grout rakes and oscillating tools are designed to remove grout without the impact force that damages tiles. Never chisel grout.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Pressing sideways against the tile edge.</strong> The blade must run along the middle of the joint, not be levered against the tile face. Sideways pressure chips the glaze and leaves permanent marks.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Trying to regrout without clearing enough depth.</strong> If less than 2/3 of the old grout is removed, new grout has no depth to bond into and will crack or crumble. Clear the joint properly first.</p>
          <p className="text-sm text-yellow-900"><strong>Working without eye protection.</strong> Grout chips and dust are generated constantly. A fragment in the eye is a hospital trip. Always wear safety glasses.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">When grout removal is not the right approach</h2>
          <p className="text-sm text-red-900 mb-1">If tiles are hollow when tapped (they give a dull thud rather than a solid click) — they have debonded from the wall and regrouting will not fix the underlying problem</p>
          <p className="text-sm text-red-900 mb-1">If the grout is stained but structurally sound — try grout cleaner and a stiff brush first; removal is unnecessary if the grout is intact</p>
          <p className="text-sm text-red-900">If a single joint is cracked but the rest is fine — you can remove and regrout just that one joint without touching the rest</p>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You know how to remove grout cleanly — the right tools, the correct angle, how deep to go, and how to leave the joint ready for fresh grout. This is one of the foundational skills for any tiling work.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/tile-a-splashback" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Tile a splashback →</a>
            <a href="/guides/apply-silicone-sealant" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Apply silicone sealant →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation →</a>
          </div>
        </div>

        {GUIDE_META['remove-old-grout'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['remove-old-grout'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="remove-old-grout"
          relatedSlugs={['tile-a-splashback', 'apply-silicone-sealant', 'drill-into-tiles']}
        />
        <GuideActions slug="remove-old-grout">
          <GuideExtras slug="remove-old-grout" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="remove-old-grout" title="Remove old grout from tiles" href="/guides/remove-old-grout" />
      <MobileNav />
    </main>
  )
}
