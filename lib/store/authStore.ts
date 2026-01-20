import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { AuthUser, AuthTokens } from "@/lib/types"

interface AuthState {
  user: AuthUser | null
  tokens: AuthTokens | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null

  // Actions
  setUser: (user: AuthUser | null) => void
  setTokens: (tokens: AuthTokens | null) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  login: (user: AuthUser, tokens: AuthTokens) => void
  logout: () => void
  clearError: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      tokens: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setTokens: (tokens) => set({ tokens }),
      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),

      login: (user, tokens) => set({
        user,
        tokens,
        isAuthenticated: true,
        error: null
      }),

      logout: () => set({
        user: null,
        tokens: null,
        isAuthenticated: false,
        error: null
      }),

      clearError: () => set({ error: null })
    }),
    {
      name: "modaglimmora-auth",
      partialize: (state) => ({
        user: state.user,
        tokens: state.tokens,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
)
