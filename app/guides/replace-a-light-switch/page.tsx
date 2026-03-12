import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Replace a Light Switch | FixItFirst',
  description: 'Replace a light switch in 30 minutes. Step-by-step UK guide covering wiring, safety, and fitting — with no electrician required. Save £60–100.',
}

export default function ReplaceALightSwitch() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Replace a light switch</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £60–100 today</p>
        <p className="text-gray-500 mb-8">30 mins · Beginner · Saves £60–100 vs an electrician</p>

        {/* Before you start */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Replacing a decorative light switch faceplate is one of the simplest electrical jobs — the wiring stays the same, you are just changing the cover.</p>
          <p className="text-sm text-gray-700">Always turn off the power at the consumer unit and confirm it is off before touching any wires. Never work on a live circuit.</p>
        </div>

        {/* Tools needed */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Flat-head and cross-head screwdrivers</span> — to remove the old plate and connect the new one</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Phone or camera</span> — to photograph the wiring before disconnecting anything</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement light switch</span> — <span className="text-orange-600">buy: £3–15 — match the number of gangs (switching positions) to your existing switch</span></span>
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
                <p className="font-semibold text-gray-900 mb-1">Turn off the power at the consumer unit</p>
                <p className="text-sm text-gray-600">Find the lighting circuit breaker for this room and switch it off. Test the light to confirm the power is off.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Remove the old switch plate</p>
                <p className="text-sm text-gray-600">Undo the two screws on the face plate. Gently ease it away from the wall — the wires are still connected behind it.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Photograph the wiring</p>
                <p className="text-sm text-gray-600">Before touching anything, take a clear photo showing exactly which wire goes to which terminal. This is your reference.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Disconnect the wires</p>
                <p className="text-sm text-gray-600">Loosen each terminal screw and pull the wire free. Note the terminal labels — COM (common), L1, L2.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Connect the new switch</p>
                <p className="text-sm text-gray-600">Using your photo as a guide, reconnect each wire to the matching terminal on the new switch. Tighten each terminal screw firmly.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Fit and test</p>
                <p className="text-sm text-gray-600">Fold the wires carefully back into the backbox, screw the new plate in, restore power at the consumer unit, and test the switch.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Where beginners go wrong */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Working without turning off the power — always isolate at the consumer unit and confirm it is off.</p>
          <p className="text-sm text-yellow-900 mb-2">Not photographing the wiring before disconnecting — it is very easy to forget which wire went where.</p>
          <p className="text-sm text-yellow-900">Leaving wires loose in the terminals — each wire must be clamped firmly so it cannot pull free.</p>
        </div>

        {/* Stop and call a pro */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call an electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">There are more wires than expected — you may have a two-way or intermediate switching circuit</p>
          <p className="text-sm text-red-900 mb-1">Any wires are burnt, melted, or have damaged insulation</p>
          <p className="text-sm text-red-900">The backbox is cracked or the wall around it is damaged</p>
        </div>

        {/* Cost breakdown */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">New switch faceplate</span><span className="font-medium">£3–15</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">With backbox replacement</span><span className="font-medium">£8–20</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Electrician would charge</span><span className="font-medium text-red-600">£60–100</span></div>
          </div>
        </div>

        {/* What you just learned */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how a single-gang light switch is wired and how to swap a faceplate safely. This transfers directly to replacing plug sockets, dimmer switches, and USB outlets.</p>
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
