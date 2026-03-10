import StepProgress from '@/components/StepProgress'
import CompleteButton from '@/components/CompleteButton'
import MobileNav from '@/components/MobileNav'

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
        <StepProgress />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This works for slow or fully blocked sink, bath, and shower drains.</p>
          <p className="text-sm text-gray-700 mb-2">Legal to DIY. No special skills needed.</p>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Steps</h2>
          <div className="space-y-4">
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div><div><h3 className="font-semibold mb-1">Remove the drain cover</h3><p className="text-sm text-gray-600">Unscrew or lift off the drain cover. Remove any visible hair or debris by hand — wear rubber gloves.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div><div><h3 className="font-semibold mb-1">Pour boiling water</h3><p className="text-sm text-gray-600">Carefully pour a full kettle of boiling water directly down the drain. This breaks up grease and soap build-up.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div><div><h3 className="font-semibold mb-1">Use a plunger</h3><p className="text-sm text-gray-600">Cover the drain with a cup plunger. Push down firmly and pull up sharply 10 times. Run water to test.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div><div><h3 className="font-semibold mb-1">Try bicarbonate of soda and vinegar</h3><p className="text-sm text-gray-600">Pour half a cup of bicarbonate of soda down the drain, then half a cup of white vinegar. Cover for 30 minutes, then flush with hot water.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div><div><h3 className="font-semibold mb-1">Use a drain snake</h3><p className="text-sm text-gray-600">Feed a drain snake or a bent wire coat hanger into the pipe. Rotate and pull to hook the blockage and drag it out.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">6</div><div><h3 className="font-semibold mb-1">Test and replace the cover</h3><p className="text-sm text-gray-600">Run the tap for a minute. If water drains freely, refit the drain cover. Done.</p></div></div>
          </div>
        </div>
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
