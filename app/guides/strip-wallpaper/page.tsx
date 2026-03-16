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
  title: 'How to Strip Wallpaper | FixItFirst',
  description: 'Strip wallpaper in half a day with the right tools and technique. Step-by-step beginner guide. Save £100–200 vs a decorator.',
}

const steps = [
  { title: 'Protect the floor', description: 'Lay dustsheets across the whole floor and tape them against the skirting boards. Wallpaper stripping creates a mess and the water can damage wooden floors.' },
  { title: 'Score the wallpaper', description: 'If the paper is vinyl-coated (shiny or waterproof surface), run the wallpaper scorer in circular motions across the surface. This breaks through the coating and lets water in. Do not press so hard that you damage the plaster.' },
  { title: 'Soak the wall', description: 'Mix stripping solution with warm water according to the pack. Apply generously with a sponge and leave for 5–10 minutes. The paper should feel damp and begin to soften.' },
  { title: 'Strip in sections', description: 'Work in sections roughly 60cm wide. Start at a seam or corner and slide the scraper under the paper at a low angle. Push along rather than pulling — you will tear less paper this way.' },
  { title: 'Soak stubborn patches again', description: 'If sections resist, apply more water and wait another 5 minutes. Forcing dry paper tears it and leaves small pieces that take much longer to remove.' },
  { title: 'Clean the walls', description: 'Once all paper is removed, wash down the walls with clean warm water to remove the adhesive residue. Allow to dry for 24–48 hours before painting or re-papering.' },
]

export default function StripWallpaper() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Strip wallpaper</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £100–200 today</p>
        <p className="text-gray-500 mb-6">Half a day · Beginner · Saves £100–200 vs a decorator</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['strip-wallpaper'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Strip wallpaper" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="strip-wallpaper" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Stripping wallpaper is straightforward but hard work. The key is soaking the paper properly — rushing it causes the paper to tear into tiny pieces and takes four times as long.</p>
          <p className="text-sm text-gray-700">Test a small area first. Some wallpaper strips dry in one piece (vinyl-coated paper). Most paper-backed wallpaper needs soaking with water or a stripping solution.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Plastic dustsheets or newspaper</span> — to protect the floor and skirting</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Bucket and large sponge</span> — for applying the soaking solution</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Wallpaper scorer</span> — <span className="text-orange-600">buy: £3–5 — scores the surface so water penetrates through vinyl-coated wallpaper</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Stripping solution</span> — <span className="text-orange-600">buy: £4–8 — mix with warm water; warm water alone works for uncoated paper</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Broad scraper (4–6 inch)</span> — <span className="text-orange-600">buy: £5–10 if you do not have one</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['strip-wallpaper']} />
        <StepProgress steps={steps} slug="strip-wallpaper" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not soaking long enough — this is the single biggest cause of slow, frustrating stripping.</p>
          <p className="text-sm text-yellow-900 mb-2">Skipping the scorer on vinyl paper — water will not penetrate and the paper will not budge.</p>
          <p className="text-sm text-yellow-900">Not protecting the floor — the water and paste make a substantial mess on wooden or laminate floors.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a decorator if...</h2>
          <p className="text-sm text-red-900 mb-1">The plaster beneath the paper is crumbling or coming away — stripping has damaged the wall</p>
          <p className="text-sm text-red-900 mb-1">There is mould behind the wallpaper — treat the mould and find the source of damp before redecorating</p>
          <p className="text-sm text-red-900">Multiple layers of very old paper — this can take significantly longer and may need a steam stripper</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Scorer, stripping solution, scraper</span><span className="font-medium">£12–23</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Steam stripper hire (if needed)</span><span className="font-medium">£25–40 per day</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Decorator would charge</span><span className="font-medium text-red-600">£100–200</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to remove wallpaper efficiently and prepare walls for redecoration. This is the first step in transforming any room.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['strip-wallpaper'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['strip-wallpaper'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['strip-wallpaper'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="strip-wallpaper" />
        <NextGuide currentSlug="strip-wallpaper" />
      </div>
      <RecentViewTracker slug="strip-wallpaper" title="Strip wallpaper" href="/guides/strip-wallpaper" />
      <MobileNav />
    </main>
  )
}
