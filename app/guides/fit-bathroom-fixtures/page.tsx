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
  title: 'How to Fit Bathroom Fixtures (Sink, Accessories & Finishing) | FixItFirst',
  description: 'Install a basin, towel rail, and bathroom accessories after tiling. Step-by-step guide for the fitting phase of a bathroom renovation. Save £150–400 vs a tradesperson.',
  openGraph: {
    title: 'How to Fit Bathroom Fixtures (Sink, Accessories & Finishing) | FixItFirst',
    description: 'Install a basin, towel rail, and bathroom accessories after tiling. Step-by-step guide for the fitting phase of a bathroom renovation. Save £150–400 vs a tradesperson.',
    url: 'https://fixit-first.co.uk/guides/fit-bathroom-fixtures',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Mark fixing points accurately',
    description: 'Hold the bracket or fixture against the wall and use a pencil to mark the fixing hole positions. Then hold your spirit level across the marks and check they are level before committing to anything. For wall-hung items like towel rails, also check the wall is plumb — a rail that looks level in isolation but follows a slightly out-of-plumb wall will look wrong once you step back. Double-check spacing with a tape measure against the manufacturer\'s fixing template if one is provided. Why: a fixture drilled 3mm out of level is permanently crooked. Marks cost nothing to adjust; drilled holes do not. Spend an extra two minutes here and you will not need to fill anything.',
  },
  {
    title: 'Drill and fit wall fixings',
    description: 'Select the correct drill bit for your wall type — masonry bit for a brick or block wall behind the tiles, standard HSS bit for a timber stud. Start at low speed when drilling through tiles to avoid cracking the glaze — a sharp masonry bit and gentle, steady pressure is all that is needed. Do not hammer-drill through tiles. Switch to hammer mode once through the tile and into the wall. Fit a rawl plug that matches the drill bit size and tap it flush. Why: the rawl plug expands as the screw drives in and grips the surrounding material — without it, the screw turns freely in the hole and the fixture eventually works loose. In a bathroom, a loose towel rail pulls out and damages the tile. Use the right fixings and the fixture will outlast the renovation.',
  },
  {
    title: 'Fit the basin or primary fixture',
    description: 'If fitting a pedestal basin, assemble the pedestal and basin loosely first to check the position before final fixing. Feed the tap tails and waste fittings through the basin before it goes against the wall — you cannot reach them easily once it is in place. Position the basin on the pedestal, check it is level, then mark and drill the wall fixing points for the basin back bracket. Tighten fixings firmly but not with full force — overtightening a screw through ceramic or into a bracket that sits against tiles risks cracking either. Why: a basin carries daily load and needs to be solid, but ceramics are brittle. Firm and secure, not white-knuckle tight.',
  },
  {
    title: 'Connect basic pipework',
    description: 'This step covers simple connections only — attaching flexible tap connectors to the isolation valves and connecting the waste trap to the drain outlet. Wrap two to three turns of PTFE tape clockwise around any threaded connections before tightening. Hand-tighten first, then give a quarter to half turn with an adjustable spanner — no more. Open the isolation valves slowly and watch every joint for drips. Why: PTFE tape fills the micro-gaps in threaded fittings and is the standard way to make low-pressure water connections leak-free. Overtightening threaded plastic fittings cracks them — the seal comes from PTFE and thread engagement, not torque. If you are reconnecting compression fittings or anything beyond flexible tails to isolation valves, stop and call a plumber.',
  },
  {
    title: 'Fit accessories and smaller fittings',
    description: 'Towel rails, toilet roll holders, robe hooks, and mirror fixings all follow the same process: mark level, drill, rawl plug, screw. For items that will take regular load — a heated towel rail or a large mirror — use fixings rated for the weight and ensure at least one fixing hits a stud or solid wall, not just plasterboard. Use a cable detector before drilling anywhere near where cables might run. Why: bathroom accessories seem trivial until a towel rail pulls out of the wall because it was only fixed into plasterboard foam with no plug. Check the load rating on the packaging and fix accordingly.',
  },
  {
    title: 'Check alignment, stability, and finish',
    description: 'Stand back and look at every fixture from the doorway. Check each one with a spirit level again — it is easier to spot a problem now than after the silicone sealant has been applied and set. Tighten any fixings that feel even slightly loose. Apply a thin bead of sanitary silicone where the basin back meets the wall, and where any accessory bracket meets a tiled surface, to prevent water ingress behind the fitting. Smooth with a wetted finger and leave 24 hours to cure before the room is used. Why: silicone at fixture-to-tile joints stops water tracking behind fittings. Without it, water sits in the gap, promotes mould, and eventually softens the adhesive or tile grout behind.',
  },
]

