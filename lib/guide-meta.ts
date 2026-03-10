export type GuideMeta = {
  lastUpdated: string
  difficultyComparison: string
  completedCount: number
}

export const GUIDE_META: Record<string, GuideMeta> = {
  'fix-a-dripping-tap': {
    lastUpdated: 'February 2025',
    difficultyComparison: 'Easier than painting a room, harder than unblocking a drain',
    completedCount: 3247,
  },
  'put-up-shelves': {
    lastUpdated: 'February 2025',
    difficultyComparison: 'Harder than painting a room — measuring and drilling takes practice',
    completedCount: 1893,
  },
  'paint-a-room': {
    lastUpdated: 'January 2025',
    difficultyComparison: 'More effort than skill — easier than putting up shelves',
    completedCount: 4512,
  },
  'unblock-a-drain': {
    lastUpdated: 'February 2025',
    difficultyComparison: 'One of the easiest jobs on the site — no tools required at all',
    completedCount: 5821,
  },
  'bleed-a-radiator': {
    lastUpdated: 'January 2025',
    difficultyComparison: 'Similar to changing a lightbulb — anyone can do this in minutes',
    completedCount: 6104,
  },
  'fill-a-hole-in-a-wall': {
    lastUpdated: 'February 2025',
    difficultyComparison: 'Easier than painting a room, harder than bleeding a radiator',
    completedCount: 2341,
  },
  'fit-a-curtain-pole': {
    lastUpdated: 'January 2025',
    difficultyComparison: 'Similar to filling a hole in a wall — measuring is the hardest part',
    completedCount: 1654,
  },
  'change-a-lightbulb': {
    lastUpdated: 'January 2025',
    difficultyComparison: 'The easiest job on the site — no DIY experience needed at all',
    completedCount: 8932,
  },
  'fix-a-running-toilet': {
    lastUpdated: 'February 2025',
    difficultyComparison: 'Trickier than fixing a dripping tap — more parts involved',
    completedCount: 1247,
  },
}
