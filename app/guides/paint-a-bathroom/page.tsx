import type { Metadata } from 'next'
import StepProgress from '@/components/StepProgress'
import GuideActions from '@/components/GuideActions'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import ToolsWarning from '@/components/ToolsWarning'
import ToolsSection from '@/components/ToolsSection'
import StarterKit from '@/components/StarterKit'
import { GUIDE_TOOLS } from '@/lib/tools'
import RecentViewTracker from '@/components/RecentViewTracker'
import SocialShare from '@/components/SocialShare'
import GuideExtras from '@/components/GuideExtras'
import PrintButton from '@/components/PrintButton'
import DifficultyComparison from '@/components/DifficultyComparison'
import { GUIDE_META } from '@/lib/guide-meta'
export const metadata: Metadata = {
  title: 'How to Paint a Bathroom Properly (Moisture-Safe) | FixItFirst',
  description: 'Paint a bathroom correctly using moisture-resistant paint and the right prep. Step-by-step guide to avoid peeling and mould. Save £200–400 vs a decorator.',
  openGraph: {
    title: 'How to Paint a Bathroom Properly (Moisture-Safe) | FixItFirst',
    description: 'Paint a bathroom correctly using moisture-resistant paint and the right prep. Step-by-step guide to avoid peeling and mould. Save £200–400 vs a decorator.',
    url: 'https://fixit-first.co.uk/guides/paint-a-bathroom',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  { title: 'Ventilate and prepare the room', description: 'Open the window fully and run the extractor fan if you have one. Remove everything you can from the room — towels, toiletries, bath mats. Cover the floor, toilet, and bath with old dust sheets or decorator plastic. Wipe all surfaces down with a damp cloth to remove dust and any soap residue. Bathroom paint sticks poorly to greasy or dusty surfaces — this step is the foundation of the whole job.' },
  { title: 'Check for mould and treat any affected areas', description: 'Inspect corners, the ceiling above the shower, and around the window frame. Black spotty patches are mould, not just dirt. Do not paint over mould — it will bleed through within weeks. Treat affected areas with a dedicated mould spray (available at any hardware store), leave for the time specified on the bottle, then wipe clean and allow to dry fully. If you find large areas of mould returning despite ventilation, the cause is likely structural moisture — report to a landlord or investigate further before painting.' },
  { title: 'Fill cracks and sand any rough areas', description: 'Use a fine surface filler to fill any hairline cracks or holes. Bathroom fillers are slightly more flexible than standard wall fillers, which matters in a room where temperature and humidity cycle daily. Once dry, sand smooth with 120-grit sandpaper. Sand any areas of existing flaking or bubbling paint back to a firm edge — this prevents the new coat lifting the old one. Wipe away all dust with a barely-damp cloth and let the wall dry completely.' },
  { title: 'Mask edges, fittings, and tile lines', description: 'Apply masking tape along the top edge of the bath, shower tray, and anywhere paint meets tiles or woodwork. Press the tape edge down firmly — loose tape lets paint bleed under it. Run tape along the ceiling line if you are painting just the walls. The extra 10 minutes this takes eliminates the risk of paint on tiles, chrome fittings, or sealed edges that are difficult to clean off without damage.' },
  { title: 'Cut in with a brush along all edges', description: 'Using a 2-inch angled brush, paint a strip of 50–75 mm around every edge — ceiling line, corners, around fittings, and along the masking tape. This is called cutting in, and it creates the clean lines that rollers cannot reach. Work in sections no more than 1 metre wide so the cut-in paint stays wet when you roll the wall — wet paint edges blend together; dry edges leave a visible stripe.' },
  { title: 'Roll the walls and apply a second coat after drying', description: 'Load your roller evenly (not dripping) and apply the first coat in a W or M pattern, spreading it evenly without pressing hard. Bathroom paint is thicker than standard emulsion to resist moisture — you need fewer strokes, not more. Let the first coat dry completely (minimum 2–4 hours in a ventilated bathroom; 4–6 hours in poor ventilation) before applying the second coat. Two thin coats give a far better finish than one thick one, and proper drying between coats prevents peeling.' },
]

export default function PaintABathroom() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Paint a bathroom properly (moisture-safe)</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £200–400 in 1 day — no decorator needed</p>
        <p className="text-gray-600 mb-6">Bathroom painting fails — peeling, yellowing, mould-through — when the wrong paint or wrong prep is used. The technique is simple once you know what makes bathrooms different.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['paint-a-bathroom'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Paint a bathroom properly" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="paint-a-bathroom" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">The most important rule in bathroom painting: always use paint labelled as <strong>bathroom paint</strong>, <strong>kitchen and bathroom paint</strong>, or <strong>moisture-resistant paint</strong>. Standard emulsion absorbs moisture and will peel within months in a bathroom. Bathroom-specific paint contains anti-condensation and anti-mould compounds that standard paint does not.</p>
          <p className="text-sm text-gray-700 mb-2">Bathroom paint costs a little more per tin but lasts years longer. Factor in a primer if painting over bare plaster, or if the existing paint is heavily stained.</p>
          <p className="text-sm text-gray-700">Do not paint when the room is cold or damp. Paint in a heated, ventilated bathroom and the finish will be far better.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <ToolsSection
          tools={[
            { icon: 'buy', name: 'Bathroom paint (moisture-resistant)', hint: 'do not use standard emulsion in a bathroom', hintOrange: true, toolId: 'paintbrush' },
            { icon: 'check', name: 'Angled paintbrush (2")', hint: 'for cutting in edges and corners', toolId: 'paintbrush' },
            { icon: 'check', name: 'Paint roller and tray', hint: 'mini roller (100mm) works well in tight bathrooms', toolId: 'roller-tray' },
            { icon: 'check', name: 'Masking tape', hint: 'press the edge down firmly before painting', toolId: 'masking-tape' },
            { icon: 'check', name: 'Sandpaper (120 grit)', hint: 'to sand rough or flaking areas smooth before painting', toolId: 'sandpaper' },
            { icon: 'check', name: 'Filling knife', hint: 'to apply filler to cracks before painting', toolId: 'filling-knife' },
            { icon: 'buy', name: 'Mould-resistant surface filler', hint: 'bathroom-grade filler is slightly flexible — important in humid rooms', hintOrange: true, toolId: 'filling-knife' },
          ]}
          slug="paint-a-bathroom"
          guideName="Paint a bathroom properly"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['paint-a-bathroom']} />
        <StepProgress steps={steps} slug="paint-a-bathroom" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Using standard emulsion instead of bathroom paint. It will look fine for 3–6 months, then peel. There is no shortcut here — the moisture resistance is in the formula.</p>
          <p className="text-sm text-yellow-900 mb-2">Painting over mould without treating it first. Mould spores survive under paint and will bleed through within weeks. Treat it, then paint.</p>
          <p className="text-sm text-yellow-900 mb-2">Not letting the first coat dry properly before applying the second. In a humid bathroom, drying takes longer than the tin suggests. If the paint feels cool or tacky, it is not dry — wait longer.</p>
          <p className="text-sm text-yellow-900">Applying paint too thick in one coat. Thick paint sags, takes longer to dry, and traps moisture underneath. Two thin coats always beats one thick one.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and investigate further if...</h2>
          <p className="text-sm text-red-900 mb-1">Mould keeps returning within weeks of repainting — this indicates a ventilation or structural moisture problem, not a painting problem</p>
          <p className="text-sm text-red-900 mb-1">The existing paint is bubbling from behind — this means moisture is coming through the wall, not just condensation</p>
          <p className="text-sm text-red-900 mb-1">You find damp plaster that crumbles or feels soft — damp plaster needs to dry out fully before any painting</p>
          <p className="text-sm text-red-900">There are brown staining patches that look like watermarks coming through — investigate the source before redecorating</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Bathroom paint (2.5 litre tin)</span><span className="font-medium">£20–40</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Masking tape, filler, sandpaper</span><span className="font-medium">£8–15</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">You have tools already</span><span className="font-medium">£0</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Decorator would charge</span><span className="font-medium text-red-600">£200–400</span></div>
          </div>
        </div>

        <StarterKit />
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand why bathrooms need specialist paint, how to treat mould before redecorating, and how to cut in cleanly around tiles and fittings. These skills transfer to painting a kitchen — another high-humidity environment with the same requirements. The prep and cutting-in technique applies to every room you will ever paint.</p>
        </div>
        <p className="text-sm text-gray-500 text-center mb-3">Most people would pay a tradesperson for this.</p>
        {GUIDE_META['paint-a-bathroom'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['paint-a-bathroom'].renterWarning}</p>
          </div>
        )}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Up next</h2>
          <div className="space-y-2">
            <a href="/guides/reseal-a-shower-or-bath" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-xl shrink-0">🚿</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">Reseal a shower or bath properly</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Save £80–150 today</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">1–2 hrs</span>
            </a>
            <a href="/guides/tile-a-bathroom-floor" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-xl shrink-0">🧱</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">Tile a bathroom floor</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Save £300–600 today</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">1–2 days</span>
            </a>
            <a href="/guides/fit-a-towel-rail" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-xl shrink-0">🔧</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">Fit a towel rail (heated or standard)</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Save £80–150 today</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">1 hr</span>
            </a>
          </div>
        </div>
        <GuideActions slug="paint-a-bathroom">
          <GuideExtras slug="paint-a-bathroom" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="paint-a-bathroom" title="Paint a bathroom properly (moisture-safe)" href="/guides/paint-a-bathroom" />
      <MobileNav />
    </main>
  )
}
