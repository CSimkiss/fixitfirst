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
  title: 'How to Fix a Running Toilet (Won\'t Stop Filling) | FixItFirst',
  description: 'Stop a toilet that keeps running after flushing. Covers float adjustment and flapper replacement. Save £80–150 vs a plumber in under an hour.',
  openGraph: {
    title: 'How to Fix a Running Toilet (Won\'t Stop Filling) | FixItFirst',
    description: 'Stop a toilet that keeps running after flushing. Covers float adjustment and flapper replacement. Save £80–150 vs a plumber in under an hour.',
    url: 'https://fixit-first.co.uk/guides/fix-a-running-toilet',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Remove the tank lid and identify the fault',
    description: 'Lift the lid off the tank (cistern — the box behind or above your toilet that stores water before flushing) and set it down carefully on a towel. Flush the toilet and watch what happens inside. There are two things that cause a running toilet: the float set too high (water reaches the overflow pipe before the fill valve shuts off), or a flapper valve that will not seat properly (water leaks from the tank into the bowl continuously). To tell them apart: lift the float arm (the plastic arm attached to a ball or cup that rises as the tank fills) upward with your hand. If the water immediately stops, the float is the problem. If water keeps running, the flapper valve (the rubber seal at the bottom of the tank) is not sealing. Why: identifying which fault you have before doing anything avoids buying parts you do not need and fixes the right thing first time.',
  },
  {
    title: 'Adjust the float if it is set too high',
    description: 'The float (a plastic ball or cup on the end of an arm) rises as the tank fills and triggers the fill valve (the valve that controls water flowing into the tank) to shut off when the water reaches the right level. If the float is set too high, the water reaches the overflow pipe (the tall safety pipe inside the tank — if water gets this high it drains outside the house) before the valve closes, and runs continuously. You will hear this as a trickle from a pipe on the outside wall of your house. On older ballvalves (float mechanisms with a visible hollow ball on a metal arm), gently bend the float arm downward so the water cuts off at a lower level. On modern ballvalves, there is a plastic adjustment screw or clip on the side of the fill valve — turn it to lower the cutoff point. The correct water level is 25mm below the top of the overflow pipe. Why: this is one of the most common causes of a running toilet and requires no parts — just an adjustment. Do not skip this step even if you suspect the flapper.',
  },
  {
    title: 'Press on the flapper to test it',
    description: 'If adjusting the float did not fix the problem, press firmly on the rubber flapper valve at the bottom of the tank with your hand while the toilet is running. If the water stops when you press down, the flapper is not sealing properly — either it is warped, hardened with age, or there is grit or limescale preventing it from sitting flat. Remove the flapper and inspect it. Rinse it under the tap and clean the valve seat (the rim the flapper presses against to form the seal) with an old cloth. Refit and test. Why: a flapper costs £5–15 and takes 10 minutes to replace. But first check whether cleaning the seat fixes the seal — sometimes a piece of debris is the only issue and no new part is needed.',
  },
  {
    title: 'Replace the flapper if it is worn or warped',
    description: 'Turn off the isolation valve (the small slotted screw on the pipe behind the toilet — turn the slot 90° so it sits across the pipe). Flush to empty the tank. Unhook the old flapper — it clips onto two pegs on either side of the overflow tube (the central tall pipe inside the tank). Take the old flapper to a plumbers\' merchant (a specialist plumbing supplies shop) or hardware shop to match the size before buying a new one; flappers are not universal. Clip the new flapper onto the same pegs and hook the chain back onto the flush handle arm (the lever connected to the flush handle or button). The chain should have a little slack — about 1–2 links — but not so much that it gets trapped under the flapper. Why: a chain that is too tight holds the flapper open slightly, preventing a seal. Too much slack and the flapper does not lift fully when you flush.',
  },
  {
    title: 'Turn the water back on and check the fill level',
    description: 'Open the isolation valve (the slotted screw on the pipe behind the toilet) slowly — a quarter turn first, pause for 30 seconds, then fully open. Watch the tank fill. The water level must stop at least 25mm below the top of the overflow pipe (the tall safety pipe inside the tank). If it fills higher than that, adjust the float downward until the cutoff point is correct. Why: the gap between the water level and the overflow pipe is the safety margin. If the water level sits at or above the overflow pipe rim, any slight increase in pressure will cause it to run. The 25mm gap ensures it cannot overflow even if the fill valve is slow to shut.',
  },
  {
    title: 'Listen for 30 minutes after reassembling',
    description: 'Replace the tank lid. Stand outside the bathroom door and listen. A correctly fixed toilet is completely silent between flushes — no trickle, no hiss. A running toilet you can hear from across a room is wasting 200–400 litres of water per day. If you can hear anything after 30 minutes, re-check the flapper is seated flat and that the float is not set too high. Why: a new flapper sometimes takes a few minutes to fully seat as the rubber softens in the water. Give it time before deciding the fix has not worked.',
  },
]

