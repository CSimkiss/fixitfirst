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
  title: 'How to Use a Spirit Level Properly | FixItFirst',
  description: 'Use a spirit level to get horizontal and vertical lines perfect every time. Covers reading the bubble, checking accuracy, and marking reference lines for shelves, tiles, and fixtures.',
  openGraph: {
    title: 'How to Use a Spirit Level Properly | FixItFirst',
    description: 'Use a spirit level to get horizontal and vertical lines perfect every time. Covers reading the bubble, checking accuracy, and marking reference lines for shelves, tiles, and fixtures.',
    url: 'https://fixit-first.co.uk/guides/use-a-spirit-level',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Understand what the bubble is telling you',
    description: 'A spirit level contains one or more vials — small curved tubes filled with liquid and a bubble of air. When the bubble sits exactly between the two black lines marked on the vial, the surface is level (horizontal) or plumb (vertical). If the bubble is to the left of centre, the left end is low. If it is to the right, the right end is low. The vial in the middle of the level reads horizontal. If your level has a vial at 90 degrees to the main body, that reads vertical (plumb). Why: reading the bubble correctly sounds obvious but is often done from the wrong angle. You must look at the vial directly from above or straight on — viewing from an angle gives a false reading.',
  },
  {
    title: 'Check your spirit level is accurate before trusting it',
    description: 'Place the level on a flat surface and note the bubble position. Without moving the surface, flip the level end-for-end (rotate it 180 degrees along its length) and check the bubble again. If the level is accurate, the bubble will be in exactly the same position. If the bubble has moved, the level is off. Why: spirit levels can become inaccurate if they are dropped or stored badly. A level that reads slightly off will cause cumulative errors — shelves that look level but are visibly wrong when you step back. Check accuracy before trusting any level for important work. Most quality levels have adjustment screws on the vials if calibration is needed.',
  },
  {
    title: 'Check horizontal surfaces and mark reference lines',
    description: 'To check a surface is horizontal: place the level flat on it and read the bubble. To mark a horizontal reference line (for tiling, shelving, or picture rails): hold a pencil at one end of the level, adjust until the bubble is centred, then mark a short line. Move the level along, using the first mark to keep it aligned, and extend the line. Use a long level (600mm or 1200mm) for this — a shorter level accumulates small errors over distance. Why: a line drawn across a room using only a short level will drift noticeably over 3–4 metres. For long horizontal reference lines, use the longest level you have, or a laser level if the room is large.',
  },
  {
    title: 'Check vertical alignment (plumb)',
    description: 'To check something is vertical — a door frame, a wall, a post — hold the level against it vertically and read the side vial (if the level has one) or rotate the level 90 degrees so it reads vertically. The bubble should sit between the lines. Why: walls, door frames, and corners in UK houses are rarely perfectly plumb — especially in older properties. This matters when hanging doors, fitting cabinets, or tiling — if you tile to a wall that is out of plumb, the vertical grout lines will look visibly off. Use the level to establish a true vertical reference line rather than following the existing wall.',
  },
  {
    title: 'Use the level as a straight edge for longer measurements',
    description: 'A 600mm or 1200mm spirit level also functions as a precise straight edge for drawing lines, checking flat surfaces, and setting out tile layouts. Place it against a wall or surface and look for gaps — even a 1–2mm bow in a wall will show as daylight under the level edge. Why: checking for flat surfaces matters when tiling, fitting skirting boards, and installing worktops. A surface that looks flat but has a 3mm bow in the middle will show as a ridge in tiles or a gap under a worktop. Use the level edge to find problems before they become visible in the finished work.',
  },
]

export default function UseASpiritLevel() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Use a spirit level properly</h1>
        <p className="text-4xl font-black text-green-600 mb-1">10 mins to learn — used in nearly every DIY job</p>
        <p className="text-gray-600 mb-6">A spirit level is one of the most-used tools in DIY — and one of the most misused. Reading it correctly and checking its accuracy takes two minutes. Getting it wrong makes every shelf, tile row, and fixture look visibly off.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['use-a-spirit-level'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Use a spirit level properly" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="use-a-spirit-level" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide covers using a standard bubble spirit level — the most common type, available from £5 upwards. Digital levels and laser levels work differently, but the principles (what &apos;level&apos; and &apos;plumb&apos; mean) are the same.</p>
          <p className="text-sm text-gray-700 mb-2">For most jobs in a house, a 600mm level is the right length. Short levels (under 300mm) accumulate error over long distances. A 1200mm level is useful for tiling and skirting boards.</p>
          <p className="text-sm text-gray-700">Keep your level stored flat — leaning against a wall for months can warp cheaper plastic levels and affect accuracy.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Spirit level (600mm minimum)', hint: 'longer is better for horizontal reference lines — a 1200mm level is ideal', toolId: 'spirit-level' },
            { icon: 'check', name: 'Pencil', hint: 'to mark reference lines as you go', toolId: 'pencil' },
          ]}
          slug="use-a-spirit-level"
          guideName="Use a spirit level properly"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['use-a-spirit-level']} />
        <StepProgress steps={steps} slug="use-a-spirit-level" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Reading the bubble from an angle.</strong> You must look at the vial directly from above (for horizontal) or straight on (for vertical). Viewing from even a slight angle shows the bubble in a different position to where it actually is.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Not checking the level&apos;s own accuracy first.</strong> A dropped or cheap level can be inaccurate. Flip it end-for-end and check the bubble is in the same position. If it has moved, do not trust the level for precision work.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Using a short level for long reference lines.</strong> Extending a horizontal line across a full wall with a 300mm level accumulates small errors at each step. Use the longest level you have, or a laser level for rooms wider than 3 metres.</p>
          <p className="text-sm text-yellow-900"><strong>Following the existing wall or floor instead of a true level.</strong> Old houses have floors and walls that are out of level by 10–20mm over a few metres. Always work from a true level reference, not from the existing surface.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">When a spirit level is not enough</h2>
          <p className="text-sm text-red-900 mb-1">Setting out a tile layout across a full bathroom or kitchen — use a laser level to project a horizontal line across the whole room at once</p>
          <p className="text-sm text-red-900 mb-1">Checking if a floor is level before laying engineered wood or laminate — lay the level in multiple directions across the full floor area, not just at one point</p>
          <p className="text-sm text-red-900">Setting out a large outdoor project like decking or a patio — a water level (a long tube filled with water) gives accurate readings over long distances</p>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You know how to read a spirit level correctly, verify its accuracy, mark horizontal reference lines, and check for plumb. These skills are used in almost every practical DIY task — shelving, tiling, picture hanging, fitting radiators, and bathroom installation.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/tile-a-splashback" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Tile a splashback →</a>
            <a href="/guides/fit-bathroom-fixtures" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fit bathroom fixtures →</a>
            <a href="/guides/drill-into-wall-types" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Drill into different wall types →</a>
          </div>
        </div>

        {GUIDE_META['use-a-spirit-level'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['use-a-spirit-level'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="use-a-spirit-level"
          relatedSlugs={['tile-a-splashback', 'fit-bathroom-fixtures', 'drill-into-wall-types']}
        />
        <GuideActions slug="use-a-spirit-level">
          <GuideExtras slug="use-a-spirit-level" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="use-a-spirit-level" title="Use a spirit level properly" href="/guides/use-a-spirit-level" />
      <MobileNav />
    </main>
  )
}
