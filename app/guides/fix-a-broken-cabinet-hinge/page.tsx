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
  title: 'How to Fix a Broken Cabinet Hinge | FixItFirst',
  description: 'Fix a broken or misaligned cabinet hinge in 20 minutes. Step-by-step guide for concealed cup hinges. Save £30–60 vs calling a carpenter.',
  openGraph: {
    title: 'How to Fix a Broken Cabinet Hinge | FixItFirst',
    description: 'Fix a broken or misaligned cabinet hinge in 20 minutes. Step-by-step guide for concealed cup hinges. Save £30–60 vs calling a carpenter.',
    url: 'https://fixit-first.co.uk/guides/fix-a-broken-cabinet-hinge',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Identify the hinge type', description: 'Modern kitchen cabinets use concealed cup hinges. Older furniture may use butt hinges (flat, visible on the door edge). This guide covers cup hinges — the most common type.' },
  { title: 'Try the adjustment screws first', description: 'Every concealed hinge has two or three adjustment screws. The screw closest to the door moves it in and out; the side screw moves it left and right; some have a third for up and down. Try small turns — a quarter-turn makes a visible difference.' },
  { title: 'Tighten any loose mounting screws', description: "Check the screws on the mounting plate (fixed to the cabinet wall) and the cup screws (fixed into the door). A 'broken' hinge is often just loose." },
  { title: 'Remove a damaged hinge', description: 'If the hinge body is cracked or a screw hole is stripped, unscrew the hinge from both the door and the cabinet wall. Take it to a hardware shop to match the cup size (usually 35mm) and arm length.' },
  { title: 'Fit the replacement', description: 'Press the cup into the hole in the door and secure with the screws. Clip or screw the arm to the mounting plate. Close the door and check alignment.' },
  { title: 'Align to match neighbouring doors', description: 'Use the adjustment screws to align the door so it is parallel with adjacent doors, with even gaps at top, bottom, and sides.' },
]

export default function FixABrokenCabinetHinge() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a broken cabinet hinge</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £30–60 today</p>
        <p className="text-gray-500 mb-6">20 mins · Beginner · Saves £30–60 vs a carpenter</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-broken-cabinet-hinge'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a broken cabinet hinge" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-broken-cabinet-hinge" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Most kitchen and bathroom cabinets use concealed cup hinges — the kind with a large round cup pressed into the door. These are designed to be adjusted and replaced without tools beyond a screwdriver.</p>
          <p className="text-sm text-gray-700">Before buying a new hinge, try the adjustment screws. Most drooping or misaligned cabinet doors just need a small tweak with a cross-head screwdriver — no new parts required.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
    { icon: 'check', name: 'Cross-head screwdriver', hint: 'for all hinge screws', toolId: 'screwdriver-cross' },
    { icon: 'buy', name: 'Replacement hinge', hint: 'buy — take the old hinge to match the cup diameter, usually 35mm, and the arm length', hintOrange: true },
  ]}
          slug="fix-a-broken-cabinet-hinge"
          guideName="Fix a broken cabinet hinge"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-broken-cabinet-hinge']} />
        <StepProgress steps={steps} slug="fix-a-broken-cabinet-hinge" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Buying a replacement before trying the adjustment screws — most sagging doors just need a half-turn.</p>
          <p className="text-sm text-yellow-900 mb-2">Buying the wrong cup size — 35mm is standard but not universal. Take the old hinge to match it.</p>
          <p className="text-sm text-yellow-900">Overtightening — the screws seat into soft MDF in most flat-pack cabinets. Use firm but gentle pressure.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a carpenter if...</h2>
          <p className="text-sm text-red-900 mb-1">The screw holes in the door are completely stripped and the wood is crumbling</p>
          <p className="text-sm text-red-900">Multiple hinges have failed on the same cabinet — may indicate the cabinet is damaged beyond repair</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Adjustment only (no new parts)</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Single replacement hinge</span><span className="font-medium">£3–5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Set of 2 hinges</span><span className="font-medium">£6–10</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Carpenter would charge</span><span className="font-medium text-red-600">£30–60</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how concealed cup hinges work and how to adjust them. This applies to every kitchen, bathroom, and wardrobe cabinet with this hinge type — which is most of them.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['fix-a-broken-cabinet-hinge'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['fix-a-broken-cabinet-hinge'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-broken-cabinet-hinge'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="fix-a-broken-cabinet-hinge" />
        <NextGuide currentSlug="fix-a-broken-cabinet-hinge" />
      </div>
      <RecentViewTracker slug="fix-a-broken-cabinet-hinge" title="Fix a broken cabinet hinge" href="/guides/fix-a-broken-cabinet-hinge" />
      <MobileNav />
    </main>
  )
}