export default function FitBathroomFixtures() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fit bathroom fixtures</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £150–400 — the fitting phase you can do yourself</p>

        <p className="text-gray-600 mb-4">Once the tiling is done, the bathroom starts to look like a bathroom. This is the fitting phase — getting the basin, accessories, and rails up so the room becomes functional.</p>
        <p className="text-gray-600 mb-6">This is Phase 5 of a full bathroom renovation. Tiling should be complete before you start.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fit-bathroom-fixtures'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fit bathroom fixtures" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fit-bathroom-fixtures" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Tiling must be complete and the adhesive and grout fully cured before you start drilling into tiled walls. Drilling into fresh grout risks cracking tiles or dislodging them.</p>
          <p className="text-sm text-gray-700 mb-2">This guide covers accessible fitting only — mounting a basin, connecting flexible tap tails to isolation valves, and fitting bathroom accessories. It does <strong>not</strong> cover fitting a new bath, running new pipework, or installing an electric shower. Those need a qualified plumber or electrician.</p>
          <p className="text-sm text-gray-700">Ensure the water supply to the bathroom is still isolated from when you completed the plumbing prep phase. Open the isolation valve slowly when you are ready to test connections.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Power drill', hint: 'with masonry bit for drilling through tiles', toolId: 'drill' },
            { icon: 'check', name: 'Drill bits (masonry + wood)', hint: 'masonry for tile and brick, standard HSS for stud walls', toolId: 'drill-bits' },
            { icon: 'check', name: 'Spirit level', hint: 'essential — check every fixture before drilling', toolId: 'spirit-level' },
            { icon: 'check', name: 'Adjustable spanner', hint: 'for tap connectors and waste fittings', toolId: 'adjustable-spanner' },
            { icon: 'check', name: 'Flat-head screwdriver', hint: 'for slotted fixings and isolation valves', toolId: 'screwdriver-flat' },
            { icon: 'check', name: 'Cross-head screwdriver', hint: 'for bracket and accessory fixings', toolId: 'screwdriver-cross' },
            { icon: 'check', name: 'PTFE tape', hint: 'wrap threaded water connections to prevent leaks', toolId: 'ptfe-tape' },
            { icon: 'buy', name: 'Rawl plugs and screws', hint: 'match plug size to drill bit — use the correct type for your wall', hintOrange: true },
            { icon: 'buy', name: 'Sanitary silicone sealant', hint: 'white or clear — for sealing fixture edges against tiles', hintOrange: true },
          ]}
          slug="fit-bathroom-fixtures"
          guideName="Fit bathroom fixtures"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fit-bathroom-fixtures']} />
        <StepProgress steps={steps} slug="fit-bathroom-fixtures" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Drilling without checking level.</strong> The most common result of skipping the spirit level is a towel rail that is visually crooked. The eye is surprisingly good at detecting a 2° slope — mark, check, then drill.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Overtightening into ceramic or plastic.</strong> Screws through ceramic brackets and threaded plastic fittings do not need to be driven hard. Firm and snug is correct — the fitting will crack or the thread will strip under excess torque. If it feels tight and there is no wobble, stop.</p>
          <p className="text-sm text-yellow-900"><strong>Drilling without a cable or pipe detector.</strong> Bathroom walls often have pipes and cables running vertically from fittings above and below. Run a detector over the area before every drilling position, not just the first one.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a professional if...</h2>
          <p className="text-sm text-red-900 mb-1">Any water connection leaks after opening isolation valves — do not leave it and monitor it, isolate the water immediately and get a plumber to inspect</p>
          <p className="text-sm text-red-900 mb-1">The wall feels hollow or soft when you drill — this can indicate damp, failing render, or a cavity that will not hold fixings safely</p>
          <p className="text-sm text-red-900">You need to run new pipework, fit a new bath, or install an electric shower — these are notifiable works that need qualified tradespeople</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Fixings, sealant, and accessories</span><span className="font-medium">£20–50</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Basic basin and fittings (budget)</span><span className="font-medium">£50–100</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Tradesperson would charge (fitting only)</span><span className="font-medium text-red-600">£150–400</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You can now fix into tiled surfaces without cracking them, apply fixings that will hold under load, make basic plumbing connections properly, and seal fixtures against tile surfaces to prevent damp. These are the finishing skills that take a tiled room and make it a working bathroom.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation Phase 5 →</a>
            <a href="/guides/paint-a-room" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Finishing phase →</a>
          </div>
        </div>

        {/* ── Continue your renovation ─────────────────────────────────────── */}
        <div className="bg-gray-950 text-white rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-white mb-4">Continue your renovation</h2>
          <div className="space-y-2 mb-5">
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-base">✅</span>
              <span className="text-green-300 text-sm font-medium">Phase 4: Tiling — Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-base">✅</span>
              <span className="text-green-300 text-sm font-medium">Phase 5: Fitting — Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-400 text-base">👉</span>
              <span className="text-white text-sm font-medium">Phase 6: Finishing — next up</span>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="/projects/bathroom-renovation"
              className="bg-orange-500 hover:bg-orange-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
            >
              Back to your renovation →
            </a>
            <a
              href="/guides/paint-a-room"
              className="border border-white/20 text-gray-300 hover:bg-white/10 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              Start finishing phase →
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center mb-3">Most people pay a tradesperson for fitting. You just did it yourself.</p>
        {GUIDE_META['fit-bathroom-fixtures'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fit-bathroom-fixtures'].renterWarning}</p>
          </div>
        )}
        <GuideActions slug="fit-bathroom-fixtures">
          <GuideExtras slug="fit-bathroom-fixtures" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="fit-bathroom-fixtures" title="Fit bathroom fixtures" href="/guides/fit-bathroom-fixtures" />
      <MobileNav />
    </main>
  )
}
