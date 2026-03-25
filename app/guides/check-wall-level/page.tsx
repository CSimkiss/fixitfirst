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
  title: 'How to Check If a Wall Is Level and Flat Before Tiling | FixItFirst',
  description: 'Check whether a bathroom wall is plumb, level, and flat before tiling. A 10-minute assessment that prevents crooked tiles and wasted adhesive.',
  openGraph: {
    title: 'How to Check If a Wall Is Level and Flat Before Tiling | FixItFirst',
    description: 'Check whether a bathroom wall is plumb, level, and flat before tiling. A 10-minute assessment that prevents crooked tiles and wasted adhesive.',
    url: 'https://fixit-first.co.uk/guides/check-wall-level',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Check the wall is plumb (vertical)',
    description: 'Hold a spirit level vertically against the wall surface in several positions — near each corner, in the middle, and at different heights. Note which direction the bubble moves and by how much. A wall that leans forward or backward will make vertical tile grout lines appear to splay outward from the floor as you work upward. Why: tiles are flat and rigid — they cannot flex to follow an out-of-plumb wall. If the wall leans, the tile joints at floor level and ceiling level will be different widths on the same tile. A 5mm deviation over 2 metres is visible to the eye once grouted.',
  },
  {
    title: 'Check the wall is level (horizontal)',
    description: 'Hold the spirit level horizontally across the wall at several heights — near the floor, at mid-height, and near the ceiling. Also hold it along the wall surface to check for inward or outward bulges. A bow in the wall surface will be immediately obvious when you drag the level slowly from one end to the other. Why: horizontal tile lines are the most visible element of any tiled wall. A wall that bows outward by even 3mm will create a corresponding dip in horizontal tile lines that catches the eye every time the room is lit from the side.',
  },
  {
    title: 'Measure and record worst deviations',
    description: 'When you find a gap between the spirit level and the wall surface, measure it with a tape measure or slip a coin in to gauge the width. Record each deviation: where on the wall it is, whether it is a high spot or a low spot, and how large. The industry tolerance for direct tiling is 3mm over 1.8 metres (a UK building standard). Measure the gap at its widest. Why: knowing the exact measurements lets you decide on the right fix. A 2mm deviation can be absorbed by your adhesive bed. A 6mm deviation needs skim coat or render before tiles go on. Without measuring, you are guessing.',
  },
  {
    title: 'Decide: tile direct, fill and skim, or replaster',
    description: 'Use this as your guide: under 3mm deviation over 1.8m — tile direct, using adhesive to compensate. 3–8mm deviation — fill high spots with tile adhesive or a ready-mixed skim compound, allow to cure fully, then tile. Over 8mm deviation, or a wall that is significantly out of plumb — have the wall re-rendered or re-plastered before tiling. Tiling over a wall that is out of tolerance produces a job that looks wrong and may never feel right. Why: the British Standard for tiling specifies 3mm tolerance. Adhesive can compensate for small variations, but beyond that it creates uneven adhesive beds that reduce bond strength and lead to de-bonding over time.',
  },
]

export default function CheckWallLevel() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Check if a wall is level and flat</h1>
        <p className="text-4xl font-black text-green-600 mb-1">10 minutes — before tiling, not after</p>

        <p className="text-gray-600 mb-6">Crooked tiles are usually caused by crooked walls, not crooked tiling. This 10-minute check tells you what you are working with before a single tile goes up.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['check-wall-level'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Check if a wall is level and flat" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="check-wall-level" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Do this check after filling and sanding, but before priming or applying tile adhesive. Filling changes the wall surface and any deviations should be assessed on the finished plaster or filler, not the bare wall.</p>
          <p className="text-sm text-gray-700">You need a spirit level at least 600mm long for meaningful readings. A pocket level is too short to show gradual deviations across a wall.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Spirit level (600mm minimum)', hint: 'longer is better — a 1.2m or 1.8m level shows gradual deviation', toolId: 'spirit-level' },
            { icon: 'check', name: 'Tape measure', hint: 'to measure the gap between level and wall', toolId: 'tape-measure' },
          ]}
          slug="check-wall-level"
          guideName="Check wall level and flatness"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['check-wall-level']} />
        <StepProgress steps={steps} slug="check-wall-level" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Skipping this check entirely.</strong> "The wall looks fine" is not the same as the wall being within tolerance. A wall can look flat to the eye but have a 6mm bow that makes every horizontal tile line curve — visible only once tiles are on and it cannot be undone.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Using a short spirit level.</strong> A 200mm pocket level will read level on a bowed wall if you put it in the right place. You need at least 600mm, ideally longer, to pick up gradual deviations across a full wall surface.</p>
          <p className="text-sm text-yellow-900"><strong>Trying to compensate with adhesive bed thickness alone.</strong> Adhesive can take up to 3mm of variation. Beyond that, the thick areas have reduced bond strength and the thin areas may crack tiles. Fix the wall first.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">When to call a plasterer</h2>
          <p className="text-sm text-red-900 mb-1">Deviations greater than 8–10mm over 1.8m — this needs a render or skim coat, not adhesive compensation</p>
          <p className="text-sm text-red-900">A wall that is significantly out of plumb across its full height — re-rendering will correct the plumb, adhesive cannot</p>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You can now assess a wall surface before tiling — measuring plumb, level, and flatness, recording the worst deviations, and deciding whether to tile direct, fill and skim, or call in a plasterer. This is the check that prevents expensive rework.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/prepare-walls-for-tiling" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Prepare walls for tiling →</a>
            <a href="/guides/tile-a-splashback" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Tile a wall →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation →</a>
          </div>
        </div>

        {GUIDE_META['check-wall-level'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['check-wall-level'].renterWarning}</p>
          </div>
        )}
        <GuideActions slug="check-wall-level">
          <GuideExtras slug="check-wall-level" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="check-wall-level" title="Check if a wall is level and flat" href="/guides/check-wall-level" />
      <MobileNav />
    </main>
  )
}
