import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { ALL_GUIDES } from '@/lib/guides'
import DifficultyMeter from '@/components/DifficultyMeter'

export const metadata: Metadata = {
  title: 'The 10 Tools Every Home Needs | FixItFirst',
  description: "You don't need a full workshop. You need 10 things. Here's exactly what to buy, what to spend, and what each one does.",
}

const post = BLOG_POSTS.find(p => p.urlSlug === '10-tools-every-home-needs')!
const relatedGuides = post.relatedSlugs.map(s => ALL_GUIDES.find(g => g.slug === s)).filter(Boolean) as typeof ALL_GUIDES

const TOOLS_DETAIL = [
  { name: 'Screwdriver set (flat + Phillips)', cost: '£5–15', uses: 'Flat-pack furniture, light switches, curtain brackets, literally everything.' },
  { name: 'Cordless drill', cost: '£30–60', uses: 'Shelves, curtain poles, mirrors, anything that needs a hole or a driven screw.' },
  { name: 'Tape measure', cost: '£3–8', uses: 'Before every job — measuring windows for curtains, wall space for shelves, floors for furniture.' },
  { name: 'Spirit level', cost: '£5–15', uses: 'Shelves, curtain poles, pictures — anything that looks obviously wrong when unlevel.' },
  { name: 'Hammer', cost: '£8–20', uses: 'Picture hooks, tapping things into place, light demolition, pulling nails.' },
  { name: 'Adjustable spanner', cost: '£8–15', uses: 'Taps, pipes under sinks, nuts and bolts on furniture and appliances.' },
  { name: 'Pliers', cost: '£5–12', uses: 'Gripping small parts, twisting wire, holding pipes while you tighten a joint.' },
  { name: 'Stanley knife', cost: '£3–8', uses: 'Cutting carpet, vinyl, opening packaging, scoring wallpaper, trimming sealant.' },
  { name: 'Radiator bleed key', cost: '£1–3', uses: 'Bleeding radiators every autumn. Takes 5 minutes, saves real money on heating bills.' },
  { name: 'PTFE tape', cost: '£1–3', uses: 'Wraps around pipe threads before fitting to prevent leaks. Essential for any plumbing.' },
]

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="max-w-2xl mx-auto px-6 py-10">
        <a href="/blog" className="text-sm text-orange-500 mb-6 inline-block">← Back to blog</a>

        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="text-3xl">{post.emoji}</span>
          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">{post.category}</span>
          <span className="text-xs text-gray-400">{post.readTime}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>

        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 text-sm text-gray-500">
          <span className="font-medium text-gray-700">{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>

        <div className="space-y-6 mb-10">
          {post.content.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">{section.heading}</h2>
              )}
              {section.body.includes('\n') ? (
                <pre className="text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">{section.body}</pre>
              ) : (
                <p className="text-gray-700 leading-relaxed">{section.body}</p>
              )}
            </div>
          ))}
        </div>

        {/* Tool detail table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">The full breakdown</h2>
        <div className="space-y-3 mb-10">
          {TOOLS_DETAIL.map((tool, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between gap-3 mb-1">
                <p className="font-semibold text-gray-900 text-sm">{i + 1}. {tool.name}</p>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full flex-shrink-0">{tool.cost}</span>
              </div>
              <p className="text-sm text-gray-600">{tool.uses}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-50 rounded-xl p-5">
          <p className="font-semibold text-gray-900 mb-1">See our full tools guide</p>
          <p className="text-sm text-gray-600 mb-3">More detail on what each tool does and exactly what to buy.</p>
          <a href="/tools-to-buy" className="inline-block bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">Tools to buy →</a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Put these tools to work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedGuides.map(guide => (
              <a
                key={guide.slug}
                href={guide.href}
                className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{guide.category}</span>
                  <DifficultyMeter level={guide.difficulty} />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">{guide.title}</h3>
                <p className="text-xs text-green-700 font-medium mb-2">{guide.saves}</p>
                <div className="flex gap-3 text-xs text-gray-400">
                  <span>{guide.time}</span>
                  <span>{guide.cost}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
