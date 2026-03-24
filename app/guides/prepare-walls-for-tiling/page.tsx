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
  title: 'How to Prepare Walls for Tiling | FixItFirst',
  description: 'Learn how to properly prepare bathroom walls before tiling — remove old adhesive, fill cracks, sand smooth, and prime. Skipping this step is why tiles fail.',
  openGraph: {
    title: 'How to Prepare Walls for Tiling | FixItFirst',
    description: 'Learn how to properly prepare bathroom walls before tiling — remove old adhesive, fill cracks, sand smooth, and prime. Skipping this step is why tiles fail.',
    url: 'https://fixit-first.co.uk/guides/prepare-walls-for-tiling',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Remove old adhesive and debris',
    description: 'Use a scraper or filling knife held at a low angle to work off any lumps of old tile adhesive, render blobs, or wallpaper paste. Work across the whole surface — not just where the old tiles were. For stubborn spots, score with a Stanley knife first to break the bond. Why: adhesive tiles onto lumps and you get lippage — where tile edges sit at different heights. Even a 2mm lump behind a tile will show as a visible ridge at the grout line. Start with a flat wall and the rest of the job becomes straightforward.',
  },
  {
    title: 'Check wall condition',
    description: 'Press firmly on the wall surface in several places. Any movement, hollow sound, or crumbling means the plaster or render is not stable enough to tile onto. Mark any suspect areas with a pencil. Also check for damp — look for tide marks, dark patches, or a chalky white efflorescence (salt deposits) on the surface. Probe any soft areas with a screwdriver tip. Why: tiling onto an unstable wall does not fix the wall. It hides the problem for 6–18 months, then tiles start popping. If the wall is hollow or crumbling, stop here and get it replastered before continuing.',
  },
  {
    title: 'Fill holes and cracks',
    description: 'Mix filler to a smooth, slightly firm consistency — not runny. Press it firmly into each hole or crack with a filling knife, slightly overfilling so it sits proud of the surface. For deeper holes, apply in layers no thicker than 5mm, letting each layer firm up before adding the next. Score a cross into the base of deep holes so the filler keys in. Why: voids behind tiles trap moisture. In a bathroom, that moisture has nowhere to go — it eventually works behind the tile adhesive and causes tiles to de-bond. Solid wall, solid tile.',
  },
  {
    title: 'Sand smooth',
    description: 'Once filler is fully hard (wait at least the time stated on the packaging — usually 1–2 hours for light filler), sand each filled area flush with the surrounding wall. Use 80-grit sandpaper to knock down the proud filler, then 120-grit to blend the edges. Wipe away all dust with a damp cloth and leave to dry. Why: even a tiny ridge where filler meets wall will show as a shadow behind a tile — especially with large format tiles or under raking light. A flat surface is invisible once tiled; a lumpy one is permanent.',
  },
  {
    title: 'Check level and flatness',
    description: 'Hold a long spirit level or straight edge against the wall horizontally and vertically across the full tiling area. Any gap between the level and the wall greater than 3mm over a 1.8m span needs addressing — either with additional skim coat or by building up with adhesive during tiling (only suitable for small deviations). Also check the wall is plumb — use the spirit level vertically. Mark the worst points with pencil so you know where to pay attention when setting out tile lines. Why: tiles read out-of-plumb walls instantly. A wall that deviates 5mm over its height makes every horizontal grout line slope visibly. Sort it now rather than fighting it tile by tile.',
  },
  {
    title: 'Apply primer or diluted PVA',
    description: 'Apply a coat of tile primer or diluted PVA (3 parts PVA to 1 part water) to the entire wall surface using a wide paintbrush or short-pile roller. Work it into all corners and edges. Allow to dry until the surface feels tacky but not wet — usually 30–60 minutes depending on temperature. Do not tile onto a fully dry PVA coat; it loses its grip once set hard. Why: bare plaster is absorbent and will suck moisture out of your tile adhesive before it has time to cure properly. Priming seals the surface, slows absorption, and gives the adhesive a consistent surface to grip. This single step dramatically reduces the chance of adhesive failure.',
  },
]

