import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'About FixItFirst — Our Mission',
  description: 'FixItFirst is a free DIY guide platform built for people who were never taught how to fix things. Nobody taught you. We will.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <section className="bg-gray-950 text-white px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">Our mission</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Nobody taught you.<br />We will.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Most people reach adulthood without ever being shown how to fix a dripping tap, bleed a radiator, or fill a hole in a wall. It&apos;s not because it&apos;s hard — it&apos;s because nobody ever showed them.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is FixItFirst?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          FixItFirst is a free library of step-by-step DIY guides written for complete beginners. Every guide is designed assuming you&apos;ve never done it before — no jargon, no assumed knowledge, just clear instructions from start to finish.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          We cover household repairs, decorating, carpentry, plumbing, and more. Each guide tells you exactly what tools you need, how long it will take, how much it will cost, and — importantly — when to stop and call a professional.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our goal is simple: help people save money, build confidence, and stop feeling helpless in their own homes.
        </p>
      </section>

      <section className="bg-orange-50 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Who is FixItFirst for?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🏠',
                title: 'First-time homeowners',
                desc: 'Just moved in and realised you have no idea how anything works. We start from zero.',
              },
              {
                emoji: '🏙️',
                title: 'Renters',
                desc: 'Want to fix small things yourself without bothering your landlord or losing your deposit.',
              },
              {
                emoji: '💡',
                title: 'Curious learners',
                desc: 'Want to understand how your home works and build practical skills you can use for life.',
              },
            ].map(item => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why free?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We believe practical skills shouldn&apos;t be locked behind a paywall or hidden in YouTube rabbit holes. FixItFirst is and will always be free to use.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Every guide is written by people who&apos;ve actually done the job — not AI-generated filler content, not watered-down advice. Real guides for real fixes.
        </p>
      </section>

      <section className="bg-gray-950 text-white px-6 py-16 text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-5xl mb-6">🔧</div>
          <h2 className="text-3xl font-bold mb-4">Ready to start fixing?</h2>
          <p className="text-gray-300 mb-8">Browse our library of free guides and start building your skills today.</p>
          <a
            href="/guides"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-lg"
          >
            Browse all guides
          </a>
        </div>
      </section>

      <MobileNav />
    </main>
  )
}
