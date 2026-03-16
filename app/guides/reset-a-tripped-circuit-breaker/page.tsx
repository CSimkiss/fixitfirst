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
  title: 'How to Reset a Tripped Circuit Breaker | FixItFirst',
  description: 'Reset a tripped circuit breaker in 10 minutes. Step-by-step guide to your consumer unit — covers overloads, faults, and RCD trips. Save £40–60.',
  openGraph: {
    title: 'How to Reset a Tripped Circuit Breaker | FixItFirst',
    description: 'Reset a tripped circuit breaker in 10 minutes. Step-by-step guide to your consumer unit — covers overloads, faults, and RCD trips. Save £40–60.',
    url: 'https://fixit-first.co.uk/guides/reset-a-tripped-circuit-breaker',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Find the consumer unit', description: 'Open the cover of your consumer unit (the grey or white box with rows of switches). Look for a breaker that has tripped to the middle or off position — it will be out of line with the others.' },
  { title: 'Identify the circuit', description: 'The breakers are usually labelled — upstairs sockets, downstairs lights, etc. Knowing which one tripped tells you where to look for the cause.' },
  { title: 'Reduce the load first', description: 'If the breaker tripped due to overload (too many appliances on one circuit), unplug several items from that circuit before resetting. Overloaded circuits are the most common cause.' },
  { title: 'Reset the breaker', description: 'Push the switch firmly all the way to off, then back up to on. It should click and stay in the on position.' },
  { title: 'Test the circuit', description: 'Turn on a light or plug in one appliance to confirm power is restored on that circuit.' },
  { title: 'If it trips again', description: 'Unplug every appliance on that circuit one at a time, then reset. When the breaker stays up with one item unplugged, that item is faulty — do not use it.' },
]

export default function ResetATrippedCircuitBreaker() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset a tripped circuit breaker</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £40–60 today</p>
        <p className="text-gray-500 mb-6">10 mins · Beginner · Saves £40–60 vs an electrician</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['reset-a-tripped-circuit-breaker'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Reset a tripped circuit breaker" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="reset-a-tripped-circuit-breaker" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">A tripped circuit breaker is a safety feature, not a fault. It has cut the power to protect your wiring. Resetting it takes 2 minutes.</p>
          <p className="text-sm text-gray-700 mb-2">Your consumer unit (fuse box) is usually under the stairs, in the hallway, or in the kitchen. Open it and look for any switch that is in a different position to the others.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">No tools needed</span> — just your consumer unit</span>
            </li>
          </ul>
        </div>
        {/* No tracked tools for this guide */}
        <StepProgress steps={steps} slug="reset-a-tripped-circuit-breaker" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Resetting without reducing the load — it will just trip again immediately.</p>
          <p className="text-sm text-yellow-900 mb-2">Ignoring a breaker that keeps tripping — a recurring trip means a fault that needs an electrician.</p>
          <p className="text-sm text-yellow-900">Confusing the RCD (the large test switch) with individual breakers — if the RCD has tripped, press Test and then reset it by pushing firmly up.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">The breaker will not stay on after resetting with all appliances unplugged</p>
          <p className="text-sm text-red-900 mb-1">There is a burning smell or scorch marks near the consumer unit</p>
          <p className="text-sm text-red-900">The RCD will not reset and keeps tripping</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Resetting yourself</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Electrician to investigate a fault</span><span className="font-medium">£80–150</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Electrician emergency call-out</span><span className="font-medium text-red-600">£100–250</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how your consumer unit works, what a trip means, and how to safely reset it. Knowing your circuit labels is one of the most useful things you can do as a homeowner.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['reset-a-tripped-circuit-breaker'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['reset-a-tripped-circuit-breaker'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['reset-a-tripped-circuit-breaker'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="reset-a-tripped-circuit-breaker" />
        <NextGuide currentSlug="reset-a-tripped-circuit-breaker" />
      </div>
      <RecentViewTracker slug="reset-a-tripped-circuit-breaker" title="Reset a tripped circuit breaker" href="/guides/reset-a-tripped-circuit-breaker" />
      <MobileNav />
    </main>
  )
}
