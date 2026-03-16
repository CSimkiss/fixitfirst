import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Bleed All Radiators in Your Home | FixItFirst',
  description: 'Bleed all radiators in your home in under an hour. Step-by-step guide — correct order, boiler pressure checks, and when to balance. Save £80–150.',
}

const steps = [
  { title: 'Turn the heating on and identify cold radiators', description: 'Run the heating for 20 minutes, then feel the top and bottom of every radiator. If the top is cold but the bottom is warm, trapped air is blocking circulation — it needs bleeding. Note which radiators need attention.' },
  { title: 'Turn the heating off and allow to cool', description: 'Switch the heating off and wait 20–30 minutes. Never bleed a hot radiator — the water inside is under pressure and near boiling. Cooling also lets the system pressure settle.' },
  { title: 'Work from the ground floor upwards', description: 'Start with the radiator furthest from the boiler on the ground floor, then work towards the boiler, then repeat on the upper floor. Air rises, so you bleed ground floor first to prevent releasing air back into lower circuits.' },
  { title: 'Bleed each radiator', description: 'Insert the bleed key into the square valve at the top corner of the radiator. Place a cloth underneath. Turn anticlockwise a quarter-turn — you will hear hissing. When hissing stops and steady water appears, close the valve clockwise immediately.' },
  { title: 'Check boiler pressure after every 2–3 radiators', description: 'Bleeding releases water from the system, dropping boiler pressure. Check the gauge after every few radiators. If it drops below 1 bar, repressurise before continuing — see the repressurising guide.' },
  { title: 'Turn heating back on and test', description: 'Once all radiators are bled and pressure is at 1–1.5 bar, turn the heating back on. After 30 minutes, feel across every radiator — they should now be evenly warm from top to bottom. If any remain cold at the bottom, this indicates sludge — a power flush may be needed.' },
]

export default function BleedAllRadiators() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bleed all radiators in your home</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £80–150 on heating bills</p>
        <p className="text-gray-500 mb-8">1 hour · Beginner · Improves heating efficiency throughout your home</p>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Bleeding all radiators is worth doing at the start of every heating season — typically October. Air enters the system over summer and accumulates in the top of radiators, reducing their heat output and making the boiler work harder.</p>
          <p className="text-sm text-gray-700">You need one tool: a radiator bleed key (costs £1–3). Have a cloth and a bowl for each radiator — some release more water than others, especially if they haven't been bled in years.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Radiator bleed key</span> — <span className="text-orange-600">buy: £1–3 from any hardware shop or DIY store</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Old cloths or towels</span> — one per radiator to catch drips</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Small bowl or container</span> — to catch water if significant air has built up</span>
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
          <p className="text-sm text-yellow-900 mb-2">Bleeding in the wrong order — always ground floor first, furthest from boiler first, then work up and towards the boiler.</p>
          <p className="text-sm text-yellow-900 mb-2">Not checking boiler pressure during the process — pressure can drop significantly when bleeding multiple radiators in sequence.</p>
          <p className="text-sm text-yellow-900">Opening the valve too far — a quarter-turn is all that is needed. Too far and water gushes out, making a mess and dropping pressure fast.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a heating engineer if...</h2>
          <p className="text-sm text-red-900 mb-1">Radiators remain cold at the bottom after bleeding — this is sludge, not air, and requires a power flush</p>
          <p className="text-sm text-red-900 mb-1">Black, oily, or very dirty water comes out when bleeding — indicates severe corrosion in the system</p>
          <p className="text-sm text-red-900">Boiler pressure drops to zero within 24 hours of repressurising — there is a leak</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Radiator bleed key</span><span className="font-medium">£1–3</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Heating engineer to bleed all radiators</span><span className="font-medium">£50–80</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Power flush (if sludge found)</span><span className="font-medium text-red-600">£300–600</span></div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to maintain your whole central heating system annually. Regular bleeding keeps your system efficient, reduces gas consumption, and extends boiler life.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
