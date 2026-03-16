import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Reset a Tripped Circuit Breaker | FixItFirst',
  description: 'Reset a tripped circuit breaker in 10 minutes. Step-by-step guide — find your consumer unit, identify the tripped breaker, and restore power safely.',
}

const steps = [
  { title: 'Find your consumer unit', description: 'Your consumer unit (fuse box) is usually under the stairs, in a hallway cupboard, or in the kitchen. Open the cover — you will see a row of switches (circuit breakers) and one large main switch.' },
  { title: 'Identify the tripped breaker', description: 'A tripped breaker sits in the middle position or is pointing down while the rest are up. Some are orange or red when tripped. Check which circuit it is labelled for — Kitchen Sockets, Upstairs Lights, etc.' },
  { title: 'Unplug appliances on that circuit', description: 'Before resetting, unplug all appliances on the affected circuit. A circuit trips because it detected a fault or overload — if you reset without removing the cause, it will trip again immediately.' },
  { title: 'Reset the breaker', description: 'Push the tripped breaker firmly down to the off position, then push it back up to on. You should feel a click. If it trips again immediately, leave it off — there is a fault on that circuit.' },
  { title: 'Restore appliances one at a time', description: 'Plug appliances back in one at a time and switch them on. If the breaker trips when you add a particular appliance, that appliance is faulty — do not use it.' },
  { title: 'Identify the fault if it keeps tripping', description: 'If the breaker trips with nothing plugged in, there may be a wiring fault in the circuit — call a qualified electrician. Never tape or wedge a breaker in the on position.' },
]

export default function ResetATrippedCircuitBreaker() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset a tripped circuit breaker</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £40–60 today</p>
        <p className="text-gray-500 mb-8">10 mins · Beginner · Saves £40–60 vs an electrician call-out</p>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">A tripped breaker means the circuit detected an overload or a fault and cut power automatically to protect your wiring. This is normal — the breaker has done its job correctly.</p>
          <p className="text-sm text-gray-700">The most common cause is too many high-wattage appliances on one circuit (e.g. a kettle, toaster, and microwave all on the same kitchen circuit). Identify the cause before resetting.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Nothing needed</span> — just access to your consumer unit</span>
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
          <p className="text-sm text-yellow-900 mb-2">Resetting immediately without unplugging everything first — the same fault trips the breaker again before you have identified the cause.</p>
          <p className="text-sm text-yellow-900 mb-2">Not going down to the off position first — some breakers need to be pushed fully off before they can be reset to on.</p>
          <p className="text-sm text-yellow-900">Ignoring a breaker that trips repeatedly — this always indicates a fault that needs an electrician.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call an electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">The breaker trips with nothing plugged in — there is a wiring fault</p>
          <p className="text-sm text-red-900 mb-1">There is a burning smell or scorch marks on the consumer unit</p>
          <p className="text-sm text-red-900">The breaker trips immediately every time you reset it</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Resetting yourself</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Replacing a faulty breaker</span><span className="font-medium">£50–100</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Electrician call-out</span><span className="font-medium text-red-600">£40–60 minimum</span></div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how circuit breakers protect your home and how to systematically identify what caused a trip. This knowledge helps you manage your electrical load and spot genuinely faulty appliances before they cause damage.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
