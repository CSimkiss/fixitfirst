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
  title: 'How to Stop a Draught from a Door or Window | FixItFirst',
  description: 'Stop a draught from a door or window in 30 minutes. Covers foam strips, brush strips, and door sweeps. Save £50–150 per year on heating bills.',
  openGraph: {
    title: 'How to Stop a Draught from a Door or Window | FixItFirst',
    description: 'Stop a draught from a door or window in 30 minutes. Covers foam strips, brush strips, and door sweeps. Save £50–150 per year on heating bills.',
    url: 'https://fixit-first.co.uk/guides/draft-proof-door-window',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Find exactly where the draught is coming from',
    description: 'On a cold or windy day, move your hand slowly around the edges of the door or window — along the top, both sides, and the bottom. Cold air will be noticeably cooler on your palm. For smaller draughts, hold a lit candle 20cm from the frame and watch for the flame to flicker or lean. Mark the draughty sections with masking tape so you remember where to treat. Why: draught-proofing strips are cheap and quick to apply, but applying them in the wrong places wastes material and leaves the actual gaps untreated. Take two minutes to find every entry point before buying anything.',
  },
  {
    title: 'Choose the right strip type for your gap',
    description: 'There are two main types. Foam strips (also called compression seals) compress when the door closes and seal the gap. They come in two profiles: P-profile for small gaps (1–4mm) and E-profile for larger gaps (4–7mm). Brush strips are better for the sides of skirting boards and doors that slide or fit unevenly — the fibres flex rather than compress. Measure your gap with a ruler before buying. Why: using E-profile foam in a 1mm gap means the door will not close properly — the strip is too thick. Using P-profile in a 5mm gap means it does not compress enough to seal. Matching strip to gap size is the difference between a draught-proof door and one that now will not shut.',
  },
  {
    title: 'Clean and dry the frame surfaces thoroughly',
    description: 'Wipe the surface where you will apply the adhesive strip with a damp cloth to remove dust, grease, and any old adhesive residue. Allow to dry completely — at least 10 minutes, or 20 minutes in a cold room. Why: self-adhesive foam strip will not bond to a dusty or greasy surface. A strip applied to a dirty frame will hold for a few days, then peel off at the corners and lift in the middle. The cleaning step is what makes the difference between a strip that lasts three years and one that falls off before Christmas.',
  },
  {
    title: 'Apply foam strip to the door or window frame',
    description: 'Cut the strip to length using scissors or a craft knife — measure each side of the frame separately, as corners are rarely perfectly square. Peel the backing paper off the adhesive side and press the strip firmly onto the inside of the frame — the surface that the door or window closes against, not the front face. Work in one continuous length per side where possible. Press along the full length with your thumb to ensure complete contact. Why: applying the strip to the closing face (not the visible face) means it compresses correctly when the door or window shuts. Applying it to the wrong face means it either gets sheared off as the door closes or never makes contact at all.',
  },
  {
    title: 'Fit a door sweep for the gap at the bottom of an external door',
    description: 'The gap under an external door is the single largest source of draughts in most UK homes. A door sweep is a brush or rubber seal that screws to the bottom inside face of the door and lightly contacts the floor when the door closes. Measure the width of your door, cut the sweep to length if needed, hold it so the brush just touches the floor when the door is shut (use a coin as a spacer), and screw it in place. Test the door opens and closes freely. Why: no amount of foam strip on the frame fixes the floor gap — the strip and the floor never touch. A door sweep is the only effective solution for this gap, and it stops the biggest source of cold air in one fitting.',
  },
  {
    title: 'Test and adjust',
    description: 'Close the door or window and check from inside on a cold day. The draught should be gone. If you can still feel cold air somewhere, recheck that section and add a second layer of strip or check that the strip is making full contact when the door is closed. For windows, check the opening sections and any ventilation gaps — trickle vents are intentional and should not be blocked. Why: a gap you cannot feel with your hand from inside on a cold day is effectively sealed. Trust the test over visual inspection — a strip that looks well-fitted may not be compressing fully if the gap is uneven.',
  },
]

