import { amazonToolUrl, amazonGuideUrl, screwfixToolUrl } from '@/lib/affiliates'

const STARTER_TOOLS = [
  { name: 'Adjustable spanner' },
  { name: 'Screwdriver set' },
  { name: 'PTFE tape' },
  { name: 'Spirit level' },
  { name: 'Tape measure' },
]

const KIT_SEARCH = 'starter home repair tool kit'

export default function StarterKit() {
  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-6">
      <h2 className="font-semibold text-gray-900 mb-1">Recommended starter kit</h2>
      <p className="text-xs text-gray-500 mb-4">Five tools that cover most home repairs.</p>
      <ul className="space-y-2.5 mb-5">
        {STARTER_TOOLS.map((tool) => (
          <li key={tool.name} className="flex items-center gap-3 text-sm">
            <span className="text-gray-400 shrink-0">→</span>
            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 min-w-0">
              <span className="font-medium text-gray-800">{tool.name}</span>
              <a
                href={amazonToolUrl(tool.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline"
              >
                Amazon
              </a>
              <span className="text-gray-300 text-xs">·</span>
              <a
                href={screwfixToolUrl(tool.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline"
              >
                Screwfix
              </a>
            </span>
          </li>
        ))}
      </ul>

      {/* Primary Amazon CTA */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <p className="text-sm font-medium text-gray-800 mb-3">
          Want everything in one go? Get it on Amazon
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href={amazonGuideUrl(KIT_SEARCH)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Buy on Amazon <span className="opacity-80">(fastest delivery)</span>
          </a>
          <a
            href={`https://www.screwfix.com/search?search=${encodeURIComponent(KIT_SEARCH)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline self-center"
          >
            Check Screwfix <span className="text-gray-400 text-xs">(pickup today)</span>
          </a>
        </div>
      </div>
    </div>
  )
}
