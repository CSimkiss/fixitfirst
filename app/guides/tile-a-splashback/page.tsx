import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'How to Tile a Splashback | FixItFirst',
  description: 'Tile a kitchen or bathroom splashback yourself in half a day. Step-by-step beginner guide. Save £150–300 vs a tiler.',
}

const steps = [
  { title: 'Plan your layout', description: 'Hold tiles against the wall dry to work out your layout. Start from the centre of the area and work outward so any cut tiles are equal on both sides. Mark a level horizontal line as your starting point.' },
  { title: 'Prepare the surface', description: 'The wall must be clean, dry, and solid. Remove old sealant, grease, and any loose paint. Sand glossy surfaces lightly so the adhesive can grip.' },
  { title: 'Apply tile adhesive', description: 'Spread adhesive onto the wall with the notched spreader, working in small sections (about 30x30cm at a time). Press ridges into the adhesive with the notched edge — this is what grips the tile.' },
  { title: 'Set the tiles', description: 'Press each tile firmly onto the adhesive with a slight twisting motion. Place spacers at each corner. Use your spirit level regularly to check rows are straight.' },
  { title: 'Leave to set', description: 'Allow the adhesive to cure for at least 24 hours before grouting. Do not disturb the tiles.' },
  { title: 'Grout the joints', description: 'Remove the spacers. Apply grout over the tiles with the spreader, pressing it firmly into the joints. Work diagonally across the tiles. Clean excess grout with a damp sponge before it dries. Buff off the haze with a dry cloth after 30 minutes.' },
]

export default function TileASplashback() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tile a splashback</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £150–300 today</p>
        <p className="text-gray-500 mb-8">Half a day · Intermediate · Saves £150–300 vs a tiler</p>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">A splashback is an excellent first tiling project — the area is small, most tiles do not need cutting, and any mistakes are not structural.</p>
          <p className="text-sm text-gray-700">Turn off the power to any sockets in the splashback area at the consumer unit before you start. Water and adhesive near live sockets is dangerous.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Tape measure and pencil</span> — for marking out</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Spirit level</span> — to keep rows straight</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Notched adhesive spreader</span> — usually included with tile adhesive</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Grout spreader or old credit card</span> — to apply grout</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Sponge and bucket</span> — for cleaning off excess grout</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Tiles</span> — <span className="text-orange-600">buy: allow 10% extra for cuts and breakages</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Tile adhesive</span> — <span className="text-orange-600">buy: £8–15 — use a waterproof type for kitchen and bathroom</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Grout</span> — <span className="text-orange-600">buy: £5–10 — choose a colour to complement your tiles</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Tile spacers</span> — <span className="text-orange-600">buy: £2–3 — 2mm or 3mm for standard joints</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Tile cutter or score-and-snap tool</span> — <span className="text-orange-600">buy: £10–20 if you need to cut tiles</span></span>
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
          <p className="text-sm text-yellow-900 mb-2">Not turning off the power to sockets in the splash area — this is a safety essential.</p>
          <p className="text-sm text-yellow-900 mb-2">Spreading adhesive too far ahead — it skins over and loses grip. Work in small sections.</p>
          <p className="text-sm text-yellow-900">Grouting before the adhesive has fully cured — tiles can shift, ruining the joint lines.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a tiler if...</h2>
          <p className="text-sm text-red-900 mb-1">Tiles are going behind an electric hob or cooker — the installation area needs to be confirmed safe first</p>
          <p className="text-sm text-red-900 mb-1">The wall is damp or the plaster is crumbling — fix the underlying problem before tiling</p>
          <p className="text-sm text-red-900">You need to cut around a socket or switch — consider having an electrician remove the socket faceplate before you tile</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Tiles and materials (small splashback)</span><span className="font-medium">£30–60</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Tiles and materials (full run)</span><span className="font-medium">£60–120</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Tiler would charge</span><span className="font-medium text-red-600">£150–300 (plus tiles)</span></div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to plan a tile layout, apply adhesive correctly, and grout neatly. These skills transfer to tiling a bathroom floor, wall, or shower enclosure.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
