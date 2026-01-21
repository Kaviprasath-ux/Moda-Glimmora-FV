export type BespokeCategory = "outerwear" | "evening" | "tailoring" | "leather_goods" | "jewelry" | "shoes" | "accessories" | "other"
export type BespokeStatus = "consultation" | "design" | "fabric" | "creation" | "fitting" | "completion" | "delivered"

export interface BespokeProject {
  id: string
  userId: string
  title: string
  category: BespokeCategory
  atelier: BespokeAtelier
  status: BespokeStatus
  timeline: BespokeStage[]
  moodboard: MoodboardItem[]
  measurements?: BespokeMeasurements
  estimatedCompletion: Date
  actualCompletion?: Date
  price: number
  currency: string
  deposit: number
  depositPaid: boolean
  createdAt: Date
  updatedAt: Date
  notes?: string
}

export interface BespokeAtelier {
  id: string
  name: string
  location: string
  country: string
  specialty: string[]
  contactName: string
  contactEmail?: string
  website?: string
  rating?: number
}

export interface BespokeStage {
  id: string
  name: string
  description: string
  status: "completed" | "current" | "upcoming"
  startedAt?: Date
  completedAt?: Date
  notes?: string
  approvalRequired: boolean
  approved?: boolean
  approvedAt?: Date
  attachments?: string[]
  options?: BespokeOption[]
}

export interface BespokeOption {
  id: string
  name: string
  description: string
  image?: string
  priceAdjustment?: number
  selected: boolean
}

export interface MoodboardItem {
  id: string
  type: "image" | "color" | "fabric" | "reference"
  url?: string
  color?: string
  name: string
  notes?: string
}

export interface BespokeMeasurements {
  id: string
  userId: string
  type: "body" | "garment"
  measurements: {
    name: string
    value: number
    unit: "cm" | "in"
  }[]
  takenAt: Date
  takenBy?: string
  notes?: string
}

export interface BespokeRequest {
  id: string
  userId: string
  category: BespokeCategory
  description: string
  inspiration: string[]
  budgetRange: {
    min: number
    max: number
    currency: string
  }
  timeline?: string
  preferredAteliers?: string[]
  status: "submitted" | "reviewing" | "matched" | "converted"
  createdAt: Date
}
