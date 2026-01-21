"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { mockBrandSummaries } from "@/data/mock/brands"

export function BrandUniversePortals() {
  return (
    <section className="section-spacing">
      <div className="luxury-container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-subheading mb-2">Enter Their World</p>
          <h2 className="section-heading">Brand Universes</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            More than products—immerse yourself in the heritage, craft, and culture of legendary fashion houses.
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockBrandSummaries.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/explore/${brand.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={brand.heroImage}
                    alt={brand.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <p className="font-display text-2xl font-medium mb-2">Enter Universe</p>
                      <ArrowRight className="h-6 w-6 mx-auto" />
                    </div>
                  </div>

                  {/* Brand Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-display text-2xl font-medium mb-1">
                      {brand.name}
                    </h3>
                    <p className="text-sm opacity-80 font-accent">
                      {brand.tagline}
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Heritage • Craft • Collections</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/explore"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Explore All Brands
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
