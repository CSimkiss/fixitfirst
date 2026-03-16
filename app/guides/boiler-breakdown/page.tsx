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
  title: 'What to Do If Your Boiler Breaks Down | FixItFirst',
  description: 'Boiler broken? Work through this checklist before calling an engineer. Covers error codes, pressure, pilot light, and when to call for help.',
}

const steps = [
  { title: 'Check the pressure gauge', description: 'Look at the pressure gauge on the boiler front. It should read 1–1.5 bar. Below 1 bar means the system needs repressurising — see our repressurising guide. This is the most common cause of a boiler stopping.' },
  { title: 'Read the error code', description: 'Modern boilers display an error code when they lock out. Write down the code and search for it along with your boiler model — the manual or manufacturer website will explain the cause and often the fix.' },
  { title: 'Press the reset button', description: 'Most boilers have a reset button (often labelled Reset or with a flame symbol). Hold it for 3–5 seconds. The boiler will attempt to restart. If it locks out again immediately, there is an underlying fault.' },
  { title: 'Check the condensate pipe', description: 'In freezing weather, the condensate pipe (a white plastic pipe running outside) can freeze and block. Pour warm (not boiling) water over the external section to thaw it. The boiler should restart after a reset.' },
  { title: 'Check the electricity supply', description: 'Check your consumer unit — the boiler circuit may have tripped. If the breaker is down, reduce the load on that circuit and reset it.' },
  { title: 'Call a Gas Safe engineer', description: 'If none of the above fixes the fault, call a registered Gas Safe engineer. Do not attempt to open the boiler casing or work on the gas supply — this is illegal and dangerous.' },
]

export default function BoilerBreakdown() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">What to do if your boiler breaks down</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £100–300 today</p>
        <p className="text-gray-500 mb-6">30 mins · Beginner · Could save you a call-out</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['boiler-breakdown'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="What to do if your boiler breaks down" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="boiler-breakdown" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Most boiler faults have simple causes — low pressure, a tripped circuit, or an error code with a known fix. Work through this checklist before paying for an engineer call-out.</p>
          <p className="text-sm text-gray-700 mb-2">If you smell gas at any point: do not touch any switches, leave the house immediately, and call the National Gas Emergency line on 0800 111 999.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Boiler manual</span> — often kept in a kitchen drawer or downloadable from the manufacturer's website using the model number</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Nothing else needed</span> — all the checks are visual</span>
            </li>
          </ul>
        </div>
        {/* No tracked tools for this guide */}
        <StepProgress steps={steps} slug="boiler-breakdown" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Repeatedly pressing reset without fixing the underlying fault — the boiler will just lock out again and could make the fault worse.</p>
          <p className="text-sm text-yellow-900 mb-2">Pouring boiling water on a frozen condensate pipe — use warm water; boiling can crack the plastic pipe.</p>
          <p className="text-sm text-yellow-900">Ignoring a gas smell to try the checklist — gas smell means leave the building and call the emergency line immediately.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a Gas Safe heating engineer if...</h2>
          <p className="text-sm text-red-900 mb-1">You smell gas — leave immediately and call 0800 111 999</p>
          <p className="text-sm text-red-900 mb-1">The boiler resets but locks out again within minutes</p>
          <p className="text-sm text-red-900">There is water leaking from inside the boiler casing</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Working through this checklist</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Engineer call-out fee</span><span className="font-medium">£80–150</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Common repair (e.g. pump, valve)</span><span className="font-medium text-red-600">£150–350</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to diagnose the most common boiler faults, read error codes, and understand when a problem is fixable yourself and when you need a professional.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-blue-800 mb-3">What this unlocks</h2>
          <p className="text-sm text-blue-900">With this knowledge, you can handle repressurise fixes, frozen condensate faults, and tripped circuits yourself — and have a much more informed conversation with an engineer when you do need one.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['boiler-breakdown'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['boiler-breakdown'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['boiler-breakdown'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="boiler-breakdown" />
        <NextGuide currentSlug="boiler-breakdown" />
      </div>
      <RecentViewTracker slug="boiler-breakdown" title="What to do if your boiler breaks down" href="/guides/boiler-breakdown" />
      <MobileNav />
    </main>
  )
}
