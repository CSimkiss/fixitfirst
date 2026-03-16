import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Replace a Plug Fuse | FixItFirst',
  description: 'Replace a plug fuse in 5 minutes with a screwdriver. Step-by-step guide — covers fuse ratings and why appliances blow fuses. Save £30–60.',
}

const steps = [
  { title: 'Unplug the appliance', description: 'Always unplug completely from the wall before opening the plug. Never replace a fuse with the plug still in the socket.' },
  { title: 'Open the plug', description: 'Use a flat-head screwdriver to undo the single screw on the back of the plug (the large one in the centre). The plug will come apart into two halves.' },
  { title: 'Remove the old fuse', description: 'The fuse is the small cylindrical cartridge held between two clips inside the plug. Lever it out gently with the screwdriver tip or your fingernail.' },
  { title: 'Check the correct fuse rating', description: 'Most household appliances use a 3A fuse (for items under 700W — lamps, phone chargers, shavers) or a 13A fuse (for items over 700W — kettles, toasters, irons, computers). Check the appliance wattage label.' },
  { title: 'Insert the new fuse', description: 'Press the correct replacement fuse firmly into the two clips. It should sit flush and not rattle. Make sure it is the same physical size (the standard UK fuse is 25mm × 6mm).' },
  { title: 'Reassemble and test', description: 'Clip the plug back together and tighten the screw. Plug in and test the appliance. If the fuse blows again immediately, the appliance has a fault — do not keep replacing fuses.' },
]

export default function ReplaceAPlugFuse() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Replace a plug fuse</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £30–60 today</p>
        <p className="text-gray-500 mb-8">5 mins · Beginner · Saves £30–60 vs an electrician call-out</p>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">A blown fuse is the most common reason an appliance stops working. The fuse is designed to protect the appliance wiring — it blows to prevent a fire if there is a fault or a power surge.</p>
          <p className="text-sm text-gray-700">Using the wrong fuse rating is dangerous. Too low and the fuse will keep blowing. Too high and it won't protect the appliance — it could start a fire.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Flat-head screwdriver</span> — standard household tool</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement fuse (3A or 13A)</span> — <span className="text-orange-600">buy: £1–3 from any supermarket, hardware shop, or DIY store</span></span>
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
          <p className="text-sm text-yellow-900 mb-2">Using a 13A fuse on a low-wattage appliance — it won't protect the appliance wiring. Match the fuse to the appliance wattage.</p>
          <p className="text-sm text-yellow-900 mb-2">Replacing a fuse that keeps blowing — a fuse that blows repeatedly indicates a fault in the appliance, not a fuse problem.</p>
          <p className="text-sm text-yellow-900">Using a coin or metal strip instead of a proper fuse — this is extremely dangerous and a fire risk.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call an electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">The fuse blows again immediately after replacement — the appliance has a fault</p>
          <p className="text-sm text-red-900 mb-1">The plug is cracked, burnt, or discoloured — the plug needs replacing entirely</p>
          <p className="text-sm text-red-900">There is a burning smell from the plug or appliance — do not use it again until inspected</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Pack of replacement fuses</span><span className="font-medium">£1–3</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">New plug (if needed)</span><span className="font-medium">£2–5</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Electrician call-out</span><span className="font-medium text-red-600">£30–60</span></div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how plug fuses protect appliances, how to choose the right rating, and how to recognise when a fuse blowing is a symptom of a deeper fault. This knowledge applies to every plugged-in appliance in your home.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
