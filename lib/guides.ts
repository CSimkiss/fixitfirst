export type Guide = {
  slug: string
  title: string
  time: string
  cost: string
  level: string
  category: string
  href: string
  difficulty: number  // 1–5
  saves: string
}

export const ALL_GUIDES: Guide[] = [
  { slug: 'fix-a-dripping-tap',    title: 'Fix a dripping tap',    time: '45 mins', cost: '£2–5',   level: 'Beginner', category: 'Plumbing',   href: '/guides/fix-a-dripping-tap',    difficulty: 2, saves: 'Save £80–150 today' },
  { slug: 'put-up-shelves',        title: 'Put up shelves',        time: '1 hour',  cost: '£10–20', level: 'Beginner', category: 'Carpentry',  href: '/guides/put-up-shelves',        difficulty: 3, saves: 'Save £50–80 today' },
  { slug: 'paint-a-room',          title: 'Paint a room',          time: '1 day',   cost: '£30–60', level: 'Beginner', category: 'Decorating', href: '/guides/paint-a-room',          difficulty: 2, saves: 'Save £200–500 today' },
  { slug: 'unblock-a-drain',       title: 'Unblock a drain',       time: '20 mins', cost: 'Free',   level: 'Beginner', category: 'Plumbing',   href: '/guides/unblock-a-drain',       difficulty: 1, saves: 'Save £60–120 today' },
  { slug: 'bleed-a-radiator',      title: 'Bleed a radiator',      time: '15 mins', cost: '£1–3',   level: 'Beginner', category: 'Heating',    href: '/guides/bleed-a-radiator',      difficulty: 1, saves: 'Save £50–80 today' },
  { slug: 'fill-a-hole-in-a-wall', title: 'Fill a hole in a wall', time: '30 mins', cost: '£3–5',   level: 'Beginner', category: 'Masonry',    href: '/guides/fill-a-hole-in-a-wall', difficulty: 2, saves: 'Save £50–100 today' },
  { slug: 'fit-a-curtain-pole',    title: 'Fit a curtain pole',    time: '45 mins', cost: '£0–15',  level: 'Beginner', category: 'Fitting',    href: '/guides/fit-a-curtain-pole',    difficulty: 2, saves: 'Save £50–80 today' },
  { slug: 'change-a-lightbulb',    title: 'Change a lightbulb',    time: '5 mins',  cost: '£5–15',  level: 'Beginner', category: 'Electrics',  href: '/guides/change-a-lightbulb',    difficulty: 1, saves: 'Save £60–100 today' },
  { slug: 'fix-a-running-toilet',  title: 'Fix a running toilet',  time: '1 hour',  cost: '£10–25', level: 'Beginner', category: 'Plumbing',   href: '/guides/fix-a-running-toilet',  difficulty: 3, saves: 'Save £80–150 today' },
]
