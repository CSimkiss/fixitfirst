export default function DashboardSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header */}
      <div className="bg-gray-950 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="h-3 w-24 bg-gray-700 rounded mb-3" />
          <div className="h-8 w-64 bg-gray-700 rounded mb-4" />
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gray-700 rounded-full" />
            <div className="h-6 w-24 bg-gray-700 rounded-full" />
            <div className="h-4 w-32 bg-gray-800 rounded ml-1" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 p-5 text-center">
              <div className="h-9 w-12 bg-gray-200 rounded mx-auto mb-2" />
              <div className="h-3 w-24 bg-gray-100 rounded mx-auto" />
            </div>
          ))}
        </div>

        {/* Tier card */}
        <div className="bg-gray-100 rounded-2xl border-2 border-gray-200 p-6 flex items-center gap-5">
          <div className="w-14 h-14 bg-gray-200 rounded-full shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-20 bg-gray-200 rounded" />
            <div className="h-6 w-32 bg-gray-200 rounded" />
            <div className="h-3 w-48 bg-gray-200 rounded" />
            <div className="h-3 w-40 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Continue learning */}
        <div>
          <div className="h-5 w-36 bg-gray-200 rounded mb-4" />
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="h-3 w-36 bg-gray-100 rounded" />
                <div className="h-6 w-56 bg-gray-200 rounded" />
                <div className="h-3 w-48 bg-gray-100 rounded" />
                <div className="h-3 w-32 bg-gray-100 rounded" />
              </div>
              <div className="h-9 w-20 bg-gray-200 rounded-xl shrink-0" />
            </div>
          </div>
        </div>

        {/* Badges */}
        <div>
          <div className="h-5 w-28 bg-gray-200 rounded mb-4" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mx-auto mb-2" />
                <div className="h-3 w-20 bg-gray-200 rounded mx-auto mb-1" />
                <div className="h-2 w-16 bg-gray-100 rounded mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
