export default function PaintARoom() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-orange-500">FixItFirst</a>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Get Started</button>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Paint a room</h1>
        <p className="text-gray-500 mb-8">1 day · Beginner · Saves £200-500 vs a decorator</p>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Good preparation is 80% of a professional-looking paint job. Rushing the prep is the number one reason DIY painting looks amateur.</p>
          <p className="text-sm text-gray-700 mb-2">You need: emulsion paint, a roller and tray, a 2-inch angled brush for cutting in, masking tape, dust sheets, filler, and sandpaper.</p>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Steps</h2>
          <div className="space-y-4">
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div><div><h3 className="font-semibold mb-1">Prepare the room</h3><p className="text-sm text-gray-600">Move furniture to the centre and cover with dust sheets. Remove switch plates and socket covers. Lay dust sheets on the floor and tape them to the skirting boards.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div><div><h3 className="font-semibold mb-1">Fill and sand the walls</h3><p className="text-sm text-gray-600">Fill any holes or cracks with ready-mixed filler and let dry completely. Sand the filled areas smooth, then lightly sand the entire wall to give the new paint something to grip. Wipe down with a damp cloth to remove dust.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div><div><h3 className="font-semibold mb-1">Apply masking tape</h3><p className="text-sm text-gray-600">Run masking tape along the top of the skirting boards, around window frames, door frames, and the ceiling line (if you are not painting the ceiling the same colour). Press the tape edge down firmly to prevent bleed-through.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div><div><h3 className="font-semibold mb-1">Cut in around the edges</h3><p className="text-sm text-gray-600">Using your angled brush, paint a neat band about 5cm wide along all edges — ceiling line, corners, skirting boards, and around any fixtures. This is called cutting in. Do one wall at a time so the edges stay wet when you roll.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div><div><h3 className="font-semibold mb-1">Roll the walls</h3><p className="text-sm text-gray-600">Load the roller and apply paint in a large W or M shape, then fill in the gaps without lifting the roller. Work in sections of about 1 square metre, blending into the cut-in edges while still wet. Apply thin coats — two thin coats always beat one thick one.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">6</div><div><h3 className="font-semibold mb-1">Apply a second coat and finish</h3><p className="text-sm text-gray-600">Let the first coat dry fully — usually 2-4 hours. Apply a second coat in the same way. Once dry, carefully remove the masking tape at a 45-degree angle. Touch up any missed spots with the brush.</p></div></div>
          </div>
        </div>
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
        <button className="w-full bg-orange-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-orange-600">Mark as Complete</button>
      </div>
    </main>
  )
}