export default function PrepareWallsForTiling() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Prepare walls for tiling</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £150–400 — this is the step most people skip</p>

        <p className="text-gray-600 mb-6">Most tiling failures come back to poor prep. Tiles crack, pop, or drift out of line — not because of bad tiling, but because the wall behind them was not ready. This guide fixes that before it becomes a problem.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['prepare-walls-for-tiling'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Prepare walls for tiling" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="prepare-walls-for-tiling" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Walls must be clean, stable, and structurally sound before tiling. This guide covers surface prep only — it does <strong>not</strong> cover replastering, fixing structural damage, or treating active damp.</p>
          <p className="text-sm text-gray-700 mb-2">Bathrooms need moisture-resistant preparation. Use tile primer or moisture-resistant PVA — not standard decorating PVA.</p>
          <p className="text-sm text-gray-700">If you find crumbling plaster, significant damp, or walls that flex when pressed, stop and fix those issues first. Tiling over them will not hold.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Filling knife / scraper', hint: 'for removing old adhesive and applying filler', toolId: 'filling-knife' },
            { icon: 'check', name: 'Sandpaper (mixed grit)', hint: '80-grit and 120-grit for filling and blending', toolId: 'sandpaper' },
            { icon: 'check', name: 'Spirit level', hint: 'check flatness and plumb before setting out tiles', toolId: 'spirit-level' },
            { icon: 'buy', name: 'Wall filler', hint: 'use a ready-mixed or powder filler rated for bathrooms', hintOrange: true },
            { icon: 'buy', name: 'Tile primer or PVA', hint: 'moisture-resistant — not standard decorating PVA', hintOrange: true },
          ]}
          slug="prepare-walls-for-tiling"
          guideName="Prepare walls for tiling"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['prepare-walls-for-tiling']} />
        <StepProgress steps={steps} slug="prepare-walls-for-tiling" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Skipping prep entirely.</strong> &ldquo;The wall looks fine&rdquo; is not good enough. Old adhesive, paint, or dust all reduce the grip area for new tile adhesive. Run your hand across the wall — if it comes away chalky or gritty, the surface needs priming first.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Tiling onto dusty or powdery surfaces.</strong> Sanding and scraping produces fine dust that settles back onto the wall. Always wipe down with a damp cloth and allow to dry before applying primer. Tile adhesive sticks to the wall, not to a layer of dust sitting on the wall.</p>
          <p className="text-sm text-yellow-900"><strong>Ignoring uneven walls and hoping adhesive will compensate.</strong> Tile adhesive can absorb 2–3mm of variation at most. Beyond that, tiles will rock, crack, or have hollow spots behind them. If the wall deviates more than 3mm, address it at the prep stage — not during tiling.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a professional if...</h2>
          <p className="text-sm text-red-900 mb-1">The plaster crumbles or breaks away when pressed — the wall needs replastering before any tiling work</p>
          <p className="text-sm text-red-900 mb-1">You find active damp — dark spreading patches, moisture beading, or a persistent damp smell — this needs a damp specialist before any surface treatment</p>
          <p className="text-sm text-red-900">The wall surface deviates more than 10mm over 1.8m — this level of unevenness requires a render or skim coat, not extra adhesive</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Materials only (tools owned)</span><span className="font-medium">£10–20</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Materials and basic tools</span><span className="font-medium">£20–40</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Tiler would charge (prep only)</span><span className="font-medium text-red-600">£150–400</span></div>
          </div>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-2">You now understand how to assess a wall surface before tiling — not just look at it, but press it, probe it, and measure it. You can fill and sand to a flat finish, and you know why priming matters before adhesive goes on.</p>
          <p className="text-sm text-orange-900 mb-3">These are the foundation skills that separate a tiling job that lasts 20 years from one that starts popping tiles at year two. The wall you have prepared is now genuinely ready.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/tile-a-splashback" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Tile a wall →</a>
            <a href="/guides/fill-and-sand-a-wall" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Fill and sand a wall →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation Phase 4 →</a>
          </div>
        </div>

        {/* ── Continue your renovation ─────────────────────────────────────── */}
        <div className="bg-gray-950 text-white rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-white mb-4">Continue your renovation</h2>
          <div className="space-y-2 mb-5">
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-base">✅</span>
              <span className="text-green-300 text-sm font-medium">Phase 1: Strip Out — Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-base">✅</span>
              <span className="text-green-300 text-sm font-medium">Phase 2: Plumbing Prep — Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-base">✅</span>
              <span className="text-green-300 text-sm font-medium">Phase 3: Wall Prep — Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-400 text-base">👉</span>
              <span className="text-white text-sm font-medium">Phase 4: Tiling — next up</span>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="/projects/bathroom-renovation"
              className="bg-orange-500 hover:bg-orange-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
            >
              Back to your renovation →
            </a>
            <a
              href="/guides/tile-a-splashback"
              className="border border-white/20 text-gray-300 hover:bg-white/10 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              Start Phase 4 →
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center mb-3">Most people skip this step and wonder why their tiles fail.</p>
        {GUIDE_META['prepare-walls-for-tiling'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['prepare-walls-for-tiling'].renterWarning}</p>
          </div>
        )}
        <GuideActions slug="prepare-walls-for-tiling">
          <GuideExtras slug="prepare-walls-for-tiling" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="prepare-walls-for-tiling" title="Prepare walls for tiling" href="/guides/prepare-walls-for-tiling" />
      <MobileNav />
    </main>
  )
}
