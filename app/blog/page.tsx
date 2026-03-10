import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Blog | FixItFirst',
  description: 'DIY stories, tips, and money-saving guides from the FixItFirst team.',
}

type BlogPost = {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  emoji: string
  content: Array<{ heading?: string; body: string }>
}

const POSTS: BlogPost[] = [
  {
    slug: 'five-things-first-time-buyers-fix-first',
    title: '5 things every first time buyer should fix first',
    excerpt: 'You\'ve got the keys. The survey is done. Now what? Here are the five things that will save you the most time, money, and stress in your first year.',
    author: 'FixItFirst Team',
    date: '12 February 2025',
    readTime: '5 min read',
    category: 'First home',
    emoji: '🔑',
    content: [
      {
        body: 'Moving into your first home is equal parts exciting and terrifying. Suddenly you\'re responsible for everything — and nobody taught you any of it. Here\'s where to start.'
      },
      {
        heading: '1. Bleed your radiators before winter',
        body: 'If your radiators are cold at the top but warm at the bottom, they have air trapped inside. Bleeding them takes 5 minutes, costs £1 for a bleed key, and can save £50–80 on your heating bill. Do this every October.'
      },
      {
        heading: '2. Fix any dripping taps immediately',
        body: 'A dripping tap wastes 5,500 litres of water per year and costs you money on every water bill. The fix is a £2 rubber washer and 45 minutes of your time. Don\'t leave it.'
      },
      {
        heading: '3. Learn to unblock a drain',
        body: 'This will happen. Kitchen drains block with fat and food. Bathroom drains block with hair. A £3 plunger and 20 minutes is all it takes. Calling a plumber costs £60–120 for the same job.'
      },
      {
        heading: '4. Fill the holes from the previous owner',
        body: 'Almost every house comes with mysterious holes in the walls — from previous picture hooks, curtain rails, or worse. Polyfilla and a filling knife cost £5. The result looks professional with 20 minutes of effort.'
      },
      {
        heading: '5. Get to know your boiler',
        body: 'Know where the pressure gauge is (should read 1–1.5 bar), how to top up the pressure, and when it was last serviced. A boiler service costs £60–100 and could save you from a breakdown mid-January.'
      }
    ]
  },
  {
    slug: 'how-i-saved-500-first-year-diy',
    title: 'How I saved £500 in my first year doing DIY',
    excerpt: 'I had zero DIY experience when I moved into my first flat. Here\'s exactly what I fixed myself, how much each job saved, and what I learned.',
    author: 'Guest post',
    date: '28 January 2025',
    readTime: '7 min read',
    category: 'Money saving',
    emoji: '💷',
    content: [
      {
        body: 'A year ago I moved into my first flat with no tools, no skills, and no idea what I was doing. This is the breakdown of every job I tackled myself and how much I saved.'
      },
      {
        heading: 'Month 1: The dripping kitchen tap (saved £95)',
        body: 'The tap had been dripping when I moved in. I spent an afternoon watching YouTube and reading a guide. One £2 washer and 45 minutes later — fixed. A plumber quoted me £80–110 for the same job.'
      },
      {
        heading: 'Month 2: Bleeding radiators (saved £0 but gained comfort)',
        body: 'Okay this one didn\'t save money directly — but every radiator in the place was half-warm. I bled eight of them on a Saturday morning. The flat was noticeably warmer. The bleed key cost £1.50.'
      },
      {
        heading: 'Month 4: Putting up shelves (saved £75)',
        body: 'I needed shelves in the living room. A joiner quoted £120. I bought a spirit level, some wall plugs, and a secondhand drill for £30. The shelves cost £45. Total: £75 vs £165. Saving: £90 (minus the drill I\'ll use forever).'
      },
      {
        heading: 'Month 6: Painting the bedroom (saved £320)',
        body: 'The bedroom was magnolia. I hated it. A decorator quoted £350. Paint, brushes, and a Saturday cost £45. I did it myself in a weekend. It\'s not perfect, but it\'s mine.'
      },
      {
        heading: 'Month 10: Unblocking the bathroom drain (saved £80)',
        body: 'I am embarrassed how long I left this. A £3 drain snake and 15 minutes. That\'s it.'
      },
      {
        body: 'Total saved in year one: roughly £560 not including the tools I now own and will use for the rest of my life. Start small. Make mistakes. Fix them. It\'s worth it.'
      }
    ]
  },
  {
    slug: 'ten-tools-every-home-needs',
    title: 'The 10 tools every home needs',
    excerpt: 'You don\'t need a full workshop. You need 10 things. Here\'s exactly what to buy, what to spend, and what each one will be used for.',
    author: 'FixItFirst Team',
    date: '5 January 2025',
    readTime: '4 min read',
    category: 'Tools',
    emoji: '🧰',
    content: [
      {
        body: 'The number one reason people call a tradesperson for a job they could do themselves is that they don\'t have the right tools. Here\'s the minimum viable toolkit for a home.'
      },
      {
        heading: 'The list',
        body: '1. Screwdriver set (flat + Phillips) — £5–15\n2. Cordless drill — £30–60\n3. Tape measure — £3–8\n4. Spirit level — £5–15\n5. Hammer — £8–20\n6. Adjustable spanner — £8–15\n7. Pliers — £5–12\n8. Stanley knife — £3–8\n9. Radiator bleed key — £1–3\n10. PTFE tape — £1–3'
      },
      {
        heading: 'What this costs in total',
        body: 'Buying the minimum of each: around £75–160. Buying mid-range quality: around £120–200. These tools will last 20+ years if you look after them. A single plumber\'s callout costs more than half this list.'
      },
      {
        heading: 'What to buy first',
        body: 'If you\'re starting from nothing: get the screwdriver set and tape measure first (£10–25 total). They\'ll get you through flat-pack furniture, minor repairs, and measuring up for everything else. Add the drill when you need shelves or curtain poles. The rest can wait until you need them.'
      },
      {
        body: 'See our full tools guide at /tools-to-buy for descriptions of what each tool does and when you\'ll need it.'
      }
    ]
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <a href="/" className="text-sm text-gray-400 hover:text-orange-400 mb-4 inline-block">← Back to home</a>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">FixItFirst Blog</h1>
        <p className="text-gray-300 text-lg">Stories, tips, and money saved.</p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="space-y-8">
          {POSTS.map(post => (
            <article key={post.slug} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-orange-300 hover:shadow-md transition-all group">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="text-2xl">{post.emoji}</span>
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">{post.category}</span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

                {/* Article body */}
                <div className="border-t border-gray-100 pt-4 mt-4 space-y-4">
                  {post.content.map((section, i) => (
                    <div key={i}>
                      {section.heading && (
                        <h3 className="font-semibold text-gray-900 mb-1">{section.heading}</h3>
                      )}
                      {section.body.includes('\n') ? (
                        <pre className="text-sm text-gray-600 whitespace-pre-wrap font-sans leading-relaxed">{section.body}</pre>
                      ) : (
                        <p className="text-sm text-gray-600 leading-relaxed">{section.body}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100 text-xs text-gray-400">
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
          <h2 className="font-bold text-orange-900 mb-2">Ready to start saving money?</h2>
          <p className="text-sm text-orange-700 mb-4">Browse our step-by-step guides — written for people who have never done DIY before.</p>
          <a href="/guides" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">Browse all guides</a>
        </div>
      </div>

      <MobileNav />
    </main>
  )
}
