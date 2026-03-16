import type { Metadata } from 'next'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'All DIY Guides | FixItFirst',
  description: 'Browse all FixItFirst DIY guides — plumbing, electrics, decorating, heating and more. Step-by-step instructions written for complete beginners.',
}

const categories = [
  {
    name: 'Plumbing',
    guides: [
      { title: 'Fix a dripping tap', time: '45 mins', level: 'Beginner', saves: 'Save £80–150', href: '/guides/fix-a-dripping-tap' },
      { title: 'Unblock a drain', time: '20 mins', level: 'Beginner', saves: 'Save £60–120', href: '/guides/unblock-a-drain' },
      { title: 'Fix a running toilet', time: '1 hour', level: 'Beginner', saves: 'Save £80–150', href: '/guides/fix-a-running-toilet' },
      { title: 'Fix a leaking pipe joint', time: '30 mins', level: 'Beginner', saves: 'Save £60–120', href: '/guides/fix-a-leaking-pipe-joint' },
      { title: 'Replace a toilet seat', time: '20 mins', level: 'Beginner', saves: 'Save £40–80', href: '/guides/replace-a-toilet-seat' },
      { title: 'Fix low water pressure', time: '30 mins', level: 'Beginner', saves: 'Save £60–100', href: '/guides/fix-low-water-pressure' },
      { title: 'Unblock a toilet', time: '20 mins', level: 'Beginner', saves: 'Save £60–120', href: '/guides/unblock-a-toilet' },
      { title: 'Replace a shower head', time: '15 mins', level: 'Beginner', saves: 'Save £40–80', href: '/guides/replace-a-shower-head' },
      { title: 'Turn off your water mains', time: '5 mins', level: 'Beginner', saves: 'Prevents flood damage', href: '/guides/turn-off-water-mains' },
    ],
  },
  {
    name: 'Electrics',
    guides: [
      { title: 'Change a lightbulb', time: '5 mins', level: 'Beginner', saves: 'Save £60–100', href: '/guides/change-a-lightbulb' },
      { title: 'Replace a plug fuse', time: '5 mins', level: 'Beginner', saves: 'Save £30–60', href: '/guides/replace-a-plug-fuse' },
      { title: 'Reset a tripped circuit breaker', time: '10 mins', level: 'Beginner', saves: 'Save £40–60', href: '/guides/reset-a-tripped-circuit-breaker' },
      { title: 'Replace a light switch', time: '30 mins', level: 'Beginner', saves: 'Save £60–100', href: '/guides/replace-a-light-switch' },
      { title: 'Fix a doorbell', time: '30 mins', level: 'Beginner', saves: 'Save £40–80', href: '/guides/fix-a-doorbell' },
      { title: 'Replace a smoke alarm battery', time: '5 mins', level: 'Beginner', saves: 'Keeps your home protected', href: '/guides/replace-a-smoke-alarm-battery' },
      { title: 'Install a smart thermostat', time: '1–2 hours', level: 'Intermediate', saves: 'Save £150–300/year', href: '/guides/install-a-smart-thermostat' },
    ],
  },
  {
    name: 'Carpentry & Fitting',
    guides: [
      { title: 'Put up shelves', time: '1 hour', level: 'Beginner', saves: 'Save £50–80', href: '/guides/put-up-shelves' },
      { title: 'Fit a curtain pole', time: '45 mins', level: 'Beginner', saves: 'Save £50–80', href: '/guides/fit-a-curtain-pole' },
    ],
  },
  {
    name: 'Decorating',
    guides: [
      { title: 'Paint a room', time: '1 day', level: 'Beginner', saves: 'Save £200–500', href: '/guides/paint-a-room' },
      { title: 'Fill a hole in a wall', time: '30 mins', level: 'Beginner', saves: 'Save £50–100', href: '/guides/fill-a-hole-in-a-wall' },
    ],
  },
  {
    name: 'Heating',
    guides: [
      { title: 'Bleed a radiator', time: '15 mins', level: 'Beginner', saves: 'Save £50–80', href: '/guides/bleed-a-radiator' },
      { title: 'Bleed all radiators', time: '1 hour', level: 'Beginner', saves: 'Save £80–150', href: '/guides/bleed-all-radiators' },
      { title: 'Fix a cold radiator', time: '20 mins', level: 'Beginner', saves: 'Save £50–80', href: '/guides/fix-a-cold-radiator' },
      { title: 'Fix a noisy radiator', time: '30 mins', level: 'Beginner', saves: 'Save £50–80', href: '/guides/fix-a-noisy-radiator' },
      { title: 'Repressurise a boiler', time: '10 mins', level: 'Beginner', saves: 'Save £50–80', href: '/guides/repressurise-a-boiler' },
      { title: 'Boiler breakdown: what to do', time: '30 mins', level: 'Beginner', saves: 'Save £100–300', href: '/guides/boiler-breakdown-what-to-do' },
    ],
  },
  {
    name: 'Outdoor',
    guides: [
      { title: 'Fix a leaking garden tap', time: '30 mins', level: 'Beginner', saves: 'Save £60–100', href: '/guides/fix-a-garden-tap' },
      { title: 'Unblock a gutter', time: '1 hour', level: 'Beginner', saves: 'Save £80–150', href: '/guides/unblock-a-gutter' },
      { title: 'Fix a fence panel', time: '2 hours', level: 'Beginner', saves: 'Save £100–200', href: '/guides/fix-a-fence-panel' },
      { title: 'Lay decking boards', time: 'Full day', level: 'Intermediate', saves: 'Save £500–1,500', href: '/guides/lay-decking-boards' },
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

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
        {categories.map((category) => (
          <section key={category.name}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{category.name}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {category.guides.map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  className="flex items-start justify-between gap-4 p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-colors"
                >
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{guide.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{guide.time} · {guide.level}</p>
                  </div>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full shrink-0 whitespace-nowrap">{guide.saves}</span>
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
