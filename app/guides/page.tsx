import type { Metadata } from 'next'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'All DIY Guides | FixItFirst',
  description: 'Browse all FixItFirst DIY guides — plumbing, electrics, decorating, heating and more. Step-by-step instructions written for complete beginners.',
}

type Guide = { title: string; time: string; cost: string; level: string; href: string; saves: string; difficulty: number }

const CATEGORIES: { label: string; guides: Guide[] }[] = [
  {
    label: 'Plumbing',
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
    guides: [
      { title: 'Change a lightbulb',                        time: '5 mins',  cost: '£5–15',  level: 'Beginner', href: '/guides/change-a-lightbulb',                    saves: 'Save £60–100 today',         difficulty: 1 },
      { title: 'Replace a plug fuse',                       time: '5 mins',  cost: '£1–3',   level: 'Beginner', href: '/guides/replace-a-plug-fuse',                   saves: 'Save £30–60 today',          difficulty: 1 },
      { title: 'Reset a tripped circuit breaker',           time: '10 mins', cost: 'Free',   level: 'Beginner', href: '/guides/reset-a-tripped-circuit-breaker',       saves: 'Save £40–60 today',          difficulty: 1 },
      { title: 'Replace a light switch',                    time: '30 mins', cost: '£5–15',  level: 'Beginner', href: '/guides/replace-a-light-switch',                saves: 'Save £60–100 today',         difficulty: 2 },
      { title: 'Fix a doorbell',                            time: '30 mins', cost: '£3–25',  level: 'Beginner', href: '/guides/fix-a-doorbell',                        saves: 'Save £40–80 today',          difficulty: 1 },
      { title: 'Turn off your electricity at the fuse box', time: '5 mins',  cost: 'Free',   level: 'Beginner', href: '/guides/turn-off-electricity-fuse-box',         saves: 'Essential safety knowledge', difficulty: 1 },
    ],
  },
  {
    label: 'Carpentry',
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
    guides: [
      { title: 'Paint a room',                 time: '1 day',      cost: '£30–60', level: 'Beginner',     href: '/guides/paint-a-room',               saves: 'Save £200–500 today', difficulty: 2 },
      { title: 'Fill a hole in a wall',        time: '30 mins',    cost: '£3–5',   level: 'Beginner',     href: '/guides/fill-a-hole-in-a-wall',      saves: 'Save £50–100 today',  difficulty: 2 },
      { title: 'Fill and sand a wall',         time: '45 mins',    cost: '£5–10',  level: 'Beginner',     href: '/guides/fill-and-sand-a-wall',       saves: 'Save £50–100 today',  difficulty: 2 },
      { title: 'Strip wallpaper',              time: 'Half a day', cost: '£12–25', level: 'Beginner',     href: '/guides/strip-wallpaper',            saves: 'Save £100–200 today', difficulty: 2 },
      { title: 'Tile a splashback',            time: 'Half a day', cost: '£30–80', level: 'Intermediate', href: '/guides/tile-a-splashback',          saves: 'Save £150–300 today', difficulty: 3 },
      { title: 'Repair a crack in a ceiling',  time: '1 hour',     cost: '£6–22',  level: 'Beginner',     href: '/guides/repair-a-ceiling-crack',     saves: 'Save £80–150 today',  difficulty: 2 },
    ],
  },
  {
    label: 'Heating',
    guides: [
      { title: 'Bleed a radiator',              time: '15 mins', cost: '£1–3',   level: 'Beginner', href: '/guides/bleed-a-radiator',       saves: 'Save £50–80 today',   difficulty: 1 },
      { title: 'Repressurise a boiler',         time: '10 mins', cost: 'Free',   level: 'Beginner', href: '/guides/repressurise-a-boiler',  saves: 'Save £50–80 today',   difficulty: 1 },
      { title: 'Fix a cold radiator',           time: '20 mins', cost: 'Free–£3',level: 'Beginner', href: '/guides/fix-a-cold-radiator',    saves: 'Save £50–80 today',   difficulty: 1 },
      { title: 'What to do if your boiler breaks down', time: '30 mins', cost: 'Free', level: 'Beginner', href: '/guides/boiler-breakdown', saves: 'Save £100–300 today', difficulty: 1 },
    ],
  },
  {
    label: 'General',
    guides: [
      { title: 'Read your energy meter',       time: '5 mins',  cost: 'Free',   level: 'Beginner', href: '/guides/read-your-energy-meter',  saves: 'Prevents overcharging',    difficulty: 1 },
      { title: 'Draft proof a door or window', time: '30 mins', cost: '£8–20',  level: 'Beginner', href: '/guides/draft-proof-door-window', saves: 'Save £50–150 per year',    difficulty: 1 },
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
        {CATEGORIES.map((cat) => (
          <section key={cat.label}>
            <h2 className="text-xl font-bold text-gray-900 mb-4">{cat.label}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.guides.map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  className="block rounded-xl border border-gray-200 p-5 hover:border-orange-300 hover:shadow-sm transition-all"
                >
                  <p className="font-semibold text-gray-900 mb-1">{guide.title}</p>
                  <p className="text-sm text-green-600 font-medium mb-2">{guide.saves}</p>
                  <p className="text-xs text-gray-400">{guide.time} · {guide.level} · {guide.cost}</p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      <MobileNav />
    </main>
  )
}
