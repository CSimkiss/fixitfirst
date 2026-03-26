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
  title: 'How to Fix Peeling Paint on a Wall | FixItFirst',
  description: 'Fix peeling or flaking paint on a wall properly so it does not come back. Covers surface preparation, priming, and repainting. Save £60–120 vs a decorator.',
  openGraph: {
    title: 'How to Fix Peeling Paint on a Wall | FixItFirst',
    description: 'Fix peeling or flaking paint on a wall properly so it does not come back. Covers surface preparation, priming, and repainting. Save £60–120 vs a decorator.',
    url: 'https://fixit-first.co.uk/guides/fix-peeling-paint',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Identify why the paint is peeling',
    description: 'Before removing anything, understand the cause — this determines the correct fix. Run your hand over the peeling area. If the paint lifts easily in large sheets, the undercoat or first layer failed to bond to the surface (usually caused by painting over a glossy or dirty surface, or skipping primer). If the paint is bubbling and soft, there is moisture behind it — check for a leak, condensation patch, or damp wall. If it is only the topcoat peeling in small flakes, the paint has dried too quickly or was applied over a dusty surface. Why: painting over a moisture problem without fixing the moisture source will cause the new paint to peel again within months. Identify and fix the cause first.',
  },
  {
    title: 'Remove all loose and flaking paint',
    description: 'Using a scraper or filling knife, remove all paint that is loose, lifting, or bubbling. Work from the edges of the peeling area inward. Do not stop at the first firm section — continue scraping until you reach paint that is fully bonded and does not lift when you slide the scraper edge underneath it. Feather the edges of the scraped area by sanding them with 120-grit sandpaper so there is no hard step between the bare area and the surrounding paint. Why: painting over loose paint gives the new coat nothing solid to adhere to. The loose layer will continue to fail and take your new paint with it. Remove everything that is not fully bonded, even if the area gets larger than expected.',
  },
  {
    title: 'Address any damp or moisture before continuing',
    description: 'If the peeling was caused by moisture — you found a bubble of soft paint, a damp patch, or the wall feels cold and wet — do not repaint until the source is fixed. Check for a leaking pipe, a failed seal around a bath or shower, a blocked gutter above, or condensation from poor ventilation. Fix the source, allow the wall to dry completely (at least two weeks in a heated room), and check again before painting. Why: applying fresh paint to a damp wall is the most common cause of repeat paint failure. The moisture pushes through the new paint within weeks and the problem returns. No amount of high-quality paint fixes a damp wall.',
  },
  {
    title: 'Fill any holes or surface damage and sand smooth',
    description: 'If scraping has left pits, rough edges, or exposed filler from previous repairs, fill them with ready-mixed filler using a filling knife, allow to dry fully, then sand smooth with 120-grit sandpaper. Feather the filler edges so they blend into the surrounding wall. Wipe down the entire repair area with a damp cloth and allow to dry. Why: primer applied over rough or dusty surfaces creates uneven coverage, and the new topcoat will show every imperfection underneath. A smooth, clean surface is what makes the finished paint job look professional.',
  },
  {
    title: 'Apply a coat of primer or diluted emulsion',
    description: 'Apply a coat of water-based wall primer to the bare plaster or filler area using a brush or small roller. Allow to dry fully according to the tin instructions — usually 1–2 hours. Alternatively, for a bare plaster patch, dilute standard emulsion with 10% water and apply as a mist coat. Why: bare plaster and filler are both porous and absorbent. Applying topcoat paint directly over them causes the paint to soak in unevenly, leaving a patchy finish that shows clearly when dry. Primer seals the surface so the topcoat sits on top rather than being absorbed. This is the step most people skip — and it is the reason amateur paint jobs look amateur.',
  },
  {
    title: 'Repaint with two coats of matching emulsion',
    description: 'Apply the first coat of topcoat emulsion over the primed area, using a brush to cut in around edges and a small roller for the main area. Allow to dry for at least two hours. Apply a second coat. Blend the edges of the painted area into the surrounding wall by rolling slightly beyond the repair zone. Why: one coat of emulsion over a repair rarely achieves full coverage — the primed area absorbs differently to the surrounding painted surface. Two coats give consistent opacity and sheen. Rolling slightly beyond the repair blends the new paint into the old, avoiding a visible square patch on the finished wall.',
  },
]

