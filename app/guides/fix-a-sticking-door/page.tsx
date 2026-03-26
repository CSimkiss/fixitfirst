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
  title: 'How to Fix a Door That Won\'t Close Properly | FixItFirst',
  description: 'Fix a door that sticks, drags, or won\'t latch in under an hour. Covers dropped hinges, swollen wood, and latch alignment. Save £50–80 vs a carpenter.',
  openGraph: {
    title: 'How to Fix a Door That Won\'t Close Properly | FixItFirst',
    description: 'Fix a door that sticks, drags, or won\'t latch in under an hour. Covers dropped hinges, swollen wood, and latch alignment. Save £50–80 vs a carpenter.',
    url: 'https://fixit-first.co.uk/guides/fix-a-sticking-door',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Identify exactly what the door is doing',
    description: 'Close the door slowly and watch where it fails. There are three distinct problems that look similar but have different causes. First, dragging or sticking — the door catches the frame at one point and needs force to close. Second, not latching — the door closes easily but the latch bolt does not catch in the keep (the plate on the frame). Third, bouncing back — the door closes but springs open again on its own. Identifying which you have before touching anything tells you where to look. Why: a door that drags needs a different fix to a door that does not latch. Doing the wrong repair wastes time and can make things worse.',
  },
  {
    title: 'Check and tighten all hinge screws first',
    description: 'Before sanding or adjusting anything, check every screw in every hinge — top and bottom. Tighten each one fully with the correct screwdriver. If a screw turns freely without tightening, the hole is stripped — pack it with a matchstick dipped in wood glue, let it set for 30 minutes, then retighten. Why: a dropped top hinge is the single most common cause of a sticking door. The top of the door drops toward the frame, causing it to drag at the top hinge side and lift at the latch side. Tightening one loose screw fixes this entirely — and it costs nothing. Check this before doing anything more involved.',
  },
  {
    title: 'Mark the sticking point accurately',
    description: 'If hinge tightening did not fix it, you need to know exactly where the door is sticking. Rub a light coat of chalk or pencil marks on the door edge along the area you think is sticking. Close the door firmly, then open it. The chalk will transfer onto the frame wherever the door is in contact. Alternatively, slide a piece of paper around the door edge when it is closed — where it grips and tears is where the door is tight. Why: sanding in the wrong place takes off material you cannot put back. The chalk or paper method takes 30 seconds and removes all guesswork.',
  },
  {
    title: 'Sand the sticking point back in small passes',
    description: 'With the door removed from its hinges (tap the hinge pins out upward with a screwdriver and mallet), sand the marked sticking area with 80-grit sandpaper, working in the direction of the wood grain. Take off a small amount — 0.5mm — then rehang and test. Repeat until the door just clears the frame without dragging. Why: it is much easier to remove more material than to add it back. Taking multiple small passes means you stop at the right point. Removing too much in one pass leaves a visible gap that lets draughts in.',
  },
  {
    title: 'Adjust the keep if the door does not latch',
    description: 'If the door closes without dragging but the latch bolt does not click into the keep, the keep is in the wrong position. Examine where the latch hits — if you can see a mark on the edge of the keep, it shows whether the bolt is hitting too high, too low, or in front. For minor misalignment (under 3mm): file the opening in the keep slightly in the direction needed using a metal file. For larger misalignment: unscrew the keep, chisel the recess slightly in the direction needed, and refit. Why: keeps shift slightly as door frames move with temperature and age. A 2mm repositioning is often all that is needed and takes less time than any other repair.',
  },
  {
    title: 'Seal any bare sanded wood before finishing',
    description: 'Wherever you have sanded through the paint or varnish down to bare wood, apply a coat of primer or wood primer/sealer before repainting. Do not leave bare wood exposed. Why: bare wood absorbs moisture from the air and swells. A door you have just fixed will start sticking again within weeks if the sanded area is not sealed. This step takes five minutes and makes the difference between a lasting repair and one that fails before the next wet winter.',
  },
]

