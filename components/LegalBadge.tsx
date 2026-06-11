interface LegalBadgeProps {
  isLegal?: boolean
}

export default function LegalBadge({ isLegal }: LegalBadgeProps) {
  if (isLegal) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-400 border border-green-500/30">
        ✓ Legal
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-400 border border-red-500/30">
      ✕ Banned
    </span>
  )
}