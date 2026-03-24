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
  title: 'How to Prep Bathroom Plumbing (Before Renovation) | FixItFirst',
  description: 'Learn how to safely isolate your water supply, disconnect existing fittings, and prepare pipe ends before bathroom renovation. Save £100–300 vs calling a plumber.',
  openGraph: {
    title: 'How to Prep Bathroom Plumbing (Before Renovation) | FixItFirst',
    description: 'Learn how to safely isolate your water supply, disconnect existing fittings, and prepare pipe ends before bathroom renovation. Save £100–300 vs calling a plumber.',
    url: 'https://fixit-first.co.uk/guides/prep-bathroom-plumbing',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Turn off the water supply',
    description: 'Find the isolation valves on the hot and cold supply pipes under the basin or behind the toilet. Turn each valve 90 degrees so the slot sits across the pipe — that means closed. If there are no isolation valves, turn off the main stop cock (usually under the kitchen sink or where the water enters the house). Why: any water still in the system under pressure will spray out the moment you loosen a connection. Isolating first keeps you in control.',
  },
  {
    title: 'Drain the remaining water',
    description: 'Even after isolation, there is water sitting in the pipes and the tap bodies. Turn the taps on fully — hot and cold — and let them run until the flow stops. Place a bucket under any connection you plan to open. There will still be residual water when you disconnect, so have cloths ready too. Why: draining removes the water you can see. It also confirms the isolation valves are actually holding — if water keeps flowing freely, the valve is not seating properly.',
  },
  {
    title: 'Disconnect the tap connections',
    description: 'Use your adjustable spanner to loosen the compression fitting or push-fit cap where the supply pipe meets the tap tail — turning anticlockwise. These connections are often awkward to reach under a basin, so use a basin wrench or extend your spanner if needed. Have your bucket positioned directly underneath before you start. Once loose, pull the pipe clear and immediately point it into the bucket. Why: disconnecting in the right order (supply first, waste last) keeps any remaining water draining down rather than flooding the cabinet.',
  },
  {
    title: 'Cap or secure exposed pipe ends',
    description: 'Once a pipe is disconnected, protect the open end immediately. For push-fit pipes, use a push-fit blanking cap — they click on in seconds. For compression fittings, fit a compression stop-end. If you are not refitting the same day, wrap the end with PTFE tape and a cable tie as a temporary cover. Why: an uncapped pipe is an open invitation for debris, insects, and accidental contact. A capped pipe also means you can safely turn the water back on to the rest of the house if needed.',
  },
  {
    title: 'Check for leaks',
    description: 'With all caps in place, briefly turn the main water supply back on (if you used the stop cock) to confirm the caps are holding. Check each capped end and the connections you did not touch — look for drips, damp spots, or water stains that were not there before. Run your finger around each joint and check it on a dry cloth. Why: discovering a weeping cap now costs you nothing. Discovering it two days later, after tiling has started, can mean removing work and dealing with water damage.',
  },
  {
    title: 'Clean and prepare the pipe areas',
    description: 'Wipe down all exposed pipe surfaces with a dry cloth. Remove any old PTFE tape, jointing compound, or limescale from pipe threads and fitting faces. Use fine abrasive cloth if needed on compression fitting seats. Check the condition of the pipes — look for pitting, greenish corrosion, or soft spots on copper. Mark anything that concerns you with a bit of tape and a note before the next phase starts. Why: clean pipe surfaces make for better seals when new fittings go on. Spotting corrosion now is far easier than noticing a leak after everything is boxed in.',
  },
]