export default function FixAStickingDoor() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a door that won&apos;t close properly</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £50–80 in 45 mins — no carpenter needed</p>
        <p className="text-gray-600 mb-6">Doors that stick, drag, or refuse to latch are almost always caused by loose hinges or swollen wood. Both are quick fixes if you work through the causes in the right order.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-sticking-door'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a door that won't close properly" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-sticking-door" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Doors fail to close properly for three reasons: loose hinges (most common — causes dragging), swollen wood from humidity (causes seasonal sticking), or a shifted door frame (causes the latch to miss the keep).</p>
          <p className="text-sm text-gray-700 mb-2">Always check the hinges first. A single loose screw on the top hinge is the cause in around half of all cases — and takes 30 seconds to fix.</p>
          <p className="text-sm text-gray-700">You do not need to remove the door to tighten hinges or adjust the keep. Removal is only needed if you have to sand the door edge.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Flat-head screwdriver', hint: 'to tighten hinge screws and tap out hinge pins', toolId: 'screwdriver-flat' },
            { icon: 'check', name: 'Cross-head screwdriver', hint: 'some hinges and keeps use cross-head screws', toolId: 'screwdriver-cross' },
            { icon: 'check', name: 'Mallet', hint: 'to tap hinge pins out when removing the door', toolId: 'mallet' },
            { icon: 'buy', name: '80-grit sandpaper', hint: 'only needed if hinge tightening does not fix it', hintOrange: true },
            { icon: 'buy', name: 'Wood primer or paint', hint: 'to seal any bare wood after sanding', hintOrange: true },
          ]}
          slug="fix-a-sticking-door"
          guideName="Fix a door that won't close properly"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-sticking-door']} />
        <StepProgress steps={steps} slug="fix-a-sticking-door" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Reaching for sandpaper before checking the hinges.</strong> Sanding is irreversible. Check every hinge screw first — this fixes more than half of all sticking doors at no cost.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Removing too much material in one pass.</strong> Sand a little, rehang, test, sand a little more. A door with too much material removed has a visible gap and lets in draughts permanently.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Not marking the exact sticking point.</strong> Sanding in the wrong place takes off wood you cannot put back. Use chalk or paper to locate the contact point precisely before sanding anything.</p>
          <p className="text-sm text-yellow-900"><strong>Skipping the sealing step.</strong> Bare sanded wood swells with moisture. The door will stick again within weeks. Prime and paint any area you have sanded before the next rain.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a carpenter if...</h2>
          <p className="text-sm text-red-900 mb-1">The door frame is visibly warped, cracked, or no longer square — frame replacement is specialist work</p>
          <p className="text-sm text-red-900 mb-1">The door sticks all the way around, not just at one point — this suggests a structural shift in the building</p>
          <p className="text-sm text-red-900">The hinge screws pull straight out of the frame — the timber behind is rotten or soft and needs replacing before hinges can hold</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Tighten hinges only</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">With sandpaper and primer</span><span className="font-medium">£5–10</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Carpenter would charge</span><span className="font-medium text-red-600">£50–80</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You understand why doors stick and how to work through the causes in the right order — hinges first, marking second, sanding last. These skills transfer to adjusting door frames, fitting new hinges, and eventually hanging new internal doors.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/fix-a-loose-door-handle" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fix a loose door handle →</a>
            <a href="/guides/draft-proof-door-window" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Stop a draught →</a>
            <a href="/guides/fit-bathroom-fixtures" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fit bathroom fixtures →</a>
          </div>
        </div>

        {GUIDE_META['fix-a-sticking-door'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-sticking-door'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="fix-a-sticking-door"
          relatedSlugs={['fix-a-loose-door-handle', 'draft-proof-door-window', 'fill-a-hole-in-a-wall']}
        />
        <GuideActions slug="fix-a-sticking-door">
          <GuideExtras slug="fix-a-sticking-door" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="fix-a-sticking-door" title="Fix a door that won't close properly" href="/guides/fix-a-sticking-door" />
      <MobileNav />
    </main>
  )
}
