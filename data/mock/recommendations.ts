import type { AIRecommendation, ChatMessage, StyleExplanation, OutfitSuggestion } from "@/lib/types"
import { mockProductSummaries } from "./products"

export const mockRecommendations: AIRecommendation[] = [
  {
    id: "rec-1",
    product: mockProductSummaries[0],
    explanation: "This evening gown aligns perfectly with your Modern Classic style profile. The silk construction and flowing silhouette would complement your existing wardrobe.",
    confidence: 94,
    reasoning: {
      styleMatch: "The Celestine gown's elegant drape and minimal embellishment reflects your preference for refined, timeless pieces.",
      occasion: "Ideal for the formal events and galas you've mentioned attending this season.",
      wardrobeComplement: "This would pair beautifully with your existing jewelry collection and serve as a foundation piece for evening occasions."
    }
  },
  {
    id: "rec-2",
    product: mockProductSummaries[1],
    explanation: "A structured blazer that embodies power dressing while maintaining sophistication. The Italian construction ensures longevity.",
    confidence: 89,
    reasoning: {
      styleMatch: "The clean lines and precise tailoring align with your architectural fashion sensibility.",
      occasion: "Perfect for business meetings and professional settings you navigate regularly.",
      wardrobeComplement: "This blazer would work with multiple pieces in your wardrobe, offering exceptional versatility."
    }
  },
  {
    id: "rec-3",
    product: mockProductSummaries[2],
    explanation: "This cashmere coat represents investment dressing at its finest. The quality will only improve with age.",
    confidence: 87,
    reasoning: {
      styleMatch: "The minimalist design and premium material reflects your appreciation for understated luxury.",
      occasion: "Versatile enough for both casual weekend outings and dressed-up occasions.",
      wardrobeComplement: "The neutral oatmeal shade will layer effortlessly over most of your existing pieces."
    }
  }
]

export const mockConversationHistory: ChatMessage[] = [
  {
    id: "msg-1",
    role: "assistant",
    content: "Welcome to ModaGlimmora. I'm here to help you discover fashion that truly resonates with who you are. What brings you here today?",
    timestamp: "2024-02-15T10:00:00Z"
  },
  {
    id: "msg-2",
    role: "user",
    content: "I need something for a gallery opening next week, sophisticated but not stuffy",
    timestamp: "2024-02-15T10:01:00Z"
  },
  {
    id: "msg-3",
    role: "assistant",
    content: "A gallery opening—what a wonderful occasion that allows for artistic expression in your attire. I understand you're looking for sophistication with ease, cultural elegance without formality. Based on your style identity, I'd suggest exploring pieces that have architectural interest but remain effortless to wear. Here are some directions that might inspire you...",
    recommendations: [mockRecommendations[0], mockRecommendations[1]],
    timestamp: "2024-02-15T10:01:30Z"
  }
]

export const mockStyleExplanation: StyleExplanation = {
  productId: "1",
  overallFit: "This piece aligns strongly with your Modern Classic style profile, offering timeless elegance with contemporary touches.",
  strengths: [
    "The flowing silhouette flatters your body type while maintaining elegance",
    "Silk construction ensures comfort for extended wear",
    "The midnight blue shade complements your preferred color palette",
    "Versatile styling options for multiple occasions"
  ],
  considerations: [
    "The floor length may require minor alterations for optimal fit",
    "Silk requires careful maintenance—dry clean recommended",
    "This is a statement piece that may limit repeat wearing in close social circles"
  ],
  occasions: ["Gallery Opening", "Gala", "Formal Dinner", "Black Tie Event", "Anniversary Celebration"],
  pairingsSuggestions: [
    "Pair with minimalist gold jewelry for understated glamour",
    "A structured clutch in champagne or navy would complement beautifully",
    "Strappy heels in nude or matching midnight blue"
  ],
  confidenceScore: 94
}

export const mockOutfitSuggestions: OutfitSuggestion[] = [
  {
    id: "outfit-1",
    name: "Gallery Night Elegance",
    occasion: "Gallery Opening",
    items: [mockProductSummaries[0], mockProductSummaries[4]],
    explanation: "This outfit balances artistic expression with sophisticated elegance. The Celestine gown makes a statement while the Classico tote adds practical sophistication.",
    totalPrice: 6450
  },
  {
    id: "outfit-2",
    name: "Power Meeting",
    occasion: "Business",
    items: [mockProductSummaries[1], mockProductSummaries[3]],
    explanation: "A commanding yet approachable look perfect for important meetings. The structured blazer conveys authority while the silk blouse softens the overall impression.",
    totalPrice: 3290
  }
]

export const mockQuickPrompts = [
  "What suits my style?",
  "Complete my wardrobe",
  "Event preparation",
  "Explore new territories",
  "Find investment pieces",
  "Build a capsule wardrobe"
]
