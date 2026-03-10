import type { Metadata } from 'next'
import MobileNav from '@/components/MobileNav'
import GuidesGrid from '@/components/GuidesGrid'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'All DIY Guides | FixItFirst',
  description: 'Browse all FixItFirst DIY guides — plumbing, electrics, decorating, heating and more. Step-by-step instructions written for complete beginners.',
}

const guides = [
  { title: 'Fix a dripping tap',    time: '45 mins', cost: '£2–5',   level: 'Beginner', category: 'Plumbing',   href: '/guides/fix-a-dripping-tap',    saves: 'Save £80–150 today',  difficulty: 2 },
  { title: 'Unblock a drain',       time: '20 mins', cost: 'Free',   level: 'Beginner', category: 'Plumbing',   href: '/guides/unblock-a-drain',       saves: 'Save £60–120 today',  difficulty: 1 },
  { title: 'Fix a running toilet',  time: '1 hour',  cost: '£10–25', level: 'Beginner', category: 'Plumbing',   href: '/guides/fix-a-running-toilet',  saves: 'Save £80–150 today',  difficulty: 3 },
  { title: 'Change a lightbulb',    time: '5 mins',  cost: '£5–15',  level: 'Beginner', category: 'Electrics',  href: '/guides/change-a-lightbulb',    saves: 'Save £60–100 today',  difficulty: 1 },
  { title: 'Put up shelves',        time: '1 hour',  cost: '£10–20', level: 'Beginner', category: 'Carpentry',  href: '/guides/put-up-shelves',        saves: 'Save £50–80 today',   difficulty: 3 },
  { title: 'Fit a curtain pole',    time: '45 mins', cost: '£0–15',  level: 'Beginner', category: 'Fitting',    href: '/guides/fit-a-curtain-pole',    saves: 'Save £50–80 today',   difficulty: 2 },
  { title: 'Paint a room',          time: '1 day',   cost: '£30–60', level: 'Beginner', category: 'Decorating', href: '/guides/paint-a-room',          saves: 'Save £200–500 today', difficulty: 2 },
  { title: 'Fill a hole in a wall', time: '30 mins', cost: '£3–5',   level: 'Beginner', category: 'Masonry',    href: '/guides/fill-a-hole-in-a-wall', saves: 'Save £50–100 today',  difficulty: 2 },
  { title: 'Bleed a radiator',      time: '15 mins', cost: '£1–3',   level: 'Beginner', category: 'Heating',    href: '/guides/bleed-a-radiator',      saves: 'Save £50–80 today',   difficulty: 1 },
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

      <GuidesGrid guides={guides} />
      <MobileNav />
    </main>
  )
}
