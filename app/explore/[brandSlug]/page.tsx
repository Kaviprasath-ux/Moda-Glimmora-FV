"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, Clock, MapPin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/shared/Breadcrumbs"
import { getBrandBySlug } from "@/data/mock/brands"
import { getProductsByBrandId } from "@/data/mock/products"
import { formatCurrency } from "@/lib/utils/formatters"

interface BrandPageProps {
  params: { brandSlug: string }
}

export default function BrandPage({ params }: BrandPageProps) {
  const brand = getBrandBySlug(params.brandSlug)

  if (!brand) {
    notFound()
  }

  const products = getProductsByBrandId(brand.id)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={brand.heroImage}
            alt={brand.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 luxury-container pb-12 text-white">
          <Breadcrumbs
            items={[
              { label: "Explore", href: "/explore" },
              { label: brand.name },
            ]}
            className="mb-6 text-white/70"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="hero-heading mb-4">{brand.name}</h1>
            <p className="font-accent text-xl md:text-2xl opacity-80 mb-6">{brand.tagline}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm opacity-70">
              <span className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                Est. {brand.heritage.founded}
              </span>
              <span className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                {brand.heritage.origin}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 md:top-20 z-30 bg-background border-b">
        <div className="luxury-container">
          <div className="flex items-center gap-6 overflow-x-auto py-4 scrollbar-hide">
            <Link href={`/explore/${brand.slug}`} className="text-sm font-medium whitespace-nowrap">
              Overview
            </Link>
            <Link href={`/explore/${brand.slug}/heritage`} className="text-sm text-muted-foreground hover:text-foreground whitespace-nowrap">
              Heritage
            </Link>
            <Link href={`/explore/${brand.slug}/craftsmanship`} className="text-sm text-muted-foreground hover:text-foreground whitespace-nowrap">
              Craftsmanship
            </Link>
            <Link href={`/explore/${brand.slug}/collections`} className="text-sm text-muted-foreground hover:text-foreground whitespace-nowrap">
              Collections
            </Link>
          </div>
        </div>
      </section>

      {/* AI Concierge Intro */}
      <section className="py-8 bg-secondary/10 border-b">
        <div className="luxury-container">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-secondary/20">
              <Sparkles className="h-6 w-6 text-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Explore with {brand.name}&apos;s Guide</h3>
              <p className="text-sm text-muted-foreground">
                Ask me anything about our heritage, craftsmanship, or collections.
              </p>
            </div>
            <Button variant="secondary">Start Conversation</Button>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-spacing">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-accent text-xl md:text-2xl leading-relaxed text-muted-foreground">
              {brand.description}
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Timeline Preview */}
      <section className="section-spacing bg-muted/30">
        <div className="luxury-container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-heading">Heritage</h2>
            <Link
              href={`/explore/${brand.slug}/heritage`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center"
            >
              View Full Timeline
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {brand.heritage.timeline.slice(0, 4).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-display font-medium text-secondary mb-2">
                  {event.year}
                </div>
                <h3 className="font-medium mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Preview */}
      {brand.craftsmanship.length > 0 && (
        <section className="section-spacing">
          <div className="luxury-container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="section-heading">Craftsmanship</h2>
              <Link
                href={`/explore/${brand.slug}/craftsmanship`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center"
              >
                View All Stories
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brand.craftsmanship.slice(0, 2).map((craft) => (
                <motion.div
                  key={craft.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src={craft.images[0]}
                      alt={craft.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-display text-xl font-medium mb-2">{craft.title}</h3>
                  <p className="text-muted-foreground">{craft.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Preview */}
      {products.length > 0 && (
        <section className="section-spacing bg-muted/30">
          <div className="luxury-container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="section-heading">Featured Pieces</h2>
              <Link
                href={`/explore/${brand.slug}/products`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center"
              >
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.slice(0, 3).map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/explore/${brand.slug}/products/${product.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                      <Image
                        src={product.images[0].url}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground">{formatCurrency(product.price)}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
