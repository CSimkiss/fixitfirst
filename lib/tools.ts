export type Tool = {
  id: string
  name: string
  category: string
}

export const ALL_TOOLS: Tool[] = [
  // Hand tools
  { id: 'screwdriver-flat', name: 'Flat-head screwdriver', category: 'Hand tools' },
  { id: 'screwdriver-cross', name: 'Cross-head screwdriver', category: 'Hand tools' },
  { id: 'adjustable-spanner', name: 'Adjustable spanner', category: 'Hand tools' },
  { id: 'hammer', name: 'Hammer', category: 'Hand tools' },
  { id: 'pliers', name: 'Pliers', category: 'Hand tools' },
  // Power tools
  { id: 'drill', name: 'Power drill', category: 'Power tools' },
  { id: 'drill-bits', name: 'Drill bits (masonry & wood)', category: 'Power tools' },
  // Measuring
  { id: 'spirit-level', name: 'Spirit level', category: 'Measuring' },
  { id: 'tape-measure', name: 'Tape measure', category: 'Measuring' },
  // Safety & access
  { id: 'cable-detector', name: 'Pipe & cable detector', category: 'Safety & access' },
  { id: 'rubber-gloves', name: 'Rubber gloves', category: 'Safety & access' },
  { id: 'step-ladder', name: 'Step ladder or stable chair', category: 'Safety & access' },
  // Decorating
  { id: 'filling-knife', name: 'Filling knife', category: 'Decorating' },
  { id: 'paintbrush', name: 'Angled paintbrush (2")', category: 'Decorating' },
  { id: 'roller-tray', name: 'Paint roller & tray', category: 'Decorating' },
  // Plumbing
  { id: 'bleed-key', name: 'Radiator bleed key', category: 'Plumbing' },
  { id: 'plunger', name: 'Cup plunger', category: 'Plumbing' },
  { id: 'drain-snake', name: 'Drain snake', category: 'Plumbing' },
]

export const GUIDE_TOOLS: Record<string, string[]> = {
  'fix-a-dripping-tap': ['adjustable-spanner', 'screwdriver-flat'],
  'put-up-shelves': ['drill', 'drill-bits', 'spirit-level', 'tape-measure', 'cable-detector', 'screwdriver-cross'],
  'bleed-a-radiator': ['bleed-key'],
  'change-a-lightbulb': ['step-ladder'],
  'fill-a-hole-in-a-wall': ['filling-knife'],
  'fit-a-curtain-pole': ['drill', 'drill-bits', 'spirit-level', 'tape-measure', 'cable-detector', 'screwdriver-cross'],
  'fix-a-running-toilet': ['screwdriver-flat'],
  'paint-a-room': ['filling-knife', 'paintbrush', 'roller-tray'],
  'unblock-a-drain': ['plunger', 'rubber-gloves'],

  'fix-a-leaking-pipe-joint': ['adjustable-spanner'],
  'replace-a-toilet-seat': ['screwdriver-cross', 'pliers'],
  'fix-low-water-pressure': ['adjustable-spanner'],
  'unblock-a-toilet': ['plunger', 'rubber-gloves'],
  'replace-a-shower-head': ['adjustable-spanner'],
  'turn-off-water-mains': [],
  'repressurise-a-boiler': [],
  'fix-a-cold-radiator': ['bleed-key'],
}

export const TOOLS_STORAGE_KEY = 'fixitfirst-owned-tools'
