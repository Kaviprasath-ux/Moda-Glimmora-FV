"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, Bell, BellOff, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EmptyState } from "@/components/shared/EmptyState"
import { useWishlistStore } from "@/lib/store/wishlistStore"
import { useCartStore } from "@/lib/store/cartStore"
import { formatCurrency } from "@/lib/utils/formatters"
import { mockProducts } from "@/data/mock/products"

export default function WishlistPage() {
  const { items, removeItem, toggleNotifyRestock } = useWishlistStore()
  const addToCart = useCartStore((state) => state.addItem)

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="luxury-container py-12">
          <EmptyState
            icon={<Heart className="h-16 w-16" />}
            title="Your wishlist is empty"
            description="Save pieces you love and we'll help you keep track of availability."
            action={{ label: "Start Exploring", href: "/explore" }}
          />
        </div>
      </div>
    )
  }

  const handleAddToCart = (item: typeof items[0]) => {
    const product = mockProducts.find((p) => p.id === item.product.id)
    if (!product) return

    addToCart({
      id: `cart-${product.id}-${product.variants[0].id}`,
      productId: product.id,
      product: item.product,
      variant: product.variants[0],
      quantity: 1,
      price: product.price,
      addedAt: new Date().toISOString(),
    })
    removeItem(item.product.id)
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="luxury-container py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-medium">Wishlist</h1>
            <p className="text-muted-foreground mt-1">
              {items.length} {items.length === 1 ? "piece" : "pieces"} saved
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <Link href={`/explore/${item.product.brandId}/products/${item.product.slug}`}>
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={item.product.mainImage}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground mb-1">
                    {item.product.brandName}
                  </p>
                  <h3 className="font-medium mb-1 line-clamp-1">
                    {item.product.name}
                  </h3>
                  <p className="font-medium mb-4">
                    {formatCurrency(item.product.price)}
                  </p>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Add to Bag
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleNotifyRestock(item.product.id)}
                      title={item.notifyOnRestock ? "Disable notifications" : "Notify on restock"}
                    >
                      {item.notifyOnRestock ? (
                        <BellOff className="h-4 w-4" />
                      ) : (
                        <Bell className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => removeItem(item.product.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
