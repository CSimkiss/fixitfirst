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
  title: 'How to Finish a Bathroom (Seal, Paint & Final Checks) | FixItFirst',
  description: 'Apply silicone sealant, touch up paintwork, and do a thorough final inspection. The finishing phase that turns a refurbished bathroom into a completed renovation.',
  openGraph: {
    title: 'How to Finish a Bathroom (Seal, Paint & Final Checks) | FixItFirst',
    description: 'Apply silicone sealant, touch up paintwork, and do a thorough final inspection. The finishing phase that turns a refurbished bathroom into a completed renovation.',
    url: 'https://fixit-first.co.uk/guides/finish-bathroom-renovation',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Apply silicone sealant to all joints',
    description: 'Run masking tape along each side of the joint you are sealing — one strip on the tile, one on the bath, basin, or tray — leaving a gap of about 4–5mm between them. Load the sealant gun, cut the nozzle at a 45° angle to match the joint width, and apply a continuous bead in one smooth pass without stopping. Keep steady, even pressure and move at a consistent speed. Why: masking tape is the single most effective way to get a clean sealant line. It takes two minutes to apply and means the excess peels away with crisp edges. Without it, removing excess sealant from tiles and sanitaryware is almost impossible without leaving smears. Cut silicone does not buff off — it drags.',
  },
  {
    title: 'Smooth and finish sealant edges',
    description: 'Within 60 seconds of applying the bead — before a skin forms — wet a finger or a sealant smoothing tool and draw it firmly along the joint in one continuous stroke. Apply light, even pressure so the sealant is pressed into the joint and the surface is slightly concave. Immediately peel the masking tape away at a 45° angle while the sealant is still wet, pulling away from the joint. Leave to cure for the time stated on the tube — typically 24 hours before the room is used and water contacts the seal. Why: a properly tooled sealant joint is concave so water runs off rather than pooling. A convex or flat bead traps water at the edges, and that standing water is how black mould establishes itself within months of a renovation.',
  },
  {
    title: 'Touch up paintwork',
    description: 'Inspect all painted surfaces in good light — ideally with a torch held at a raking angle, which shows up thin patches, nibs, and roller marks that flat daylight hides. Mark any areas needing attention with a small piece of masking tape. Sand any nibs lightly with 120-grit paper and wipe away dust before repainting. Apply touch-up coats with a small brush rather than a roller for better control over small areas. Use the same paint batch — even the same colour from a different tin can be visible as a patch once dry. Why: the finishing phase is what determines whether a renovation looks professional or amateurish. The tiles and fixtures can be perfect, but a patchy ceiling or a rough paint edge around the window frame is what visitors notice first.',
  },
  {
    title: 'Clean all surfaces thoroughly',
    description: 'Wipe down every tiled surface with a damp cloth to remove dust, grout haze, adhesive smears, and finger marks. Use a clean dry cloth to buff tiles to a shine — grout haze in particular can look like permanent clouding until buffed off. Clean sanitaryware (basin, toilet, bath) with a non-abrasive bathroom cleaner — avoid anything with grit on newly grouted or sealed surfaces. Wipe chrome fittings dry after cleaning to prevent water spots. Why: a clean bathroom looks finished. Construction dust left on tiles or smears on chrome creates the impression of work still in progress, and some residues (particularly grout haze) can cure permanently if left beyond 24–48 hours.',
  },
  {
    title: 'Final inspection',
    description: 'Work systematically around the room. Check every sealant joint — it should be continuous with no gaps, bubbles, or missed sections. Check every tile — press each one firmly; any hollow sound or movement means the adhesive has not bonded and the tile will need re-fixing. Check all fixtures are solid with no movement. Run the taps and flush the toilet; watch every water connection and the waste trap for 60 seconds for any drips. Check the extractor fan runs if fitted. Finally, open a window, stand in the doorway, and look at the room as a whole. Why: a systematic check now catches anything that needs addressing before the room is in daily use. A small sealant gap or a slow drip that is ignored today is a damp patch or a mould problem in six months. This step takes ten minutes and protects everything you have just built.',
  },
]

