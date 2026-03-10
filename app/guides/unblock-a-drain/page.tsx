import type { Metadata } from 'next'
import StepProgress from '@/components/StepProgress'
import CompleteButton from '@/components/CompleteButton'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'How to Unblock a Drain | FixItFirst',
  description: 'How to unblock a sink, bath, or shower drain in 20 minutes — no chemicals needed. Step-by-step guide. Save £60–120 vs calling a plumber.',
}

const steps = [
  { title: 'Remove the drain cover', description: 'Unscrew or lift off the drain cover. Remove any visible hair or debris by hand — wear rubber gloves.' },
  { title: 'Pour boiling water', description: 'Carefully pour a full kettle of boiling water directly down the drain. This breaks up grease and soap build-up.' },
  { title: 'Use a plunger', description: 'Cover the drain with a cup plunger. Push down firmly and pull up sharply 10 times. Run water to test.' },
  { title: 'Try bicarbonate of soda and vinegar', description: 'Pour half a cup of bicarbonate of soda down the drain, then half a cup of white vinegar. Cover for 30 minutes, then flush with hot water.' },
  { title: 'Use a drain snake', description: 'Feed a drain snake or a bent wire coat hanger into the pipe. Rotate and pull to hook the blockage and drag it out.' },
  { title: 'Test and replace the cover', description: 'Run the tap for a minute. If water drains freely, refit the drain cover. Done.' },
]

export default function UnblockADrain() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-orange-500">FixItFirst</a>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Get Started</button>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Unblock a drain</h1>
        <p className="text-gray-500 mb-6">20 mins · Beginner · Saves £60-120 vs a plumber</p>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This works for slow or fully blocked sink, bath, and shower drains.</p>
          <p className="text-sm text-gray-700 mb-2">Legal to DIY. No special skills needed.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Rubber gloves</span> — standard household item</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Kettle</span> — for boiling water flush</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Bicarbonate of soda and white vinegar</span> — most homes have these</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Cup plunger</span> — <span className="text-orange-600">buy: £5–8, worth having in every home</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Drain snake</span> — <span className="text-orange-600">buy: £5–10 if the plunger doesn't work (or use a bent wire coat hanger)</span></span>
            </li>
          </ul>
        </div>
        <StepProgress steps={steps} />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Using chemical drain cleaner at the same time as a plunger — the chemicals can splash back dangerously.</p>
          <p className="text-sm text-yellow-900 mb-2">Not wearing gloves when handling drain debris.</p>
          <p className="text-sm text-yellow-900">Pouring boiling water into plastic pipes — use very hot but not boiling water for plastic.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">Multiple drains in your home are blocked at the same time</p>
          <p className="text-sm text-red-900 mb-1">You can smell sewage coming up through the drain</p>
          <p className="text-sm text-red-900">Water is gurgling in other drains when you flush</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Household items only</span><span className="font-medium">£0</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Buy a drain snake</span><span className="font-medium">£5-10</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£60-120</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how drain blockages form and how to clear them using multiple techniques. These skills apply to any blocked sink, bath, or shower in your home.</p>
        </div>
        <CompleteButton />
      </div>
      <MobileNav />
    </main>
  )
}
