"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { mockRecommendations } from "@/data/mock/recommendations"
import { formatCurrency } from "@/lib/utils/formatters"
import { useAuthStore } from "@/lib/store/authStore"

export function PersonalizedDiscovery() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  // Show different content based on auth state
  if (!isAuthenticated) {
    return <GuestDiscovery />
  }

  return <AuthenticatedDiscovery />
}

function GuestDiscovery() {
  return (
    <section className="section-spacing">
      <div className="luxury-container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6">
              <Sparkles className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="section-heading mb-4">
              Discover Fashion That Resonates
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create your style profile and let our fashion intelligence curate
              experiences and pieces that truly align with who you are.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/register">
                  <User className="mr-2 h-4 w-4" />
                  Create Style Profile
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/discover">
                  Try AI Discovery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Personal Fashion Identity",
                description: "Build a style profile that evolves with you"
              },
              {
                title: "Explainable Recommendations",
                description: "Understand why each piece suits your style"
              },
              {
                title: "No Dark Patterns",
                description: "Honest guidance without manipulation"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="font-display text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AuthenticatedDiscovery() {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="luxury-container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="section-subheading mb-1">Based on Your Style Identity</p>
            <h2 className="section-heading">Curated for You</h2>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/discover">
              See All Recommendations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Recommendation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockRecommendations.slice(0, 3).map((rec, index) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden card-hover">
                <Link href={`/explore/${rec.product.brandId}/products/${rec.product.slug}`}>
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={rec.product.mainImage}
                      alt={rec.product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-secondary/90 text-secondary-foreground text-xs font-medium px-2 py-1 rounded-full">
                      {rec.confidence}% Match
                    </div>
                  </div>
                </Link>
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground mb-1">{rec.product.brandName}</p>
                  <h3 className="font-medium mb-2 line-clamp-1">{rec.product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {rec.explanation}
                  </p>
                  <p className="font-medium">{formatCurrency(rec.product.price)}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
