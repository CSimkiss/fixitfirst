import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Fix a Doorbell | FixItFirst',
  description: 'Fix a broken doorbell in 30 minutes. Step-by-step guide — covers wireless and wired doorbells, batteries, button contacts, and chime units. Save £40–80.',
}

const steps = [
  { title: 'Check the push button battery (wireless doorbells)', description: 'Most wireless doorbells have a battery in the push button on the door frame. Unscrew or unclip the button cover and replace the battery. Coin cell batteries (CR2032) are the most common.' },
  { title: 'Check the chime unit battery or power', description: 'The chime unit inside the house needs power. If battery-powered, replace the batteries. If plug-in, check it is properly plugged in and the socket is working.' },
  { title: 'Clean the button contacts', description: 'Dirty or corroded contacts prevent the button from making a circuit. Unscrew the button from the wall, use fine sandpaper or a cotton bud with electrical contact cleaner to clean the two metal contacts inside.' },
  { title: 'Test wireless signal range', description: 'If the bell works close to the chime but not from the door, the wireless signal is too weak. Move the chime unit closer to the door, or check for interference from other wireless devices.' },
  { title: 'Replace a faulty button', description: 'If cleaning does not help, replace the push button — they cost £3–8 and simply screw to the wall with two wires (for wired systems) or no wires (wireless). Make sure to get the matching model for wireless systems.' },
  { title: 'Reset or replace the chime unit', description: 'If the button is fine but the chime does not sound, press the reset button on the chime unit (usually a small pinhole reset). If still dead, replace the chime unit — most wireless systems sell replacement kits.' },
]

export default function FixADoorbell() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a doorbell</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £40–80 today</p>
        <p className="text-gray-500 mb-8">30 mins · Beginner · Saves £40–80 vs an electrician</p>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">90% of doorbell failures come down to a flat battery. Start there before doing anything else. This guide covers wireless doorbells (by far the most common in UK homes) and wired doorbells.</p>
          <p className="text-sm text-gray-700">Wired doorbells run on low-voltage — usually 8–12V from a transformer. They are safe to work on without turning off the mains.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Cross-head screwdriver</span> — to open the button housing</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement batteries</span> — <span className="text-orange-600">buy: £2–5 — CR2032 coin cell for most buttons; AA or AAA for chime units</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement push button (if needed)</span> — <span className="text-orange-600">buy: £3–8 — check model compatibility for wireless systems</span></span>
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
          <p className="text-sm text-yellow-900 mb-2">Replacing the whole system before checking the batteries — flat batteries are the cause at least half the time.</p>
          <p className="text-sm text-yellow-900 mb-2">Buying a replacement button that is not compatible with the chime unit — wireless systems need to be paired.</p>
          <p className="text-sm text-yellow-900">Not checking if the chime is on the correct channel — many wireless chimes have channel settings. The button and chime must be on the same channel.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call an electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">You have a wired system and the transformer has failed — replacement requires electrical work</p>
          <p className="text-sm text-red-900">The doorbell wiring inside the wall is damaged or you cannot trace where it runs</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">New batteries only</span><span className="font-medium">£2–5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacement push button</span><span className="font-medium">£5–12</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Full wireless replacement kit</span><span className="font-medium">£15–30</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Electrician would charge</span><span className="font-medium text-red-600">£40–80</span></div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to diagnose doorbell faults systematically — from battery to contacts to signal to chime unit. This approach works for any low-voltage wireless device in your home.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
