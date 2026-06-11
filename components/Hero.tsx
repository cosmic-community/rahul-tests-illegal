import Link from 'next/link'
import type { VideoEpisode } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeroProps {
  episode: VideoEpisode | null
}

export default function Hero({ episode }: HeroProps) {
  const heroImage = episode?.metadata?.hero_image
  const title =
    getMetafieldValue(episode?.metadata?.title) ||
    episode?.title ||
    'KL Rahul Tests Illegal Cricket Bats'
  const introHook = getMetafieldValue(episode?.metadata?.intro_hook)

  return (
    <section className="relative overflow-hidden">
      {heroImage ? (
        <img
          src={`${heroImage.imgix_url}?w=2400&h=1200&fit=crop&auto=format,compress`}
          alt={title}
          width={1200}
          height={600}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-surface to-ink" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
      <div className="container-wide relative py-28 sm:py-36">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-ember/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ember border border-ember/30">
            Banned Cricket Bats
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-black leading-tight text-balance text-white">
            {title}
          </h1>
          {introHook && (
            <p className="mt-6 text-lg text-gray-300 leading-relaxed line-clamp-4">
              {introHook}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/bats"
              className="rounded-xl bg-ember px-6 py-3 font-bold text-white transition-colors hover:bg-ember-dark"
            >
              Explore the Bats
            </Link>
            <Link
              href="/chapters"
              className="rounded-xl border border-edge bg-carbon/60 px-6 py-3 font-bold text-white transition-colors hover:border-ember/50"
            >
              Watch the Chapters
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}