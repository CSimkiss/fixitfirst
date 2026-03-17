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
  title: 'How to Fix a Sticking Door | FixItFirst',
  description: 'Fix a sticking door in under an hour. Step-by-step guide — covers dropped hinges, swollen wood, and sanding. Save £50–80 vs a carpenter.',
  openGraph: {
    title: 'How to Fix a Sticking Door | FixItFirst',
    description: 'Fix a sticking door in under an hour. Step-by-step guide — covers dropped hinges, swollen wood, and sanding. Save £50–80 vs a carpenter.',
    url: 'https://fixit-first.co.uk/guides/fix-a-sticking-door',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Find exactly where it sticks', description: 'Close the door slowly and watch and feel for where it drags. Mark the sticking point with a pencil on the door edge.' },
  { title: 'Check and tighten the hinges', description: 'Look at both hinges — top and bottom. Check every screw. Tighten any that are loose. A dropped top hinge is the most common cause of a sticking door.' },
  { title: 'Lubricate the edge', description: 'Rub a candle or bar of soap along the marked sticking area. Open and close the door several times. This often solves minor sticking without any sanding.' },
  { title: 'Sand the sticking area', description: 'If lubrication alone does not work, sand back the marked area with 80-grit paper, working in the direction of the grain. Remove a small amount and test — it is easier to remove more than to add it back.' },
  { title: 'Test after each pass', description: 'Re-hang the door and test before sanding more. You want it just free — not loose.' },
  { title: 'Seal the bare wood', description: 'Bare sanded wood absorbs moisture and will swell and stick again. Prime and paint or varnish any area you have sanded before the week is out.' },
]

export default function FixAStickingDoor() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a sticking door</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £50–80 today</p>
        <p className="text-gray-500 mb-6">45 mins · Beginner · Saves £50–80 vs a carpenter</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-sticking-door'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a sticking door" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-sticking-door" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Doors stick because of three things: loose hinges (most common), swollen wood from humidity, or a shifted door frame.</p>
          <p className="text-sm text-gray-700">Always check the hinges first. A single loose screw on a hinge causes the door to drop and drag — and tightening it takes 30 seconds.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
    { icon: 'check', name: 'Flat-head screwdriver', hint: 'to tighten hinge screws', toolId: 'screwdriver-flat' },
    { icon: 'check', name: 'Cross-head screwdriver', hint: 'some hinges use cross-head fixings', toolId: 'screwdriver-cross' },
    { icon: 'buy', name: '80-grit sandpaper', hint: 'buy — 4 if sanding is needed', hintOrange: true },
    { icon: 'buy', name: 'Candle or bar of soap', hint: 'free lubricant — rub on the door edge before sanding', hintOrange: true },
  ]}
          slug="fix-a-sticking-door"
          guideName="Fix a sticking door"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-sticking-door']} />
        <StepProgress steps={steps} slug="fix-a-sticking-door" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Reaching for sandpaper before checking the hinges — a loose hinge is the cause far more often.</p>
          <p className="text-sm text-yellow-900 mb-2">Removing too much material in one go — take small passes and test each time.</p>
          <p className="text-sm text-yellow-900">Not sealing the sanded area — it will stick again within weeks if left bare.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a carpenter if...</h2>
          <p className="text-sm text-red-900 mb-1">The door frame is visibly twisted, cracked, or no longer square</p>
          <p className="text-sm text-red-900 mb-1">The door sticks all the way around, not just at one point</p>
          <p className="text-sm text-red-900">The door has dropped so far that the hinges are pulling out of the frame</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Tightening hinges only</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">With sandpaper</span><span className="font-medium">£2–4</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Carpenter would charge</span><span className="font-medium text-red-600">£50–80</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand why doors stick and how to work through the causes systematically. This transfers to adjusting door frames, fitting new hinges, and hanging new internal doors.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['fix-a-sticking-door'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['fix-a-sticking-door'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-sticking-door'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="fix-a-sticking-door" />
        <NextGuide currentSlug="fix-a-sticking-door" />
      </div>
      <RecentViewTracker slug="fix-a-sticking-door" title="Fix a sticking door" href="/guides/fix-a-sticking-door" />
      <MobileNav />
    </main>
  )
}
