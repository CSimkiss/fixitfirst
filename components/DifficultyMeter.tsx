export default function DifficultyMeter({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1" title={`Difficulty: ${level} out of 5`}>
      {[1, 2, 3, 4, 5].map(i => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${i <= level ? 'bg-orange-500' : 'bg-gray-200'}`}
        />
      ))}
    </div>
  )
}
