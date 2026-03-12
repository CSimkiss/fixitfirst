import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Newsletter | FixItFirst',
  description: 'Sign up for the FixItFirst newsletter — weekly fix of the week, money-saving tips, and new guide alerts.',
}

const perks = [
  {
    emoji: '🔧',
    title: 'Fix of the week',
    desc: 'Every Monday we send one fix — a seasonal job, a quick win, or a skill that pays for itself. One job, fully explained.',
  },
  {
    emoji: '💰',
    title: 'Money-saving tips',
    desc: "When to DIY and when to call someone. Which tools are worth buying vs borrowing. How to avoid the most expensive mistakes.",
  },
  {
    emoji: '📚',
    title: 'New guide alerts',
    desc: "Be first to know when we publish new guides. We'll let you know as soon as a new category or skill lands.",
  },
  {
    emoji: '🏆',
    title: 'Seasonal fix reminders',
    desc: 'Boiler check before winter. Bleed radiators in October. Re-grout the shower in spring. We remind you at the right time.',
  },
]

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <section className="bg-gray-950 text-white px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">Free newsletter</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            One fix a week.<br />Straight to your inbox.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            No fluff. No spam. Just practical DIY skills that save you money, delivered every Monday morning.
          </p>
          <div className="max-w-md mx-auto">
            <EmailCapture source="newsletter" />
          </div>
          <p className="text-gray-500 text-sm mt-4">Free forever. Unsubscribe any time with one click.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">What you&apos;ll get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {perks.map(perk => (
            <div key={perk.title} className="border border-gray-200 rounded-xl p-6 flex gap-4">
              <div className="text-3xl shrink-0">{perk.emoji}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{perk.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-14">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What people say</h2>
          <div className="flex flex-col gap-4 mt-8">
            {[
              { quote: "I fixed my radiator after getting the fix-of-the-week email. Saved £70 and took 15 minutes.", name: "Sarah, Leeds" },
              { quote: "Never thought I could do any of this. Now I actually look forward to Mondays.", name: "Marcus, Bristol" },
              { quote: "The money-saving tips alone are worth it. Didn't realise how much I was overpaying tradespeople.", name: "Jo, Manchester" },
            ].map(t => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-xl p-5 text-left">
                <p className="text-gray-700 text-sm leading-relaxed mb-3">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-xs text-gray-400 font-medium">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 text-white px-6 py-16 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Join thousands of readers</h2>
          <p className="text-gray-400 mb-8">Start getting better at this stuff from Monday.</p>
          <EmailCapture source="newsletter" />
        </div>
      </section>

      <MobileNav />
    </main>
  )
}
