"use client"

import { cn } from "@/lib/utils/cn"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-3",
  }

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-secondary border-t-transparent",
        sizeClasses[size],
        className
      )}
    />
  )
}

interface LoadingPageProps {
  message?: string
}

export function LoadingPage({ message = "Loading..." }: LoadingPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-muted-foreground font-accent text-lg">{message}</p>
    </div>
  )
}

export function LoadingSection() {
  return (
    <div className="flex items-center justify-center py-20">
      <LoadingSpinner size="md" />
    </div>
  )
}
