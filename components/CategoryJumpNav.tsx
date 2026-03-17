'use client'

const OPTIONS = [
  { label: 'Plumbing',         id: 'plumbing'       },
  { label: 'Electrics',        id: 'electrics'      },
  { label: 'Carpentry',        id: 'carpentry'      },
  { label: 'Decorating',       id: 'decorating'     },
  { label: 'Heating',          id: 'heating'        },
  { label: 'Outdoor & Garden', id: 'outdoor-garden' },
  { label: 'General',          id: 'general'        },
]

export default function CategoryJumpNav() {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const id = e.target.value
    if (!id) return
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Reset so re-selecting the same option still triggers a scroll
    e.target.value = ''
  }

  return (
    <div className="flex items-center gap-2.5">
      <label htmlFor="category-jump" className="text-sm text-gray-400 shrink-0">
        Jump to:
      </label>
      <select
        id="category-jump"
        defaultValue=""
        onChange={handleChange}
        className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 cursor-pointer"
      >
        <option value="" disabled>a category</option>
        {OPTIONS.map(o => (
          <option key={o.id} value={o.id}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}
