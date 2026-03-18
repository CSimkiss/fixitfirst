import { ALL_GUIDES } from '@/lib/guides'

export type BadgeProgress = {
  current: number
  total: number
  pct: number
  remaining: number
  label: string
  ctaHref: string
  ctaLabel: string
  nextHref: string
  unlockContext: string
}

export type Badge = {
  id: string
  emoji: string
  name: string
  description: string
  hint: string
  /** streak is optional; defaults to 0 on call sites that don't have it */
  check: (completedSlugs: string[], ownedToolIds: string[], streak?: number) => boolean
  progress: (completedSlugs: string[], ownedToolIds: string[], streak?: number) => BadgeProgress
}

// ── Dynamic slug sets (update automatically when guides are added) ─────────────

const PLUMBING_SLUGS   = ALL_GUIDES.filter(g => g.category === 'Plumbing').map(g => g.slug)
const DECORATING_SLUGS = ALL_GUIDES.filter(g => g.category === 'Decorating').map(g => g.slug)
// Guides completable in 20 minutes or less
const QUICK_SLUGS      = ALL_GUIDES.filter(g => g.timeMinutes <= 20).map(g => g.slug)

// The 3 core plumbing guides kept for the existing `plumber-training` badge
const CORE_PLUMBING_SLUGS = ['fix-a-dripping-tap', 'unblock-a-drain', 'fix-a-running-toilet']

// ── Small helpers ─────────────────────────────────────────────────────────────

function countIn(completedSlugs: string[], pool: string[]): number {
  return pool.filter(s => completedSlugs.includes(s)).length
}

function countProgress(
  current: number,
  total: number,
  label: string,
  ctaHref: string,
  ctaLabel: string,
  nextHref: string,
  unlockContext: string,
): BadgeProgress {
  return {
    current: Math.min(current, total),
    total,
    pct: Math.min((current / total) * 100, 100),
    remaining: Math.max(0, total - current),
    label,
    ctaHref,
    ctaLabel,
    nextHref,
    unlockContext,
  }
}

// ─────────────────────────────────────────────────────────────────────────────

