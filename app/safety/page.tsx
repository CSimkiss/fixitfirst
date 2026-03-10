import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'DIY Safety Guide | FixItFirst',
  description: 'Essential DIY safety rules for beginners. Electricity safety, water shut-offs, gas safety, ladder safety, and when to wear PPE.',
}

const SAFETY_SECTIONS = [
  {
    emoji: '⚡',
    title: 'Electricity Safety',
    colour: 'bg-yellow-50 border-yellow-200',
    headingColour: 'text-yellow-800',
    textColour: 'text-yellow-900',
    rules: [
      { rule: 'Always turn off at the fusebox first', detail: 'Find the relevant circuit breaker and switch it off. Then test the socket or light with a plug-in lamp or non-contact voltage tester before touching anything.' },
      { rule: 'Never work live', detail: 'Even if a switch is "off", the supply cable behind it may still be live. The only safe approach is to isolate at the fusebox.' },
      { rule: 'Test before you touch', detail: 'A non-contact voltage tester costs £8–15 and could save your life. Hold it near any wire before touching — it beeps or lights up if current is present.' },
      { rule: 'Never work near water with electricity live', detail: 'Bathrooms and kitchens are danger zones. Electricity and water together are fatal. Always isolate the circuit completely.' },
      { rule: 'Call an electrician for new circuits', detail: 'Adding sockets, moving wiring, or installing electric showers requires a certified electrician (Part P) in England and Wales. This is the law.' },
    ],
  },
  {
    emoji: '💧',
    title: 'Water & Plumbing Safety',
    colour: 'bg-blue-50 border-blue-200',
    headingColour: 'text-blue-800',
    textColour: 'text-blue-900',
    rules: [
      { rule: 'Know where your stopcock is', detail: 'The stopcock (main water shut-off) is usually under the kitchen sink or where the water pipe enters the house. Turn it off before any plumbing work.' },
      { rule: 'Turn off at the isolation valve, not just the tap', detail: 'Most taps have an isolation valve on the pipe underneath. A flat-head screwdriver turns it 90° to isolate just that tap without cutting off water to the whole house.' },
      { rule: 'Turn on slowly and watch for drips', detail: 'When you restore water after a repair, turn the stopcock or isolation valve on slowly and watch all connections for at least 60 seconds before turning on fully.' },
      { rule: 'Don\'t ignore small drips', detail: 'A slow drip can cause serious damp, mould, and structural damage over months. Fix it early or call a plumber.' },
      { rule: 'Never attempt to fix a burst pipe under pressure', detail: 'If water is spraying or gushing, turn off the stopcock immediately. Then call a plumber. Don\'t try to patch it while it\'s under pressure.' },
    ],
  },
  {
    emoji: '🔥',
    title: 'Gas Safety',
    colour: 'bg-red-50 border-red-200',
    headingColour: 'text-red-800',
    textColour: 'text-red-900',
    rules: [
      { rule: 'Never DIY gas work — ever', detail: 'Gas work in the UK must be performed by a Gas Safe registered engineer. This is a legal requirement, not a suggestion. Illegal gas work kills people every year.' },
      { rule: 'Know where your gas shut-off is', detail: 'The gas isolation valve is usually next to the gas meter, which is often outside the house or in a meter cupboard. Turning it 90° shuts off all gas supply.' },
      { rule: 'If you smell gas — act immediately', detail: 'Don\'t turn any lights or switches on or off. Don\'t use your phone inside the building. Get everyone out. Open doors and windows as you leave. Call the National Gas Emergency Service: 0800 111 999.' },
      { rule: 'Get a carbon monoxide alarm', detail: 'CO is colourless and odourless — you can\'t detect it without an alarm. It\'s legally required near gas appliances in rental properties and strongly recommended in all homes. Costs £15–30.' },
      { rule: 'Service your boiler annually', detail: 'An annual boiler service by a Gas Safe engineer costs £60–100 and catches problems before they become dangerous.' },
    ],
  },
  {
    emoji: '🪜',
    title: 'Ladder Safety',
    colour: 'bg-green-50 border-green-200',
    headingColour: 'text-green-800',
    textColour: 'text-green-900',
    rules: [
      { rule: 'Never use a ladder alone for roof or gutter work', detail: 'Always have someone footing the ladder (holding the base). Falls from ladders are one of the most common DIY injuries.' },
      { rule: 'Use the 1-in-4 rule', detail: 'For every 4 metres of height, the base of the ladder should be 1 metre out from the wall. Too steep = risk of falling back. Too shallow = risk of the base slipping.' },
      { rule: 'Check the ladder before use', detail: 'Bent rungs, cracked stiles, or broken feet are deal-breakers. Never use a damaged ladder.' },
      { rule: 'Don\'t overreach', detail: 'If you\'re leaning to reach something, your belt buckle should stay within the ladder stiles. Move the ladder instead.' },
      { rule: 'Wear non-slip footwear', detail: 'Smooth-soled shoes on metal ladder rungs is a recipe for a fall. Wear shoes with rubber soles.' },
    ],
  },
  {
    emoji: '🥽',
    title: 'When to Wear PPE',
    colour: 'bg-purple-50 border-purple-200',
    headingColour: 'text-purple-800',
    textColour: 'text-purple-900',
    rules: [
      { rule: 'Safety glasses — always when drilling', detail: 'Masonry dust and fragments travel fast. A £3 pair of safety glasses is cheaper than an eye injury.' },
      { rule: 'Dust mask — when sanding or cutting masonry', detail: 'Fine masonry and plasterboard dust is bad for your lungs. An FFP2 mask costs £1–2 each. Worth it.' },
      { rule: 'Ear protection — when using power tools for extended periods', detail: 'Drilling into masonry is loud enough to damage hearing over time. Foam earplugs cost pennies.' },
      { rule: 'Gloves — when handling chemicals or rough materials', detail: 'Wear nitrile gloves for drain unblockers or pipe cement. Wear work gloves for handling rough wood or metal sheet.' },
      { rule: 'Knee pads — when working on floors for long periods', detail: 'Optional but your knees will thank you.' },
    ],
  },
]

