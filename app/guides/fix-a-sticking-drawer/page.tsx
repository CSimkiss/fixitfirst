import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fix a Sticking Drawer | FixItFirst',
  description: 'Fix a sticking drawer in 15 minutes with wax or sandpaper. Step-by-step beginner guide. Save £30–50 vs a carpenter.',
}

export default function FixAStickingDrawer() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a sticking drawer</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £30–50 today</p>
        <p className="text-gray-500 mb-8">15 mins · Beginner · Saves £30–50 vs a carpenter</p>

        {/* Before you start */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Drawers stick because of friction between the drawer sides and the runner. In most cases, wax from a candle applied to the runners fixes it in under five minutes.</p>
          <p className="text-sm text-gray-700">Wooden drawer systems are more prone to swelling than metal-runner systems. If the sticking is seasonal (worse in summer or after wet weather), waxing is almost always the answer.</p>
        </div>

        {/* Tools needed */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Candle or dry soap bar</span> — the best lubricant for wooden runners — free if you have either at home</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Dry cloth</span> — to clean the runners before applying wax</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Sandpaper 120-grit</span> — <span className="text-orange-600">buy: £2–3 — only needed if wax alone does not solve it</span></span>
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
                <p className="font-semibold text-gray-900 mb-1">Pull the drawer out completely</p>
                <p className="text-sm text-gray-600">Remove it fully so you can inspect the runners and the sides of the drawer box.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Clean the runners</p>
                <p className="text-sm text-gray-600">Wipe the wooden or metal runners inside the cabinet, and the sides and bottom edges of the drawer, with a dry cloth. Remove any grit, crumbs, or old wax build-up.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Check the runners for damage</p>
                <p className="text-sm text-gray-600">Look for splinters on wooden runners, or bent sections on metal runners. Bent metal runners can often be straightened carefully with pliers.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Wax the runners</p>
                <p className="text-sm text-gray-600">Rub a candle or dry bar of soap along the wooden runners and the sides of the drawer. Cover the full length. This is the most effective fix for wooden drawer systems.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Replace and test</p>
                <p className="text-sm text-gray-600">Slide the drawer back in and test. It should move smoothly. If still stiff, apply more wax and test again.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Sand if still sticking</p>
                <p className="text-sm text-gray-600">If wax does not fully solve it, lightly sand the sides of the drawer with 120-grit paper — a few strokes per side. Test after each pass. Seal with wood varnish when done.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Where beginners go wrong */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Using wet lubricants like WD-40 on wooden runners — it soaks in and can cause more swelling.</p>
          <p className="text-sm text-yellow-900 mb-2">Sanding without cleaning first — grit and crumbs under the drawer cause most of the friction.</p>
          <p className="text-sm text-yellow-900">Over-sanding — remove a little at a time and test.</p>
        </div>

        {/* Stop and call a pro */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a carpenter if...</h2>
          <p className="text-sm text-red-900 mb-1">The drawer base or sides are cracked or have pulled apart at the joints</p>
          <p className="text-sm text-red-900">The cabinet frame itself is warped or leaning</p>
        </div>

        {/* Cost breakdown */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Wax (candle) only</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">With sandpaper</span><span className="font-medium">£2–3</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Carpenter would charge</span><span className="font-medium text-red-600">£30–50</span></div>
          </div>
        </div>

        {/* What you just learned */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand why wooden drawers stick and the correct sequence for fixing them. These same techniques apply to sash windows, wardrobe doors, and any other wood-on-wood sliding joint.</p>
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
