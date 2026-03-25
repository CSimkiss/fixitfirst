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
  title: 'How to Strip Out a Bathroom (Prep for Renovation) | FixItFirst',
  description: 'Learn how to safely strip out a bathroom ready for renovation. Step-by-step guide covering water isolation, fixture removal, and surface prep. Save £150–400 vs hiring a contractor.',
  openGraph: {
    title: 'How to Strip Out a Bathroom (Prep for Renovation) | FixItFirst',
    description: 'Learn how to safely strip out a bathroom ready for renovation. Step-by-step guide covering water isolation, fixture removal, and surface prep. Save £150–400 vs hiring a contractor.',
    url: 'https://fixit-first.co.uk/guides/strip-out-bathroom',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Turn off the water supply',
    description: 'Locate the isolation valves under the basin and behind the toilet cistern. Turn each valve 90 degrees until it sits across the pipe. Turn on the taps to release any remaining pressure and confirm the water is off. If there are no isolation valves, turn off the main stop cock.',
  },
  {
    title: 'Remove silicone sealant',
    description: 'Score along the old silicone with a utility knife. Pull the bulk away with your fingers, then use the knife to scrape the remainder off the bath, tiles, and basin. Work slowly to avoid gouging the surface. Any residue left behind will stop new sealant adhering properly.',
  },
  {
    title: 'Disconnect taps and fixtures',
    description: 'Use an adjustable spanner to loosen the supply pipe connections under the basin and behind the toilet. Have a bucket ready — there will be water left in the pipes. Disconnect the waste trap under the basin by hand or with a spanner. Once disconnected, lift the basin clear of its fixings.',
  },
  {
    title: 'Remove accessories and fittings',
    description: 'Unscrew towel rails, toilet roll holders, shelves, and mirrors. Most are held with two screws — use a flat or cross-head screwdriver depending on the fitting. Keep the fixings in a labelled bag in case they are needed later. Fill any screw holes that will not be covered by new fittings.',
  },
  {
    title: 'Remove loose tiles (optional)',
    description: 'If you are retiling, use a multitool or a hammer and cold chisel to chip away damaged or loose tiles. Work from the edges inward. Wear safety glasses — tile shards are sharp. Solid, well-bonded tiles do not need removing unless you are fitting new boards or changing the tile layout.',
  },
  {
    title: 'Clean and prepare the space',
    description: 'Remove all debris from the room. Check walls and floors for damp, crumbling plaster, or rot. Mark any damaged areas with a pencil so you address them before the next phase. Wipe all surfaces with a damp cloth. The room should be clean and dry before any new work starts.',
  },
]

export default function StripOutBathroom() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Strip out a bathroom (prep for renovation)</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £150–400 in half a day — no contractor needed</p>

        <p className="text-gray-600 mb-6">Most people pay a tradesperson to do this. The strip-out is entirely DIY-able — and doing it yourself means you know exactly what condition everything is in before the new work starts.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['strip-out-bathroom'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Strip out a bathroom (prep for renovation)" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="strip-out-bathroom" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This is Phase 1 of a full bathroom renovation. Do this before any new fixtures, tiling, or plumbing work.</p>
          <p className="text-sm text-gray-700 mb-2">Turn the water off and confirm it is isolated before removing anything connected to the supply.</p>
          <p className="text-sm text-gray-700">Have a plan for what is being replaced and what is staying — it saves unnecessary removal work.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
            { icon: 'check', name: 'Utility knife / Stanley knife', hint: 'for scoring silicone', toolId: 'utility-knife' },
            { icon: 'check', name: 'Adjustable spanner', hint: 'for disconnecting supply pipes', toolId: 'adjustable-spanner' },
            { icon: 'check', name: 'Flat-head screwdriver', hint: 'for removing fixtures', toolId: 'screwdriver-flat' },
            { icon: 'check', name: 'Cross-head screwdriver', hint: 'for accessories and fittings', toolId: 'screwdriver-cross' },
            { icon: 'check', name: 'Rubber gloves', hint: 'protect hands from silicone and waste', toolId: 'rubber-gloves' },
            { icon: 'check', name: 'Bucket', hint: 'to catch water from disconnected pipes', toolId: 'bucket' },
            { icon: 'buy', name: 'Safety glasses', hint: 'essential if removing tiles', hintOrange: true },
            { icon: 'buy', name: 'Oscillating multitool (optional)', hint: 'makes tile removal much faster', hintOrange: true },
          ]}
          slug="strip-out-bathroom"
          guideName="Strip out a bathroom"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['strip-out-bathroom']} />
        <StepProgress steps={steps} slug="strip-out-bathroom" />
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Quick guides for this phase</p>
          <a href="/guides/remove-silicone-sealant" className="text-sm text-orange-600 font-medium hover:underline">
            How to remove old silicone sealant without damaging tiles →
          </a>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not fully isolating the water before disconnecting pipes — a small amount of water is always left in the pipes after isolation, so have a bucket ready.</p>
          <p className="text-sm text-yellow-900 mb-2">Removing fixtures that were planned to stay — decide exactly what is being replaced before you start and mark it clearly.</p>
          <p className="text-sm text-yellow-900 mb-2">Skipping tile removal and tiling over old tiles — this builds up thickness and can cause grout cracking. Only keep old tiles if they are fully bonded and flat.</p>
          <p className="text-sm text-yellow-900">Not checking for damp before covering walls — hidden damp behind old tiles or fixtures is the most common cause of future problems. Look, smell, and press on plaster to check.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">The main stop cock will not fully close — do not proceed with any disconnection until water is fully isolated</p>
          <p className="text-sm text-red-900 mb-1">You find significant damp, black mould, or soft/crumbling plaster behind fixtures — this needs professional assessment before new work starts</p>
          <p className="text-sm text-red-900">The waste pipe from the toilet is cracked or damaged — this is a job for a qualified plumber</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">You have the tools</span><span className="font-medium">£0–10</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Need to buy a few tools</span><span className="font-medium">£15–30</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Contractor would charge</span><span className="font-medium text-red-600">£150–400</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-2">You can now safely isolate a water supply, disconnect bathroom fixtures, remove old sealant cleanly, and identify problem areas before they become expensive surprises.</p>
          <p className="text-sm text-orange-900 mb-3">These skills unlock the rest of the renovation — tiling, new fixtures, and finishing are all easier when the room is properly prepped.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/remove-silicone-sealant" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Remove silicone sealant →</a>
            <a href="/guides/prep-bathroom-plumbing" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Plumbing prep (Phase 2) →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation hub →</a>
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
              <span className="text-orange-400 text-base">👉</span>
              <span className="text-white text-sm font-medium">Phase 2: Plumbing Prep — next up</span>
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
              href="/guides/prep-bathroom-plumbing"
              className="border border-white/20 text-gray-300 hover:bg-white/10 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              Start Phase 2 →
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center mb-3">Most people would pay a tradesperson to do this prep work.</p>
        {GUIDE_META['strip-out-bathroom'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['strip-out-bathroom'].renterWarning}</p>
          </div>
        )}
        <GuideActions slug="strip-out-bathroom">
          <GuideExtras slug="strip-out-bathroom" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="strip-out-bathroom" title="Strip out a bathroom (prep for renovation)" href="/guides/strip-out-bathroom" />
      <MobileNav />
    </main>
  )
}
