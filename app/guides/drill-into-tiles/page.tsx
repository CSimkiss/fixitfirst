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
  title: 'How to Drill Into Tiles Without Cracking Them | FixItFirst',
  description: 'Drill through ceramic or porcelain tiles to fit bathroom accessories without cracking them. The right bit and speed make all the difference.',
  openGraph: {
    title: 'How to Drill Into Tiles Without Cracking Them | FixItFirst',
    description: 'Drill through ceramic or porcelain tiles to fit bathroom accessories without cracking them. The right bit and speed make all the difference.',
    url: 'https://fixit-first.co.uk/guides/drill-into-tiles',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Mark the position and apply masking tape',
    description: 'Mark your drilling position on the tile with a pencil. Cut a small cross of masking tape and place it over the mark — the tape should sit flat against the tile surface. Re-mark your point on top of the tape. Why: a drill bit has nothing to grip on a glazed tile surface and will skate across it before it bites. Masking tape creates a tiny amount of surface friction that keeps the bit on the mark while you start the hole. Without it, even a sharp bit wanders and the first contact scratches the tile glaze before the drill has even started cutting.',
  },
  {
    title: 'Use a tile or glass drill bit — not a standard masonry bit',
    description: 'For ceramic tiles: use a carbide-tipped tile bit. For porcelain tiles: use a diamond-tipped core bit (porcelain is extremely hard and will blunt a standard tile bit in seconds). Do not use a standard masonry or HSS bit — these have the wrong geometry for tile and will crack rather than cut. The correct bit has a sharp, spade-like tip that shears through the glaze cleanly. Why: tile cutting is a shearing action, not a hammering one. The wrong bit type applies force in the wrong direction and the tile cracks from the back before the hole is through.',
  },
  {
    title: 'Drill at low speed with no hammer action',
    description: 'Set the drill to its lowest speed setting and ensure hammer action is completely off. Apply light, steady pressure — let the bit do the cutting rather than forcing it. Keep the drill perpendicular to the tile surface. For porcelain, use the drill in rotation-only mode throughout. Why: the key word is shear, not impact. Hammer action transmits rapid percussion into the tile which cracks it from the back. Low speed keeps heat down — heat causes the glaze to expand unevenly and crack. You are through the tile when resistance suddenly drops.',
  },
  {
    title: 'Switch bit once through the tile glaze',
    description: 'Once the tile bit has broken through the glazed surface and into the wall material behind, remove the tile bit and switch to a standard masonry bit of the same diameter. Continue drilling to your required depth with hammer action enabled if the wall is brick or block. Why: the tile bit is designed purely for cutting hard glaze. Using it to drill into brick or plaster behind the tile blunts it rapidly. A masonry bit used the other way — into the tile — would crack it. Each bit does one job.',
  },
  {
    title: 'Insert a rawl plug and check the fixing',
    description: 'Blow or brush any dust out of the hole. Insert a rawl plug that matches the drill bit size — it should go in with light finger pressure and sit flush with the tile surface. If it is loose in the hole, use the next size up. Drive your fixing screw in, checking that it bites cleanly without spinning. Why: the rawl plug must grip the wall material behind the tile, not just the tile itself. A plug that only grips the tile has a small amount of material to hold — the tile is typically 8–10mm thick. A properly seated plug in the block or brick behind gives a solid fix that will hold under load.',
  },
]

export default function DrillIntoTiles() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Drill into tiles without cracking them</h1>
        <p className="text-4xl font-black text-green-600 mb-1">15 minutes — the technique that stops cracked tiles</p>

        <p className="text-gray-600 mb-6">Drilling through ceramic or porcelain tile is something most people get wrong the first time. The wrong bit or the wrong speed cracks the tile. This guide gets it right first time.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['drill-into-tiles'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Drill into tiles without cracking them" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="drill-into-tiles" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Always use a cable and pipe detector before drilling into any tiled wall. Bathroom walls frequently have pipes running vertically from the basin or bath, and cables running to light switches or shaver sockets.</p>
          <p className="text-sm text-gray-700">Identify your tile type: ceramic tiles are white or porous at the edges. Porcelain tiles are uniform all the way through the body and significantly harder. Porcelain needs a diamond-tipped bit — a standard tile bit will not cut it.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Power drill', hint: 'must have variable speed and ability to disable hammer action', toolId: 'drill' },
            { icon: 'check', name: 'Tile or glass drill bit', hint: 'carbide for ceramic, diamond-tipped for porcelain', toolId: 'drill-bits' },
            { icon: 'check', name: 'Masking tape', hint: 'prevents the bit wandering on the tile glaze', toolId: 'masking-tape' },
            { icon: 'check', name: 'Spirit level', hint: 'check position is level before drilling — you cannot undo a drilled hole', toolId: 'spirit-level' },
            { icon: 'buy', name: 'Cable and pipe detector', hint: 'non-negotiable before drilling into any bathroom wall', hintOrange: true },
            { icon: 'buy', name: 'Rawl plugs (mixed bag)', hint: 'match the plug size to the drill bit diameter', hintOrange: true },
          ]}
          slug="drill-into-tiles"
          guideName="Drill into tiles"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['drill-into-tiles']} />
        <StepProgress steps={steps} slug="drill-into-tiles" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Using a standard masonry bit on tile.</strong> The masonry bit tip is designed to hammer and crush material. On tile it shatters the glaze before it cuts. You need a tile bit — they cost £3–5 and save expensive tile replacements.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Drilling with hammer action on.</strong> This is the single most common cause of cracked tiles. Check your drill is in rotation-only mode every time before starting a hole in tile.</p>
          <p className="text-sm text-yellow-900"><strong>Pressing too hard.</strong> The bit needs time to cut. Pushing forces the tip sideways and causes the tile to crack from the back. Steady light pressure, let the speed do the work.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop immediately if...</h2>
          <p className="text-sm text-red-900 mb-1">You hear a click or crack while drilling — stop, pull the bit out, and assess before continuing. A cracking sound usually means the tile is splitting at the back</p>
          <p className="text-sm text-red-900">The bit hits something firm inside the wall after the tile — this may be a pipe. Stop and use your detector to identify what it is before drilling any deeper</p>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You can now drill into tiled surfaces safely — the right bit type, the right speed, no hammer action, masking tape to start. These are the skills you need every time you fit bathroom accessories, shelves, or rails onto a tiled wall.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/fit-bathroom-fixtures" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fit bathroom fixtures →</a>
            <a href="/guides/put-up-shelves" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Put up shelves →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation →</a>
          </div>
        </div>

        {GUIDE_META['drill-into-tiles'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['drill-into-tiles'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="drill-into-tiles"
          relatedSlugs={['tile-a-splashback', 'fit-bathroom-fixtures']}
        />
        <GuideActions slug="drill-into-tiles">
          <GuideExtras slug="drill-into-tiles" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="drill-into-tiles" title="Drill into tiles without cracking them" href="/guides/drill-into-tiles" />
      <MobileNav />
    </main>
  )
}
