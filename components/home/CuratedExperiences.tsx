"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils/cn"

interface ExperienceCard {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  href: string
  color: string
}

const experiences: ExperienceCard[] = [
  {
    id: "1",
    title: "Heritage Journeys",
    subtitle: "Stories of Origin",
    description: "Explore the founding stories and enduring legacies of the world's most prestigious fashion houses.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    href: "/explore",
    color: "from-amber-900/80",
  },
  {
    id: "2",
    title: "Craft Stories",
    subtitle: "The Art of Making",
    description: "Discover the artisans and techniques behind extraordinary garments, from silk weaving to hand-stitching.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    href: "/explore/craft",
    color: "from-slate-900/80",
  },
  {
    id: "3",
    title: "Art & Fashion",
    subtitle: "Creative Collaborations",
    description: "Where fashion meets art—explore collaborations between designers, artists, and cultural institutions.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    href: "/explore/art",
    color: "from-rose-900/80",
  },
  {
    id: "4",
    title: "Travel & Style",
    subtitle: "Fashion Destinations",
    description: "Curated journeys through the world's fashion capitals and the boutiques that define them.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    href: "/explore/travel",
    color: "from-navy-900/80",
  },
]

export function CuratedExperiences() {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="luxury-container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-subheading mb-2">Beyond Commerce</p>
          <h2 className="section-heading">Curated Experiences</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Fashion is culture, history, and artistry. Explore stories that go beyond the product.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={experience.href}
                className="group block relative aspect-[3/4] rounded-lg overflow-hidden"
              >
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t to-transparent",
                  experience.color
                )} />

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <p className="text-sm font-medium opacity-80 mb-1">
                    {experience.subtitle}
                  </p>
                  <h3 className="font-display text-xl font-medium mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-sm opacity-80 mb-4 line-clamp-2">
                    {experience.description}
                  </p>
                  <div className="flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
