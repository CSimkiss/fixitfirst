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
  title: 'How to Paint a Room | FixItFirst',
  description: 'How to paint a room to a professional standard — full prep, cutting in, and rolling guide for beginners. Save £200–500 vs hiring a decorator.',
  openGraph: {
    title: 'How to Paint a Room | FixItFirst',
    description: 'How to paint a room to a professional standard — full prep, cutting in, and rolling guide for beginners. Save £200–500 vs hiring a decorator.',
    url: 'https://fixit-first.co.uk/guides/paint-a-room',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Prepare the room', description: 'Move furniture to the centre and cover with dust sheets. Remove switch plates and socket covers. Lay dust sheets on the floor and tape them to the skirting boards.' },
  { title: 'Fill and sand the walls', description: 'Fill any holes or cracks with ready-mixed filler and let dry completely. Sand the filled areas smooth, then lightly sand the entire wall to give the new paint something to grip. Wipe down with a damp cloth to remove dust.' },
  { title: 'Apply masking tape', description: 'Run masking tape along the top of the skirting boards, around window frames, door frames, and the ceiling line. Press the tape edge down firmly to prevent bleed-through.' },
  { title: 'Cut in around the edges', description: 'Using your angled brush, paint a neat band about 5cm wide along all edges — ceiling line, corners, skirting boards, and around any fixtures. Do one wall at a time so the edges stay wet when you roll.' },
  { title: 'Roll the walls', description: 'Load the roller and apply paint in a large W or M shape, then fill in the gaps without lifting the roller. Work in sections of about 1 square metre, blending into the cut-in edges while still wet. Apply thin coats — two thin coats always beat one thick one.' },
  { title: 'Apply a second coat and finish', description: 'Let the first coat dry fully — usually 2–4 hours. Apply a second coat in the same way. Once dry, carefully remove the masking tape at a 45-degree angle. Touch up any missed spots with the brush.' },
]

export default function PaintARoom() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Paint a room</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £200–500 in 1 day — no decorator needed</p>
        
<p className="text-gray-600 mb-6">Most people hire a decorator for this. You probably don't need to.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['paint-a-room'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Paint a room" />
          
<PrintButton />
        </div>
        <DifficultyComparison slug="paint-a-room" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Good preparation is 80% of a professional-looking paint job. Rushing the prep is the number one reason DIY painting looks amateur.</p>
          <p className="text-sm text-gray-700 mb-2">You need: emulsion paint, a roller and tray, a 2-inch angled brush for cutting in, masking tape, dust sheets, filler, and sandpaper.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
    { icon: 'buy', name: 'Emulsion paint', hint: 'buy — 30 per tin, choose the correct finish (matt for walls, silk for high-moisture rooms)', hintOrange: true },
    { icon: 'buy', name: 'Roller, roller sleeve and tray', hint: 'buy — 15 as a set', hintOrange: true, toolId: 'roller-tray' },
    { icon: 'buy', name: '2-inch angled cutting-in brush', hint: 'buy — 6, essential for clean edges', hintOrange: true },
    { icon: 'buy', name: 'Masking tape', hint: 'buy — 5 per roll', hintOrange: true },
    { icon: 'buy', name: 'Dust sheets', hint: 'buy or borrow: old bedsheets work fine too', hintOrange: true },
    { icon: 'check', name: 'Sandpaper and ready-mixed filler', hint: 'for wall preparation' },
  ]}
          slug="paint-a-room"
          guideName="Paint a room"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['paint-a-room']} />
        <StepProgress steps={steps} slug="paint-a-room" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Skipping the fill and sand step — every imperfection in the wall shows up under fresh paint.</p>
          <p className="text-sm text-yellow-900 mb-2">Applying paint too thickly in one coat, which causes drips and uneven drying.</p>
          <p className="text-sm text-yellow-900">Leaving masking tape on too long — if paint dries fully on the tape, it can peel the new paint when removed. Remove tape while the final coat is still slightly tacky.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a decorator if...</h2>
          <p className="text-sm text-red-900 mb-1">There is damp on the walls — paint will not adhere and the problem will return</p>
          <p className="text-sm text-red-900 mb-1">You see mould under the old paint — this needs treatment before redecorating</p>
          <p className="text-sm text-red-900">The walls have extensive cracking that suggests a structural issue</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Paint and basic supplies</span><span className="font-medium">£30-60</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">With roller, brushes and tray</span><span className="font-medium">£50-80</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Decorator would charge</span><span className="font-medium text-red-600">£200-500</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to prepare, cut in, and roll a wall to a professional standard. These skills transfer to painting ceilings, woodwork, and eventually more advanced techniques like colour blocking and feature walls.</p>
        </div>
        <p className="text-sm text-gray-500 text-center mb-3">Most people would pay a tradesperson for this.</p>
        {GUIDE_META['paint-a-room'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['paint-a-room'].renterWarning}</p>
          </div>
        )}
        <GuideActions slug="paint-a-room">
          <GuideExtras slug="paint-a-room" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="paint-a-room" title="Paint a room" href="/guides/paint-a-room" />
      <MobileNav />
    </main>
  )
}
