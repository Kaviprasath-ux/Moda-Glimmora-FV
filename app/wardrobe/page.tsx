"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shirt, Grid, PlusCircle, ArrowRight, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { mockWardrobeItems, mockOutfits, mockWardrobeGaps } from "@/data/mock/users"
import { useAuthStore } from "@/lib/store/authStore"
import { EmptyState } from "@/components/shared/EmptyState"

export default function WardrobePage() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (!isAuthenticated) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="luxury-container py-12">
          <EmptyState
            icon={<Shirt className="h-16 w-16" />}
            title="Your Digital Wardrobe"
            description="Sign in to track your pieces, build outfits, and discover wardrobe gaps."
            action={{ label: "Sign In", href: "/login" }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="luxury-container py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-medium">My Digital Wardrobe</h1>
            <p className="text-muted-foreground mt-1">
              {mockWardrobeItems.length} items • {mockOutfits.length} outfits • {mockWardrobeGaps.length} gaps identified
            </p>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Item
          </Button>
        </div>

        <Tabs defaultValue="items" className="space-y-6">
          <TabsList>
            <TabsTrigger value="items">All Items</TabsTrigger>
            <TabsTrigger value="outfits">Outfits</TabsTrigger>
            <TabsTrigger value="gaps">Gap Analysis</TabsTrigger>
          </TabsList>

          {/* Items Tab */}
          <TabsContent value="items">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {mockWardrobeItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden card-hover cursor-pointer">
                    <div className="relative aspect-square bg-muted">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Shirt className="h-8 w-8 text-muted-foreground/50" />
                        </div>
                      )}
                    </div>
                    <CardContent className="p-3">
                      <p className="text-xs text-muted-foreground">{item.brand}</p>
                      <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Worn {item.wearCount} times
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Add Item Card */}
              <Card className="overflow-hidden border-dashed cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="aspect-square flex flex-col items-center justify-center text-muted-foreground">
                  <PlusCircle className="h-8 w-8 mb-2" />
                  <p className="text-sm">Add Item</p>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Outfits Tab */}
          <TabsContent value="outfits">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockOutfits.map((outfit, index) => (
                <motion.div
                  key={outfit.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden card-hover">
                    <CardHeader>
                      <CardTitle className="text-lg">{outfit.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2 mb-4">
                        {outfit.items.slice(0, 3).map((item) => (
                          <div
                            key={item.id}
                            className="relative w-16 h-16 rounded-md overflow-hidden bg-muted"
                          >
                            {item.image ? (
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Shirt className="h-6 w-6 text-muted-foreground/50" />
                              </div>
                            )}
                          </div>
                        ))}
                        {outfit.items.length > 3 && (
                          <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center text-sm text-muted-foreground">
                            +{outfit.items.length - 3}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {outfit.occasions.map((occasion) => (
                          <Badge key={occasion} variant="outline" className="text-xs">
                            {occasion}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Create Outfit Card */}
              <Card className="border-dashed cursor-pointer hover:bg-muted/50 transition-colors flex items-center justify-center min-h-[200px]">
                <div className="text-center text-muted-foreground">
                  <Grid className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">Create New Outfit</p>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Gap Analysis Tab */}
          <TabsContent value="gaps">
            <div className="space-y-4">
              {mockWardrobeGaps.map((gap, index) => (
                <motion.div
                  key={gap.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            "p-2 rounded-full",
                            gap.priority === "high"
                              ? "bg-destructive/10"
                              : gap.priority === "medium"
                              ? "bg-secondary/10"
                              : "bg-muted"
                          )}
                        >
                          <AlertCircle
                            className={cn(
                              "h-5 w-5",
                              gap.priority === "high"
                                ? "text-destructive"
                                : gap.priority === "medium"
                                ? "text-secondary"
                                : "text-muted-foreground"
                            )}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium">{gap.category}</h3>
                            <Badge
                              variant={
                                gap.priority === "high"
                                  ? "destructive"
                                  : gap.priority === "medium"
                                  ? "secondary"
                                  : "outline"
                              }
                              className="text-xs"
                            >
                              {gap.priority} priority
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {gap.description}
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/discover">
                              Find Suggestions
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