export default function FixPeelingPaint() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix peeling paint on a wall</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £60–120 — no decorator needed</p>
        <p className="text-gray-600 mb-6">Peeling paint comes back if you just repaint over it. The fix is in the preparation: remove the loose paint properly, prime the surface, then repaint. This guide gets it right so it stays right.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-peeling-paint'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix peeling paint on a wall" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-peeling-paint" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Peeling paint fails for a reason — poor surface preparation, moisture, or painting over a surface that was not clean or primed. Simply painting over peeling paint without addressing the cause will result in the same problem within months.</p>
          <p className="text-sm text-gray-700 mb-2">This guide is for interior walls. Exterior peeling paint has different causes (UV, weathering, moisture ingress from outside) and requires different products — exterior masonry paint and exterior primer.</p>
          <p className="text-sm text-gray-700">Check for moisture first — if the wall feels damp or cold, fix the moisture source before painting.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Filling knife or scraper', hint: 'to remove loose paint and apply filler', toolId: 'filling-knife' },
            { icon: 'check', name: 'Sandpaper (120-grit)', hint: 'to feather edges and smooth filler', toolId: 'sandpaper' },
            { icon: 'check', name: 'Angled paintbrush (2")', hint: 'for cutting in around edges', toolId: 'paintbrush' },
            { icon: 'check', name: 'Small paint roller and tray', hint: 'for applying primer and topcoat to the repaired area', toolId: 'roller-tray' },
            { icon: 'buy', name: 'Ready-mixed filler', hint: 'for any holes or damage left after scraping', hintOrange: true },
            { icon: 'buy', name: 'Water-based wall primer', hint: 'essential — do not skip this step', hintOrange: true },
            { icon: 'buy', name: 'Matching emulsion paint', hint: 'take a photo of the tin or use a paint-match service to get the right colour', hintOrange: true },
          ]}
          slug="fix-peeling-paint"
          guideName="Fix peeling paint on a wall"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-peeling-paint']} />
        <StepProgress steps={steps} slug="fix-peeling-paint" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Painting straight over peeling paint.</strong> This is the most common mistake. Loose paint under new paint will continue to fail and take the new coat with it. Remove all loose paint first, even if the area gets bigger than expected.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Skipping primer.</strong> Bare plaster and filler absorb paint differently to painted surfaces. Without primer, the topcoat soaks in unevenly and looks patchy when dry — especially in raking light. Prime every bare area, no exceptions.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Painting over a damp wall.</strong> Fresh paint on a damp wall will peel again within weeks. Fix the moisture source, allow two weeks to dry, then paint.</p>
          <p className="text-sm text-yellow-900"><strong>Using only one topcoat.</strong> One coat over a primer rarely achieves full coverage on a repair. Two coats is the minimum for a result that matches the surrounding wall.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">When to call a professional</h2>
          <p className="text-sm text-red-900 mb-1">The peeling covers an entire wall or large section — this usually indicates a deeper damp or adhesion problem that needs professional assessment</p>
          <p className="text-sm text-red-900 mb-1">There is black mould visible under the paint — this indicates a damp or ventilation problem that needs addressing before any decoration</p>
          <p className="text-sm text-red-900">The plaster underneath is soft, crumbling, or hollow — it needs re-plastering before any paint will hold</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Materials (filler, primer, paint)</span><span className="font-medium">£15–35</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">If tools needed too</span><span className="font-medium">£30–55</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Decorator would charge</span><span className="font-medium text-red-600">£60–120</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You understand why paint peels and how to fix it so it does not come back — proper removal, addressing the cause, priming, and two coats. These skills are the foundation of all interior decorating: the preparation is what makes the difference between a job that lasts and one that fails.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/fill-a-hole-in-a-wall" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fill a hole in a wall →</a>
            <a href="/guides/fill-and-sand-a-wall" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fill and sand a wall →</a>
            <a href="/guides/paint-a-room" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Paint a room →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation →</a>
          </div>
        </div>

        {GUIDE_META['fix-peeling-paint'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-peeling-paint'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="fix-peeling-paint"
          relatedSlugs={['fill-a-hole-in-a-wall', 'fill-and-sand-a-wall', 'paint-a-room']}
        />
        <GuideActions slug="fix-peeling-paint">
          <GuideExtras slug="fix-peeling-paint" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="fix-peeling-paint" title="Fix peeling paint on a wall" href="/guides/fix-peeling-paint" />
      <MobileNav />
    </main>
  )
}
