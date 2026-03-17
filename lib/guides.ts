export type Guide = {
  slug: string
  title: string
  time: string
  timeMinutes: number        // numeric minutes (midpoint for ranges)
  cost: string
  level: string
  category: string
  href: string
  difficulty: number         // 1–5
  saves: string
  estimatedSavingsMin: number  // £ min saving vs tradesperson (0 for non-monetary)
  estimatedSavingsMax: number  // £ max saving vs tradesperson (0 for non-monetary)
  emoji: string
  ukSpecific?: boolean
  quickWin?: boolean         // true if under 30 minutes
  skillPoints: number        // points awarded on completion
}

export const ALL_GUIDES: Guide[] = [
  { slug: 'fix-a-dripping-tap',            title: 'Fix a dripping tap',                       time: '45 mins',    timeMinutes: 45,  cost: '£2–5',      level: 'Beginner',     category: 'Plumbing',   href: '/guides/fix-a-dripping-tap',            difficulty: 2, saves: 'Save £80–150 today',         estimatedSavingsMin: 80,  estimatedSavingsMax: 150,  emoji: '💧', ukSpecific: true,              skillPoints: 20 },
  { slug: 'put-up-shelves',                title: 'Put up shelves',                            time: '1 hour',     timeMinutes: 60,  cost: '£10–20',    level: 'Beginner',     category: 'Carpentry',  href: '/guides/put-up-shelves',                difficulty: 3, saves: 'Save £50–80 today',          estimatedSavingsMin: 50,  estimatedSavingsMax: 80,   emoji: '📦',                                skillPoints: 30 },
  { slug: 'paint-a-room',                  title: 'Paint a room',                              time: '1 day',      timeMinutes: 480, cost: '£30–60',    level: 'Beginner',     category: 'Decorating', href: '/guides/paint-a-room',                  difficulty: 2, saves: 'Save £200–500 today',        estimatedSavingsMin: 200, estimatedSavingsMax: 500,  emoji: '🎨',                                skillPoints: 20 },
  { slug: 'unblock-a-drain',               title: 'Unblock a drain',                           time: '20 mins',    timeMinutes: 20,  cost: 'Free',      level: 'Beginner',     category: 'Plumbing',   href: '/guides/unblock-a-drain',               difficulty: 1, saves: 'Save £60–120 today',         estimatedSavingsMin: 60,  estimatedSavingsMax: 120,  emoji: '🚿', quickWin: true,                skillPoints: 10 },
  { slug: 'bleed-a-radiator',              title: 'Bleed a radiator',                          time: '15 mins',    timeMinutes: 15,  cost: '£1–3',      level: 'Beginner',     category: 'Heating',    href: '/guides/bleed-a-radiator',              difficulty: 1, saves: 'Save £50–80 today',          estimatedSavingsMin: 50,  estimatedSavingsMax: 80,   emoji: '🔧', ukSpecific: true, quickWin: true, skillPoints: 10 },
  { slug: 'fill-a-hole-in-a-wall',         title: 'Fill a hole in a wall',                     time: '30 mins',    timeMinutes: 30,  cost: '£3–5',      level: 'Beginner',     category: 'Masonry',    href: '/guides/fill-a-hole-in-a-wall',         difficulty: 2, saves: 'Save £50–100 today',         estimatedSavingsMin: 50,  estimatedSavingsMax: 100,  emoji: '🪣', quickWin: true,                skillPoints: 20 },
  { slug: 'fit-a-curtain-pole',            title: 'Fit a curtain pole',                        time: '45 mins',    timeMinutes: 45,  cost: '£0–15',     level: 'Beginner',     category: 'Fitting',    href: '/guides/fit-a-curtain-pole',            difficulty: 2, saves: 'Save £50–80 today',          estimatedSavingsMin: 50,  estimatedSavingsMax: 80,   emoji: '🪟',                                skillPoints: 20 },
  { slug: 'change-a-lightbulb',            title: 'Change a lightbulb',                        time: '5 mins',     timeMinutes: 5,   cost: '£5–15',     level: 'Beginner',     category: 'Electrics',  href: '/guides/change-a-lightbulb',            difficulty: 1, saves: 'Save £60–100 today',         estimatedSavingsMin: 60,  estimatedSavingsMax: 100,  emoji: '💡', ukSpecific: true, quickWin: true, skillPoints: 10 },
  { slug: 'fix-a-running-toilet',          title: 'Fix a running toilet',                      time: '1 hour',     timeMinutes: 60,  cost: '£10–25',    level: 'Beginner',     category: 'Plumbing',   href: '/guides/fix-a-running-toilet',          difficulty: 3, saves: 'Save £80–150 today',         estimatedSavingsMin: 80,  estimatedSavingsMax: 150,  emoji: '🚽', ukSpecific: true,              skillPoints: 30 },
  { slug: 'fix-a-leaking-pipe-joint',      title: 'Fix a leaking pipe joint',                  time: '30 mins',    timeMinutes: 30,  cost: '£3–8',      level: 'Beginner',     category: 'Plumbing',   href: '/guides/fix-a-leaking-pipe-joint',      difficulty: 2, saves: 'Save £60–120 today',         estimatedSavingsMin: 60,  estimatedSavingsMax: 120,  emoji: '🔧', ukSpecific: true,              skillPoints: 20 },
  { slug: 'replace-a-toilet-seat',         title: 'Replace a toilet seat',                     time: '20 mins',    timeMinutes: 20,  cost: '£15–40',    level: 'Beginner',     category: 'Plumbing',   href: '/guides/replace-a-toilet-seat',         difficulty: 1, saves: 'Save £40–80 today',          estimatedSavingsMin: 40,  estimatedSavingsMax: 80,   emoji: '🚽', quickWin: true,                skillPoints: 10 },
  { slug: 'fix-low-water-pressure',        title: 'Fix low water pressure',                    time: '30 mins',    timeMinutes: 30,  cost: 'Free–£10',  level: 'Beginner',     category: 'Plumbing',   href: '/guides/fix-low-water-pressure',        difficulty: 1, saves: 'Save £60–100 today',         estimatedSavingsMin: 60,  estimatedSavingsMax: 100,  emoji: '💧', ukSpecific: true,              skillPoints: 10 },
  { slug: 'unblock-a-toilet',              title: 'Unblock a toilet',                          time: '20 mins',    timeMinutes: 20,  cost: 'Free–£12',  level: 'Beginner',     category: 'Plumbing',   href: '/guides/unblock-a-toilet',              difficulty: 1, saves: 'Save £60–120 today',         estimatedSavingsMin: 60,  estimatedSavingsMax: 120,  emoji: '🚽', quickWin: true,                skillPoints: 10 },
  { slug: 'replace-a-shower-head',         title: 'Replace a shower head',                     time: '15 mins',    timeMinutes: 15,  cost: '£10–40',    level: 'Beginner',     category: 'Plumbing',   href: '/guides/replace-a-shower-head',         difficulty: 1, saves: 'Save £40–80 today',          estimatedSavingsMin: 40,  estimatedSavingsMax: 80,   emoji: '🚿', quickWin: true,                skillPoints: 10 },
  { slug: 'turn-off-water-mains',          title: 'Turn off your water mains',                 time: '5 mins',     timeMinutes: 5,   cost: 'Free',      level: 'Beginner',     category: 'Plumbing',   href: '/guides/turn-off-water-mains',          difficulty: 1, saves: 'Prevents flood damage',      estimatedSavingsMin: 0,   estimatedSavingsMax: 0,    emoji: '🚰', quickWin: true,                skillPoints: 10 },
  { slug: 'repressurise-a-boiler',         title: 'Repressurise a boiler',                     time: '10 mins',    timeMinutes: 10,  cost: 'Free',      level: 'Beginner',     category: 'Heating',    href: '/guides/repressurise-a-boiler',         difficulty: 1, saves: 'Save £50–80 today',          estimatedSavingsMin: 50,  estimatedSavingsMax: 80,   emoji: '🔥', ukSpecific: true, quickWin: true, skillPoints: 10 },
  { slug: 'fix-a-cold-radiator',           title: 'Fix a cold radiator',                       time: '20 mins',    timeMinutes: 20,  cost: 'Free–£3',   level: 'Beginner',     category: 'Heating',    href: '/guides/fix-a-cold-radiator',           difficulty: 1, saves: 'Save £50–80 today',          estimatedSavingsMin: 50,  estimatedSavingsMax: 80,   emoji: '♨️', ukSpecific: true, quickWin: true, skillPoints: 10 },
  { slug: 'replace-a-plug-fuse',           title: 'Replace a plug fuse',                       time: '5 mins',     timeMinutes: 5,   cost: '£1–3',      level: 'Beginner',     category: 'Electrics',  href: '/guides/replace-a-plug-fuse',           difficulty: 1, saves: 'Save £30–60 today',          estimatedSavingsMin: 30,  estimatedSavingsMax: 60,   emoji: '🔌', ukSpecific: true, quickWin: true, skillPoints: 10 },
  { slug: 'reset-a-tripped-circuit-breaker', title: 'Reset a tripped circuit breaker',         time: '10 mins',    timeMinutes: 10,  cost: 'Free',      level: 'Beginner',     category: 'Electrics',  href: '/guides/reset-a-tripped-circuit-breaker', difficulty: 1, saves: 'Save £40–60 today',        estimatedSavingsMin: 40,  estimatedSavingsMax: 60,   emoji: '⚡', quickWin: true,                skillPoints: 10 },
  { slug: 'replace-a-light-switch',        title: 'Replace a light switch',                    time: '30 mins',    timeMinutes: 30,  cost: '£5–15',     level: 'Beginner',     category: 'Electrics',  href: '/guides/replace-a-light-switch',        difficulty: 2, saves: 'Save £60–100 today',         estimatedSavingsMin: 60,  estimatedSavingsMax: 100,  emoji: '💡', ukSpecific: true,              skillPoints: 20 },
  { slug: 'fix-a-doorbell',                title: 'Fix a doorbell',                            time: '30 mins',    timeMinutes: 30,  cost: '£3–25',     level: 'Beginner',     category: 'Electrics',  href: '/guides/fix-a-doorbell',                difficulty: 1, saves: 'Save £40–80 today',          estimatedSavingsMin: 40,  estimatedSavingsMax: 80,   emoji: '🔔',                                skillPoints: 20 },
  { slug: 'fix-a-squeaky-floorboard',      title: 'Fix a squeaky floorboard',                  time: '20 mins',    timeMinutes: 20,  cost: '£2–8',      level: 'Beginner',     category: 'Carpentry',  href: '/guides/fix-a-squeaky-floorboard',      difficulty: 1, saves: 'Save £40–60 today',          estimatedSavingsMin: 40,  estimatedSavingsMax: 60,   emoji: '🪵', quickWin: true,                skillPoints: 10 },
  { slug: 'fix-a-sticking-door',           title: 'Fix a sticking door',                       time: '45 mins',    timeMinutes: 45,  cost: 'Free–£4',   level: 'Beginner',     category: 'Carpentry',  href: '/guides/fix-a-sticking-door',           difficulty: 2, saves: 'Save £50–80 today',          estimatedSavingsMin: 50,  estimatedSavingsMax: 80,   emoji: '🚪',                                skillPoints: 20 },
  { slug: 'fix-a-sticking-drawer',         title: 'Fix a sticking drawer',                     time: '15 mins',    timeMinutes: 15,  cost: 'Free–£3',   level: 'Beginner',     category: 'Carpentry',  href: '/guides/fix-a-sticking-drawer',         difficulty: 1, saves: 'Save £30–50 today',          estimatedSavingsMin: 30,  estimatedSavingsMax: 50,   emoji: '🗄️', quickWin: true,                skillPoints: 10 },
  { slug: 'hang-a-picture-frame',          title: 'Hang a picture frame properly',             time: '20 mins',    timeMinutes: 20,  cost: '£2–6',      level: 'Beginner',     category: 'Carpentry',  href: '/guides/hang-a-picture-frame',          difficulty: 1, saves: 'Save £30–60 today',          estimatedSavingsMin: 30,  estimatedSavingsMax: 60,   emoji: '🖼️', quickWin: true,                skillPoints: 10 },
  { slug: 'fix-a-broken-cabinet-hinge',    title: 'Fix a broken cabinet hinge',                time: '20 mins',    timeMinutes: 20,  cost: 'Free–£10',  level: 'Beginner',     category: 'Carpentry',  href: '/guides/fix-a-broken-cabinet-hinge',    difficulty: 1, saves: 'Save £30–60 today',          estimatedSavingsMin: 30,  estimatedSavingsMax: 60,   emoji: '🔧', quickWin: true,                skillPoints: 10 },
  { slug: 'fill-and-sand-a-wall',          title: 'Fill and sand a wall',                      time: '45 mins',    timeMinutes: 45,  cost: '£5–10',     level: 'Beginner',     category: 'Decorating', href: '/guides/fill-and-sand-a-wall',          difficulty: 2, saves: 'Save £50–100 today',         estimatedSavingsMin: 50,  estimatedSavingsMax: 100,  emoji: '🪣',                                skillPoints: 20 },
  { slug: 'tile-a-splashback',             title: 'Tile a splashback',                         time: 'Half a day', timeMinutes: 240, cost: '£30–80',    level: 'Intermediate', category: 'Decorating', href: '/guides/tile-a-splashback',             difficulty: 3, saves: 'Save £150–300 today',        estimatedSavingsMin: 150, estimatedSavingsMax: 300,  emoji: '🧱',                                skillPoints: 30 },
  { slug: 'strip-wallpaper',               title: 'Strip wallpaper',                           time: 'Half a day', timeMinutes: 240, cost: '£12–25',    level: 'Beginner',     category: 'Decorating', href: '/guides/strip-wallpaper',               difficulty: 2, saves: 'Save £100–200 today',        estimatedSavingsMin: 100, estimatedSavingsMax: 200,  emoji: '🖼️',                                skillPoints: 20 },
  { slug: 'repair-a-ceiling-crack',        title: 'Repair a crack in a ceiling',               time: '1 hour',     timeMinutes: 60,  cost: '£6–22',     level: 'Beginner',     category: 'Decorating', href: '/guides/repair-a-ceiling-crack',        difficulty: 2, saves: 'Save £80–150 today',         estimatedSavingsMin: 80,  estimatedSavingsMax: 150,  emoji: '🏠',                                skillPoints: 20 },
  { slug: 'boiler-breakdown',              title: 'What to do if your boiler breaks down',      time: '30 mins',    timeMinutes: 30,  cost: 'Free',      level: 'Beginner',     category: 'Heating',    href: '/guides/boiler-breakdown',              difficulty: 1, saves: 'Save £100–300 today',        estimatedSavingsMin: 100, estimatedSavingsMax: 300,  emoji: '🔥', ukSpecific: true,              skillPoints: 10 },
  { slug: 'turn-off-electricity-fuse-box', title: 'Turn off your electricity at the fuse box', time: '5 mins',     timeMinutes: 5,   cost: 'Free',      level: 'Beginner',     category: 'Electrics',  href: '/guides/turn-off-electricity-fuse-box', difficulty: 1, saves: 'Essential safety knowledge', estimatedSavingsMin: 0,   estimatedSavingsMax: 0,    emoji: '⚡', quickWin: true,                skillPoints: 10 },
  { slug: 'read-your-energy-meter',        title: 'Read your energy meter',                    time: '5 mins',     timeMinutes: 5,   cost: 'Free',      level: 'Beginner',     category: 'General',    href: '/guides/read-your-energy-meter',        difficulty: 1, saves: 'Prevents overcharging',      estimatedSavingsMin: 0,   estimatedSavingsMax: 0,    emoji: '📊', ukSpecific: true, quickWin: true, skillPoints: 10 },
  { slug: 'draft-proof-door-window',       title: 'Draft proof a door or window',              time: '30 mins',    timeMinutes: 30,  cost: '£8–20',     level: 'Beginner',     category: 'General',    href: '/guides/draft-proof-door-window',       difficulty: 1, saves: 'Save £50–150 per year',      estimatedSavingsMin: 50,  estimatedSavingsMax: 150,  emoji: '🌬️', ukSpecific: true,              skillPoints: 10 },
  { slug: 'replace-a-smoke-alarm-battery', title: 'Replace a smoke alarm battery',             time: '5 mins',     timeMinutes: 5,   cost: '£3–5',      level: 'Beginner',     category: 'Electrics',  href: '/guides/replace-a-smoke-alarm-battery', difficulty: 1, saves: 'Keeps your home protected',  estimatedSavingsMin: 0,   estimatedSavingsMax: 0,    emoji: '🔔', quickWin: true,                skillPoints: 10 },
  { slug: 'install-a-smart-thermostat',    title: 'Install a smart thermostat',                time: '1–2 hours',  timeMinutes: 90,  cost: '£100–250',  level: 'Intermediate', category: 'Electrics',  href: '/guides/install-a-smart-thermostat',    difficulty: 3, saves: 'Save £150–300/year',         estimatedSavingsMin: 150, estimatedSavingsMax: 300,  emoji: '🌡️', ukSpecific: true,              skillPoints: 30 },
  { slug: 'bleed-all-radiators',           title: 'Bleed all radiators',                       time: '1 hour',     timeMinutes: 60,  cost: '£1–3',      level: 'Beginner',     category: 'Heating',    href: '/guides/bleed-all-radiators',           difficulty: 1, saves: 'Save £80–150 today',         estimatedSavingsMin: 80,  estimatedSavingsMax: 150,  emoji: '🔧', ukSpecific: true,              skillPoints: 10 },
  { slug: 'fix-a-noisy-radiator',          title: 'Fix a noisy radiator',                      time: '30 mins',    timeMinutes: 30,  cost: 'Free–£5',   level: 'Beginner',     category: 'Heating',    href: '/guides/fix-a-noisy-radiator',          difficulty: 1, saves: 'Save £50–80 today',          estimatedSavingsMin: 50,  estimatedSavingsMax: 80,   emoji: '♨️', ukSpecific: true,              skillPoints: 10 },
  { slug: 'boiler-breakdown-what-to-do',   title: 'Boiler breakdown: what to do',              time: '30 mins',    timeMinutes: 30,  cost: 'Free',      level: 'Beginner',     category: 'Heating',    href: '/guides/boiler-breakdown-what-to-do',   difficulty: 1, saves: 'Save £100–300 today',        estimatedSavingsMin: 100, estimatedSavingsMax: 300,  emoji: '🔥', ukSpecific: true,              skillPoints: 10 },
  { slug: 'fix-a-garden-tap',              title: 'Fix a leaking garden tap',                  time: '30 mins',    timeMinutes: 30,  cost: '£3–10',     level: 'Beginner',     category: 'Outdoor',    href: '/guides/fix-a-garden-tap',              difficulty: 1, saves: 'Save £60–100 today',         estimatedSavingsMin: 60,  estimatedSavingsMax: 100,  emoji: '🌿', ukSpecific: true,              skillPoints: 10 },
  { slug: 'unblock-a-gutter',              title: 'Unblock a gutter',                          time: '1 hour',     timeMinutes: 60,  cost: '£15–30',    level: 'Beginner',     category: 'Outdoor',    href: '/guides/unblock-a-gutter',              difficulty: 1, saves: 'Save £80–150 today',         estimatedSavingsMin: 80,  estimatedSavingsMax: 150,  emoji: '🏠',                                skillPoints: 10 },
  { slug: 'fix-a-fence-panel',             title: 'Fix a fence panel',                         time: '2 hours',    timeMinutes: 120, cost: '£30–80',    level: 'Beginner',     category: 'Outdoor',    href: '/guides/fix-a-fence-panel',             difficulty: 2, saves: 'Save £100–200 today',        estimatedSavingsMin: 100, estimatedSavingsMax: 200,  emoji: '🔧',                                skillPoints: 20 },
  { slug: 'lay-decking-boards',            title: 'Lay decking boards',                        time: 'Full day',   timeMinutes: 480, cost: '£200–600',  level: 'Intermediate', category: 'Outdoor',    href: '/guides/lay-decking-boards',            difficulty: 3, saves: 'Save £500–1,500 today',      estimatedSavingsMin: 500, estimatedSavingsMax: 1500, emoji: '🏗️',                                skillPoints: 30 },
]

