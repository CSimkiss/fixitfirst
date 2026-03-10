import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { BLOG_POSTS } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog | FixItFirst',
  description: 'DIY stories, tips, and money-saving guides from the FixItFirst team.',
}

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
        <div className="space-y-6">
          {BLOG_POSTS.map(post => (
            <a
              key={post.slug}
              href={`/blog/${post.urlSlug}`}
              className="block border border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-2xl">{post.emoji}</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">{post.category}</span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
                <span className="text-orange-500 text-sm font-medium flex items-center gap-1">
                  Read →
                </span>
              </div>
            </a>
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