function CisternDiagram() {
  return (
    <figure className="my-6">
      <figcaption className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Inside the toilet tank (cistern) — what each part does
      </figcaption>
      <svg
        viewBox="0 0 480 280"
        width="100%"
        height="auto"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Labelled diagram showing the inside of a toilet cistern with float valve, fill valve, flush valve, overflow pipe and water level"
      >
        {/* Cistern outer walls */}
        <rect x="120" y="25" width="220" height="215" rx="3" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />

        {/* Water body */}
        <rect x="122" y="158" width="216" height="80" fill="#dbeafe" opacity="0.75" />

        {/* Water level — dashed orange line */}
        <line x1="120" y1="158" x2="340" y2="158" stroke="#f97316" strokeWidth="1.5" strokeDasharray="6 3" />

        {/* Fill valve body — vertical tube on left inside wall */}
        <rect x="135" y="35" width="10" height="123" rx="2" fill="#94a3b8" />
        <circle cx="140" cy="35" r="6" fill="#64748b" />

        {/* Float arm — from fill valve pivot to float ball */}
        <line x1="145" y1="105" x2="296" y2="151" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />

        {/* Float ball */}
        <circle cx="296" cy="151" r="17" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />

        {/* Overflow pipe — central tall pipe */}
        <rect x="216" y="30" width="12" height="188" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />

        {/* Flush valve at bottom of overflow pipe */}
        <rect x="197" y="210" width="50" height="12" rx="2" fill="#94a3b8" />

        {/* Flapper — rubber seal at very bottom */}
        <ellipse cx="222" cy="228" rx="33" ry="6" fill="#64748b" />

        {/* ---- Labels ---- */}

        {/* Fill valve — left */}
        <line x1="135" y1="72" x2="88" y2="72" stroke="#f97316" strokeWidth="1" />
        <circle cx="88" cy="72" r="2" fill="#f97316" />
        <text x="5" y="68" fill="#f97316" fontSize="11" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">Fill</text>
        <text x="5" y="81" fill="#f97316" fontSize="11" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">valve</text>

        {/* Float valve — right */}
        <line x1="313" y1="151" x2="362" y2="128" stroke="#f97316" strokeWidth="1" />
        <circle cx="313" cy="151" r="2" fill="#f97316" />
        <text x="366" y="124" fill="#f97316" fontSize="11" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">Float</text>
        <text x="366" y="137" fill="#f97316" fontSize="11" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">valve</text>

        {/* Overflow pipe — top centre */}
        <line x1="228" y1="30" x2="270" y2="8" stroke="#f97316" strokeWidth="1" />
        <circle cx="228" cy="30" r="2" fill="#f97316" />
        <text x="274" y="8" fill="#f97316" fontSize="11" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">Overflow</text>
        <text x="274" y="21" fill="#f97316" fontSize="11" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">pipe</text>

        {/* Flush valve — bottom left */}
        <line x1="197" y1="216" x2="100" y2="235" stroke="#f97316" strokeWidth="1" />
        <circle cx="197" cy="216" r="2" fill="#f97316" />
        <text x="5" y="228" fill="#f97316" fontSize="11" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">Flush</text>
        <text x="5" y="241" fill="#f97316" fontSize="11" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">valve</text>

        {/* Water level — right */}
        <line x1="340" y1="158" x2="390" y2="158" stroke="#f97316" strokeWidth="1" />
        <text x="394" y="154" fill="#f97316" fontSize="11" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">Water</text>
        <text x="394" y="167" fill="#f97316" fontSize="11" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">level</text>
      </svg>
    </figure>
  )
}

