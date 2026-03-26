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
  skillPoints: number
  popularityScore?: number   // relative search/completion popularity (higher = more common)
  searchTerms?: string[]     // synonym phrases users commonly search
  description?: string       // short blurb used on featured cards
}

export const ALL_GUIDES: Guide[] = [
  {
    slug: 'remove-silicone-sealant', title: 'Remove old silicone sealant',
    time: '15–20 mins', timeMinutes: 17, cost: '£5–10', level: 'Beginner', category: 'Plumbing',
    href: '/guides/remove-silicone-sealant', difficulty: 1,
    saves: 'Save £50–100 today', estimatedSavingsMin: 50, estimatedSavingsMax: 100,
    emoji: '🔧', ukSpecific: true, quickWin: true, skillPoints: 10, popularityScore: 25,
    searchTerms: ['remove silicone sealant', 'remove old sealant', 'strip silicone bath', 'clean bath sealant', 'mouldy sealant', 'replace bath sealant', 'take off silicone'],
    description: 'Remove old or mouldy bathroom sealant cleanly — without damaging tiles or enamel. The essential first step before any resealing or renovation.',
  },
  {
    slug: 'use-ptfe-tape', title: 'Use PTFE tape properly',
    time: '10 mins', timeMinutes: 10, cost: '£1–5', level: 'Beginner', category: 'Plumbing',
    href: '/guides/use-ptfe-tape', difficulty: 1,
    saves: 'Save £40–80 today', estimatedSavingsMin: 40, estimatedSavingsMax: 80,
    emoji: '🔧', ukSpecific: false, quickWin: true, skillPoints: 10, popularityScore: 25,
    searchTerms: ['ptfe tape', 'plumber\'s tape', 'how to use ptfe tape', 'wrap thread plumbing', 'stop leak threaded fitting', 'ptfe tape direction'],
    description: 'Apply PTFE tape to threaded plumbing fittings without leaks. The right direction, the right number of turns, the right tension — in 10 minutes.',
  },
  {
    slug: 'drill-into-tiles', title: 'Drill into tiles without cracking them',
    time: '15 mins', timeMinutes: 15, cost: '£5–15', level: 'Beginner', category: 'Tiling',
    href: '/guides/drill-into-tiles', difficulty: 2,
    saves: 'Save £50–150 today', estimatedSavingsMin: 50, estimatedSavingsMax: 150,
    emoji: '🪛', ukSpecific: false, quickWin: true, skillPoints: 15, popularityScore: 25,
    searchTerms: ['drill into tiles', 'drill through tiles', 'drill tiles without cracking', 'tile drill bit', 'bathroom wall drill', 'how to drill ceramic tile', 'drill porcelain tile'],
    description: 'Drill through ceramic or porcelain tiles without cracking them. The right bit, no hammer action, and masking tape to start.',
  },
  {
    slug: 'check-wall-level', title: 'Check if a wall is level and flat',
    time: '10–15 mins', timeMinutes: 12, cost: '£0', level: 'Beginner', category: 'Tiling',
    href: '/guides/check-wall-level', difficulty: 1,
    saves: 'Prevents rework', estimatedSavingsMin: 0, estimatedSavingsMax: 0,
    emoji: '🔧', ukSpecific: false, quickWin: true, skillPoints: 10, popularityScore: 20,
    searchTerms: ['check wall level', 'wall flat before tiling', 'plumb wall', 'check wall tiling', 'wall deviation tolerance', 'is wall flat enough to tile'],
    description: 'Check whether a wall is plumb, level, and flat before tiling. A 10-minute assessment that prevents crooked tile lines and expensive rework.',
  },
  {
    slug: 'cap-pipe', title: 'Cap off a pipe temporarily',
    time: '15–20 mins', timeMinutes: 17, cost: '£5–15', level: 'Intermediate', category: 'Plumbing',
    href: '/guides/cap-pipe', difficulty: 2,
    saves: 'Save £80–150 today', estimatedSavingsMin: 80, estimatedSavingsMax: 150,
    emoji: '🔧', ukSpecific: true, skillPoints: 15, popularityScore: 20,
    searchTerms: ['cap off pipe', 'cap copper pipe', 'cap plastic pipe', 'seal off pipe temporarily', 'push fit cap', 'compression cap pipe', 'bathroom renovation pipe'],
    description: 'Cap an exposed water supply pipe safely during a bathroom renovation. The right cap type for copper or plastic, fitted and tested correctly.',
  },
  {
    slug: 'strip-out-bathroom', title: 'Strip out a bathroom',
    time: '1–3 hours', timeMinutes: 120, cost: '£0–20', level: 'Intermediate', category: 'Plumbing',
    href: '/guides/strip-out-bathroom', difficulty: 3,
    saves: 'Save £150–400 today', estimatedSavingsMin: 150, estimatedSavingsMax: 400,
    emoji: '🪣', ukSpecific: true, skillPoints: 30, popularityScore: 72,
    searchTerms: ['strip out bathroom', 'bathroom strip out', 'remove bathroom fixtures', 'remove tiles bathroom', 'prep bathroom renovation', 'bathroom prep', 'bathroom demolition', 'rip out bathroom'],
    description: 'The essential first phase of any bathroom renovation. Learn to safely isolate water, remove old fixtures, and prepare surfaces — the right way.',
  },
  {
    slug: 'prepare-walls-for-tiling', title: 'Prepare walls for tiling',
    time: '1–2 hours', timeMinutes: 90, cost: '£10–40', level: 'Intermediate', category: 'Tiling',
    href: '/guides/prepare-walls-for-tiling', difficulty: 3,
    saves: 'Save £150–400 today', estimatedSavingsMin: 150, estimatedSavingsMax: 400,
    emoji: '🧱', ukSpecific: true, skillPoints: 25, popularityScore: 70,
    searchTerms: ['prepare walls for tiling', 'wall prep for tiling', 'prep wall before tiles', 'tile wall preparation', 'fill walls before tiling', 'prime wall before tiling', 'bathroom wall prep tiling'],
    description: 'The step most people skip — and why tiles fail. Learn to properly clean, fill, sand, and prime bathroom walls so your tiles actually stay up.',
  },
  {
    slug: 'finish-bathroom-renovation', title: 'Finish a bathroom (seal, paint & final checks)',
    time: '1–2 hours', timeMinutes: 90, cost: '£10–50', level: 'Beginner', category: 'Decorating',
    href: '/guides/finish-bathroom-renovation', difficulty: 2,
    saves: 'Save £80–200 today', estimatedSavingsMin: 80, estimatedSavingsMax: 200,
    emoji: '✨', ukSpecific: true, skillPoints: 20, popularityScore: 60,
    searchTerms: ['finish bathroom renovation', 'bathroom sealant', 'apply silicone bathroom', 'bathroom final checks', 'bathroom touch up paint', 'bathroom finishing phase', 'seal bath edge', 'bathroom completion'],
    description: 'Apply silicone sealant, touch up paintwork, and do a final inspection. The finishing phase that makes a refurbished bathroom look complete and professional.',
  },
  {
    slug: 'fit-bathroom-fixtures', title: 'Fit bathroom fixtures (sink, accessories & finishing)',
    time: '1–3 hours', timeMinutes: 120, cost: '£20–100', level: 'Intermediate', category: 'Plumbing',
    href: '/guides/fit-bathroom-fixtures', difficulty: 3,
    saves: 'Save £150–400 today', estimatedSavingsMin: 150, estimatedSavingsMax: 400,
    emoji: '🪣', ukSpecific: true, skillPoints: 30, popularityScore: 65,
    searchTerms: ['fit bathroom fixtures', 'install bathroom basin', 'fit towel rail', 'bathroom accessories fitting', 'mount bathroom fixtures', 'fit sink bathroom', 'install bathroom accessories', 'bathroom fitting phase'],
    description: 'Install a basin, towel rail, and accessories after tiling. The fitting phase that makes a tiled room into a working bathroom — no specialist plumbing required.',
  },
  {
    slug: 'prep-bathroom-plumbing', title: 'Prep bathroom plumbing (before renovation)',
    time: '30–90 mins', timeMinutes: 60, cost: '£0–10', level: 'Intermediate', category: 'Plumbing',
    href: '/guides/prep-bathroom-plumbing', difficulty: 3,
    saves: 'Save £100–300 today', estimatedSavingsMin: 100, estimatedSavingsMax: 300,
    emoji: '🔧', ukSpecific: true, skillPoints: 25, popularityScore: 65,
    searchTerms: ['bathroom plumbing prep', 'prep bathroom plumbing', 'disconnect bathroom pipes', 'isolate bathroom water', 'cap pipes bathroom', 'bathroom renovation plumbing', 'plumbing before renovation', 'disconnect basin', 'remove basin plumbing'],
    description: 'Safely isolate your water supply, disconnect existing fittings, and cap pipe ends before new fixtures go in. The plumbing prep every bathroom renovation needs.',
  },
  {
    slug: 'fix-a-dripping-tap', title: 'Fix a dripping tap',
    time: '45 mins', timeMinutes: 45, cost: '£2–5', level: 'Beginner', category: 'Plumbing',
    href: '/guides/fix-a-dripping-tap', difficulty: 2,
    saves: 'Save £80–150 today', estimatedSavingsMin: 80, estimatedSavingsMax: 150,
    emoji: '💧', ukSpecific: true, skillPoints: 20, popularityScore: 87,
    searchTerms: ['leaking tap', 'tap dripping', 'tap leak', 'dripping tap', "tap won't stop dripping", 'water dripping from tap', 'tap washer'],
    description: 'A dripping tap wastes 5,500 litres of water a year. One £2 rubber washer fixes it. This is the perfect first plumbing job.',
  },
  {
    slug: 'put-up-shelves', title: 'Put up shelves',
    time: '1 hour', timeMinutes: 60, cost: '£10–20', level: 'Beginner', category: 'Carpentry',
    href: '/guides/put-up-shelves', difficulty: 3,
    saves: 'Save £50–80 today', estimatedSavingsMin: 50, estimatedSavingsMax: 80,
    emoji: '📦', skillPoints: 30, popularityScore: 78,
    searchTerms: ['hang shelves', 'mount shelves', 'wall shelves', 'floating shelves', 'fit shelves', 'install shelves'],
  },
  {
    slug: 'paint-a-room', title: 'Paint a room',
    time: '1 day', timeMinutes: 480, cost: '£30–60', level: 'Beginner', category: 'Decorating',
    href: '/guides/paint-a-room', difficulty: 2,
    saves: 'Save £200–500 today', estimatedSavingsMin: 200, estimatedSavingsMax: 500,
    emoji: '🎨', skillPoints: 20, popularityScore: 80,
    searchTerms: ['painting walls', 'redecorate room', 'wall paint', 'how to paint walls', 'room makeover', 'painting a room'],
  },
  {
    slug: 'unblock-a-drain', title: 'Unblock a drain',
    time: '20 mins', timeMinutes: 20, cost: 'Free', level: 'Beginner', category: 'Plumbing',
    href: '/guides/unblock-a-drain', difficulty: 1,
    saves: 'Save £60–120 today', estimatedSavingsMin: 60, estimatedSavingsMax: 120,
    emoji: '🚿', quickWin: true, skillPoints: 10, popularityScore: 93,
    searchTerms: ['blocked drain', 'slow drain', 'drain not draining', 'sink blocked', 'bath not draining', 'drain blockage', 'blocked sink', 'unblock sink'],
    description: 'A blocked sink or bath can be cleared in minutes with boiling water and a plunger. No tools needed — and no callout fee.',
  },
  {
    slug: 'bleed-a-radiator', title: 'Bleed a radiator',
    time: '15 mins', timeMinutes: 15, cost: '£1–3', level: 'Beginner', category: 'Heating',
    href: '/guides/bleed-a-radiator', difficulty: 1,
    saves: 'Save £50–80 today', estimatedSavingsMin: 50, estimatedSavingsMax: 80,
    emoji: '🔧', ukSpecific: true, quickWin: true, skillPoints: 10, popularityScore: 90,
    searchTerms: ['cold radiator top', 'radiator not heating up', 'bleed radiator', 'trapped air radiator', 'how to bleed a radiator', 'radiator cold at top warm at bottom'],
    description: 'Cold at the top, warm at the bottom? That\'s trapped air. Bleeding a radiator takes 10 minutes and can cut your heating bills by up to 25%.',
  },
  {
    slug: 'fill-a-hole-in-a-wall', title: 'Fill a hole in a wall',
    time: '30 mins', timeMinutes: 30, cost: '£3–5', level: 'Beginner', category: 'Masonry',
    href: '/guides/fill-a-hole-in-a-wall', difficulty: 2,
    saves: 'Save £50–100 today', estimatedSavingsMin: 50, estimatedSavingsMax: 100,
    emoji: '🪣', quickWin: true, skillPoints: 20, popularityScore: 88,
    searchTerms: ['hole in wall', 'wall hole', 'plaster hole', 'fill wall crack', 'crack in wall', 'hole in plaster', 'fill hole plaster', 'wall filler'],
    description: 'Whether it\'s a nail hole or a doorknob dent, filling a wall is beginner-friendly. A £3 tub of filler and 20 minutes is all you need.',
  },
  {
    slug: 'fit-a-curtain-pole', title: 'Fit a curtain pole',
    time: '45 mins', timeMinutes: 45, cost: '£0–15', level: 'Beginner', category: 'Fitting',
    href: '/guides/fit-a-curtain-pole', difficulty: 2,
    saves: 'Save £50–80 today', estimatedSavingsMin: 50, estimatedSavingsMax: 80,
    emoji: '🪟', skillPoints: 20, popularityScore: 40,
    searchTerms: ['curtain rail', 'hang curtains', 'curtain rod', 'fit curtains', 'mount curtain pole', 'install curtain rail'],
  },
  {
    slug: 'change-a-lightbulb', title: 'Change a lightbulb',
    time: '5 mins', timeMinutes: 5, cost: '£5–15', level: 'Beginner', category: 'Electrics',
    href: '/guides/change-a-lightbulb', difficulty: 1,
    saves: 'Save £60–100 today', estimatedSavingsMin: 60, estimatedSavingsMax: 100,
    emoji: '💡', ukSpecific: true, quickWin: true, skillPoints: 10, popularityScore: 13,
    searchTerms: ['replace lightbulb', 'light not working', 'bulb blown', 'new bulb', 'bayonet bulb', 'e27 bulb', 'ceiling light bulb'],
  },
  {
    slug: 'fix-a-running-toilet', title: 'Fix a running toilet',
    time: '1 hour', timeMinutes: 60, cost: '£10–25', level: 'Beginner', category: 'Plumbing',
    href: '/guides/fix-a-running-toilet', difficulty: 3,
    saves: 'Save £80–150 today', estimatedSavingsMin: 80, estimatedSavingsMax: 150,
    emoji: '🚽', ukSpecific: true, skillPoints: 30, popularityScore: 95,
    searchTerms: ['toilet running', 'toilet constantly running', "toilet won't stop filling", 'toilet leak', 'leaking toilet', 'toilet water running', 'phantom flush', 'toilet keeps running', 'running toilet'],
    description: 'A running toilet wastes up to 400 litres a day — that\'s £150–300 extra on your water bill every year. A £10 part fixes it in under an hour.',
  },
  {
    slug: 'fix-a-leaking-pipe-joint', title: 'Fix a leaking pipe joint',
    time: '30 mins', timeMinutes: 30, cost: '£3–8', level: 'Beginner', category: 'Plumbing',
    href: '/guides/fix-a-leaking-pipe-joint', difficulty: 2,
    saves: 'Save £60–120 today', estimatedSavingsMin: 60, estimatedSavingsMax: 120,
    emoji: '🔧', ukSpecific: true, skillPoints: 20, popularityScore: 33,
    searchTerms: ['leaking pipe', 'pipe joint leak', 'burst pipe joint', 'pipe dripping', 'water pipe leak', 'copper pipe joint', 'pipe fitting leak'],
  },
  {
    slug: 'replace-a-toilet-seat', title: 'Replace a toilet seat',
    time: '20 mins', timeMinutes: 20, cost: '£15–40', level: 'Beginner', category: 'Plumbing',
    href: '/guides/replace-a-toilet-seat', difficulty: 1,
    saves: 'Save £40–80 today', estimatedSavingsMin: 40, estimatedSavingsMax: 80,
    emoji: '🚽', quickWin: true, skillPoints: 10, popularityScore: 62,
    searchTerms: ['toilet seat broken', 'new toilet seat', 'toilet seat replacement', 'fit toilet seat', 'replace toilet seat'],
  },
  {
    slug: 'fix-low-water-pressure', title: 'Fix low water pressure',
    time: '30 mins', timeMinutes: 30, cost: 'Free–£10', level: 'Beginner', category: 'Plumbing',
    href: '/guides/fix-low-water-pressure', difficulty: 1,
    saves: 'Save £60–100 today', estimatedSavingsMin: 60, estimatedSavingsMax: 100,
    emoji: '💧', ukSpecific: true, skillPoints: 10, popularityScore: 68,
    searchTerms: ['no water pressure', 'low pressure shower', 'weak water flow', 'poor water pressure', 'water pressure low', 'low shower pressure'],
  },
  {
    slug: 'unblock-a-toilet', title: 'Unblock a toilet',
    time: '20 mins', timeMinutes: 20, cost: 'Free–£12', level: 'Beginner', category: 'Plumbing',
    href: '/guides/unblock-a-toilet', difficulty: 1,
    saves: 'Save £60–120 today', estimatedSavingsMin: 60, estimatedSavingsMax: 120,
    emoji: '🚽', quickWin: true, skillPoints: 10, popularityScore: 84,
    searchTerms: ['blocked toilet', "toilet won't flush", 'toilet clogged', 'toilet blocked', 'plunge toilet', 'toilet overflow'],
  },
  {
    slug: 'replace-a-shower-head', title: 'Replace a shower head',
    time: '15 mins', timeMinutes: 15, cost: '£10–40', level: 'Beginner', category: 'Plumbing',
    href: '/guides/replace-a-shower-head', difficulty: 1,
    saves: 'Save £40–80 today', estimatedSavingsMin: 40, estimatedSavingsMax: 80,
    emoji: '🚿', quickWin: true, skillPoints: 10, popularityScore: 45,
    searchTerms: ['shower head', 'new shower head', 'shower head replacement', 'shower not working', 'shower pressure', 'shower head change'],
  },
  {
    slug: 'turn-off-water-mains', title: 'Turn off your water mains',
    time: '5 mins', timeMinutes: 5, cost: 'Free', level: 'Beginner', category: 'Plumbing',
    href: '/guides/turn-off-water-mains', difficulty: 1,
    saves: 'Prevents flood damage', estimatedSavingsMin: 0, estimatedSavingsMax: 0,
    emoji: '🚰', quickWin: true, skillPoints: 10, popularityScore: 28,
    searchTerms: ['turn off water', 'stopcock', 'water mains', 'emergency water shutoff', 'flood water', 'isolate water supply'],
  },
  {
    slug: 'repressurise-a-boiler', title: 'Repressurise a boiler',
    time: '10 mins', timeMinutes: 10, cost: 'Free', level: 'Beginner', category: 'Heating',
    href: '/guides/repressurise-a-boiler', difficulty: 1,
    saves: 'Save £50–80 today', estimatedSavingsMin: 50, estimatedSavingsMax: 80,
    emoji: '🔥', ukSpecific: true, quickWin: true, skillPoints: 10, popularityScore: 98,
    searchTerms: ['boiler pressure', 'boiler low pressure', 'repressurise boiler', 'boiler pressure low', 'add pressure boiler', 'increase boiler pressure', 'boiler pressure drop', 'boiler pressure 0', 'boiler pressure 1', 'combi boiler pressure'],
    description: 'UK boilers lose pressure over time — this is the single most common boiler call-out. Takes 10 minutes, costs nothing, and you never need an engineer for this.',
  },
  {
    slug: 'fix-a-cold-radiator', title: 'Fix a cold radiator',
    time: '20 mins', timeMinutes: 20, cost: 'Free–£3', level: 'Beginner', category: 'Heating',
    href: '/guides/fix-a-cold-radiator', difficulty: 1,
    saves: 'Save £50–80 today', estimatedSavingsMin: 50, estimatedSavingsMax: 80,
    emoji: '♨️', ukSpecific: true, quickWin: true, skillPoints: 10, popularityScore: 82,
    searchTerms: ['cold radiator', 'radiator not working', 'radiator cold', 'radiator not hot', 'heating not working', 'radiator not heating', 'cold spots on radiator'],
  },
  {
    slug: 'replace-a-plug-fuse', title: 'Replace a plug fuse',
    time: '5 mins', timeMinutes: 5, cost: '£1–3', level: 'Beginner', category: 'Electrics',
    href: '/guides/replace-a-plug-fuse', difficulty: 1,
    saves: 'Save £30–60 today', estimatedSavingsMin: 30, estimatedSavingsMax: 60,
    emoji: '🔌', ukSpecific: true, quickWin: true, skillPoints: 10, popularityScore: 70,
    searchTerms: ['plug fuse', 'fuse blown', 'plug not working', 'replace fuse', '13 amp fuse', 'fuse in plug', 'appliance not working'],
  },
  {
    slug: 'reset-a-tripped-circuit-breaker', title: 'Reset a tripped circuit breaker',
    time: '10 mins', timeMinutes: 10, cost: 'Free', level: 'Beginner', category: 'Electrics',
    href: '/guides/reset-a-tripped-circuit-breaker', difficulty: 1,
    saves: 'Save £40–60 today', estimatedSavingsMin: 40, estimatedSavingsMax: 60,
    emoji: '⚡', quickWin: true, skillPoints: 10, popularityScore: 85,
    searchTerms: ['tripped fuse', 'power cut', 'fuse box tripped', 'breaker tripped', 'electricity tripped', 'no power', 'lights off', 'fuse tripped', 'circuit breaker'],
  },
  {
    slug: 'replace-a-light-switch', title: 'Replace a light switch',
    time: '30 mins', timeMinutes: 30, cost: '£5–15', level: 'Beginner', category: 'Electrics',
    href: '/guides/replace-a-light-switch', difficulty: 2,
    saves: 'Save £60–100 today', estimatedSavingsMin: 60, estimatedSavingsMax: 100,
    emoji: '💡', ukSpecific: true, skillPoints: 20, popularityScore: 52,
    searchTerms: ['light switch broken', 'replace switch', 'new light switch', 'switch not working', 'light switch replacement'],
  },
  {
    slug: 'fix-a-doorbell', title: 'Fix a doorbell',
    time: '30 mins', timeMinutes: 30, cost: '£3–25', level: 'Beginner', category: 'Electrics',
    href: '/guides/fix-a-doorbell', difficulty: 1,
    saves: 'Save £40–80 today', estimatedSavingsMin: 40, estimatedSavingsMax: 80,
    emoji: '🔔', skillPoints: 20, popularityScore: 38,
    searchTerms: ['doorbell not working', 'broken doorbell', 'doorbell repair', 'fix doorbell', 'wired doorbell', 'doorbell button'],
  },
  {
    slug: 'fix-a-squeaky-floorboard', title: 'Fix a squeaky floorboard',
    time: '20 mins', timeMinutes: 20, cost: '£2–8', level: 'Beginner', category: 'Carpentry',
    href: '/guides/fix-a-squeaky-floorboard', difficulty: 1,
    saves: 'Save £40–60 today', estimatedSavingsMin: 40, estimatedSavingsMax: 60,
    emoji: '🪵', quickWin: true, skillPoints: 10, popularityScore: 58,
    searchTerms: ['squeaky floor', 'creaky floorboard', 'noisy floorboard', 'floor squeak', 'creaky floor', 'floorboard noise'],
  },
  {
    slug: 'fix-a-sticking-door', title: 'Fix a sticking door',
    time: '45 mins', timeMinutes: 45, cost: 'Free–£4', level: 'Beginner', category: 'Carpentry',
    href: '/guides/fix-a-sticking-door', difficulty: 2,
    saves: 'Save £50–80 today', estimatedSavingsMin: 50, estimatedSavingsMax: 80,
    emoji: '🚪', skillPoints: 20, popularityScore: 75,
    searchTerms: ["door won't close", 'door sticking', 'door jams', 'stiff door', 'door rubbing', 'door hard to open', 'door dragging'],
  },
  {
    slug: 'fix-a-sticking-drawer', title: 'Fix a sticking drawer',
    time: '15 mins', timeMinutes: 15, cost: 'Free–£3', level: 'Beginner', category: 'Carpentry',
    href: '/guides/fix-a-sticking-drawer', difficulty: 1,
    saves: 'Save £30–50 today', estimatedSavingsMin: 30, estimatedSavingsMax: 50,
    emoji: '🗄️', quickWin: true, skillPoints: 10, popularityScore: 12,
    searchTerms: ["drawer won't open", 'drawer stuck', 'stiff drawer', 'drawer jams', 'drawer hard to open'],
  },
  {
    slug: 'hang-a-picture-frame', title: 'Hang a picture frame properly',
    time: '20 mins', timeMinutes: 20, cost: '£2–6', level: 'Beginner', category: 'Carpentry',
    href: '/guides/hang-a-picture-frame', difficulty: 1,
    saves: 'Save £30–60 today', estimatedSavingsMin: 30, estimatedSavingsMax: 60,
    emoji: '🖼️', quickWin: true, skillPoints: 10, popularityScore: 60,
    searchTerms: ['hang picture', 'picture on wall', 'mount picture', 'hang painting', 'wall art', 'picture hook', 'hang photo'],
  },
  {
    slug: 'fix-a-broken-cabinet-hinge', title: 'Fix a broken cabinet hinge',
    time: '20 mins', timeMinutes: 20, cost: 'Free–£10', level: 'Beginner', category: 'Carpentry',
    href: '/guides/fix-a-broken-cabinet-hinge', difficulty: 1,
    saves: 'Save £30–60 today', estimatedSavingsMin: 30, estimatedSavingsMax: 60,
    emoji: '🔧', quickWin: true, skillPoints: 10, popularityScore: 43,
    searchTerms: ['cabinet hinge', 'door hinge broken', 'kitchen door hinge', 'cupboard door broken', 'kitchen cupboard hinge', 'hinge repair'],
  },
  {
    slug: 'fill-and-sand-a-wall', title: 'Fill and sand a wall',
    time: '45 mins', timeMinutes: 45, cost: '£5–10', level: 'Beginner', category: 'Decorating',
    href: '/guides/fill-and-sand-a-wall', difficulty: 2,
    saves: 'Save £50–100 today', estimatedSavingsMin: 50, estimatedSavingsMax: 100,
    emoji: '🪣', skillPoints: 20, popularityScore: 25,
    searchTerms: ['sand wall', 'smooth wall', 'prepare wall for painting', 'wall repair', 'sanding walls', 'wall preparation'],
  },
  {
    slug: 'tile-a-splashback', title: 'Tile a splashback',
    time: 'Half a day', timeMinutes: 240, cost: '£30–80', level: 'Intermediate', category: 'Decorating',
    href: '/guides/tile-a-splashback', difficulty: 3,
    saves: 'Save £150–300 today', estimatedSavingsMin: 150, estimatedSavingsMax: 300,
    emoji: '🧱', skillPoints: 30, popularityScore: 15,
    searchTerms: ['kitchen tiles', 'bathroom tiles', 'tile splashback', 'wall tiles', 'grouting tiles', 'lay tiles'],
  },
  {
    slug: 'strip-wallpaper', title: 'Strip wallpaper',
    time: 'Half a day', timeMinutes: 240, cost: '£12–25', level: 'Beginner', category: 'Decorating',
    href: '/guides/strip-wallpaper', difficulty: 2,
    saves: 'Save £100–200 today', estimatedSavingsMin: 100, estimatedSavingsMax: 200,
    emoji: '🖼️', skillPoints: 20, popularityScore: 28,
    searchTerms: ['remove wallpaper', 'wallpaper off', 'stripping walls', 'wallpaper removal', 'take off wallpaper'],
  },
  {
    slug: 'repair-a-ceiling-crack', title: 'Repair a crack in a ceiling',
    time: '1 hour', timeMinutes: 60, cost: '£6–22', level: 'Beginner', category: 'Decorating',
    href: '/guides/repair-a-ceiling-crack', difficulty: 2,
    saves: 'Save £80–150 today', estimatedSavingsMin: 80, estimatedSavingsMax: 150,
    emoji: '🏠', skillPoints: 20, popularityScore: 55,
    searchTerms: ['crack in ceiling', 'ceiling crack', 'ceiling repair', 'ceiling plaster crack', 'plaster crack', 'hairline crack ceiling'],
  },
  {
    slug: 'boiler-breakdown', title: 'What to do if your boiler breaks down',
    time: '30 mins', timeMinutes: 30, cost: 'Free', level: 'Beginner', category: 'Heating',
    href: '/guides/boiler-breakdown', difficulty: 1,
    saves: 'Save £100–300 today', estimatedSavingsMin: 100, estimatedSavingsMax: 300,
    emoji: '🔥', ukSpecific: true, skillPoints: 10, popularityScore: 70,
    searchTerms: ['boiler broken', 'no heating', 'boiler not working', 'no hot water boiler', 'boiler fault', 'boiler stopped working'],
  },
  {
    slug: 'turn-off-electricity-fuse-box', title: 'Turn off your electricity at the fuse box',
    time: '5 mins', timeMinutes: 5, cost: 'Free', level: 'Beginner', category: 'Electrics',
    href: '/guides/turn-off-electricity-fuse-box', difficulty: 1,
    saves: 'Essential safety knowledge', estimatedSavingsMin: 0, estimatedSavingsMax: 0,
    emoji: '⚡', quickWin: true, skillPoints: 10, popularityScore: 18,
    searchTerms: ['turn off electricity', 'fuse box', 'consumer unit', 'electric off', 'switch off power', 'isolate electricity'],
  },
  {
    slug: 'read-your-energy-meter', title: 'Read your energy meter',
    time: '5 mins', timeMinutes: 5, cost: 'Free', level: 'Beginner', category: 'General',
    href: '/guides/read-your-energy-meter', difficulty: 1,
    saves: 'Prevents overcharging', estimatedSavingsMin: 0, estimatedSavingsMax: 0,
    emoji: '📊', ukSpecific: true, quickWin: true, skillPoints: 10, popularityScore: 20,
    searchTerms: ['energy meter', 'gas meter', 'electricity meter', 'meter reading', 'smart meter', 'submit meter reading'],
  },
  {
    slug: 'draft-proof-door-window', title: 'Draft proof a door or window',
    time: '30 mins', timeMinutes: 30, cost: '£8–20', level: 'Beginner', category: 'General',
    href: '/guides/draft-proof-door-window', difficulty: 1,
    saves: 'Save £50–150 per year', estimatedSavingsMin: 50, estimatedSavingsMax: 150,
    emoji: '🌬️', ukSpecific: true, skillPoints: 10, popularityScore: 50,
    searchTerms: ['draught proofing', 'drafty door', 'cold coming in', 'draught excluder', 'insulate door', 'draughty window', 'cold draft', 'seal door gap'],
  },
  {
    slug: 'replace-a-smoke-alarm-battery', title: 'Replace a smoke alarm battery',
    time: '5 mins', timeMinutes: 5, cost: '£3–5', level: 'Beginner', category: 'Electrics',
    href: '/guides/replace-a-smoke-alarm-battery', difficulty: 1,
    saves: 'Keeps your home protected', estimatedSavingsMin: 0, estimatedSavingsMax: 0,
    emoji: '🔔', quickWin: true, skillPoints: 10, popularityScore: 48,
    searchTerms: ['smoke alarm battery', 'smoke detector beeping', 'replace smoke alarm battery', 'fire alarm battery', 'smoke alarm chirping'],
  },
  {
    slug: 'install-a-smart-thermostat', title: 'Install a smart thermostat',
    time: '1–2 hours', timeMinutes: 90, cost: '£100–250', level: 'Intermediate', category: 'Electrics',
    href: '/guides/install-a-smart-thermostat', difficulty: 3,
    saves: 'Save £150–300/year', estimatedSavingsMin: 150, estimatedSavingsMax: 300,
    emoji: '🌡️', ukSpecific: true, skillPoints: 30, popularityScore: 30,
    searchTerms: ['smart thermostat', 'nest thermostat', 'hive thermostat', 'smart heating control', 'install thermostat', 'wireless thermostat'],
  },
  {
    slug: 'bleed-all-radiators', title: 'Bleed all radiators',
    time: '1 hour', timeMinutes: 60, cost: '£1–3', level: 'Beginner', category: 'Heating',
    href: '/guides/bleed-all-radiators', difficulty: 1,
    saves: 'Save £80–150 today', estimatedSavingsMin: 80, estimatedSavingsMax: 150,
    emoji: '🔧', ukSpecific: true, skillPoints: 10, popularityScore: 30,
    searchTerms: ['bleed radiators', 'all radiators cold', 'heating system bleed', 'radiator air trapped', 'bleed all rads'],
  },
  {
    slug: 'fix-a-noisy-radiator', title: 'Fix a noisy radiator',
    time: '30 mins', timeMinutes: 30, cost: 'Free–£5', level: 'Beginner', category: 'Heating',
    href: '/guides/fix-a-noisy-radiator', difficulty: 1,
    saves: 'Save £50–80 today', estimatedSavingsMin: 50, estimatedSavingsMax: 80,
    emoji: '♨️', ukSpecific: true, skillPoints: 10, popularityScore: 65,
    searchTerms: ['noisy radiator', 'banging radiator', 'gurgling radiator', 'radiator noise', 'clicking radiator', 'ticking radiator', 'loud radiator'],
  },
  {
    slug: 'boiler-breakdown-what-to-do', title: 'Boiler breakdown: what to do',
    time: '30 mins', timeMinutes: 30, cost: 'Free', level: 'Beginner', category: 'Heating',
    href: '/guides/boiler-breakdown-what-to-do', difficulty: 1,
    saves: 'Save £100–300 today', estimatedSavingsMin: 100, estimatedSavingsMax: 300,
    emoji: '🔥', ukSpecific: true, skillPoints: 10, popularityScore: 73,
    searchTerms: ['boiler broken', 'no heating', 'boiler not working', 'no hot water', 'boiler fault', 'boiler stopped', 'heating broken', 'what to do boiler breakdown'],
  },
  {
    slug: 'fix-a-garden-tap', title: 'Fix a leaking garden tap',
    time: '30 mins', timeMinutes: 30, cost: '£3–10', level: 'Beginner', category: 'Outdoor',
    href: '/guides/fix-a-garden-tap', difficulty: 1,
    saves: 'Save £60–100 today', estimatedSavingsMin: 60, estimatedSavingsMax: 100,
    emoji: '🌿', ukSpecific: true, skillPoints: 10, popularityScore: 37,
    searchTerms: ['garden tap leak', 'outside tap', 'garden tap dripping', 'outdoor tap repair', 'leaking outside tap'],
  },
  {
    slug: 'unblock-a-gutter', title: 'Unblock a gutter',
    time: '1 hour', timeMinutes: 60, cost: '£15–30', level: 'Beginner', category: 'Outdoor',
    href: '/guides/unblock-a-gutter', difficulty: 1,
    saves: 'Save £80–150 today', estimatedSavingsMin: 80, estimatedSavingsMax: 150,
    emoji: '🏠', skillPoints: 10, popularityScore: 35,
    searchTerms: ['blocked gutter', 'gutter overflow', 'gutter blocked', 'gutter repair', 'water over gutter', 'overflowing gutter'],
  },
  {
    slug: 'fix-a-fence-panel', title: 'Fix a fence panel',
    time: '2 hours', timeMinutes: 120, cost: '£30–80', level: 'Beginner', category: 'Outdoor',
    href: '/guides/fix-a-fence-panel', difficulty: 2,
    saves: 'Save £100–200 today', estimatedSavingsMin: 100, estimatedSavingsMax: 200,
    emoji: '🔧', skillPoints: 20, popularityScore: 22,
    searchTerms: ['fence panel broken', 'fence repair', 'blown fence', 'fence fell down', 'replace fence panel', 'fence damage'],
  },
  {
    slug: 'lay-decking-boards', title: 'Lay decking boards',
    time: 'Full day', timeMinutes: 480, cost: '£200–600', level: 'Intermediate', category: 'Outdoor',
    href: '/guides/lay-decking-boards', difficulty: 3,
    saves: 'Save £500–1,500 today', estimatedSavingsMin: 500, estimatedSavingsMax: 1500,
    emoji: '🏗️', skillPoints: 30, popularityScore: 10,
    searchTerms: ['lay decking', 'garden decking', 'build decking', 'decking installation', 'decking boards'],
  },
  {
    slug: 'replace-a-bathroom-sink', title: 'Replace a bathroom sink',
    time: '1–2 hours', timeMinutes: 90, cost: '£40–130', level: 'Intermediate', category: 'Plumbing',
    href: '/guides/replace-a-bathroom-sink', difficulty: 3,
    saves: 'Save £150–300 today', estimatedSavingsMin: 150, estimatedSavingsMax: 300,
    emoji: '🚿', ukSpecific: true, skillPoints: 30, popularityScore: 62,
    searchTerms: ['replace bathroom sink', 'new bathroom basin', 'replace basin', 'fit bathroom sink', 'install basin', 'bathroom sink replacement', 'swap basin', 'replace bathroom basin'],
    description: 'Replace a bathroom basin yourself — disconnect the old one, fit the new bracket, and connect the pipework. The same process as a kitchen sink, in a smaller space.',
  },
  {
    slug: 'fit-a-towel-rail', title: 'Fit a towel rail (heated or standard)',
    time: '1 hour', timeMinutes: 60, cost: '£20–200', level: 'Beginner', category: 'Fitting',
    href: '/guides/fit-a-towel-rail', difficulty: 2,
    saves: 'Save £80–150 today', estimatedSavingsMin: 80, estimatedSavingsMax: 150,
    emoji: '🔧', ukSpecific: false, skillPoints: 20, popularityScore: 55,
    searchTerms: ['fit towel rail', 'towel rail installation', 'install towel rail', 'heated towel rail', 'mount towel rail', 'bathroom towel rail', 'towel rail bracket', 'electric towel rail'],
    description: 'Mount a standard or plug-in electric towel rail securely. The same drilling and fixing process as fitting a shelf — with the important extra step of scanning the bathroom wall first.',
  },
  {
    slug: 'paint-a-bathroom', title: 'Paint a bathroom properly (moisture-safe)',
    time: '1 day', timeMinutes: 480, cost: '£30–60', level: 'Beginner', category: 'Decorating',
    href: '/guides/paint-a-bathroom', difficulty: 2,
    saves: 'Save £200–400 today', estimatedSavingsMin: 200, estimatedSavingsMax: 400,
    emoji: '🎨', ukSpecific: false, skillPoints: 20, popularityScore: 68,
    searchTerms: ['paint bathroom', 'bathroom paint', 'moisture resistant paint', 'bathroom wall paint', 'paint bathroom walls', 'bathroom painting', 'anti mould bathroom paint', 'bathroom redecorate'],
    description: 'Paint a bathroom correctly using moisture-resistant paint and proper prep. Understand why bathrooms fail — and how to make a finish that lasts for years.',
  },
  {
    slug: 'tile-a-bathroom-floor', title: 'Tile a bathroom floor',
    time: '1–2 days', timeMinutes: 600, cost: '£80–200', level: 'Intermediate', category: 'Tiling',
    href: '/guides/tile-a-bathroom-floor', difficulty: 4,
    saves: 'Save £300–600 today', estimatedSavingsMin: 300, estimatedSavingsMax: 600,
    emoji: '🧱', ukSpecific: false, skillPoints: 40, popularityScore: 72,
    searchTerms: ['tile bathroom floor', 'bathroom floor tiles', 'lay bathroom tiles', 'floor tiling', 'tile a floor', 'bathroom floor tile installation', 'ceramic floor tiles', 'porcelain floor tiles'],
    description: 'Tile a bathroom floor from scratch — planning the layout, bedding tiles level, cutting edges, and grouting. The most impactful single upgrade to any bathroom.',
  },
  {
    slug: 'reseal-a-shower-or-bath', title: 'Reseal a shower or bath properly',
    time: '1–2 hours', timeMinutes: 75, cost: '£12–20', level: 'Beginner', category: 'Plumbing',
    href: '/guides/reseal-a-shower-or-bath', difficulty: 2,
    saves: 'Save £80–150 today', estimatedSavingsMin: 80, estimatedSavingsMax: 150,
    emoji: '🚿', ukSpecific: false, quickWin: false, skillPoints: 20, popularityScore: 78,
    searchTerms: ['reseal bath', 'reseal shower', 'bath sealant', 'shower sealant', 'replace bath sealant', 'bathroom silicone', 'bath silicone sealant', 'mouldy bath sealant', 'renew bath seal'],
    description: 'Failed sealant lets water into walls — one of the most common causes of bathroom damage. Remove the old bead, clean the surface, and apply a professional finish in two hours.',
  },
]

