export interface StyleEvolutionPoint {
  date: string
  style: string
  description: string
}

export interface StyleProfile {
  primary: string
  secondary: string[]
  evolution: StyleEvolutionPoint[]
  confidenceSensitivity: number
}

export interface UserPreferences {
  favoritesBrands: string[]
  favoriteColors: string[]
  avoidCategories: string[]
  budgetRange: {
    min: number
    max: number
  }
  preferredSizes: {
    tops: string
    bottoms: string
    shoes: string
    dresses?: string
  }
  occasions: string[]
}

export interface PrivacySettings {
  learnFromBrowsing: boolean
  learnFromPurchases: boolean
  learnFromWardrobe: boolean
  shareDataWithBrands: boolean
  marketingEmails: boolean
  productAlerts: boolean
}

export interface WardrobeItem {
  id: string
  productId?: string
  name: string
  brand: string
  category: string
  color: string
  image?: string
  purchaseDate?: string
  wearCount: number
  lastWorn?: string
  notes?: string
}

export interface Outfit {
  id: string
  name: string
  items: WardrobeItem[]
  occasions: string[]
  seasons: string[]
  image?: string
  createdAt: string
}

export interface WardrobeGap {
  id: string
  category: string
  description: string
  suggestedProducts: string[]
  priority: "high" | "medium" | "low"
}

export interface UserProfile {
  id: string
  email: string
  name: string
  avatar?: string
  phone?: string
  dateOfBirth?: string
  styleProfile: StyleProfile
  preferences: UserPreferences
  wardrobe: WardrobeItem[]
  outfits: Outfit[]
  gaps: WardrobeGap[]
  privacySettings: PrivacySettings
  createdAt: string
  updatedAt: string
}

export interface UserAddress {
  id: string
  label: string
  isDefault: boolean
  firstName: string
  lastName: string
  address1: string
  address2?: string
  city: string
  state: string
  postalCode: string
  country: string
  phone?: string
}
