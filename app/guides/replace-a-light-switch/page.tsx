import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Replace a Light Switch | FixItFirst',
  description: 'Replace a light switch in 30 minutes. Step-by-step guide — covers turning off power safely, connecting wires, and fitting a new faceplate. Save £60–100.',
}

const steps = [
  { title: 'Turn off the circuit at the consumer unit', description: 'Find the breaker labelled for the lights in that room and switch it off. Never rely on just turning the light switch off — the wiring behind is still live until the circuit breaker is off.' },
  { title: 'Confirm the power is off', description: 'Use a plug-in socket tester or try a lamp on the same circuit. Better still, use a non-contact voltage tester near the switch before touching any wires.' },
  { title: 'Remove the old switch faceplate', description: 'Unscrew the two screws at the top and bottom of the faceplate. Pull it forward carefully. There will be 1–3 wires connected to the back — do not pull sharply.' },
  { title: 'Photograph the wiring before disconnecting', description: 'Take a clear photo of how the wires are connected. UK single switches typically have one or two wires (COM and L1). Two-way switches have three (COM, L1, L2). This photo is your reference when connecting the new switch.' },
  { title: 'Transfer the wires to the new switch', description: 'Connect each wire to the matching terminal on the new switch following your photo. The terminals will be labelled COM, L1, and (for two-way) L2. Tighten each screw securely — a loose wire is a fire risk.' },
  { title: 'Fix the new faceplate and test', description: 'Fold the wires neatly back into the back box. Screw on the new faceplate. Restore power at the consumer unit and test the switch.' },
]

export default function ReplaceALightSwitch() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Replace a light switch</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £60–100 today</p>
        <p className="text-gray-500 mb-8">30 mins · Beginner · Saves £60–100 vs an electrician</p>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Replacing a like-for-like switch (same style, same number of wires) is straightforward. You are only changing the faceplate — the wiring stays in the back box and just transfers to the new switch terminals.</p>
          <p className="text-sm text-gray-700">In the UK, replacing a switch faceplate for like-for-like is DIY-legal. You do not need to notify Building Control for a simple switch replacement. Always isolate the circuit first.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Flat-head and cross-head screwdriver</span> — for back box and terminal screws</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Phone or camera</span> — to photograph wiring before disconnecting</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement light switch</span> — <span className="text-orange-600">buy: £3–15 — match the type: single/double, one-way/two-way</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Non-contact voltage tester</span> — <span className="text-orange-600">buy: £8–15 — strongly recommended before touching any wires</span></span>
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
          <p className="text-sm text-yellow-900 mb-2">Not turning off the circuit breaker — turning the light switch off does not make the wiring safe.</p>
          <p className="text-sm text-yellow-900 mb-2">Not photographing the wiring — once wires are disconnected, it is easy to forget which terminal each connected to.</p>
          <p className="text-sm text-yellow-900">Buying the wrong switch type — a one-way switch will not work where a two-way is needed (e.g. at the top and bottom of a staircase).</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call an electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">You find more wires than expected or wiring you do not recognise — older homes have different wire colours</p>
          <p className="text-sm text-red-900 mb-1">There are burn marks or melted insulation on any wire</p>
          <p className="text-sm text-red-900">You want to add a dimmer, smart switch, or change to a different circuit configuration</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Standard replacement switch</span><span className="font-medium">£3–8</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Chrome or designer switch</span><span className="font-medium">£8–20</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Electrician would charge</span><span className="font-medium text-red-600">£60–100</span></div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to safely isolate a circuit and replace a switch faceplate. These skills apply equally to replacing plug sockets — same process, same safety steps.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
