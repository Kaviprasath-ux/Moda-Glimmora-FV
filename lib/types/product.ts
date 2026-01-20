import type { BrandSummary } from "./brand"

export interface ProductImage {
  id: string
  url: string
  alt: string
  type: "main" | "detail" | "lifestyle" | "craftsmanship"
}

export interface ProductVariant {
  id: string
  size: string
  color: string
  colorHex?: string
  sku: string
  priceModifier: number
}

export interface AlternateLocation {
  location: string
  confidence: number
  estimatedDays: number
}

export interface RestockPrediction {
  expected: string
  confidence: number
}

export interface AvailabilityIntelligence {
  localAvailability: {
    available: boolean
    quantity?: number
    shipDays: number
  }
  alternateLocations: AlternateLocation[]
  restockPrediction?: RestockPrediction
  approvedAlternativeIds: string[]
}

export interface ProductCraftsmanship {
  materials: string[]
  techniques: string[]
  artisanStory?: string
  origin?: string
  sustainabilityNotes?: string
}

export interface ProductDimensions {
  fit: "slim" | "regular" | "relaxed" | "oversized"
  sizeGuide?: string
  modelInfo?: {
    height: string
    wearing: string
  }
}

export type PriceVisibility = "visible" | "hidden" | "on-request"
export type ExperienceMode = "story-only" | "experience-iv" | "experience-iv-commerce"

export interface Product {
  id: string
  slug: string
  brandId: string
  brand: BrandSummary
  name: string
  price: number
  priceVisibility: PriceVisibility
  description: string
  story: string
  category: string
  subcategory?: string
  images: ProductImage[]
  variants: ProductVariant[]
  availability: AvailabilityIntelligence
  craftsmanship: ProductCraftsmanship
  dimensions?: ProductDimensions
  ivEnabled: boolean
  experienceMode: ExperienceMode
  collectionId?: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface ProductSummary {
  id: string
  slug: string
  brandId: string
  brandName: string
  name: string
  price: number
  priceVisibility: PriceVisibility
  mainImage: string
  category: string
  ivEnabled: boolean
}

export interface ProductFilters {
  brandIds?: string[]
  categories?: string[]
  priceRange?: {
    min: number
    max: number
  }
  sizes?: string[]
  colors?: string[]
  inStock?: boolean
  ivEnabled?: boolean
}
