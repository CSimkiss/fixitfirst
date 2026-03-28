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
  title: 'How to Find Pipes and Wires in Walls Before Drilling | FixItFirst',
  description: 'Find hidden pipes and cables in walls before you drill. Covers cable and pipe detectors, cable routing rules, and what to do if your detector is uncertain.',
  openGraph: {
    title: 'How to Find Pipes and Wires in Walls Before Drilling | FixItFirst',
    description: 'Find hidden pipes and cables in walls before you drill. Covers cable and pipe detectors, cable routing rules, and what to do if your detector is uncertain.',
    url: 'https://fixit-first.co.uk/guides/find-pipes-and-wires',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Understand where cables and pipes are most likely to run',
    description: 'In UK homes, electrical cables follow two rules in most cases: they run vertically between sockets, switches, and the consumer unit, and horizontally at ceiling level or floor level. They do not typically run diagonally. Cables from a socket or switch run straight up to the ceiling, or straight down to the floor. Water pipes run vertically behind taps, toilets, radiators, and boilers, and horizontally along floors and at ceiling level. Why: knowing the likely routes means you can make an educated assessment before reaching for a detector. A fixing point 500mm above a socket is high risk — it is directly in the vertical cable zone. A fixing point in the middle of a bare wall between any services is lower risk.',
  },
  {
    title: 'Use a cable and pipe detector to scan the wall',
    description: 'Hold the detector flat against the wall and move it slowly in a grid pattern — first horizontally, then vertically. Mark any detected objects with a pencil cross on the wall. Most multi-function detectors can find: live AC cables (with the live cable detection mode), metal pipes and conduit (with the metal detection mode), and timber or metal studs in partition walls. Why: the detector gives you a map of what is behind the wall surface. Even a basic detector (available from £20) catches most cables and metal pipes. Scan the full area around your intended drilling point — not just the exact spot, but 200mm in every direction.',
  },
  {
    title: 'Interpret the detector results carefully',
    description: 'A cable detector gives alerts — it does not show you an exact position. When it alerts, the cable or pipe is near, but the signal can spread to either side. Mark the centre of the alert zone, then allow a safety margin of at least 50mm on each side. If your detector shows both metal and live signals overlapping, treat the entire alert area as live cable. Do not drill anywhere within 50mm of a detected alert. Why: cable detectors work well but are not infallible — they can miss a cable in deep chase (buried deeper in the plaster) or alert to a non-hazardous metal feature. The margin keeps you safe when the detector is uncertain.',
  },
  {
    title: 'Check specific known risk areas before drilling',
    description: 'Always check these areas before drilling, regardless of detector results: within 150mm horizontally of any socket or switch, above or below any light switch or socket (the vertical cable zone), within 200mm of a radiator (water pipes run to and from it), above a kitchen or bathroom worktop (water pipes to taps), and on either side of a doorframe (cables often run to switches beside doors). Why: these are the highest-risk zones in any room. A detector scan of these areas takes 30 seconds. Drilling into a live cable costs £500–2,000 to repair and is a serious electric shock risk. Drilling into a water pipe is immediately apparent and costs £200–800 to fix.',
  },
  {
    title: 'For areas where you are still unsure, use a shallow pilot hole approach',
    description: 'If the detector is unclear and you cannot avoid drilling in an uncertain area, use a 3mm drill bit and drill only 15–20mm deep — enough to confirm the wall material but not deep enough to reach most buried cables or pipes. Stop and inspect the hole. If you see dust, you are in plaster or masonry and proceeding may be safe. If you see a black or coloured plastic material in the hole, stop immediately — you have hit cable insulation or pipe lagging. Why: a 3mm pilot hole reaching only 20mm deep will not penetrate to a buried cable in most UK homes, but will tell you what is immediately behind the plaster surface. It is a sensible last-resort check when detector results are ambiguous.',
  },
]

