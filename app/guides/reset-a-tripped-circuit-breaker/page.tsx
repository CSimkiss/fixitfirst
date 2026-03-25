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
  title: 'How to Reset a Tripped Fuse Box (Circuit Breaker) | FixItFirst',
  description: 'Reset a tripped circuit breaker or RCD in 10 minutes. Covers consumer units, overloads, and fault trips. Save £40–80 vs an emergency electrician.',
  openGraph: {
    title: 'How to Reset a Tripped Fuse Box (Circuit Breaker) | FixItFirst',
    description: 'Reset a tripped circuit breaker or RCD in 10 minutes. Covers consumer units, overloads, and fault trips. Save £40–80 vs an emergency electrician.',
    url: 'https://fixit-first.co.uk/guides/reset-a-tripped-circuit-breaker',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Find the consumer unit and locate the tripped breaker',
    description: 'The consumer unit (often still called the fuse box) is the white or grey plastic panel with rows of switches, usually located under the stairs, in the hallway, or in a utility room. Open the cover. Look at all the switches — a tripped breaker will be in a different position to the rest. On most modern UK consumer units it will be in the middle position (half-way between on and off), or it may have flipped fully to off. Some units have a small coloured indicator that turns red when tripped. Why: the tripped breaker is a safety device that has cut power to a circuit because it detected too much current. It has done exactly what it is supposed to do. Your job is to find the cause before resetting it.',
  },
  {
    title: 'Identify which circuit has tripped',
    description: 'Consumer units in UK homes built or rewired since 2005 must be labelled. Common labels include: Upstairs sockets, Downstairs lighting, Kitchen, Cooker, Shower. Match the label to which part of the house has lost power. If your consumer unit is not labelled, stand at the unit and have someone else switch on lights and sockets in different rooms until you can establish which circuits are live and which are not. Why: knowing the circuit tells you where to look for the cause. A tripped socket circuit means an overloaded or faulty appliance. A tripped lighting circuit usually means a failed fitting or bulb causing a short. This knowledge prevents you resetting the breaker only to have it trip again immediately.',
  },
  {
    title: 'Reduce or remove the load on that circuit',
    description: 'Go to the affected rooms and unplug all appliances connected to sockets on the tripped circuit. If it is a lighting circuit, switch off all the lights on that circuit at their switches. Do not leave any appliance plugged in. Why: if the trip was caused by overload — too many appliances drawing too much current at once — resetting without reducing the load will cause it to trip again immediately. The most common overload scenario in UK homes is a socket extension lead with too many high-wattage appliances plugged in simultaneously: a kettle and toaster and microwave on the same 13A socket circuit will trip the breaker.',
  },
  {
    title: 'Reset the circuit breaker',
    description: 'Push the tripped switch firmly all the way to the off position first — do not skip this step. Then push it firmly up to the on position. You should feel and hear it click into place. It should stay in the on position. Why: pushing the switch off before on fully resets the internal mechanism. On some types of MCB (miniature circuit breaker), a switch that is in the mid-trip position cannot be pushed directly back to on without being fully cycled through off first. If you push directly to on and it does not engage, this is why.',
  },
  {
    title: 'Restore appliances one at a time and watch the breaker',
    description: 'Go back to the affected rooms and plug appliances back in one at a time, with a short pause between each. Watch or listen to the consumer unit — a breaker that trips again will click audibly. If the breaker holds with all appliances reconnected, the problem was overload. If the breaker trips when you plug in a specific appliance, that appliance is faulty — do not use it again until it has been repaired or replaced. Why: restoring appliances one at a time isolates a faulty appliance quickly. If you plug everything in at once and the breaker trips, you cannot tell which item caused it.',
  },
  {
    title: 'Check the RCD if the circuit breaker reset but power is still off',
    description: 'Modern consumer units have an RCD — a large switch (often labelled Test or RCD) that provides additional fault protection and covers multiple circuits at once. If your circuit breaker is on but power is still not restored, the RCD may also have tripped. To reset it: press the button labelled Test first (this confirms the mechanism is working), then push the RCD switch firmly up. The RCD covers a group of circuits — when it trips, it takes all of them out simultaneously. Why: an RCD trips when it detects a current imbalance that suggests electricity is flowing somewhere it should not — usually a fault to earth. An RCD that will not reset or keeps tripping needs an electrician to trace the earth fault.',
  },
]

