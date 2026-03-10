export type GuideMeta = {
  lastUpdated: string
  difficultyComparison: string
  completedCount: number
  renterWarning?: string
}

export const GUIDE_META: Record<string, GuideMeta> = {
  'fix-a-dripping-tap': {
    lastUpdated: 'February 2025',
    difficultyComparison: 'Easier than painting a room, harder than unblocking a drain',
    completedCount: 3247,
    renterWarning: 'Landlords are legally responsible for fixing dripping taps. Report it in writing first. If they don\'t act within 14 days, most tenancy agreements allow basic washer replacements — but document everything.',
  },
  'put-up-shelves': {
    lastUpdated: 'February 2025',
    difficultyComparison: 'Harder than painting a room — measuring and drilling takes practice',
    completedCount: 1893,
    renterWarning: 'Always get written permission from your landlord before drilling into walls. Some allow it, others don\'t. Without permission you could lose part of your deposit.',
  },
  'paint-a-room': {
    lastUpdated: 'January 2025',
    difficultyComparison: 'More effort than skill — easier than putting up shelves',
    completedCount: 4512,
    renterWarning: 'You need your landlord\'s written permission to repaint. Some allow it — but may require you to repaint in the original colour before you leave. Get this agreed in writing before you buy any paint.',
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
    renterWarning: 'Filling small nail holes when you leave is usually expected and helps protect your deposit. Check your tenancy agreement — most require walls to be returned to their original condition.',
  },
  'fit-a-curtain-pole': {
    lastUpdated: 'January 2025',
    difficultyComparison: 'Similar to filling a hole in a wall — measuring is the hardest part',
    completedCount: 1654,
    renterWarning: 'Fitting a curtain pole requires drilling — which needs your landlord\'s written permission first. Some landlords agree easily; others don\'t. Ask before you drill.',
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
    renterWarning: 'Landlords are legally responsible for keeping toilets in working order. Report it in writing first. If they fail to act within a reasonable time (14 days for non-emergencies), contact your local council\'s Environmental Health department.',
  },
}