/** Lookup map for fast slug → guide access */
export const GUIDE_BY_SLUG: Record<string, Guide> = Object.fromEntries(
  ALL_GUIDES.map(g => [g.slug, g])
)

// ─── Tool inference ────────────────────────────────────────────────────────────

/**
 * Tools required / typically used per guide slug.
 * Used to infer what tools a user already has from their completed guides.
 */
export const GUIDE_TOOLS: Record<string, string[]> = {
  'fix-a-dripping-tap':             ['spanner', 'screwdriver'],
  'put-up-shelves':                 ['drill', 'screwdriver'],
  'paint-a-room':                   ['filling-knife', 'paint-roller'],
  'unblock-a-drain':                ['plunger'],
  'bleed-a-radiator':               ['bleed-key'],
  'fill-a-hole-in-a-wall':          ['filling-knife'],
  'fit-a-curtain-pole':             ['drill', 'screwdriver'],
  'fix-a-running-toilet':           ['screwdriver', 'spanner'],
  'fix-a-leaking-pipe-joint':       ['spanner', 'ptfe-tape'],
  'replace-a-toilet-seat':          ['screwdriver', 'spanner'],
  'fix-low-water-pressure':         ['spanner'],
  'unblock-a-toilet':               ['plunger'],
  'replace-a-shower-head':          ['spanner'],
  'fix-a-cold-radiator':            ['bleed-key', 'spanner'],
  'replace-a-plug-fuse':            ['screwdriver'],
  'replace-a-light-switch':         ['screwdriver'],
  'fix-a-doorbell':                 ['screwdriver', 'drill'],
  'fix-a-squeaky-floorboard':       ['drill', 'screwdriver'],
  'fix-a-sticking-door':            ['screwdriver', 'plane'],
  'hang-a-picture-frame':           ['drill', 'screwdriver'],
  'fix-a-broken-cabinet-hinge':     ['screwdriver'],
  'fill-and-sand-a-wall':           ['filling-knife'],
  'tile-a-splashback':              ['filling-knife', 'tile-cutter'],
  'strip-wallpaper':                ['scraper', 'filling-knife'],
  'repair-a-ceiling-crack':         ['filling-knife'],
  'replace-a-smoke-alarm-battery':  ['screwdriver'],
  'install-a-smart-thermostat':     ['screwdriver', 'drill'],
  'bleed-all-radiators':            ['bleed-key'],
  'fix-a-noisy-radiator':           ['bleed-key', 'spanner'],
  'fix-a-garden-tap':               ['spanner'],
  'fix-a-fence-panel':              ['drill', 'screwdriver'],
  'lay-decking-boards':             ['drill', 'screwdriver'],
}

