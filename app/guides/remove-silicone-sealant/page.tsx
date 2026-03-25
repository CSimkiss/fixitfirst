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
import RenovationContinue from '@/components/RenovationContinue'

export const metadata: Metadata = {
  title: 'How to Remove Old Silicone Sealant | FixItFirst',
  description: 'Remove old or mouldy silicone sealant cleanly from a bath, basin, or shower in 15–20 minutes. The right technique matters — pulling it wrong damages tiles.',
  openGraph: {
    title: 'How to Remove Old Silicone Sealant | FixItFirst',
    description: 'Remove old or mouldy silicone sealant cleanly from a bath, basin, or shower in 15–20 minutes. The right technique matters — pulling it wrong damages tiles.',
    url: 'https://fixit-first.co.uk/guides/remove-silicone-sealant',
    siteName: 'FixItFirst',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FixItFirst' }],
  },
}

const steps = [
  {
    title: 'Score along both edges with a knife',
    description: 'Hold a utility knife at a shallow angle and run it along the joint where the silicone meets the tile and where it meets the bath or basin surface. You are cutting the bond — not slicing through the sealant from above. Do both edges in one pass each. Why: silicone grips the two surfaces it is bonded to. If you try to pull it without cutting the bond first, it tears into strips, leaves residue on both surfaces, and can pull up tile grout or damage the bath enamel. Score first and the whole strip comes away cleanly.',
  },
  {
    title: 'Pull away the bulk of the old sealant',
    description: 'Once both edges are scored, grip the end of the sealant strip and pull firmly but steadily along the joint. It should peel away in one long piece. If it tears, score again along the tear line and continue. Work from one end of the joint to the other in as few pieces as possible. Why: removing it in long strips is faster and leaves less residue than picking at small pieces. If it is not coming away cleanly after scoring, apply silicone remover chemical (available from DIY stores) and wait 30 minutes — this softens the bond.',
  },
  {
    title: 'Remove residue with a filling knife and solvent',
    description: 'After the bulk is removed, there will be a thin layer of residue on both surfaces. Apply a small amount of silicone remover or white spirit to a cloth and work it into the residue. Then use a plastic filling knife or old credit card to scrape the softened residue away. Avoid using a metal scraper on bath enamel or acrylic — it will scratch. Why: residue left behind stops new sealant adhering. New silicone applied over old residue will lift within weeks. The surfaces need to be bare and clean for a lasting seal.',
  },
  {
    title: 'Clean and dry the surface completely',
    description: 'Wipe both surfaces with a clean damp cloth to remove solvent and loosened residue, then wipe dry. The joint must be completely dry before any new sealant is applied — even slight moisture prevents silicone curing properly against the surface. Leave for at least 30 minutes, or longer in a cold or poorly ventilated bathroom. Why: silicone is moisture-curing in the air, but it will not cure against a wet surface — it slides off or bonds weakly. This is why bathroom sealant often fails fastest in poorly ventilated bathrooms where surfaces stay damp.',
  },
]

export default function RemoveSiliconeSealant() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Remove old silicone sealant</h1>
        <p className="text-4xl font-black text-green-600 mb-1">15 minutes — essential before any resealing or renovation</p>

        <p className="text-gray-600 mb-6">Old silicone sealant must come off completely before new work starts. This is the right way to do it — no scratched baths, no tile damage, no residue.</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['remove-silicone-sealant'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Remove old silicone sealant" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="remove-silicone-sealant" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide covers removing existing silicone sealant from a bath, basin, shower tray, or tiled joint. It is the right first step before a bathroom strip-out or before applying fresh sealant.</p>
          <p className="text-sm text-gray-700">If the sealant is heavily contaminated with black mould, the same technique applies — but wear rubber gloves and work in a ventilated space.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>

        <ToolsSection
          tools={[
            { icon: 'check', name: 'Utility knife / Stanley knife', hint: 'to score both edges before pulling', toolId: 'utility-knife' },
            { icon: 'check', name: 'Filling knife or old credit card', hint: 'plastic edge for scraping residue without scratching', toolId: 'filling-knife' },
            { icon: 'check', name: 'Cloths', hint: 'for applying solvent and cleaning up', toolId: 'sponge-cloths' },
            { icon: 'buy', name: 'Silicone remover spray', hint: 'softens stubborn residue — worth having for old or thick sealant', hintOrange: true },
          ]}
          slug="remove-silicone-sealant"
          guideName="Remove old silicone sealant"
        />
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['remove-silicone-sealant']} />
        <StepProgress steps={steps} slug="remove-silicone-sealant" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2"><strong>Pulling without scoring first.</strong> This tears the sealant into small pieces, leaves thick residue on both surfaces, and can chip tile grout or nick enamel. Always score both edges before pulling.</p>
          <p className="text-sm text-yellow-900 mb-2"><strong>Using a metal scraper on acrylic or enamel baths.</strong> A metal filling knife will leave fine scratches in acrylic bath surfaces. Use a plastic card or plastic scraper for residue removal.</p>
          <p className="text-sm text-yellow-900"><strong>Not checking surfaces are dry before resealing.</strong> Silicone will not adhere to a damp surface. After cleaning, wait at least 30 minutes in a warm bathroom before applying new sealant.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Worth knowing</h2>
          <p className="text-sm text-red-900 mb-1">If you find cracked tiles or loose grout once the sealant is off, fix those before resealing — new sealant over damaged grout will fail at the same point</p>
          <p className="text-sm text-red-900">Persistent black mould on the wall behind the old sealant (not on the sealant surface) is a sign of a damp or ventilation problem — removing the sealant will not fix that</p>
        </div>

        <StarterKit />

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900 mb-3">You know how to remove silicone sealant cleanly — scoring, pulling in strips, removing residue, and preparing a surface that new sealant will actually bond to. This is a skill you will use on every bathroom project.</p>
          <p className="text-sm font-semibold text-orange-800 mb-2">This unlocks:</p>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/finish-bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Apply fresh sealant →</a>
            <a href="/guides/strip-out-bathroom" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Strip out a bathroom →</a>
            <a href="/projects/bathroom-renovation" className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-200 transition-colors">Bathroom renovation →</a>
          </div>
        </div>

        {GUIDE_META['remove-silicone-sealant'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['remove-silicone-sealant'].renterWarning}</p>
          </div>
        )}
        <RenovationContinue
          currentSlug="remove-silicone-sealant"
          relatedSlugs={['strip-out-bathroom', 'prep-bathroom-plumbing']}
        />
        <GuideActions slug="remove-silicone-sealant">
          <GuideExtras slug="remove-silicone-sealant" />
        </GuideActions>
      </div>
      <RecentViewTracker slug="remove-silicone-sealant" title="Remove old silicone sealant" href="/guides/remove-silicone-sealant" />
      <MobileNav />
    </main>
  )
}
