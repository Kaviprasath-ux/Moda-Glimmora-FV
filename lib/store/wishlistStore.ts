import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { ProductSummary } from "@/lib/types"

interface WishlistItem {
  id: string
  product: ProductSummary
  addedAt: string
  notifyOnRestock: boolean
  notifyOnPriceDrop: boolean
}

interface WishlistState {
  items: WishlistItem[]
  isLoading: boolean
  error: string | null

  // Actions
  setItems: (items: WishlistItem[]) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  addItem: (product: ProductSummary) => void
  removeItem: (productId: string) => void
  toggleNotifyRestock: (productId: string) => void
  toggleNotifyPriceDrop: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  getItemCount: () => number
  clearWishlist: () => void
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,
      error: null,

      setItems: (items) => set({ items }),
      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),

      addItem: (product) => set((state) => {
        const exists = state.items.some((item) => item.product.id === product.id)
        if (exists) return state

        const newItem: WishlistItem = {
          id: `wish-${product.id}`,
          product,
          addedAt: new Date().toISOString(),
          notifyOnRestock: false,
          notifyOnPriceDrop: false
        }

        return { items: [...state.items, newItem] }
      }),

      removeItem: (productId) => set((state) => ({
        items: state.items.filter((item) => item.product.id !== productId)
      })),

      toggleNotifyRestock: (productId) => set((state) => ({
        items: state.items.map((item) =>
          item.product.id === productId
            ? { ...item, notifyOnRestock: !item.notifyOnRestock }
            : item
        )
      })),

      toggleNotifyPriceDrop: (productId) => set((state) => ({
        items: state.items.map((item) =>
          item.product.id === productId
            ? { ...item, notifyOnPriceDrop: !item.notifyOnPriceDrop }
            : item
        )
      })),

      isInWishlist: (productId) => {
        return get().items.some((item) => item.product.id === productId)
      },

      getItemCount: () => get().items.length,

      clearWishlist: () => set({ items: [] })
    }),
    {
      name: "modaglimmora-wishlist",
      partialize: (state) => ({ items: state.items })
    }
  )
)
