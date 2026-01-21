"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { EmptyState } from "@/components/shared/EmptyState"
import { useCartStore } from "@/lib/store/cartStore"
import { formatCurrency } from "@/lib/utils/formatters"
import { mockProductSummaries } from "@/data/mock/products"

export default function CartPage() {
  const { cart, updateItemQuantity, removeItem, getSubtotal } = useCartStore()

  if (!cart || cart.items.length === 0) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="luxury-container py-12">
          <EmptyState
            icon={<ShoppingBag className="h-16 w-16" />}
            title="Your bag is empty"
            description="Explore our curated collections and discover pieces that resonate with your style."
            action={{ label: "Start Exploring", href: "/explore" }}
          />
        </div>
      </div>
    )
  }

  const subtotal = getSubtotal()

  return (
    <div className="pt-20 min-h-screen">
      <div className="luxury-container py-12">
        <h1 className="font-display text-3xl font-medium mb-8">Your Selections</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex gap-6 p-4 bg-card rounded-lg border"
              >
                <Link
                  href={`/explore/${item.product.brandId}/products/${item.product.slug}`}
                  className="relative w-24 h-32 rounded-md overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={item.product.mainImage}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </Link>

                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.product.brandName}
                      </p>
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Size: {item.variant.size} • Color: {item.variant.color}
                      </p>
                      {item.fitConfidence && (
                        <p className="text-sm text-success mt-1">
                          Fit Confidence: {item.fitConfidence}%
                        </p>
                      )}
                    </div>
                    <p className="font-medium">{formatCurrency(item.price)}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* AI Suggestions */}
            <Card className="bg-secondary/5 border-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-secondary" />
                  <h3 className="font-medium">Complete Your Look</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Based on your selections, these pieces would complement your choices beautifully.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {mockProductSummaries.slice(3, 6).map((product) => (
                    <Link
                      key={product.id}
                      href={`/explore/${product.brandId}/products/${product.slug}`}
                      className="group"
                    >
                      <div className="relative aspect-square rounded-md overflow-hidden mb-2">
                        <Image
                          src={product.mainImage}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {product.name}
                      </p>
                      <p className="text-xs font-medium">
                        {formatCurrency(product.price)}
                      </p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-lg border p-6">
              <h2 className="font-display text-lg font-medium mb-4">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between font-medium text-lg mb-6">
                <span>Estimated Total</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              <Button size="lg" className="w-full" asChild>
                <Link href="/checkout">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                No countdown timers. No &quot;items selling fast.&quot; Take your time.
              </p>

              <Separator className="my-4" />

              <Button variant="outline" className="w-full" asChild>
                <Link href="/explore">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
