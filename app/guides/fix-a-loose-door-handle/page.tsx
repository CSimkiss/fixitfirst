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
  title: 'How to Fix a Loose Door Handle | FixItFirst',
  description: 'Tighten a loose or wobbly door handle in 15 minutes. Covers grub screws, through-bolts, and worn spindles. Save £40–80 vs a handyman.',
  openGraph: {
    title: 'How to Fix a Loose Door Handle | FixItFirst',
    description: 'Tighten a loose or wobbly door handle in 15 minutes. Covers grub screws, through-bolts, and worn spindles. Save £40–80 vs a handyman.',
    url: 'https://fixit-first.co.uk/guides/fix-a-loose-door-handle',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Identify how the handle is attached',
    description: 'Look at the base of the handle — the rose or backplate where it meets the door. You will find one of three attachment methods. First, a visible screw on the side of the handle neck (usually a small grub screw that needs an Allen key). Second, visible screws on the face of the rose or backplate (needs a cross-head or flat screwdriver). Third, a concealed fixing where the backplate snaps on and no screws are visible from the outside. For concealed fixings, look for a small notch at the edge of the backplate — insert a flat screwdriver to pop it off and expose the screws behind. Why: different handle types require completely different tools and approaches. Identifying the type before starting means you have the right tool ready.',
  },
  {
    title: 'Tighten the grub screw or backplate screws',
    description: 'For grub screws: find the small hole in the handle neck (often underneath the lever, where it is not visible in normal use). Insert the correct Allen key — most UK handles use 2.5mm or 3mm. Turn clockwise until firm. Do not overtighten — the screw point digs into the spindle and can strip the spindle surface if overdone. For backplate screws: remove the backplate by unscrewing the face screws, then tighten the fixing screws on the door itself. Replace the backplate and tighten its face screws. Why: both grub screws and backplate screws work loose through repeated opening and closing of the door. The fix is almost always just tightening — no new parts needed.',
  },
  {
    title: 'Check the spindle if tightening does not fix the wobble',
    description: 'The spindle is the square metal bar that passes through the door and connects the two handles. Pull the handle away from the door slightly while turning it — if it moves away from the door more than 1–2mm, the spindle may be the wrong length or worn. A spindle that is too short does not engage the latch mechanism properly; a worn spindle has rounded corners that slip in the handle socket. To check: remove the handle completely (unscrew the backplate or extract the grub screw and slide the handle off). Inspect the square end of the spindle for wear. Why: a worn or incorrect-length spindle cannot be fixed by tightening — it needs replacing. Spindles are cheap (£3–8) and available at any hardware shop.',
  },
  {
    title: 'Replace the spindle if it is worn',
    description: 'With the handle removed on both sides of the door, slide the old spindle out through the door (it just pushes through the latch mechanism). Measure its length and cross-section (most UK interior door spindles are 8mm square). Buy a matching replacement. Insert the new spindle through the door, refit both handles, and tighten the fixings. Test the latch — it should engage and retract smoothly with the lever. Why: replacing the spindle restores the correct relationship between handle and latch. A new spindle costs less than £5 and takes five minutes to fit. Many loose handles that have been repeatedly tightened without success are actually a worn spindle problem.',
  },
  {
    title: 'Re-fix a handle where the screws are pulling out of the door',
    description: 'If the screws are loose because the holes in the door have been stripped, tightening them will not hold. Remove the screws, pack the holes with wooden cocktail sticks or matchsticks dipped in wood glue, let it dry for an hour, then refit the screws. The wood filler gives the thread something new to bite into. Alternatively, use slightly larger diameter screws. Why: stripped screw holes are common in hollow-core interior doors, where the thin veneer offers minimal grip for screws. The cocktail stick method is a reliable fix — it is stronger than the original because it fills the damaged threads completely.',
  },
]

