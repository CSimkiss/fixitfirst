import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'FAQ | FixItFirst',
  description: 'Common DIY questions answered honestly. Is it legal to do your own plumbing? Can renters do DIY? When should you call a professional?',
}

const FAQS = [
  {
    question: 'Is it legal to do my own plumbing?',
    answer: `Yes — in the UK, most plumbing work is perfectly legal to do yourself. This includes fixing taps, unblocking drains, replacing washers, fixing running toilets, and most other household plumbing.

The exception is anything involving gas. Gas work must always be done by a Gas Safe registered engineer. No exceptions.

For water supply work in new builds or extensions, you should notify your local water company, but for like-for-like repairs and replacements you're fine.`,
  },
  {
    question: 'What tools do I actually need to start?',
    answer: `For 90% of beginner jobs, you only need five things:

1. Screwdriver set (flat and Phillips)
2. Cordless drill (£30–60 for a basic one)
3. Tape measure
4. Spirit level
5. Adjustable spanner

That's it. You don't need a van full of tools. Our tools guide lists 10 essentials with exact costs.`,
  },
  {
    question: 'Can renters do their own DIY?',
    answer: `It depends on what you want to do — and what your tenancy agreement says.

Most repairs are the landlord's legal responsibility, so check before spending your own money.

You can almost always: hang pictures (using appropriate fixings), bleed radiators, change lightbulbs, unblock drains, and replace tap washers.

You usually can't (without permission): drill into walls, repaint rooms, make structural changes, or fit appliances.

Always check your tenancy agreement first. If in doubt, ask your landlord in writing so there's a record.`,
  },
  {
    question: 'When should I call a professional instead?',
    answer: `Good question. The answer comes down to safety, scale, and skill.

Always call a professional for:
- Any gas work (legally required — Gas Safe engineer only)
- Electrical work beyond simple like-for-like replacements (in England and Wales, "notifiable" work needs a certified electrician)
- Structural changes (removing walls, altering foundations)
- Anything involving asbestos (common in pre-2000 homes)
- Major flooding or burst pipes you can't isolate

Use your judgement for plumbing. If you've isolated the water supply and you're replacing a like-for-like part, you're usually fine. If you're replumbing a bathroom from scratch, hire a plumber.`,
  },
  {
    question: 'Will DIY void my home insurance?',
    answer: `It might, but usually only for major or specialist work.

Standard household repairs and maintenance (fixing taps, painting, filling holes) are almost always fine and won't affect your policy.

Where you can run into trouble is larger projects: removing walls, rewiring, or extensions done without building regulations approval. These could affect a claim if something goes wrong.

The safest approach: check your policy wording, and for anything significant, let your insurer know in advance. Some policies require you to use qualified tradespeople for specific types of work.`,
  },
  {
    question: 'Is it safe to do my own electrical work?',
    answer: `Some electrical work is safe for a competent DIYer. Some is not — and getting it wrong can kill you or start a fire.

Safe to DIY:
- Changing a lightbulb
- Replacing a like-for-like light fitting (with power off at the fusebox)
- Replacing a socket faceplate (same wiring)
- Fitting a new plug

Not safe to DIY (without certification):
- Adding new circuits
- Moving sockets or light switches
- Installing electric showers or cooker circuits
- Any work in bathrooms near water

In England and Wales, "notifiable" electrical work (new circuits, consumer units) must be done by a Part P certified electrician or notified to building control. In Scotland rules are similar.

When in doubt: turn off at the fusebox, test with a non-contact voltage tester, and if you're not sure, call an electrician.`,
  },
  {
    question: 'What\'s the first thing a beginner should learn?',
    answer: `Learn where your stopcock, fusebox, and gas meter are — before anything breaks.

Stopcock: usually under the kitchen sink or where the water pipe enters the house. Turning it off stops all water in an emergency.

Fusebox (consumer unit): usually in a hallway or under the stairs. Isolates power to any circuit.

Gas meter/shut-off: outside or near the boiler. Shuts off gas supply.

After that, start with the easiest physical jobs: bleeding a radiator, changing a lightbulb, filling small holes in walls. Build confidence before attempting plumbing or drilling.`,
  },
  {
    question: 'How do I know if I\'ve done a plumbing job correctly?',
    answer: `Turn the water back on slowly and watch carefully. That's really it.

After you've reassembled any plumbing:
1. Turn the isolation valve (or stopcock) back on by a quarter turn
2. Wait 60 seconds watching for drips
3. Turn on fully
4. Check all connections again after 5 minutes
5. Check again the next morning

If a joint starts to drip after a day: tighten it slightly (don't overtighten — you can crack plastic fittings). If it's still dripping, undo it, add more PTFE tape, and redo it.`,
  },
]

export default function FAQ() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-2xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">← Back to home</a>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-500 mb-10">Honest answers to the questions beginners actually ask.</p>

        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <span className="text-gray-400 flex-shrink-0 text-xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                {faq.answer.split('\n\n').map((para, j) => (
                  para.trim().startsWith('1.') || para.trim().startsWith('Safe to') ? (
                    <pre key={j} className="text-sm text-gray-600 whitespace-pre-wrap font-sans leading-relaxed mb-3">{para}</pre>
                  ) : (
                    <p key={j} className="text-sm text-gray-600 leading-relaxed mb-3 last:mb-0">{para}</p>
                  )
                ))}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 bg-orange-50 border border-orange-200 rounded-xl p-6">
          <h2 className="font-bold text-orange-900 mb-2">Got a question not answered here?</h2>
          <p className="text-sm text-orange-700 mb-4">Browse our full guides library or search for your specific problem.</p>
          <a href="/search" className="inline-block bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">Search guides</a>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
