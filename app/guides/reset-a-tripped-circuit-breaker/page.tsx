import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset a Tripped Circuit Breaker | FixItFirst',
  description: 'Reset a tripped circuit breaker in 10 minutes. Step-by-step guide to your consumer unit — covers overloads, faults, and RCD trips. Save £40–60.',
}

export default function ResetATrippedCircuitBreaker() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset a tripped circuit breaker</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £40–60 today</p>
        <p className="text-gray-500 mb-8">10 mins · Beginner · Saves £40–60 vs an electrician</p>

        {/* Before you start */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">A tripped breaker is your home's electrical safety system doing its job — it cut the power to protect you from an overload or fault. Resetting it takes seconds once you know why it tripped.</p>
          <p className="text-sm text-gray-700">Your consumer unit (fuse box) is usually in a hallway, under the stairs, or in the kitchen. It is the grey or white box with rows of switches.</p>
        </div>

        {/* Tools needed */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Nothing needed</span> — everything is already in your consumer unit</span>
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
                <p className="font-semibold text-gray-900 mb-1">Find the consumer unit</p>
                <p className="text-sm text-gray-600">Open the cover of your consumer unit. Look for a breaker that has tripped to the middle or off position — it will be out of line with the others.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Identify the circuit</p>
                <p className="text-sm text-gray-600">The breakers are usually labelled — upstairs sockets, downstairs lights, etc. Knowing which one tripped tells you where to look for the cause.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reduce the load first</p>
                <p className="text-sm text-gray-600">If the breaker tripped due to overload (too many appliances on one circuit), unplug several items from that circuit before resetting.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reset the breaker</p>
                <p className="text-sm text-gray-600">Push the switch firmly all the way to off, then back up to on. It should click and stay in the on position.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Test the circuit</p>
                <p className="text-sm text-gray-600">Turn on a light or plug in one appliance to confirm power is restored on that circuit.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">If it trips again</p>
                <p className="text-sm text-gray-600">Unplug every appliance on that circuit one at a time, then reset. When the breaker stays up with one item unplugged, that item is faulty — do not use it.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Where beginners go wrong */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Resetting without removing the cause — if you are overloading the circuit, it will just trip again.</p>
          <p className="text-sm text-yellow-900 mb-2">Ignoring a breaker that trips repeatedly — this indicates a faulty appliance or a wiring fault. Do not force it on.</p>
          <p className="text-sm text-yellow-900">Confusing the main switch with a circuit breaker — the main switch controls all power; individual breakers control one circuit each.</p>
        </div>

        {/* Stop and call a pro */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call an electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">The breaker trips immediately every time you reset it with nothing plugged in</p>
          <p className="text-sm text-red-900 mb-1">There is a burning smell or scorch marks near the consumer unit</p>
          <p className="text-sm text-red-900">The RCD (the wider switch labelled with a T or test button) keeps tripping — this indicates an earth fault</p>
        </div>

        {/* Cost breakdown */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Resetting a tripped breaker</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacing a faulty appliance</span><span className="font-medium">Varies</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Electrician to investigate a fault</span><span className="font-medium text-red-600">£40–60</span></div>
          </div>
        </div>

        {/* What you just learned */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how your consumer unit works, how to identify which circuit has tripped, and how to safely restore power. This knowledge also helps you isolate circuits safely before doing any electrical work.</p>
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
