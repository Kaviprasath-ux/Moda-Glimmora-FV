export type UHNITier = "platinum" | "diamond" | "black"

export interface UHNIUserProfile {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  phone?: string
  dateOfBirth?: Date
  addresses: UHNIAddress[]
  preferences: UHNIPreferences
  styleProfile: {
    primary: string
    secondary: string[]
    occasions: string[]
    description: string
  }
  privacySettings: {
    shareActivity: boolean
    shareWishlist: boolean
    allowRecommendations: boolean
    learnFromBrowsing: boolean
    learnFromPurchases: boolean
    learnFromWardrobe: boolean
    marketingEmails: boolean
    productAlerts: boolean
  }
  wardrobe: UHNIWardrobeItem[]
  outfits: UHNIOutfit[]
  wardrobeGaps: UHNIWardrobeGap[]
  uhniTier: UHNITier
  memberSince: Date
  totalSpend: number
  conciergeId: string
}

export interface UHNIAddress {
  id: string
  type: "shipping" | "billing"
  isDefault: boolean
  firstName: string
  lastName: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  postalCode: string
  country: string
  phone?: string
}

export interface UHNIPreferences {
  currency: string
  language: string
  newsletter: boolean
  smsNotifications: boolean
  pushNotifications: boolean
  favoritesBrands: string[]
  favoriteColors: string[]
  avoidColors: string[]
  sizePreferences: {
    tops: string
    bottoms: string
    dresses: string
    shoes: string
    rings?: string
  }
}

export interface UHNIWardrobeItem {
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
}

export interface UHNIOutfit {
  id: string
  name: string
  items: UHNIWardrobeItem[]
  occasions: string[]
  seasons: string[]
}

export interface UHNIWardrobeGap {
  id: string
  category: string
  description: string
  suggestedProducts: string[]
  priority: "high" | "medium" | "low"
}

export interface ConciergeProfile {
  id: string
  name: string
  avatar: string
  specialty: string[]
  availability: "available" | "busy" | "offline"
  responseTime: string
  languages: string[]
}

export interface ZeroUISettings {
  enabled: boolean
  spendingThreshold: number
  categoryPermissions: CategoryPermission[]
  brandPermissions: BrandPermission[]
  eventAnticipation: boolean
  seasonalPreparation: boolean
  travelPreparation: boolean
  lastAutonomousAction?: Date
  itemsPreparedThisMonth: number
  itemsApproved: number
  itemsDeclined: number
}

export interface CategoryPermission {
  category: string
  autoApprove: boolean
}

export interface BrandPermission {
  brandId: string
  brandName: string
  autoApprove: boolean
}

export interface UHNIPrivacySettings {
  invisibleMode: boolean
  biometricRequired: boolean
  twoFactorEnabled: boolean
  loginNotifications: boolean
  e2eEncryption: boolean
  discreetPackaging: boolean
  discreetBilling: boolean
}

export interface DigitalFootprint {
  profile: { exists: boolean; lastUpdated: Date }
  preferences: { exists: boolean; itemCount: number }
  purchases: { exists: boolean; itemCount: number }
  browsing: { exists: boolean; sessionCount: number }
  conversations: { exists: boolean; messageCount: number }
  sourcing: { exists: boolean; requestCount: number }
}
