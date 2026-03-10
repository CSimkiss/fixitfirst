export type Guide = {
  slug: string
  title: string
  time: string
  cost: string
  level: string
  category: string
  href: string
}

export const ALL_GUIDES: Guide[] = [
  { slug: 'fix-a-dripping-tap', title: 'Fix a dripping tap', time: '45 mins', cost: '£0–5', level: 'Beginner', category: 'Plumbing', href: '/guides/fix-a-dripping-tap' },
  { slug: 'put-up-shelves', title: 'Put up shelves', time: '1 hour', cost: '£10–20', level: 'Beginner', category: 'Carpentry', href: '/guides/put-up-shelves' },
  { slug: 'paint-a-room', title: 'Paint a room', time: '1 day', cost: '£30–60', level: 'Beginner', category: 'Decorating', href: '/guides/paint-a-room' },
  { slug: 'unblock-a-drain', title: 'Unblock a drain', time: '20 mins', cost: '£0–10', level: 'Beginner', category: 'Plumbing', href: '/guides/unblock-a-drain' },
  { slug: 'bleed-a-radiator', title: 'Bleed a radiator', time: '15 mins', cost: 'Free', level: 'Beginner', category: 'Heating', href: '/guides/bleed-a-radiator' },
  { slug: 'fill-a-hole-in-a-wall', title: 'Fill a hole in a wall', time: '30 mins', cost: '£5', level: 'Beginner', category: 'Masonry', href: '/guides/fill-a-hole-in-a-wall' },
  { slug: 'fit-a-curtain-pole', title: 'Fit a curtain pole', time: '45 mins', cost: '£0–15', level: 'Beginner', category: 'Fitting', href: '/guides/fit-a-curtain-pole' },
  { slug: 'change-a-lightbulb', title: 'Change a lightbulb', time: '5 mins', cost: '£5–15', level: 'Beginner', category: 'Electrics', href: '/guides/change-a-lightbulb' },
  { slug: 'fix-a-running-toilet', title: 'Fix a running toilet', time: '1 hour', cost: '£10–25', level: 'Beginner', category: 'Plumbing', href: '/guides/fix-a-running-toilet' },
]
