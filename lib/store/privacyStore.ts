import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { UHNIPrivacySettings, DigitalFootprint, DataExportRequest, DataDeletionRequest } from "@/lib/types"
import { mockUHNIPrivacySettings, mockDigitalFootprint } from "@/data/mock/uhni-user"

interface PrivacyState {
  settings: UHNIPrivacySettings
  footprint: DigitalFootprint
  exportRequests: DataExportRequest[]
  deletionRequests: DataDeletionRequest[]
  invisibleModeActive: boolean
  invisibleModeStartedAt: Date | null

  // Actions
  setSettings: (settings: Partial<UHNIPrivacySettings>) => void
  toggleInvisibleMode: () => void
  startInvisibleMode: () => void
  endInvisibleMode: () => void
  requestDataExport: (categories: string[], format: "json" | "csv" | "pdf") => void
  requestDataDeletion: (category: string) => void
  cancelDeletionRequest: (id: string) => void
  updateSecuritySetting: (key: keyof UHNIPrivacySettings, value: boolean) => void
}

export const usePrivacyStore = create<PrivacyState>()(
  persist(
    (set, get) => ({
      settings: mockUHNIPrivacySettings,
      footprint: mockDigitalFootprint,
      exportRequests: [],
      deletionRequests: [],
      invisibleModeActive: false,
      invisibleModeStartedAt: null,

      setSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings }
        })),

      toggleInvisibleMode: () => {
        const currentlyActive = get().invisibleModeActive
        if (currentlyActive) {
          get().endInvisibleMode()
        } else {
          get().startInvisibleMode()
        }
      },

      startInvisibleMode: () =>
        set((state) => ({
          invisibleModeActive: true,
          invisibleModeStartedAt: new Date(),
          settings: { ...state.settings, invisibleMode: true }
        })),

      endInvisibleMode: () =>
        set((state) => ({
          invisibleModeActive: false,
          invisibleModeStartedAt: null,
          settings: { ...state.settings, invisibleMode: false }
        })),

      requestDataExport: (categories, format) => {
        const newRequest: DataExportRequest = {
          id: `export-${Date.now()}`,
          userId: "uhni-user-001",
          status: "pending",
          categories,
          format,
          requestedAt: new Date()
        }
        set((state) => ({
          exportRequests: [...state.exportRequests, newRequest]
        }))
      },

      requestDataDeletion: (category) => {
        const newRequest: DataDeletionRequest = {
          id: `delete-${Date.now()}`,
          userId: "uhni-user-001",
          category,
          status: "pending",
          requestedAt: new Date(),
          scheduledFor: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
        }
        set((state) => ({
          deletionRequests: [...state.deletionRequests, newRequest]
        }))
      },

      cancelDeletionRequest: (id) =>
        set((state) => ({
          deletionRequests: state.deletionRequests.map((req) =>
            req.id === id ? { ...req, status: "cancelled" as const } : req
          )
        })),

      updateSecuritySetting: (key, value) =>
        set((state) => ({
          settings: { ...state.settings, [key]: value }
        }))
    }),
    {
      name: "moda-privacy-storage",
      partialize: (state) => ({
        settings: state.settings,
        invisibleModeActive: state.invisibleModeActive
      })
    }
  )
)
