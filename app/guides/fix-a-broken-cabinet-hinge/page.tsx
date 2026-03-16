import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Fix a Broken Cabinet Hinge | FixItFirst',
  description: 'Fix a broken or misaligned cabinet hinge in 20 minutes. Step-by-step guide for concealed cup hinges. Save £30–60 vs calling a carpenter.',
}

const steps = [
  { title: 'Identify the hinge type', description: 'Modern kitchen cabinets use concealed cup hinges. Older furniture may use butt hinges (flat, visible on the door edge). This guide covers cup hinges — the most common type.' },
  { title: 'Try the adjustment screws first', description: 'Every concealed hinge has two or three adjustment screws. The screw closest to the door moves it in and out; the side screw moves it left and right; some have a third for up and down. Try small turns — a quarter-turn makes a visible difference.' },
  { title: 'Tighten any loose mounting screws', description: "Check the screws on the mounting plate (fixed to the cabinet wall) and the cup screws (fixed into the door). A 'broken' hinge is often just loose." },
  { title: 'Remove a damaged hinge', description: 'If the hinge body is cracked or a screw hole is stripped, unscrew the hinge from both the door and the cabinet wall. Take it to a hardware shop to match the cup size (usually 35mm) and arm length.' },
  { title: 'Fit the replacement', description: 'Press the cup into the hole in the door and secure with the screws. Clip or screw the arm to the mounting plate. Close the door and check alignment.' },
  { title: 'Align to match neighbouring doors', description: 'Use the adjustment screws to align the door so it is parallel with adjacent doors, with even gaps at top, bottom, and sides.' },
]

export default function FixABrokenCabinetHinge() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fix a broken cabinet hinge</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £30–60 today</p>
        <p className="text-gray-500 mb-8">20 mins · Beginner · Saves £30–60 vs a carpenter</p>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Most kitchen and bathroom cabinets use concealed cup hinges — the kind with a large round cup pressed into the door. These are designed to be adjusted and replaced without tools beyond a screwdriver.</p>
          <p className="text-sm text-gray-700">Before buying a new hinge, try the adjustment screws. Most drooping or misaligned cabinet doors just need a small tweak with a cross-head screwdriver — no new parts required.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Cross-head screwdriver</span> — for all hinge screws</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement hinge</span> — <span className="text-orange-600">buy: £2–5 — take the old hinge to match the cup diameter, usually 35mm, and the arm length</span></span>
            </li>
          </ul>
        </div>

        <ol className="space-y-4 mb-6">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
              <div>
                <p className="font-semibold text-gray-900">{step.title}</p>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Buying a replacement before trying the adjustment screws — most sagging doors just need a half-turn.</p>
          <p className="text-sm text-yellow-900 mb-2">Buying the wrong cup size — 35mm is standard but not universal. Take the old hinge to match it.</p>
          <p className="text-sm text-yellow-900">Overtightening — the screws seat into soft MDF in most flat-pack cabinets. Use firm but gentle pressure.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a carpenter if...</h2>
          <p className="text-sm text-red-900 mb-1">The screw holes in the door are completely stripped and the wood is crumbling</p>
          <p className="text-sm text-red-900">Multiple hinges have failed on the same cabinet — may indicate the cabinet is damaged beyond repair</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Adjustment only (no new parts)</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Single replacement hinge</span><span className="font-medium">£3–5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Set of 2 hinges</span><span className="font-medium">£6–10</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Carpenter would charge</span><span className="font-medium text-red-600">£30–60</span></div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand how concealed cup hinges work and how to adjust them. This applies to every kitchen, bathroom, and wardrobe cabinet with this hinge type — which is most of them.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
