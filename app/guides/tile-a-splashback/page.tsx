import type { Metadata } from 'next'
import StepProgress from '@/components/StepProgress'
import CompleteButton from '@/components/CompleteButton'
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
import NextGuide from '@/components/NextGuide'
import DifficultyComparison from '@/components/DifficultyComparison'
import { GUIDE_META } from '@/lib/guide-meta'

export const metadata: Metadata = {
  title: 'How to Tile a Splashback | FixItFirst',
  description: 'Tile a kitchen or bathroom splashback yourself in half a day. Step-by-step beginner guide. Save £150–300 vs a tiler.',
  openGraph: {
    title: 'How to Tile a Splashback | FixItFirst',
    description: 'Tile a kitchen or bathroom splashback yourself in half a day. Step-by-step beginner guide. Save £150–300 vs a tiler.',
    url: 'https://fixit-first.co.uk/guides/tile-a-splashback',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Plan your layout', description: 'Hold tiles against the wall dry to work out your layout. Start from the centre of the area and work outward so any cut tiles are equal on both sides. Mark a level horizontal line as your starting point.' },
  { title: 'Prepare the surface', description: 'The wall must be clean, dry, and solid. Remove old sealant, grease, and any loose paint. Sand glossy surfaces lightly so the adhesive can grip.' },
  { title: 'Apply tile adhesive', description: 'Spread adhesive onto the wall with the notched spreader, working in small sections (about 30x30cm at a time). Press ridges into the adhesive with the notched edge — this is what grips the tile.' },
  { title: 'Set the tiles', description: 'Press each tile firmly onto the adhesive with a slight twisting motion. Place spacers at each corner. Use your spirit level regularly to check rows are straight.' },
  { title: 'Leave to set', description: 'Allow the adhesive to cure for at least 24 hours before grouting. Do not disturb the tiles.' },
  { title: 'Grout the joints', description: 'Remove the spacers. Apply grout over the tiles with the spreader, pressing it firmly into the joints. Work diagonally across the tiles. Clean excess grout with a damp sponge before it dries. Buff off the haze with a dry cloth after 30 minutes.' },
]

export default function TileASplashback() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tile a splashback</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £150–300 today</p>
        <p className="text-gray-500 mb-6">Half a day · Intermediate · Saves £150–300 vs a tiler</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['tile-a-splashback'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Tile a splashback" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="tile-a-splashback" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">A splashback is an excellent first tiling project — the area is small, most tiles do not need cutting, and any mistakes are not structural.</p>
          <p className="text-sm text-gray-700">Turn off the power to any sockets in the splashback area at the consumer unit before you start. Water and adhesive near live sockets is dangerous.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
    { icon: 'check', name: 'Tape measure and pencil', hint: 'for marking out', toolId: 'tape-measure' },
    { icon: 'check', name: 'Spirit level', hint: 'to keep rows straight', toolId: 'spirit-level' },
    { icon: 'check', name: 'Notched adhesive spreader', hint: 'usually included with tile adhesive' },
    { icon: 'check', name: 'Grout spreader or old credit card', hint: 'to apply grout' },
    { icon: 'check', name: 'Sponge and bucket', hint: 'for cleaning off excess grout' },
    { icon: 'buy', name: 'Tiles', hint: 'buy — allow 10% extra for cuts and breakages', hintOrange: true },
    { icon: 'buy', name: 'Tile adhesive', hint: 'buy — use a waterproof type for kitchen and bathroom', hintOrange: true },
    { icon: 'buy', name: 'Grout', hint: 'buy — choose a colour to complement your tiles', hintOrange: true },
    { icon: 'buy', name: 'Tile spacers', hint: 'buy — 2mm or 3mm for standard joints', hintOrange: true },
    { icon: 'buy', name: 'Tile cutter or score-and-snap tool', hint: 'buy — 20 if you need to cut tiles', hintOrange: true },
  ]}
          slug="tile-a-splashback"
          guideName="Tile a splashback"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['tile-a-splashback']} />
        <StepProgress steps={steps} slug="tile-a-splashback" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not turning off the power to sockets in the splash area — this is a safety essential.</p>
          <p className="text-sm text-yellow-900 mb-2">Spreading adhesive too far ahead — it skins over and loses grip. Work in small sections.</p>
          <p className="text-sm text-yellow-900">Grouting before the adhesive has fully cured — tiles can shift, ruining the joint lines.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a tiler if...</h2>
          <p className="text-sm text-red-900 mb-1">Tiles are going behind an electric hob or cooker — the installation area needs to be confirmed safe first</p>
          <p className="text-sm text-red-900 mb-1">The wall is damp or the plaster is crumbling — fix the underlying problem before tiling</p>
          <p className="text-sm text-red-900">You need to cut around a socket or switch — consider having an electrician remove the socket faceplate before you tile</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Tiles and materials (small splashback)</span><span className="font-medium">£30–60</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Tiles and materials (full run)</span><span className="font-medium">£60–120</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Tiler would charge</span><span className="font-medium text-red-600">£150–300 (plus tiles)</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to plan a tile layout, apply adhesive correctly, and grout neatly. These skills transfer to tiling a bathroom floor, wall, or shower enclosure.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['tile-a-splashback'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['tile-a-splashback'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['tile-a-splashback'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="tile-a-splashback" />
        <NextGuide currentSlug="tile-a-splashback" />
      </div>
      <RecentViewTracker slug="tile-a-splashback" title="Tile a splashback" href="/guides/tile-a-splashback" />
      <MobileNav />
    </main>
  )
}
