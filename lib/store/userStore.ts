import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { UserProfile, StyleProfile, UserPreferences, PrivacySettings } from "@/lib/types"

interface UserState {
  profile: UserProfile | null
  isLoading: boolean
  error: string | null

  // Actions
  setProfile: (profile: UserProfile | null) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  updateProfile: (updates: Partial<UserProfile>) => void
  updateStyleProfile: (updates: Partial<StyleProfile>) => void
  updatePreferences: (updates: Partial<UserPreferences>) => void
  updatePrivacySettings: (updates: Partial<PrivacySettings>) => void
  clearProfile: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      profile: null,
      isLoading: false,
      error: null,

      setProfile: (profile) => set({ profile }),
      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),

      updateProfile: (updates) => set((state) => ({
        profile: state.profile ? { ...state.profile, ...updates } : null
      })),

      updateStyleProfile: (updates) => set((state) => ({
        profile: state.profile
          ? {
              ...state.profile,
              styleProfile: { ...state.profile.styleProfile, ...updates }
            }
          : null
      })),

      updatePreferences: (updates) => set((state) => ({
        profile: state.profile
          ? {
              ...state.profile,
              preferences: { ...state.profile.preferences, ...updates }
            }
          : null
      })),

      updatePrivacySettings: (updates) => set((state) => ({
        profile: state.profile
          ? {
              ...state.profile,
              privacySettings: { ...state.profile.privacySettings, ...updates }
            }
          : null
      })),

      clearProfile: () => set({ profile: null, error: null })
    }),
    {
      name: "modaglimmora-user",
      partialize: (state) => ({ profile: state.profile })
    }
  )
)