export default function FindPipesAndWires() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find pipes and wires in walls before drilling</h1>
        <p className="text-4xl font-black text-green-600 mb-1">10 mins — prevents a £500–2,000 mistake</p>
        <p className="text-gray-600 mb-6">Drilling into a live cable or water pipe is the most avoidable and most costly DIY mistake. A cable detector costs £20 and two minutes to use. This guide shows exactly what to check and where services are most likely to run.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['find-pipes-and-wires'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Find pipes and wires in walls before drilling" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="find-pipes-and-wires" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide applies to any drilling job — shelves, picture hooks, bathroom fixtures, radiators, curtain rails. The check takes two minutes and should be done every single time you drill into a wall you are not certain about.</p>
          <p className="text-sm text-gray-700 mb-2">If you drill into a live cable: turn off the power at the consumer unit immediately, do not touch the drill, and call a qualified electrician. Do not attempt to withdraw the drill yourself.</p>
          <p className="text-sm text-gray-700">If you drill into a water pipe: turn off the water at the stopcock (under the sink or where the mains enters the property), put a bucket under any drip, and call a plumber.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'buy', name: 'Multi-function detector (cable, pipe, stud)', hint: 'buy one and keep it — you will use it on every drilling job for years', hintOrange: true },
            { icon: 'check', name: 'Pencil', hint: 'to mark detected cables, pipes, and safe zones on the wall', toolId: 'pencil' },
            { icon: 'check', name: 'Tape measure', hint: 'to measure and confirm safe distances from sockets and switches', toolId: 'tape-measure' },
          ]}
          slug="find-pipes-and-wires"
          guideName="Find pipes and wires in walls before drilling"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['find-pipes-and-wires']} />
        <StepProgress steps={steps} slug="find-pipes-and-wires" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Not scanning at all.</strong> &quot;I&apos;ll be fine&quot; is how cables get drilled through. The scan takes 90 seconds. Always do it.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Only scanning the exact drill point.</strong> Detectors work best when you scan the full area around the intended hole — cables run near, not always exactly through, the point you are checking. Scan 200mm in every direction.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Ignoring the margin around a detection.</strong> The detected centre of a cable alert is not the precise cable position — the signal spreads either side. Keep 50mm clear on each side of any alert centre.</p>
          <p className="text-sm text-yellow-900"><strong>Assuming old houses are safer to drill into.</strong> Older wiring is often in shallow surface chases with minimal plaster cover — sometimes only 5–10mm below the surface. Older houses need just as much care as modern ones.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">If you drill through a cable</h2>
          <p className="text-sm text-red-900 mb-1"><strong>Do not pull the drill out.</strong> Leave it in place — this limits the damage and reduces shock risk</p>
          <p className="text-sm text-red-900 mb-1"><strong>Turn off the power at the consumer unit immediately</strong> — not just the wall switch</p>
          <p className="text-sm text-red-900 mb-1"><strong>Only then</strong> remove the drill and inspect the damage</p>
          <p className="text-sm text-red-900">Call a qualified electrician to inspect and repair the damaged cable before restoring power to that circuit</p>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You know where cables and pipes typically run, how to scan with a detector, how to interpret the results, and which areas are highest risk. Two minutes of scanning before every drilling job prevents the most expensive and dangerous DIY mistake there is.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/drill-into-wall-types" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Drill into different wall types →</a>
            <a href="/guides/fit-bathroom-fixtures" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fit bathroom fixtures →</a>
            <a href="/guides/turn-off-water-mains" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Turn off water mains →</a>
          </div>
        </div>

        {GUIDE_META['find-pipes-and-wires'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['find-pipes-and-wires'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="find-pipes-and-wires"
          relatedSlugs={['drill-into-wall-types', 'fit-bathroom-fixtures', 'turn-off-water-mains']}
        />
        <GuideActions slug="find-pipes-and-wires">
          <GuideExtras slug="find-pipes-and-wires" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="find-pipes-and-wires" title="Find pipes and wires in walls before drilling" href="/guides/find-pipes-and-wires" />
      <MobileNav />
    </main>
  )
}
