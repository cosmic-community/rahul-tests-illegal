import { createBucketClient } from '@cosmicjs/sdk'
import type { Bat, VideoChapter, VideoEpisode } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Safely render any metafield value as a string
export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export async function getAllBats(): Promise<Bat[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'bats' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Bat[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch bats')
  }
}

export async function getBat(slug: string): Promise<Bat | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'bats', slug })
      .depth(1)
    return response.object as Bat
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch bat')
  }
}

export async function getAllChapters(): Promise<VideoChapter[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'video-chapters' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    const chapters = response.objects as VideoChapter[]
    return chapters.sort((a, b) => {
      const numA = a.metadata?.chapter_number ?? 0
      const numB = b.metadata?.chapter_number ?? 0
      return numA - numB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch chapters')
  }
}

export async function getChapter(slug: string): Promise<VideoChapter | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'video-chapters', slug })
      .depth(1)
    return response.object as VideoChapter
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch chapter')
  }
}

export async function getEpisode(): Promise<VideoEpisode | null> {
  try {
    const response = await cosmic.objects
      .find({ type: 'video-episode' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    const episodes = response.objects as VideoEpisode[]
    return episodes[0] ?? null
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch episode')
  }
}