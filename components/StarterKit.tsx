import { screwfixToolUrl, amazonToolUrl } from '@/lib/affiliates'

const STARTER_TOOLS = [
  { name: 'Adjustable spanner' },
  { name: 'Screwdriver set' },
  { name: 'PTFE tape' },
  { name: 'Spirit level' },
  { name: 'Tape measure' },
]

export default function StarterKit() {
  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-6">
      <h2 className="font-semibold text-gray-900 mb-1">Recommended starter kit</h2>
      <p className="text-xs text-gray-500 mb-4">Five tools that cover most home repairs.</p>
      <ul className="space-y-2.5">
        {STARTER_TOOLS.map((tool) => (
          <li key={tool.name} className="flex items-center gap-3 text-sm">
            <span className="text-gray-400 shrink-0">→</span>
            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 min-w-0">
              <span className="font-medium text-gray-800">{tool.name}</span>
              <span className="flex items-center gap-1 text-xs">
                <a
                  href={screwfixToolUrl(tool.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Screwfix
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href={amazonToolUrl(tool.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Amazon
                </a>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
