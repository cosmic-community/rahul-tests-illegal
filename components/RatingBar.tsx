interface RatingBarProps {
  label: string
  value: number
  max?: number
  color: 'ember' | 'gold'
}

export default function RatingBar({ label, value, max = 10, color }: RatingBarProps) {
  const safeValue = typeof value === 'number' ? value : 0
  const pct = Math.min(100, Math.max(0, (safeValue / max) * 100))
  const barColor = color === 'ember' ? 'bg-ember' : 'bg-gold'

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {label}
        </span>
        <span className="text-xs font-bold text-gray-200">
          {safeValue}/{max}
        </span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-edge overflow-hidden">
        <div
          className={`h-full rounded-full ${barColor} transition-all duration-700`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}