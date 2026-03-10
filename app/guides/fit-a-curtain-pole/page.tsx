export default function FitACurtainPole() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-orange-500">FixItFirst</a>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Get Started</button>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fit a curtain pole</h1>
        <p className="text-gray-500 mb-8">45 mins · Beginner · Saves £50-80 vs a handyman</p>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Before drilling, use a pipe and cable detector to check for hidden pipes and wires behind the wall. These are inexpensive and available at any DIY shop.</p>
          <p className="text-sm text-gray-700 mb-2">You need a drill, spirit level, pencil, tape measure, and the fixings that come with your pole (wall plugs and screws).</p>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Steps</h2>
          <div className="space-y-4">
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div><div><h3 className="font-semibold mb-1">Mark the bracket positions</h3><p className="text-sm text-gray-600">Hold the first bracket 15cm beyond the window edge and at least 10cm above the frame. Mark the screw holes lightly with a pencil. Repeat for the second bracket, using a tape measure and spirit level to ensure they are at exactly the same height.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div><div><h3 className="font-semibold mb-1">Check for pipes and cables</h3><p className="text-sm text-gray-600">Run your detector over each marked position. If it beeps, move your mark a few centimetres and re-check.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div><div><h3 className="font-semibold mb-1">Drill the holes</h3><p className="text-sm text-gray-600">Use the correct drill bit for your wall type (masonry bit for brick or plaster, wood bit for timber). Drill to the depth of your wall plug. Keep the drill straight and level.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div><div><h3 className="font-semibold mb-1">Insert the wall plugs</h3><p className="text-sm text-gray-600">Push a wall plug into each hole until it is flush with the wall surface. If it spins freely, the hole is too large — use a larger plug.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div><div><h3 className="font-semibold mb-1">Screw on the brackets</h3><p className="text-sm text-gray-600">Hold each bracket in position and drive the screws in until firm. Do not overtighten. Check both brackets are level with a spirit level before fully tightening.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">6</div><div><h3 className="font-semibold mb-1">Hang the pole and curtains</h3><p className="text-sm text-gray-600">Thread the curtain rings onto the pole, clip the pole into the brackets, and fit the end finials. Hang your curtains and test that they draw smoothly.</p></div></div>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not checking for pipes and cables before drilling — always use a detector first.</p>
          <p className="text-sm text-yellow-900 mb-2">Brackets that are not level, causing curtains to hang crooked.</p>
          <p className="text-sm text-yellow-900">Using the wrong wall plugs for hollow plasterboard walls — you need cavity fixings, not standard plugs.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a professional if...</h2>
          <p className="text-sm text-red-900 mb-1">Your detector shows cables directly behind your chosen position and there is no alternative spot</p>
          <p className="text-sm text-red-900 mb-1">The wall is an unusual material such as glass or metal panel</p>
          <p className="text-sm text-red-900">The drill produces sparks or the wall is unusually hard</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">You have a drill already</span><span className="font-medium">£0-5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Detector and drill bits</span><span className="font-medium">£10-20</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Handyman would charge</span><span className="font-medium text-red-600">£50-80</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to use a drill, read wall types, and fix things securely to a wall. These skills transfer to hanging shelves, fitting blinds, and mounting a TV bracket.</p>
        </div>
        <button className="w-full bg-orange-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-orange-600">Mark as Complete</button>
      </div>
    </main>
  )
}
