import type { Metadata } from 'next'
import StepProgress from '@/components/StepProgress'
import CompleteButton from '@/components/CompleteButton'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'How to Paint a Room | FixItFirst',
  description: 'How to paint a room to a professional standard — full prep, cutting in, and rolling guide for beginners. Save £200–500 vs hiring a decorator.',
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
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-orange-500">FixItFirst</a>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Get Started</button>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Paint a room</h1>
        <p className="text-gray-500 mb-6">1 day · Beginner · Saves £200-500 vs a decorator</p>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Good preparation is 80% of a professional-looking paint job. Rushing the prep is the number one reason DIY painting looks amateur.</p>
          <p className="text-sm text-gray-700 mb-2">You need: emulsion paint, a roller and tray, a 2-inch angled brush for cutting in, masking tape, dust sheets, filler, and sandpaper.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Emulsion paint</span> — <span className="text-orange-600">buy: £15–30 per tin, choose the correct finish (matt for walls, silk for high-moisture rooms)</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Roller, roller sleeve and tray</span> — <span className="text-orange-600">buy: £8–15 as a set</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">2-inch angled cutting-in brush</span> — <span className="text-orange-600">buy: £3–6, essential for clean edges</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Masking tape</span> — <span className="text-orange-600">buy: £2–5 per roll</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Dust sheets</span> — <span className="text-orange-600">buy or borrow: old bedsheets work fine too</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Sandpaper and ready-mixed filler</span> — for wall preparation</span>
            </li>
          </ul>
        </div>
        <StepProgress steps={steps} />
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
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to prepare, cut in, and roll a wall to a professional standard. These skills transfer to painting ceilings, woodwork, and eventually more advanced techniques like colour blocking and feature walls.</p>
        </div>
        <CompleteButton />
      </div>
      <MobileNav />
    </main>
  )
}
