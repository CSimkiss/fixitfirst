import type { Metadata } from 'next'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'All DIY Guides | FixItFirst',
  description: 'Browse all FixItFirst DIY guides — plumbing, electrics, decorating, heating and more. Step-by-step instructions written for complete beginners.',
}

type Guide = { title: string; time: string; cost: string; level: string; href: string; saves: string; difficulty: number }

// ─── Start Here ───────────────────────────────────────────────────────────────

const START_HERE: Guide[] = [
  { title: 'Fix a dripping tap',   time: '45 mins', cost: '£2–5',   level: 'Beginner', href: '/guides/fix-a-dripping-tap',  saves: 'Save £80–150 today',  difficulty: 2 },
  { title: 'Unblock a drain',      time: '20 mins', cost: 'Free',   level: 'Beginner', href: '/guides/unblock-a-drain',     saves: 'Save £60–120 today',  difficulty: 1 },
  { title: 'Fix a running toilet', time: '1 hour',  cost: '£10–25', level: 'Beginner', href: '/guides/fix-a-running-toilet',saves: 'Save £80–150 today',  difficulty: 3 },
]

// Guides that need only basic tools most people already own
const BASIC_TOOL_HREFS = new Set([
  '/guides/fix-a-dripping-tap',
  '/guides/unblock-a-drain',
  '/guides/fix-a-running-toilet',
  '/guides/change-a-lightbulb',
  '/guides/replace-a-plug-fuse',
  '/guides/reset-a-tripped-circuit-breaker',
  '/guides/fix-a-squeaky-floorboard',
  '/guides/fix-a-sticking-drawer',
  '/guides/repressurise-a-boiler',
  '/guides/fix-a-garden-tap',
  '/guides/read-your-energy-meter',
])

// The easiest starting guide per category — gets a "Start here" badge
const CATEGORY_STARTER_HREFS = new Set([
  '/guides/unblock-a-drain',          // Plumbing
  '/guides/change-a-lightbulb',       // Electrics
  '/guides/fix-a-sticking-drawer',    // Carpentry
  '/guides/fill-a-hole-in-a-wall',    // Decorating
  '/guides/repressurise-a-boiler',    // Heating
  '/guides/fix-a-garden-tap',         // Outdoor & Garden
  '/guides/read-your-energy-meter',   // General
])

// ─── Categories ───────────────────────────────────────────────────────────────

