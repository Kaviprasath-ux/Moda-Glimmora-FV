import type { ProductSummary, ProductVariant } from "./product"

export interface CartItem {
  id: string
  productId: string
  product: ProductSummary
  variant: ProductVariant
  quantity: number
  price: number
  fitConfidence?: number
  addedAt: string
}

export interface CartSummary {
  subtotal: number
  shipping: number | null
  tax: number | null
  total: number
  currency: string
}

export interface Cart {
  id: string
  items: CartItem[]
  summary: CartSummary
  updatedAt: string
}

export interface AddToCartInput {
  productId: string
  variantId: string
  quantity: number
}

export interface UpdateCartItemInput {
  itemId: string
  quantity: number
}

export interface CartState {
  cart: Cart | null
  isLoading: boolean
  isUpdating: boolean
  error: string | null
}
