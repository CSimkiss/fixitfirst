import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'DIY Glossary | FixItFirst',
  description: 'Plain English definitions of common DIY terms — isolation valves, rawl plugs, joists, stopcocks, and more.',
}

type Term = {
  term: string
  also?: string
  definition: string
  related?: string
}

const TERMS: Term[] = [
  {
    term: 'Architrave',
    definition: 'The decorative moulded trim that frames a door or window opening, covering the gap between the frame and the wall.',
  },
  {
    term: 'Ballcock',
    also: 'ball valve, float valve',
    definition: 'The mechanism inside your toilet cistern that controls refilling. A floating ball rises with the water level and shuts off the valve when full. When it fails, your toilet runs continuously.',
    related: 'See also: fill valve, siphon',
  },
  {
    term: 'Circuit breaker',
    also: 'trip switch, MCB',
    definition: 'An automatic safety switch in your fusebox that cuts power to a circuit if it detects an overload or fault. Unlike a fuse, it resets — just switch it back on. If it keeps tripping, something on that circuit is drawing too much power.',
  },
  {
    term: 'Consumer unit',
    also: 'fusebox, fuse board',
    definition: 'The box (usually in a hallway or under the stairs) containing all the circuit breakers and RCDs that protect your home\'s electrical circuits. Each switch controls a different circuit — lights, sockets, cooker, etc.',
  },
  {
    term: 'Earth wire',
    definition: 'The green and yellow striped wire in UK electrical systems. It provides a safe path for fault current to travel to the ground rather than through a person. Never remove or ignore an earth wire.',
  },
  {
    term: 'Fill valve',
    also: 'float valve, inlet valve',
    definition: 'The component inside a toilet cistern that controls water refilling after a flush. A running toilet is usually caused by a faulty fill valve or a failing flap valve.',
  },
  {
    term: 'Flap valve',
    also: 'flush valve, cistern flap',
    definition: 'The rubber seal inside your toilet cistern that holds water until you flush. When it wears out, water trickles constantly from the cistern into the pan — causing that running toilet sound.',
  },
  {
    term: 'Isolation valve',
    also: 'service valve, quarter-turn valve',
    definition: 'A small valve on the pipe supplying a single tap, toilet, or appliance. Turn it 90° with a flat-head screwdriver to isolate just that fitting without cutting off water to the whole house. The slot runs along the pipe when open, across the pipe when closed.',
    related: 'See also: stopcock',
  },
  {
    term: 'Joist',
    definition: 'A horizontal timber beam that forms the structural skeleton of floors and ceilings. Joists run parallel to each other, typically 400–600mm apart. When hanging heavy items from a ceiling or screwing into a floor, always fix into joists — not just plasterboard.',
  },
  {
    term: 'Jubilee clip',
    also: 'hose clamp',
    definition: 'A circular metal clamp with a screw-tightened band used to secure a hose or pipe to a fitting. Tighten with a screwdriver. Common in plumbing, washing machine connections, and car maintenance.',
  },
  {
    term: 'Live wire',
    definition: 'In UK wiring, the brown wire (older wiring uses red). It carries current from the supply to an appliance. Always isolate the circuit at the fusebox before touching any wiring — the live wire can be fatal.',
  },
  {
    term: 'Neutral wire',
    definition: 'In UK wiring, the blue wire (older wiring uses black). It completes the circuit back to the supply. Despite the name, it should be treated as potentially live when working on wiring.',
  },
  {
    term: 'Noggin',
    also: 'nogging, dwang (Scotland)',
    definition: 'A short horizontal piece of timber fitted between studs in a stud partition wall. Noggins provide fixing points for heavy items and prevent the studs from twisting. If you\'re hanging something heavy on a stud wall, find a noggin.',
  },
  {
    term: 'PTFE tape',
    also: 'plumber\'s tape, thread seal tape',
    definition: 'White thread-seal tape wrapped around pipe threads before fitting to create a watertight joint. Wrap 3–5 times clockwise (when looking at the threaded end). Costs £1 and prevents most DIY plumbing leaks.',
  },
  {
    term: 'Pressure relief valve',
    also: 'PRV, safety valve',
    definition: 'A safety device on a boiler or hot water cylinder that automatically opens to release excess pressure, preventing dangerous build-up. If yours is dripping constantly, call an engineer — do not plug it.',
  },
  {
    term: 'RCD',
    also: 'Residual Current Device, RCCB',
    definition: 'A fast-acting safety switch that cuts power almost instantly (within 30 milliseconds) if it detects current leaking to earth — such as through a person. RCDs save lives. Most modern fuseboxes have them; check yours.',
  },
  {
    term: 'Rawl plug',
    also: 'wall plug, anchor plug',
    definition: 'A plastic or nylon anchor inserted into a drilled hole in masonry, brick, or plasterboard. The screw expands it as it goes in, gripping the surrounding material. Always match the rawl plug size to the screw and drill bit.',
  },
  {
    term: 'Skirting board',
    also: 'baseboard',
    definition: 'The trim board running along the bottom of interior walls where they meet the floor. It covers the gap between floorboards and wall, protects the wall base from kicks and furniture, and finishes the room. Typically 70–150mm tall.',
  },
  {
    term: 'Spirit level',
    also: 'bubble level',
    definition: 'A measuring tool containing one or more liquid-filled tubes with a bubble inside. When the bubble sits between two lines, the surface is level. Essential for shelves, curtain poles, picture rails, and tiling.',
  },
  {
    term: 'Stopcock',
    also: 'main stop valve, mains shut-off',
    definition: 'The main water shut-off valve for your home. Turning it clockwise (or 90° for a quarter-turn type) cuts all cold water supply to the property. Usually located under the kitchen sink, or where the supply pipe enters the building. Know where yours is before a pipe bursts.',
    related: 'See also: isolation valve',
  },
  {
    term: 'Stud wall',
    also: 'partition wall, timber frame wall',
    definition: 'A non-load-bearing interior wall built from vertical timber uprights (studs) at regular intervals, with plasterboard fixed to both sides. Common in modern houses. You can identify one by tapping — studs sound solid; gaps sound hollow.',
  },
  {
    term: 'Trap',
    also: 'P-trap, U-bend',
    definition: 'The U-shaped curved section of pipe beneath sinks, showers, and toilets that holds a small amount of water. This water seal prevents drain gases and smells from rising into the room. If a drain smells, the trap may have dried out — run water to refill it.',
  },
  {
    term: 'Wall plate',
    definition: 'A horizontal timber beam fixed to the top of a wall that supports the roof rafters. Also used to describe the plastic faceplate on a plug socket or light switch.',
  },
]

