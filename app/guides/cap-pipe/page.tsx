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
  title: 'How to Cap Off a Pipe Temporarily | FixItFirst',
  description: 'Cap off an exposed water pipe safely during a bathroom renovation. The right cap type for copper or plastic pipe, fitted correctly, so work can continue without leaks.',
  openGraph: {
    title: 'How to Cap Off a Pipe Temporarily | FixItFirst',
    description: 'Cap off an exposed water pipe safely during a bathroom renovation. The right cap type for copper or plastic pipe, fitted correctly, so work can continue without leaks.',
    url: 'https://fixit-first.co.uk/guides/cap-pipe',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Isolate the water supply and drain the pipe',
    description: 'Close the relevant isolation valve — the slot must sit across the pipe, at 90 degrees to the pipe run. Confirm it is fully closed by opening the nearest tap and waiting for flow to stop completely. Once isolated, open the lowest tap on that circuit (often a kitchen tap on the same run) to drain any remaining water from the pipe length. Have a bucket and cloth ready under the pipe end before you proceed. Why: even with the isolation valve closed, there is water sitting in the pipe between the valve and the open end. Draining it before you cap means you are fitting the cap onto a dry pipe end rather than fighting water pressure as you work.',
  },
  {
    title: 'Identify the pipe type and diameter',
    description: 'Look at the pipe material: copper pipe is orange-gold in colour and feels rigid. Plastic push-fit pipe is white or grey and has a slight give. The diameter (15mm is standard domestic hot and cold supply, 22mm is often the supply from the boiler or mains) determines what size cap you need. Why: copper and plastic pipes use different cap types. A compression cap (for copper) has a nut, a copper olive, and a cap body. A push-fit cap (for plastic or copper with a compatible system) simply pushes onto the pipe end and has an internal grab ring. Using the wrong type either will not fit or will not seal.',
  },
  {
    title: 'Prepare the pipe end',
    description: 'The pipe end needs to be cut cleanly and square — not crushed, burred, or at an angle. For copper: use a pipe cutter (preferred) or a hacksaw. If using a hacksaw, deburr the inside of the cut with a round file or the deburring tool on a pipe cutter. For plastic push-fit: cut with a sharp knife or pipe scissors — a hacksaw creates too many burrs. Why: compression caps seal against the pipe outer surface via an olive. Burred or deformed pipe ends prevent the olive from seating flat, creating a gap. Push-fit caps seal against both the outer and inner pipe surface — a rough cut lets water bypass the internal seal.',
  },
  {
    title: 'Fit the cap correctly for your pipe type',
    description: 'For compression (copper): slide the cap nut onto the pipe, then the olive, then hand-thread the cap body onto the nut. Tighten with a spanner — firm, not hard. One and a quarter turns past hand-tight is the standard. For push-fit (plastic or compatible copper): push the cap squarely and firmly onto the pipe end until it clicks and sits fully home. You should feel it pass over the internal grab ring. Why: compression fittings seal by the nut squashing the olive against the pipe outer surface. Under-tightening leaves a gap; overtightening deforms the olive and creates a gap by a different route. Push-fit caps are either fully home or they are not — a half-seated cap will fail under pressure.',
  },
  {
    title: 'Restore pressure slowly and check for drips',
    description: 'Reopen the isolation valve slowly — a quarter turn first, then wait 30 seconds, watching the cap and any joints in the vicinity. If dry, open fully. Watch the capped end for a full 60 seconds under pressure. Run your finger around the back of the cap and along the pipe just behind it. Any moisture, however slight, means the cap needs re-seating or re-fitting. Why: a drip that looks minor under first pressure may become a flow as the system warms up and pressure increases. Confirm the cap is dry under full pressure before moving on to the next phase.',
  },
]

export default function CapPipe() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cap off a pipe temporarily</h1>
        <p className="text-4xl font-black text-green-600 mb-1">15–20 minutes — leave pipes safe while renovation continues</p>

        <p className="text-gray-600 mb-6">After disconnecting a basin or removing a fixture, exposed pipe ends need capping so the water supply can be restored while other work continues. This is how to do it properly.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['cap-pipe'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Cap off a pipe temporarily" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="cap-pipe" />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
          <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-1">Part of the Bathroom Renovation project</p>
          <p className="text-sm text-gray-700 mb-2">This is a <strong>Phase 2: Plumbing Prep</strong> skill in the full bathroom renovation walkthrough.</p>
          <a href="/projects/bathroom-renovation" className="text-sm font-semibold text-orange-600 hover:underline">
            If you&apos;re renovating your bathroom, start here →
          </a>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide covers capping standard 15mm and 22mm domestic water supply pipes — the pipes that feed basins, toilets, and showers. It does not cover soil pipes, waste pipes, or gas pipes.</p>
          <p className="text-sm text-gray-700">You will need to know whether your pipes are copper or plastic before buying caps. The two types of cap fitting are different and not interchangeable.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Adjustable spanner', hint: 'for tightening compression fittings', toolId: 'adjustable-spanner' },
            { icon: 'check', name: 'PTFE tape', hint: 'for threaded cap connections', toolId: 'ptfe-tape' },
            { icon: 'check', name: 'Bucket', hint: 'to catch residual water from the pipe', toolId: 'bucket' },
            { icon: 'check', name: 'Cloths', hint: 'for mopping up and checking for drips', toolId: 'sponge-cloths' },
            { icon: 'buy', name: 'Pipe caps (correct type and size)', hint: 'compression for copper, push-fit for plastic — buy both 15mm and 22mm', hintOrange: true },
          ]}
          slug="cap-pipe"
          guideName="Cap off a pipe"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['cap-pipe']} />
        <StepProgress steps={steps} slug="cap-pipe" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Using the wrong cap type.</strong> Compression caps on plastic pipe (without a copper liner insert) will cut into the plastic and fail under pressure. Push-fit caps on copper that is not compatible with the system brand will not grip. Match cap to pipe.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Not draining the pipe before capping.</strong> Fitting a cap with water pressure behind it is difficult — the pressure pushes against the fitting as you try to tighten it. Drain the pipe first by opening a lower tap on the same circuit.</p>
          <p className="text-sm text-yellow-900"><strong>Treating a drip as acceptable.</strong> A drip under first pressure becomes a flow as the system heats up. A correctly fitted cap is dry immediately. If it drips, re-fit it.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">The pipe end is corroded, pitted, or deformed — a damaged pipe end will not seal reliably and the pipe needs cutting back to clean material</p>
          <p className="text-sm text-red-900 mb-1">You cannot identify the pipe type or the correct cap to use — buying the wrong fitting and forcing it is worse than leaving the water off while you get advice</p>
          <p className="text-sm text-red-900">Any cap drips after re-fitting — do not leave a pressurised dripping cap unattended overnight</p>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You can now safely cap off a water supply pipe — the right fitting for the pipe type, fitted correctly and tested under pressure. This means you can restore the water supply to the rest of the house while bathroom work continues, rather than leaving the whole supply off.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/prep-bathroom-plumbing" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Plumbing prep →</a>
            <a href="/guides/use-ptfe-tape" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Use PTFE tape →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation →</a>
          </div>
        </div>

        {GUIDE_META['cap-pipe'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['cap-pipe'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="cap-pipe"
          relatedSlugs={['prep-bathroom-plumbing', 'fix-a-leaking-pipe-joint']}
        />
        <GuideActions slug="cap-pipe">
          <GuideExtras slug="cap-pipe" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="cap-pipe" title="Cap off a pipe temporarily" href="/guides/cap-pipe" />
      <MobileNav />
    </main>
  )
}
