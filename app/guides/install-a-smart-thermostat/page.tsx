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
  title: 'How to Install a Smart Thermostat | FixItFirst',
  description: 'Install a smart thermostat yourself in 1–2 hours. Step-by-step guide covering compatibility, wiring, and app setup. Save £150–300 per year on heating bills.',
  openGraph: {
    title: 'How to Install a Smart Thermostat | FixItFirst',
    description: 'Install a smart thermostat yourself in 1–2 hours. Step-by-step guide covering compatibility, wiring, and app setup. Save £150–300 per year on heating bills.',
    url: 'https://fixit-first.co.uk/guides/install-a-smart-thermostat',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Check compatibility', description: 'Most UK smart thermostats (Nest, Hive, Tado, Drayton Wiser) work with standard gas combi boilers. Check the manufacturer compatibility checker with your boiler model. If you have an older system with a hot water cylinder, check whether the thermostat supports multi-zone systems.' },
  { title: 'Turn off the boiler', description: 'Switch off the boiler at the boiler itself, then turn off the power at the consumer unit for the heating circuit. Confirm there is no power by testing the existing thermostat — it should be dead.' },
  { title: 'Remove the old thermostat', description: 'Unscrew the existing thermostat from the wall. Note and photograph the wires and which terminal each connects to. UK standard wiring: Live (L), Neutral (N), and Switched Live (also called COM or SL). Some systems have just two wires.' },
  { title: 'Install the new base plate', description: 'Screw the new thermostat base plate to the wall at the same location, using the existing holes where possible. Feed the existing wires through the base plate.' },
  { title: 'Connect the wires', description: 'Follow the new thermostat\'s wiring diagram — the manual will have UK-specific instructions. Connect Live, Neutral, and Switched Live to the terminals marked in the guide. Tighten each terminal screw securely.' },
  { title: 'Attach the display and set up the app', description: 'Click the thermostat display onto the base plate. Restore power. Follow the in-app setup: connect to your home WiFi, set your schedule and target temperatures. Most apps offer an energy-saving assistant to optimise settings.' },
]

export default function InstallASmartThermostat() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Install a smart thermostat</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £150–300 per year</p>
        <p className="text-gray-500 mb-6">1–2 hours · Intermediate · Saves £150–300/year on heating bills</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['install-a-smart-thermostat'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Install a smart thermostat" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="install-a-smart-thermostat" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Smart thermostats save money by learning your schedule and adjusting heating automatically. Studies show average savings of £150–300 per year on heating bills compared to a standard thermostat.</p>
          <p className="text-sm text-gray-700">This is a job involving low-voltage heating wiring (not mains electrical wiring). It is legal to do yourself in the UK. The risk is low if you follow the manufacturer wiring diagram carefully.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
    { icon: 'check', name: 'Cross-head screwdriver', hint: 'for wall plate and terminals', toolId: 'screwdriver-cross' },
    { icon: 'check', name: 'Phone or camera', hint: 'to photograph existing wiring before disconnecting' },
    { icon: 'buy', name: 'Smart thermostat kit', hint: 'buy — Nest, Hive, Tado, or Drayton Wiser are popular UK options', hintOrange: true },
  ]}
          slug="install-a-smart-thermostat"
          guideName="Install a smart thermostat"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['install-a-smart-thermostat']} />
        <StepProgress steps={steps} slug="install-a-smart-thermostat" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not checking compatibility first — some older boilers or system boilers need a different configuration or a professional install.</p>
          <p className="text-sm text-yellow-900 mb-2">Mixing up Live and Switched Live wires — the boiler will not fire correctly. Always follow the manufacturer's UK wiring diagram, not a generic one.</p>
          <p className="text-sm text-yellow-900">Not configuring the schedule properly — the default settings are rarely optimal. Spend 10 minutes in the app setting your actual heating times.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a heating engineer if...</h2>
          <p className="text-sm text-red-900 mb-1">Your system has more than 3 wires at the thermostat — it may be a more complex system requiring professional configuration</p>
          <p className="text-sm text-red-900 mb-1">The boiler does not fire after installation — do not leave the heating non-functional overnight in cold weather</p>
          <p className="text-sm text-red-900">You have an oil boiler, heat pump, or underfloor heating system — check compatibility requirements carefully</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Budget smart thermostat (self-install)</span><span className="font-medium">£60–90</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Premium smart thermostat (self-install)</span><span className="font-medium">£120–200</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Professional install cost</span><span className="font-medium">£80–150</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Annual savings once installed</span><span className="font-medium text-green-600">£150–300</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how heating control wiring works and how to replace a thermostat. This pays for itself in energy savings within the first year and gives you full control over your heating schedule from anywhere.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['install-a-smart-thermostat'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['install-a-smart-thermostat'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['install-a-smart-thermostat'].renterWarning}</p>
          </div>
        )}
        <GuideActions slug="install-a-smart-thermostat">
          <GuideExtras slug="install-a-smart-thermostat" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="install-a-smart-thermostat" title="Install a smart thermostat" href="/guides/install-a-smart-thermostat" />
      <MobileNav />
    </main>
  )
}
