import StepProgress from '@/components/StepProgress'
import CompleteButton from '@/components/CompleteButton'
import MobileNav from '@/components/MobileNav'

export default function FixARunningToilet() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-orange-500">FixItFirst</a>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Get Started</button>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a running toilet</h1>
        <p className="text-gray-500 mb-6">1 hour · Beginner · Saves £80-150 vs a plumber</p>
        <StepProgress />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">A running toilet constantly trickles water into the bowl after flushing. This is almost always caused by a faulty flapper valve or a misadjusted float arm — both are cheap and easy to fix.</p>
          <p className="text-sm text-gray-700 mb-2">You will need to look inside the cistern (the tank at the back of the toilet). It is just water — nothing unpleasant.</p>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Steps</h2>
          <div className="space-y-4">
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div><div><h3 className="font-semibold mb-1">Remove the cistern lid</h3><p className="text-sm text-gray-600">Lift the lid off the cistern and set it aside on a towel. Look inside — you will see the float (a ball or cup on an arm), the fill valve, and the flapper at the bottom.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div><div><h3 className="font-semibold mb-1">Identify the problem</h3><p className="text-sm text-gray-600">Flush and watch. If water keeps running: lift the float arm by hand. If the water stops, the float needs adjusting. If water still runs, the flapper is not sealing.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div><div><h3 className="font-semibold mb-1">Adjust the float arm</h3><p className="text-sm text-gray-600">If the float is too high, water overflows into the overflow pipe before the fill valve shuts off. Bend the float arm slightly downward, or adjust the screw/clip on modern ballvalves, so the water stops about 25mm below the overflow pipe.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div><div><h3 className="font-semibold mb-1">Turn off the water and replace the flapper</h3><p className="text-sm text-gray-600">If the flapper is the issue, turn off the isolation valve on the pipe behind the toilet. Flush to empty the cistern. Unhook the old flapper from the pegs at the bottom of the fill valve and note the size. Buy a matching replacement and clip it on.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div><div><h3 className="font-semibold mb-1">Turn water back on and test</h3><p className="text-sm text-gray-600">Open the isolation valve slowly and let the cistern refill. Watch the water level — it should stop filling well below the overflow. Flush and check the running has stopped.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">6</div><div><h3 className="font-semibold mb-1">Replace the cistern lid</h3><p className="text-sm text-gray-600">Once you are satisfied the toilet is no longer running, replace the lid. Listen over the next hour to confirm no more trickling.</p></div></div>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not turning off the isolation valve before replacing the flapper, leading to water everywhere.</p>
          <p className="text-sm text-yellow-900 mb-2">Buying the wrong size flapper — take the old one to the shop to match it.</p>
          <p className="text-sm text-yellow-900">Setting the float too low, so the cistern does not fill enough to flush properly.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">There is water leaking around the base of the toilet</p>
          <p className="text-sm text-red-900 mb-1">The cistern will not stop filling even after adjusting the float</p>
          <p className="text-sm text-red-900">The isolation valve will not turn off the water supply</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Float arm adjustment only</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement flapper valve</span><span className="font-medium">£10-25</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£80-150</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how a toilet cistern works — the float, fill valve, and flapper. These skills transfer to replacing a full ballvalve, fixing a slow-filling cistern, and understanding your home's water system.</p>
        </div>
        <CompleteButton />
      </div>
      <MobileNav />
    </main>
  )
}
