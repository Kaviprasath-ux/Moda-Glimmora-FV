import type { CartItem } from "./cart"

export interface OrderAddress {
  firstName: string
  lastName: string
  address1: string
  address2?: string
  city: string
  state: string
  postalCode: string
  country: string
  phone?: string
}

export interface OrderPayment {
  method: "card" | "paypal" | "apple_pay" | "google_pay"
  last4?: string
  brand?: string
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded"

export interface OrderTimeline {
  status: OrderStatus
  timestamp: string
  description: string
}

export interface Order {
  id: string
  orderNumber: string
  items: CartItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  currency: string
  status: OrderStatus
  shippingAddress: OrderAddress
  billingAddress: OrderAddress
  payment: OrderPayment
  timeline: OrderTimeline[]
  trackingNumber?: string
  trackingUrl?: string
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface OrderSummary {
  id: string
  orderNumber: string
  status: OrderStatus
  total: number
  itemCount: number
  createdAt: string
}

export interface CreateOrderInput {
  shippingAddress: OrderAddress
  billingAddress?: OrderAddress
  paymentMethodId: string
  notes?: string
}
