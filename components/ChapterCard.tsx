import Link from 'next/link'
import type { VideoChapter } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ChapterCardProps {
  chapter: VideoChapter
}

export default function ChapterCard({ chapter }: ChapterCardProps) {
  if (!chapter) return null

  const image = chapter.metadata?.chapter_image
  const title = getMetafieldValue(chapter.metadata?.title) || chapter.title
  const number = chapter.metadata?.chapter_number
  const timestamp = getMetafieldValue(chapter.metadata?.timestamp_range)
  const takeaway = getMetafieldValue(chapter.metadata?.key_takeaway)

  return (
    <Link
      href={`/chapters/${chapter.slug}`}
      className="group flex gap-4 overflow-hidden rounded-2xl border border-edge bg-carbon p-4 transition-all duration-300 hover:border-ember/50"
    >
      <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-xl bg-surface">
        {image ? (
          <img
            src={`${image.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
            alt={title}
            width={160}
            height={120}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl">🎬</div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-xs text-ember font-bold uppercase tracking-wider">
          {number !== undefined && <span>Chapter {number}</span>}
          {timestamp && <span className="text-gray-500">· {timestamp}</span>}
        </div>
        <h3 className="mt-1 truncate text-lg font-bold text-white group-hover:text-ember transition-colors">
          {title}
        </h3>
        {takeaway && (
          <p className="mt-1 text-sm text-gray-400 line-clamp-2">{takeaway}</p>
        )}
      </div>
    </Link>
  )
}