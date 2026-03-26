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
  title: 'How to Tile a Bathroom Floor | FixItFirst',
  description: 'Tile a bathroom floor yourself over 1–2 days. Step-by-step guide covering planning, laying, cutting, grouting, and sealing. Save £300–600 vs a tiler.',
  openGraph: {
    title: 'How to Tile a Bathroom Floor | FixItFirst',
    description: 'Tile a bathroom floor yourself over 1–2 days. Step-by-step guide covering planning, laying, cutting, grouting, and sealing. Save £300–600 vs a tiler.',
    url: 'https://fixit-first.co.uk/guides/tile-a-bathroom-floor',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Measure, plan, and order your tiles', description: 'Measure the length and width of the floor in metres and multiply to get your area in square metres. Add 10–15% for cuts and breakages (15% for larger or diagonal patterns). Sketch the room on paper and work out where your tile layout will start — the visual centre of the room, not the walls. Walls are almost never perfectly square, and if you start from a wall, cut tiles at the far end will be uneven widths. Planning on paper costs nothing and prevents expensive mistakes.' },
  { title: 'Prepare the floor surface', description: 'The floor must be clean, dry, flat, and structurally sound before any tile adhesive goes down. On concrete: check for cracks and fill with floor repair compound. On wooden floors: check for bounce or flex — tiles will crack if the subfloor moves, so fix any loose boards with screws and consider laying 12mm plywood over the boards to create a rigid base (essential for most tile manufacturers\' warranties). Sweep and vacuum thoroughly. If the floor has old adhesive or residue, scrape and sand it flat.' },
  { title: 'Find your starting point and dry-lay the tiles', description: 'Find the centre of the floor by snapping chalk lines from the midpoints of opposite walls. Where the lines cross is your visual centre. From this point, dry-lay a row of tiles in both directions without adhesive to see exactly how the layout will look at the edges. Adjust your starting point if needed to avoid very thin cut tiles (less than half a tile width) at the edges — a sliver of tile at the door or by the bath looks amateurish and is difficult to cut cleanly.' },
  { title: 'Mix adhesive and bed your first tiles', description: 'Use a floor tile adhesive rated for bathrooms — not wall tile adhesive, which is not designed for load-bearing use. Mix to a smooth, lump-free paste. Apply to the floor with a notched trowel, drawing it toward you in one direction to create even ridges. Press each tile firmly into place with a slight twisting motion to collapse the ridges and create full contact. Use tile spacers (2–3mm for floor tiles) at every corner to maintain consistent grout lines. Check level with a spirit level across every 3–4 tiles as you go — floor tiles must be level, not just flat.' },
  { title: 'Work outward, cutting edge tiles as you go', description: 'Work outward from your starting point in sections, letting the adhesive in each section firm up before walking on it. When you reach the edges, measure each cut tile individually — rooms are not perfectly rectangular, and every cut is slightly different. Score and snap ceramic tiles with a tile cutter. For porcelain or complex shapes, use a wet tile saw (available to hire from most tool hire shops for £30–50 per day). Dry-fit every cut tile before applying adhesive — it is much harder to correct mistakes once adhesive is involved.' },
  { title: 'Grout, seal, and cure', description: 'Wait 24 hours after the last tile is laid before grouting (check your adhesive manufacturer\'s instructions — some require longer). Mix floor grout to a firm, smooth paste and work it into the joints with a grout float, pressing firmly at a 45-degree angle. Wipe away excess with a damp sponge before it sets — grout hardens quickly and dried grout is very difficult to remove from tile surfaces. Once grouted and dried (usually 24 hours), apply a grout sealer to protect the joints from moisture and staining. Do not use the bathroom for 48 hours after sealing.' },
]

