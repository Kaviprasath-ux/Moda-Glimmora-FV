export type SourcingPriority = "standard" | "urgent" | "whenever"
export type SourcingStatus = "searching" | "located" | "negotiating" | "completed" | "cancelled"
export type SourcingSource = "private_network" | "auction" | "boutique" | "collector" | "atelier"

export interface SourcingRequest {
  id: string
  description: string
  referenceImages?: string[]
  priority: SourcingPriority
  budgetMin?: number
  budgetMax?: number
  status: SourcingStatus
  results?: SourcingResult[]
  networksContacted: number
  potentialLeads: number
  createdAt: Date
  updatedAt: Date
  estimatedCompletion?: Date
}

export interface SourcingResult {
  id: string
  requestId: string
  item: SourcedItem
  location: string
  locationCountry: string
  price: number
  currency: string
  confidence: number
  source: SourcingSource
  available: boolean
  holdExpires?: Date
  sellerNotes?: string
}

export interface SourcedItem {
  name: string
  description: string
  images: string[]
  brand: string
  era?: string
  condition: string
  conditionScore: number // 1-10
  provenance?: string
  authenticity: "verified" | "pending" | "uncertain"
  dimensions?: {
    height?: number
    width?: number
    depth?: number
  }
}

export interface RareFind {
  id: string
  item: SourcedItem
  source: SourcingSource
  price: number
  currency: string
  location: string
  availableUntil?: Date
  exclusiveAccess: boolean
  interestedClients: number
}

export interface GlobalAvailability {
  productId: string
  productName: string
  locations: {
    city: string
    country: string
    store: string
    inStock: boolean
    quantity?: number
    canShip: boolean
    estimatedDelivery?: string
  }[]
  privateNetworkAvailable: boolean
  privateNetworkConfidence?: number
}
