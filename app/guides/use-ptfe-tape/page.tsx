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
  title: 'How to Use PTFE Tape on Plumbing Fittings | FixItFirst',
  description: 'Apply PTFE tape correctly to threaded plumbing fittings. One small mistake — wrong direction or not enough turns — causes leaks. Learn the right technique in 10 minutes.',
  openGraph: {
    title: 'How to Use PTFE Tape on Plumbing Fittings | FixItFirst',
    description: 'Apply PTFE tape correctly to threaded plumbing fittings. One small mistake — wrong direction or not enough turns — causes leaks. Learn the right technique in 10 minutes.',
    url: 'https://fixit-first.co.uk/guides/use-ptfe-tape',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Clean and dry the thread',
    description: 'Before applying tape, make sure the male thread (the one you are wrapping) is clean and dry. Any grease, old sealant, or moisture under the tape creates gaps that the tape cannot fill. Wipe with a dry cloth if needed. Why: PTFE tape fills the micro-gaps between two mating threads. If there is contamination on the thread, the tape bridges over it rather than pressing into the thread profile, and the seal is incomplete before you even start.',
  },
  {
    title: 'Start the tape at the base of the thread and wind clockwise',
    description: 'Hold the thread so it points away from you. Start the tape at the base of the thread — the end nearest where the fitting will mate — and wind it clockwise as you look at the thread end. This is the critical direction: clockwise means the tape tightens into the thread as you screw the fitting on. Why: if you wind anti-clockwise, tightening the fitting unwinds the tape and bunches it up at the thread entrance rather than sealing the profile. A backwards wrap causes a leak every time.',
  },
  {
    title: 'Apply 2–4 turns with slight tension',
    description: 'Apply 2–3 turns for most standard fittings (15mm or 22mm domestic water fittings). Apply 3–4 turns for older or slightly worn threads. As you wind, pull the tape slightly so it stretches and presses into the thread — it should look white and tight, not loose and opaque. Overlap each turn by about a third of the tape width. Why: the right number of turns matters. Too few leaves gaps at the thread crests. Too many creates a thick layer that makes the fitting difficult to tighten fully and can crack plastic fittings. Two to three turns of stretched tape gives a better seal than four turns of loose tape.',
  },
  {
    title: 'Tear the tape cleanly and press down the end',
    description: 'Once you have enough turns, tear the tape — a sharp pull at an angle tears PTFE cleanly. Press the tape end down firmly with your thumb so it lays flat against the thread rather than flopping free. Why: a loose tape end gets folded as the fitting is screwed on and can create a raised lump on the thread that stops the fitting seating fully.',
  },
  {
    title: 'Tighten the fitting and check for leaks',
    description: 'Screw the fitting on by hand until it is snug, then tighten with a spanner — for most domestic fittings, one quarter to one half turn past hand-tight is enough. Restore the water supply slowly and watch the fitting for 60 seconds. A correctly taped fitting is dry immediately. Why: PTFE does the sealing — not the tightening force. Over-tightening crushes the tape and can crack the fitting or strip the thread. The tape is already doing its job once the fitting is snug.',
  },
]

export default function UsePtfeTape() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Use PTFE tape properly</h1>
        <p className="text-4xl font-black text-green-600 mb-1">10 minutes — the right way to seal threaded fittings</p>

        <p className="text-gray-600 mb-6">PTFE tape is used on every threaded plumbing connection. Most leaks come from applying it wrong — wrong direction, too few turns, or not stretched in. This guide fixes that.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['use-ptfe-tape'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Use PTFE tape properly" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="use-ptfe-tape" />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
          <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-1">Part of the Bathroom Renovation project</p>
          <p className="text-sm text-gray-700 mb-2">This is a <strong>Phase 2: Plumbing Prep</strong> skill in the full bathroom renovation walkthrough.</p>
          <a href="/projects/bathroom-renovation" className="text-sm font-semibold text-orange-600 hover:underline">
            If you&apos;re renovating your bathroom, start here →
          </a>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">PTFE tape is used on threaded connections only — not on compression fittings (the type with a nut and olive). Check your fitting type before applying tape.</p>
          <p className="text-sm text-gray-700">Turn off the water supply before working on any live fitting. Even with the supply off, there will be water in the pipes — have a cloth ready.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'PTFE tape', hint: 'white plumber\'s tape — the standard roll is fine for most fittings', toolId: 'ptfe-tape' },
            { icon: 'check', name: 'Adjustable spanner', hint: 'to tighten the fitting after taping', toolId: 'adjustable-spanner' },
          ]}
          slug="use-ptfe-tape"
          guideName="Use PTFE tape"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['use-ptfe-tape']} />
        <StepProgress steps={steps} slug="use-ptfe-tape" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Winding anti-clockwise.</strong> This is the most common mistake. As you screw the fitting on, an anti-clockwise wrap unwinds rather than tightening into the thread. Always wind clockwise as you look at the thread end.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Applying tape to compression fittings.</strong> Compression fittings (nut + olive) seal mechanically — they do not have threads that need tape. Adding tape to them prevents the olive from seating correctly and can actually cause leaks.</p>
          <p className="text-sm text-yellow-900"><strong>Too many loose turns.</strong> Four or five loose turns of tape is worse than two stretched turns. The tape needs to be in the thread profile, not layered on top of itself.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">If it still leaks after taping...</h2>
          <p className="text-sm text-red-900 mb-1">Remove the fitting, clean the thread, and re-tape — do not try to tighten further as this risks cracking the fitting</p>
          <p className="text-sm text-red-900">A fitting that weeps even after correct taping may have a damaged or corroded thread — replace the fitting rather than attempting to patch it</p>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You know how to apply PTFE tape correctly — the right direction, the right number of turns with the right tension. This is the single most-used technique in basic plumbing and will serve you on every water connection you ever make.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/prep-bathroom-plumbing" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Plumbing prep →</a>
            <a href="/guides/cap-pipe" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Cap off a pipe →</a>
            <a href="/guides/fix-a-dripping-tap" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fix a dripping tap →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation →</a>
          </div>
        </div>

        {GUIDE_META['use-ptfe-tape'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['use-ptfe-tape'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="use-ptfe-tape"
          relatedSlugs={['prep-bathroom-plumbing', 'fix-a-leaking-pipe-joint']}
        />
        <GuideActions slug="use-ptfe-tape">
          <GuideExtras slug="use-ptfe-tape" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="use-ptfe-tape" title="Use PTFE tape properly" href="/guides/use-ptfe-tape" />
      <MobileNav />
    </main>
  )
}