export default function TileABathroomFloor() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tile a bathroom floor</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £300–600 over 1–2 days — no tiler needed</p>
        <p className="text-gray-600 mb-6">Tiling a floor looks complex but follows a consistent process. The technique is learnable — the main skills are planning the layout, keeping things level, and being patient with drying times.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['tile-a-bathroom-floor'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Tile a bathroom floor" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="tile-a-bathroom-floor" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Floor tiling is more demanding than wall tiling because the tiles take load, they must be perfectly level (not just flat), and the subfloor preparation is critical. A poorly prepared or flexible subfloor will crack tiles within months.</p>
          <p className="text-sm text-gray-700 mb-2">This guide is for ceramic and standard porcelain tiles. Large-format porcelain (600mm+) requires specific techniques and thicker adhesive beds — those larger jobs benefit from professional advice first.</p>
          <p className="text-sm text-gray-700">Allow two days: day one for laying, day two for grouting. Rushing the drying time is the single most common cause of floor tile failures.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
            { icon: 'check', name: 'Spirit level (600mm or longer)', hint: 'check level across every 3–4 tiles as you go', toolId: 'spirit-level' },
            { icon: 'check', name: 'Tape measure', hint: 'for measuring cuts and planning the layout', toolId: 'tape-measure' },
            { icon: 'check', name: 'Utility knife / Stanley knife', hint: 'for scoring chalk lines and trimming grout tape', toolId: 'utility-knife' },
            { icon: 'buy', name: 'Floor tile adhesive (bathroom grade)', hint: 'not wall tile adhesive — must be load-rated', hintOrange: true, toolId: 'sealant-gun' },
            { icon: 'buy', name: 'Floor tile grout', hint: 'use a sanded grout rated for floor use', hintOrange: true, toolId: 'sealant-gun' },
            { icon: 'buy', name: 'Tile spacers (2–3mm)', hint: 'consistent grout lines need spacers at every corner', hintOrange: true, toolId: 'masking-tape' },
            { icon: 'buy', name: 'Notched adhesive trowel', hint: 'the ridges ensure full contact under each tile', hintOrange: true, toolId: 'filling-knife' },
            { icon: 'buy', name: 'Grout float', hint: 'used to press grout into joints at a 45-degree angle', hintOrange: true, toolId: 'filling-knife' },
            { icon: 'check', name: 'Rubber gloves', hint: 'tile adhesive and grout irritate skin — protect your hands', toolId: 'rubber-gloves' },
          ]}
          slug="tile-a-bathroom-floor"
          guideName="Tile a bathroom floor"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['tile-a-bathroom-floor']} />
        <StepProgress steps={steps} slug="tile-a-bathroom-floor" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Starting from a wall instead of the visual centre of the room. Walls are almost never perfectly square — starting from the centre gives a balanced look that hides any wall irregularity.</p>
          <p className="text-sm text-yellow-900 mb-2">Skipping the dry-lay. It takes 20 minutes and saves hours of rework. Always dry-lay and check the edge tile widths before mixing any adhesive.</p>
          <p className="text-sm text-yellow-900 mb-2">Walking on freshly laid tiles too soon. Set tile adhesive is stronger than wet adhesive but not as strong as fully cured. Stay off the floor for at least 24 hours after laying.</p>
          <p className="text-sm text-yellow-900">Not using floor-rated adhesive. Wall tile adhesive is not designed for load-bearing and will fail. Always check the label says suitable for floors.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and address these first...</h2>
          <p className="text-sm text-red-900 mb-1">A wooden subfloor that bounces or flexes under foot — tile over this without a rigid overlay and the tiles will crack within months</p>
          <p className="text-sm text-red-900 mb-1">Existing floor tiles with hollow spots or broken adhesion — tile on top of failing tiles and the new layer will fail too; remove the old tiles first</p>
          <p className="text-sm text-red-900 mb-1">Evidence of damp rising through the floor — tiling over it will trap the moisture and make the problem worse</p>
          <p className="text-sm text-red-900">Large-format tiles (600mm or bigger) on an uneven floor — these need specialist levelling compound and specific techniques</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Floor tiles (budget ceramic, 5 m²)</span><span className="font-medium">£50–100</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Adhesive, grout, spacers, sealant</span><span className="font-medium">£30–60</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Tile cutter hire (if needed)</span><span className="font-medium">£30–50/day</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Tiler would charge (labour only)</span><span className="font-medium text-red-600">£300–600</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how to plan, lay, cut, and grout a tiled floor — and how to prepare the subfloor correctly so the tiles last. These skills transfer directly to tiling a kitchen floor or a hallway. Once you have tiled one floor, every subsequent one is easier because the process is the same.</p>
        </div>
        <p className="text-sm text-gray-500 text-center mb-3">Most people would pay a tradesperson for this.</p>
        {GUIDE_META['tile-a-bathroom-floor'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['tile-a-bathroom-floor'].renterWarning}</p>
          </div>
        )}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Up next</h2>
          <div className="space-y-2">
            <a href="/guides/replace-a-bathroom-sink" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-xl shrink-0">🚿</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">Replace a bathroom sink</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Save £150–300 today</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">1–2 hrs</span>
            </a>
            <a href="/guides/fit-a-towel-rail" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-xl shrink-0">🔧</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">Fit a towel rail (heated or standard)</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Save £80–150 today</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">1 hr</span>
            </a>
            <a href="/guides/paint-a-bathroom" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-xl shrink-0">🎨</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">Paint a bathroom properly (moisture-safe)</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Save £200–400 today</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">1 day</span>
            </a>
          </div>
        </div>
        <GuideActions slug="tile-a-bathroom-floor">
          <GuideExtras slug="tile-a-bathroom-floor" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="tile-a-bathroom-floor" title="Tile a bathroom floor" href="/guides/tile-a-bathroom-floor" />
      <MobileNav />
    </main>
  )
}
