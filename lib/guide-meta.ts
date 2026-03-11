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
  'fix-a-leaking-pipe-joint': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'Similar difficulty to fixing a dripping tap — the main skill is knowing when to stop tightening',
    completedCount: 1842,
    renterWarning: 'Landlords are legally responsible for fixing leaking pipes. Report it in writing first. If there is a risk of water damage and they do not act within 24 hours, contact Environmental Health.',
  },
  'replace-a-toilet-seat': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'One of the easiest jobs on the site — easier than bleeding a radiator',
    completedCount: 2891,
    renterWarning: 'Landlords are responsible for providing a working toilet seat. Report a broken seat in writing. Replacing it yourself is usually fine — but keep the receipt and tell your landlord, so it is not deducted from your deposit.',
  },
  'fix-low-water-pressure': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'Easier than fixing a dripping tap — mostly investigation rather than physical work',
    completedCount: 1347,
    renterWarning: 'If low pressure is a whole-house issue, it is the landlord\'s responsibility to investigate and fix. Report it in writing. For single-tap issues, cleaning an aerator is a reasonable tenant repair.',
  },
  'unblock-a-toilet': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'Similar to unblocking a drain — straightforward once you have the right plunger',
    completedCount: 3421,
    renterWarning: 'Landlords are responsible for maintaining drainage. However, if you caused the blockage (flushing wet wipes, nappies, etc.) you may be liable. Most standard blockages from normal use are the landlord\'s responsibility.',
  },
  'replace-a-shower-head': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'One of the easiest plumbing jobs — similar to changing a lightbulb',
    completedCount: 4103,
    renterWarning: 'A like-for-like shower head replacement is reasonable maintenance in most tenancies. Keep the old head and receipt, and let your landlord know if it was damaged to avoid deposit issues.',
  },
  'turn-off-water-mains': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'The easiest guide on the site — but one of the most important things to know',
    completedCount: 5612,
    renterWarning: 'Ask your landlord or letting agent where the stop cock is when you move in — this is a basic piece of information they should provide. Also ask about the external stop cock location.',
  },
  'repressurise-a-boiler': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'Easier than bleeding a radiator — just opening valves and watching a gauge',
    completedCount: 7823,
    renterWarning: 'Repressurising a boiler is normal maintenance you can do yourself. If you need to do it more than once a month, report it to your landlord in writing — a persistent pressure drop means a leak that is their responsibility to fix.',
  },
  'fix-a-cold-radiator': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'Similar to bleeding a radiator — this guide just covers more causes of the same problem',
    completedCount: 5234,
    renterWarning: 'Landlords are responsible for a functional heating system. Bleeding a radiator is reasonable self-maintenance. If a radiator is cold due to a faulty valve or sludge, report it in writing.',
  },
  'replace-a-plug-fuse': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'The easiest electrical job there is — no wiring involved',
    completedCount: 9241,
    renterWarning: 'Replacing a plug fuse is basic maintenance any tenant can do. If the appliance is one your landlord provided and it keeps blowing fuses, report it — a faulty appliance is their responsibility to replace.',
  },
  'reset-a-tripped-circuit-breaker': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'Easier than changing a lightbulb — just finding the box and flicking a switch',
    completedCount: 6187,
    renterWarning: 'If the circuit keeps tripping, report it to your landlord in writing — it may indicate a wiring fault that is their responsibility to investigate. Do not ignore recurring trips.',
  },
  'replace-a-light-switch': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'Slightly more involved than replacing a plug fuse — but still very manageable for a beginner',
    completedCount: 3028,
    renterWarning: 'Like-for-like switch replacement is generally acceptable, but always get your landlord\'s written agreement before doing any electrical work in a rented property. Keep a record of what you did.',
  },
  'fix-a-doorbell': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'Similar difficulty to replacing a plug fuse — mostly fault-finding rather than wiring',
    completedCount: 2143,
    renterWarning: 'A broken doorbell is the landlord\'s responsibility to repair. Report it in writing. Battery replacement is reasonable tenant maintenance; anything beyond that should be the landlord\'s cost.',
  },
  'fix-a-squeaky-floorboard': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'Similar to filling a hole in a wall — quick once you know the technique',
    completedCount: 1876,
    renterWarning: 'Report squeaky floorboards to your landlord in writing. Screwing down a floorboard is a minor repair — most landlords are fine with it, but get written permission before you start.',
  },
  'fix-a-sticking-door': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'Similar to filling a hole in a wall — methodical more than technical',
    completedCount: 2654,
    renterWarning: 'Sticking doors are the landlord\'s responsibility to fix. Report it in writing. Tightening a loose hinge screw is fine; sanding the door should have the landlord\'s agreement first.',
  },
  'fix-a-sticking-drawer': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'One of the easiest jobs on the site — no tools required in most cases',
    completedCount: 3312,
    renterWarning: 'Sticking drawers in fitted furniture are the landlord\'s responsibility. Wax lubrication is harmless and fine for any tenant to do. Sanding should be agreed with the landlord first.',
  },
  'hang-a-picture-frame': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'Similar to fitting a curtain pole — the measuring and levelling is the main skill',
    completedCount: 5108,
    renterWarning: 'Most tenancy agreements require written permission before drilling walls. Some landlords are relaxed about picture hooks; others are not. Ask before you drill. Use adhesive strips for lightweight frames to avoid the issue entirely.',
  },
  'fix-a-broken-cabinet-hinge': {
    lastUpdated: 'March 2025',
    difficultyComparison: 'Easier than fitting a curtain pole — no drilling required in most cases',
    completedCount: 2987,
    renterWarning: 'Cabinet hinges in a rented property are the landlord\'s responsibility to fix. Adjusting hinges is harmless maintenance; replacing a hinge is a minor repair your landlord should fund — report it in writing first.',
  },
}
