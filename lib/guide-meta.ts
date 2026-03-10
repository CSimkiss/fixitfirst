export type GuideMeta = {
  lastUpdated: string
  difficultyComparison: string
}

export const GUIDE_META: Record<string, GuideMeta> = {
  'fix-a-dripping-tap': {
    lastUpdated: 'February 2025',
    difficultyComparison: 'Easier than painting a room, harder than unblocking a drain',
  },
  'put-up-shelves': {
    lastUpdated: 'February 2025',
    difficultyComparison: 'Harder than painting a room — measuring and drilling takes practice',
  },
  'paint-a-room': {
    lastUpdated: 'January 2025',
    difficultyComparison: 'More effort than skill — easier than putting up shelves',
  },
  'unblock-a-drain': {
    lastUpdated: 'February 2025',
    difficultyComparison: 'One of the easiest jobs on the site — no tools required at all',
  },
  'bleed-a-radiator': {
    lastUpdated: 'January 2025',
    difficultyComparison: 'Similar to changing a lightbulb — anyone can do this in minutes',
  },
  'fill-a-hole-in-a-wall': {
    lastUpdated: 'February 2025',
    difficultyComparison: 'Easier than painting a room, harder than bleeding a radiator',
  },
  'fit-a-curtain-pole': {
    lastUpdated: 'January 2025',
    difficultyComparison: 'Similar to filling a hole in a wall — measuring is the hardest part',
  },
  'change-a-lightbulb': {
    lastUpdated: 'January 2025',
    difficultyComparison: 'The easiest job on the site — no DIY experience needed at all',
  },
  'fix-a-running-toilet': {
    lastUpdated: 'February 2025',
    difficultyComparison: 'Trickier than fixing a dripping tap — more parts involved',
  },
}
