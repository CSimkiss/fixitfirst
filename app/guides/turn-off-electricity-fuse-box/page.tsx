import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'How to Turn Off Your Electricity at the Fuse Box | FixItFirst',
  description: 'Learn how to turn off your electricity at the consumer unit in seconds. Essential emergency skill every homeowner and renter needs.',
}

const steps = [
  { title: 'Find your consumer unit', description: 'Look under the stairs, in the hallway, kitchen, or garage. It is a white or grey box, usually mounted at head height, with a hinged cover. Open the cover to see the switches inside.' },
  { title: 'Identify the main switch', description: 'At the top or left of the unit is a large switch — usually labelled Main Switch. This controls power to the whole property.' },
  { title: 'Turn off the main switch', description: 'Push the main switch firmly to the off position (usually down). All power to the property will cut immediately.' },
  { title: 'Turn off individual circuits', description: 'If you only want to cut power to one room, find the breaker labelled for that circuit (e.g. Kitchen Sockets, Upstairs Lights) and switch it off individually.' },
  { title: 'Confirm the power is off', description: 'Try a light switch or plug in a phone charger on the circuit you have turned off. No response means the power is off.' },
  { title: 'Mark the location', description: 'Stick a label on the consumer unit door or take a photo so everyone in the house knows where it is. Also note the location for future reference.' },
]

export default function TurnOffElectricityFuseBox() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Turn off your electricity at the fuse box</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Essential safety knowledge</p>
        <p className="text-gray-500 mb-8">5 mins · Beginner · Essential emergency skill</p>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Every adult in the home should know where the consumer unit (fuse box) is and how to turn off the power. In an electrical emergency, seconds matter.</p>
          <p className="text-sm text-gray-700">Your consumer unit is usually under the stairs, in a hallway cupboard, or in the kitchen. It is a grey or white box with rows of switches inside.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Nothing needed</span> — just your consumer unit</span>
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
          <p className="text-sm text-yellow-900 mb-2">Not finding the consumer unit until there is already an emergency — find it now and tell everyone in the house.</p>
          <p className="text-sm text-yellow-900 mb-2">Assuming turning off a light switch cuts the power to the wiring — it does not. Only the consumer unit breaker does.</p>
          <p className="text-sm text-yellow-900">Not confirming the power is off before working on electrics — always test with a lamp or socket tester first.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call an electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">The main switch is already off but the property still has power — there may be a second supply</p>
          <p className="text-sm text-red-900 mb-1">There is burning, sparking, or a burning smell from the consumer unit</p>
          <p className="text-sm text-red-900">The cover is damaged or the wiring inside looks burnt or scorched</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Turning off the electricity</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Electrician if consumer unit is faulty</span><span className="font-medium">£100–250</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Emergency electrician call-out</span><span className="font-medium text-red-600">£100–250</span></div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to isolate power to the whole home or individual circuits in seconds. This is the most important electrical skill a homeowner or renter can have.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
