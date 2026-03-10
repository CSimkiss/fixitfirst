import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import DifficultyMeter from '@/components/DifficultyMeter'
import { ALL_GUIDES } from '@/lib/guides'
import { GUIDE_TOOLS } from '@/lib/tools'

export const metadata: Metadata = {
  title: 'Electrics Guides | FixItFirst',
  description: 'Safe DIY electrical guides for UK homeowners. Understand what you can legally do yourself and when to call a qualified electrician.',
}

const CAN_DO = [
  'Change a lightbulb',
  'Replace a like-for-like light fitting (with power off at the fusebox)',
  'Replace a faceplate on an existing socket or switch (same wiring)',
  'Fit a plug to an appliance',
  'Replace a broken pull-cord switch (like-for-like)',
]

const CANNOT_DO = [
  'Add a new circuit (requires Part P certification or building control notification)',
  'Move or add sockets or light switches',
  'Install an electric shower or cooker circuit',
  'Any electrical work in a bathroom (special "zones" apply)',
  'Replace a consumer unit (fusebox)',
  'Install outdoor sockets or lighting circuits',
]

export default function ElectricsPage() {
  const guides = ALL_GUIDES.filter(g => g.category === 'Electrics')

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-yellow-800 text-white px-6 py-16 text-center">
        <a href="/" className="text-sm text-yellow-300 hover:text-white mb-4 inline-block">← Back to home</a>
        <div className="text-5xl mb-4">⚡</div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Electrics</h1>
        <p className="text-yellow-100 text-xl max-w-xl mx-auto">Some you can do yourself. Some you legally can&apos;t. Here&apos;s exactly where the line is.</p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* UK Law box */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h2 className="font-bold text-yellow-900 mb-2 text-lg">UK law: Part P Building Regulations</h2>
              <p className="text-sm text-yellow-800 mb-3">
                In England and Wales, certain electrical work is <strong>&quot;notifiable&quot;</strong> — meaning it must either be done by a registered electrician (Part P certified) or notified to your local building control department and inspected.
              </p>
              <p className="text-sm text-yellow-800">
                Scotland and Northern Ireland have equivalent rules. This law exists because faulty electrical work is a leading cause of house fires.
              </p>
            </div>
          </div>
        </div>

        {/* Can / Cannot grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <span>✅</span> You CAN do yourself
            </h3>
            <ul className="space-y-2">
              {CAN_DO.map((item, i) => (
                <li key={i} className="text-sm text-green-900 flex items-start gap-2">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
              <span>🚫</span> Call an electrician for
            </h3>
            <ul className="space-y-2">
              {CANNOT_DO.map((item, i) => (
                <li key={i} className="text-sm text-red-900 flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Safety first box */}
        <div className="bg-gray-950 text-white rounded-xl p-6 mb-10">
          <h2 className="font-bold text-lg mb-3">Before touching anything electrical</h2>
          <div className="space-y-2 text-sm text-gray-300">
            <p>1. <strong className="text-white">Turn off at the fusebox</strong> — find the right circuit breaker and switch it off.</p>
            <p>2. <strong className="text-white">Test with a voltage tester</strong> — a non-contact voltage tester (£8–15) tells you if current is still present. Use it even if you think power is off.</p>
            <p>3. <strong className="text-white">Tell someone you&apos;re working</strong> — so nobody accidentally switches the power back on.</p>
            <p>4. <strong className="text-white">When in doubt, stop</strong> — electricity cannot be seen. If anything is unclear, call an electrician.</p>
          </div>
        </div>

        {/* Guides */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Electrics guides</h2>
        {guides.length === 0 ? (
          <div className="text-center py-12 text-gray-400 border border-dashed border-gray-300 rounded-xl">
            <p className="text-2xl mb-2">🔌</p>
            <p>More electrics guides coming soon</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {guides.map(guide => {
              const toolCount = GUIDE_TOOLS[guide.slug]?.length ?? 0
              return (
                <a
                  key={guide.slug}
                  href={guide.href}
                  className="border border-gray-200 rounded-xl p-5 hover:border-yellow-400 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full font-medium">Electrics</span>
                    <DifficultyMeter level={guide.difficulty} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-yellow-700 transition-colors">{guide.title}</h3>
                  <p className="text-xs text-green-700 font-medium mb-2">{guide.saves}</p>
                  <div className="flex gap-1.5 flex-wrap mb-3">
                    {toolCount > 0 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">🔧 {toolCount} tool{toolCount !== 1 ? 's' : ''}</span>
                    )}
                    {guide.ukSpecific && (
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">🇬🇧 UK advice</span>
                    )}
                  </div>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>{guide.time}</span>
                    <span>{guide.cost}</span>
                    <span className="ml-auto bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs">{guide.level}</span>
                  </div>
                </a>
              )
            })}
          </div>
        )}

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
          <p className="font-semibold text-orange-900 mb-1">Need a certified electrician?</p>
          <p className="text-sm text-orange-700">Always use a registered professional for notifiable work. Search at <strong>electricalcompetentperson.co.uk</strong> for Part P registered electricians in your area.</p>
        </div>
      </div>

      <MobileNav />
    </main>
  )
}
