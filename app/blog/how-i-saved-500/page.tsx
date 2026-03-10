import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { ALL_GUIDES } from '@/lib/guides'
import DifficultyMeter from '@/components/DifficultyMeter'

export const metadata: Metadata = {
  title: 'How I Saved £500 in My First Year Doing DIY | FixItFirst',
  description: "Zero experience, first flat. Here's exactly what I fixed, how much each job saved, and what I learned.",
}

const post = BLOG_POSTS.find(p => p.urlSlug === 'how-i-saved-500')!
const relatedGuides = post.relatedSlugs.map(s => ALL_GUIDES.find(g => g.slug === s)).filter(Boolean) as typeof ALL_GUIDES

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

        <div className="space-y-6">
          {post.content.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">{section.heading}</h2>
              )}
              <p className="text-gray-700 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        {/* Savings summary */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-5">
          <h3 className="font-bold text-green-900 mb-3">The breakdown</h3>
          <div className="space-y-2 text-sm">
            {[
              { job: 'Fix dripping tap', saved: '£95' },
              { job: 'Bleed radiators', saved: 'Comfort + warmer flat' },
              { job: 'Put up shelves', saved: '£90' },
              { job: 'Paint bedroom', saved: '£305' },
              { job: 'Unblock drain', saved: '£80' },
            ].map((row, i) => (
              <div key={i} className="flex justify-between py-1 border-b border-green-100 last:border-0">
                <span className="text-green-800">{row.job}</span>
                <span className="font-semibold text-green-900">{row.saved}</span>
              </div>
            ))}
            <div className="flex justify-between pt-2 font-bold text-green-900">
              <span>Total saved</span>
              <span>~£570</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-5">The guides that made the difference</h2>
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
