import Link from 'next/link'
import { getEpisode, getAllBats, getAllChapters } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import BatCard from '@/components/BatCard'
import ChapterCard from '@/components/ChapterCard'

export const revalidate = 60

export default async function HomePage() {
  const [episode, bats, chapters] = await Promise.all([
    getEpisode(),
    getAllBats(),
    getAllChapters(),
  ])

  const featuredBats = bats.slice(0, 3)
  const featuredChapters = chapters.slice(0, 4)

  return (
    <>
      <Hero episode={episode} />

      {featuredBats.length > 0 && (
        <section className="container-wide py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-white">The Bats</h2>
              <p className="mt-2 text-gray-400">
                Giant edges, massive sweet spots, and one wooden shovel.
              </p>
            </div>
            <Link
              href="/bats"
              className="hidden sm:inline text-sm font-bold text-ember hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBats.map((bat) => (
              <BatCard key={bat.id} bat={bat} />
            ))}
          </div>
        </section>
      )}

      {featuredChapters.length > 0 && (
        <section className="bg-carbon py-16">
          <div className="container-wide">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black text-white">The Chapters</h2>
                <p className="mt-2 text-gray-400">
                  A scene-by-scene breakdown of the experiment.
                </p>
              </div>
              <Link
                href="/chapters"
                className="hidden sm:inline text-sm font-bold text-ember hover:underline"
              >
                View all →
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {featuredChapters.map((chapter) => (
                <ChapterCard key={chapter.id} chapter={chapter} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}