export default function FixALooseDoorHandle() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a loose door handle</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £40–80 in 15 mins — no handyman needed</p>
        <p className="text-gray-600 mb-6">A wobbly door handle is almost always a loose grub screw or a stripped fixing. Both take minutes to sort. This guide gets it done properly so it does not come loose again.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-loose-door-handle'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a loose door handle" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-loose-door-handle" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide covers lever door handles on interior doors — the most common type in UK homes. The same principles apply to round knob handles, though the fixings may differ slightly.</p>
          <p className="text-sm text-gray-700 mb-2">Check whether the handle is loose (wobbles at the fixing point) or the latch is not engaging properly (the door does not click shut or does not latch when you release the lever). This guide fixes the handle fixings — a latch that does not engage is a door alignment problem.</p>
          <p className="text-sm text-gray-700">No need to remove the door for this job.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Allen key set (hex keys)', hint: 'essential — most UK door handles use 2.5mm or 3mm', toolId: 'allen-keys' },
            { icon: 'check', name: 'Cross-head screwdriver', hint: 'for handles with visible backplate screws', toolId: 'screwdriver-cross' },
            { icon: 'check', name: 'Flat-head screwdriver', hint: 'for popping off concealed backplates', toolId: 'screwdriver-flat' },
            { icon: 'buy', name: 'Replacement spindle (if worn)', hint: '8mm square x 70mm is the most common UK interior size — measure yours first', hintOrange: true },
          ]}
          slug="fix-a-loose-door-handle"
          guideName="Fix a loose door handle"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-loose-door-handle']} />
        <StepProgress steps={steps} slug="fix-a-loose-door-handle" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Not finding the grub screw.</strong> Grub screws are deliberately hidden — look underneath the handle lever, at the side closest to the door, or concealed under a small plastic cap. Use a torch if the area is dark.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Using the wrong Allen key size.</strong> A key that is slightly too small will round off the grub screw head, making it impossible to tighten. Test the fit before applying force — it should be snug with no play.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Overtightening the grub screw.</strong> The screw tip bites into the spindle — a little goes a long way. Firm is enough; hard risks stripping the spindle or cracking a plastic handle body.</p>
          <p className="text-sm text-yellow-900"><strong>Tightening a handle that is on the wrong spindle.</strong> If the spindle is too short or the wrong size, tightening the grub screw will not fix the wobble. Check spindle engagement before tightening.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">When to replace rather than repair</h2>
          <p className="text-sm text-red-900 mb-1">The handle body is cracked or the lever is bent — tightening will not fix structural damage</p>
          <p className="text-sm text-red-900 mb-1">The latch mechanism inside the door is worn and will not retract or spring back — the latch case needs replacing, not the handle</p>
          <p className="text-sm text-red-900">The door is heavily warped and the latch does not line up with the keep — this is a door alignment or fitting problem</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Tighten existing screw (already have Allen keys)</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement spindle</span><span className="font-medium">£3–8</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Full handle replacement</span><span className="font-medium">£15–50</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Handyman would charge</span><span className="font-medium text-red-600">£40–80</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You understand how door handles are fixed — grub screws, backplate fixings, and spindles. You can diagnose whether a loose handle needs tightening, a spindle replacing, or new fixings in stripped holes. These skills transfer to fitting new door handles throughout your home and understanding how door furniture works.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/fix-a-sticking-door" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fix a sticking door →</a>
            <a href="/guides/fix-a-broken-cabinet-hinge" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fix a broken cabinet hinge →</a>
            <a href="/guides/fit-bathroom-fixtures" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fit bathroom fixtures →</a>
          </div>
        </div>

        {GUIDE_META['fix-a-loose-door-handle'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-loose-door-handle'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="fix-a-loose-door-handle"
          relatedSlugs={['fix-a-sticking-door', 'fix-a-broken-cabinet-hinge', 'fit-bathroom-fixtures']}
        />
        <GuideActions slug="fix-a-loose-door-handle">
          <GuideExtras slug="fix-a-loose-door-handle" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="fix-a-loose-door-handle" title="Fix a loose door handle" href="/guides/fix-a-loose-door-handle" />
      <MobileNav />
    </main>
  )
}
