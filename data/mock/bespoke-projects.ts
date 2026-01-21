import type { BespokeProject, BespokeAtelier, BespokeStage, BespokeMeasurements, BespokeRequest } from "@/lib/types"

export const mockBespokeAteliers: BespokeAtelier[] = [
  {
    id: "atelier-001",
    name: "Maison Laurent",
    location: "Paris",
    country: "France",
    specialty: ["Evening Wear", "Couture Gowns", "Embroidery"],
    contactName: "Marie Laurent",
    website: "maisonlaurent.com",
    rating: 4.9
  },
  {
    id: "atelier-002",
    name: "Sartoria Napoli",
    location: "Naples",
    country: "Italy",
    specialty: ["Tailoring", "Suits", "Outerwear"],
    contactName: "Antonio Ferrara",
    rating: 4.8
  },
  {
    id: "atelier-003",
    name: "Atelier de la Couronne",
    location: "Paris",
    country: "France",
    specialty: ["Fine Leather", "Handbags", "Small Leather Goods"],
    contactName: "Philippe Moreau",
    rating: 4.9
  }
]

export const mockBespokeProjects: BespokeProject[] = [
  {
    id: "bespoke-001",
    userId: "uhni-user-001",
    title: "Custom Evening Coat",
    category: "evening",
    atelier: mockBespokeAteliers[0],
    status: "fabric",
    timeline: [
      {
        id: "stage-001-1",
        name: "Consultation",
        description: "Initial design consultation and vision discussion",
        status: "completed",
        startedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        completedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000),
        notes: "Client envisions a dramatic floor-length coat with architectural shoulders",
        approvalRequired: false
      },
      {
        id: "stage-001-2",
        name: "Design",
        description: "Technical drawings and design refinement",
        status: "completed",
        startedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000),
        completedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
        approvalRequired: true,
        approved: true,
        approvedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
        attachments: ["/images/bespoke/design-sketch-1.jpg", "/images/bespoke/design-sketch-2.jpg"]
      },
      {
        id: "stage-001-3",
        name: "Fabric Selection",
        description: "Selection of primary fabric and lining materials",
        status: "current",
        startedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
        notes: "Three fabric options await approval",
        approvalRequired: true,
        options: [
          {
            id: "fabric-1",
            name: "Italian Wool Crepe - Midnight",
            description: "Heavy Italian wool crepe with subtle sheen. Excellent drape.",
            image: "/images/bespoke/fabric-1.jpg",
            selected: false
          },
          {
            id: "fabric-2",
            name: "Duchesse Satin - Noir",
            description: "Luxurious duchesse satin with matte finish. More structured.",
            image: "/images/bespoke/fabric-2.jpg",
            priceAdjustment: 800,
            selected: false
          },
          {
            id: "fabric-3",
            name: "Cashmere Blend - Charcoal",
            description: "Loro Piana cashmere blend. Exceptionally soft with subtle texture.",
            image: "/images/bespoke/fabric-3.jpg",
            priceAdjustment: 1500,
            selected: false
          }
        ]
      },
      {
        id: "stage-001-4",
        name: "Creation",
        description: "Garment construction by master craftspeople",
        status: "upcoming",
        approvalRequired: false
      },
      {
        id: "stage-001-5",
        name: "Fitting",
        description: "Final fitting and adjustments",
        status: "upcoming",
        approvalRequired: true
      },
      {
        id: "stage-001-6",
        name: "Completion",
        description: "Final quality check and delivery preparation",
        status: "upcoming",
        approvalRequired: false
      }
    ],
    moodboard: [
      { id: "mood-1", type: "image", url: "/images/bespoke/mood-1.jpg", name: "Architectural silhouette", notes: "Strong shoulders, clean lines" },
      { id: "mood-2", type: "image", url: "/images/bespoke/mood-2.jpg", name: "Dramatic length", notes: "Floor-length, sweeping movement" },
      { id: "mood-3", type: "color", color: "#1a1a2e", name: "Midnight palette" },
      { id: "mood-4", type: "reference", url: "/images/bespoke/mood-4.jpg", name: "Vintage Balenciaga reference" }
    ],
    estimatedCompletion: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
    price: 18500,
    currency: "USD",
    deposit: 5000,
    depositPaid: true,
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  },
  {
    id: "bespoke-002",
    userId: "uhni-user-001",
    title: "Summer Tailored Suit",
    category: "tailoring",
    atelier: mockBespokeAteliers[1],
    status: "delivered",
    timeline: [
      { id: "stage-002-1", name: "Consultation", description: "", status: "completed", approvalRequired: false },
      { id: "stage-002-2", name: "Design", description: "", status: "completed", approvalRequired: true, approved: true },
      { id: "stage-002-3", name: "Fabric", description: "", status: "completed", approvalRequired: true, approved: true },
      { id: "stage-002-4", name: "Creation", description: "", status: "completed", approvalRequired: false },
      { id: "stage-002-5", name: "Fitting", description: "", status: "completed", approvalRequired: true, approved: true },
      { id: "stage-002-6", name: "Completion", description: "", status: "completed", approvalRequired: false }
    ],
    moodboard: [],
    estimatedCompletion: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    actualCompletion: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000),
    price: 8500,
    currency: "USD",
    deposit: 2500,
    depositPaid: true,
    createdAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
  }
]

export const mockBespokeMeasurements: BespokeMeasurements = {
  id: "meas-001",
  userId: "uhni-user-001",
  type: "body",
  measurements: [
    { name: "Bust", value: 88, unit: "cm" },
    { name: "Waist", value: 68, unit: "cm" },
    { name: "Hips", value: 96, unit: "cm" },
    { name: "Shoulder Width", value: 40, unit: "cm" },
    { name: "Arm Length", value: 58, unit: "cm" },
    { name: "Back Length", value: 42, unit: "cm" },
    { name: "Inseam", value: 78, unit: "cm" }
  ],
  takenAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
  takenBy: "Maison Laurent, Paris",
  notes: "Slight adjustment for right shoulder (1cm higher than left)"
}

export const mockPastCommissions = [
  {
    id: "past-001",
    title: "Cashmere Travel Coat",
    atelier: "Sartoria Napoli",
    deliveredAt: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000),
    image: "/images/bespoke/past-1.jpg",
    price: 12000
  },
  {
    id: "past-002",
    title: "Silk Evening Gown",
    atelier: "Maison Laurent",
    deliveredAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
    image: "/images/bespoke/past-2.jpg",
    price: 22000
  },
  {
    id: "past-003",
    title: "Custom Briefcase",
    atelier: "Atelier de la Couronne",
    deliveredAt: new Date(Date.now() - 540 * 24 * 60 * 60 * 1000),
    image: "/images/bespoke/past-3.jpg",
    price: 4500
  }
]
