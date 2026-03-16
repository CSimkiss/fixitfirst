import type { Metadata } from 'next'
import StepProgress from '@/components/StepProgress'
import CompleteButton from '@/components/CompleteButton'
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
import NextGuide from '@/components/NextGuide'
import DifficultyComparison from '@/components/DifficultyComparison'
import { GUIDE_META } from '@/lib/guide-meta'

export const metadata: Metadata = {
  title: 'How to Replace a Light Switch | FixItFirst',
  description: 'Replace a light switch safely in 30 minutes. Step-by-step UK guide — covers turning off power, wiring, and fitting the new plate. Save £60–100.',
  openGraph: {
    title: 'How to Replace a Light Switch | FixItFirst',
    description: 'Replace a light switch safely in 30 minutes. Step-by-step UK guide — covers turning off power, wiring, and fitting the new plate. Save £60–100.',
    url: 'https://fixit-first.co.uk/guides/replace-a-light-switch',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Turn off the power at the consumer unit', description: 'Find the lighting circuit breaker for this room in your consumer unit and switch it off. Test the light confirms the power is off.' },
  { title: 'Remove the old switch plate', description: 'Undo the two screws on the face plate. Gently ease it away from the wall — the wires are still connected behind it.' },
  { title: 'Photograph the wiring', description: 'Before touching anything, take a clear photo showing exactly which wire goes to which terminal. This is your reference if anything looks unclear later.' },
  { title: 'Disconnect the wires', description: 'Loosen each terminal screw and pull the wire free. Note the terminal labels — COM (common), L1, L2.' },
  { title: 'Connect the new switch', description: 'Using your photo as a guide, reconnect each wire to the matching terminal on the new switch. Tighten each terminal screw firmly so the wire cannot pull free.' },
  { title: 'Fit and test', description: 'Fold the wires carefully back into the backbox, screw the new plate in, restore power at the consumer unit, and test the switch.' },
]

export default function ReplaceALightSwitch() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Replace a light switch</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £60–100 today</p>
        <p className="text-gray-500 mb-6">30 mins · Beginner · Saves £60–100 vs an electrician</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['replace-a-light-switch'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Replace a light switch" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="replace-a-light-switch" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Replacing a light switch is one of the safest electrical jobs at home. Light switches carry low current, and the work is entirely at the switch — not at the consumer unit.</p>
          <p className="text-sm text-gray-700 mb-2">The critical rule: always turn off the power at the consumer unit before touching any wiring. Not just the switch itself — the actual circuit breaker.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
    { icon: 'check', name: 'Flat-head screwdriver', hint: 'to open terminal screws', toolId: 'screwdriver-flat' },
    { icon: 'check', name: 'Cross-head screwdriver', hint: 'to remove the face plate', toolId: 'screwdriver-cross' },
    { icon: 'check', name: 'Phone camera', hint: 'photograph the wiring before disconnecting anything' },
    { icon: 'check', name: 'Pipe & cable detector', hint: 'to confirm no cables in the wall before any drilling', toolId: 'cable-detector' },
    { icon: 'buy', name: 'Replacement switch', hint: 'buy: buy: £5–15 — standard 1-gang or 2-gang white plate from any hardware shop', hintOrange: true },
  ]}
          slug="replace-a-light-switch"
          guideName="Replace a light switch"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['replace-a-light-switch']} />
        <StepProgress steps={steps} slug="replace-a-light-switch" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not turning off the power at the consumer unit — turning off the switch is not enough. The live wire is still live.</p>
          <p className="text-sm text-yellow-900 mb-2">Reconnecting wires to the wrong terminals — always use your photo as a reference.</p>
          <p className="text-sm text-yellow-900">Overtightening the face plate screws — this cracks the plastic. Finger-tight plus a quarter-turn is enough.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">You find more than 3 wires at the switch — this may be two-way switching or loop wiring</p>
          <p className="text-sm text-red-900 mb-1">There is any burning smell or discolouration on the existing wiring</p>
          <p className="text-sm text-red-900">You are not confident after seeing the wiring — there is no shame in stopping</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement switch plate</span><span className="font-medium">£5–15</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">With matching sockets to update the room</span><span className="font-medium">£20–40</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Electrician would charge</span><span className="font-medium text-red-600">£60–100</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how a single-gang light switch is wired and how to safely isolate a circuit. This transfers to replacing plug sockets and fitting dimmer switches.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['replace-a-light-switch'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['replace-a-light-switch'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['replace-a-light-switch'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="replace-a-light-switch" />
        <NextGuide currentSlug="replace-a-light-switch" />
      </div>
      <RecentViewTracker slug="replace-a-light-switch" title="Replace a light switch" href="/guides/replace-a-light-switch" />
      <MobileNav />
    </main>
  )
}
