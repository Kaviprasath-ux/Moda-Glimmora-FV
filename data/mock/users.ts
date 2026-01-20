import type { UserProfile, UserAddress, WardrobeItem, Outfit, WardrobeGap } from "@/lib/types"

export const mockWardrobeItems: WardrobeItem[] = [
  {
    id: "ward-1",
    productId: "4",
    name: "Aurora Silk Blouse",
    brand: "Maison Lumière",
    category: "Tops",
    color: "Ivory",
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80",
    purchaseDate: "2023-11-15",
    wearCount: 12,
    lastWorn: "2024-02-10"
  },
  {
    id: "ward-2",
    productId: "2",
    name: "Architect Tailored Wool Blazer",
    brand: "Casa Vitale",
    category: "Outerwear",
    color: "Charcoal",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80",
    purchaseDate: "2023-09-20",
    wearCount: 24,
    lastWorn: "2024-02-14"
  },
  {
    id: "ward-3",
    name: "Cashmere Turtleneck",
    brand: "Other Brand",
    category: "Tops",
    color: "Black",
    wearCount: 18,
    lastWorn: "2024-02-12"
  },
  {
    id: "ward-4",
    name: "Tailored Wool Trousers",
    brand: "Other Brand",
    category: "Bottoms",
    color: "Navy",
    wearCount: 30,
    lastWorn: "2024-02-14"
  }
]

export const mockOutfits: Outfit[] = [
  {
    id: "outfit-1",
    name: "Office Monday",
    items: [mockWardrobeItems[0], mockWardrobeItems[1], mockWardrobeItems[3]],
    occasions: ["Business", "Everyday"],
    seasons: ["Fall", "Winter", "Spring"],
    createdAt: "2024-01-15T00:00:00Z"
  },
  {
    id: "outfit-2",
    name: "Casual Friday",
    items: [mockWardrobeItems[2], mockWardrobeItems[3]],
    occasions: ["Casual", "Weekend"],
    seasons: ["Fall", "Winter"],
    createdAt: "2024-01-20T00:00:00Z"
  }
]

export const mockWardrobeGaps: WardrobeGap[] = [
  {
    id: "gap-1",
    category: "Dresses",
    description: "Your wardrobe lacks a versatile evening dress for formal occasions.",
    suggestedProducts: ["1"],
    priority: "high"
  },
  {
    id: "gap-2",
    category: "Outerwear",
    description: "Consider adding a quality coat for colder weather that pairs with your existing pieces.",
    suggestedProducts: ["3"],
    priority: "medium"
  },
  {
    id: "gap-3",
    category: "Bags",
    description: "A structured tote would complement your professional wardrobe.",
    suggestedProducts: ["5"],
    priority: "low"
  }
]

export const mockUserProfile: UserProfile = {
  id: "user-1",
  email: "elena.chen@example.com",
  name: "Elena Chen",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  phone: "+1 (555) 123-4567",
  dateOfBirth: "1988-06-15",
  styleProfile: {
    primary: "Modern Classic",
    secondary: ["Architectural", "Minimalist"],
    evolution: [
      {
        date: "2023-01-01",
        style: "Romantic",
        description: "Started with softer, more feminine pieces"
      },
      {
        date: "2023-06-15",
        style: "Transitional",
        description: "Began incorporating more structured elements"
      },
      {
        date: "2024-01-01",
        style: "Modern Classic",
        description: "Evolved into a refined, timeless aesthetic with architectural touches"
      }
    ],
    confidenceSensitivity: 85
  },
  preferences: {
    favoritesBrands: ["1", "2", "3"],
    favoriteColors: ["Navy", "Ivory", "Charcoal", "Champagne"],
    avoidCategories: ["Athletic Wear", "Casual Denim"],
    budgetRange: {
      min: 500,
      max: 5000
    },
    preferredSizes: {
      tops: "S",
      bottoms: "S",
      shoes: "38",
      dresses: "S"
    },
    occasions: ["Business", "Formal", "Weekend", "Evening"]
  },
  wardrobe: mockWardrobeItems,
  outfits: mockOutfits,
  gaps: mockWardrobeGaps,
  privacySettings: {
    learnFromBrowsing: true,
    learnFromPurchases: true,
    learnFromWardrobe: false,
    shareDataWithBrands: false,
    marketingEmails: true,
    productAlerts: true
  },
  createdAt: "2023-01-01T00:00:00Z",
  updatedAt: "2024-02-15T00:00:00Z"
}

export const mockUserAddresses: UserAddress[] = [
  {
    id: "addr-1",
    label: "Home",
    isDefault: true,
    firstName: "Elena",
    lastName: "Chen",
    address1: "450 Park Avenue",
    address2: "Apt 12B",
    city: "New York",
    state: "NY",
    postalCode: "10022",
    country: "United States",
    phone: "+1 (555) 123-4567"
  },
  {
    id: "addr-2",
    label: "Office",
    isDefault: false,
    firstName: "Elena",
    lastName: "Chen",
    address1: "1 World Trade Center",
    address2: "Floor 52",
    city: "New York",
    state: "NY",
    postalCode: "10007",
    country: "United States"
  }
]
