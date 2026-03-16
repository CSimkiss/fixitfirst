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
  title: 'Fix a Sticking Drawer | FixItFirst',
  description: 'Fix a sticking drawer in 15 minutes with no tools. Step-by-step guide covering wooden runners, metal runners, and humidity swelling. Save £30–50.',
}

const steps = [
  { title: 'Pull the drawer out completely', description: 'Remove it fully so you can inspect the runners and the sides of the drawer box.' },
  { title: 'Clean the runners', description: 'Wipe the wooden or metal runners inside the cabinet, and the sides and bottom edges of the drawer, with a dry cloth. Remove any grit, crumbs, or old wax build-up.' },
  { title: 'Check the runners for damage', description: 'Look for splinters on wooden runners, or bent sections on metal runners. Bent metal runners can often be carefully straightened with pliers.' },
  { title: 'Wax the runners', description: 'Rub a candle or dry bar of soap along the wooden runners and the sides of the drawer. Cover the full length. This is the most effective fix for wooden drawer systems.' },
  { title: 'Replace and test', description: 'Slide the drawer back in and test. It should move smoothly. If still stiff, apply more wax and test again.' },
  { title: 'Sand if still sticking', description: 'If wax does not fully solve it, lightly sand the sides of the drawer with 120-grit paper — a few strokes per side. Test after each pass. Seal with wood varnish when done.' },
]

export default function FixAStickingDrawer() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a sticking drawer</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £30–50 today</p>
        <p className="text-gray-500 mb-6">15 mins · Beginner · Saves £30–50 vs a carpenter</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-sticking-drawer'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a sticking drawer" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-sticking-drawer" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Most sticky drawers are caused by humidity making the wood swell, or grit and debris on the runners. Wax and a clean fixes it in minutes.</p>
          <p className="text-sm text-gray-700 mb-2">Pull the drawer completely out first — look at the runners and the drawer sides. That tells you exactly what you are dealing with.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Nothing essential</span> — most fixes need no tools at all</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Candle or bar of soap</span> — <span className="text-orange-600">buy: free — the best lubricant for wooden runners</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">120-grit sandpaper</span> — <span className="text-orange-600">buy: buy: £2 — only needed if wax alone does not fix it</span></span>
            </li>
          </ul>
        </div>
        {/* No tracked tools for this guide */}
        <StepProgress steps={steps} slug="fix-a-sticking-drawer" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Sanding before cleaning and waxing — wax alone solves it in most cases.</p>
          <p className="text-sm text-yellow-900 mb-2">Over-sanding — the drawer will then be too loose and rattle. Make small passes.</p>
          <p className="text-sm text-yellow-900">Ignoring metal runner issues — if the metal runner is bent or the wheel is broken, wax will not help. Inspect before waxing.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a carpenter if...</h2>
          <p className="text-sm text-red-900 mb-1">The drawer box itself is cracked, split, or delaminating</p>
          <p className="text-sm text-red-900">The drawer is from a fitted kitchen unit still under warranty — check before modifying</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Wax lubrication only</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">With sandpaper</span><span className="font-medium">£2–3</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Carpenter would charge</span><span className="font-medium text-red-600">£30–50</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know why drawers stick and how to fix them with minimal effort. This technique works on any wooden furniture — chests of drawers, wardrobes, and bedside tables.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['fix-a-sticking-drawer'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['fix-a-sticking-drawer'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-sticking-drawer'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="fix-a-sticking-drawer" />
        <NextGuide currentSlug="fix-a-sticking-drawer" />
      </div>
      <RecentViewTracker slug="fix-a-sticking-drawer" title="Fix a sticking drawer" href="/guides/fix-a-sticking-drawer" />
      <MobileNav />
    </main>
  )
}