function IsolationValveDiagram() {
  return (
    <figure className="my-6">
      <figcaption className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Where the isolation valve is — on the pipe behind the toilet
      </figcaption>
      <svg
        viewBox="0 0 340 160"
        width="100%"
        height="auto"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Diagram showing the location of the isolation valve on the pipe behind a toilet"
      >
        {/* Wall */}
        <rect x="0" y="0" width="22" height="160" fill="#e2e8f0" />
        <line x1="22" y1="0" x2="22" y2="160" stroke="#94a3b8" strokeWidth="1.5" />

        {/* Pipe from wall */}
        <rect x="22" y="68" width="78" height="14" rx="2" fill="#94a3b8" />

        {/* Isolation valve body */}
        <rect x="84" y="60" width="26" height="30" rx="3" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
        {/* Valve slot (the flat-head screw — turn 90° to close) */}
        <line x1="97" y1="65" x2="97" y2="85" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
        {/* Highlight ring */}
        <rect x="82" y="58" width="30" height="34" rx="4" fill="none" stroke="#f97316" strokeWidth="1.5" />

        {/* Pipe continues to cistern */}
        <rect x="110" y="68" width="75" height="14" rx="2" fill="#94a3b8" />

        {/* Toilet cistern (simplified box) */}
        <rect x="185" y="38" width="100" height="74" rx="4" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
        <text x="214" y="79" fill="#94a3b8" fontSize="10" fontFamily="ui-sans-serif,system-ui,sans-serif">Tank</text>
        {/* Pipe enters cistern */}
        <rect x="183" y="68" width="4" height="14" fill="#94a3b8" />

        {/* Toilet bowl below cistern */}
        <path d="M 200 112 Q 235 145 270 112" fill="none" stroke="#94a3b8" strokeWidth="2" />

        {/* Label: isolation valve */}
        <line x1="97" y1="60" x2="97" y2="32" stroke="#f97316" strokeWidth="1" />
        <text x="5" y="25" fill="#f97316" fontSize="12" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">Isolation valve</text>
        <text x="5" y="40" fill="#475569" fontSize="10" fontFamily="ui-sans-serif,system-ui,sans-serif">Turn slot 90° across pipe to shut water off</text>
      </svg>
    </figure>
  )
}

