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
  title: 'How to Fix a Light That Won\'t Turn On | FixItFirst',
  description: 'Diagnose and fix a light that won\'t turn on in 15 minutes. Covers bulbs, switches, circuit breakers, and fittings. Save £40–80 vs an electrician.',
  openGraph: {
    title: 'How to Fix a Light That Won\'t Turn On | FixItFirst',
    description: 'Diagnose and fix a light that won\'t turn on in 15 minutes. Covers bulbs, switches, circuit breakers, and fittings. Save £40–80 vs an electrician.',
    url: 'https://fixit-first.co.uk/guides/fix-a-light-that-wont-turn-on',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Start with the simplest cause: the bulb',
    description: 'Before anything else, turn the light off at the switch, wait 30 seconds for any filament to cool, and replace the bulb with one you know is working (borrow from another lamp). Turn the switch back on. Why: a dead bulb is the cause of a non-working light in the majority of cases, and it takes 30 seconds to check. No further diagnosis is needed if a new bulb fixes it. LED bulbs fail gradually (they dim or flicker before dying), while older incandescent and halogen bulbs fail suddenly. If a bulb has blown, also check that the wattage of the replacement is within the fitting\'s maximum rating — usually marked inside the shade or on the fitting.',
  },
  {
    title: 'Check if other lights on the same circuit are working',
    description: 'Turn on lights in other rooms and on the same floor. If multiple lights are not working, go to your consumer unit (fuse box) and check for a tripped breaker — a switch that has moved to a middle or off position. Push it firmly all the way off, then back up to on. Why: a tripped lighting circuit breaker cuts power to all lights on that circuit. If the upstairs lights have all gone off at the same time, the breaker is almost certainly the cause. See our <a href="/guides/reset-a-tripped-circuit-breaker" class="text-orange-600 hover:underline font-medium">Reset a tripped circuit breaker</a> guide for the full process.',
  },
  {
    title: 'Test the light switch with a second lamp',
    description: 'If the bulb is new and the circuit breaker is fine, the switch may be faulty. Plug a standard table lamp into a socket in the same room and turn it on to confirm the socket has power. If it does, connect a lamp with a known-good bulb directly to the ceiling rose wires (safely, with the circuit off) to bypass the switch. If the lamp lights, the problem is the switch. Why: a switch that has failed open-circuit simply stops completing the circuit — no power reaches the fitting. This is a relatively common failure in older rocker switches, particularly those that are switched on and off many times per day. Replacing a light switch is a DIY job covered in our <a href="/guides/replace-a-light-switch" class="text-orange-600 hover:underline font-medium">Replace a light switch</a> guide.',
  },
  {
    title: 'Inspect the light fitting and connections',
    description: 'If the switch is working but the light still does not come on, turn off the circuit at the consumer unit, then unscrew the ceiling rose or pendant holder. Check that all wire connections are secure — the wire ends should be firmly in their terminals with no slack. Look for any burnt or discoloured wires, which indicate a failed connection. Reconnect any loose wires, replace the rose cover, restore power and test. Why: vibration over years can loosen push-in connectors in ceiling roses. A single loose neutral wire stops the circuit completing and kills the light entirely with no other symptoms. This is a 10-minute check that requires no electrical knowledge — just confirming wires are seated firmly in their terminals.',
  },
  {
    title: 'Check the bulb holder if using an older bayonet fitting',
    description: 'In older BC (bayonet cap) bulb holders, the centre contact inside the holder can flatten and lose contact with the bulb base. With the circuit off, use a small flat-head screwdriver to gently lift the centre contact slightly — just 1–2mm is enough to restore contact with the bulb. Refit the bulb, restore power and test. Why: this is a particularly common fault in older table and floor lamps and in vintage pendant fittings. The centre contact is a spring-loaded tab that compresses over time or after a bulb is overtightened into the holder. This costs nothing to fix and takes two minutes.',
  },
]

