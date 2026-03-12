import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fix a Doorbell | FixItFirst',
  description: 'Fix a broken doorbell in 30 minutes. Step-by-step guide covering batteries, the button, wiring, and wireless upgrades. Save £40–80.',
}

export default function FixADoorbell() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a doorbell</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £40–80 today</p>
        <p className="text-gray-500 mb-8">30 mins · Beginner · Saves £40–80 vs a tradesperson</p>

        {/* Before you start */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Most doorbell faults are caused by flat batteries, a corroded button, or a loose wire — all quick and cheap to fix.</p>
          <p className="text-sm text-gray-700">Start with the batteries and work outward. Do not replace the whole unit before you have checked the simple causes.</p>
        </div>

        {/* Tools needed */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement batteries</span> — <span className="text-orange-600">buy: £2–4 — check the chime unit for the battery type before buying</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Small screwdriver</span> — to remove the button from the wall</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement button (if needed)</span> — <span className="text-orange-600">buy: £5–12 — match the voltage (most are 8–12V AC or wireless)</span></span>
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
                <p className="font-semibold text-gray-900 mb-1">Replace the batteries first</p>
                <p className="text-sm text-gray-600">Open the chime unit inside your home. Replace all batteries with fresh ones and test. This solves most doorbell faults.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Inspect the button outside</p>
                <p className="text-sm text-gray-600">Unscrew the button from the wall — usually two small screws. Look at the two wire terminals. Clean any green corrosion with a dry cloth or fine sandpaper.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Test the button directly</p>
                <p className="text-sm text-gray-600">With the button removed, briefly touch the two wires together for a second. If the chime sounds, the button is the fault — replace it.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Replace the button if faulty</p>
                <p className="text-sm text-gray-600">Take the old button to a hardware shop to match the style. Connect the two wires to the terminals on the new button (polarity does not matter) and screw it back.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Check the wiring</p>
                <p className="text-sm text-gray-600">Trace the wire from the button to the chime unit. Look for breaks, sharp kinks, or loose connections at either end.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Consider a wireless upgrade</p>
                <p className="text-sm text-gray-600">If the wiring is old or hidden in the wall and unreliable, a wireless doorbell (£15–25) eliminates it altogether and takes 10 minutes to fit.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Where beginners go wrong */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Replacing the whole chime unit before checking the batteries and button — 90% of faults are in one of those two places.</p>
          <p className="text-sm text-yellow-900 mb-2">Forgetting that the button has low-voltage wires — these are safe to touch, but make sure the transformer is not the culprit too.</p>
          <p className="text-sm text-yellow-900">Not cleaning the button contacts — corrosion on the terminals is a very common cause of intermittent faults.</p>
        </div>

        {/* Stop and call a pro */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call an electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">There is no transformer and you cannot trace where the doorbell gets its power from</p>
          <p className="text-sm text-red-900 mb-1">You find 240V mains wiring connected to the doorbell circuit</p>
          <p className="text-sm text-red-900">The chime unit is hard-wired and you are unsure how to replace it safely</p>
        </div>

        {/* Cost breakdown */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">New batteries</span><span className="font-medium">£2–4</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement button</span><span className="font-medium">£5–12</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Wireless doorbell kit</span><span className="font-medium">£15–25</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Electrician would charge</span><span className="font-medium text-red-600">£40–80</span></div>
          </div>
        </div>

        {/* What you just learned */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how wired doorbells work, how to fault-find from the simplest fix outward, and when a wireless replacement makes more sense than a repair.</p>
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