export default function GlossaryPage() {
  const letters = Array.from(new Set(TERMS.map(t => t.term[0]))).sort()

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <a href="/" className="text-sm text-gray-400 hover:text-orange-400 mb-4 inline-block">← Back to home</a>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">DIY Glossary</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">Plain English. No jargon. Just what the words actually mean.</p>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">

        {/* Letter index */}
        <div className="flex gap-2 flex-wrap mb-8">
          {letters.map(letter => (
            <a
              key={letter}
              href={`#${letter}`}
              className="w-8 h-8 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center text-sm font-bold hover:bg-orange-500 hover:text-white transition-colors"
            >
              {letter}
            </a>
          ))}
        </div>

        <div className="space-y-2">
          {letters.map(letter => (
            <div key={letter}>
              <h2 id={letter} className="text-2xl font-black text-orange-500 py-3 border-b border-orange-100 mb-3 scroll-mt-4">
                {letter}
              </h2>
              <div className="space-y-4 mb-6">
                {TERMS.filter(t => t.term[0] === letter).map(term => (
                  <div key={term.term} className="border border-gray-200 rounded-xl p-5">
                    <div className="flex items-baseline gap-2 flex-wrap mb-2">
                      <h3 className="font-bold text-gray-900 text-lg">{term.term}</h3>
                      {term.also && (
                        <span className="text-sm text-gray-400 italic">also: {term.also}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{term.definition}</p>
                    {term.related && (
                      <p className="text-xs text-gray-400 mt-2 italic">{term.related}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
          <p className="font-semibold text-orange-900 mb-1">Missing a term?</p>
          <p className="text-sm text-orange-700">We add to this glossary regularly. In the meantime, our guides explain every term as you go.</p>
          <a href="/guides" className="inline-block mt-3 bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">Browse guides</a>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