export default function FixALightThatWontTurnOn() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a light that won&apos;t turn on</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £40–80 in 15 mins — no electrician needed</p>
        <p className="text-gray-600 mb-6">A light that stops working is almost always a dead bulb, a tripped breaker, or a loose connection. Work through the causes in order and you will find it in minutes.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-light-that-wont-turn-on'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a light that won't turn on" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-light-that-wont-turn-on" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide covers a light that stopped working — either suddenly or gradually. Work through the steps in order from simplest to most complex. In most cases it is resolved at step one or two.</p>
          <p className="text-sm text-gray-700 mb-2">If a light flickers rather than not working at all, the cause is almost always a loose bulb or a failing LED driver — try tightening or replacing the bulb first.</p>
          <p className="text-sm text-gray-700">Always turn off the circuit at the consumer unit before opening any ceiling rose or light fitting. Switching the light off at the wall switch is not sufficient — the switch only breaks one wire, and live conductors remain inside the fitting.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Torch or head torch', hint: 'essential if the room has no other light source', toolId: 'torch' },
            { icon: 'check', name: 'Step ladder', hint: 'to reach ceiling fittings safely', toolId: 'step-ladder' },
            { icon: 'check', name: 'Flat-head screwdriver', hint: 'to open ceiling roses and lift bulb contacts', toolId: 'screwdriver-flat' },
            { icon: 'buy', name: 'Replacement LED bulb', hint: 'match the cap type (BC bayonet or ES screw) and wattage to the fitting', hintOrange: true },
          ]}
          slug="fix-a-light-that-wont-turn-on"
          guideName="Fix a light that won't turn on"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-light-that-wont-turn-on']} />
        <StepProgress steps={steps} slug="fix-a-light-that-wont-turn-on" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Assuming it is a wiring fault without checking the bulb first.</strong> A dead bulb takes 30 seconds to rule out. Check it before doing anything else.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Opening ceiling fittings with the switch off but the circuit still live.</strong> The switch only breaks one conductor. Turn the circuit off at the consumer unit before touching any wiring.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Using a bulb with a higher wattage than the fitting allows.</strong> Most LED fittings have a maximum wattage marked inside. Exceeding it overheats the fitting and can damage it.</p>
          <p className="text-sm text-yellow-900"><strong>Ignoring a repeatedly tripping circuit breaker.</strong> A breaker that trips every time the light is turned on has a fault on the circuit — usually a failed fitting or damaged cable — that needs an electrician to trace.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call an electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">The circuit breaker trips every time the light is switched on — there is a fault on the circuit that needs tracing</p>
          <p className="text-sm text-red-900 mb-1">You see burn marks, smell burning, or find discoloured wires inside the fitting — do not use the circuit until it has been inspected</p>
          <p className="text-sm text-red-900 mb-1">The light flickers on multiple fittings across the house — this can indicate a loose connection at the main earth or neutral</p>
          <p className="text-sm text-red-900">You are not confident working inside a ceiling rose — there is no shame in calling an electrician for this</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Dead bulb — just a new bulb</span><span className="font-medium">£2–8</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Tripped breaker — free to reset</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Faulty switch — see switch guide</span><span className="font-medium">£5–15</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Electrician call-out</span><span className="font-medium text-red-600">£40–80</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You can diagnose a non-working light systematically — bulb first, circuit second, switch third, fitting fourth. This diagnostic approach applies to any electrical problem in your home: identify the most likely and simplest cause, rule it out, then move to the next.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/replace-a-light-switch" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Replace a light switch →</a>
            <a href="/guides/reset-a-tripped-circuit-breaker" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Reset a tripped circuit breaker →</a>
            <a href="/guides/change-a-lightbulb" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Change a lightbulb →</a>
          </div>
        </div>

        {GUIDE_META['fix-a-light-that-wont-turn-on'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-light-that-wont-turn-on'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="fix-a-light-that-wont-turn-on"
          relatedSlugs={['replace-a-light-switch', 'reset-a-tripped-circuit-breaker', 'change-a-lightbulb']}
        />
        <GuideActions slug="fix-a-light-that-wont-turn-on">
          <GuideExtras slug="fix-a-light-that-wont-turn-on" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="fix-a-light-that-wont-turn-on" title="Fix a light that won't turn on" href="/guides/fix-a-light-that-wont-turn-on" />
      <MobileNav />
    </main>
  )
}
