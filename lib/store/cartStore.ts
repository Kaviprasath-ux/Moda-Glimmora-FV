import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Cart, CartItem } from "@/lib/types"

interface CartState {
  cart: Cart | null
  isLoading: boolean
  isUpdating: boolean
  error: string | null
  isCartOpen: boolean

  // Actions
  setCart: (cart: Cart | null) => void
  setLoading: (isLoading: boolean) => void
  setUpdating: (isUpdating: boolean) => void
  setError: (error: string | null) => void
  setCartOpen: (isOpen: boolean) => void
  toggleCart: () => void
  addItem: (item: CartItem) => void
  updateItemQuantity: (itemId: string, quantity: number) => void
  removeItem: (itemId: string) => void
  clearCart: () => void
  getItemCount: () => number
  getSubtotal: () => number
}

const calculateSummary = (items: CartItem[]) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return {
    subtotal,
    shipping: null,
    tax: null,
    total: subtotal,
    currency: "USD"
  }
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: null,
      isLoading: false,
      isUpdating: false,
      error: null,
      isCartOpen: false,

      setCart: (cart) => set({ cart }),
      setLoading: (isLoading) => set({ isLoading }),
      setUpdating: (isUpdating) => set({ isUpdating }),
      setError: (error) => set({ error }),
      setCartOpen: (isCartOpen) => set({ isCartOpen }),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

      addItem: (item) => set((state) => {
        const existingCart = state.cart
        if (!existingCart) {
          const newCart: Cart = {
            id: "cart-1",
            items: [item],
            summary: calculateSummary([item]),
            updatedAt: new Date().toISOString()
          }
          return { cart: newCart }
        }

        const existingItemIndex = existingCart.items.findIndex(
          (i) => i.productId === item.productId && i.variant.id === item.variant.id
        )

        let newItems: CartItem[]
        if (existingItemIndex > -1) {
          newItems = existingCart.items.map((i, index) =>
            index === existingItemIndex
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          )
        } else {
          newItems = [...existingCart.items, item]
        }

        return {
          cart: {
            ...existingCart,
            items: newItems,
            summary: calculateSummary(newItems),
            updatedAt: new Date().toISOString()
          }
        }
      }),

      updateItemQuantity: (itemId, quantity) => set((state) => {
        if (!state.cart) return state

        const newItems = quantity <= 0
          ? state.cart.items.filter((item) => item.id !== itemId)
          : state.cart.items.map((item) =>
              item.id === itemId ? { ...item, quantity } : item
            )

        return {
          cart: {
            ...state.cart,
            items: newItems,
            summary: calculateSummary(newItems),
            updatedAt: new Date().toISOString()
          }
        }
      }),

      removeItem: (itemId) => set((state) => {
        if (!state.cart) return state

        const newItems = state.cart.items.filter((item) => item.id !== itemId)

        if (newItems.length === 0) {
          return { cart: null }
        }

        return {
          cart: {
            ...state.cart,
            items: newItems,
            summary: calculateSummary(newItems),
            updatedAt: new Date().toISOString()
          }
        }
      }),

      clearCart: () => set({ cart: null }),

      getItemCount: () => {
        const cart = get().cart
        if (!cart) return 0
        return cart.items.reduce((sum, item) => sum + item.quantity, 0)
      },

      getSubtotal: () => {
        const cart = get().cart
        if (!cart) return 0
        return cart.summary.subtotal
      }
    }),
    {
      name: "modaglimmora-cart",
      partialize: (state) => ({ cart: state.cart })
    }
  )
)
