'use client'

import { useState, useEffect } from 'react'
import { getCompletionMap } from '@/lib/completions'
import { GUIDE_BY_SLUG, type Guide } from '@/lib/guides'

// Rough phase sequence — used to derive "next phase" copy without importing the full hub
const RENOVATION_NEXT: Record<string, { phaseLabel: string; nextSlug: string; nextPhaseLabel: string }> = {
  'strip-out-bathroom':        { phaseLabel: 'Phase 1: Strip Out',    nextSlug: 'prep-bathroom-plumbing', nextPhaseLabel: 'Phase 2: Plumbing Prep' },
  'remove-silicone-sealant':   { phaseLabel: 'Phase 1: Strip Out',    nextSlug: 'prep-bathroom-plumbing', nextPhaseLabel: 'Phase 2: Plumbing Prep' },
  'prep-bathroom-plumbing':    { phaseLabel: 'Phase 2: Plumbing Prep',nextSlug: 'prepare-walls-for-tiling', nextPhaseLabel: 'Phase 3: Wall Prep' },
  'cap-pipe':                  { phaseLabel: 'Phase 2: Plumbing Prep',nextSlug: 'prepare-walls-for-tiling', nextPhaseLabel: 'Phase 3: Wall Prep' },
  'use-ptfe-tape':             { phaseLabel: 'Phase 2: Plumbing Prep',nextSlug: 'prepare-walls-for-tiling', nextPhaseLabel: 'Phase 3: Wall Prep' },
  'prepare-walls-for-tiling':  { phaseLabel: 'Phase 3: Wall Prep',    nextSlug: 'tile-a-splashback', nextPhaseLabel: 'Phase 4: Tiling' },
  'check-wall-level':          { phaseLabel: 'Phase 3: Wall Prep',    nextSlug: 'tile-a-splashback', nextPhaseLabel: 'Phase 4: Tiling' },
  'tile-a-splashback':         { phaseLabel: 'Phase 4: Tiling',       nextSlug: 'fit-bathroom-fixtures', nextPhaseLabel: 'Phase 5: Fitting' },
  'drill-into-tiles':          { phaseLabel: 'Phase 4: Tiling',       nextSlug: 'fit-bathroom-fixtures', nextPhaseLabel: 'Phase 5: Fitting' },
  'fit-bathroom-fixtures':     { phaseLabel: 'Phase 5: Fitting',      nextSlug: 'finish-bathroom-renovation', nextPhaseLabel: 'Phase 6: Finishing' },
}

type Props = {
  /** Slug of the current guide — used to derive next-step context for renovation guides */
  currentSlug: string
  /**
   * 2–3 guide slugs to show as "up next" for users not in the renovation.
   * Ignored for active renovation users (hub context takes over).
   */
  relatedSlugs?: string[]
}

export default function RenovationContinue({ currentSlug, relatedSlugs = [] }: Props) {
  const [loaded, setLoaded]     = useState(false)
  const [inRenovation, setInRenovation] = useState(false)
  const [renovationPct, setRenovationPct] = useState(0)

  useEffect(() => {
    try {
      const map   = getCompletionMap()
      const slugs = Object.keys(map)
      const saved = localStorage.getItem('saved-project-bathroom') === 'true'
      setInRenovation(saved || slugs.includes('strip-out-bathroom'))

      // Rough progress % (no journey-start filtering needed here)
      const ALL_PHASE_SLUGS = [
        'strip-out-bathroom','remove-silicone-sealant',
        'prep-bathroom-plumbing','cap-pipe','use-ptfe-tape',
        'prepare-walls-for-tiling','check-wall-level','fill-a-hole-in-a-wall',
        'tile-a-splashback','drill-into-tiles',
        'fit-bathroom-fixtures','replace-a-shower-head','replace-a-toilet-seat',
        'finish-bathroom-renovation','paint-a-room',
      ]
      const done = ALL_PHASE_SLUGS.filter(s => slugs.includes(s)).length
      setRenovationPct(Math.round((done / ALL_PHASE_SLUGS.length) * 100))
    } catch {}
    setLoaded(true)
  }, [])

  if (!loaded) return null

  // ── Active renovation user ────────────────────────────────────────────────
  if (inRenovation) {
    const nextInfo   = RENOVATION_NEXT[currentSlug]
    const nextGuide  = nextInfo ? GUIDE_BY_SLUG[nextInfo.nextSlug] : null

    return (
      <div className="bg-gray-950 text-white rounded-xl p-6 mb-6">
        <h2 className="font-semibold text-white mb-4">Continue your project</h2>
        {renovationPct > 0 && (
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 bg-white/10 rounded-full h-1.5">
              <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: `${renovationPct}%` }} />
            </div>
            <span className="text-orange-400 text-xs font-bold shrink-0">{renovationPct}% done</span>
          </div>
        )}
        <div className="flex gap-3 flex-wrap">
          <a
            href="/projects/bathroom-renovation"
            className="bg-orange-500 hover:bg-orange-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
          >
            Back to your renovation →
          </a>
          {nextGuide && (
            <a
              href={nextGuide.href}
              className="border border-white/20 text-gray-300 hover:bg-white/10 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              {nextInfo!.nextPhaseLabel} →
            </a>
          )}
        </div>
      </div>
    )
  }

  // ── Not in renovation — show related guides or gentle nudge ──────────────
  const relatedGuides = relatedSlugs
    .map(s => GUIDE_BY_SLUG[s])
    .filter((g): g is Guide => !!g)

  if (relatedGuides.length === 0) return null

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
      <h2 className="font-semibold text-gray-900 mb-4">Up next</h2>
      <div className="space-y-2">
        {relatedGuides.map(guide => (
          <a
            key={guide.slug}
            href={guide.href}
            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group"
          >
            <span className="text-xl shrink-0">{guide.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600">{guide.title}</p>
              <p className="text-xs text-green-600 font-medium mt-0.5">{guide.saves}</p>
            </div>
            <span className="text-xs text-gray-400 shrink-0">{guide.time}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
