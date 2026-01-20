import type { Brand, BrandSummary } from "@/lib/types"

export const mockBrands: Brand[] = [
  {
    id: "1",
    slug: "maison-lumiere",
    name: "Maison Lumière",
    tagline: "Illuminating elegance since 1892",
    description: "Founded in Paris by master craftsman Henri Lumière, Maison Lumière has been at the forefront of luxury fashion for over a century. Our commitment to exceptional craftsmanship and timeless design has made us a symbol of French elegance worldwide.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    heritage: {
      founded: 1892,
      founder: "Henri Lumière",
      origin: "Paris, France",
      story: "In the gaslit streets of late 19th century Paris, Henri Lumière opened his first atelier on Rue du Faubourg Saint-Honoré. What began as a small workshop crafting bespoke pieces for Parisian society has evolved into one of the world's most revered fashion houses, while never losing sight of its founding principles: exceptional materials, uncompromising craftsmanship, and designs that transcend time.",
      timeline: [
        {
          id: "1",
          year: 1892,
          title: "The Beginning",
          description: "Henri Lumière opens his first atelier in Paris",
          image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
        },
        {
          id: "2",
          year: 1920,
          title: "The Golden Age",
          description: "Maison Lumière becomes the choice of European royalty",
          image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
        },
        {
          id: "3",
          year: 1960,
          title: "Global Expansion",
          description: "First boutique opens in New York City",
          image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
        },
        {
          id: "4",
          year: 2000,
          title: "New Millennium",
          description: "Sustainable luxury initiative launched",
          image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80"
        }
      ]
    },
    craftsmanship: [
      {
        id: "1",
        title: "The Art of Tailoring",
        description: "Each garment requires over 50 hours of handwork by our master tailors, ensuring a perfect fit and unparalleled quality.",
        technique: "Hand-stitching",
        artisan: {
          name: "Marie Dubois",
          role: "Master Tailor",
          image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
          bio: "With 35 years of experience, Marie leads our tailoring atelier with an unwavering dedication to perfection."
        },
        images: [
          "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
        ]
      },
      {
        id: "2",
        title: "Silk Weaving",
        description: "Our signature silk is woven on century-old looms in Lyon, creating a fabric of incomparable luster and drape.",
        technique: "Traditional loom weaving",
        images: [
          "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
        ]
      }
    ],
    collections: [
      {
        id: "1",
        slug: "eternal-grace",
        name: "Eternal Grace",
        season: "Spring/Summer",
        year: 2024,
        description: "A celebration of timeless femininity",
        story: "Inspired by the gardens of Versailles at dawn, Eternal Grace captures the ephemeral beauty of morning light on silk and lace.",
        heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
        images: [
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
        ],
        productIds: ["1", "2", "3"]
      }
    ],
    collaborations: [
      {
        id: "1",
        artistName: "Yuki Tanaka",
        artistRole: "Japanese Ceramic Artist",
        title: "Porcelain Dreams",
        description: "A limited collection featuring prints inspired by traditional Japanese ceramics.",
        year: 2023,
        images: [
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
        ]
      }
    ],
    philosophy: "At Maison Lumière, we believe that true luxury lies in the details. Every stitch, every fold, every choice of material reflects our commitment to excellence.",
    sustainabilityCommitment: "By 2030, all our materials will be sustainably sourced, and our production will be carbon neutral."
  },
  {
    id: "2",
    slug: "casa-vitale",
    name: "Casa Vitale",
    tagline: "Italian artistry, modern vision",
    description: "Born in Milan's fashion district, Casa Vitale represents the pinnacle of Italian craftsmanship combined with contemporary design sensibility.",
    heroImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    heritage: {
      founded: 1956,
      founder: "Alessandro Vitale",
      origin: "Milan, Italy",
      story: "Alessandro Vitale founded his house with a revolutionary vision: to bring the precision of Italian engineering to fashion. Today, Casa Vitale remains at the intersection of innovation and tradition.",
      timeline: [
        {
          id: "1",
          year: 1956,
          title: "Foundation",
          description: "Alessandro Vitale opens his first studio in Milan",
          image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
        },
        {
          id: "2",
          year: 1985,
          title: "Ready-to-Wear Launch",
          description: "Introduction of the iconic CV ready-to-wear line",
          image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
        }
      ]
    },
    craftsmanship: [
      {
        id: "1",
        title: "Leather Excellence",
        description: "Our leather goods are crafted from the finest Italian hides, treated with techniques passed down through generations.",
        technique: "Hand-tooling",
        images: [
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
        ]
      }
    ],
    collections: [
      {
        id: "2",
        slug: "architectural-elegance",
        name: "Architectural Elegance",
        season: "Fall/Winter",
        year: 2024,
        description: "Where structure meets softness",
        story: "Drawing inspiration from Milan's modernist architecture, this collection explores the balance between rigid geometry and fluid movement.",
        heroImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80",
        images: [
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
        ],
        productIds: ["4", "5", "6"]
      }
    ],
    philosophy: "Fashion is architecture: it is a matter of proportions."
  },
  {
    id: "3",
    slug: "atelier-nord",
    name: "Atelier Nord",
    tagline: "Scandinavian simplicity, exceptional quality",
    description: "From the serene landscapes of Scandinavia comes Atelier Nord, where minimalism meets meticulous craftsmanship.",
    heroImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    heritage: {
      founded: 1978,
      founder: "Ingrid Nordström",
      origin: "Stockholm, Sweden",
      story: "Ingrid Nordström believed that beauty lies in simplicity. Her designs stripped away the unnecessary, leaving only the essential—perfect form, superior materials, impeccable construction.",
      timeline: [
        {
          id: "1",
          year: 1978,
          title: "First Collection",
          description: "Ingrid Nordström debuts her minimalist vision",
          image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80"
        }
      ]
    },
    craftsmanship: [
      {
        id: "1",
        title: "Wool Mastery",
        description: "We source the world's finest merino wool and transform it into pieces of unparalleled comfort and durability.",
        technique: "Precision cutting",
        images: [
          "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80"
        ]
      }
    ],
    collections: [
      {
        id: "3",
        slug: "arctic-light",
        name: "Arctic Light",
        season: "Fall/Winter",
        year: 2024,
        description: "Capturing the essence of Nordic winters",
        story: "The pale light of Arctic winters inspired a palette of soft grays, creams, and deep navy, realized in sumptuous cashmere and virgin wool.",
        heroImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80",
        images: [
          "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80"
        ],
        productIds: ["7", "8", "9"]
      }
    ],
    philosophy: "Less, but better. Quality over quantity. Timelessness over trends."
  }
]

export const mockBrandSummaries: BrandSummary[] = mockBrands.map(brand => ({
  id: brand.id,
  slug: brand.slug,
  name: brand.name,
  tagline: brand.tagline,
  logo: brand.logo,
  heroImage: brand.heroImage
}))

export function getBrandBySlug(slug: string): Brand | undefined {
  return mockBrands.find(brand => brand.slug === slug)
}

export function getBrandById(id: string): Brand | undefined {
  return mockBrands.find(brand => brand.id === id)
}
