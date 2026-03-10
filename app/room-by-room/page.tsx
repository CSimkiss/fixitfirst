import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { ALL_GUIDES } from '@/lib/guides'
import DifficultyMeter from '@/components/DifficultyMeter'

export const metadata: Metadata = {
  title: 'Guides by Room | FixItFirst',
  description: 'Find DIY guides organised by room. Kitchen, bathroom, bedroom, living room — fix the right thing in the right place.',
}

type Room = {
  name: string
  emoji: string
  description: string
  slugs: string[]
}

const ROOMS: Room[] = [
  {
    name: 'Kitchen',
    emoji: '🍳',
    description: 'Taps, drains, and everyday kitchen fixes',
    slugs: ['fix-a-dripping-tap', 'unblock-a-drain', 'change-a-lightbulb', 'fill-a-hole-in-a-wall'],
  },
  {
    name: 'Bathroom',
    emoji: '🚿',
    description: 'Toilets, taps, and plumbing fixes',
    slugs: ['fix-a-running-toilet', 'fix-a-dripping-tap', 'unblock-a-drain'],
  },
  {
    name: 'Bedroom',
    emoji: '🛏️',
    description: 'Decorating, curtains, shelves, and radiators',
    slugs: ['paint-a-room', 'fit-a-curtain-pole', 'put-up-shelves', 'bleed-a-radiator', 'fill-a-hole-in-a-wall'],
  },
  {
    name: 'Living Room',
    emoji: '🛋️',
    description: 'Shelves, electrics, painting, and heating',
    slugs: ['put-up-shelves', 'paint-a-room', 'change-a-lightbulb', 'bleed-a-radiator', 'fill-a-hole-in-a-wall', 'fit-a-curtain-pole'],
  },
  {
    name: 'Hallway',
    emoji: '🚪',
    description: 'First impressions — painting, hooks, and lighting',
    slugs: ['paint-a-room', 'change-a-lightbulb', 'fill-a-hole-in-a-wall', 'put-up-shelves'],
  },
  {
    name: 'Garden',
    emoji: '🌿',
    description: 'Outdoor fixes and maintenance',
    slugs: [],
  },
]

export default function RoomByRoom() {
  const guidesBySlug = Object.fromEntries(ALL_GUIDES.map(g => [g.slug, g]))

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">← Back to home</a>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Guides by Room</h1>
        <p className="text-gray-500 mb-10">Find the right fix for wherever the problem is.</p>

        <div className="space-y-12">
          {ROOMS.map(room => {
            const guides = room.slugs.map(s => guidesBySlug[s]).filter(Boolean)
            return (
              <section key={room.name}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{room.emoji}</span>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{room.name}</h2>
                    <p className="text-sm text-gray-500">{room.description}</p>
                  </div>
                </div>

                {guides.length === 0 ? (
                  <div className="border border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-400">
                    <p className="text-2xl mb-2">🔨</p>
                    <p className="text-sm">Garden guides coming soon</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {guides.map(guide => (
                      <a
                        key={guide.slug}
                        href={guide.href}
                        className="border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{guide.category}</span>
                          <DifficultyMeter level={guide.difficulty} />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">{guide.title}</h3>
                        <p className="text-xs text-green-700 font-medium mb-3">{guide.saves}</p>
                        <div className="flex gap-4 text-sm text-gray-500">
                          <span>{guide.time}</span>
                          <span>{guide.cost}</span>
                          <span className="ml-auto bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs">{guide.level}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </section>
            )
          })}
        </div>

        <div className="mt-12 bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
          <p className="font-semibold text-orange-900 mb-1">Can't find what you're looking for?</p>
          <p className="text-sm text-orange-700 mb-4">Search all guides or browse the full list</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/search" className="bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">Search guides</a>
            <a href="/guides" className="border border-orange-300 text-orange-700 px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 transition-colors">All guides</a>
          </div>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
