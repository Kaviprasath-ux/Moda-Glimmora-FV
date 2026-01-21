import type { Product } from "./product"

export interface InvisibleWardrobeItem {
  id: string
  product: Product
  preparedFor: string // Event name or "seasonal" or "travel"
  preparedForDate?: Date
  explanation: string
  fitConfidence: number
  styleMatch: number
  status: "pending" | "approved" | "declined"
  preparedAt: Date
  expiresAt?: Date
}

export interface AutonomousAction {
  id: string
  type: "prepare" | "purchase" | "alert"
  item: InvisibleWardrobeItem
  threshold: number
  actualPrice: number
  autoApproved: boolean
  userAction?: "approved" | "declined"
  actionDate: Date
  reason: string
}

export interface PreparedEvent {
  id: string
  name: string
  date: Date
  type: "gala" | "business" | "casual" | "travel" | "seasonal"
  items: InvisibleWardrobeItem[]
  completeness: number // 0-100
}

export interface ZeroUIStats {
  totalPrepared: number
  totalApproved: number
  totalDeclined: number
  averageApprovalRate: number
  topCategories: { category: string; count: number }[]
  monthlySpend: number
  savingsFromAutonomous: number
}