export const ALL_BADGES: Badge[] = [

  // ── PROGRESSION ─────────────────────────────────────────────────────────────

  {
    id: 'first-fix',
    emoji: '🔧',
    name: 'First Fix',
    description: 'Complete your first guide',
    hint: 'Complete any guide to unlock',
    check: (c) => c.length >= 1,
    progress: (c) => countProgress(
      c.length, 1,
      `${Math.min(c.length, 1)} / 1 guide completed`,
      '/guides', 'View guides →', '/guides',
      'Completed your first guide',
    ),
  },

  {
    id: 'triple-threat',
    emoji: '🏆',
    name: 'Triple Threat',
    description: 'Complete 3 guides',
    hint: 'Complete 3 guides to unlock',
    check: (c) => c.length >= 3,
    progress: (c) => countProgress(
      c.length, 3,
      `${Math.min(c.length, 3)} / 3 guides completed`,
      '/guides', 'View guides →', '/guides',
      'Completed 3 guides',
    ),
  },

  {
    id: 'halfway',
    emoji: '🛠️',
    name: 'Getting There',
    description: 'Complete 5 guides',
    hint: 'Complete 5 guides to unlock',
    check: (c) => c.length >= 5,
    progress: (c) => countProgress(
      c.length, 5,
      `${Math.min(c.length, 5)} / 5 guides completed`,
      '/guides', 'View guides →', '/guides',
      'Completed 5 guides',
    ),
  },

  {
    id: 'ten-fixes',
    emoji: '💪',
    name: 'Ten Down',
    description: 'Complete 10 guides',
    hint: 'Complete 10 guides to unlock',
    check: (c) => c.length >= 10,
    progress: (c) => countProgress(
      c.length, 10,
      `${Math.min(c.length, 10)} / 10 guides completed`,
      '/guides', 'View guides →', '/guides',
      'Completed 10 guides',
    ),
  },

  {
    id: 'halfway-house',
    emoji: '🏠',
    name: 'Halfway There',
    description: `Complete half of all available guides`,
    hint: `Complete ${Math.ceil(ALL_GUIDES.length / 2)} guides to unlock`,
    check: (c) => c.length >= Math.ceil(ALL_GUIDES.length / 2),
    progress: (c) => {
      const total = Math.ceil(ALL_GUIDES.length / 2)
      return countProgress(
        c.length, total,
        `${Math.min(c.length, total)} / ${total} guides completed`,
        '/guides', 'View guides →', '/guides',
        `Completed ${total} guides — halfway through all guides`,
      )
    },
  },

  {
    id: 'full-house',
    emoji: '⭐',
    name: 'Full House',
    description: 'Complete all available guides',
    hint: `Complete all ${ALL_GUIDES.length} guides to unlock`,
    check: (c) => c.length >= ALL_GUIDES.length,
    progress: (c) => {
      const total = ALL_GUIDES.length
      return countProgress(
        c.length, total,
        `${Math.min(c.length, total)} / ${total} guides completed`,
        '/guides', 'View guides →', '/guides',
        `Completed all ${total} guides`,
      )
    },
  },

  // ── CATEGORY ────────────────────────────────────────────────────────────────

  {
    id: 'category-focus',
    emoji: '🎯',
    name: 'Category Focus',
    description: 'Complete 3 guides in a single category',
    hint: 'Complete 3 guides from any one category to unlock',
    check: (c) => {
      const cats: Record<string, number> = {}
      for (const slug of c) {
        const cat = ALL_GUIDES.find(g => g.slug === slug)?.category
        if (cat) cats[cat] = (cats[cat] ?? 0) + 1
      }
      return Object.values(cats).some(n => n >= 3)
    },
    progress: (c) => {
      const cats: Record<string, number> = {}
      for (const slug of c) {
        const cat = ALL_GUIDES.find(g => g.slug === slug)?.category
        if (cat) cats[cat] = (cats[cat] ?? 0) + 1
      }
      const best = Math.max(0, ...Object.values(cats), 0)
      return countProgress(
        best, 3,
        best > 0 ? `${Math.min(best, 3)} / 3 in your best category` : '0 / 3 in any category',
        '/guides', 'Browse by category →', '/guides',
        'Completed 3 guides in a single category',
      )
    },
  },

  {
    id: 'category-collector',
    emoji: '🗂️',
    name: 'Category Collector',
    description: 'Complete guides in 3 different categories',
    hint: 'Complete at least one guide in 3 different categories',
    check: (c) => {
      const cats = new Set(
        c.map(slug => ALL_GUIDES.find(g => g.slug === slug)?.category)
         .filter((cat): cat is string => Boolean(cat)),
      )
      return cats.size >= 3
    },
    progress: (c) => {
      const cats = new Set(
        c.map(slug => ALL_GUIDES.find(g => g.slug === slug)?.category)
         .filter((cat): cat is string => Boolean(cat)),
      )
      return countProgress(
        cats.size, 3,
        `${Math.min(cats.size, 3)} / 3 categories explored`,
        '/guides', 'Browse categories →', '/guides',
        'Explored 3 different guide categories',
      )
    },
  },

  {
    id: 'plumber-training',
    emoji: '🚿',
    name: 'Plumber in Training',
    description: 'Complete the 3 core plumbing guides',
    hint: 'Complete Fix a dripping tap, Unblock a drain, and Fix a running toilet',
    check: (c) => CORE_PLUMBING_SLUGS.every(s => c.includes(s)),
    progress: (c) => {
      const current = countIn(c, CORE_PLUMBING_SLUGS)
      const next    = CORE_PLUMBING_SLUGS.find(s => !c.includes(s))
      return countProgress(
        current, 3,
        `${current} / 3 plumbing guides done`,
        '/guides', 'View plumbing guides →',
        next ? `/guides/${next}` : '/guides',
        'Completed the 3 core plumbing guides',
      )
    },
  },

  {
    id: 'plumbing-pro',
    emoji: '🔩',
    name: 'Plumbing Pro',
    description: 'Complete 5 plumbing guides',
    hint: 'Complete 5 guides in the Plumbing category',
    check: (c) => countIn(c, PLUMBING_SLUGS) >= 5,
    progress: (c) => {
      const current = countIn(c, PLUMBING_SLUGS)
      const next    = PLUMBING_SLUGS.find(s => !c.includes(s))
      return countProgress(
        current, 5,
        `${Math.min(current, 5)} / 5 plumbing guides done`,
        '/guides', 'View plumbing guides →',
        next ? `/guides/${next}` : '/guides',
        'Completed 5 plumbing guides',
      )
    },
  },

  {
    id: 'decorator',
    emoji: '🎨',
    name: 'Decorator',
    description: 'Complete the Paint a room guide',
    hint: 'Complete the Paint a room guide',
    check: (c) => c.includes('paint-a-room'),
    progress: (c) => {
      const done = c.includes('paint-a-room')
      return countProgress(
        done ? 1 : 0, 1,
        done ? 'Done' : 'Paint a room — not done yet',
        '/guides/paint-a-room', 'View guide →', '/guides/paint-a-room',
        'Completed the Paint a room guide',
      )
    },
  },

  {
    id: 'decorating-pro',
    emoji: '🖌️',
    name: 'Decorating Pro',
    description: 'Complete 3 decorating guides',
    hint: 'Complete 3 guides in the Decorating category',
    check: (c) => countIn(c, DECORATING_SLUGS) >= 3,
    progress: (c) => {
      const current = countIn(c, DECORATING_SLUGS)
      const next    = DECORATING_SLUGS.find(s => !c.includes(s))
      return countProgress(
        current, 3,
        `${Math.min(current, 3)} / 3 decorating guides done`,
        '/guides', 'View decorating guides →',
        next ? `/guides/${next}` : '/guides',
        'Completed 3 decorating guides',
      )
    },
  },

  // ── BEHAVIOURAL ─────────────────────────────────────────────────────────────

  {
    id: 'quick-fix',
    emoji: '⚡',
    name: 'Quick Fix',
    description: 'Complete a guide in 20 minutes or less',
    hint: 'Complete any guide that takes 20 minutes or less',
    check: (c) => QUICK_SLUGS.some(s => c.includes(s)),
    progress: (c) => {
      const done = QUICK_SLUGS.some(s => c.includes(s))
      const next = QUICK_SLUGS.find(s => !c.includes(s))
      return countProgress(
        done ? 1 : 0, 1,
        done ? 'Done' : '0 / 1 quick guide done',
        '/guides', 'View quick guides →',
        next ? `/guides/${next}` : '/guides',
        'Completed a guide in 20 minutes or less',
      )
    },
  },

  {
    id: 'two-day-streak',
    emoji: '🔥',
    name: 'On a Roll',
    description: 'Keep a 2-day fixing streak',
    hint: 'Complete guides on 2 consecutive days',
    check: (_c, _t, streak = 0) => streak >= 2,
    progress: (_c, _t, streak = 0) => countProgress(
      streak, 2,
      `${Math.min(streak, 2)} / 2 day streak`,
      '/guides', 'Keep your streak →', '/guides',
      'Kept a 2-day fixing streak',
    ),
  },

  {
    id: 'five-day-streak',
    emoji: '🔥🔥',
    name: 'Unstoppable',
    description: 'Keep a 5-day fixing streak',
    hint: 'Complete guides on 5 consecutive days',
    check: (_c, _t, streak = 0) => streak >= 5,
    progress: (_c, _t, streak = 0) => countProgress(
      streak, 5,
      `${Math.min(streak, 5)} / 5 day streak`,
      '/guides', 'Keep your streak →', '/guides',
      'Kept a 5-day fixing streak',
    ),
  },

  {
    id: 'tool-up',
    emoji: '🧰',
    name: 'Tool Up',
    description: 'Add 5 or more tools to your library',
    hint: 'Visit My Tools and tick at least 5 tools',
    check: (_c, t) => t.length >= 5,
    progress: (_c, t) => countProgress(
      t.length, 5,
      `${Math.min(t.length, 5)} / 5 tools added`,
      '/tools', 'Add tools →', '/tools',
      'Added 5 tools to your library',
    ),
  },

  {
    id: 'well-equipped',
    emoji: '🏗️',
    name: 'Well Equipped',
    description: 'Add 10 or more tools to your library',
    hint: 'Visit My Tools and tick at least 10 tools',
    check: (_c, t) => t.length >= 10,
    progress: (_c, t) => countProgress(
      t.length, 10,
      `${Math.min(t.length, 10)} / 10 tools added`,
      '/tools', 'Add tools →', '/tools',
      'Added 10 tools to your library',
    ),
  },
]
