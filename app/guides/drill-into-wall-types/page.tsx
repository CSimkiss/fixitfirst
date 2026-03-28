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
  title: 'How to Drill Into Different Wall Types | FixItFirst',
  description: 'Drill cleanly into plasterboard, masonry, brick, and tiles without cracking or dust blowouts. Covers drill settings, bit selection, and fixings for each wall type.',
  openGraph: {
    title: 'How to Drill Into Different Wall Types | FixItFirst',
    description: 'Drill cleanly into plasterboard, masonry, brick, and tiles without cracking or dust blowouts. Covers drill settings, bit selection, and fixings for each wall type.',
    url: 'https://fixit-first.co.uk/guides/drill-into-wall-types',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Identify your wall type before picking up the drill',
    description: 'Tap the wall firmly with your knuckle. A solid thud means solid masonry — brick, block, or concrete. A hollow sound means a stud partition wall (plasterboard over a timber or metal frame). Check the age of the house: pre-1960s UK homes are almost entirely solid masonry. Post-1990s homes typically have stud partition walls for interior walls, with masonry only on external walls. Why: each wall type requires a completely different drill setting and fixing. Using hammer drill mode on plasterboard will punch straight through it. Using a standard bit on masonry will not penetrate at all. Identifying first saves ruined walls and stripped drill bits.',
  },
  {
    title: 'Drill into masonry: use hammer mode and a masonry bit',
    description: 'For brick, block, or concrete walls: fit a masonry drill bit (the tip is visibly wider than the shaft, usually in a carbide or tungsten tip). Set the drill to hammer mode (the hammer symbol) and select a medium-high speed. Apply firm, steady pressure and let the hammer action do the work — do not force it. Keep the drill perfectly straight. Use the correct bit diameter for your wall plug: most standard 6mm plugs need a 6mm bit. Why: hammer mode creates rapid impacts that chip through hard masonry. Without it, the drill spins against the surface and the bit dulls within seconds. With hammer mode and the correct bit, a 50mm hole in brick takes about 10 seconds.',
  },
  {
    title: 'Drill into plasterboard: standard mode, no hammer',
    description: 'For partition walls: turn hammer mode off — leave the drill in standard rotation mode. Use a wood or multi-material bit. Apply light pressure — plasterboard offers almost no resistance. Drill slowly and stop as soon as you feel the bit break through the back face of the board. Why: plasterboard is only 12.5mm thick. Hammer mode will crack it and create a ragged hole larger than your bit. You are also looking for the timber or metal stud behind the board — hitting a stud means you can use a wood screw directly into it (the strongest fixing). If you are between studs, you will need a cavity fixing (toggle bolt or plasterboard anchor) for anything beyond a very light load.',
  },
  {
    title: 'Drill into tiles: no hammer, slow speed, tile bit or diamond tip',
    description: 'For ceramic or porcelain tiles: turn off hammer mode entirely. Use a tile drill bit (cross-shaped carbide tip) for ceramic tiles, or a diamond-tipped bit for harder porcelain tiles. Start at the lowest speed setting. Place a small piece of masking tape on the tile where you are drilling — this stops the bit skating across the glazed surface when you start. Apply very light pressure and allow the bit to cut slowly into the glaze. Once through the tile, switch to a masonry bit for the wall behind. Why: hammer mode on a tile will crack it within seconds. The glaze is extremely hard but brittle. Slow speed and a specialist bit cuts through it cleanly.',
  },
  {
    title: 'Choose the correct fixing for the hole you have made',
    description: 'Solid masonry: use a standard plastic wall plug and screw. Push the plug flush with the wall surface, insert the screw. The plug expands against the masonry and grips. For heavy loads, use a hammer-in anchor or frame fixing. Plasterboard into stud: screw directly into the timber stud — the strongest option. Plasterboard between studs: use a plasterboard anchor or toggle bolt rated for the weight you are hanging. Never use a standard wall plug in plasterboard — it will pull straight out. Tile wall: once through the tile and into the masonry behind, use a standard wall plug and screw. The tile itself carries no load — the fixing grips in the masonry behind it. Why: the right fixing in the right material is what actually holds the load. A wrong fixing is not a minor issue — shelves, towel rails, and radiators mounted on incorrect fixings can pull out of the wall, sometimes injuring people.',
  },
]

