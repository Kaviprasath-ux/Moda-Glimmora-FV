import { create } from "zustand"
import type { ConciergeMessage, ConciergeConversation, ConciergeRequest, ScheduledCall } from "@/lib/types"
import { mockCurrentConversation, mockConciergeRequests, mockScheduledCalls } from "@/data/mock/concierge-history"
import { mockConciergeProfile } from "@/data/mock/uhni-user"

interface ConciergeState {
  currentConversation: ConciergeConversation | null
  requests: ConciergeRequest[]
  scheduledCalls: ScheduledCall[]
  isConnected: boolean
  isTyping: boolean
  currentHandler: "ai" | "human"
  conciergeAvailability: "available" | "busy" | "offline"

  // Actions
  setConversation: (conversation: ConciergeConversation | null) => void
  addMessage: (message: Omit<ConciergeMessage, "id" | "timestamp">) => void
  setTyping: (isTyping: boolean) => void
  requestHandoff: () => void
  setHandler: (handler: "ai" | "human") => void
  addRequest: (request: Omit<ConciergeRequest, "id" | "createdAt" | "updatedAt">) => void
  updateRequest: (id: string, updates: Partial<ConciergeRequest>) => void
  scheduleCall: (call: Omit<ScheduledCall, "id">) => void
  cancelCall: (id: string) => void
}

export const useConciergeStore = create<ConciergeState>((set) => ({
  currentConversation: mockCurrentConversation,
  requests: mockConciergeRequests,
  scheduledCalls: mockScheduledCalls,
  isConnected: true,
  isTyping: false,
  currentHandler: mockCurrentConversation?.currentHandler || "ai",
  conciergeAvailability: mockConciergeProfile.availability,

  setConversation: (conversation) => set({ currentConversation: conversation }),

  addMessage: (messageData) => {
    const newMessage: ConciergeMessage = {
      ...messageData,
      id: `msg-${Date.now()}`,
      timestamp: new Date(),
      encrypted: true
    }
    set((state) => ({
      currentConversation: state.currentConversation
        ? {
            ...state.currentConversation,
            messages: [...state.currentConversation.messages, newMessage],
            updatedAt: new Date()
          }
        : null
    }))
  },

  setTyping: (isTyping) => set({ isTyping }),

  requestHandoff: () => {
    set((state) => ({
      currentHandler: "human",
      currentConversation: state.currentConversation
        ? {
            ...state.currentConversation,
            currentHandler: "human",
            status: "pending_human"
          }
        : null
    }))
  },

  setHandler: (handler) => set({ currentHandler: handler }),

  addRequest: (requestData) => {
    const newRequest: ConciergeRequest = {
      id: `req-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...requestData
    }
    set((state) => ({
      requests: [newRequest, ...state.requests]
    }))
  },

  updateRequest: (id, updates) =>
    set((state) => ({
      requests: state.requests.map((req) =>
        req.id === id ? { ...req, ...updates, updatedAt: new Date() } : req
      )
    })),

  scheduleCall: (callData) => {
    const newCall: ScheduledCall = {
      id: `call-${Date.now()}`,
      ...callData
    }
    set((state) => ({
      scheduledCalls: [...state.scheduledCalls, newCall]
    }))
  },

  cancelCall: (id) =>
    set((state) => ({
      scheduledCalls: state.scheduledCalls.map((call) =>
        call.id === id ? { ...call, status: "cancelled" as const } : call
      )
    }))
}))
