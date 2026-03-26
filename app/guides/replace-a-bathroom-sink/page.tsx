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
  title: 'How to Replace a Bathroom Sink | FixItFirst',
  description: 'Replace a bathroom sink yourself in 1–2 hours. Step-by-step guide covering disconnecting the old basin, fitting the new one, and connecting pipework. Save £150–300 vs a plumber.',
  openGraph: {
    title: 'How to Replace a Bathroom Sink | FixItFirst',
    description: 'Replace a bathroom sink yourself in 1–2 hours. Step-by-step guide covering disconnecting the old basin, fitting the new one, and connecting pipework. Save £150–300 vs a plumber.',
    url: 'https://fixit-first.co.uk/guides/replace-a-bathroom-sink',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Turn off the water and clear under the sink', description: 'Find the isolation valves on the hot and cold supply pipes under the sink and turn each one 90 degrees with a flat-head screwdriver. Turn on the tap to release pressure and confirm the water is off. Put a bucket and old towels under the pipework — there will always be residual water in the pipes.' },
  { title: 'Disconnect the waste and supply pipes', description: 'Unscrew the bottle trap (the curved waste pipe below the plughole) by hand — it should come loose without tools. Use adjustable grips to undo the flexible supply tails from the isolation valves. Have the bucket ready. Once disconnected, push the pipes aside so they are out of the way.' },
  { title: 'Remove the old sink', description: 'If the basin is wall-mounted, look for a bracket underneath and undo the retaining bolts or screws. If it is pedestal-mounted, lift the basin clear of the pedestal. Some basins are also silicone-sealed to the wall — run a knife along the sealant bead to break the bond before lifting. Have a helper for this if the basin is heavy.' },
  { title: 'Fit the new bracket and position the basin', description: 'Most wall-hung basins come with a mounting bracket. Hold it against the wall at the right height (typically 80–85 cm from floor to rim) and mark the fixing holes. Scan for pipes and cables before drilling. Fix the bracket securely — this takes the full weight of the basin. Seat the basin onto the bracket and check it sits level.' },
  { title: 'Connect the supply pipes with flexible tails', description: 'Thread the flexible tap tails (usually supplied with the tap or available for a few pounds) down through the basin and connect them to the isolation valves. Wrap the threaded ends with 3–4 turns of PTFE tape before screwing on, then hand-tighten plus a quarter turn with the spanner. Do not overtighten — the olive inside the fitting does the sealing work.' },
  { title: 'Fit the waste, test for leaks, and seal', description: 'Connect the bottle trap to the waste outlet and push the other end back onto the waste pipe in the wall. Slowly open the isolation valves, run the tap, and watch every joint for drips. If all is dry, apply a thin bead of silicone sealant where the basin meets the wall. Smooth it with a wet finger and leave 24 hours before using.' },
]

