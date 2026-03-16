import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Fix a Leaking Garden Tap | FixItFirst',
  description: 'Fix a leaking garden tap in 30 minutes. Step-by-step guide — covers the tap washer, gland packing, and back-plate connections. Save £60–100.',
}

const steps = [
  { title: 'Identify where the leak is coming from', description: 'Turn the tap on and off and observe carefully. Leaking from the spout when closed = worn washer. Leaking from around the spindle (the stem the handle sits on) = worn gland packing. Leaking from the back-plate (where the tap meets the wall) = a connector joint issue.' },
  { title: 'Turn off the water supply', description: 'Most garden taps have an isolation valve inside the house — usually under the kitchen sink or in the under-stairs cupboard. Turn it 90 degrees until the slot is perpendicular to the pipe. Open the garden tap to release any remaining water in the pipe.' },
  { title: 'Replace the washer (for spout drips)', description: 'Unscrew the tap handle (usually a cross-head screw under a cap on top). Remove the packing nut with an adjustable spanner. Pull out the headgear assembly. The washer is the rubber disc at the bottom — prise it off and replace it with a matching new one.' },
  { title: 'Re-pack the gland (for spindle leaks)', description: 'If water leaks around the spindle when the tap is open, the gland packing is worn. Unscrew the gland nut slightly and wrap PTFE tape around the spindle three times, then retighten. Alternatively, replace the gland packing material inside the nut.' },
  { title: 'Check the back-plate connections', description: 'If the leak is at the wall, the threaded connection may be loose or the seal may have failed. Use PTFE tape on the threaded inlet and tighten the back-plate. Do not overtighten on older plastic plumbing.' },
  { title: 'Restore water and test', description: 'Turn the isolation valve back on. Open and close the garden tap several times. Check all the points where you worked — the spout, the spindle, and the back-plate. No drips means success.' },
]

export default function FixAGardenTap() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a leaking garden tap</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £60–100 today</p>
        <p className="text-gray-500 mb-8">30 mins · Beginner · Saves £60–100 vs a plumber</p>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Garden taps leak for one of three reasons: a worn washer (most common), worn gland packing around the spindle, or a loose back-plate connection. Identifying the exact leak point before starting saves time and money on parts.</p>
          <p className="text-sm text-gray-700">A dripping garden tap wastes up to 5,000 litres of water per year. With water meter charges this adds £15–30 to your annual water bill — worth fixing quickly.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Adjustable spanner</span> — to remove the packing nut</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Cross-head screwdriver</span> — to remove the tap handle</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement tap washer</span> — <span className="text-orange-600">buy: £1–3 — take the old one to the hardware shop to match the size</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">PTFE tape</span> — <span className="text-orange-600">buy: £1–2 — for sealing threaded connections</span></span>
            </li>
          </ul>
        </div>

        <ol className="space-y-4 mb-6">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
              <div>
                <p className="font-semibold text-gray-900">{step.title}</p>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not turning off the water supply before disassembling — water will spray everywhere.</p>
          <p className="text-sm text-yellow-900 mb-2">Buying the wrong washer size — take the old washer with you to the hardware shop. Garden tap washers are larger than indoor tap washers.</p>
          <p className="text-sm text-yellow-900">Overtightening when reassembling — too tight cracks older plastic body taps and damages thread seals.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a plumber if...</h2>
          <p className="text-sm text-red-900 mb-1">The tap body itself is cracked or corroded — it needs replacing</p>
          <p className="text-sm text-red-900 mb-1">The back-plate is leaking inside the wall — this requires access to the pipe within</p>
          <p className="text-sm text-red-900">The isolation valve inside has seized and cannot be turned off</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Washer and PTFE tape</span><span className="font-medium">£2–5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Full tap replacement (if body damaged)</span><span className="font-medium">£15–40</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Plumber would charge</span><span className="font-medium text-red-600">£60–100</span></div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to diagnose tap leaks and replace a washer or gland packing. These exact skills transfer to fixing indoor taps — the mechanism is identical.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
