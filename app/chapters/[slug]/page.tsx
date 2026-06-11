// app/chapters/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getChapter, getAllChapters, getMetafieldValue } from '@/lib/cosmic'

export const revalidate = 60

export async function generateStaticParams() {
  const chapters = await getAllChapters()
  return chapters.map((chapter) => ({ slug: chapter.slug }))
}

export default async function ChapterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const chapter = await getChapter(slug)

  if (!chapter) {
    notFound()
  }

  const image = chapter.metadata?.chapter_image
  const title = getMetafieldValue(chapter.metadata?.title) || chapter.title
  const number = chapter.metadata?.chapter_number
  const timestamp = getMetafieldValue(chapter.metadata?.timestamp_range)
  const script = getMetafieldValue(chapter.metadata?.script_content)
  const takeaway = getMetafieldValue(chapter.metadata?.key_takeaway)
  const featuredBat = chapter.metadata?.featured_bat

  return (
    <article className="container-wide py-14">
      <Link
        href="/chapters"
        className="mb-8 inline-flex items-center text-sm font-bold text-ember hover:underline"
      >
        ← Back to all chapters
      </Link>

      <div className="max-w-3xl">
        <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-ember">
          {number !== undefined && <span>Chapter {number}</span>}
          {timestamp && <span className="text-gray-500">· {timestamp}</span>}
        </div>
        <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white text-balance">
          {title}
        </h1>
      </div>

      {image && (
        <div className="mt-8 overflow-hidden rounded-3xl border border-edge">
          <img
            src={`${image.imgix_url}?w=2000&h=1000&fit=crop&auto=format,compress`}
            alt={title}
            width={1000}
            height={500}
            className="w-full object-cover"
          />
        </div>
      )}

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {script ? (
            <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-p:leading-relaxed whitespace-pre-line">
              {script}
            </div>
          ) : (
            <p className="text-gray-500">No script content available.</p>
          )}
        </div>

        <aside className="space-y-6">
          {takeaway && (
            <div className="rounded-2xl border border-ember/30 bg-ember/5 p-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-ember">
                Key Takeaway
              </h3>
              <p className="mt-3 text-gray-200">{takeaway}</p>
            </div>
          )}

          {featuredBat && (
            <div className="rounded-2xl border border-edge bg-carbon p-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Featured Bat
              </h3>
              <Link
                href={`/bats/${featuredBat.slug}`}
                className="group mt-4 block"
              >
                {featuredBat.metadata?.image && (
                  <img
                    src={`${featuredBat.metadata.image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                    alt={getMetafieldValue(featuredBat.metadata?.name) || featuredBat.title}
                    width={300}
                    height={200}
                    className="w-full rounded-xl object-cover"
                  />
                )}
                <p className="mt-3 font-bold text-white group-hover:text-ember transition-colors">
                  {getMetafieldValue(featuredBat.metadata?.name) || featuredBat.title}
                </p>
              </Link>
            </div>
          )}
        </aside>
      </div>
    </article>
  )
}