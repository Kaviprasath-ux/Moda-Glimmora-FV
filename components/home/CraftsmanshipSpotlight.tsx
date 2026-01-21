"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CraftsmanshipSpotlight() {
  return (
    <section className="section-spacing bg-primary text-primary-foreground">
      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary font-medium tracking-wider uppercase text-sm mb-4">
              Craftsmanship Spotlight
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              The Art of Hand-Pleating
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-6">
              In the ateliers of Lyon, master craftspeople continue a tradition that spans
              centuries. Each pleat is formed by hand, a process that takes over 20 hours
              per garment—creating a fabric behavior that no machine can replicate.
            </p>
            <p className="text-primary-foreground/70 mb-8">
              This technique, perfected by Maison Lumière&apos;s artisans, gives their silk
              gowns their distinctive movement and luminosity. It&apos;s not just
              construction—it&apos;s artistry.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <Link href="/explore/craft">
                  Explore Craftsmanship
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch the Process
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                alt="Hand-pleating craftsmanship"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Quote */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 max-w-xs bg-card text-card-foreground p-6 rounded-lg shadow-xl">
              <blockquote className="font-accent text-lg italic mb-2">
                &ldquo;Each fold captures light in a way that tells a story.&rdquo;
              </blockquote>
              <cite className="text-sm text-muted-foreground not-italic">
                — Marie Dubois, Master Artisan
              </cite>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
