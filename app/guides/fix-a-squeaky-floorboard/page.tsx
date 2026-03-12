import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fix a Squeaky Floorboard | FixItFirst',
  description: 'Fix a squeaky floorboard in 20 minutes with a screw. Step-by-step beginner guide. Save £40–60 vs calling a carpenter.',
}

export default function FixASqueakyFloorboard() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a squeaky floorboard</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £40–60 today</p>
        <p className="text-gray-500 mb-8">20 mins · Beginner · Saves £40–60 vs a carpenter</p>

        {/* Before you start */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Squeaky floorboards are caused by the board rubbing against a joist or a neighbouring board as it flexes. Screwing the board down tight stops the movement and kills the squeak.</p>
          <p className="text-sm text-gray-700">Always use a pipe and cable detector before drilling into a floor. Pipes and cables run under floors — particularly near bathrooms, kitchens, and walls.</p>
        </div>

        {/* Tools needed */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Pipe and cable detector</span> — essential before screwing into a floor — available to hire if you do not own one</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Drill or screwdriver</span> — to drive the screw</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">50mm wood screws</span> — <span className="text-orange-600">buy: £1–3 — countersinking screws are ideal</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Wood filler</span> — <span className="text-orange-600">buy: £3–5 — if the floor is visible and you want a neat finish</span></span>
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
                <p className="font-semibold text-gray-900 mb-1">Find and mark the squeak</p>
                <p className="text-sm text-gray-600">Walk slowly across the board and mark the squeaky area with a small piece of tape.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Check for pipes and cables</p>
                <p className="text-sm text-gray-600">Run a cable/pipe detector across the full length of the board before drilling. Cables run vertically from sockets and switches; pipes run to radiators and bathrooms.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Find the joist</p>
                <p className="text-sm text-gray-600">Knock along the board with your knuckle. A dull, solid sound means there is a joist below; a hollow sound means there is not. Joists are typically spaced 400mm apart.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Drill a pilot hole</p>
                <p className="text-sm text-gray-600">Drill a pilot hole through the board into the joist below — use a bit slightly narrower than your screw shank. This prevents the board splitting.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Drive the screw</p>
                <p className="text-sm text-gray-600">Drive a 50mm wood screw through the pilot hole. The screw should pull the board firmly down onto the joist. Drive the head just below the surface.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Fill and finish</p>
                <p className="text-sm text-gray-600">Fill the screw hole with wood filler if the floor is exposed. Allow to dry, sand flush, and touch up with floor paint or varnish if needed.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Where beginners go wrong */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Screwing without checking for cables and pipes first — this is the most dangerous mistake on this job.</p>
          <p className="text-sm text-yellow-900 mb-2">Screwing between joists — the board just flexes and squeaks again. You must hit the joist.</p>
          <p className="text-sm text-yellow-900">Using screws that are too short — they need to go at least 25mm into the joist to hold.</p>
        </div>

        {/* Stop and call a pro */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a carpenter if...</h2>
          <p className="text-sm text-red-900 mb-1">The board has significant bounce or flex — this may indicate a damaged joist</p>
          <p className="text-sm text-red-900 mb-1">There is damp, rot, or discolouration visible when you inspect the board</p>
          <p className="text-sm text-red-900">You cannot locate the joist and the squeak is in a bathroom or kitchen</p>
        </div>

        {/* Cost breakdown */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Wood screws only</span><span className="font-medium">£2–3</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Screws and filler</span><span className="font-medium">£5–8</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Carpenter would charge</span><span className="font-medium text-red-600">£40–60</span></div>
          </div>
        </div>

        {/* What you just learned */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how floorboards and joists relate, how to locate a joist by sound, and how to safely screw into a floor. This transfers to fitting skirting boards and laying new flooring.</p>
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
