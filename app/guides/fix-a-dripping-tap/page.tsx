export default function DrippingTap() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-orange-500">FixItFirst</a>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Get Started</button>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a dripping tap</h1>
        <p className="text-gray-500 mb-8">45 mins · Beginner · Saves £80-150 vs a plumber</p>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This fixes a tap that drips when fully closed.</p>
          <p className="text-sm text-gray-700 mb-2">Legal to DIY. Allowed in most rentals.</p>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Steps</h2>
          <div className="space-y-4">
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div><div><h3 className="font-semibold mb-1">Turn off the water supply</h3><p className="text-sm text-gray-600">Find the isolation valve under the sink and turn it 90 degrees until it sits across the pipe.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div><div><h3 className="font-semibold mb-1">Plug the drain</h3><p className="text-sm text-gray-600">Put the plug in so small parts cannot fall down the drain.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div><div><h3 className="font-semibold mb-1">Remove the tap handle</h3><p className="text-sm text-gray-600">Pop off the decorative cap, remove the screw, lift the handle straight up.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div><div><h3 className="font-semibold mb-1">Remove the packing nut</h3><p className="text-sm text-gray-600">Use a spanner anticlockwise. Lift out the cartridge.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div><div><h3 className="font-semibold mb-1">Replace the washer</h3><p className="text-sm text-gray-600">Swap the rubber washer for a matching new one.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">6</div><div><h3 className="font-semibold mb-1">Reassemble and test</h3><p className="text-sm text-gray-600">Put everything back. Open the valve slowly. No drip? Done.</p></div></div>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not turning water off fully before starting.</p>
          <p className="text-sm text-yellow-900 mb-2">Buying the wrong washer size.</p>
          <p className="text-sm text-yellow-900">Overtightening the packing nut.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">The isolation valve will not turn</p>
          <p className="text-sm text-red-900 mb-1">Water is coming from behind the wall</p>
          <p className="text-sm text-red-900">The tap body is cracked</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">You have all the tools</span><span className="font-medium">£2-5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Need tools too</span><span className="font-medium">£15-25</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£80-150</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how taps work, how isolation valves work, and how to replace washers. These skills transfer to replacing a full tap and fixing a running toilet.</p>
        </div>
        <button className="w-full bg-orange-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-orange-600">Mark as Complete</button>
      </div>
    </main>
  )
}
