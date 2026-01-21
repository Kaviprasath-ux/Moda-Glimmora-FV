import type { SourcingRequest, SourcingResult, RareFind, GlobalAvailability } from "@/lib/types"

export const mockSourcingRequests: SourcingRequest[] = [
  {
    id: "src-001",
    description: "Vintage Hermès Kelly 28 in Gold with gold hardware. Preferably from the 1970s-1980s era. Box leather preferred, but will consider Togo.",
    referenceImages: ["/images/sourcing/kelly-reference-1.jpg", "/images/sourcing/kelly-reference-2.jpg"],
    priority: "urgent",
    budgetMin: 35000,
    budgetMax: 55000,
    status: "located",
    results: [
      {
        id: "result-001",
        requestId: "src-001",
        item: {
          name: "Hermès Kelly 28 Gold Box Leather",
          description: "Exceptional vintage Kelly from 1982. Original hardware, minimal patina, beautifully aged leather.",
          images: ["/images/sourcing/kelly-result-1.jpg"],
          brand: "Hermès",
          era: "1982",
          condition: "Excellent",
          conditionScore: 8.5,
          provenance: "Private collector, Tokyo",
          authenticity: "verified"
        },
        location: "Tokyo, Japan",
        locationCountry: "Japan",
        price: 45000,
        currency: "USD",
        confidence: 87,
        source: "collector",
        available: true,
        holdExpires: new Date(Date.now() + 48 * 60 * 60 * 1000), // 48 hours
        sellerNotes: "Collector is willing to negotiate. Has original box and dust bag."
      }
    ],
    networksContacted: 8,
    potentialLeads: 3,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    estimatedCompletion: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
  },
  {
    id: "src-002",
    description: "Chanel Haute Couture evening coat from the 1960s. Looking for something with exceptional beadwork or embroidery. Karl Lagerfeld era not preferred.",
    referenceImages: ["/images/sourcing/chanel-reference-1.jpg"],
    priority: "standard",
    budgetMin: 50000,
    budgetMax: 150000,
    status: "searching",
    networksContacted: 12,
    potentialLeads: 3,
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000)
  },
  {
    id: "src-003",
    description: "Brunello Cucinelli cashmere coat, current season, Navy, size IT 42. Sold out everywhere.",
    priority: "urgent",
    budgetMin: 5000,
    budgetMax: 7000,
    status: "negotiating",
    results: [
      {
        id: "result-003",
        requestId: "src-003",
        item: {
          name: "Brunello Cucinelli Double-Breasted Cashmere Coat",
          description: "Current season, brand new with tags. Navy, IT 42.",
          images: ["/images/sourcing/bc-coat-1.jpg"],
          brand: "Brunello Cucinelli",
          condition: "New with tags",
          conditionScore: 10,
          authenticity: "verified"
        },
        location: "Milan, Italy",
        locationCountry: "Italy",
        price: 5890,
        currency: "USD",
        confidence: 95,
        source: "boutique",
        available: true,
        sellerNotes: "Found at flagship store. Can ship within 24 hours."
      }
    ],
    networksContacted: 5,
    potentialLeads: 2,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000)
  }
]

export const mockRareFinds: RareFind[] = [
  {
    id: "rare-001",
    item: {
      name: "Hermès Birkin 25 Himalaya",
      description: "Exceptionally rare Himalaya Birkin with diamond hardware. Museum-quality piece.",
      images: ["/images/sourcing/himalaya-1.jpg", "/images/sourcing/himalaya-2.jpg"],
      brand: "Hermès",
      era: "2019",
      condition: "Pristine",
      conditionScore: 9.8,
      provenance: "Private estate, Geneva",
      authenticity: "verified"
    },
    source: "private_network",
    price: 450000,
    currency: "USD",
    location: "Geneva, Switzerland",
    availableUntil: new Date(Date.now() + 72 * 60 * 60 * 1000),
    exclusiveAccess: true,
    interestedClients: 3
  },
  {
    id: "rare-002",
    item: {
      name: "Chanel 2.55 Original 1955",
      description: "Original 2.55 from 1955, the year of its creation. Extraordinarily rare museum piece.",
      images: ["/images/sourcing/chanel-255-1.jpg"],
      brand: "Chanel",
      era: "1955",
      condition: "Very Good",
      conditionScore: 7.5,
      provenance: "Estate of a Paris socialite",
      authenticity: "verified"
    },
    source: "auction",
    price: 85000,
    currency: "USD",
    location: "Paris, France",
    exclusiveAccess: true,
    interestedClients: 1
  },
  {
    id: "rare-003",
    item: {
      name: "Christian Dior Bar Suit 1947",
      description: "Authentic New Look Bar Suit from the legendary 1947 collection. Historical fashion artifact.",
      images: ["/images/sourcing/dior-bar-1.jpg"],
      brand: "Christian Dior",
      era: "1947",
      condition: "Good for age",
      conditionScore: 6.5,
      provenance: "Dior Archive Deaccession",
      authenticity: "verified"
    },
    source: "private_network",
    price: 120000,
    currency: "USD",
    location: "Paris, France",
    exclusiveAccess: true,
    interestedClients: 2
  }
]

export const mockGlobalAvailability: GlobalAvailability = {
  productId: "prod-example",
  productName: "Loro Piana Cashmere Travel Jacket",
  locations: [
    { city: "New York", country: "USA", store: "Loro Piana Madison Ave", inStock: false, canShip: true, estimatedDelivery: "3-5 days" },
    { city: "Milan", country: "Italy", store: "Loro Piana Via Montenapoleone", inStock: true, quantity: 2, canShip: true, estimatedDelivery: "5-7 days" },
    { city: "Paris", country: "France", store: "Loro Piana Rue du Faubourg", inStock: false, canShip: true, estimatedDelivery: "4-6 days" },
    { city: "Tokyo", country: "Japan", store: "Loro Piana Ginza", inStock: true, quantity: 1, canShip: true, estimatedDelivery: "7-10 days" },
    { city: "Dubai", country: "UAE", store: "Loro Piana Dubai Mall", inStock: true, quantity: 3, canShip: true, estimatedDelivery: "5-7 days" }
  ],
  privateNetworkAvailable: true,
  privateNetworkConfidence: 92
}