export default function DrillIntoWallTypes() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Drill into different wall types</h1>
        <p className="text-4xl font-black text-green-600 mb-1">15 mins to learn — works on every wall in your home</p>
        <p className="text-gray-600 mb-6">Masonry, plasterboard, and tiles all need different settings, different bits, and different fixings. Get any one wrong and you crack tiles, blow out plasterboard, or end up with a fixing that will not hold. This guide gets it right.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['drill-into-wall-types'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Drill into different wall types" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="drill-into-wall-types" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Before drilling anywhere in a wall, check for hidden pipes and cables — see our <a href="/guides/find-pipes-and-wires" className="text-orange-600 hover:underline font-medium">Find pipes and wires in walls</a> guide. Drilling into a live cable or water pipe is dangerous and expensive.</p>
          <p className="text-sm text-gray-700 mb-2">UK walls typically run cables vertically from switches and sockets, and horizontally from those vertical runs. Avoid drilling within 150mm of a socket, switch, or ceiling fitting.</p>
          <p className="text-sm text-gray-700">SDS drills are more powerful than standard combi drills and are better for large holes in hard masonry — but for most domestic jobs, a standard combi drill in hammer mode is sufficient.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Combi drill with hammer mode', hint: 'essential for masonry — a drill without hammer mode will not penetrate brick', toolId: 'drill' },
            { icon: 'check', name: 'Masonry drill bits', hint: 'carbide-tipped — sized to match your wall plugs (usually 5mm or 6mm)', toolId: 'drill-bits-masonry' },
            { icon: 'check', name: 'Wood/multi-material bits', hint: 'for plasterboard and timber studs', toolId: 'drill-bits-wood' },
            { icon: 'buy', name: 'Tile drill bit (cross-tipped carbide)', hint: 'essential for ceramic tiles — do not use a standard masonry bit on tiles', hintOrange: true },
            { icon: 'buy', name: 'Plasterboard wall anchors', hint: 'for fixings between studs — never use standard plugs in plasterboard', hintOrange: true },
          ]}
          slug="drill-into-wall-types"
          guideName="Drill into different wall types"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['drill-into-wall-types']} />
        <StepProgress steps={steps} slug="drill-into-wall-types" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Leaving hammer mode on for plasterboard or tiles.</strong> Hammer mode on plasterboard cracks the board and creates an oversized hole. On tiles it shatters the glaze immediately. Turn hammer mode off for anything that is not solid masonry.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Using a standard wall plug in plasterboard.</strong> Standard plugs require solid material to expand into. In plasterboard they just spin or pull through. Use a designated plasterboard anchor for anything hung between studs.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Drilling into tiles without a specialist bit.</strong> A masonry bit will skate across the tile glaze and scratch it before eventually cracking through unpredictably. Use a tile bit for ceramics, a diamond bit for porcelain.</p>
          <p className="text-sm text-yellow-900"><strong>Not checking for pipes and cables first.</strong> This is the single most dangerous and expensive mistake. Scan the wall with a detector before drilling anywhere near a socket, switch, or radiator pipe.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Worth knowing</h2>
          <p className="text-sm text-red-900 mb-1">If a masonry bit stops cutting and just spins, you have likely hit a hard flint, aggregate, or a very dense brick — try a different bit diameter or use an SDS hammer drill for more impact force</p>
          <p className="text-sm text-red-900 mb-1">If plaster crumbles around the hole rather than drilling cleanly, the plaster is old and soft — use a larger wall plug and consider using No-More-Nails adhesive instead of a screw fixing for lighter items</p>
          <p className="text-sm text-red-900">Some external walls are hollow — a cavity wall with an air gap or insulation between two masonry skins. Your drill will break through the inner skin and then feel like it is drilling into nothing — this is normal; keep going to reach the outer skin</p>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You know how to identify your wall type and match the drill setting, bit, and fixing to it — masonry with hammer mode, plasterboard without, tiles with a specialist bit. This is one of the most practically useful skills in DIY — used every time you hang anything on a wall.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/find-pipes-and-wires" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Find pipes and wires →</a>
            <a href="/guides/fit-bathroom-fixtures" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fit bathroom fixtures →</a>
            <a href="/guides/drill-into-tiles" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Drill into tiles (detailed) →</a>
          </div>
        </div>

        {GUIDE_META['drill-into-wall-types'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['drill-into-wall-types'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="drill-into-wall-types"
          relatedSlugs={['find-pipes-and-wires', 'fit-bathroom-fixtures', 'drill-into-tiles']}
        />
        <GuideActions slug="drill-into-wall-types">
          <GuideExtras slug="drill-into-wall-types" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="drill-into-wall-types" title="Drill into different wall types" href="/guides/drill-into-wall-types" />
      <MobileNav />
    </main>
  )
}
