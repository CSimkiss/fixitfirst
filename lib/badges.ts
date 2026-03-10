export type Badge = {
  id: string
  emoji: string
  name: string
  description: string
  hint: string
  check: (completedSlugs: string[], ownedToolIds: string[]) => boolean
}

const PLUMBING_SLUGS = ['fix-a-dripping-tap', 'unblock-a-drain', 'fix-a-running-toilet']
const QUICK_SLUGS    = ['change-a-lightbulb', 'bleed-a-radiator', 'unblock-a-drain']

export const ALL_BADGES: Badge[] = [
  {
    id: 'first-fix',
    emoji: '🔧',
    name: 'First Fix',
    description: 'Complete your first guide',
    hint: 'Complete any guide to unlock',
    check: (c) => c.length >= 1,
  },
  {
    id: 'triple-threat',
    emoji: '🏆',
    name: 'Triple Threat',
    description: 'Complete 3 guides',
    hint: 'Complete 3 guides to unlock',
    check: (c) => c.length >= 3,
  },
  {
    id: 'halfway',
    emoji: '🛠️',
    name: 'Halfway There',
    description: 'Complete 5 or more guides',
    hint: 'Complete 5 guides to unlock',
    check: (c) => c.length >= 5,
  },
  {
    id: 'full-house',
    emoji: '⭐',
    name: 'Full House',
    description: 'Complete all available guides',
    hint: 'Complete all 9 guides to unlock',
    check: (c) => c.length >= 9,
  },
  {
    id: 'plumber-training',
    emoji: '🚿',
    name: 'Plumber in Training',
    description: 'Complete all 3 plumbing guides',
    hint: 'Complete Fix a dripping tap, Unblock a drain, and Fix a running toilet',
    check: (c) => PLUMBING_SLUGS.every(s => c.includes(s)),
  },
  {
    id: 'tool-up',
    emoji: '🧰',
    name: 'Tool Up',
    description: 'Add 5 or more tools to your library',
    hint: 'Visit My Tools and tick at least 5 tools',
    check: (_, t) => t.length >= 5,
  },
  {
    id: 'quick-fix',
    emoji: '⚡',
    name: 'Quick Fix',
    description: 'Complete a guide that takes under 20 minutes',
    hint: 'Complete Change a lightbulb, Bleed a radiator, or Unblock a drain',
    check: (c) => QUICK_SLUGS.some(s => c.includes(s)),
  },
  {
    id: 'decorator',
    emoji: '🎨',
    name: 'Decorator',
    description: 'Complete the Paint a room guide',
    hint: 'Complete the Paint a room guide',
    check: (c) => c.includes('paint-a-room'),
  },
]