export default function FinishBathroomRenovation() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Finish a bathroom (seal, paint & final checks)</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £80–200 — the finishing phase most people rush</p>

        <p className="text-gray-600 mb-4">The major work is done. This final phase is what separates a bathroom that looks finished from one that looks like a DIY job. Sealant lines, paint edges, and a thorough inspection take a couple of hours and make the whole renovation look intentional.</p>
        <p className="text-gray-600 mb-6">This is Phase 6 of a full bathroom renovation — the last step.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['finish-bathroom-renovation'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Finish a bathroom (seal, paint & final checks)" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="finish-bathroom-renovation" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">All major work should be complete before starting this phase — tiling, fixture fitting, and any paintwork should already be done. This guide covers finishing and quality control only.</p>
          <p className="text-sm text-gray-700 mb-2">Sealant must be applied to a dry surface. If the bathroom has recently had water running in it, allow the surfaces to dry fully — typically a few hours. Do not apply silicone to wet tiles or a damp bath edge; it will not adhere properly and will lift within weeks.</p>
          <p className="text-sm text-gray-700">Use sanitary-grade silicone for bathrooms, not decorator&apos;s caulk. Sanitary silicone contains a fungicide to resist the black mould that forms at bath and basin edges in humid conditions.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Sealant gun', hint: 'for smooth, controlled sealant application', toolId: 'sealant-gun' },
            { icon: 'check', name: 'Masking tape', hint: 'the key to clean sealant lines — do not skip this', toolId: 'masking-tape' },
            { icon: 'check', name: 'Angled paintbrush', hint: 'for touch-up work and cutting in at edges', toolId: 'paintbrush' },
            { icon: 'check', name: 'Sponge and cloths', hint: 'for cleaning surfaces and buffing tiles', toolId: 'sponge-cloths' },
            { icon: 'buy', name: 'Sanitary silicone sealant', hint: 'white or clear — must be sanitary grade, not decorator\'s caulk', hintOrange: true },
            { icon: 'buy', name: 'Bathroom paint (touch-up)', hint: 'moisture-resistant — use the same batch as your original coat', hintOrange: true },
          ]}
          slug="finish-bathroom-renovation"
          guideName="Finish a bathroom"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['finish-bathroom-renovation']} />
        <StepProgress steps={steps} slug="finish-bathroom-renovation" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Skipping the masking tape.</strong> It feels like extra work, but it is the difference between a professional-looking sealant line and a smeared mess. Silicone does not sand smooth and does not clean off tiles easily once it has even partially cured. Tape takes two minutes; remediation takes an hour.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Rushing the finish.</strong> Painting over dust, applying sealant to damp surfaces, or doing the final check while tiles are still wet all produce results that look fine immediately and show problems within weeks. Each step has a curing or drying time — respect it.</p>
          <p className="text-sm text-yellow-900"><strong>Skipping the final inspection.</strong> It is easy to assume everything is fine when you are tired of the project. A systematic check — tile by tile, joint by joint, running every fitting — takes ten minutes and is the only way to catch a slow drip or a poorly bonded tile before it becomes a significant repair job.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a professional if...</h2>
          <p className="text-sm text-red-900 mb-1">Any water connection is dripping or weeping — isolate the water immediately and call a plumber rather than trying to tighten your way out of a leak</p>
          <p className="text-sm text-red-900">There is existing black mould behind where you applied sealant, or mould is already returning within days of finishing — this indicates a ventilation or damp issue that sealant alone will not solve</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Sealant, tape, and touch-up paint</span><span className="font-medium">£10–25</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Full finishing materials</span><span className="font-medium">£25–50</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Tradesperson finishing charge</span><span className="font-medium text-red-600">£80–200</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You now know how to apply a clean sealant line using masking tape, touch up paintwork to a professional standard, and carry out a systematic final inspection that catches problems before they become expensive. These finishing skills apply to any room — kitchen, bathroom, or utility space.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Full renovation complete →</a>
          </div>
        </div>

        {/* ── Continue your renovation ─────────────────────────────────────── */}
        <div className="bg-gray-950 text-white rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-white mb-4">Renovation complete</h2>
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
              <span className="text-green-400 text-base">✅</span>
              <span className="text-green-300 text-sm font-medium">Phase 6: Finishing — Completed</span>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-5">That&apos;s a full bathroom renovation. You planned it, stripped it, prepped it, tiled it, fitted it, and finished it yourself.</p>
          <a
            href="/projects/bathroom-renovation"
            className="bg-orange-500 hover:bg-orange-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors inline-block"
          >
            Back to your renovation →
          </a>
        </div>

        <p className="text-sm text-gray-500 text-center mb-3">The finishing phase is what makes it look like it was done professionally.</p>
        {GUIDE_META['finish-bathroom-renovation'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['finish-bathroom-renovation'].renterWarning}</p>
          </div>
        )}
        <GuideActions slug="finish-bathroom-renovation">
          <GuideExtras slug="finish-bathroom-renovation" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="finish-bathroom-renovation" title="Finish a bathroom (seal, paint & final checks)" href="/guides/finish-bathroom-renovation" />
      <MobileNav />
    </main>
  )
}