/** Lookup map for fast slug → guide access */
export const GUIDE_BY_SLUG: Record<string, Guide> = Object.fromEntries(
  ALL_GUIDES.map(g => [g.slug, g])
)

/** The guide with the highest popularityScore — used as the homepage "Start here" feature */
export const MOST_COMMON_GUIDE: Guide = ALL_GUIDES.reduce((best, g) =>
  (g.popularityScore ?? 0) > (best.popularityScore ?? 0) ? g : best
)

// ─── Search ────────────────────────────────────────────────────────────────────

/**
 * Search ALL_GUIDES against a query string.
 *
 * Pass 1 — direct: substring match on title, category, or any searchTerm.
 * Pass 2 — fuzzy:  token overlap when Pass 1 returns nothing.
 *                  Tokens shorter than 3 chars are ignored to avoid noise.
 *
 * Results are sorted by popularityScore descending within each pass.
 * Returns { guides, fuzzy } so callers can show "Did you mean" when fuzzy===true.
 */
export function searchGuides(query: string): { guides: Guide[]; fuzzy: boolean } {
  const q = query.toLowerCase().trim()
  if (!q) {
    return {
      guides: [...ALL_GUIDES].sort((a, b) => (b.popularityScore ?? 0) - (a.popularityScore ?? 0)),
      fuzzy: false,
    }
  }

  const byPopularity = (a: Guide, b: Guide) => (b.popularityScore ?? 0) - (a.popularityScore ?? 0)

  // Pass 1: direct substring match (title, category, searchTerms)
  const direct = ALL_GUIDES.filter(g =>
    g.title.toLowerCase().includes(q) ||
    g.category.toLowerCase().includes(q) ||
    (g.searchTerms ?? []).some(t => t.toLowerCase().includes(q) || q.includes(t.toLowerCase()))
  ).sort(byPopularity)

  if (direct.length > 0) return { guides: direct, fuzzy: false }

  // Pass 2: token-based fuzzy — split query into words, count hits per guide
  const tokens = q.split(/\s+/).filter(t => t.length >= 3)
  if (tokens.length === 0) return { guides: [], fuzzy: false }

  const scored = ALL_GUIDES.flatMap(g => {
    const haystack = [g.title, g.category, ...(g.searchTerms ?? [])].join(' ').toLowerCase()
    const hits = tokens.filter(t => haystack.includes(t)).length
    return hits > 0 ? [{ guide: g, hits }] : []
  }).sort((a, b) => b.hits - a.hits || byPopularity(a.guide, b.guide))

  return { guides: scored.map(x => x.guide), fuzzy: scored.length > 0 }
}

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
  'replace-a-bathroom-sink':        ['spanner', 'screwdriver', 'ptfe-tape'],
  'fit-a-towel-rail':               ['drill', 'screwdriver', 'spirit-level'],
  'paint-a-bathroom':               ['filling-knife', 'paintbrush', 'roller-tray', 'masking-tape', 'sandpaper'],
  'tile-a-bathroom-floor':          ['spirit-level', 'tape-measure', 'rubber-gloves'],
  'reseal-a-shower-or-bath':        ['sealant-gun', 'masking-tape', 'utility-knife'],
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
