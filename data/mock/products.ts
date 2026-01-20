import type { Product, ProductSummary } from "@/lib/types"

export const mockProducts: Product[] = [
  {
    id: "1",
    slug: "silk-evening-gown-celestine",
    brandId: "1",
    brand: {
      id: "1",
      slug: "maison-lumiere",
      name: "Maison Lumière",
      tagline: "Illuminating elegance since 1892",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
      heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
    },
    name: "Celestine Silk Evening Gown",
    price: 4800,
    priceVisibility: "visible",
    description: "A floor-length silk gown featuring our signature hand-pleated bodice and flowing skirt.",
    story: "The Celestine gown was born from a moment of inspiration in our Paris atelier. Head designer Claire Montague was watching light play across the Seine at dusk when she envisioned this piece—a garment that would capture that fleeting, luminous quality of twilight in silk.",
    category: "Dresses",
    subcategory: "Evening Gowns",
    images: [
      { id: "1", url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", alt: "Celestine Silk Evening Gown - Front", type: "main" },
      { id: "2", url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80", alt: "Celestine Silk Evening Gown - Detail", type: "detail" },
      { id: "3", url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80", alt: "Celestine Silk Evening Gown - Lifestyle", type: "lifestyle" }
    ],
    variants: [
      { id: "1-1", size: "XS", color: "Midnight Blue", colorHex: "#191970", sku: "ML-CEL-XS-MB", priceModifier: 0 },
      { id: "1-2", size: "S", color: "Midnight Blue", colorHex: "#191970", sku: "ML-CEL-S-MB", priceModifier: 0 },
      { id: "1-3", size: "M", color: "Midnight Blue", colorHex: "#191970", sku: "ML-CEL-M-MB", priceModifier: 0 },
      { id: "1-4", size: "L", color: "Midnight Blue", colorHex: "#191970", sku: "ML-CEL-L-MB", priceModifier: 0 },
      { id: "1-5", size: "S", color: "Champagne", colorHex: "#F7E7CE", sku: "ML-CEL-S-CH", priceModifier: 0 },
      { id: "1-6", size: "M", color: "Champagne", colorHex: "#F7E7CE", sku: "ML-CEL-M-CH", priceModifier: 0 }
    ],
    availability: {
      localAvailability: { available: true, quantity: 3, shipDays: 2 },
      alternateLocations: [
        { location: "Paris Boutique", confidence: 94, estimatedDays: 4 },
        { location: "Milan Boutique", confidence: 87, estimatedDays: 5 }
      ],
      restockPrediction: { expected: "2024-04-15", confidence: 85 },
      approvedAlternativeIds: ["2", "3"]
    },
    craftsmanship: {
      materials: ["100% Mulberry Silk", "Silk Charmeuse Lining"],
      techniques: ["Hand-pleating", "French seaming", "Invisible zipper"],
      artisanStory: "Each Celestine gown is hand-pleated by our artisans in Lyon, a process that takes over 20 hours per garment.",
      origin: "Made in France",
      sustainabilityNotes: "Our silk is sourced from certified sustainable farms."
    },
    dimensions: {
      fit: "regular",
      sizeGuide: "True to size. Model is 5'10\" wearing size S.",
      modelInfo: { height: "5'10\"", wearing: "S" }
    },
    ivEnabled: true,
    experienceMode: "experience-iv-commerce",
    collectionId: "1",
    tags: ["Evening", "Formal", "Silk", "Gown", "Special Occasion"],
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-02-01T00:00:00Z"
  },
  {
    id: "2",
    slug: "tailored-wool-blazer-architect",
    brandId: "2",
    brand: {
      id: "2",
      slug: "casa-vitale",
      name: "Casa Vitale",
      tagline: "Italian artistry, modern vision",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
      heroImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80"
    },
    name: "Architect Tailored Wool Blazer",
    price: 2400,
    priceVisibility: "visible",
    description: "A structured double-breasted blazer crafted from Italian virgin wool with peak lapels.",
    story: "The Architect blazer embodies Casa Vitale's philosophy of precision. Inspired by the clean lines of Milanese architecture, it features our proprietary shoulder construction that creates a silhouette both commanding and comfortable.",
    category: "Outerwear",
    subcategory: "Blazers",
    images: [
      { id: "1", url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80", alt: "Architect Wool Blazer - Front", type: "main" },
      { id: "2", url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80", alt: "Architect Wool Blazer - Detail", type: "detail" }
    ],
    variants: [
      { id: "2-1", size: "36", color: "Charcoal", colorHex: "#36454F", sku: "CV-ARC-36-CH", priceModifier: 0 },
      { id: "2-2", size: "38", color: "Charcoal", colorHex: "#36454F", sku: "CV-ARC-38-CH", priceModifier: 0 },
      { id: "2-3", size: "40", color: "Charcoal", colorHex: "#36454F", sku: "CV-ARC-40-CH", priceModifier: 0 },
      { id: "2-4", size: "42", color: "Charcoal", colorHex: "#36454F", sku: "CV-ARC-42-CH", priceModifier: 0 },
      { id: "2-5", size: "40", color: "Navy", colorHex: "#000080", sku: "CV-ARC-40-NV", priceModifier: 0 }
    ],
    availability: {
      localAvailability: { available: true, quantity: 5, shipDays: 2 },
      alternateLocations: [
        { location: "Milan Flagship", confidence: 98, estimatedDays: 3 }
      ],
      approvedAlternativeIds: ["4"]
    },
    craftsmanship: {
      materials: ["100% Italian Virgin Wool", "Bemberg Lining"],
      techniques: ["Half-canvas construction", "Hand-finished lapels", "Working buttonholes"],
      origin: "Made in Italy"
    },
    dimensions: {
      fit: "slim",
      sizeGuide: "Slim fit. We recommend ordering your usual size."
    },
    ivEnabled: true,
    experienceMode: "experience-iv-commerce",
    collectionId: "2",
    tags: ["Business", "Tailoring", "Wool", "Blazer", "Power Dressing"],
    createdAt: "2024-01-20T00:00:00Z",
    updatedAt: "2024-02-05T00:00:00Z"
  },
  {
    id: "3",
    slug: "cashmere-wrap-coat-serenity",
    brandId: "3",
    brand: {
      id: "3",
      slug: "atelier-nord",
      name: "Atelier Nord",
      tagline: "Scandinavian simplicity, exceptional quality",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
      heroImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80"
    },
    name: "Serenity Cashmere Wrap Coat",
    price: 3200,
    priceVisibility: "visible",
    description: "An enveloping wrap coat in pure Mongolian cashmere with a minimalist tie closure.",
    story: "Serenity is our interpretation of the perfect coat—one that wraps you in warmth while maintaining an effortless silhouette. The cashmere is sourced from herders in Inner Mongolia who practice traditional, sustainable methods.",
    category: "Outerwear",
    subcategory: "Coats",
    images: [
      { id: "1", url: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80", alt: "Serenity Cashmere Coat - Front", type: "main" },
      { id: "2", url: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80", alt: "Serenity Cashmere Coat - Detail", type: "detail" }
    ],
    variants: [
      { id: "3-1", size: "XS", color: "Oatmeal", colorHex: "#D4C4A8", sku: "AN-SER-XS-OA", priceModifier: 0 },
      { id: "3-2", size: "S", color: "Oatmeal", colorHex: "#D4C4A8", sku: "AN-SER-S-OA", priceModifier: 0 },
      { id: "3-3", size: "M", color: "Oatmeal", colorHex: "#D4C4A8", sku: "AN-SER-M-OA", priceModifier: 0 },
      { id: "3-4", size: "L", color: "Oatmeal", colorHex: "#D4C4A8", sku: "AN-SER-L-OA", priceModifier: 0 },
      { id: "3-5", size: "S", color: "Charcoal Grey", colorHex: "#36454F", sku: "AN-SER-S-CG", priceModifier: 0 }
    ],
    availability: {
      localAvailability: { available: false, shipDays: 0 },
      alternateLocations: [
        { location: "Stockholm Flagship", confidence: 92, estimatedDays: 4 },
        { location: "Copenhagen Store", confidence: 78, estimatedDays: 5 }
      ],
      restockPrediction: { expected: "2024-03-01", confidence: 90 },
      approvedAlternativeIds: ["5"]
    },
    craftsmanship: {
      materials: ["100% Mongolian Cashmere"],
      techniques: ["Single-origin cashmere", "Hand-finished seams", "Natural dyes"],
      origin: "Made in Sweden",
      sustainabilityNotes: "Our cashmere comes from certified sustainable herders, and we use only natural, low-impact dyes."
    },
    dimensions: {
      fit: "relaxed",
      sizeGuide: "Relaxed fit designed to be worn over layers."
    },
    ivEnabled: true,
    experienceMode: "experience-iv-commerce",
    collectionId: "3",
    tags: ["Winter", "Cashmere", "Coat", "Minimalist", "Investment Piece"],
    createdAt: "2024-01-10T00:00:00Z",
    updatedAt: "2024-01-25T00:00:00Z"
  },
  {
    id: "4",
    slug: "silk-blouse-aurora",
    brandId: "1",
    brand: {
      id: "1",
      slug: "maison-lumiere",
      name: "Maison Lumière",
      tagline: "Illuminating elegance since 1892",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
      heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
    },
    name: "Aurora Silk Blouse",
    price: 890,
    priceVisibility: "visible",
    description: "A fluid silk blouse with delicate mother-of-pearl buttons and a softly draped neckline.",
    story: "Aurora represents the essence of everyday luxury—a piece that elevates any wardrobe while remaining effortlessly wearable.",
    category: "Tops",
    subcategory: "Blouses",
    images: [
      { id: "1", url: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80", alt: "Aurora Silk Blouse - Front", type: "main" }
    ],
    variants: [
      { id: "4-1", size: "XS", color: "Ivory", colorHex: "#FFFFF0", sku: "ML-AUR-XS-IV", priceModifier: 0 },
      { id: "4-2", size: "S", color: "Ivory", colorHex: "#FFFFF0", sku: "ML-AUR-S-IV", priceModifier: 0 },
      { id: "4-3", size: "M", color: "Ivory", colorHex: "#FFFFF0", sku: "ML-AUR-M-IV", priceModifier: 0 },
      { id: "4-4", size: "L", color: "Ivory", colorHex: "#FFFFF0", sku: "ML-AUR-L-IV", priceModifier: 0 }
    ],
    availability: {
      localAvailability: { available: true, quantity: 8, shipDays: 1 },
      alternateLocations: [],
      approvedAlternativeIds: []
    },
    craftsmanship: {
      materials: ["100% Silk Crêpe de Chine", "Mother-of-Pearl Buttons"],
      techniques: ["French seams", "Hand-finished buttonholes"],
      origin: "Made in France"
    },
    dimensions: {
      fit: "regular"
    },
    ivEnabled: true,
    experienceMode: "experience-iv-commerce",
    tags: ["Business", "Casual", "Silk", "Blouse", "Versatile"],
    createdAt: "2024-01-18T00:00:00Z",
    updatedAt: "2024-02-02T00:00:00Z"
  },
  {
    id: "5",
    slug: "leather-tote-classico",
    brandId: "2",
    brand: {
      id: "2",
      slug: "casa-vitale",
      name: "Casa Vitale",
      tagline: "Italian artistry, modern vision",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
      heroImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80"
    },
    name: "Classico Leather Tote",
    price: 1650,
    priceVisibility: "visible",
    description: "A structured tote bag crafted from full-grain Italian leather with gold-tone hardware.",
    story: "The Classico tote represents decades of leather-working expertise, designed to become more beautiful with age.",
    category: "Bags",
    subcategory: "Totes",
    images: [
      { id: "1", url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80", alt: "Classico Leather Tote - Front", type: "main" }
    ],
    variants: [
      { id: "5-1", size: "One Size", color: "Cognac", colorHex: "#9A463D", sku: "CV-CLS-OS-CO", priceModifier: 0 },
      { id: "5-2", size: "One Size", color: "Black", colorHex: "#000000", sku: "CV-CLS-OS-BK", priceModifier: 0 }
    ],
    availability: {
      localAvailability: { available: true, quantity: 4, shipDays: 2 },
      alternateLocations: [
        { location: "Milan Flagship", confidence: 100, estimatedDays: 3 }
      ],
      approvedAlternativeIds: []
    },
    craftsmanship: {
      materials: ["Full-Grain Italian Leather", "Cotton Twill Lining", "Gold-Tone Brass Hardware"],
      techniques: ["Saddle-stitching", "Hand-burnished edges", "Reinforced base"],
      origin: "Made in Italy"
    },
    dimensions: {
      fit: "regular"
    },
    ivEnabled: false,
    experienceMode: "experience-iv-commerce",
    tags: ["Business", "Everyday", "Leather", "Tote", "Investment Piece"],
    createdAt: "2024-01-22T00:00:00Z",
    updatedAt: "2024-02-08T00:00:00Z"
  },
  {
    id: "6",
    slug: "merino-knit-dress-flow",
    brandId: "3",
    brand: {
      id: "3",
      slug: "atelier-nord",
      name: "Atelier Nord",
      tagline: "Scandinavian simplicity, exceptional quality",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
      heroImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80"
    },
    name: "Flow Merino Knit Dress",
    price: 980,
    priceVisibility: "visible",
    description: "A midi-length knit dress in extra-fine merino wool with a subtle ribbed texture.",
    story: "Flow embodies our commitment to pieces that move with you. The superfine merino drapes beautifully while maintaining structure.",
    category: "Dresses",
    subcategory: "Day Dresses",
    images: [
      { id: "1", url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80", alt: "Flow Merino Dress - Front", type: "main" }
    ],
    variants: [
      { id: "6-1", size: "XS", color: "Heather Grey", colorHex: "#9E9E9E", sku: "AN-FLW-XS-HG", priceModifier: 0 },
      { id: "6-2", size: "S", color: "Heather Grey", colorHex: "#9E9E9E", sku: "AN-FLW-S-HG", priceModifier: 0 },
      { id: "6-3", size: "M", color: "Heather Grey", colorHex: "#9E9E9E", sku: "AN-FLW-M-HG", priceModifier: 0 },
      { id: "6-4", size: "L", color: "Heather Grey", colorHex: "#9E9E9E", sku: "AN-FLW-L-HG", priceModifier: 0 }
    ],
    availability: {
      localAvailability: { available: true, quantity: 6, shipDays: 2 },
      alternateLocations: [],
      approvedAlternativeIds: []
    },
    craftsmanship: {
      materials: ["100% Extra-Fine Merino Wool"],
      techniques: ["Whole-garment knitting", "No side seams"],
      origin: "Made in Sweden",
      sustainabilityNotes: "Our merino is sourced from farms committed to animal welfare."
    },
    dimensions: {
      fit: "regular",
      sizeGuide: "True to size with a relaxed silhouette."
    },
    ivEnabled: true,
    experienceMode: "experience-iv-commerce",
    tags: ["Everyday", "Knit", "Dress", "Versatile", "Travel"],
    createdAt: "2024-01-25T00:00:00Z",
    updatedAt: "2024-02-10T00:00:00Z"
  }
]

export const mockProductSummaries: ProductSummary[] = mockProducts.map(product => ({
  id: product.id,
  slug: product.slug,
  brandId: product.brandId,
  brandName: product.brand.name,
  name: product.name,
  price: product.price,
  priceVisibility: product.priceVisibility,
  mainImage: product.images[0]?.url || "",
  category: product.category,
  ivEnabled: product.ivEnabled
}))

export function getProductBySlug(slug: string): Product | undefined {
  return mockProducts.find(product => product.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return mockProducts.find(product => product.id === id)
}

export function getProductsByBrandId(brandId: string): Product[] {
  return mockProducts.filter(product => product.brandId === brandId)
}

export function getProductsByCategory(category: string): Product[] {
  return mockProducts.filter(product => product.category === category)
}
