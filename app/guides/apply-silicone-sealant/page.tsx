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
  title: 'How to Apply Silicone Sealant Cleanly | FixItFirst',
  description: 'Apply silicone sealant in a clean, professional bead that does not sag or bubble. Covers cutting the nozzle, tooling, and tape technique. Works for baths, basins, and showers.',
  openGraph: {
    title: 'How to Apply Silicone Sealant Cleanly | FixItFirst',
    description: 'Apply silicone sealant in a clean, professional bead that does not sag or bubble. Covers cutting the nozzle, tooling, and tape technique. Works for baths, basins, and showers.',
    url: 'https://fixit-first.co.uk/guides/apply-silicone-sealant',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Prepare the surface — clean and completely dry',
    description: 'The joint must be free of old sealant, soap residue, grease, and moisture before you start. Wipe both surfaces with a clean cloth dampened with white spirit or isopropyl alcohol, then wipe dry. Allow at least 30 minutes for the surfaces to fully dry — longer in a cold bathroom. Why: silicone will not adhere to a damp, greasy, or contaminated surface. A bead applied to a surface with any moisture or residue will look fine for a few weeks, then start peeling away at the edges. The preparation is what makes the difference between sealant that lasts three years and sealant that peels within months.',
  },
  {
    title: 'Apply masking tape to both surfaces',
    description: 'Run a strip of masking tape parallel to the joint on each surface — typically 3–5mm back from the edge of the joint on both sides. Press the tape down firmly along its full length. Why: tape is what separates amateur-looking sealant from a clean professional finish. It confines the bead to the joint, gives you a straight edge on each side, and allows you to peel away any smearing before it cures. The few minutes spent taping saves far more time than cleaning up messy overflow later. Skip the tape and the smeared edges will be visible every time you look at the joint.',
  },
  {
    title: 'Cut the nozzle at a 45-degree angle',
    description: 'Cut the nozzle tip at 45 degrees to create an opening that is slightly smaller than the gap you are filling — for a typical bath joint of 4–6mm, cut the nozzle opening to about 4mm. The angled cut lets you hold the cartridge gun at a natural angle while the opening faces the joint. Why: cutting the nozzle too large is the most common mistake — it deposits too much sealant, which sags, overflows the tape edges, and is impossible to tool smooth. A smaller opening gives you more control. You can always add a second pass; removing excess sealant after it has cured is very difficult.',
  },
  {
    title: 'Apply the bead in one continuous pass',
    description: 'Hold the cartridge gun at 45 degrees, with the cut face of the nozzle touching both surfaces of the joint. Move steadily along the full length of the joint in one direction, squeezing the trigger at a consistent rate. Move at a pace that keeps the bead slightly raised — not flush. Do the longest runs first. Why: stopping and restarting creates visible joins in the finished bead. A continuous pass gives a consistent bead profile. If you have never used a sealant gun before, practise on a piece of cardboard first — the trigger force and movement speed needed becomes obvious after a few seconds.',
  },
  {
    title: 'Tool the bead smooth immediately',
    description: 'Immediately after applying — within one minute — wet your finger with washing-up liquid diluted in a small amount of water, and draw it along the bead in one smooth pass. Apply gentle pressure to push the sealant into the joint and create a concave profile. Do not go back over sections — one pass is correct. Why: tooling smooths the surface, pushes sealant into any gaps, and creates the concave finish that sheds water. The washing-up liquid stops the sealant sticking to your finger. Going back over sections drags already-tooled sealant and creates ridges.',
  },
  {
    title: 'Remove the tape and leave to cure',
    description: 'Remove both strips of masking tape immediately after tooling — while the sealant is still wet. Pull each strip back at a low angle (not upward) to leave a clean edge. Allow the sealant to cure fully before using the bath or shower — at least 24 hours for standard bathroom silicone, or check the manufacturer&apos;s instruction on the tube. Why: removing the tape while the sealant is wet leaves a sharp, clean edge. Waiting until it is cured means tearing a ragged edge through the cured bead. The cure time matters because uncured silicone is not waterproof — using the shower or bath too early saturates the joint before it has sealed.',
  },
]

