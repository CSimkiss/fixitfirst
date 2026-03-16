import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Replace a Smoke Alarm Battery | FixItFirst',
  description: 'Replace a smoke alarm battery in 5 minutes and silence the low-battery chirp. Essential home safety guide. UK recommendations included.',
}

const steps = [
  { title: 'Locate all smoke alarms', description: 'UK guidance recommends at least one smoke alarm on every floor. Common locations: hallway at the bottom of the stairs, landing at the top, kitchen (use a heat alarm in kitchens, not a standard smoke alarm — they false-alarm from cooking).' },
  { title: 'Remove the alarm from the ceiling', description: 'Most alarms twist anticlockwise to remove from their base plate. Some have a locking tab — press and twist. The alarm should come away in your hands with the base remaining screwed to the ceiling.' },
  { title: 'Open the battery compartment', description: 'The battery door is usually on the back or side of the unit. Some alarms have a single 9V battery; others use AA or AAA batteries. Open the compartment and note the battery type before buying a replacement.' },
  { title: 'Replace the battery', description: 'Remove the old battery and insert the new one, matching the polarity (+ and − markings). Press the compartment closed until it clicks.' },
  { title: 'Test the alarm', description: 'Press and hold the test button for 3–5 seconds. A loud, sustained beep confirms the alarm is working. If no sound, check the battery is seated correctly.' },
  { title: 'Replace the whole unit if it is over 10 years old', description: 'Smoke alarm sensors degrade over time. UK Fire and Rescue Services recommend replacing the entire unit every 10 years. Check the manufacture date on the back — if it is over 10 years old, replace the unit regardless of battery condition.' },
]

export default function ReplaceASmokeAlarmBattery() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Replace a smoke alarm battery</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Keeps your home protected</p>
        <p className="text-gray-500 mb-8">5 mins · Beginner · Essential home safety</p>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">A smoke alarm that chirps every 30–60 seconds has a low battery — this is its warning signal. Do not remove the battery and leave the alarm disconnected. A home without a working smoke alarm is significantly more dangerous in a fire.</p>
          <p className="text-sm text-gray-700">Test all your smoke alarms once a month by pressing the test button. Replace batteries annually — a good habit is to do it when the clocks change.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Step ladder or chair</span> — to reach ceiling-mounted alarms safely</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement battery</span> — <span className="text-orange-600">buy: £2–5 — check type first: usually 9V PP3, AA, or AAA</span></span>
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
          <p className="text-sm text-yellow-900 mb-2">Removing the battery to stop the chirping and forgetting to replace it — leaving your home without a working alarm.</p>
          <p className="text-sm text-yellow-900 mb-2">Using a standard smoke alarm in the kitchen — they false-alarm from cooking. Use a heat alarm in the kitchen instead.</p>
          <p className="text-sm text-yellow-900">Keeping an alarm that is more than 10 years old — the sensor itself degrades and may not respond to smoke even with a fresh battery.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Important: if the alarm sounds for real</h2>
          <p className="text-sm text-red-900 mb-1">Get everyone out of the building immediately — do not investigate first</p>
          <p className="text-sm text-red-900 mb-1">Close doors as you leave to slow the spread of fire and smoke</p>
          <p className="text-sm text-red-900">Call 999 from outside — never go back in</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement battery</span><span className="font-medium">£2–5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">New smoke alarm (if over 10 years old)</span><span className="font-medium">£8–20</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Interconnected alarm system</span><span className="font-medium">£40–100</span></div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to maintain, test, and replace smoke alarms — and when the unit itself needs replacing. Working smoke alarms double your chances of escaping a house fire.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
