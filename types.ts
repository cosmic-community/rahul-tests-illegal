// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export type BatType =
  | 'Giant Edge'
  | 'Massive Sweet Spot'
  | 'Oversized'
  | 'Traditional'
  | string;

export interface Bat extends CosmicObject {
  type: 'bats';
  metadata: {
    name?: string;
    description?: string;
    bat_type?: BatType;
    key_claim?: string;
    power_rating?: number;
    control_rating?: number;
    is_legal?: boolean;
    image?: CosmicImage;
  };
}

export interface VideoChapter extends CosmicObject {
  type: 'video-chapters';
  metadata: {
    title?: string;
    chapter_number?: number;
    timestamp_range?: string;
    script_content?: string;
    key_takeaway?: string;
    featured_bat?: Bat;
    chapter_image?: CosmicImage;
  };
}

export interface VideoEpisode extends CosmicObject {
  type: 'video-episode';
  metadata: {
    title?: string;
    intro_hook?: string;
    summary?: string;
    hero_image?: CosmicImage;
    featured_bats?: Bat[];
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}