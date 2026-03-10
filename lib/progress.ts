export const COMPLETED_GUIDES_KEY = 'fixitfirst-completed-guides'
// shape: Record<guideSlug, 'YYYY-MM-DD'>

export type Tier = {
  name: string
  emoji: string
  min: number
  max: number
  description: string
  colour: string
  bg: string
}

export const TIERS: Tier[] = [
  { name: 'Curious',    emoji: '👀', min: 0, max: 0, description: 'Just getting started',      colour: 'text-gray-600',   bg: 'bg-gray-100'   },
  { name: 'Capable',    emoji: '🔧', min: 1, max: 2, description: 'Building confidence',        colour: 'text-blue-700',   bg: 'bg-blue-100'   },
  { name: 'Competent',  emoji: '🛠️', min: 3, max: 4, description: 'Getting things done',        colour: 'text-teal-700',   bg: 'bg-teal-100'   },
  { name: 'Confident',  emoji: '💪', min: 5, max: 6, description: 'Making it look easy',        colour: 'text-orange-700', bg: 'bg-orange-100' },
  { name: 'Skilled',    emoji: '⭐', min: 7, max: 8, description: 'Friends ask for help',       colour: 'text-purple-700', bg: 'bg-purple-100' },
  { name: 'Builder',    emoji: '🏗️', min: 9, max: 9, description: 'Full DIY independence',      colour: 'text-green-700',  bg: 'bg-green-100'  },
]

export function getTier(completedCount: number): Tier {
  for (let i = TIERS.length - 1; i >= 0; i--) {
    if (completedCount >= TIERS[i].min) return TIERS[i]
  }
  return TIERS[0]
}

export function getLocalDateStr(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

/** Returns the current active streak in days. */
export function getStreak(completionDates: string[]): number {
  if (completionDates.length === 0) return 0

  const uniqueDates = Array.from(new Set(completionDates)).sort().reverse()
  const today = getLocalDateStr()
  const yesterday = getLocalDateStr(new Date(Date.now() - 86_400_000))

  // Streak is only active if most recent completion was today or yesterday
  if (uniqueDates[0] !== today && uniqueDates[0] !== yesterday) return 0

  let streak = 0
  // Walk backwards from the most recent completion date
  let cursor = new Date(uniqueDates[0] + 'T12:00:00')

  for (let i = 0; i < uniqueDates.length; i++) {
    const expected = getLocalDateStr(cursor)
    if (uniqueDates[i] === expected) {
      streak++
      cursor = new Date(cursor.getTime() - 86_400_000)
    } else {
      break
    }
  }

  return streak
}
