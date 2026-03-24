export type Tool = {
  id: string
  name: string
  category: string
  description?: string
}

export const ALL_TOOLS: Tool[] = [
  // Hand tools
  { id: 'screwdriver-flat',    name: 'Flat-head screwdriver',         category: 'Hand tools' },
  { id: 'screwdriver-cross',   name: 'Cross-head screwdriver',        category: 'Hand tools' },
  { id: 'adjustable-spanner',  name: 'Adjustable spanner',            category: 'Hand tools' },
  { id: 'hammer',              name: 'Hammer',                        category: 'Hand tools' },
  { id: 'pliers',              name: 'Pliers',                        category: 'Hand tools' },
  { id: 'allen-keys',          name: 'Allen keys (hex key set)',       category: 'Hand tools' },
  { id: 'adjustable-grips',    name: 'Adjustable grips / pipe grips', category: 'Hand tools' },
  { id: 'utility-knife',       name: 'Utility knife / Stanley knife', category: 'Hand tools' },
  { id: 'chisel',              name: 'Wood chisel',                   category: 'Hand tools' },
  { id: 'mallet',              name: 'Mallet',                        category: 'Hand tools' },
  // Power tools
  { id: 'drill',               name: 'Power drill',                   category: 'Power tools' },
  { id: 'drill-bits',          name: 'Drill bits (masonry & wood)',   category: 'Power tools' },
  { id: 'jigsaw',              name: 'Jigsaw',                        category: 'Power tools' },
  { id: 'multitool',           name: 'Oscillating multitool',         category: 'Power tools' },
  // Measuring
  { id: 'spirit-level',        name: 'Spirit level',                  category: 'Measuring' },
  { id: 'tape-measure',        name: 'Tape measure',                  category: 'Measuring' },
  { id: 'stud-finder',         name: 'Stud finder / wall detector',   category: 'Measuring' },
  // Safety & access
  { id: 'cable-detector',      name: 'Pipe & cable detector',         category: 'Safety & access' },
  { id: 'rubber-gloves',       name: 'Rubber gloves',                 category: 'Safety & access' },
  { id: 'step-ladder',         name: 'Step ladder or stable chair',   category: 'Safety & access' },
  { id: 'torch',               name: 'Torch / head torch',            category: 'Safety & access' },
  { id: 'socket-tester',       name: 'Socket / voltage tester',       category: 'Safety & access' },
  // Decorating
  { id: 'filling-knife',       name: 'Filling knife',                 category: 'Decorating' },
  { id: 'paintbrush',          name: 'Angled paintbrush (2")',         category: 'Decorating' },
  { id: 'roller-tray',         name: 'Paint roller & tray',           category: 'Decorating' },
  { id: 'masking-tape',        name: 'Masking tape',                  category: 'Decorating' },
  { id: 'sandpaper',           name: 'Sandpaper (mixed grit)',         category: 'Decorating' },
  { id: 'sealant-gun',         name: 'Sealant / caulk gun',           category: 'Decorating' },
  // Plumbing
  { id: 'bleed-key',           name: 'Radiator bleed key',            category: 'Plumbing' },
  { id: 'plunger',             name: 'Cup plunger',                   category: 'Plumbing' },
  { id: 'drain-snake',         name: 'Drain snake',                   category: 'Plumbing' },
  { id: 'ptfe-tape',           name: 'PTFE tape',                     category: 'Plumbing' },
  { id: 'bucket',              name: 'Bucket',                        category: 'Plumbing' },
  { id: 'sponge-cloths',       name: 'Sponge / cloths',               category: 'Plumbing' },
]

// ─── Guide → tool requirements ───────────────────────────────────────────────
// Single source of truth for which tools each guide needs.
// Referenced by ToolsWarning (missing-tool alerts) and TOOL_GUIDE_COUNTS.

