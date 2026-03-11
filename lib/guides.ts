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
  ukSpecific?: boolean
  quickWin?: boolean   // true if under 30 minutes
  skillPoints: number  // points awarded on completion
}

export const ALL_GUIDES: Guide[] = [
  { slug: 'fix-a-dripping-tap',    title: 'Fix a dripping tap',    time: '45 mins', cost: '£2–5',   level: 'Beginner', category: 'Plumbing',   href: '/guides/fix-a-dripping-tap',    difficulty: 2, saves: 'Save £80–150 today',  ukSpecific: true,              skillPoints: 20 },
  { slug: 'put-up-shelves',        title: 'Put up shelves',        time: '1 hour',  cost: '£10–20', level: 'Beginner', category: 'Carpentry',  href: '/guides/put-up-shelves',        difficulty: 3, saves: 'Save £50–80 today',                             skillPoints: 30 },
  { slug: 'paint-a-room',          title: 'Paint a room',          time: '1 day',   cost: '£30–60', level: 'Beginner', category: 'Decorating', href: '/guides/paint-a-room',          difficulty: 2, saves: 'Save £200–500 today',                            skillPoints: 20 },
  { slug: 'unblock-a-drain',       title: 'Unblock a drain',       time: '20 mins', cost: 'Free',   level: 'Beginner', category: 'Plumbing',   href: '/guides/unblock-a-drain',       difficulty: 1, saves: 'Save £60–120 today',  quickWin: true,                skillPoints: 10 },
  { slug: 'bleed-a-radiator',      title: 'Bleed a radiator',      time: '15 mins', cost: '£1–3',   level: 'Beginner', category: 'Heating',    href: '/guides/bleed-a-radiator',      difficulty: 1, saves: 'Save £50–80 today',   ukSpecific: true, quickWin: true, skillPoints: 10 },
  { slug: 'fill-a-hole-in-a-wall', title: 'Fill a hole in a wall', time: '30 mins', cost: '£3–5',   level: 'Beginner', category: 'Masonry',    href: '/guides/fill-a-hole-in-a-wall', difficulty: 2, saves: 'Save £50–100 today',  quickWin: true,                skillPoints: 20 },
  { slug: 'fit-a-curtain-pole',    title: 'Fit a curtain pole',    time: '45 mins', cost: '£0–15',  level: 'Beginner', category: 'Fitting',    href: '/guides/fit-a-curtain-pole',    difficulty: 2, saves: 'Save £50–80 today',                             skillPoints: 20 },
  { slug: 'change-a-lightbulb',    title: 'Change a lightbulb',    time: '5 mins',  cost: '£5–15',  level: 'Beginner', category: 'Electrics',  href: '/guides/change-a-lightbulb',    difficulty: 1, saves: 'Save £60–100 today',  ukSpecific: true, quickWin: true, skillPoints: 10 },
  { slug: 'fix-a-running-toilet',  title: 'Fix a running toilet',  time: '1 hour',  cost: '£10–25', level: 'Beginner', category: 'Plumbing',   href: '/guides/fix-a-running-toilet',  difficulty: 3, saves: 'Save £80–150 today',  ukSpecific: true,              skillPoints: 30 },
  { slug: 'fix-a-leaking-pipe-joint', title: 'Fix a leaking pipe joint', time: '30 mins', cost: '£3–8', level: 'Beginner', category: 'Plumbing', href: '/guides/fix-a-leaking-pipe-joint', difficulty: 2, saves: 'Save £60–120 today', ukSpecific: true, skillPoints: 20 },
  { slug: 'replace-a-toilet-seat', title: 'Replace a toilet seat', time: '20 mins', cost: '£15–40', level: 'Beginner', category: 'Plumbing', href: '/guides/replace-a-toilet-seat', difficulty: 1, saves: 'Save £40–80 today', quickWin: true, skillPoints: 10 },
  { slug: 'fix-low-water-pressure', title: 'Fix low water pressure', time: '30 mins', cost: 'Free–£10', level: 'Beginner', category: 'Plumbing', href: '/guides/fix-low-water-pressure', difficulty: 1, saves: 'Save £60–100 today', ukSpecific: true, skillPoints: 10 },
  { slug: 'unblock-a-toilet', title: 'Unblock a toilet', time: '20 mins', cost: 'Free–£12', level: 'Beginner', category: 'Plumbing', href: '/guides/unblock-a-toilet', difficulty: 1, saves: 'Save £60–120 today', quickWin: true, skillPoints: 10 },
  { slug: 'replace-a-shower-head', title: 'Replace a shower head', time: '15 mins', cost: '£10–40', level: 'Beginner', category: 'Plumbing', href: '/guides/replace-a-shower-head', difficulty: 1, saves: 'Save £40–80 today', quickWin: true, skillPoints: 10 },
  { slug: 'turn-off-water-mains', title: 'Turn off your water mains', time: '5 mins', cost: 'Free', level: 'Beginner', category: 'Plumbing', href: '/guides/turn-off-water-mains', difficulty: 1, saves: 'Prevents flood damage', quickWin: true, skillPoints: 10 },
  { slug: 'repressurise-a-boiler', title: 'Repressurise a boiler', time: '10 mins', cost: 'Free', level: 'Beginner', category: 'Heating', href: '/guides/repressurise-a-boiler', difficulty: 1, saves: 'Save £50–80 today', ukSpecific: true, quickWin: true, skillPoints: 10 },
  { slug: 'fix-a-cold-radiator', title: 'Fix a cold radiator', time: '20 mins', cost: 'Free–£3', level: 'Beginner', category: 'Heating', href: '/guides/fix-a-cold-radiator', difficulty: 1, saves: 'Save £50–80 today', ukSpecific: true, quickWin: true, skillPoints: 10 },
  { slug: 'replace-a-plug-fuse', title: 'Replace a plug fuse', time: '5 mins', cost: '£1–3', level: 'Beginner', category: 'Electrics', href: '/guides/replace-a-plug-fuse', difficulty: 1, saves: 'Save £30–60 today', ukSpecific: true, quickWin: true, skillPoints: 10 },
  { slug: 'reset-a-tripped-circuit-breaker', title: 'Reset a tripped circuit breaker', time: '10 mins', cost: 'Free', level: 'Beginner', category: 'Electrics', href: '/guides/reset-a-tripped-circuit-breaker', difficulty: 1, saves: 'Save £40–60 today', quickWin: true, skillPoints: 10 },
  { slug: 'replace-a-light-switch', title: 'Replace a light switch', time: '30 mins', cost: '£5–15', level: 'Beginner', category: 'Electrics', href: '/guides/replace-a-light-switch', difficulty: 2, saves: 'Save £60–100 today', ukSpecific: true, skillPoints: 20 },
  { slug: 'fix-a-doorbell', title: 'Fix a doorbell', time: '30 mins', cost: '£3–25', level: 'Beginner', category: 'Electrics', href: '/guides/fix-a-doorbell', difficulty: 1, saves: 'Save £40–80 today', skillPoints: 20 },
  { slug: 'fix-a-squeaky-floorboard', title: 'Fix a squeaky floorboard', time: '20 mins', cost: '£2–8', level: 'Beginner', category: 'Carpentry', href: '/guides/fix-a-squeaky-floorboard', difficulty: 1, saves: 'Save £40–60 today', quickWin: true, skillPoints: 10 },
  { slug: 'fix-a-sticking-door', title: 'Fix a sticking door', time: '45 mins', cost: 'Free–£4', level: 'Beginner', category: 'Carpentry', href: '/guides/fix-a-sticking-door', difficulty: 2, saves: 'Save £50–80 today', skillPoints: 20 },
  { slug: 'fix-a-sticking-drawer', title: 'Fix a sticking drawer', time: '15 mins', cost: 'Free–£3', level: 'Beginner', category: 'Carpentry', href: '/guides/fix-a-sticking-drawer', difficulty: 1, saves: 'Save £30–50 today', quickWin: true, skillPoints: 10 },
  { slug: 'hang-a-picture-frame', title: 'Hang a picture frame properly', time: '20 mins', cost: '£2–6', level: 'Beginner', category: 'Carpentry', href: '/guides/hang-a-picture-frame', difficulty: 1, saves: 'Save £30–60 today', quickWin: true, skillPoints: 10 },
  { slug: 'fix-a-broken-cabinet-hinge', title: 'Fix a broken cabinet hinge', time: '20 mins', cost: 'Free–£10', level: 'Beginner', category: 'Carpentry', href: '/guides/fix-a-broken-cabinet-hinge', difficulty: 1, saves: 'Save £30–60 today', quickWin: true, skillPoints: 10 },
]
