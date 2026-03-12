import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fix a Sticking Door | FixItFirst',
  description: 'Fix a sticking door in 45 minutes without calling anyone. Covers hinge tightening, lubrication, and sanding. Save £50–80 vs a carpenter.',
}

export default function FixAStickingDoor() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a sticking door</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £50–80 today</p>
        <p className="text-gray-500 mb-8">45 mins · Beginner · Saves £50–80 vs a carpenter</p>

        {/* Before you start */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Most sticking doors are caused by loose hinges, seasonal wood swelling, or the house settling. Start with the hinges — a loose top hinge causes most sticking and takes 30 seconds to fix.</p>
          <p className="text-sm text-gray-700">Do this repair in dry weather if you can. Wood swells in damp weather, so a door that sticks badly in winter may be fine in summer and vice versa.</p>
        </div>

        {/* Tools needed */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Cross-head screwdriver</span> — to tighten hinge screws</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Candle or bar of soap</span> — for lubrication — often solves minor sticking</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Sandpaper 80-grit</span> — <span className="text-orange-600">buy: £2–4 — for sanding back a sticking edge</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Wood primer and paint</span> — <span className="text-orange-600">buy: £5–12 — to seal sanded wood afterwards</span></span>
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
                <p className="font-semibold text-gray-900 mb-1">Find exactly where it sticks</p>
                <p className="text-sm text-gray-600">Close the door slowly and watch and feel for where it drags. Mark the sticking point with a pencil on the door edge.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Check and tighten the hinges</p>
                <p className="text-sm text-gray-600">Look at both hinges — top and bottom. Check every screw. Tighten any that are loose. A dropped top hinge is the most common cause of a sticking door.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Lubricate the edge</p>
                <p className="text-sm text-gray-600">Rub a candle or bar of soap along the marked sticking area. Open and close the door several times. This often solves minor sticking without any sanding.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Sand the sticking area</p>
                <p className="text-sm text-gray-600">If lubrication alone does not work, sand back the marked area with 80-grit paper, working in the direction of the grain. Remove a small amount and test.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Test after each pass</p>
                <p className="text-sm text-gray-600">Re-hang the door and test before sanding more. You want it just free — not loose.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Seal the bare wood</p>
                <p className="text-sm text-gray-600">Bare sanded wood absorbs moisture and will swell and stick again. Prime and paint or varnish any area you have sanded before the week is out.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Where beginners go wrong */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Removing the door and planing it flat before checking the hinges — this is unnecessary 80% of the time.</p>
          <p className="text-sm text-yellow-900 mb-2">Sanding too much in one pass — remove a little, test, repeat.</p>
          <p className="text-sm text-yellow-900">Not sealing the sanded wood — unpainted wood swells and the door sticks again within weeks.</p>
        </div>

        {/* Stop and call a pro */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a carpenter if...</h2>
          <p className="text-sm text-red-900 mb-1">The door frame itself is visibly warped or out of square</p>
          <p className="text-sm text-red-900 mb-1">The sticking is at the top of the door and tightening hinges has not helped — the lintel may have dropped</p>
          <p className="text-sm text-red-900">The door is fire-rated — do not alter the fit without checking building regulations</p>
        </div>

        {/* Cost breakdown */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Sandpaper and paint</span><span className="font-medium">£7–16</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">If you already have tools</span><span className="font-medium">Free–£3</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Carpenter would charge</span><span className="font-medium text-red-600">£50–80</span></div>
          </div>
        </div>

        {/* What you just learned */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how hinges affect door alignment and how to read where a door is sticking. These skills apply to any door in the house — and to fitting a new door if needed.</p>
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
