import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { ZeroUISettings, InvisibleWardrobeItem, PreparedEvent } from "@/lib/types"
import { mockZeroUISettings } from "@/data/mock/uhni-user"
import { mockInvisibleWardrobeItems, mockPreparedEvents } from "@/data/mock/private-collections"

interface ZeroUIState {
  settings: ZeroUISettings
  invisibleWardrobe: InvisibleWardrobeItem[]
  preparedEvents: PreparedEvent[]
  isLoading: boolean
  isPaused: boolean

  // Actions
  setSettings: (settings: Partial<ZeroUISettings>) => void
  setSpendingThreshold: (threshold: number) => void
  toggleCategory: (category: string) => void
  toggleBrand: (brandId: string) => void
  pauseAutonomous: () => void
  resumeAutonomous: () => void
  approveItem: (itemId: string) => void
  declineItem: (itemId: string) => void
  getItemById: (itemId: string) => InvisibleWardrobeItem | undefined
  getPendingApprovals: () => InvisibleWardrobeItem[]
  getApprovedItems: () => InvisibleWardrobeItem[]
}

export const useZeroUIStore = create<ZeroUIState>()(
  persist(
    (set, get) => ({
      settings: mockZeroUISettings,
      invisibleWardrobe: mockInvisibleWardrobeItems,
      preparedEvents: mockPreparedEvents,
      isLoading: false,
      isPaused: false,

      setSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings }
        })),

      setSpendingThreshold: (threshold) =>
        set((state) => ({
          settings: { ...state.settings, spendingThreshold: threshold }
        })),

      toggleCategory: (category) =>
        set((state) => ({
          settings: {
            ...state.settings,
            categoryPermissions: state.settings.categoryPermissions.map((cp) =>
              cp.category === category ? { ...cp, autoApprove: !cp.autoApprove } : cp
            )
          }
        })),

      toggleBrand: (brandId) =>
        set((state) => ({
          settings: {
            ...state.settings,
            brandPermissions: state.settings.brandPermissions.map((bp) =>
              bp.brandId === brandId ? { ...bp, autoApprove: !bp.autoApprove } : bp
            )
          }
        })),

      pauseAutonomous: () =>
        set((state) => ({
          isPaused: true,
          settings: { ...state.settings, enabled: false }
        })),

      resumeAutonomous: () =>
        set((state) => ({
          isPaused: false,
          settings: { ...state.settings, enabled: true }
        })),

      approveItem: (itemId) =>
        set((state) => ({
          invisibleWardrobe: state.invisibleWardrobe.map((item) =>
            item.id === itemId ? { ...item, status: "approved" as const } : item
          ),
          settings: {
            ...state.settings,
            itemsApproved: state.settings.itemsApproved + 1
          }
        })),

      declineItem: (itemId) =>
        set((state) => ({
          invisibleWardrobe: state.invisibleWardrobe.map((item) =>
            item.id === itemId ? { ...item, status: "declined" as const } : item
          ),
          settings: {
            ...state.settings,
            itemsDeclined: state.settings.itemsDeclined + 1
          }
        })),

      getItemById: (itemId) => get().invisibleWardrobe.find((item) => item.id === itemId),

      getPendingApprovals: () =>
        get().invisibleWardrobe.filter((item) => item.status === "pending"),

      getApprovedItems: () =>
        get().invisibleWardrobe.filter((item) => item.status === "approved")
    }),
    {
      name: "moda-zero-ui-storage",
      partialize: (state) => ({
        settings: state.settings,
        isPaused: state.isPaused
      })
    }
  )
)
