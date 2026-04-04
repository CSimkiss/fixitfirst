import type { Metadata } from 'next'
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

function CisternKnowDiagram() {
  return (
    <figure className="my-4">
      <svg
        viewBox="0 0 520 310"
        width="100%"
        height="auto"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Labelled diagram of a toilet cistern showing the float, fill valve, overflow tube, flush valve and handle mechanism"
      >
        {/* Cistern outer walls */}
        <rect x="110" y="20" width="230" height="240" rx="4" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />

        {/* Water body */}
        <rect x="112" y="162" width="226" height="96" fill="#dbeafe" opacity="0.7" />

        {/* Water level dashed line */}
        <line x1="110" y1="162" x2="340" y2="162" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="5 3" />

        {/* Fill valve — vertical tube on left inner wall */}
        <rect x="125" y="30" width="11" height="132" rx="2" fill="#94a3b8" />
        <circle cx="130" cy="30" r="7" fill="#64748b" />

        {/* Float arm */}
        <line x1="136" y1="108" x2="298" y2="156" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />

        {/* Float ball */}
        <circle cx="298" cy="156" r="19" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />

        {/* Overflow tube — central tall pipe */}
        <rect x="213" y="26" width="13" height="200" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />

        {/* Flush valve seat */}
        <rect x="193" y="218" width="53" height="13" rx="2" fill="#94a3b8" />
        {/* Flapper */}
        <ellipse cx="219" cy="237" rx="35" ry="7" fill="#64748b" />

        {/* Handle mechanism — right wall */}
        {/* Handle lever pivot on right wall */}
        <circle cx="338" cy="55" r="5" fill="#64748b" stroke="#475569" strokeWidth="1.5" />
        {/* External handle stub going right */}
        <rect x="338" y="50" width="22" height="10" rx="3" fill="#94a3b8" />
        {/* Internal lever arm going down-left to flush valve chain attach */}
        <line x1="338" y1="58" x2="260" y2="100" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        {/* Chain from lever end to flush valve */}
        <line x1="260" y1="100" x2="224" y2="220" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2" />

        {/* ---- Labels ---- */}

        {/* Float — right */}
        <line x1="317" y1="152" x2="365" y2="130" stroke="#f97316" strokeWidth="1" />
        <circle cx="317" cy="152" r="2" fill="#f97316" />
        <text x="369" y="127" fill="#f97316" fontSize="11.5" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">Float</text>

        {/* Fill valve — left */}
        <line x1="125" y1="70" x2="75" y2="70" stroke="#f97316" strokeWidth="1" />
        <circle cx="75" cy="70" r="2" fill="#f97316" />
        <text x="2" y="66" fill="#f97316" fontSize="11.5" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">Fill</text>
        <text x="2" y="80" fill="#f97316" fontSize="11.5" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">valve</text>

        {/* Overflow tube — top centre */}
        <line x1="226" y1="26" x2="275" y2="5" stroke="#f97316" strokeWidth="1" />
        <circle cx="226" cy="26" r="2" fill="#f97316" />
        <text x="279" y="5" fill="#f97316" fontSize="11.5" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">Overflow</text>
        <text x="279" y="19" fill="#f97316" fontSize="11.5" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">tube</text>

        {/* Flush valve — bottom left */}
        <line x1="193" y1="224" x2="88" y2="248" stroke="#f97316" strokeWidth="1" />
        <circle cx="193" cy="224" r="2" fill="#f97316" />
        <text x="2" y="242" fill="#f97316" fontSize="11.5" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">Flush</text>
        <text x="2" y="256" fill="#f97316" fontSize="11.5" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">valve</text>

        {/* Handle mechanism — top right */}
        <line x1="355" y1="52" x2="400" y2="30" stroke="#f97316" strokeWidth="1" />
        <circle cx="355" cy="52" r="2" fill="#f97316" />
        <text x="404" y="25" fill="#f97316" fontSize="11.5" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">Handle</text>
        <text x="404" y="39" fill="#f97316" fontSize="11.5" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700">mechanism</text>
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
        <rect x="0" y="0" width="22" height="160" fill="#e2e8f0" />
        <line x1="22" y1="0" x2="22" y2="160" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="22" y="68" width="78" height="14" rx="2" fill="#94a3b8" />
        <rect x="84" y="60" width="26" height="30" rx="3" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
        <line x1="97" y1="65" x2="97" y2="85" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
        <rect x="82" y="58" width="30" height="34" rx="4" fill="none" stroke="#f97316" strokeWidth="1.5" />
        <rect x="110" y="68" width="75" height="14" rx="2" fill="#94a3b8" />
        <rect x="185" y="38" width="100" height="74" rx="4" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
        <text x="214" y="79" fill="#94a3b8" fontSize="10" fontFamily="ui-sans-serif,system-ui,sans-serif">Tank</text>
        <rect x="183" y="68" width="4" height="14" fill="#94a3b8" />
        <path d="M 200 112 Q 235 145 270 112" fill="none" stroke="#94a3b8" strokeWidth="2" />
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

        {/* Know what you're looking at */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-1">Know what you&apos;re looking at</h2>
          <p className="text-sm text-gray-500 mb-4">You don&apos;t need to understand everything — just match what you see to what&apos;s happening.</p>
          <CisternKnowDiagram />
        </div>

        {/* Visual diagnosis */}
        <div className="mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">What is your toilet doing right now?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="#fix-a"
              className="block rounded-xl border-2 border-orange-200 bg-orange-50 p-4 hover:border-orange-400 hover:bg-orange-100 transition-colors group"
            >
              <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-1">Fix A</p>
              <p className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-orange-800">Water trickles constantly</p>
              <p className="text-xs text-gray-600">You can hear running water even when nobody has flushed, or water is dripping from an outside pipe</p>
            </a>
            <a
              href="#fix-b"
              className="block rounded-xl border-2 border-blue-200 bg-blue-50 p-4 hover:border-blue-400 hover:bg-blue-100 transition-colors group"
            >
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Fix B</p>
              <p className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-800">Water ripples in the bowl</p>
              <p className="text-xs text-gray-600">You see slow movement or a shimmer in the toilet bowl between flushes, and the tank keeps quietly refilling</p>
            </a>
            <a
              href="#fix-c"
              className="block rounded-xl border-2 border-green-200 bg-green-50 p-4 hover:border-green-400 hover:bg-green-100 transition-colors group"
            >
              <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1">Fix C</p>
              <p className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-green-800">Tank fills slowly or runs after flushing</p>
              <p className="text-xs text-gray-600">The refill noise continues longer than 2 minutes after a flush, or the tank never seems to finish filling</p>
            </a>
          </div>
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
              <dt className="font-semibold text-gray-800 min-w-[130px] shrink-0">Overflow tube</dt>
              <dd className="text-gray-700">A safety pipe inside the tank. If the water level gets too high, water drains down this pipe and exits outside the house (the trickle you sometimes hear from an outside wall).</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-gray-800 min-w-[130px] shrink-0">Isolation valve</dt>
              <dd className="text-gray-700">A small valve on the pipe behind the toilet. Turn the slot in the screw head 90° so it sits across the pipe — this shuts off the water supply to just this toilet.</dd>
            </div>
          </dl>
        </div>

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

        {/* Fix A */}
        <div id="fix-a" className="border-2 border-orange-200 rounded-xl p-6 mb-6 scroll-mt-6">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-1">Fix A</p>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Lower the water level</h2>
          <p className="text-sm text-gray-500 mb-4">Technical name: float arm adjustment (ballvalve)</p>
          <p className="text-sm text-gray-700 mb-3"><strong>What&apos;s happening:</strong> The water in the tank is filling too high and spilling down the safety tube (overflow tube) before the valve can shut off. You&apos;ll often hear this as a trickle from a pipe on an outside wall.</p>
          <ol className="space-y-4 text-sm text-gray-700 list-decimal list-inside">
            <li>
              <strong>Lift the lid off the tank (cistern)</strong> and rest it on a towel. You will see a plastic arm — the float arm — with either a hollow ball or a cup-shaped float at the end. This is what triggers the water to stop when the tank is full.
            </li>
            <li>
              <strong>Check if the float arm is the problem.</strong> With the toilet running, gently lift the float arm upward with your hand. If the water stops immediately, the float is set too high and this is your fix.
            </li>
            <li>
              <strong>Lower the float arm.</strong> On an older ballvalve (a metal arm with a hollow ball), gently bend the arm downward by hand — a few degrees is enough. On a modern ballvalve (plastic cup on a vertical shaft), find the small adjustment screw or clip on the side of the fill valve and turn it to lower the cutoff point.
            </li>
            <li>
              <strong>Check the water level.</strong> The water should stop filling at least 25mm below the top of the overflow tube (the tall central pipe inside the tank). That gap is your safety margin. If it still fills too high, lower the float a little more.
            </li>
            <li>
              <strong>Replace the lid and listen.</strong> A correctly adjusted tank is completely silent between flushes — no hiss, no trickle from the outside wall.
            </li>
          </ol>
          <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-orange-100">Cost: free. Time: under 5 minutes. No parts needed.</p>
        </div>

        {/* Fix B */}
        <div id="fix-b" className="border-2 border-blue-200 rounded-xl p-6 mb-6 scroll-mt-6">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Fix B</p>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Check the rubber seal</h2>
          <p className="text-sm text-gray-500 mb-4">Technical name: flapper valve inspection and replacement</p>
          <p className="text-sm text-gray-700 mb-3"><strong>What&apos;s happening:</strong> The rubber seal (flapper valve) at the bottom of the tank is not sitting flat. Water is slowly leaking through into the bowl, which keeps triggering the tank to refill. You&apos;ll see gentle rippling in the bowl between flushes.</p>
          <ol className="space-y-4 text-sm text-gray-700 list-decimal list-inside">
            <li>
              <strong>Lift the lid and press down on the rubber seal (flapper valve)</strong> — it sits at the bottom of the tank over a circular opening. Press firmly with your hand. If the water movement in the bowl stops, the flapper is your problem.
            </li>
            <li>
              <strong>Clean the seat first before replacing anything.</strong> Unhook the flapper by unclipping it from the two pegs on either side. Rinse it under a tap. Use an old cloth to wipe clean the valve seat — the rim it presses against. A piece of grit or limescale is sometimes the only problem. Refit and test.
            </li>
            <li>
              <strong>If cleaning does not fix it, replace the flapper.</strong> Turn off the isolation valve (the small slotted screw on the pipe behind the toilet — turn the slot 90° so it sits across the pipe). Flush to empty the tank. Take the old flapper to a plumbers&apos; merchant or hardware shop to match the size — flappers are not universal.
            </li>
            <li>
              <strong>Fit the new rubber seal (flapper).</strong> Clip it onto the same two pegs and hook the chain back onto the flush handle arm (the lever connected to the handle mechanism). Leave 1–2 links of slack in the chain — too tight and the seal stays slightly open; too loose and it gets trapped underneath during flushing.
            </li>
            <li>
              <strong>Turn the water back on and test.</strong> Open the isolation valve slowly — a quarter turn first, then fully after 30 seconds. Flush once and watch the seal drop back down. Bowl water should be still within a minute.
            </li>
          </ol>
          <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-blue-100">Cost: free if cleaning fixes it; £10–25 for a replacement seal. Time: 10–15 minutes.</p>
        </div>

        {/* Fix C */}
        <div id="fix-c" className="border-2 border-green-200 rounded-xl p-6 mb-6 scroll-mt-6">
          <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1">Fix C</p>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Adjust the refill mechanism</h2>
          <p className="text-sm text-gray-500 mb-4">Technical name: fill valve (ballvalve) calibration</p>
          <p className="text-sm text-gray-700 mb-3"><strong>What&apos;s happening:</strong> The part that lets water back into the tank after flushing (fill valve) is not shutting off at the right level — or is shutting off too slowly. The tank takes an unusually long time to refill, or the refill noise carries on well after the water level should have reached the right height.</p>
          <ol className="space-y-4 text-sm text-gray-700 list-decimal list-inside">
            <li>
              <strong>Close the isolation valve</strong> (the slotted screw on the pipe behind the toilet — turn 90° so the slot sits across the pipe). Flush to empty the tank fully.
            </li>
            <li>
              <strong>Locate the fill valve</strong> — it is the tall component on the side of the tank, usually on the left as you face it. On older ballvalves it has a long arm with a ball; on modern ones it is a narrow plastic tower with a float cup that slides up and down.
            </li>
            <li>
              <strong>Adjust the float cutoff point.</strong> On a modern fill valve, turn the adjustment screw or twist the float cup to a lower position on the shaft — this tells the valve to shut off earlier. On an older ballvalve, gently bend the arm downward so the ball sits lower in the water.
            </li>
            <li>
              <strong>Reopen the isolation valve slowly</strong> — a quarter turn first, pause 30 seconds, then fully open. Watch the tank fill. The water should reach its level and stop cleanly. The correct level is 25mm below the top of the overflow tube.
            </li>
            <li>
              <strong>If the tank still will not stop filling</strong> even with the float arm adjusted all the way down, the fill valve itself is faulty and needs replacing — this is a 30-minute job but means buying a new ballvalve assembly (around £10–30). If you are not confident doing this, it is time to call a plumber.
            </li>
          </ol>
          <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-green-100">Cost: free for an adjustment; £10–30 if the fill valve needs replacing. Time: 5–30 minutes.</p>
        </div>

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
