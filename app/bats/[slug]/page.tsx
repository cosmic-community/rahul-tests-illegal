// app/bats/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBat, getAllBats, getMetafieldValue } from '@/lib/cosmic'
import LegalBadge from '@/components/LegalBadge'
import RatingBar from '@/components/RatingBar'

export const revalidate = 60

export async function generateStaticParams() {
  const bats = await getAllBats()
  return bats.map((bat) => ({ slug: bat.slug }))
}

export default async function BatDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const bat = await getBat(slug)

  if (!bat) {
    notFound()
  }

  const image = bat.metadata?.image
  const name = getMetafieldValue(bat.metadata?.name) || bat.title
  const batType = getMetafieldValue(bat.metadata?.bat_type)
  const description = getMetafieldValue(bat.metadata?.description)
  const keyClaim = getMetafieldValue(bat.metadata?.key_claim)
  const power = bat.metadata?.power_rating ?? 0
  const control = bat.metadata?.control_rating ?? 0

  return (
    <div className="container-wide py-14">
      <Link
        href="/bats"
        className="mb-8 inline-flex items-center text-sm font-bold text-ember hover:underline"
      >
        ← Back to all bats
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-edge bg-surface">
          {image ? (
            <img
              src={`${image.imgix_url}?w=1600&h=1200&fit=crop&auto=format,compress`}
              alt={name}
              width={800}
              height={600}
              className="w-full object-cover"
            />
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center text-7xl">🏏</div>
          )}
        </div>

        <div>
          <div className="flex items-center gap-3">
            {batType && (
              <span className="text-sm font-bold uppercase tracking-widest text-ember">
                {batType}
              </span>
            )}
            <LegalBadge isLegal={bat.metadata?.is_legal} />
          </div>
          <h1 className="mt-2 text-4xl font-black text-white">{name}</h1>

          {keyClaim && (
            <blockquote className="mt-5 border-l-4 border-ember pl-4 text-lg italic text-gray-200">
              {keyClaim}
            </blockquote>
          )}

          <div className="mt-8 space-y-5 rounded-2xl border border-edge bg-carbon p-6">
            <RatingBar label="Power" value={power} color="ember" />
            <RatingBar label="Control" value={control} color="gold" />
          </div>

          {description && (
            <div className="mt-8 prose prose-invert max-w-none prose-p:text-gray-300">
              <p>{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}