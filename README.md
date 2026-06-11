# Rahul Tests Illegal

![App Preview](https://imgix.cosmicjs.com/ef36d6b0-659f-11f1-8e52-17b2565830aa-autopilot-photo-1531415074968-036ba1b575da-1781187301149.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A bold, cinematic website built around the "KL Rahul Tests Illegal Cricket Bats" video episode. Explore each outrageous bat, dive into chapter-by-chapter breakdowns, and discover whether banned cricket bats are genuine game-changers or just expensive pieces of wood.

## Features

- 🏏 **Bats Showcase** — Browse each illegal bat with power/control ratings, key claims, and legality status
- 🎬 **Video Chapters** — Read every chapter of the script with timestamps and key takeaways
- 📺 **Episode Hero** — Cinematic intro hook and featured bats lineup
- ⚡ **Power vs Control Visualizations** — Animated rating bars for each bat
- 📱 **Fully Responsive** — Beautiful on mobile, tablet, and desktop
- 🎨 **Dark Cinematic Theme** — Bold typography and high-impact design

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a2ac27cc3293c121782a800&clone_repository=6a2ac384c3293c121782a84d)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: KL Rahul Tests Illegal Cricket Bats — INTRO HOOK, CHAPTER 1: WHY SOME CRICKET BATS ARE ILLEGAL, CHAPTER 2: THE GIANT EDGE MONSTER, CHAPTER 3: THE MASSIVE SWEET SPOT BAT, CHAPTER 4: THE CHEAT CODE BAT, CHAPTER 5: THE SCIENCE OF POWER. A video featuring KL Rahul testing outrageous, oversized, and banned cricket bats — bats with giant edges, massive sweet spots, and one bat so oversized it looks like a wooden shovel. Exploring whether these bats are genuine game changers or just expensive pieces of wood."

### Code Generation Prompt

> Build a Next.js application for a website called "Rahul Tests Illegal". The content is managed in Cosmic CMS with the following object types: bats, video-chapters, video-episode. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Cosmic** ([SDK docs](https://www.cosmicjs.com/docs))

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with a bucket containing `bats`, `video-chapters`, and `video-episode` object types

### Installation

```bash
bun install
```

Create your environment variables (these are provided automatically when deployed through Cosmic):

```bash
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:

```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all bats
const { objects: bats } = await cosmic.objects
  .find({ type: 'bats' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single chapter by slug
const { object: chapter } = await cosmic.objects
  .findOne({ type: 'video-chapters', slug: 'chapter-1' })
  .depth(1)
```

## Cosmic CMS Integration

This app reads three object types from your Cosmic bucket:

- **bats** — name, description, bat_type, key_claim, power_rating, control_rating, is_legal, image
- **video-chapters** — title, chapter_number, timestamp_range, script_content, key_takeaway, featured_bat, chapter_image
- **video-episode** — title, intro_hook, summary, hero_image, featured_bats

All content is fetched server-side using the [Cosmic SDK](https://www.cosmicjs.com/docs) with the `depth` parameter to resolve connected objects.

## Deployment Options

- **Vercel** — Connect your repository and add the Cosmic environment variables in the dashboard.
- **Netlify** — Configure build command `bun run build` and set environment variables.

<!-- README_END -->