import StepProgress from '@/components/StepProgress'
import CompleteButton from '@/components/CompleteButton'
import MobileNav from '@/components/MobileNav'

const steps = [
  { title: 'Turn off the heating', description: 'Switch off your central heating and wait 20–30 minutes for the radiators to cool. Never bleed a hot radiator.' },
  { title: 'Locate the bleed valve', description: 'Find the small square valve at the top corner of the radiator. Place a cloth underneath to catch any water.' },
  { title: 'Insert the bleed key', description: 'Fit the bleed key into the square slot on the valve. Turn it slowly anticlockwise — about a quarter turn.' },
  { title: 'Let the air escape', description: 'You will hear a hissing sound as air escapes. Keep the key in place and wait until the hissing stops and water starts to trickle out.' },
  { title: 'Tighten the valve', description: 'As soon as water appears, turn the key clockwise to close the valve. Do not overtighten.' },
  { title: 'Check boiler pressure and test', description: 'Check your boiler pressure gauge — it should read 1–1.5 bar. If it has dropped, top it up using the filling loop. Turn the heating back on and check the radiator heats evenly.' },
]

export default function BleedARadiator() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-orange-500">FixItFirst</a>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Get Started</button>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bleed a radiator</h1>
        <p className="text-gray-500 mb-6">15 mins · Beginner · Saves £50-80 vs a heating engineer</p>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Do this if your radiator is cold at the top but warm at the bottom — that means trapped air is preventing hot water from circulating.</p>
          <p className="text-sm text-gray-700 mb-2">You need a radiator bleed key (about £1 from any hardware shop) and a cloth or small container to catch drips.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Radiator bleed key</span> — <span className="text-orange-600">buy: £1–3 from any hardware shop</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Old cloth or small container</span> — to catch drips, any household rag will do</span>
            </li>
          </ul>
        </div>
        <StepProgress steps={steps} />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Opening the valve too far and letting too much water out, dropping the boiler pressure.</p>
          <p className="text-sm text-yellow-900 mb-2">Not placing a cloth under the valve and getting water on the floor.</p>
          <p className="text-sm text-yellow-900">Forgetting to check boiler pressure afterwards, causing the boiler to cut out.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a heating engineer if...</h2>
          <p className="text-sm text-red-900 mb-1">The boiler pressure keeps dropping after you top it up</p>
          <p className="text-sm text-red-900 mb-1">The water coming out is black or very murky</p>
          <p className="text-sm text-red-900">The radiator is still cold all over after bleeding</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Radiator bleed key</span><span className="font-medium">£1-3</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Your time only</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Heating engineer would charge</span><span className="font-medium text-red-600">£50-80</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how central heating systems circulate water and why air gets trapped. These skills transfer to balancing radiators and maintaining your boiler pressure.</p>
        </div>
        <CompleteButton />
      </div>
      <MobileNav />
    </main>
  )
}
