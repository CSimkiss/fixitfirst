import type { Metadata } from 'next'
import StepProgress from '@/components/StepProgress'
import CompleteButton from '@/components/CompleteButton'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import ToolsWarning from '@/components/ToolsWarning'
import { GUIDE_TOOLS } from '@/lib/tools'
import RecentViewTracker from '@/components/RecentViewTracker'
import SocialShare from '@/components/SocialShare'
import GuideExtras from '@/components/GuideExtras'
import PrintButton from '@/components/PrintButton'
import NextGuide from '@/components/NextGuide'
import DifficultyComparison from '@/components/DifficultyComparison'
import { GUIDE_META } from '@/lib/guide-meta'

export const metadata: Metadata = {
  title: 'Fix a Doorbell | FixItFirst',
  description: 'Fix a broken doorbell in 30 minutes. Step-by-step guide covering batteries, button faults, wiring, and wireless replacements. Save £40–80.',
}

const steps = [
  { title: 'Replace the batteries first', description: 'Open the chime unit inside your home (the box that makes the sound). Replace all batteries with fresh ones and test. This solves most doorbell faults.' },
  { title: 'Inspect the button outside', description: 'Unscrew the button from the wall — usually two small screws. Look at the two wire terminals. Clean any green corrosion with a dry cloth or fine sandpaper.' },
  { title: 'Test the button directly', description: 'With the button removed, briefly touch the two wires together for a second. If the chime sounds, the button is the fault — replace it.' },
  { title: 'Replace the button if faulty', description: 'Take the old button to a hardware shop to match the style. Connect the two wires to the terminals on the new button (polarity does not matter for doorbells) and screw it back to the wall.' },
  { title: 'Check the wiring', description: 'Trace the wire from the button along the wall to the chime unit. Look for any breaks, sharp kinks, or loose connections at either end. Reconnect any loose terminals.' },
  { title: 'Consider a wireless upgrade', description: 'If the wiring is old or hidden in the wall and unreliable, a wireless doorbell (£15–25) eliminates the wiring altogether and takes 10 minutes to fit.' },
]

export default function FixADoorbell() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a doorbell</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £40–80 today</p>
        <p className="text-gray-500 mb-6">30 mins · Beginner · Saves £40–80 vs an electrician</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-doorbell'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a doorbell" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-doorbell" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Most doorbell faults are simple: dead batteries, a corroded button, or a loose wire. Check in that order — you will fix it in 10 minutes 70% of the time.</p>
          <p className="text-sm text-gray-700 mb-2">This guide covers standard battery-powered and low-voltage wired doorbells. If your doorbell is hardwired to the mains (no battery, no transformer visible), stop and call an electrician.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Cross-head screwdriver</span> — to remove the button from the wall</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Flat-head screwdriver</span> — to open terminal connections</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement batteries</span> — <span className="text-orange-600">buy: buy: £3–5 — check the chime unit inside; most use AA or a 9V block</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement button</span> — <span className="text-orange-600">buy: buy: £5–10 if the button is faulty</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-doorbell']} />
        <StepProgress steps={steps} slug="fix-a-doorbell" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not checking batteries first — it is the cause in the majority of cases and takes 30 seconds.</p>
          <p className="text-sm text-yellow-900 mb-2">Assuming the wiring is the problem without testing the button directly first.</p>
          <p className="text-sm text-yellow-900">Buying a wired replacement button without checking the wire length and connection type.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">The doorbell is hardwired to the mains — no batteries or transformer visible</p>
          <p className="text-sm text-red-900 mb-1">There is a burning smell or scorch marks near the chime unit</p>
          <p className="text-sm text-red-900">It is a smart video doorbell with complex wiring you are not familiar with</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">New batteries</span><span className="font-medium">£3–5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">New button</span><span className="font-medium">£5–10</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Wireless doorbell system</span><span className="font-medium">£15–25</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Electrician would charge</span><span className="font-medium text-red-600">£40–80</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You can now diagnose a doorbell fault systematically — batteries, button, then wiring. This logical approach to fault-finding applies to any low-voltage electrical system.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['fix-a-doorbell'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['fix-a-doorbell'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-doorbell'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="fix-a-doorbell" />
        <NextGuide currentSlug="fix-a-doorbell" />
      </div>
      <RecentViewTracker slug="fix-a-doorbell" title="Fix a doorbell" href="/guides/fix-a-doorbell" />
      <MobileNav />
    </main>
  )
}