const CATEGORIES: { label: string; description: string; guides: Guide[] }[] = [
  {
    label: 'Plumbing',
    description: 'Most common household fixes — great place to start',
    guides: [
      { title: 'Fix a dripping tap',         time: '45 mins', cost: '£2–5',      level: 'Beginner', href: '/guides/fix-a-dripping-tap',         saves: 'Save £80–150 today',      difficulty: 2 },
      { title: 'Unblock a drain',            time: '20 mins', cost: 'Free',      level: 'Beginner', href: '/guides/unblock-a-drain',            saves: 'Save £60–120 today',      difficulty: 1 },
      { title: 'Fix a running toilet',       time: '1 hour',  cost: '£10–25',    level: 'Beginner', href: '/guides/fix-a-running-toilet',       saves: 'Save £80–150 today',      difficulty: 3 },
      { title: 'Fix a leaking pipe joint',   time: '30 mins', cost: '£3–8',      level: 'Beginner', href: '/guides/fix-a-leaking-pipe-joint',   saves: 'Save £60–120 today',      difficulty: 2 },
      { title: 'Replace a toilet seat',      time: '20 mins', cost: '£15–40',    level: 'Beginner', href: '/guides/replace-a-toilet-seat',      saves: 'Save £40–80 today',       difficulty: 1 },
      { title: 'Fix low water pressure',     time: '30 mins', cost: 'Free–£10',  level: 'Beginner', href: '/guides/fix-low-water-pressure',     saves: 'Save £60–100 today',      difficulty: 1 },
      { title: 'Unblock a toilet',           time: '20 mins', cost: 'Free–£12',  level: 'Beginner', href: '/guides/unblock-a-toilet',           saves: 'Save £60–120 today',      difficulty: 1 },
      { title: 'Replace a shower head',      time: '15 mins', cost: '£10–40',    level: 'Beginner', href: '/guides/replace-a-shower-head',      saves: 'Save £40–80 today',       difficulty: 1 },
      { title: 'Turn off your water mains',  time: '5 mins',  cost: 'Free',      level: 'Beginner', href: '/guides/turn-off-water-mains',       saves: 'Prevents flood damage',   difficulty: 1 },
    ],
  },
  {
    label: 'Electrics',
    description: 'Simple, safe fixes you can do yourself',
    guides: [
      { title: 'Change a lightbulb',                        time: '5 mins',    cost: '£5–15',    level: 'Beginner',     href: '/guides/change-a-lightbulb',                    saves: 'Save £60–100 today',         difficulty: 1 },
      { title: 'Replace a plug fuse',                       time: '5 mins',    cost: '£1–3',     level: 'Beginner',     href: '/guides/replace-a-plug-fuse',                   saves: 'Save £30–60 today',          difficulty: 1 },
      { title: 'Reset a tripped circuit breaker',           time: '10 mins',   cost: 'Free',     level: 'Beginner',     href: '/guides/reset-a-tripped-circuit-breaker',       saves: 'Save £40–60 today',          difficulty: 1 },
      { title: 'Replace a light switch',                    time: '30 mins',   cost: '£5–15',    level: 'Beginner',     href: '/guides/replace-a-light-switch',                saves: 'Save £60–100 today',         difficulty: 2 },
      { title: 'Fix a doorbell',                            time: '30 mins',   cost: '£3–25',    level: 'Beginner',     href: '/guides/fix-a-doorbell',                        saves: 'Save £40–80 today',          difficulty: 1 },
      { title: 'Replace a smoke alarm battery',             time: '5 mins',    cost: '£3–5',     level: 'Beginner',     href: '/guides/replace-a-smoke-alarm-battery',         saves: 'Keeps your home protected',  difficulty: 1 },
      { title: 'Install a smart thermostat',                time: '1–2 hours', cost: '£100–250', level: 'Intermediate', href: '/guides/install-a-smart-thermostat',            saves: 'Save £150–300/year',         difficulty: 3 },
      { title: 'Turn off your electricity at the fuse box', time: '5 mins',    cost: 'Free',     level: 'Beginner',     href: '/guides/turn-off-electricity-fuse-box',         saves: 'Essential safety knowledge', difficulty: 1 },
    ],
  },
  {
    label: 'Carpentry',
    description: 'Quick improvements around the home',
    guides: [
      { title: 'Put up shelves',               time: '1 hour',  cost: '£10–20',   level: 'Beginner', href: '/guides/put-up-shelves',               saves: 'Save £50–80 today',   difficulty: 3 },
      { title: 'Fit a curtain pole',           time: '45 mins', cost: '£0–15',    level: 'Beginner', href: '/guides/fit-a-curtain-pole',           saves: 'Save £50–80 today',   difficulty: 2 },
      { title: 'Fix a squeaky floorboard',     time: '20 mins', cost: '£2–8',     level: 'Beginner', href: '/guides/fix-a-squeaky-floorboard',     saves: 'Save £40–60 today',   difficulty: 1 },
      { title: 'Fix a sticking door',          time: '45 mins', cost: 'Free–£4',  level: 'Beginner', href: '/guides/fix-a-sticking-door',          saves: 'Save £50–80 today',   difficulty: 2 },
      { title: 'Fix a sticking drawer',        time: '15 mins', cost: 'Free–£3',  level: 'Beginner', href: '/guides/fix-a-sticking-drawer',        saves: 'Save £30–50 today',   difficulty: 1 },
      { title: 'Hang a picture frame properly',time: '20 mins', cost: '£2–6',     level: 'Beginner', href: '/guides/hang-a-picture-frame',         saves: 'Save £30–60 today',   difficulty: 1 },
      { title: 'Fix a broken cabinet hinge',   time: '20 mins', cost: 'Free–£10', level: 'Beginner', href: '/guides/fix-a-broken-cabinet-hinge',   saves: 'Save £30–60 today',   difficulty: 1 },
    ],
  },
  {
    label: 'Decorating',
    description: 'Freshen up your space without the cost',
    guides: [
      { title: 'Paint a room',                time: '1 day',      cost: '£30–60', level: 'Beginner',     href: '/guides/paint-a-room',             saves: 'Save £200–500 today', difficulty: 2 },
      { title: 'Fill a hole in a wall',       time: '30 mins',    cost: '£3–5',   level: 'Beginner',     href: '/guides/fill-a-hole-in-a-wall',    saves: 'Save £50–100 today',  difficulty: 2 },
      { title: 'Fill and sand a wall',        time: '45 mins',    cost: '£5–10',  level: 'Beginner',     href: '/guides/fill-and-sand-a-wall',     saves: 'Save £50–100 today',  difficulty: 2 },
      { title: 'Strip wallpaper',             time: 'Half a day', cost: '£12–25', level: 'Beginner',     href: '/guides/strip-wallpaper',          saves: 'Save £100–200 today', difficulty: 2 },
      { title: 'Tile a splashback',           time: 'Half a day', cost: '£30–80', level: 'Intermediate', href: '/guides/tile-a-splashback',        saves: 'Save £150–300 today', difficulty: 3 },
      { title: 'Repair a crack in a ceiling', time: '1 hour',     cost: '£6–22',  level: 'Beginner',     href: '/guides/repair-a-ceiling-crack',   saves: 'Save £80–150 today',  difficulty: 2 },
    ],
  },
  {
    label: 'Heating',
    description: 'Keep your home warm and energy bills down',
    guides: [
      { title: 'Bleed a radiator',                     time: '15 mins', cost: '£1–3',    level: 'Beginner', href: '/guides/bleed-a-radiator',              saves: 'Save £50–80 today',   difficulty: 1 },
      { title: 'Repressurise a boiler',                time: '10 mins', cost: 'Free',    level: 'Beginner', href: '/guides/repressurise-a-boiler',         saves: 'Save £50–80 today',   difficulty: 1 },
      { title: 'Fix a cold radiator',                  time: '20 mins', cost: 'Free–£3', level: 'Beginner', href: '/guides/fix-a-cold-radiator',           saves: 'Save £50–80 today',   difficulty: 1 },
      { title: 'Bleed all radiators',                  time: '1 hour',  cost: '£1–3',    level: 'Beginner', href: '/guides/bleed-all-radiators',           saves: 'Save £80–150 today',  difficulty: 1 },
      { title: 'Fix a noisy radiator',                 time: '30 mins', cost: 'Free–£5', level: 'Beginner', href: '/guides/fix-a-noisy-radiator',          saves: 'Save £50–80 today',   difficulty: 1 },
      { title: 'What to do if your boiler breaks down',time: '30 mins', cost: 'Free',    level: 'Beginner', href: '/guides/boiler-breakdown',              saves: 'Save £100–300 today', difficulty: 1 },
      { title: 'Boiler breakdown: what to do',         time: '30 mins', cost: 'Free',    level: 'Beginner', href: '/guides/boiler-breakdown-what-to-do',   saves: 'Save £100–300 today', difficulty: 1 },
    ],
  },
  {
    label: 'Outdoor & Garden',
    description: 'Fixes for outside your home',
    guides: [
      { title: 'Fix a leaking garden tap', time: '30 mins',  cost: '£3–10',    level: 'Beginner',     href: '/guides/fix-a-garden-tap',   saves: 'Save £60–100 today',    difficulty: 1 },
      { title: 'Unblock a gutter',         time: '1 hour',   cost: '£15–30',   level: 'Beginner',     href: '/guides/unblock-a-gutter',   saves: 'Save £80–150 today',    difficulty: 1 },
      { title: 'Fix a fence panel',        time: '2 hours',  cost: '£30–80',   level: 'Beginner',     href: '/guides/fix-a-fence-panel',  saves: 'Save £100–200 today',   difficulty: 2 },
      { title: 'Lay decking boards',       time: 'Full day', cost: '£200–600', level: 'Intermediate', href: '/guides/lay-decking-boards', saves: 'Save £500–1,500 today', difficulty: 3 },
    ],
  },
  {
    label: 'General',
    description: 'Essential knowledge for every homeowner',
    guides: [
      { title: 'Read your energy meter',       time: '5 mins',  cost: 'Free',  level: 'Beginner', href: '/guides/read-your-energy-meter',  saves: 'Prevents overcharging', difficulty: 1 },
      { title: 'Draft proof a door or window', time: '30 mins', cost: '£8–20', level: 'Beginner', href: '/guides/draft-proof-door-window', saves: 'Save £50–150 per year', difficulty: 1 },
    ],
  },
]

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <a href="/" className="text-sm text-gray-400 hover:text-orange-400 mb-4 inline-block">← Back to home</a>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">All guides</h1>
        <p className="text-gray-300 text-lg">Step-by-step fixes for real problems. Written for complete beginners.</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-12">

        {/* ── Helper text ───────────────────────────────────────────────────── */}
        <p className="text-sm text-gray-400 -mb-6">Start with a quick win — most take 10–20 mins</p>

        {/* ── Start Here section ────────────────────────────────────────────── */}
        <section className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Start here</h2>
          <p className="text-sm text-gray-500 mb-5">New to DIY? These are the best first fixes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            {START_HERE.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="block bg-white rounded-xl border border-orange-200 p-4 hover:border-orange-400 hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-900 text-sm mb-1">{guide.title}</p>
                <p className="text-xs text-gray-400 mb-2">{guide.time} · {guide.cost}</p>
                <span className="text-xs text-green-700 font-medium bg-green-50 px-2 py-0.5 rounded-full">
                  Uses tools you already have
                </span>
              </a>
            ))}
          </div>
          <a
            href="/guides/fix-a-dripping-tap"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            Start your first fix →
          </a>
        </section>

        {/* ── Categories ────────────────────────────────────────────────────── */}
        {CATEGORIES.map((cat) => (
          <section key={cat.label}>
            <h2 className="text-xl font-bold text-gray-900 mb-0.5">{cat.label}</h2>
            <p className="text-sm text-gray-400 mb-4">{cat.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.guides.map((guide) => {
                const isStarter   = CATEGORY_STARTER_HREFS.has(guide.href)
                const hasBasicTools = BASIC_TOOL_HREFS.has(guide.href)
                return (
                  <a
                    key={guide.href}
                    href={guide.href}
                    className={`block rounded-xl border p-5 hover:border-orange-300 hover:shadow-sm transition-all ${
                      isStarter
                        ? 'border-orange-300 bg-orange-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-semibold text-gray-900">{guide.title}</p>
                      {isStarter && (
                        <span className="shrink-0 text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full font-medium">
                          Start here
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-green-600 font-medium mb-2">{guide.saves}</p>
                    <p className="text-xs text-gray-400 mb-2">{guide.time} · {guide.level} · {guide.cost}</p>
                    {(isStarter && hasBasicTools) && (
                      <p className="text-xs text-green-700 font-medium">✓ Uses tools you already have</p>
                    )}
                  </a>
                )
              })}
            </div>
          </section>
        ))}

      </div>

      {/* ── Sticky mobile CTA ─────────────────────────────────────────────── */}
      <div className="fixed bottom-20 left-4 right-4 z-40 md:hidden pointer-events-none">
        <a
          href="/guides/fix-a-dripping-tap"
          className="pointer-events-auto flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-orange-500/40 transition-colors"
        >
          Start your first fix →
        </a>
      </div>

      <MobileNav />
    </main>
  )
}
