import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fix a Broken Cabinet Hinge | FixItFirst',
  description: 'Fix a broken or misaligned cabinet hinge in 20 minutes. Covers concealed cup hinges, adjustment screws, and replacement. Save £30–60.',
}

export default function FixABrokenCabinetHinge() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-orange-500 mr-8">FixItFirst</a>
        <div className="ml-auto">
          <a href="/guides" className="text-sm text-gray-500 hover:text-orange-500">← All guides</a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a broken cabinet hinge</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £30–60 today</p>
        <p className="text-gray-500 mb-8">20 mins · Beginner · Saves £30–60 vs a carpenter</p>

        {/* Before you start */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Modern kitchen cabinets use concealed cup hinges that have three adjustment screws — most door alignment problems can be fixed without any tools, just a screwdriver.</p>
          <p className="text-sm text-gray-700">Before buying a replacement hinge, try the adjustment screws first. A door that droops, catches, or will not close properly is usually a 30-second adjustment, not a replacement.</p>
        </div>

        {/* Tools needed */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Cross-head screwdriver</span> — for all hinge adjustments and replacements</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement hinge (if needed)</span> — <span className="text-orange-600">buy: £2–8 — bring the old one to match the cup size (usually 35mm) and arm length</span></span>
            </li>
          </ul>
        </div>

        {/* Steps */}
        <div className="mb-8">
          <h2 className="font-semibold text-gray-900 mb-4">Steps</h2>
          <ol className="space-y-5">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Identify the hinge type</p>
                <p className="text-sm text-gray-600">Modern kitchen cabinets use concealed cup hinges. Older furniture may use butt hinges (flat, visible on the door edge). This guide covers cup hinges — the most common type.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Try the adjustment screws first</p>
                <p className="text-sm text-gray-600">Every concealed hinge has two or three adjustment screws. The screw closest to the door moves it in and out; the side screw moves it left and right. Try small turns — a quarter-turn makes a visible difference.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Tighten any loose mounting screws</p>
                <p className="text-sm text-gray-600">Check the screws on the mounting plate (fixed to the cabinet wall) and the cup screws (fixed into the door). A broken hinge is often just a loose one.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Remove a damaged hinge</p>
                <p className="text-sm text-gray-600">If the hinge body is cracked or a screw hole is stripped, unscrew it from both the door and the cabinet. Take it to a hardware shop to match the cup size and arm length.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Fit the replacement</p>
                <p className="text-sm text-gray-600">Press the cup into the hole in the door and secure with the screws. Clip or screw the arm to the mounting plate. Close the door and check alignment.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Align to match neighbouring doors</p>
                <p className="text-sm text-gray-600">Use the adjustment screws to align the door so it is parallel with adjacent doors, with even gaps at top, bottom, and sides.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Where beginners go wrong */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Replacing the hinge before trying the adjustment screws — most misalignment is adjustable without any replacement.</p>
          <p className="text-sm text-yellow-900 mb-2">Buying the wrong replacement — cup hinges come in different sizes and overlay amounts. Take the old hinge with you.</p>
          <p className="text-sm text-yellow-900">Overtightening the cup screws into a stripped hole — fill the hole with wooden matchsticks and PVA glue, let it set, then re-drive the screws.</p>
        </div>

        {/* Stop and call a pro */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a carpenter if...</h2>
          <p className="text-sm text-red-900 mb-1">The cabinet carcass is split, warped, or the hinge plate has pulled the wood away</p>
          <p className="text-sm text-red-900">Multiple hinges on multiple doors have failed — the cabinet may be poorly fitted or the carcass is moving</p>
        </div>

        {/* Cost breakdown */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Adjustment only</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement hinge</span><span className="font-medium">£2–8</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Full set for a kitchen cabinet</span><span className="font-medium">£8–20</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Carpenter would charge</span><span className="font-medium text-red-600">£30–60</span></div>
          </div>
        </div>

        {/* What you just learned */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how concealed hinges adjust and how to replace one in minutes. This applies to every kitchen cabinet, wardrobe, and fitted furniture door in your home.</p>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">Ready for another fix?</p>
          <a href="/guides" className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
            Browse all guides →
          </a>
        </div>
      </div>
    </main>
  )
}
