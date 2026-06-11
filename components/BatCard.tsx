import Link from 'next/link'
import type { Bat } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import LegalBadge from '@/components/LegalBadge'
import RatingBar from '@/components/RatingBar'

interface BatCardProps {
  bat: Bat
}

export default function BatCard({ bat }: BatCardProps) {
  if (!bat) return null

  const image = bat.metadata?.image
  const name = getMetafieldValue(bat.metadata?.name) || bat.title
  const batType = getMetafieldValue(bat.metadata?.bat_type)
  const keyClaim = getMetafieldValue(bat.metadata?.key_claim)
  const power = bat.metadata?.power_rating ?? 0
  const control = bat.metadata?.control_rating ?? 0

  return (
    <Link
      href={`/bats/${bat.slug}`}
      className="group block overflow-hidden rounded-2xl border border-edge bg-carbon transition-all duration-300 hover:border-ember/50 hover:shadow-2xl hover:shadow-ember/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-5xl">🏏</div>
        )}
        <div className="absolute top-3 right-3">
          <LegalBadge isLegal={bat.metadata?.is_legal} />
        </div>
      </div>
      <div className="p-5">
        {batType && (
          <span className="text-xs font-bold uppercase tracking-widest text-ember">
            {batType}
          </span>
        )}
        <h3 className="mt-1 text-xl font-extrabold text-white group-hover:text-ember transition-colors">
          {name}
        </h3>
        {keyClaim && (
          <p className="mt-2 text-sm text-gray-400 line-clamp-2">{keyClaim}</p>
        )}
        <div className="mt-4 space-y-3">
          <RatingBar label="Power" value={power} color="ember" />
          <RatingBar label="Control" value={control} color="gold" />
        </div>
      </div>
    </Link>
  )
}