/** Returns the set of tool IDs the user likely owns, inferred from completed guides. */
export function inferToolSet(completionMap: Record<string, string>): Set<string> {
  const tools = new Set<string>()
  for (const slug of Object.keys(completionMap)) {
    for (const tool of (GUIDE_TOOLS[slug] ?? [])) tools.add(tool)
  }
  return tools
}

// ─── Recommendation engine ────────────────────────────────────────────────────

export type RecommendationReason = 'tool-overlap' | 'same-category' | 'quick-win' | 'easiest'

export type Recommendation = { guide: Guide; reason: RecommendationReason }

/**
 * Return the best next guide recommendation with a contextual reason label.
 *
 * Ranking priority:
 *  1. Guide uses tools the user already has (inferred from completions) — same category first
 *  2. Same category as the most-recently-completed guide
 *  3. Quick win: ≤ 20 minutes
 *  4. Easiest incomplete guide overall (difficulty → timeMinutes)
 *
 * Within each tier, guides are sorted by difficulty then time (easiest first).
 * Skill matching: the user's target difficulty grows with completion count,
 * acting as a soft tiebreaker inside each priority level.
 */
export function getRecommendation(
  completionMap: Record<string, string>,
  guides: Guide[] = ALL_GUIDES,
): Recommendation | null {
  const incomplete = guides.filter(g => !completionMap[g.slug])
  if (incomplete.length === 0) return null

  const userTools     = inferToolSet(completionMap)
  const completedCount = Object.keys(completionMap).length

  // Target difficulty rises with experience: 1 guide → diff ≤ 2, 5 guides → diff ≤ 3, etc.
  const targetDifficulty = Math.min(5, 1 + Math.floor(completedCount / 3))

  const byEasiness = (a: Guide, b: Guide) =>
    a.difficulty - b.difficulty || a.timeMinutes - b.timeMinutes

  // Soft skill tiebreaker: prefer guides at or just above the user's current level
  const bySkillMatch = (a: Guide, b: Guide) => {
    const da = Math.abs(a.difficulty - targetDifficulty)
    const db = Math.abs(b.difficulty - targetDifficulty)
    return da - db || a.timeMinutes - b.timeMinutes
  }

  // Most-recently-completed guide (lexicographic ISO date sort)
  const lastSlug = Object.entries(completionMap)
    .sort((a, b) => b[1].localeCompare(a[1]))[0]?.[0]
  const lastCategory = guides.find(g => g.slug === lastSlug)?.category

  // Guides where the user already owns every required tool (non-empty list only)
  const withToolOverlap = incomplete.filter(g => {
    const needed = GUIDE_TOOLS[g.slug] ?? []
    return needed.length > 0 && needed.every(t => userTools.has(t))
  })

  // 1. Tool overlap + same category
  if (lastCategory && withToolOverlap.length > 0) {
    const best = withToolOverlap.filter(g => g.category === lastCategory).sort(bySkillMatch)
    if (best.length > 0) return { guide: best[0], reason: 'tool-overlap' }
  }

  // 2. Tool overlap (any category)
  if (withToolOverlap.length > 0) {
    return { guide: withToolOverlap.sort(bySkillMatch)[0], reason: 'tool-overlap' }
  }

  // 3. Same category
  if (lastCategory) {
    const sameCat = incomplete.filter(g => g.category === lastCategory).sort(byEasiness)
    if (sameCat.length > 0) return { guide: sameCat[0], reason: 'same-category' }
  }

  // 4. Quick win (≤ 20 min)
  const quickWins = incomplete.filter(g => g.timeMinutes <= 20).sort(byEasiness)
  if (quickWins.length > 0) return { guide: quickWins[0], reason: 'quick-win' }

  // 5. Easiest overall
  return { guide: [...incomplete].sort(byEasiness)[0], reason: 'easiest' }
}

/**
 * Return the single best incomplete guide to do next.
 * Thin wrapper around getRecommendation for backward compatibility.
 */
export function getRecommendedNextGuide(
  completionMap: Record<string, string>,
  guides: Guide[] = ALL_GUIDES,
): Guide | null {
  return getRecommendation(completionMap, guides)?.guide ?? null
}