export default function DraftProofDoorWindow() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Stop a draught from a door or window</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £50–150/year in 30 mins — no tradesperson needed</p>
        <p className="text-gray-600 mb-6">Draughts through doors and windows can add £100–200 to annual heating bills. The fix takes 30 minutes and £5–15 of materials — and it pays for itself in weeks.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['draft-proof-door-window'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Stop a draught from a door or window" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="draft-proof-door-window" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Draughts account for up to 25% of heat loss in older UK homes. External doors and single-glazed or older double-glazed windows are the main culprits. Draught-proofing has one of the highest returns on investment of any home improvement — materials cost £3–15 per door, and the saving shows up on your first heating bill.</p>
          <p className="text-sm text-gray-700 mb-2">Do not block trickle vents (the small slots at the top of window frames) — these are intentional ventilation required by building regulations in newer homes to prevent condensation and damp.</p>
          <p className="text-sm text-gray-700">You do not need to remove any doors or windows for this job.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Tape measure', hint: 'to measure frame lengths before buying strip', toolId: 'tape-measure' },
            { icon: 'check', name: 'Scissors or craft knife', hint: 'to cut strip cleanly to length', toolId: 'utility-knife' },
            { icon: 'check', name: 'Clean cloth', hint: 'to wipe the frame surfaces before applying adhesive' },
            { icon: 'buy', name: 'Self-adhesive foam strip (P or E profile)', hint: 'P-profile for small gaps, E-profile for larger — buy enough for all four sides of the frame', hintOrange: true },
            { icon: 'buy', name: 'Door sweep or brush strip', hint: 'for the gap under an external door — the biggest single source of draughts', hintOrange: true },
          ]}
          slug="draft-proof-door-window"
          guideName="Stop a draught from a door or window"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['draft-proof-door-window']} />
        <StepProgress steps={steps} slug="draft-proof-door-window" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Buying the wrong profile thickness.</strong> Foam strip that is too thick prevents the door closing; too thin and it does not seal. Measure the gap before buying. E-profile for 4–7mm, P-profile for 1–4mm.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Not cleaning the frame first.</strong> Adhesive foam strip will not bond to a dusty or greasy surface and will peel off within days. Wipe and dry the frame before applying.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Only treating one or two sides of the frame.</strong> Draughts come in at all four sides of a poorly-fitting door or window. Check the top, both sides, and the bottom before deciding you are done.</p>
          <p className="text-sm text-yellow-900"><strong>Blocking trickle vents.</strong> The slots at the top of window frames are intentional ventilation — not draughts. Blocking them causes condensation and damp. Leave them alone.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">When draught-proofing will not help</h2>
          <p className="text-sm text-red-900 mb-1">A door or window frame that is rotten, cracked, or visibly warped — the frame itself needs replacing, not sealing</p>
          <p className="text-sm text-red-900 mb-1">A misted double-glazed window (condensation between the panes) — the sealed unit has failed and needs replacing by a glazier</p>
          <p className="text-sm text-red-900">Persistent cold from a wall rather than a frame — this may be missing or damaged cavity wall insulation, which is a different job</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Foam strip for one door (all four sides)</span><span className="font-medium">£3–6</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Door sweep for external door</span><span className="font-medium">£5–12</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Whole house (external doors + windows)</span><span className="font-medium">£20–40</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Tradesperson would charge</span><span className="font-medium text-red-600">£80–150</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You know the different types of draught seal, how to choose the right profile for your gap, and how to apply them so they last. This is one of the highest-return DIY jobs you can do — materials cost less than a takeaway and the saving on heating is immediate.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/fix-a-sticking-door" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fix a sticking door →</a>
            <a href="/guides/fix-a-loose-door-handle" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fix a loose door handle →</a>
            <a href="/guides/fill-a-hole-in-a-wall" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fill a hole in a wall →</a>
          </div>
        </div>

        {GUIDE_META['draft-proof-door-window'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['draft-proof-door-window'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="draft-proof-door-window"
          relatedSlugs={['fix-a-sticking-door', 'fix-a-loose-door-handle', 'paint-a-room']}
        />
        <GuideActions slug="draft-proof-door-window">
          <GuideExtras slug="draft-proof-door-window" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="draft-proof-door-window" title="Stop a draught from a door or window" href="/guides/draft-proof-door-window" />
      <MobileNav />
    </main>
  )
}
