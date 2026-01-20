"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  User,
  Sparkles,
  TrendingUp,
  Settings,
  Palette,
  ArrowRight,
  Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { mockUserProfile } from "@/data/mock/users"
import { mockBrandSummaries } from "@/data/mock/brands"
import { useAuthStore } from "@/lib/store/authStore"
import { EmptyState } from "@/components/shared/EmptyState"

export default function MyStylePage() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (!isAuthenticated) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="luxury-container py-12">
          <EmptyState
            icon={<User className="h-16 w-16" />}
            title="Create Your Style Profile"
            description="Sign in to discover your fashion identity and receive personalized recommendations."
            action={{ label: "Sign In", href: "/login" }}
          />
        </div>
      </div>
    )
  }

  const profile = mockUserProfile

  return (
    <div className="pt-20 min-h-screen">
      <div className="luxury-container py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-medium">My Fashion Identity</h1>
            <p className="text-muted-foreground mt-1">
              Your personal style profile and preferences
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/my-style/preferences">
              <Settings className="mr-2 h-4 w-4" />
              Edit Preferences
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Style Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-secondary" />
                  Style Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Primary Style</p>
                    <p className="font-display text-2xl font-medium">
                      {profile.styleProfile.primary}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Secondary Influences</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.styleProfile.secondary.map((style) => (
                        <Badge key={style} variant="outline">{style}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium">Confidence Threshold</p>
                    <p className="text-sm text-muted-foreground">
                      {profile.styleProfile.confidenceSensitivity}%
                    </p>
                  </div>
                  <Progress value={profile.styleProfile.confidenceSensitivity} />
                  <p className="text-xs text-muted-foreground mt-2">
                    Only show recommendations with this confidence level or higher
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Style Evolution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                  Style Evolution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
                  <div className="space-y-6">
                    {profile.styleProfile.evolution.map((point, index) => (
                      <motion.div
                        key={point.date}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-10"
                      >
                        <div className="absolute left-2 w-4 h-4 rounded-full bg-secondary border-2 border-background" />
                        <p className="text-xs text-muted-foreground">{point.date}</p>
                        <p className="font-medium">{point.style}</p>
                        <p className="text-sm text-muted-foreground">{point.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Color Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Color Palette</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.preferences.favoriteColors.map((color) => (
                    <div
                      key={color}
                      className="flex items-center gap-2 px-3 py-1.5 border rounded-full"
                    >
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{
                          backgroundColor:
                            color.toLowerCase() === "navy" ? "#1e2a47" :
                            color.toLowerCase() === "ivory" ? "#fffff0" :
                            color.toLowerCase() === "charcoal" ? "#36454f" :
                            color.toLowerCase() === "champagne" ? "#f7e7ce" :
                            color
                        }}
                      />
                      <span className="text-sm">{color}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Fashion Agent */}
            <Card className="bg-secondary/5 border-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-secondary/20">
                    <Sparkles className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Fashion Agent</h3>
                    <p className="text-xs text-success">Active & Learning</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  &ldquo;Your style is evolving toward bolder silhouettes while maintaining your appreciation for timeless craftsmanship.&rdquo;
                </p>
                <Button variant="secondary" size="sm" className="w-full" asChild>
                  <Link href="/my-style/agent">
                    Agent Settings
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Favorite Brands */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Favorite Brands
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockBrandSummaries.slice(0, 3).map((brand) => (
                    <Link
                      key={brand.id}
                      href={`/explore/${brand.slug}`}
                      className="flex items-center gap-3 hover:bg-muted/50 p-2 -mx-2 rounded-lg transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-muted" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{brand.name}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {brand.tagline}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-1">
                  <Link
                    href="/my-style/preferences"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <span className="text-sm">Preferences</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="/my-style/history"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <span className="text-sm">Style History</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="/wardrobe"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <span className="text-sm">Digital Wardrobe</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </nav>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
