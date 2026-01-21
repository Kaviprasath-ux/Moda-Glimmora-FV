export type MessageRole = "user" | "ai" | "human"
export type ConciergeAvailability = "available" | "busy" | "offline"
export type RequestType = "sourcing" | "bespoke" | "styling" | "general" | "urgent"

export interface ConciergeMessage {
  id: string
  conversationId: string
  role: MessageRole
  content: string
  attachments?: MessageAttachment[]
  timestamp: Date
  encrypted: boolean
  readAt?: Date
  humanConciergeId?: string
}

export interface MessageAttachment {
  id: string
  type: "image" | "document" | "product"
  url: string
  name: string
  size?: number
}

export interface ConciergeConversation {
  id: string
  userId: string
  subject?: string
  status: "active" | "resolved" | "pending_human"
  currentHandler: "ai" | "human"
  humanConciergeId?: string
  messages: ConciergeMessage[]
  createdAt: Date
  updatedAt: Date
  resolvedAt?: Date
}

export interface ConciergeRequest {
  id: string
  userId: string
  type: RequestType
  title: string
  description: string
  priority: "normal" | "high" | "urgent"
  status: "pending" | "in_progress" | "completed" | "cancelled"
  assignedTo?: string
  attachments?: string[]
  createdAt: Date
  updatedAt: Date
  completedAt?: Date
  notes?: string
}

export interface HandoffRequest {
  id: string
  conversationId: string
  reason: string
  requestedAt: Date
  acceptedAt?: Date
  humanConciergeId?: string
  estimatedWaitTime?: string
}

export interface ScheduledCall {
  id: string
  userId: string
  conciergeId: string
  scheduledFor: Date
  duration: number // minutes
  topic: string
  notes?: string
  status: "scheduled" | "completed" | "cancelled" | "rescheduled"
  meetingLink?: string
}
