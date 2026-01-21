import type { UHNIUserProfile, ConciergeProfile, ZeroUISettings, UHNIPrivacySettings, DigitalFootprint } from "@/lib/types"

export const mockConciergeProfile: ConciergeProfile = {
  id: "concierge-sarah-001",
  name: "Sarah Chen",
  avatar: "/images/concierge/sarah-chen.jpg",
  specialty: ["Haute Couture", "Fine Jewelry", "Bespoke Tailoring", "Archive Sourcing"],
  availability: "available",
  responseTime: "< 5 minutes",
  languages: ["English", "Mandarin", "French"]
}

export const mockZeroUISettings: ZeroUISettings = {
  enabled: true,
  spendingThreshold: 5000,
  categoryPermissions: [
    { category: "Ready-to-wear", autoApprove: true },
    { category: "Accessories", autoApprove: true },
    { category: "Shoes", autoApprove: true },
    { category: "Bags", autoApprove: true },
    { category: "Jewelry", autoApprove: false },
    { category: "Watches", autoApprove: false }
  ],
  brandPermissions: [
    { brandId: "hermes", brandName: "Hermès", autoApprove: true },
    { brandId: "chanel", brandName: "Chanel", autoApprove: true },
    { brandId: "loro-piana", brandName: "Loro Piana", autoApprove: true },
    { brandId: "brunello-cucinelli", brandName: "Brunello Cucinelli", autoApprove: true }
  ],
  eventAnticipation: true,
  seasonalPreparation: true,
  travelPreparation: true,
  lastAutonomousAction: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  itemsPreparedThisMonth: 7,
  itemsApproved: 5,
  itemsDeclined: 2
}

export const mockUHNIPrivacySettings: UHNIPrivacySettings = {
  invisibleMode: false,
  biometricRequired: true,
  twoFactorEnabled: true,
  loginNotifications: true,
  e2eEncryption: true,
  discreetPackaging: true,
  discreetBilling: false
}

export const mockUHNIUserProfile: UHNIUserProfile = {
  id: "uhni-user-001",
  email: "client@private.com",
  firstName: "Alexandra",
  lastName: "Rothschild",
  avatar: "/images/users/avatar-placeholder.jpg",
  phone: "+1 (555) 000-0001",
  dateOfBirth: new Date("1978-06-15"),
  addresses: [
    {
      id: "addr-1",
      type: "shipping",
      isDefault: true,
      firstName: "Alexandra",
      lastName: "Rothschild",
      addressLine1: "One Central Park",
      addressLine2: "Penthouse Suite",
      city: "New York",
      state: "NY",
      postalCode: "10019",
      country: "United States",
      phone: "+1 (555) 000-0001"
    },
    {
      id: "addr-2",
      type: "shipping",
      isDefault: false,
      firstName: "Alexandra",
      lastName: "Rothschild",
      addressLine1: "Villa La Principessa",
      city: "Monaco",
      state: "Monte Carlo",
      postalCode: "98000",
      country: "Monaco",
      phone: "+377 00 00 00 00"
    }
  ],
  preferences: {
    currency: "USD",
    language: "en",
    newsletter: false,
    smsNotifications: true,
    pushNotifications: true,
    favoritesBrands: ["hermes", "chanel", "loro-piana", "brunello-cucinelli", "kiton"],
    favoriteColors: ["Navy", "Ivory", "Camel", "Black", "Burgundy"],
    avoidColors: [],
    sizePreferences: {
      tops: "IT 42",
      bottoms: "IT 42",
      dresses: "IT 42",
      shoes: "EU 38",
      rings: "6"
    }
  },
  styleProfile: {
    primary: "Timeless Elegance",
    secondary: ["Quiet Luxury", "Refined Minimalism"],
    occasions: ["Galas", "Business", "Travel", "Resort"],
    description: "Prefers understated luxury with impeccable quality. Gravitates toward heritage brands with exceptional craftsmanship."
  },
  privacySettings: {
    shareActivity: false,
    shareWishlist: false,
    allowRecommendations: true,
    learnFromBrowsing: true,
    learnFromPurchases: true,
    learnFromWardrobe: true,
    marketingEmails: false,
    productAlerts: true
  },
  wardrobe: [],
  outfits: [],
  wardrobeGaps: [],
  uhniTier: "black",
  memberSince: new Date("2019-03-15"),
  totalSpend: 2450000,
  conciergeId: "concierge-sarah-001"
}

export const mockDigitalFootprint: DigitalFootprint = {
  profile: { exists: true, lastUpdated: new Date() },
  preferences: { exists: true, itemCount: 47 },
  purchases: { exists: true, itemCount: 234 },
  browsing: { exists: true, sessionCount: 156 },
  conversations: { exists: true, messageCount: 89 },
  sourcing: { exists: true, requestCount: 12 }
}

export const mockUpcomingEvents = [
  {
    id: "event-1",
    name: "Gala Dinner",
    date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    type: "gala" as const,
    location: "The Metropolitan Museum of Art",
    dressCode: "Black Tie"
  },
  {
    id: "event-2",
    name: "Monaco Trip",
    date: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000), // 60 days from now
    type: "travel" as const,
    location: "Monaco",
    duration: "April 2-8"
  },
  {
    id: "event-3",
    name: "Board Meeting",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    type: "business" as const,
    location: "New York",
    dressCode: "Business Formal"
  }
]