export const GUIDE_TOOLS: Record<string, string[]> = {
  // Plumbing
  'strip-out-bathroom':        ['utility-knife', 'adjustable-spanner', 'screwdriver-flat', 'screwdriver-cross', 'rubber-gloves', 'bucket'],
  'prep-bathroom-plumbing':    ['adjustable-spanner', 'bucket', 'rubber-gloves', 'sponge-cloths', 'ptfe-tape'],
  'prepare-walls-for-tiling':  ['filling-knife', 'sandpaper', 'spirit-level'],
  'fix-a-dripping-tap':        ['adjustable-spanner', 'screwdriver-flat', 'ptfe-tape'],
  'fix-a-leaking-pipe-joint':  ['adjustable-spanner', 'ptfe-tape'],
  'replace-a-toilet-seat':     ['screwdriver-cross', 'pliers'],
  'fix-low-water-pressure':    ['adjustable-spanner'],
  'unblock-a-drain':           ['plunger', 'rubber-gloves', 'bucket'],
  'unblock-a-toilet':          ['plunger', 'rubber-gloves', 'bucket'],
  'replace-a-shower-head':     ['adjustable-spanner', 'ptfe-tape'],
  'fix-a-running-toilet':      ['screwdriver-flat'],
  'turn-off-water-mains':      [],
  'fix-a-garden-tap':          ['adjustable-spanner', 'screwdriver-flat', 'ptfe-tape'],
  'unblock-a-gutter':          ['step-ladder', 'rubber-gloves', 'bucket'],

  // Heating
  'bleed-a-radiator':          ['bleed-key'],
  'fix-a-cold-radiator':       ['bleed-key'],
  'fix-a-noisy-radiator':      ['adjustable-spanner', 'bleed-key'],
  'bleed-all-radiators':       ['bleed-key'],
  'repressurise-a-boiler':     [],
  'boiler-breakdown':          [],
  'boiler-breakdown-what-to-do': [],

  // Electrics
  'change-a-lightbulb':        ['step-ladder'],
  'replace-a-plug-fuse':       ['screwdriver-flat'],
  'reset-a-tripped-circuit-breaker': [],
  'replace-a-light-switch':    ['screwdriver-flat', 'screwdriver-cross', 'cable-detector', 'socket-tester'],
  'fix-a-doorbell':            ['screwdriver-cross'],
  'replace-a-smoke-alarm-battery': [],
  'read-your-energy-meter':    [],
  'turn-off-electricity-fuse-box': [],
  'install-a-smart-thermostat': ['screwdriver-flat', 'screwdriver-cross', 'cable-detector', 'socket-tester'],

  // Carpentry
  'put-up-shelves':            ['drill', 'drill-bits', 'spirit-level', 'tape-measure', 'cable-detector', 'screwdriver-cross'],
  'fit-a-curtain-pole':        ['drill', 'drill-bits', 'spirit-level', 'tape-measure', 'cable-detector', 'screwdriver-cross'],
  'hang-a-picture-frame':      ['hammer', 'tape-measure', 'spirit-level', 'cable-detector'],
  'fix-a-squeaky-floorboard':  ['drill', 'cable-detector'],
  'fix-a-sticking-door':       ['screwdriver-flat', 'sandpaper'],
  'fix-a-sticking-drawer':     [],
  'fix-a-broken-cabinet-hinge': ['screwdriver-cross'],

  // Decorating
  'paint-a-room':              ['filling-knife', 'paintbrush', 'roller-tray', 'masking-tape', 'sandpaper'],
  'fill-a-hole-in-a-wall':     ['filling-knife', 'sandpaper'],
  'fill-and-sand-a-wall':      ['filling-knife', 'sandpaper'],
  'strip-wallpaper':           ['filling-knife', 'utility-knife', 'bucket', 'sponge-cloths'],
  'tile-a-splashback':         ['spirit-level', 'tape-measure', 'utility-knife', 'sealant-gun'],
  'repair-a-ceiling-crack':    ['filling-knife', 'step-ladder'],

  // Energy / general
  'draft-proof-door-window':   ['tape-measure'],

  // Outdoor
  'fix-a-fence-panel':         ['hammer', 'drill', 'tape-measure'],
  'lay-decking-boards':        ['drill', 'drill-bits', 'tape-measure', 'spirit-level', 'hammer', 'jigsaw'],
}

// ─── Derived: how many guides each tool appears in ───────────────────────────
// Used by ToolsOwned to show "Used in X guides" per tool.

export const TOOL_GUIDE_COUNTS: Record<string, number> = (() => {
  const counts: Record<string, number> = {}
  for (const toolIds of Object.values(GUIDE_TOOLS)) {
    for (const id of toolIds) {
      counts[id] = (counts[id] ?? 0) + 1
    }
  }
  return counts
})()

export const TOOLS_STORAGE_KEY = 'fixitfirst-owned-tools'
