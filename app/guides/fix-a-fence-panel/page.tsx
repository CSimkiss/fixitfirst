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
  title: 'Fix a Fence Panel | FixItFirst',
  description: 'Fix or replace a fence panel in 2 hours. Step-by-step guide covering panel replacement, post repair, and weatherproofing. Save £100–200.',
}

const steps = [
  { title: 'Assess the damage', description: 'Check whether the issue is with the panel, the post, or both. A loose or broken panel can usually be replaced or reattached. A rotten or leaning post is more serious — a panel fixed to a rotten post will fail again within months.' },
  { title: 'Check the fence posts are solid', description: 'Push and pull each adjacent post firmly. A solid post doesn\'t move. If a post rocks, check the base — wooden posts rot underground. Use a long screwdriver to probe the buried section. If it enters the wood easily, the post is rotten and needs replacing before the panel.' },
  { title: 'Remove the damaged panel', description: 'Fence panels are usually held by nails, screws, or panel clips on the side of the posts. Remove any fixings and lift the panel straight up — most panels slot into channels on the posts or rest on gravel boards. Lean the old panel safely to avoid it falling.' },
  { title: 'Measure and buy a replacement panel', description: 'UK fence panels are standardised at 6ft (1.83m) wide. The height is typically 3ft, 4ft, 5ft, or 6ft — measure your existing panels. Note the style: lap panel, featheredge, closeboard, or trellis. Most DIY stores stock standard sizes.' },
  { title: 'Fit the replacement panel', description: 'Slot the panel into the post channels or rest it on the gravel board. Fix in place with galvanised nails or screws — one per side into each post at top, middle, and bottom. Galvanised fixings are essential outdoors — standard steel screws will rust and fail.' },
  { title: 'Treat with wood preservative', description: 'Apply fence preservative or wood stain to all cut edges and to any bare wood exposed during the repair. Pay particular attention to the bottom edge of the panel — this is where moisture enters first. Retreating your whole fence every 2–3 years significantly extends its life.' },
]

export default function FixAFencePanel() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a fence panel</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £100–200 today</p>
        <p className="text-gray-500 mb-6">2 hours · Beginner · Saves £100–200 vs a fencer</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-fence-panel'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a fence panel" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-fence-panel" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">In England and Wales, boundary responsibility is defined in your title deeds — check which side of the fence is yours before spending money on repairs. The convention is the posts face your side, but this is not always the legal boundary.</p>
          <p className="text-sm text-gray-700">After a storm, check all panels and posts — even those that look fine may have weakened fixings that will fail in the next storm.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Hammer and nail bar / pry bar</span> — to remove old nails and panel</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Tape measure</span> — to confirm panel size before buying</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Drill and screwdriver</span> — for galvanised screws</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement fence panel</span> — <span className="text-orange-600">buy: £20–60 — standard 6ft wide panels from any DIY store</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Galvanised screws or nails</span> — <span className="text-orange-600">buy: £3–6 — must be galvanised for outdoor use</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Fence preservative</span> — <span className="text-orange-600">buy: £8–15 — apply to all bare wood after fitting</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-fence-panel']} />
        <StepProgress steps={steps} slug="fix-a-fence-panel" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Fixing a panel to a rotten post — the post will fail again within the year. Always check posts before fitting new panels.</p>
          <p className="text-sm text-yellow-900 mb-2">Using standard screws or nails outdoors — they rust and expand, splitting the wood and eventually falling out. Always use galvanised or stainless fixings.</p>
          <p className="text-sm text-yellow-900">Not treating cut ends — untreated wood soaks up moisture quickly, especially at cut ends and the bottom of panels where water pools.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a fencer if...</h2>
          <p className="text-sm text-red-900 mb-1">Multiple posts are rotten — replacing posts requires concrete work and is significantly harder than panel replacement</p>
          <p className="text-sm text-red-900 mb-1">The fence is on a sloped site and needs special installation — panels need to be stepped or raked to fit</p>
          <p className="text-sm text-red-900">There is a dispute with a neighbour about the boundary — get the boundary agreed before spending on repairs</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Panel + fixings + preservative</span><span className="font-medium">£30–80</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Panel + post replacement</span><span className="font-medium">£60–120</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Fencer would charge per panel</span><span className="font-medium text-red-600">£100–200 (labour + materials)</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to assess fence damage, replace a panel, and maintain wood to extend its life. The same principles apply to gate repairs, trellis fixing, and decking maintenance.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['fix-a-fence-panel'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['fix-a-fence-panel'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-fence-panel'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="fix-a-fence-panel" />
        <NextGuide currentSlug="fix-a-fence-panel" />
      </div>
      <RecentViewTracker slug="fix-a-fence-panel" title="Fix a fence panel" href="/guides/fix-a-fence-panel" />
      <MobileNav />
    </main>
  )
}
