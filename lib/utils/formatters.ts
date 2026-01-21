import { format, formatDistanceToNow, parseISO } from "date-fns"

export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(date: string | Date, formatStr: string = "MMM d, yyyy"): string {
  const dateObj = typeof date === "string" ? parseISO(date) : date
  return format(dateObj, formatStr)
}

export function formatRelativeTime(date: string | Date): string {
  const dateObj = typeof date === "string" ? parseISO(date) : date
  return formatDistanceToNow(dateObj, { addSuffix: true })
}

export function formatPercentage(value: number, decimals: number = 0): string {
  return `${value.toFixed(decimals)}%`
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + "..."
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function capitalizeWords(text: string): string {
  return text.split(" ").map(capitalize).join(" ")
}

// Alias for formatCurrency
export const formatPrice = formatCurrency