export default function Safety() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">← Back to home</a>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">DIY Safety Rules</h1>
          <p className="text-gray-500">Most DIY is safe when done correctly. These rules will keep you safe while you learn.</p>
        </div>

        <div className="bg-red-600 text-white rounded-xl p-5 mb-10">
          <h2 className="font-bold text-lg mb-3">Emergency Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="bg-white/10 rounded-lg p-3">
              <p className="font-bold">Gas emergency</p>
              <p className="text-red-100">0800 111 999</p>
              <p className="text-red-200 text-xs mt-1">24 hours</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="font-bold">Power cut</p>
              <p className="text-red-100">105</p>
              <p className="text-red-200 text-xs mt-1">UK-wide number</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="font-bold">Water emergency</p>
              <p className="text-red-100">Call your supplier</p>
              <p className="text-red-200 text-xs mt-1">Number on your bill</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {SAFETY_SECTIONS.map(section => (
            <div key={section.title} className={`border rounded-xl overflow-hidden ${section.colour}`}>
              <div className={`px-6 py-4 ${section.colour}`}>
                <h2 className={`text-xl font-bold flex items-center gap-2 ${section.headingColour}`}>
                  <span>{section.emoji}</span>
                  {section.title}
                </h2>
              </div>
              <div className="divide-y divide-white/50">
                {section.rules.map((item, i) => (
                  <div key={i} className="px-6 py-4">
                    <p className={`font-semibold mb-1 ${section.headingColour}`}>{item.rule}</p>
                    <p className={`text-sm ${section.textColour}`}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gray-950 text-white rounded-xl p-8 text-center">
          <p className="text-gray-300 mb-2">Ready to start your first job?</p>
          <h2 className="text-xl font-bold mb-6">Begin with the easiest guides</h2>
          <a href="/tier-1" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">See beginner guides</a>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