export default function ResetATrippedCircuitBreaker() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset a tripped fuse box (circuit breaker)</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Fix it yourself in 10 mins — no electrician needed</p>
        <p className="text-gray-600 mb-6">A tripped breaker is a safety feature working correctly, not a fault. It has cut the power to protect your wiring. Resetting it — once you know the cause — takes two minutes.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['reset-a-tripped-circuit-breaker'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Reset a tripped circuit breaker" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="reset-a-tripped-circuit-breaker" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Your consumer unit (fuse box) contains MCBs — miniature circuit breakers — one for each circuit in the house. When a circuit is overloaded or a fault occurs, the MCB flips to off or a mid-position to cut power. This is normal and safe.</p>
          <p className="text-sm text-gray-700 mb-2">There is also an RCD (residual current device) — a larger switch that covers groups of circuits and trips when it detects an earth fault. This is different from an MCB trip and has a slightly different reset procedure.</p>
          <p className="text-sm text-gray-700">You do not need any tools to reset a circuit breaker or RCD — just your hands.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Torch or head torch', hint: 'if the consumer unit is in a dark cupboard or the hall light is on the tripped circuit', toolId: 'torch' },
            { icon: 'check', name: 'No other tools needed', hint: 'circuit breakers are reset by hand' },
          ]}
          slug="reset-a-tripped-circuit-breaker"
          guideName="Reset a tripped circuit breaker"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['reset-a-tripped-circuit-breaker']} />
        <StepProgress steps={steps} slug="reset-a-tripped-circuit-breaker" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Resetting without reducing the load first.</strong> If the trip was caused by too many appliances running at once, the breaker will trip again immediately. Unplug everything on the circuit before resetting.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Not pushing the switch fully off before pushing it back on.</strong> A tripped MCB in the mid position cannot be pushed directly to on. It must go fully off first, then on. This catches people out every time.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Ignoring a breaker that keeps tripping.</strong> If the same breaker trips repeatedly after you have removed all appliances from the circuit, there is a fault on the wiring or a fixed appliance (like a cooker or shower) that needs an electrician to trace.</p>
          <p className="text-sm text-yellow-900"><strong>Confusing the MCB and the RCD.</strong> The MCB is the small switch for one circuit. The RCD is the larger switch (often labelled Test) that covers multiple circuits. They trip for different reasons and reset slightly differently.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call an electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">A breaker will not stay on after resetting, even with all appliances unplugged — there is a fault on the fixed wiring</p>
          <p className="text-sm text-red-900 mb-1">There is a burning smell, scorch marks, or visible heat damage near the consumer unit — this is a serious fire risk</p>
          <p className="text-sm text-red-900 mb-1">The RCD will not reset or keeps tripping — there is an earth fault somewhere on the circuit</p>
          <p className="text-sm text-red-900">Your consumer unit contains old-style rewirable fuses rather than MCBs — these should be replaced by a qualified electrician</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Resetting yourself</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Electrician to investigate a fault</span><span className="font-medium">£80–150</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Emergency electrician call-out</span><span className="font-medium text-red-600">£100–250</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You understand how your consumer unit works — MCBs, the RCD, what each type of trip means, and how to safely reset them. Knowing your circuit labels is one of the most practically useful things you can do as a homeowner. Label them now if they are not already.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/fix-a-light-that-wont-turn-on" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fix a light that won&apos;t turn on →</a>
            <a href="/guides/replace-a-light-switch" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Replace a light switch →</a>
            <a href="/guides/turn-off-electricity-fuse-box" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Turn off electricity safely →</a>
          </div>
        </div>

        {GUIDE_META['reset-a-tripped-circuit-breaker'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['reset-a-tripped-circuit-breaker'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="reset-a-tripped-circuit-breaker"
          relatedSlugs={['fix-a-light-that-wont-turn-on', 'replace-a-light-switch', 'replace-a-smoke-alarm-battery']}
        />
        <GuideActions slug="reset-a-tripped-circuit-breaker">
          <GuideExtras slug="reset-a-tripped-circuit-breaker" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="reset-a-tripped-circuit-breaker" title="Reset a tripped circuit breaker" href="/guides/reset-a-tripped-circuit-breaker" />
      <MobileNav />
    </main>
  )
}
