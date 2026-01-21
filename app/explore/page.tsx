"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Compass } from "lucide-react"
import { mockBrandSummaries } from "@/data/mock/brands"

export default function ExplorePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80"
            alt="Explore luxury fashion"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Compass className="h-12 w-12 mx-auto mb-4 opacity-80" />
            <h1 className="hero-heading mb-4">Explore</h1>
            <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
              Immerse yourself in the universes of legendary fashion houses.
              Discover heritage, craftsmanship, and culture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="section-spacing">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockBrandSummaries.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <h2 className="font-display text-2xl font-medium mb-1">
                        {brand.name}
                      </h2>
                      <p className="text-sm opacity-80 font-accent mb-4">
                        {brand.tagline}
                      </p>
                      <div className="flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Enter Universe
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Categories */}
      <section className="section-spacing bg-muted/30">
        <div className="luxury-container">
          <h2 className="section-heading text-center mb-12">Explore by Interest</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Art & Collaborations", href: "/explore/art", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80" },
              { title: "Travel & Destinations", href: "/explore/travel", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80" },
              { title: "Craftsmanship Stories", href: "/explore/craft", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80" },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={category.href}
                  className="group block relative aspect-video rounded-lg overflow-hidden"
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-display text-xl text-white font-medium">
                      {category.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
