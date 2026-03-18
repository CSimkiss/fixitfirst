'use client'

import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { useCompletions } from '@/lib/useCompletions'
import { tierLevel } from '@/lib/completions'
import { ALL_GUIDES, GUIDE_TOOLS } from '@/lib/guides'
import { TIERS } from '@/lib/progress'

// ─── Per-category labels for the "Building confidence with" section ──────────
const CATEGORY_LABEL: Record<string, string> = {
  Plumbing:   'everyday plumbing fixes',
  Electrics:  'safe electrical repairs',
  Carpentry:  'carpentry and fitting jobs',
  Decorating: 'decorating and wall repairs',
  Heating:    'heating and boiler care',
  Masonry:    'masonry and patching work',
  Fitting:    'fitting and installation',
  Outdoor:    'outdoor and garden repairs',
  General:    'essential home knowledge',
}

// ─── Loading skeleton ─────────────────────────────────────────────────────────
function Skeleton() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="animate-pulse">
        <div className="bg-gray-950 px-6 py-14 text-center space-y-3">
          <div className="h-3 w-24 bg-gray-700 rounded mx-auto" />
          <div className="h-10 w-44 bg-gray-700 rounded mx-auto" />
          <div className="h-4 w-56 bg-gray-800 rounded mx-auto" />
          <div className="h-3 w-40 bg-gray-800 rounded mx-auto" />
          <div className="h-10 w-36 bg-gray-700 rounded-xl mx-auto mt-4" />
        </div>
        <div className="max-w-2xl mx-auto px-6 py-10 space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-28 bg-gray-100 rounded-2xl" />
          ))}
        </div>
      </div>
      <MobileNav />
    </main>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SkillLevelPage() {
  const { completionMap, loading } = useCompletions()

  if (loading) return <Skeleton />

  // ── Derived state ────────────────────────────────────────────────────────────
  const completedSlugs   = Object.keys(completionMap)
  const completedCount   = completedSlugs.length
  const tier             = tierLevel(completionMap)
  const tierIdx          = TIERS.indexOf(tier)
  const levelNumber      = tierIdx + 1
  const nextTier         = TIERS[tierIdx + 1] ?? null
  const fixesLeft        = nextTier ? nextTier.min - completedCount : 0
  const isNearNextTier   = nextTier !== null && fixesLeft <= 2

  const completedGuides  = ALL_GUIDES.filter(g =>  completionMap[g.slug])
  const incompleteGuides = ALL_GUIDES.filter(g => !completionMap[g.slug])
    .sort((a, b) =>
      a.difficulty - b.difficulty ||
      a.timeMinutes - b.timeMinutes ||
      (GUIDE_TOOLS[a.slug]?.length ?? 0) - (GUIDE_TOOLS[b.slug]?.length ?? 0)
    )

  // Target difficulty: rises with experience (mirrors recommendation engine)
  const targetDiff = Math.min(5, 1 + Math.floor(completedCount / 3))

  // ── Capability A: "You can now do" ────────────────────────────────────────
  // Completed guides + accessible incomplete (at or below target difficulty)
  const canDoNow = [
    ...completedGuides,
    ...incompleteGuides.filter(g => g.difficulty <= targetDiff),
  ]
    .filter((g, i, arr) => arr.findIndex(x => x.slug === g.slug) === i)
    .slice(0, 5)

  // ── Capability B: "Building confidence with" ─────────────────────────────
  // Derived from categories of completed guides; fallback for new users
  const completedCats    = [...new Set(completedGuides.map(g => g.category))]
  const confidenceLines  = completedCats.length > 0
    ? completedCats.slice(0, 3).map(c => CATEGORY_LABEL[c] ?? c.toLowerCase())
    : [
        'tackling simple repairs at home',
        'saving money by doing it yourself',
        'building your DIY independence',
      ]

  // ── Capability C: "This is preparing you for" ────────────────────────────
  // Incomplete guides at the NEXT difficulty band — the horizon ahead
  const nextDiff     = Math.min(5, targetDiff + 1)
  const preparingFor = incompleteGuides
    .filter(g => g.difficulty >= nextDiff)
    .slice(0, 4)

  // ── Section 3: "What to do next" ─────────────────────────────────────────
  // 3 easiest incomplete guides: difficulty → time → tools required
  const nextFixes = incompleteGuides.slice(0, 3)

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-2">
          Level {levelNumber} of {TIERS.length}
        </p>
        <div className="inline-flex items-center gap-3 mb-2">
          <span className="text-5xl">{tier.emoji}</span>
          <h1 className="text-4xl md:text-5xl font-bold">{tier.name}</h1>
        </div>
        <p className="text-gray-300 text-lg mb-1">{tier.description}</p>
        <p className="text-gray-400 text-sm">
          {completedCount} of {ALL_GUIDES.length} guides completed
          {nextTier && ` · ${fixesLeft} more fix${fixesLeft !== 1 ? 'es' : ''} to reach ${nextTier.name}`}
          {!nextTier && ' · All guides complete!'}
        </p>

        {isNearNextTier && (
          <p className="mt-2 text-sm font-medium text-orange-300">
            You&apos;re close to {nextTier!.name} — finish these next
          </p>
        )}

        <div className="mt-5">
          <a
            href="/guides?recommended=true"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            Start next fix →
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10 space-y-10">

        {/* ── "What this level means" capability section ────────────────── */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-5">What this level means</h2>
          <div className="space-y-4">

            {/* A: You can now do */}
            <div className="rounded-2xl border border-gray-200 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-green-600 mb-3">
                ✓ You can now do
              </p>
              <ul className="space-y-2.5">
                {canDoNow.map(g => (
                  <li key={g.slug}>
                    <a
                      href={g.href}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-500 transition-colors group"
                    >
                      <span className="text-gray-300 group-hover:text-orange-400 shrink-0">→</span>
                      <span className="flex-1 leading-snug">{g.title}</span>
                      {completionMap[g.slug] && (
                        <span className="text-xs text-green-600 font-medium shrink-0">Done ✓</span>
                      )}
                    </a>
                  </li>
                ))}
                {canDoNow.length === 0 && (
                  <li className="text-sm text-gray-400">
                    Complete your first guide to see what you can do
                  </li>
                )}
              </ul>
            </div>

            {/* B: Building confidence with */}
            <div className="rounded-2xl border border-gray-200 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-3">
                Building confidence with
              </p>
              <ul className="space-y-2">
                {confidenceLines.map((line, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            {/* C: This is preparing you for */}
            {preparingFor.length > 0 && (
              <div className="rounded-2xl border border-gray-200 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-500 mb-3">
                  This is preparing you for
                </p>
                <ul className="space-y-2.5">
                  {preparingFor.map(g => (
                    <li key={g.slug}>
                      <a
                        href={g.href}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors group"
                      >
                        <span className="text-gray-300 group-hover:text-orange-400 shrink-0">→</span>
                        <span className="flex-1 leading-snug">{g.title}</span>
                        <span className="text-xs text-gray-400 shrink-0">{g.time}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </section>

        {/* ── What to do next ───────────────────────────────────────────── */}
        {nextFixes.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">What to do next</h2>
            <div className="space-y-3">
              {nextFixes.map(guide => (
                <a
                  key={guide.slug}
                  href={guide.href}
                  className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-300 hover:shadow-sm transition-all group"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-orange-500 transition-colors leading-snug">
                      {guide.title}
                    </p>
                    <div className="flex items-center gap-3 mt-1 flex-wrap">
                      <span className="text-xs text-gray-400">⏱ {guide.time}</span>
                      {guide.estimatedSavingsMax > 0 && (
                        <span className="text-xs text-green-700 font-medium">{guide.saves}</span>
                      )}
                    </div>
                  </div>
                  <span className="text-orange-400 shrink-0 text-sm">→</span>
                </a>
              ))}
            </div>
            <a
              href="/guides?recommended=true"
              className="mt-4 block text-sm text-orange-500 hover:underline"
            >
              See all recommended guides →
            </a>
          </section>
        )}

        {/* ── Tier roadmap ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Your progression</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {TIERS.map(t => {
              const isActive   = tier.name === t.name
              const isUnlocked = completedCount >= t.min
              return (
                <div
                  key={t.name}
                  className={`rounded-xl p-4 border-2 transition-all ${
                    isActive
                      ? `${t.bg} border-current ${t.colour}`
                      : isUnlocked
                      ? 'bg-gray-50 border-gray-200 text-gray-600'
                      : 'bg-white border-gray-100 text-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={isUnlocked ? '' : 'grayscale opacity-40'}>{t.emoji}</span>
                    <span className="font-semibold text-sm">{t.name}</span>
                    {isActive && (
                      <span className="ml-auto text-xs font-bold uppercase tracking-wide">You</span>
                    )}
                  </div>
                  <p className="text-xs opacity-70">{t.description}</p>
                  <p className="text-xs opacity-50 mt-1">
                    {t.min === t.max
                      ? `${t.min} guide${t.min !== 1 ? 's' : ''}`
                      : `${t.min}–${t.max} guides`}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

      </div>
      <MobileNav />
    </main>
  )
}