export default function ReplaceABathroomSink() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Replace a bathroom sink</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £150–300 in 1–2 hrs — no plumber needed</p>
        <p className="text-gray-600 mb-6">Plumbers charge £150–300 to swap a basin. The job is just disconnecting the old one and connecting the new one — the fittings are designed to be done by hand.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['replace-a-bathroom-sink'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Replace a bathroom sink" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="replace-a-bathroom-sink" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide covers replacing a wall-hung or pedestal basin with a new like-for-like basin using the existing supply and waste positions. Moving pipework is a separate job that needs a plumber.</p>
          <p className="text-sm text-gray-700 mb-2">The critical tools are isolation valves (fitted in-line on the supply pipes) and a bottle trap on the waste. Most modern UK bathrooms have these. If yours does not, fit them first.</p>
          <p className="text-sm text-gray-700">Legal to DIY. You do not need a Gas Safe or Part P qualification for water supply to a basin.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
            { icon: 'check', name: 'Adjustable spanner', hint: 'for supply pipe connections', toolId: 'adjustable-spanner' },
            { icon: 'check', name: 'Flat-head screwdriver', hint: 'to turn isolation valves', toolId: 'screwdriver-flat' },
            { icon: 'check', name: 'Adjustable grips / pipe grips', hint: 'for waste and supply fittings', toolId: 'adjustable-grips' },
            { icon: 'check', name: 'Bucket and old towels', hint: 'to catch residual water', toolId: 'bucket' },
            { icon: 'check', name: 'Sponge and cloths', hint: 'to dry pipework before connecting', toolId: 'sponge-cloths' },
            { icon: 'buy', name: 'PTFE tape', hint: 'wraps threaded connections to stop leaks', hintOrange: true, toolId: 'ptfe-tape' },
            { icon: 'buy', name: 'Silicone sealant (bathroom grade)', hint: 'to seal the basin to the wall after fitting', hintOrange: true, toolId: 'sealant-gun' },
            { icon: 'check', name: 'Sealant gun', hint: 'for applying the silicone', toolId: 'sealant-gun' },
            { icon: 'check', name: 'Drill and masonry bits', hint: 'to fix the wall bracket', toolId: 'drill' },
            { icon: 'check', name: 'Cable and pipe detector', hint: 'check before drilling the bracket holes', toolId: 'cable-detector' },
          ]}
          slug="replace-a-bathroom-sink"
          guideName="Replace a bathroom sink"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['replace-a-bathroom-sink']} />
        <StepProgress steps={steps} slug="replace-a-bathroom-sink" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not checking the new basin matches the existing waste and supply positions. Measure the existing positions before ordering a replacement.</p>
          <p className="text-sm text-yellow-900 mb-2">Overtightening the flexible tap tails. Snug plus a quarter turn is enough — more will crack the plastic body of the fitting.</p>
          <p className="text-sm text-yellow-900 mb-2">Skipping the PTFE tape on threaded connections. Even if connections feel tight, threads without tape will weep slowly over weeks.</p>
          <p className="text-sm text-yellow-900">Siliconing before testing for leaks. Always run water and check every joint dry before applying sealant — sealant hides leaks it cannot fix.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">The isolation valves will not close (water keeps flowing when the valve is turned)</p>
          <p className="text-sm text-red-900 mb-1">The supply pipes are in poor condition — corroded, brittle, or leaking from the wall</p>
          <p className="text-sm text-red-900 mb-1">You want to move the waste or supply positions to suit a different basin size</p>
          <p className="text-sm text-red-900">There is water damage or damp behind the existing basin</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">New basin (budget range)</span><span className="font-medium">£40–120</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">PTFE tape, silicone sealant</span><span className="font-medium">£5–10</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">You have the tools already</span><span className="font-medium">£0</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge (supply + fit)</span><span className="font-medium text-red-600">£200–400</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand isolation valves, flexible tap tails, bottle traps, and how to make leak-free plumbing connections. These are the same skills used to replace a kitchen sink, connect a dishwasher, or fit a new basin in a cloakroom — the principles are identical across all domestic water supplies.</p>
        </div>
        <p className="text-sm text-gray-500 text-center mb-3">Most people would pay a tradesperson for this.</p>
        {GUIDE_META['replace-a-bathroom-sink'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['replace-a-bathroom-sink'].renterWarning}</p>
          </div>
        )}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Up next</h2>
          <div className="space-y-2">
            <a href="/guides/fit-a-towel-rail" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-xl shrink-0">🔧</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">Fit a towel rail (heated or standard)</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Save £80–150 today</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">1 hr</span>
            </a>
            <a href="/guides/reseal-a-shower-or-bath" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-xl shrink-0">🚿</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">Reseal a shower or bath properly</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Save £80–150 today</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">1–2 hrs</span>
            </a>
            <a href="/guides/paint-a-bathroom" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-xl shrink-0">🎨</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">Paint a bathroom properly (moisture-safe)</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Save £200–400 today</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">1 day</span>
            </a>
          </div>
        </div>
        <GuideActions slug="replace-a-bathroom-sink">
          <GuideExtras slug="replace-a-bathroom-sink" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="replace-a-bathroom-sink" title="Replace a bathroom sink" href="/guides/replace-a-bathroom-sink" />
      <MobileNav />
    </main>
  )
}
