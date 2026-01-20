export const APP_NAME = "ModaGlimmora"
export const APP_DESCRIPTION = "Luxury Fashion Intelligence Platform"
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://modaglimmora.com"

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  EXPLORE: "/explore",
  DISCOVER: "/discover",
  MY_STYLE: "/my-style",
  WARDROBE: "/wardrobe",
  TRY_ON: "/try-on",
  WISHLIST: "/wishlist",
  CART: "/cart",
  CHECKOUT: "/checkout",
  ORDERS: "/orders",
  PRIVACY: "/privacy",
  ACCOUNT: "/account",
} as const

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout",
    REFRESH: "/api/auth/refresh",
  },
  BRANDS: "/api/brands",
  PRODUCTS: "/api/products",
  CART: "/api/cart",
  WISHLIST: "/api/wishlist",
  ORDERS: "/api/orders",
  USER: "/api/user",
  AI: {
    CHAT: "/api/ai/chat",
    RECOMMENDATIONS: "/api/ai/recommendations",
    VISUALIZATION: "/api/ai/visualization",
  },
  PRIVACY: "/api/privacy",
} as const

export const STYLE_PROFILES = [
  "Modern Classic",
  "Avant-Garde",
  "Minimalist",
  "Romantic",
  "Architectural",
  "Bohemian Luxe",
  "Power Elegant",
  "Artistic Eclectic",
] as const

export const CATEGORIES = [
  "Tops",
  "Bottoms",
  "Dresses",
  "Outerwear",
  "Shoes",
  "Bags",
  "Accessories",
  "Jewelry",
] as const

export const OCCASIONS = [
  "Everyday",
  "Business",
  "Formal",
  "Evening",
  "Weekend",
  "Travel",
  "Special Event",
] as const

export const CLIMATES = [
  "Warm",
  "Temperate",
  "Cool",
  "Cold",
] as const

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 48,
} as const
