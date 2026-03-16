import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'What to Do When Your Boiler Breaks Down | FixItFirst',
  description: 'Diagnose a boiler breakdown in 30 minutes. Step-by-step guide — check pressure, error codes, pilot light, and when to call a Gas Safe engineer.',
}

const steps = [
  { title: 'Check the basics first', description: 'Is the boiler switched on? Is the room thermostat set high enough? Is the programmer set to heating mode? Are the gas supply and electricity supply on? These seem obvious but are responsible for a surprising number of "breakdowns".' },
  { title: 'Check the boiler pressure', description: 'Look at the pressure gauge on the boiler front. It should read 1–1.5 bar. If it is below 1 bar, the system has lost pressure — see the repressurising guide. A drop to zero may mean the expansion vessel has failed.' },
  { title: 'Read the error code', description: 'Modern boilers display an error code (e.g. F22, E1, EA) on a small screen. Write it down and search "[your boiler make] error code [code number]" — most codes point to a specific, well-documented fault.' },
  { title: 'Try a reset', description: 'Most boilers have a reset button (hold for 3–5 seconds). After a reset, the boiler goes through its ignition sequence. If it fires and then locks out again within a minute, there is an underlying fault — do not keep resetting.' },
  { title: 'Check if the fault is DIY-safe to fix', description: 'Low pressure, frozen condensate pipe (a plastic pipe that exits the house — pour warm water over it in freezing weather), and thermostat issues are DIY-safe. Anything involving the gas valve, heat exchanger, or ignition components needs a Gas Safe engineer.' },
  { title: 'Call a Gas Safe registered engineer', description: 'Check the engineer is on the Gas Safe Register at gassaferegister.co.uk. Explain the error code — a good engineer will quote over the phone whether it is a common fix. Get at least two quotes for repairs over £200.' },
]

export default function BoilerBreakdownWhatToDo() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">What to do when your boiler breaks down</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £100–300 today</p>
        <p className="text-gray-500 mb-8">30 mins · Beginner · Saves £100–300 by diagnosing before calling</p>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Many boiler "breakdowns" can be resolved without an engineer. Low pressure, a tripped thermostat, a frozen condensate pipe, or a simple reset fix the problem in around 30% of callouts.</p>
          <p className="text-sm text-gray-700">Never attempt to work on the gas supply itself. If you smell gas, leave the building immediately, call the National Gas Emergency Service on 0800 111 999, and do not return until they have given the all-clear.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Nothing needed</span> — diagnosis requires eyes and the boiler manual</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Boiler manual</span> — find your model online if you don't have the original</span>
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
          <p className="text-sm text-yellow-900 mb-2">Repeatedly pressing reset without diagnosing — a boiler that locks out exists for a reason. Clearing the lockout without fixing the cause just delays the breakdown.</p>
          <p className="text-sm text-yellow-900 mb-2">Calling an engineer without noting the error code — a precise code allows an engineer to come prepared and saves a repeat visit.</p>
          <p className="text-sm text-yellow-900">Ignoring a boiler that works but cycles on and off frequently — this is a warning sign of a heat exchanger or pump issue that will escalate.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Emergency: call 0800 111 999 if...</h2>
          <p className="text-sm text-red-900 mb-1">You smell gas — leave immediately, do not use light switches or phones inside</p>
          <p className="text-sm text-red-900 mb-1">You suspect carbon monoxide — symptoms: headache, dizziness, nausea — leave immediately and call 999</p>
          <p className="text-sm text-red-900">Your carbon monoxide alarm sounds</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Typical repair costs</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Relight / reset / repressurise yourself</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Engineer call-out + minor repair</span><span className="font-medium">£80–150</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Common parts (pump, valve)</span><span className="font-medium">£150–350</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">New boiler (if beyond repair)</span><span className="font-medium text-red-600">£1,500–3,000 fitted</span></div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to systematically diagnose a boiler fault and distinguish between what you can fix yourself and what needs a Gas Safe engineer. A prepared diagnosis saves time and money on every callout.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
