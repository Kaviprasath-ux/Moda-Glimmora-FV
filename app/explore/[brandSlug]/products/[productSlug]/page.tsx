"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import {
  Heart,
  ShoppingBag,
  Eye,
  Check,
  Clock,
  MapPin,
  Truck,
  Bell,
  Sparkles
} from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Breadcrumbs } from "@/components/shared/Breadcrumbs"
import { getProductBySlug } from "@/data/mock/products"
import { getBrandById } from "@/data/mock/brands"
import { formatCurrency } from "@/lib/utils/formatters"
import { useCartStore } from "@/lib/store/cartStore"
import { useWishlistStore } from "@/lib/store/wishlistStore"

interface ProductPageProps {
  params: {
    brandSlug: string
    productSlug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.productSlug)

  if (!product) {
    notFound()
  }

  const brand = getBrandById(product.brandId)
  const [selectedVariant, setSelectedVariant] = React.useState(product.variants[0])
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0)

  const addToCart = useCartStore((state) => state.addItem)
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
  const isWishlisted = isInWishlist(product.id)

  // Group variants by size
  const sizes = Array.from(new Set(product.variants.map((v) => v.size)))
  const colors = Array.from(new Set(product.variants.map((v) => v.color)))

  const handleAddToCart = () => {
    addToCart({
      id: `cart-${product.id}-${selectedVariant.id}`,
      productId: product.id,
      product: {
        id: product.id,
        slug: product.slug,
        brandId: product.brandId,
        brandName: product.brand.name,
        name: product.name,
        price: product.price,
        priceVisibility: product.priceVisibility,
        mainImage: product.images[0].url,
        category: product.category,
        ivEnabled: product.ivEnabled,
      },
      variant: selectedVariant,
      quantity: 1,
      price: product.price + selectedVariant.priceModifier,
      fitConfidence: 94,
      addedAt: new Date().toISOString(),
    })
  }

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist({
        id: product.id,
        slug: product.slug,
        brandId: product.brandId,
        brandName: product.brand.name,
        name: product.name,
        price: product.price,
        priceVisibility: product.priceVisibility,
        mainImage: product.images[0].url,
        category: product.category,
        ivEnabled: product.ivEnabled,
      })
    }
  }

  return (
    <div className="pt-20">
      <div className="luxury-container py-8">
        <Breadcrumbs
          items={[
            { label: "Explore", href: "/explore" },
            { label: brand?.name || "", href: `/explore/${params.brandSlug}` },
            { label: product.name },
          ]}
          className="mb-8"
        />

        {/* Product Story Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
            {product.brand.name}
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-medium mb-4">
            {product.name}
          </h1>
          <p className="font-accent text-lg text-muted-foreground">
            {product.story}
          </p>
        </motion.section>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted"
            >
              <Image
                src={product.images[selectedImageIndex].url}
                alt={product.images[selectedImageIndex].alt}
                fill
                className="object-cover"
                priority
              />
              {product.ivEnabled && (
                <Link
                  href={`/try-on/${product.slug}`}
                  className="absolute bottom-4 right-4"
                >
                  <Button variant="secondary" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    View in IV
                  </Button>
                </Link>
              )}
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImageIndex(index)}
                  className={cn(
                    "relative w-20 h-24 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors",
                    selectedImageIndex === index
                      ? "border-primary"
                      : "border-transparent hover:border-muted-foreground/50"
                  )}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Price */}
            <div>
              <p className="text-3xl font-medium">
                {formatCurrency(product.price + selectedVariant.priceModifier)}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Inclusive of all taxes
              </p>
            </div>

            <Separator />

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Size</h3>
                <button className="text-sm text-muted-foreground hover:text-foreground">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => {
                  const variant = product.variants.find(
                    (v) => v.size === size && v.color === selectedVariant.color
                  )
                  const isAvailable = !!variant
                  const isSelected = selectedVariant.size === size

                  return (
                    <button
                      key={size}
                      onClick={() => variant && setSelectedVariant(variant)}
                      disabled={!isAvailable}
                      className={cn(
                        "min-w-12 px-4 py-2 rounded-md border text-sm font-medium transition-colors",
                        isSelected
                          ? "bg-primary text-primary-foreground border-primary"
                          : isAvailable
                          ? "border-border hover:border-primary"
                          : "border-border opacity-50 cursor-not-allowed line-through"
                      )}
                    >
                      {size}
                    </button>
                  )
                })}
              </div>
              <p className="text-sm text-success mt-2 flex items-center">
                <Check className="mr-1 h-4 w-4" />
                Fit Confidence: 94%
              </p>
            </div>

            {/* Color Selection */}
            {colors.length > 1 && (
              <div>
                <h3 className="font-medium mb-3">
                  Color: <span className="font-normal">{selectedVariant.color}</span>
                </h3>
                <div className="flex gap-2">
                  {colors.map((color) => {
                    const variant = product.variants.find(
                      (v) => v.color === color && v.size === selectedVariant.size
                    )
                    const colorHex = variant?.colorHex || "#999"
                    const isSelected = selectedVariant.color === color

                    return (
                      <button
                        key={color}
                        onClick={() => variant && setSelectedVariant(variant)}
                        className={cn(
                          "w-10 h-10 rounded-full border-2 transition-all",
                          isSelected ? "border-primary scale-110" : "border-transparent hover:scale-105"
                        )}
                        style={{ backgroundColor: colorHex }}
                        title={color}
                      />
                    )
                  })}
                </div>
              </div>
            )}

            <Separator />

            {/* Availability Intelligence */}
            <div className="bg-muted/50 rounded-lg p-4 space-y-3">
              <h3 className="font-medium flex items-center">
                <Truck className="mr-2 h-4 w-4" />
                Availability Intelligence
              </h3>

              {product.availability.localAvailability.available ? (
                <div className="flex items-center text-sm text-success">
                  <Check className="mr-2 h-4 w-4" />
                  Available Now — Ships in {product.availability.localAvailability.shipDays} days
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Currently unavailable at your location
                  </p>
                  {product.availability.alternateLocations.map((loc) => (
                    <div key={loc.location} className="flex items-center justify-between text-sm">
                      <span className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                        {loc.location}
                      </span>
                      <span className="text-muted-foreground">
                        {loc.confidence}% • {loc.estimatedDays} days
                      </span>
                    </div>
                  ))}
                  {product.availability.restockPrediction && (
                    <div className="flex items-center text-sm text-muted-foreground pt-2 border-t">
                      <Clock className="mr-2 h-4 w-4" />
                      Restock expected in ~2 weeks
                      <Button variant="link" size="sm" className="ml-auto">
                        <Bell className="mr-1 h-3 w-3" />
                        Notify Me
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add to Bag
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWishlistToggle}
              >
                <Heart
                  className={cn("h-4 w-4", isWishlisted && "fill-current text-rose-500")}
                />
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              No countdown timers. No &quot;only X left.&quot; Take your time.
            </p>
          </div>
        </div>

        {/* Craftsmanship Section */}
        <section className="mt-20">
          <h2 className="section-heading mb-8">Craftsmanship</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-3">Materials</h3>
              <ul className="space-y-2">
                {product.craftsmanship.materials.map((material) => (
                  <li key={material} className="text-muted-foreground flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                    {material}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Techniques</h3>
              <ul className="space-y-2">
                {product.craftsmanship.techniques.map((technique) => (
                  <li key={technique} className="text-muted-foreground flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                    {technique}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Origin</h3>
              <p className="text-muted-foreground">{product.craftsmanship.origin}</p>
              {product.craftsmanship.artisanStory && (
                <p className="text-sm text-muted-foreground mt-2 italic">
                  {product.craftsmanship.artisanStory}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* AI Style Explanation */}
        <section className="mt-20 bg-secondary/10 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-secondary/20">
              <Sparkles className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h2 className="font-display text-xl font-medium mb-2">
                Why This Suits You
              </h2>
              <p className="text-muted-foreground mb-4">
                Based on your Modern Classic style profile, this piece aligns with your
                preference for refined, timeless designs. The flowing silhouette and
                premium silk construction complement your existing wardrobe while adding
                a statement piece for formal occasions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">High Style Match</Badge>
                <Badge variant="outline">Evening Wear</Badge>
                <Badge variant="outline">Investment Piece</Badge>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