export default function ApplySiliconeSealant() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply silicone sealant cleanly</h1>
        <p className="text-4xl font-black text-green-600 mb-1">20–30 mins — the finish that makes a bathroom look professional</p>
        <p className="text-gray-600 mb-6">A clean silicone bead is the difference between a bathroom that looks finished and one that looks amateur. The technique is simple — tape, a consistent bead, one tooling pass, tape off while wet.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['apply-silicone-sealant'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Apply silicone sealant cleanly" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="apply-silicone-sealant" />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
          <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-1">Part of the Bathroom Renovation project</p>
          <p className="text-sm text-gray-700 mb-2">Silicone sealing is the finishing step in <strong>Phase 5: Finishing</strong> of a full bathroom renovation — the last thing you do before the room is complete.</p>
          <a href="/projects/bathroom-renovation" className="text-sm font-semibold text-orange-600 hover:underline">
            If you&apos;re renovating your bathroom, start here →
          </a>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide covers applying fresh silicone sealant to a bath, basin, shower tray, or tiled joint. If you are replacing existing sealant, remove the old sealant completely first — see our <a href="/guides/remove-silicone-sealant" className="text-orange-600 hover:underline font-medium">Remove silicone sealant</a> guide.</p>
          <p className="text-sm text-gray-700 mb-2">Use a bathroom-grade silicone sealant with fungicide — these are formulated to resist mould in wet environments. Standard silicone (sold for windows or general use) will go black with mould within months in a bathroom.</p>
          <p className="text-sm text-gray-700">Do not use the bath or shower for at least 24 hours after applying — silicone needs time to cure before contact with water.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Masking tape', hint: 'run along both sides of the joint for a clean edge', toolId: 'masking-tape' },
            { icon: 'check', name: 'Sealant gun (cartridge gun)', hint: 'for applying the sealant from the tube', toolId: 'sealant-gun' },
            { icon: 'check', name: 'Scissors or craft knife', hint: 'to cut the nozzle at 45 degrees', toolId: 'utility-knife' },
            { icon: 'buy', name: 'Bathroom silicone sealant (with fungicide)', hint: 'match the colour to your grout — white, grey, and magnolia are most common', hintOrange: true },
          ]}
          slug="apply-silicone-sealant"
          guideName="Apply silicone sealant cleanly"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['apply-silicone-sealant']} />
        <StepProgress steps={steps} slug="apply-silicone-sealant" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Applying to a damp or dirty surface.</strong> The sealant will look fine initially but peel away from the surface within weeks. Dry, clean, grease-free surfaces are non-negotiable.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Cutting the nozzle too wide.</strong> A large opening deposits too much sealant — it overflows the tape, sags, and is impossible to tool smooth. Cut smaller than you think you need.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Tooling back over sections already done.</strong> Each pass of your finger drags sealant out of the joint. One smooth pass is correct. If the bead needs adjustment, it must be done in one movement.</p>
          <p className="text-sm text-yellow-900"><strong>Leaving the tape on until the sealant cures.</strong> Removing tape after curing tears through the bead and leaves a ragged edge. Remove it immediately after tooling, while the sealant is still wet.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Worth knowing</h2>
          <p className="text-sm text-red-900 mb-1">Bathroom sealant that goes black with mould within a few months is almost always a ventilation problem — the room needs an extractor fan running during and after showers</p>
          <p className="text-sm text-red-900 mb-1">Silicone cannot be painted over — if you need a coloured finish, use a decorator&apos;s caulk (acrylic-based) instead, which is paintable but less waterproof</p>
          <p className="text-sm text-red-900">A gap that keeps opening up at the same point (typically between a bath panel and the wall) usually means the bath is moving — fix the bath first, or the sealant will crack again</p>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You know how to apply silicone sealant with a clean professional finish — tape, consistent bead, one tooling pass, tape off while wet. This skill is used in every bathroom and kitchen job. Once you have done it once, it is quick and reliable.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/remove-silicone-sealant" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Remove old sealant →</a>
            <a href="/guides/tile-a-splashback" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Tile a splashback →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation →</a>
          </div>
        </div>

        {GUIDE_META['apply-silicone-sealant'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['apply-silicone-sealant'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="apply-silicone-sealant"
          relatedSlugs={['remove-silicone-sealant', 'tile-a-splashback', 'fix-a-dripping-tap']}
        />
        <GuideActions slug="apply-silicone-sealant">
          <GuideExtras slug="apply-silicone-sealant" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="apply-silicone-sealant" title="Apply silicone sealant cleanly" href="/guides/apply-silicone-sealant" />
      <MobileNav />
    </main>
  )
}
