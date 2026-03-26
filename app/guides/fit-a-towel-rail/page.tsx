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
  title: 'How to Fit a Towel Rail | FixItFirst',
  description: 'Fit a heated or standard towel rail in 1 hour. Step-by-step guide for wall mounting, levelling, and fixing securely. Save £80–150 vs a tradesperson.',
  openGraph: {
    title: 'How to Fit a Towel Rail | FixItFirst',
    description: 'Fit a heated or standard towel rail in 1 hour. Step-by-step guide for wall mounting, levelling, and fixing securely. Save £80–150 vs a tradesperson.',
    url: 'https://fixit-first.co.uk/guides/fit-a-towel-rail',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Choose your position and check for obstructions', description: 'Hold the rail against the wall at the height you want it (typically 900–1200 mm from the floor) and mark the bracket positions lightly with a pencil. Before drilling anything, scan the wall with a cable and pipe detector — bathroom walls regularly have hot and cold supply pipes running to the sink or bath. A misplaced drill bit can cost hundreds to fix.' },
  { title: 'Mark and drill the fixing holes', description: 'With the wall scanned and confirmed safe, use a spirit level to draw a faint horizontal pencil line between your bracket marks. This is the step most people skip — and it is why towel rails end up visibly crooked. Drill the marked holes using the correct bit for your wall type (masonry bit for solid walls, no hammer action for tiles). Blow dust out of the holes and insert wall plugs flush with the surface.' },
  { title: 'Fix the wall brackets', description: 'Screw the mounting brackets into the wall plugs. Use a cross-head screwdriver rather than a drill so you can feel the resistance and stop before the plug spins. The bracket should be solid with zero movement — a towel rail supports a significant load when wet towels are draped over it. Give each bracket a firm tug to confirm it is secure before mounting the rail.' },
  { title: 'Mount the rail onto the brackets', description: 'Most standard (unheated) towel rails clip, slot, or screw onto the wall brackets. Follow the specific fitting instructions for your rail — the method varies by brand. For a heated electric towel rail, this step is the same: mount the body onto the brackets, then route the cable neatly to the nearest switched fused spur (see below for the electrical note).' },
  { title: 'Level, align, and tighten', description: 'Once the rail is on the brackets, place your spirit level on the top bar to confirm it reads level. Most brackets have small adjustment screws that allow a few millimetres of movement. Make any fine adjustments now, then tighten all locking screws fully. A level towel rail looks deliberate and professional — a crooked one looks like it was fitted in a hurry.' },
  { title: 'Test and finish (heated rail: test heat)', description: 'For a standard rail: hang a test towel and check there is no movement or flex. The rail should feel completely solid. For a plug-in electric rail: plug it in, switch it on, and wait 20 minutes to confirm it heats evenly along its full length. If any section stays cold, there may be an air lock — consult your rail\'s manual for the bleed procedure.' },
]

export default function FitATowelRail() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fit a towel rail (heated or standard)</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £80–150 in 1 hr — no tradesperson needed</p>
        <p className="text-gray-600 mb-6">Fitting a towel rail is just drilling, plugging, and screwing — the same core process as putting up a shelf. The main difference is scanning the wall carefully first.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fit-a-towel-rail'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fit a towel rail" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fit-a-towel-rail" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide covers both standard (unheated) towel rails and plug-in electric heated rails. It does not cover plumbed-in heated rails connected to the central heating system — those require a plumber or heating engineer to make the pipe connections.</p>
          <p className="text-sm text-gray-700 mb-2">For plug-in electric towel rails: the rail must connect to a fused spur (a dedicated bathroom socket designed for bathroom use). If you do not have a switched fused spur nearby, have an electrician fit one first — wiring in bathrooms is Part P notifiable work in England and Wales.</p>
          <p className="text-sm text-gray-700">The mounting itself (drilling, fixing, hanging the rail) is the same regardless of whether it is heated or standard — and that is what this guide covers.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
            { icon: 'check', name: 'Drill with masonry and wood bits', hint: 'for fixing into the wall', toolId: 'drill' },
            { icon: 'check', name: 'Drill bits (masonry and wood)', hint: 'match bit to wall type', toolId: 'drill-bits' },
            { icon: 'check', name: 'Spirit level', hint: 'non-negotiable — a crooked rail looks terrible', toolId: 'spirit-level' },
            { icon: 'check', name: 'Tape measure', hint: 'to centre the rail and mark bracket positions accurately', toolId: 'tape-measure' },
            { icon: 'check', name: 'Cable and pipe detector', hint: 'bathroom walls hide supply pipes — always scan first', toolId: 'cable-detector' },
            { icon: 'check', name: 'Cross-head screwdriver', hint: 'to drive fixing screws into wall plugs', toolId: 'screwdriver-cross' },
          ]}
          slug="fit-a-towel-rail"
          guideName="Fit a towel rail"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fit-a-towel-rail']} />
        <StepProgress steps={steps} slug="fit-a-towel-rail" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not scanning the wall before drilling. Bathroom walls are a maze of hot, cold, and sometimes waste pipework. Scan every time, even if you think you know the layout.</p>
          <p className="text-sm text-yellow-900 mb-2">Skipping the spirit level. Hold the level on the rail body, not just the brackets — some brackets have slight manufacturing tolerances.</p>
          <p className="text-sm text-yellow-900 mb-2">Using hammer action on tiles. Even with the right bit, hammer action cracks tiles. Switch to rotation-only mode when drilling tiled walls.</p>
          <p className="text-sm text-yellow-900">Fixing into grout lines. Grout is softer than tile body and gives poor holding strength for fixings. Always drill into the tile itself, centred between grout lines.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a tradesperson if...</h2>
          <p className="text-sm text-red-900 mb-1">Your cable detector reads positive and you cannot identify a safe drill path</p>
          <p className="text-sm text-red-900 mb-1">You want a plumbed-in heated rail connected to the central heating pipework</p>
          <p className="text-sm text-red-900 mb-1">There is no switched fused spur and you need an electrician to fit one before the heated rail can connect</p>
          <p className="text-sm text-red-900">The wall is showing signs of damp or the plaster feels soft</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Standard towel rail (budget)</span><span className="font-medium">£20–60</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Plug-in electric heated rail</span><span className="font-medium">£50–200</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Wall plugs and fixings (usually supplied)</span><span className="font-medium">£0–5</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Handyperson would charge (fitting only)</span><span className="font-medium text-red-600">£80–150</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now have confident drilling and fixing skills in a wet-room environment — the most demanding setting for wall fixings. These skills transfer directly to fitting toilet roll holders, robe hooks, shower shelves, mirror cabinets, and any other bathroom accessory. Every bathroom accessory uses the same scan-drill-plug-fix process.</p>
        </div>
        <p className="text-sm text-gray-500 text-center mb-3">Most people would pay a tradesperson for this.</p>
        {GUIDE_META['fit-a-towel-rail'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fit-a-towel-rail'].renterWarning}</p>
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
            <a href="/guides/paint-a-bathroom" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-xl shrink-0">🎨</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">Paint a bathroom properly (moisture-safe)</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Save £200–400 today</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">1 day</span>
            </a>
            <a href="/guides/reseal-a-shower-or-bath" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-xl shrink-0">🚿</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">Reseal a shower or bath properly</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Save £80–150 today</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">1–2 hrs</span>
            </a>
          </div>
        </div>
        <GuideActions slug="fit-a-towel-rail">
          <GuideExtras slug="fit-a-towel-rail" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="fit-a-towel-rail" title="Fit a towel rail (heated or standard)" href="/guides/fit-a-towel-rail" />
      <MobileNav />
    </main>
  )
}