export default function PrepBathroomPlumbing() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Prep bathroom plumbing (before renovation)</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £100–300 in under 90 mins — no plumber needed</p>

        <p className="text-gray-600 mb-6">Most people call a plumber just to disconnect a basin and cap some pipes. This is straightforward prep work — and doing it yourself means you understand exactly what you are passing to the next phase.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['prep-bathroom-plumbing'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Prep bathroom plumbing (before renovation)" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="prep-bathroom-plumbing" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide covers basic plumbing prep only — isolating, disconnecting, and capping. It does <strong>not</strong> cover moving pipes, installing new supply runs, or working with the boiler.</p>
          <p className="text-sm text-gray-700 mb-2">You will need the water supply turned off before any connections are opened. Know where your stop cock is before you start.</p>
          <p className="text-sm text-gray-700 mb-2">Be aware of pipes hidden inside walls or under floors — this guide is for exposed supply and waste pipes under a basin or behind a toilet.</p>
          <p className="text-sm text-gray-700">If you rent, get written permission before disconnecting any plumbing — see the renter notice below.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Adjustable spanner', hint: 'for compression fittings and tap connections', toolId: 'adjustable-spanner' },
            { icon: 'check', name: 'Bucket', hint: 'catch residual water from disconnected pipes', toolId: 'bucket' },
            { icon: 'check', name: 'Rubber gloves', hint: 'keep your hands dry and protected', toolId: 'rubber-gloves' },
            { icon: 'check', name: 'Sponge / cloths', hint: 'mop up drips before they spread', toolId: 'sponge-cloths' },
            { icon: 'buy', name: 'PTFE tape', hint: 'buy from any hardware shop — cheap and essential', hintOrange: true },
            { icon: 'buy', name: 'Push-fit blanking caps', hint: 'to seal open pipe ends safely', hintOrange: true },
          ]}
          slug="prep-bathroom-plumbing"
          guideName="Prep bathroom plumbing"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['prep-bathroom-plumbing']} />
        <StepProgress steps={steps} slug="prep-bathroom-plumbing" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Not fully isolating the water.</strong> Turning an isolation valve halfway is not off. The slot must sit across the pipe — at 90 degrees to the pipe run. Always confirm by opening the tap and waiting for the flow to stop completely.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Over-tightening compression fittings.</strong> Compression fittings seal by squashing a small olive ring — not by brute force. Finger-tight plus one quarter turn with a spanner is enough. Going further deforms the olive and creates leaks rather than preventing them.</p>
          <p className="text-sm text-yellow-900"><strong>Ignoring slow drips from capped pipes.</strong> A drip that looks minor now is water under pressure finding the weakest point. Check every capped end before moving on. A dripping cap means the cap is not fully seated or the pipe end is damaged.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">The pipes run inside the wall and you cannot access the fittings without opening up the structure</p>
          <p className="text-sm text-red-900 mb-1">A leak does not stop after capping — water is finding a path through a corroded or cracked section</p>
          <p className="text-sm text-red-900 mb-1">You find green or white powdery corrosion on copper pipes — pitting corrosion means the pipe wall is compromised</p>
          <p className="text-sm text-red-900">The main stop cock will not close fully — do not proceed until the water can be properly isolated</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">You already have the tools</span><span className="font-medium">£0–10</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Need to buy tools too</span><span className="font-medium">£10–40</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£100–300</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-2">You can now confidently isolate a water system, disconnect supply connections without flooding the room, and leave exposed pipe ends safely capped and ready for the next phase.</p>
          <p className="text-sm text-orange-900 mb-3">More importantly, you know how to check your work — confirming the isolation holds and the caps are seated — before moving on. That is the habit that separates a successful DIY renovation from an expensive callback.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/fix-a-dripping-tap" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fit new taps →</a>
            <a href="/guides/fix-a-leaking-pipe-joint" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fix pipe joints →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation Phase 2 →</a>
          </div>
        </div>

        {/* ── Continue your renovation ─────────────────────────────────────── */}
        <div className="bg-gray-950 text-white rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-white mb-4">Continue your renovation</h2>
          <div className="space-y-2 mb-5">
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-base">✅</span>
              <span className="text-green-300 text-sm font-medium">Phase 1: Strip Out — Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-base">✅</span>
              <span className="text-green-300 text-sm font-medium">Phase 2: Plumbing Prep — Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-400 text-base">👉</span>
              <span className="text-white text-sm font-medium">Phase 3: Wall Prep — next up</span>
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
              href="/guides/fill-a-hole-in-a-wall"
              className="border border-white/20 text-gray-300 hover:bg-white/10 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              Start Phase 3 →
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center mb-3">Most people would call a plumber for this prep work.</p>
        {GUIDE_META['prep-bathroom-plumbing'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['prep-bathroom-plumbing'].renterWarning}</p>
          </div>
        )}
        <GuideActions slug="prep-bathroom-plumbing">
          <GuideExtras slug="prep-bathroom-plumbing" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="prep-bathroom-plumbing" title="Prep bathroom plumbing (before renovation)" href="/guides/prep-bathroom-plumbing" />
      <MobileNav />
    </main>
  )
}
