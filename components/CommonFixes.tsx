const COMMON_FIXES = [
  {
    title: 'Fix a dripping tap',
    href: '/guides/fix-a-dripping-tap',
    time: '45 mins',
    saves: 'Save £80–150',
    emoji: '💧',
  },
  {
    title: 'Fix a running toilet',
    href: '/guides/fix-a-running-toilet',
    time: '1 hour',
    saves: 'Save £80–150',
    emoji: '🚽',
  },
  {
    title: 'Unblock a drain',
    href: '/guides/unblock-a-drain',
    time: '20 mins',
    saves: 'Save £60–120',
    emoji: '🚿',
  },
  {
    title: 'Bleed a radiator',
    href: '/guides/bleed-a-radiator',
    time: '15 mins',
    saves: 'Save £50–80',
    emoji: '🔧',
  },
  {
    title: 'Fix a light not working',
    href: '/guides/change-a-lightbulb',
    time: '5 mins',
    saves: 'Save £60–100',
    emoji: '💡',
  },
  {
    title: 'Fill a hole in a wall',
    href: '/guides/fill-a-hole-in-a-wall',
    time: '30 mins',
    saves: 'Save £50–100',
    emoji: '🪣',
  },
]

export default function CommonFixes() {
  return (
    <section className="bg-white px-6 py-10 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Most common fixes</h2>
        <a href="/guides" className="text-orange-500 text-sm font-medium hover:underline">
          See all guides →
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {COMMON_FIXES.map((fix) => (
          <a
            key={fix.href}
            href={fix.href}
            className="flex flex-col items-center text-center p-4 border border-gray-100 rounded-2xl hover:border-orange-300 hover:shadow-sm transition-all group"
          >
            <div className="text-3xl mb-2">{fix.emoji}</div>
            <p className="text-xs font-semibold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors leading-tight">
              {fix.title}
            </p>
            <p className="text-xs text-green-600 font-medium mb-1">{fix.saves}</p>
            <p className="text-xs text-gray-400">{fix.time}</p>
            <span className="mt-3 text-xs font-semibold text-orange-500 group-hover:text-orange-600 transition-colors">
              Start fix →
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
