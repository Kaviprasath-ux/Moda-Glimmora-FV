import type { ProductSummary } from "./product"

export interface AIRecommendationReasoning {
  styleMatch: string
  occasion: string
  wardrobeComplement: string
}

export interface AIRecommendation {
  id: string
  product: ProductSummary
  explanation: string
  confidence: number
  reasoning: AIRecommendationReasoning
}

export interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  recommendations?: AIRecommendation[]
  timestamp: string
}

export interface ConversationContext {
  occasion?: string
  budget?: { min: number; max: number }
  preferences?: string[]
  excludeCategories?: string[]
}

export interface ChatRequest {
  message: string
  conversationId?: string
  context?: ConversationContext
}

export interface ChatResponse {
  id: string
  conversationId: string
  message: ChatMessage
}

export interface StyleExplanation {
  productId: string
  overallFit: string
  strengths: string[]
  considerations: string[]
  occasions: string[]
  pairingsSuggestions: string[]
  confidenceScore: number
}

export interface OutfitSuggestion {
  id: string
  name: string
  occasion: string
  items: ProductSummary[]
  explanation: string
  totalPrice: number
}

export interface VisualizationRequest {
  productId: string
  silhouetteType: "abstract" | "archetype" | "personal"
  context?: {
    occasion?: string
    climate?: string
    setting?: string
  }
}

export interface VisualizationResponse {
  visualizationUrl: string
  fabricBehavior: {
    drape: string
    structure: string
    movement: boolean
  }
  fitExplanation: string
  styleExplanation: string
}

export interface FashionAgentStatus {
  isActive: boolean
  lastInsight: string
  insightTimestamp: string
  learningProgress: number
}

export interface AgentSettings {
  proactiveRecommendations: boolean
  wardrobeAnalysis: boolean
  trendAlerts: boolean
  priceDropAlerts: boolean
  restockAlerts: boolean
}