export default function FixARunningToilet() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a running toilet (won&apos;t stop filling)</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £80–150 — no plumber needed</p>
        <p className="text-gray-600 mb-6">A toilet that keeps running wastes 200–400 litres of water a day. It is almost always the float arm or the flapper valve — both are cheap and straightforward to fix.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-running-toilet'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a running toilet" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-running-toilet" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">A running toilet constantly trickles water into the bowl or down the overflow pipe after flushing. This is almost always one of two things: the float arm is set too high, or the flapper valve is not sealing.</p>
          <p className="text-sm text-gray-700 mb-2">You will be working inside the cistern — the tank at the back of the toilet that stores water before each flush. It contains only clean water. Nothing unpleasant.</p>
          <p className="text-sm text-gray-700">You do not need to turn off the mains supply. There is an isolation valve (a small slotted screw on the pipe behind the toilet) that controls just this tank.</p>
        </div>

        {/* Glossary */}
        <div className="border border-orange-200 rounded-xl p-5 mb-6 bg-orange-50">
          <h2 className="font-semibold text-orange-800 mb-3 text-sm">Quick glossary — plain English for the technical terms in this guide</h2>
          <dl className="space-y-2 text-sm">
            <div className="flex gap-2">
              <dt className="font-semibold text-gray-800 min-w-[130px] shrink-0">Cistern</dt>
              <dd className="text-gray-700">The tank behind or above the toilet that fills with water after each flush and stores it ready for the next one.</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-gray-800 min-w-[130px] shrink-0">Float / float arm</dt>
              <dd className="text-gray-700">A plastic ball or cup on the end of an arm. It floats on the surface and rises as the tank fills — when it reaches the right height it shuts off the fill valve.</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-gray-800 min-w-[130px] shrink-0">Fill valve</dt>
              <dd className="text-gray-700">The valve (usually on the side of the tank) that lets water in after a flush. The float arm controls when it opens and closes.</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-gray-800 min-w-[130px] shrink-0">Ballvalve</dt>
              <dd className="text-gray-700">An older style of fill valve where the float is a hollow metal or plastic ball on a long arm. Modern versions use a cup-shaped float on a vertical shaft instead.</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-gray-800 min-w-[130px] shrink-0">Flapper valve</dt>
              <dd className="text-gray-700">The rubber seal at the bottom of the tank. When you flush it lifts to let water into the bowl, then drops back down and seals so the tank can refill.</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-gray-800 min-w-[130px] shrink-0">Overflow pipe</dt>
              <dd className="text-gray-700">A safety pipe inside the tank. If the water level gets too high, water drains down this pipe and exits outside the house (the trickle you sometimes hear from an outside wall).</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-gray-800 min-w-[130px] shrink-0">Isolation valve</dt>
              <dd className="text-gray-700">A small valve on the pipe behind the toilet. Turn the slot in the screw head 90° so it sits across the pipe — this shuts off the water supply to just this toilet.</dd>
            </div>
          </dl>
        </div>

        <CisternDiagram />

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Towel or cloth', hint: 'to rest the cistern lid on and catch any drips' },
            { icon: 'check', name: 'Flat-head screwdriver', hint: 'for adjusting the isolation valve and some ballvalves', toolId: 'screwdriver-flat' },
            { icon: 'buy', name: 'Replacement flapper valve', hint: 'only needed if cleaning does not fix the seal — take the old one to match the size', hintOrange: true },
          ]}
          slug="fix-a-running-toilet"
          guideName="Fix a running toilet"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-running-toilet']} />
        <StepProgress steps={steps} slug="fix-a-running-toilet" />

        <IsolationValveDiagram />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Replacing the flapper before checking the float.</strong> The float adjustment costs nothing and takes 30 seconds. Check it first — it is the cause of roughly half of all running toilets.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Buying the wrong size flapper.</strong> Flappers are not universal. Take the old one to the shop to match it. A flapper that is slightly too small or too large will not seal properly.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Chain too tight or too loose.</strong> The flapper chain needs 1–2 links of slack. Too tight and the flapper stays slightly open; too loose and it gets trapped under the flapper during flushing.</p>
          <p className="text-sm text-yellow-900"><strong>Not turning off the isolation valve before removing the flapper.</strong> The tank will not stop refilling while the valve is open. Turn the slotted screw 90° across the pipe to shut it off first.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">The isolation valve (the slotted screw on the pipe behind the toilet) will not close — you will need a plumber to fit a new valve before any other work can be done</p>
          <p className="text-sm text-red-900 mb-1">Water is leaking from around the base of the toilet, not from the tank</p>
          <p className="text-sm text-red-900 mb-1">The tank will not stop filling even after adjusting the float all the way down — the fill valve itself may need replacing</p>
          <p className="text-sm text-red-900">The overflow pipe outside the house is discharging water continuously — this is a legal requirement to fix promptly</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Float arm adjustment only</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement flapper valve</span><span className="font-medium">£10–25</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£80–150</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You now understand how a toilet tank (cistern) works — the float arm, the fill valve, and the flapper. You can diagnose a running toilet, tell the difference between a float problem and a flapper problem, and fix both. These skills transfer directly to replacing a full fill valve assembly (ballvalve), fixing a slow-filling tank, and understanding your home&apos;s water system.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/replace-a-toilet-seat" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Replace a toilet seat →</a>
            <a href="/guides/fix-a-dripping-tap" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fix a dripping tap →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation →</a>
          </div>
        </div>

        {GUIDE_META['fix-a-running-toilet'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-running-toilet'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="fix-a-running-toilet"
          relatedSlugs={['fix-a-dripping-tap', 'replace-a-toilet-seat', 'fix-a-leaking-pipe-joint']}
        />
        <GuideActions slug="fix-a-running-toilet">
          <GuideExtras slug="fix-a-running-toilet" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="fix-a-running-toilet" title="Fix a running toilet" href="/guides/fix-a-running-toilet" />
      <MobileNav />
    </main>
  )
}
