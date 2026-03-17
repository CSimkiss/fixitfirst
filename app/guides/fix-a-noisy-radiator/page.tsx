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
  title: 'How to Fix a Noisy Radiator | FixItFirst',
  description: 'Fix a noisy radiator in 30 minutes. Step-by-step guide — diagnose banging, gurgling, ticking, or hissing and fix it yourself. Save £50–80.',
  openGraph: {
    title: 'How to Fix a Noisy Radiator | FixItFirst',
    description: 'Fix a noisy radiator in 30 minutes. Step-by-step guide — diagnose banging, gurgling, ticking, or hissing and fix it yourself. Save £50–80.',
    url: 'https://fixit-first.co.uk/guides/fix-a-noisy-radiator',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Identify the noise type', description: 'Different noises indicate different faults. Gurgling or bubbling = trapped air (bleed the radiator). Banging or hammering = water hammer from pressure surges (lower boiler pressure). Ticking or clicking = normal thermal expansion, but loud ticking may mean pipe brackets need adjustment. Hissing = valve leak.' },
  { title: 'Fix gurgling — bleed the radiator', description: 'A gurgling sound means air trapped in the radiator. Turn the heating off and let it cool for 20 minutes. Insert a bleed key into the valve at the top corner, turn anticlockwise a quarter-turn, let air hiss out, close when water appears.' },
  { title: 'Fix banging — check boiler pressure', description: 'Water hammer (banging or clunking) often happens when boiler pressure is too high (over 2 bar) or when the pump speed is set too fast. Check the boiler pressure gauge — if over 2 bar, bleed a radiator to reduce pressure. If the pump has speed settings, reduce by one level.' },
  { title: 'Fix ticking — check pipe brackets', description: 'Ticking and clicking as the heating warms up is usually pipes expanding through brackets. Locate the section of pipe making the noise and check if the pipe is rubbing tightly against a clip or bracket. Loosen the bracket slightly or insert a small piece of foam between the pipe and bracket.' },
  { title: 'Fix hissing — check valves', description: 'A hissing sound from the radiator valve usually means the valve gland packing is worn and water or steam is escaping. Tighten the packing nut slightly (the nut just below the valve head) by half a turn. If it continues or water is visible, the valve needs replacing.' },
  { title: 'Test after each fix', description: 'Turn the heating back on and run for 30 minutes. Listen carefully — most noises resolve after bleeding or pressure adjustment. If noise persists after all steps, the cause may be pump-related or deep in the pipework — call a heating engineer.' },
]

export default function FixANoisyRadiator() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a noisy radiator</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £50–80 today</p>
        <p className="text-gray-500 mb-6">30 mins · Beginner · Saves £50–80 vs a heating engineer</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['fix-a-noisy-radiator'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Fix a noisy radiator" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="fix-a-noisy-radiator" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Most radiator noises are caused by one of four things: trapped air (gurgling), thermal expansion (ticking), water hammer (banging), or a worn valve (hissing). Listen carefully to identify which type of noise you have — the fix is different for each.</p>
          <p className="text-sm text-gray-700">Some ticking when the heating first comes on is completely normal — metal expanding as it heats. The noise should stop once the system reaches temperature.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
    { icon: 'check', name: 'Adjustable spanner', hint: 'to adjust valve packing nuts', toolId: 'adjustable-spanner' },
    { icon: 'check', name: 'Old cloth', hint: 'to catch drips when bleeding' },
    { icon: 'buy', name: 'Radiator bleed key', hint: 'buy — needed for gurgling radiators', hintOrange: true, toolId: 'bleed-key' },
    { icon: 'buy', name: 'Pipe foam or felt', hint: 'buy — to cushion pipes rattling in brackets', hintOrange: true },
  ]}
          slug="fix-a-noisy-radiator"
          guideName="Fix a noisy radiator"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['fix-a-noisy-radiator']} />
        <StepProgress steps={steps} slug="fix-a-noisy-radiator" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Immediately bleeding a banging radiator — banging is usually water hammer from pressure, not air. Check the pressure gauge first.</p>
          <p className="text-sm text-yellow-900 mb-2">Over-tightening a hissing valve packing nut — too tight and the valve handle won't turn. Half a turn at a time is enough.</p>
          <p className="text-sm text-yellow-900">Accepting loud noise as normal — sustained banging or gurgling that never stops indicates an ongoing fault that will worsen over time.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a heating engineer if...</h2>
          <p className="text-sm text-red-900 mb-1">The noise is coming from inside the boiler itself (not the radiators or pipes)</p>
          <p className="text-sm text-red-900 mb-1">A valve is leaking water visibly and tightening has not helped</p>
          <p className="text-sm text-red-900">Loud banging persists after adjusting boiler pressure — may indicate pump failure</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Bleed key + foam padding</span><span className="font-medium">£4–8</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement radiator valve</span><span className="font-medium">£15–40</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Heating engineer call-out</span><span className="font-medium text-red-600">£50–80</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You can now diagnose radiator noise by type and apply the correct fix. Understanding what your heating system sounds like when it is working correctly makes future problems easy to identify early.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['fix-a-noisy-radiator'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['fix-a-noisy-radiator'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['fix-a-noisy-radiator'].renterWarning}</p>
          </div>
        )}
        <GuideActions slug="fix-a-noisy-radiator">
          <GuideExtras slug="fix-a-noisy-radiator" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="fix-a-noisy-radiator" title="Fix a noisy radiator" href="/guides/fix-a-noisy-radiator" />
      <MobileNav />
    </main>
  )
}
