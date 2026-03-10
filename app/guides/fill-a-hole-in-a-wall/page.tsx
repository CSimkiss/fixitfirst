import StepProgress from '@/components/StepProgress'
import CompleteButton from '@/components/CompleteButton'
import MobileNav from '@/components/MobileNav'

export default function FillAHoleInAWall() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-orange-500">FixItFirst</a>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Get Started</button>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fill a hole in a wall</h1>
        <p className="text-gray-500 mb-6">30 mins · Beginner · Saves £50-100 vs a tradesperson</p>
        <StepProgress />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This works for small to medium holes and cracks in plaster, plasterboard, or brick walls — caused by rawl plugs, nails, or general wear.</p>
          <p className="text-sm text-gray-700 mb-2">You will need ready-mixed filler (£3-5 from any DIY shop), a filling knife, fine sandpaper, and a damp cloth.</p>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Steps</h2>
          <div className="space-y-4">
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div><div><h3 className="font-semibold mb-1">Clean the hole</h3><p className="text-sm text-gray-600">Remove any loose plaster, dust, or old filler from the hole using a screwdriver tip or stiff brush. The hole needs to be clean for the filler to bond.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div><div><h3 className="font-semibold mb-1">Dampen the surface</h3><p className="text-sm text-gray-600">Lightly dampen the inside of the hole with a wet finger or cloth. This stops the wall absorbing moisture from the filler too quickly, which causes cracking.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div><div><h3 className="font-semibold mb-1">Apply the filler</h3><p className="text-sm text-gray-600">Scoop filler onto your filling knife and press it firmly into the hole. For deep holes, apply in layers no thicker than 10mm. Overfill slightly — it will shrink as it dries.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div><div><h3 className="font-semibold mb-1">Smooth the surface</h3><p className="text-sm text-gray-600">Draw the filling knife flat across the surface to remove the excess and leave it flush with the wall. Wipe away any smears with a damp cloth.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div><div><h3 className="font-semibold mb-1">Let it dry fully</h3><p className="text-sm text-gray-600">Wait until the filler turns from pink or grey to bright white — usually 2-4 hours. For deep fills, leave it overnight.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">6</div><div><h3 className="font-semibold mb-1">Sand and prime</h3><p className="text-sm text-gray-600">Sand the dried filler smooth with fine sandpaper. Apply a thin coat of PVA or mist coat before painting to stop the filler soaking up paint unevenly.</p></div></div>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Skipping the dampening step, causing the filler to crack as it dries.</p>
          <p className="text-sm text-yellow-900 mb-2">Applying one thick layer on a deep hole instead of building it up in thinner coats.</p>
          <p className="text-sm text-yellow-900">Painting straight over filler without priming, leaving a dull patch on the wall.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a tradesperson if...</h2>
          <p className="text-sm text-red-900 mb-1">Cracks keep reappearing in the same place — this can indicate structural movement</p>
          <p className="text-sm text-red-900 mb-1">The crack runs diagonally from a door or window corner</p>
          <p className="text-sm text-red-900">The hole is larger than your fist</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Filler and sandpaper</span><span className="font-medium">£3-5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">With filling knife too</span><span className="font-medium">£8-12</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Tradesperson would charge</span><span className="font-medium text-red-600">£50-100</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how wall filler works and how to apply it cleanly. These skills transfer to skimming larger areas, repairing cracks in ceilings, and preparing walls for decorating.</p>
        </div>
        <CompleteButton />
      </div>
      <MobileNav />
    </main>
  )
}
