import { create } from "zustand"
import type { SourcingRequest, RareFind } from "@/lib/types"
import { mockSourcingRequests, mockRareFinds } from "@/data/mock/sourcing-requests"

interface SourcingState {
  requests: SourcingRequest[]
  rareFinds: RareFind[]
  isLoading: boolean
  activeRequest: SourcingRequest | null

  // Actions
  setRequests: (requests: SourcingRequest[]) => void
  addRequest: (request: Omit<SourcingRequest, "id" | "createdAt" | "updatedAt" | "networksContacted" | "potentialLeads">) => void
  updateRequest: (id: string, updates: Partial<SourcingRequest>) => void
  cancelRequest: (id: string) => void
  setActiveRequest: (request: SourcingRequest | null) => void
  getRequestById: (id: string) => SourcingRequest | undefined
  getActiveRequests: () => SourcingRequest[]
  getCompletedRequests: () => SourcingRequest[]
}

export const useSourcingStore = create<SourcingState>((set, get) => ({
  requests: mockSourcingRequests,
  rareFinds: mockRareFinds,
  isLoading: false,
  activeRequest: null,

  setRequests: (requests) => set({ requests }),

  addRequest: (requestData) => {
    const newRequest: SourcingRequest = {
      id: `src-${Date.now()}`,
      ...requestData,
      status: "searching",
      networksContacted: 0,
      potentialLeads: 0,
      createdAt: new Date(),
      updatedAt: new Date()
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

  cancelRequest: (id) =>
    set((state) => ({
      requests: state.requests.map((req) =>
        req.id === id ? { ...req, status: "cancelled" as const, updatedAt: new Date() } : req
      )
    })),

  setActiveRequest: (request) => set({ activeRequest: request }),

  getRequestById: (id) => get().requests.find((req) => req.id === id),

  getActiveRequests: () =>
    get().requests.filter((req) =>
      ["searching", "located", "negotiating"].includes(req.status)
    ),

  getCompletedRequests: () =>
    get().requests.filter((req) =>
      ["completed", "cancelled"].includes(req.status)
    )
}))
