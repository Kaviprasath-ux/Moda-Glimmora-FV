"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { Button } from "@/components/ui/button"

interface HeroSlide {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  cta: {
    label: string
    href: string
  }
}

const heroSlides: HeroSlide[] = [
  {
    id: "1",
    title: "The Art of Timeless Elegance",
    subtitle: "Spring/Summer 2024",
    description: "Discover curated collections that transcend seasons, crafted by master artisans for those who appreciate the exceptional.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    cta: { label: "Explore Collections", href: "/explore" },
  },
  {
    id: "2",
    title: "Heritage Meets Innovation",
    subtitle: "The Maison Lumière Story",
    description: "A journey through 130 years of craftsmanship, where tradition and modernity intertwine to create extraordinary pieces.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80",
    cta: { label: "Enter the Universe", href: "/explore/maison-lumiere" },
  },
  {
    id: "3",
    title: "Your Style, Intelligently Curated",
    subtitle: "AI-Powered Discovery",
    description: "Let our fashion intelligence guide you to pieces that truly resonate with your personal aesthetic.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80",
    cta: { label: "Begin Discovery", href: "/discover" },
  },
]

export function HeroExperience() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)
  const [direction, setDirection] = React.useState(1)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const nextSlide = React.useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  React.useEffect(() => {
    if (isPaused) return
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  const currentHero = heroSlides[currentSlide]

  return (
    <section
      className="relative h-screen min-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={currentHero.image}
            alt={currentHero.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full luxury-container flex items-center">
        <div className="max-w-2xl pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHero.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-accent text-lg md:text-xl text-white/80 tracking-wide mb-4">
                {currentHero.subtitle}
              </p>
              <h1 className="hero-heading text-white mb-6">
                {currentHero.title}
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                {currentHero.description}
              </p>
              <Button
                size="xl"
                variant="luxury-outline"
                className="text-white border-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href={currentHero.cta.href}>
                  {currentHero.cta.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 luxury-container">
        <div className="flex items-center justify-between">
          {/* Slide Indicators */}
          <div className="flex items-center gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1)
                  setCurrentSlide(index)
                }}
                className={cn(
                  "h-1 rounded-full transition-all duration-300",
                  index === currentSlide
                    ? "w-12 bg-white"
                    : "w-6 bg-white/40 hover:bg-white/60"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsPaused(!isPaused)}
              className="text-white hover:bg-white/20"
              aria-label={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="text-white hover:bg-white/20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="text-white hover:bg-white/20"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
