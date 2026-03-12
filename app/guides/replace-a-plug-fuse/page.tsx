import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Replace a Plug Fuse | FixItFirst',
  description: 'Replace a plug fuse in 5 minutes. Step-by-step UK guide — covers fuse ratings, how to test a fuse, and what to do if it blows again. Save £30–60.',
}

export default function ReplaceAPlugFuse() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Replace a plug fuse</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £30–60 today</p>
        <p className="text-gray-500 mb-8">5 mins · Beginner · Saves £30–60 vs an electrician</p>

        {/* Before you start */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">UK plugs contain a small cartridge fuse. When an appliance suddenly goes dead, the plug fuse is the first thing to check — it costs £1 and takes 2 minutes.</p>
          <p className="text-sm text-gray-700">This guide works for any standard UK 3-pin plug. If the appliance trips the whole circuit instead of just going dead, see the circuit breaker guide.</p>
        </div>

        {/* Tools needed */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Flat-head screwdriver</span> — to open the plug</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement fuse</span> — <span className="text-orange-600">buy: £1–3 — must match the existing rating (3A or 13A stamped on the side)</span></span>
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
                <p className="font-semibold text-gray-900 mb-1">Unplug from the wall</p>
                <p className="text-sm text-gray-600">Never work on a plugged-in appliance. Pull it out of the socket first.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Unscrew the plug</p>
                <p className="text-sm text-gray-600">Flip the plug over. There is a single screw in the centre — undo it with a flat-head screwdriver. The plug opens into two halves.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Remove the fuse</p>
                <p className="text-sm text-gray-600">The fuse is the small cylinder sitting between the live and neutral pins. Pop one end out with the tip of a screwdriver, or pull it with your fingernail.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Check the fuse</p>
                <p className="text-sm text-gray-600">Hold it up to a light. A blown fuse often shows a visible broken wire inside. If you cannot tell by looking, swap it for a new one of the same rating and test the appliance.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Fit the correct replacement</p>
                <p className="text-sm text-gray-600">Check the rating stamped on the old fuse — usually 3A (for appliances under 700W like lamps and radios) or 13A (for appliances above 700W like kettles and irons). Use the exact same rating.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reassemble and test</p>
                <p className="text-sm text-gray-600">Press the new fuse into the clips, close the plug, tighten the screw, and plug the appliance in to test.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Where beginners go wrong */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Fitting a higher-rated fuse to stop it blowing — a 13A fuse in a lamp is a fire risk. Always match the rating.</p>
          <p className="text-sm text-yellow-900 mb-2">Not investigating why it blew — if the new fuse blows immediately, the appliance is faulty. Stop using it.</p>
          <p className="text-sm text-yellow-900">Opening a plug that is still in the socket — always unplug first.</p>
        </div>

        {/* Stop and call a pro */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call an electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">The new fuse blows immediately — the appliance is faulty; stop using it</p>
          <p className="text-sm text-red-900 mb-1">There are scorch marks inside the plug or on the cable</p>
          <p className="text-sm text-red-900">The cable is damaged or the wires are exposed</p>
        </div>

        {/* Cost breakdown */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement fuse</span><span className="font-medium">£1–3</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Pack of spare fuses</span><span className="font-medium">£3–5</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Electrician call-out</span><span className="font-medium text-red-600">£30–60</span></div>
          </div>
        </div>

        {/* What you just learned */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how UK plug fuses work, how to match fuse ratings to appliances, and how to diagnose a blown fuse. This applies to every plug-top appliance in your home.</p>
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
