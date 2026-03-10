import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Essential DIY Tools to Buy | FixItFirst',
  description: 'The 10 essential DIY tools every beginner should own. What each tool does, when you need it, and how much to spend.',
}

type Tool = {
  number: number
  name: string
  emoji: string
  what: string
  when: string
  cost: string
  tip: string
}

const TOOLS: Tool[] = [
  {
    number: 1,
    name: 'Screwdriver Set',
    emoji: '🪛',
    what: 'A set of flat-head and Phillips (cross-head) screwdrivers in a few sizes.',
    when: 'Literally everything. Flat-pack furniture, light switches, door handles, curtain brackets.',
    cost: '£5–15',
    tip: 'Get a set not just one — you\'ll quickly find screws in many sizes.',
  },
  {
    number: 2,
    name: 'Cordless Drill',
    emoji: '🔧',
    what: 'An electric drill that runs on a rechargeable battery. Drills holes and drives screws.',
    when: 'Putting up shelves, curtain poles, picture frames, mirrors. Most jobs with screws.',
    cost: '£30–60',
    tip: 'Buy a combo kit that includes drill bits and screwdriver bits. Look for 18V.',
  },
  {
    number: 3,
    name: 'Tape Measure',
    emoji: '📏',
    what: 'A retractable metal measuring tape, usually 5m long.',
    when: 'Before cutting, drilling, or buying anything. Measure twice, cut once.',
    cost: '£3–8',
    tip: 'Get one with a locking mechanism so it holds in place when you\'re measuring alone.',
  },
  {
    number: 4,
    name: 'Spirit Level',
    emoji: '⚖️',
    what: 'A straight tool with a bubble in a tube that shows you if something is perfectly horizontal.',
    when: 'Hanging shelves, curtain poles, pictures, TVs — anything that looks wrong if not level.',
    cost: '£5–15',
    tip: 'A 60cm level works for most jobs. Worth buying a decent one — cheap ones can be inaccurate.',
  },
  {
    number: 5,
    name: 'Hammer',
    emoji: '🔨',
    what: 'A claw hammer — one end drives nails, the other end pulls them out.',
    when: 'Driving nails, picture hooks, light demolition, tapping things into place.',
    cost: '£8–20',
    tip: 'A 450g (16oz) weight is versatile. The claw end is great for pulling up old flooring.',
  },
  {
    number: 6,
    name: 'Adjustable Spanner',
    emoji: '🔩',
    what: 'A wrench with a movable jaw that fits nuts and bolts of almost any size.',
    when: 'Fixing taps, plumbing under sinks, assembling furniture, any nut or bolt.',
    cost: '£8–15',
    tip: 'A 200mm adjustable spanner covers most household jobs. Keep it well oiled.',
  },
  {
    number: 7,
    name: 'Pliers',
    emoji: '🪚',
    what: 'Metal gripping tools — general pliers for gripping, needle-nose for tight spaces.',
    when: 'Gripping pipes, pulling nails, holding small parts, twisting wire.',
    cost: '£5–12',
    tip: 'A small set of three (general, needle-nose, wire cutters) covers all bases.',
  },
  {
    number: 8,
    name: 'Stanley / Utility Knife',
    emoji: '🔪',
    what: 'A retractable blade in a handle for cutting straight lines.',
    when: 'Cutting carpet, vinyl flooring, opening packaging, scoring wallpaper, trimming sealant.',
    cost: '£3–8',
    tip: 'Buy a pack of spare blades. A sharp blade is safer than a dull one.',
  },
  {
    number: 9,
    name: 'Radiator Bleed Key',
    emoji: '🔑',
    what: 'A small square key that opens the valve at the top of a radiator.',
    when: 'Bleeding radiators every autumn — takes 5 minutes and can save £50+ on heating.',
    cost: '£1–3',
    tip: 'Keep one on your keyring. They\'re tiny and you\'ll thank yourself every October.',
  },
  {
    number: 10,
    name: 'PTFE Tape',
    emoji: '🧻',
    what: 'White thread-seal tape that wraps around pipe threads to prevent leaks.',
    when: 'Any plumbing job — fitting taps, shower heads, pipe connectors.',
    cost: '£1–3',
    tip: 'Wrap clockwise (when looking at the thread end) 3–5 times. Essential for any plumbing.',
  },
]

export default function ToolsToBuy() {
  const totalMin = TOOLS.reduce((acc, t) => acc + parseInt(t.cost.replace('£', '').split('–')[0]), 0)
  const totalMax = TOOLS.reduce((acc, t) => acc + parseInt(t.cost.split('–')[1]), 0)

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">← Back to home</a>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Essential DIY Tools</h1>
        <p className="text-gray-500 mb-2">The starter kit that covers 90% of home repairs.</p>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-2 text-sm font-medium mb-8">
          <span>💰</span>
          <span>Full kit costs £{totalMin}–{totalMax}. Plumbers charge that for one visit.</span>
        </div>

        <div className="space-y-5">
          {TOOLS.map(tool => (
            <div key={tool.number} className="border border-gray-200 rounded-xl p-6 hover:border-orange-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {tool.number}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xl">{tool.emoji}</span>
                    <h2 className="text-lg font-bold text-gray-900">{tool.name}</h2>
                    <span className="ml-auto bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">{tool.cost}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2"><span className="font-medium text-gray-900">What it is:</span> {tool.what}</p>
                  <p className="text-sm text-gray-600 mb-3"><span className="font-medium text-gray-900">When you need it:</span> {tool.when}</p>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 text-sm text-blue-800">
                    💡 {tool.tip}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gray-950 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Ready to put these tools to use?</h2>
          <p className="text-gray-300 mb-6 text-sm">Start with the easiest jobs and build your confidence.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/guides" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">Browse guides</a>
            <a href="/tier-1" className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors">Start with the basics</a>
          </div>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
