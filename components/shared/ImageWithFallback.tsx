"use client"

import * as React from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils/cn"

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
  aspectRatio?: "square" | "portrait" | "landscape" | "video"
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/images/placeholders/product.jpg",
  className,
  aspectRatio,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = React.useState(src)
  const [isLoading, setIsLoading] = React.useState(true)

  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[16/9]",
    video: "aspect-video",
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        aspectRatio && aspectClasses[aspectRatio],
        className
      )}
    >
      {isLoading && (
        <div className="absolute inset-0 skeleton animate-pulse" />
      )}
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        className={cn(
          "object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc)
          setIsLoading(false)
        }}
      />
    </div>
  )
}
