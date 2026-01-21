export interface TimelineEvent {
  id: string
  year: number
  title: string
  description: string
  image?: string
}

export interface CraftStory {
  id: string
  title: string
  description: string
  technique: string
  artisan?: {
    name: string
    role: string
    image?: string
    bio: string
  }
  images: string[]
  videoUrl?: string
}

export interface Collection {
  id: string
  slug: string
  name: string
  season: string
  year: number
  description: string
  story: string
  heroImage: string
  images: string[]
  productIds: string[]
}

export interface ArtistCollaboration {
  id: string
  artistName: string
  artistRole: string
  title: string
  description: string
  year: number
  images: string[]
  productIds?: string[]
}

export interface BrandHeritage {
  founded: number
  founder: string
  origin: string
  story: string
  timeline: TimelineEvent[]
}

export interface Brand {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  heroImage: string
  logo: string
  heritage: BrandHeritage
  craftsmanship: CraftStory[]
  collections: Collection[]
  collaborations?: ArtistCollaboration[]
  philosophy?: string
  sustainabilityCommitment?: string
}

export interface BrandSummary {
  id: string
  slug: string
  name: string
  tagline: string
  logo: string
  heroImage: string
}
