import type { InvisibleWardrobeItem, PreparedEvent } from "@/lib/types"
import { mockProducts } from "./products"

// Mock invisible wardrobe items (AGI-prepared)
export const mockInvisibleWardrobeItems: InvisibleWardrobeItem[] = [
  {
    id: "inv-001",
    product: mockProducts[0],
    preparedFor: "Gala Dinner",
    preparedForDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    explanation: "This silk evening jacket complements your existing navy trousers beautifully. The structured shoulder aligns with your preference for architectural silhouettes. Appropriate for black-tie optional events.",
    fitConfidence: 96,
    styleMatch: 94,
    status: "pending",
    preparedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  },
  {
    id: "inv-002",
    product: mockProducts[1],
    preparedFor: "Monaco Trip",
    preparedForDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
    explanation: "Perfect for yacht gatherings and casino evenings. The relaxed elegance matches Monaco's sophisticated casual dress code. Pairs exceptionally with your cream trousers.",
    fitConfidence: 92,
    styleMatch: 89,
    status: "pending",
    preparedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
  },
  {
    id: "inv-003",
    product: mockProducts[2],
    preparedFor: "Board Meeting",
    preparedForDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    explanation: "This executive blazer projects authority while maintaining elegance. The subtle texture adds visual interest without being distracting. Ideal for high-stakes presentations.",
    fitConfidence: 98,
    styleMatch: 96,
    status: "approved",
    preparedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
  }
]

export const mockPreparedEvents: PreparedEvent[] = [
  {
    id: "event-prep-001",
    name: "Gala Dinner",
    date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    type: "gala",
    items: [mockInvisibleWardrobeItems[0]],
    completeness: 65
  },
  {
    id: "event-prep-002",
    name: "Monaco Trip",
    date: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
    type: "travel",
    items: [mockInvisibleWardrobeItems[1]],
    completeness: 40
  },
  {
    id: "event-prep-003",
    name: "Board Meeting",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    type: "business",
    items: [mockInvisibleWardrobeItems[2]],
    completeness: 100
  }
]

// Private collections (pre-launch access)
export const mockPrivateCollections = [
  {
    id: "pc-001",
    brand: "Chanel",
    name: "Cruise 2027",
    description: "A journey through the Mediterranean, capturing the essence of coastal elegance.",
    publicRelease: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
    yourAccess: "NOW",
    heroImage: "/images/collections/chanel-cruise-2027.jpg",
    pieceCount: 48,
    highlights: ["Hand-beaded evening wear", "Nautical-inspired tailoring", "Artisanal knitwear"]
  },
  {
    id: "pc-002",
    brand: "Hermès",
    name: "Fall/Winter 2027",
    description: "An exploration of texture and movement, inspired by the changing seasons.",
    publicRelease: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    yourAccess: "NOW",
    heroImage: "/images/collections/hermes-fw2027.jpg",
    pieceCount: 62,
    highlights: ["Double-faced cashmere", "Sculptural leather goods", "Rich autumnal palette"]
  },
  {
    id: "pc-003",
    brand: "Loro Piana",
    name: "Spring Essentials",
    description: "Elevated basics in the finest materials for effortless sophistication.",
    publicRelease: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    yourAccess: "NOW",
    heroImage: "/images/collections/loro-piana-spring.jpg",
    pieceCount: 35,
    highlights: ["Baby cashmere knitwear", "Linen-silk blends", "Travel-ready separates"]
  }
]

// Heritage archives
export const mockArchivePieces = [
  {
    id: "archive-001",
    brand: "Hermès",
    name: "Kelly Bag Original Design Sketch",
    year: "1956",
    description: "Original design documentation from the creation of the iconic Kelly bag, renamed in honor of Grace Kelly.",
    image: "/images/archives/hermes-kelly-1956.jpg",
    significance: "Historical documentation of one of fashion's most iconic accessories.",
    viewingAvailable: true,
    purchaseAvailable: false
  },
  {
    id: "archive-002",
    brand: "Chanel",
    name: "Tweed Suit - Original 2.55 Era",
    year: "1955",
    description: "Authentic Chanel tweed suit from the year the iconic 2.55 bag was introduced.",
    image: "/images/archives/chanel-1955.jpg",
    significance: "Represents the golden era of Chanel's revolutionary designs.",
    viewingAvailable: true,
    purchaseAvailable: true,
    price: 85000
  },
  {
    id: "archive-003",
    brand: "Christian Dior",
    name: "Bar Suit",
    year: "1947",
    description: "The legendary Bar Suit that launched the New Look revolution.",
    image: "/images/archives/dior-bar-1947.jpg",
    significance: "One of the most influential fashion pieces of the 20th century.",
    viewingAvailable: true,
    purchaseAvailable: false
  },
  {
    id: "archive-004",
    brand: "Balenciaga",
    name: "Balloon Jacket",
    year: "1953",
    description: "Cristóbal Balenciaga's architectural masterpiece that redefined silhouettes.",
    image: "/images/archives/balenciaga-1953.jpg",
    significance: "Demonstrates Balenciaga's revolutionary approach to structure and form.",
    viewingAvailable: true,
    purchaseAvailable: false
  }
]

// Behind-the-scenes content
export const mockBehindTheScenes = [
  {
    id: "bts-001",
    brand: "Hermès",
    title: "Inside the Leather Workshop",
    description: "An exclusive look at how Hermès craftspeople create their legendary bags.",
    duration: "18 min",
    image: "/images/bts/hermes-atelier.jpg",
    type: "video",
    featured: true
  },
  {
    id: "bts-002",
    brand: "Chanel",
    title: "The Art of Tweed",
    description: "Journey to Scotland to see how Chanel's signature tweed is woven.",
    duration: "12 min",
    image: "/images/bts/chanel-tweed.jpg",
    type: "video",
    featured: false
  },
  {
    id: "bts-003",
    brand: "Loro Piana",
    title: "Cashmere: From Goat to Garment",
    description: "The complete journey of Loro Piana cashmere from Mongolia to Italy.",
    duration: "24 min",
    image: "/images/bts/loro-piana-cashmere.jpg",
    type: "video",
    featured: true
  }
]

// Curator connections
export const mockCurators = [
  {
    id: "curator-001",
    name: "Virginie Viard",
    role: "Creative Director",
    brand: "Chanel",
    availableForMeeting: true,
    specialty: "Ready-to-wear, Accessories"
  },
  {
    id: "curator-002",
    name: "Nadège Vanhee",
    role: "Creative Director",
    brand: "Hermès",
    availableForMeeting: false,
    specialty: "Women's Ready-to-wear"
  }
]
