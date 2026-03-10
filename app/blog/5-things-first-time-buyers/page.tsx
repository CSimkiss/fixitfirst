import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { ALL_GUIDES } from '@/lib/guides'
import DifficultyMeter from '@/components/DifficultyMeter'

export const metadata: Metadata = {
  title: '5 Things Every First Time Buyer Should Fix First | FixItFirst',
  description: "You've got the keys. Here are the five DIY skills that will save you the most time, money, and stress in your first year.",
}

const post = BLOG_POSTS.find(p => p.urlSlug === '5-things-first-time-buyers')!
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

        <div className="prose-style space-y-6">
          {post.content.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">{section.heading}</h2>
              )}
              <p className="text-gray-700 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related guides</h2>
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

        <div className="mt-8 bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
          <p className="font-semibold text-orange-900 mb-1">New to DIY?</p>
          <p className="text-sm text-orange-700 mb-3">Start with our curated guide for first-home owners.</p>
          <a href="/first-home" className="inline-block bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">Start here</a>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
