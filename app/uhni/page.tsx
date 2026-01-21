"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Check,
  Clock,
  Sparkles,
  Search as SearchIcon,
  Scissors,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useZeroUIStore } from "@/lib/store/zeroUIStore"
import { useSourcingStore } from "@/lib/store/sourcingStore"
import { useBespokeStore } from "@/lib/store/bespokeStore"
import { mockUHNIUserProfile, mockConciergeProfile, mockUpcomingEvents } from "@/data/mock/uhni-user"
import { mockPrivateCollections } from "@/data/mock/private-collections"
import { formatPrice } from "@/lib/utils/formatters"

export default function UHNIHomePage() {
  const pendingApprovals = useZeroUIStore((state) => state.getPendingApprovals())
  const activeRequests = useSourcingStore((state) => state.getActiveRequests())
  const activeProjects = useBespokeStore((state) => state.getActiveProjects())

  const greeting = React.useMemo(() => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }, [])

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="luxury-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-3xl md:text-4xl font-light mb-4">
            {greeting}, {mockUHNIUserProfile.firstName}.
          </h1>
          <p className="text-lg text-muted-foreground font-light">
            Your concierge has prepared selections for you.
          </p>
        </motion.div>
      </section>

      {/* Pending Approvals */}
      {pendingApprovals.length > 0 && (
        <section className="luxury-container pb-12">
          <Card className="uhni-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {pendingApprovals.length} {pendingApprovals.length === 1 ? "item awaits" : "items await"} your approval
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Prepared by your AI concierge
                    </p>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/uhni/zero-ui/approvals">
                    Review Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Curated For You */}
      <section className="luxury-container pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-heading mb-2">Curated For You</h2>
            <p className="text-muted-foreground">
              Based on your upcoming events and preferences
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/uhni/zero-ui/wardrobe">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pendingApprovals.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="uhni-card overflow-hidden group">
                <div className="aspect-[3/4] relative bg-muted">
                  <Image
                    src={item.product.images[0]?.url || "/images/placeholder-product.jpg"}
                    alt={item.product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs">
                      {item.preparedFor}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground">{item.product.brand.name}</p>
                    <h3 className="font-medium line-clamp-1">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {formatPrice(item.product.price)}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Fit Confidence</span>
                      <span>{item.fitConfidence}%</span>
                    </div>
                    <Progress value={item.fitConfidence} className="h-1" />
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Check className="mr-1 h-3 w-3" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Active Requests */}
      {(activeRequests.length > 0 || activeProjects.length > 0) && (
        <section className="luxury-container pb-16">
          <h2 className="section-heading mb-8">Active Requests</h2>

          <div className="space-y-4">
            {/* Sourcing Requests */}
            {activeRequests.map((request) => (
              <Card key={request.id} className="uhni-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <SearchIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Sourcing: {request.description.slice(0, 50)}...</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="capitalize">Status: {request.status}</span>
                          {request.results && request.results[0] && (
                            <>
                              <span>•</span>
                              <span>Location: {request.results[0].location}</span>
                              <span>•</span>
                              <span>Confidence: {request.results[0].confidence}%</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/uhni/sourcing/requests/${request.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Bespoke Projects */}
            {activeProjects.map((project) => (
              <Card key={project.id} className="uhni-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <Scissors className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Bespoke: {project.title}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span>Atelier: {project.atelier.name}</span>
                          <span>•</span>
                          <span className="capitalize">Stage: {project.status}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/uhni/bespoke/projects/${project.id}`}>
                        View Progress
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Private Collection Preview */}
      <section className="luxury-container pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-heading mb-2">Private Collection Preview</h2>
            <p className="text-muted-foreground">
              Exclusive early access before public release
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/uhni/experiences/collections">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockPrivateCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="uhni-card overflow-hidden group">
                <div className="aspect-video relative bg-muted">
                  <Image
                    src={collection.heroImage || "/images/placeholder-collection.jpg"}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs text-white/70 uppercase tracking-wider">
                      {collection.brand}
                    </p>
                    <h3 className="text-lg font-display text-white font-light">
                      {collection.name}
                    </h3>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-accent text-accent-foreground text-xs">
                      Early Access
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {collection.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{collection.pieceCount} pieces</span>
                    <span className="text-accent">Your access: NOW</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="luxury-container pb-16">
        <h2 className="section-heading mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockUpcomingEvents.map((event) => (
            <Card key={event.id} className="uhni-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{event.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric"
                      })}
                    </p>
                    {event.dressCode && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {event.dressCode}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Your Concierge */}
      <section className="luxury-container pb-16">
        <Card className="uhni-card">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-muted overflow-hidden">
                  <Image
                    src={mockConciergeProfile.avatar || "/images/concierge/avatar-placeholder.jpg"}
                    alt={mockConciergeProfile.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-light mb-1">
                  Your Concierge
                </h3>
                <p className="text-muted-foreground mb-2">
                  {mockConciergeProfile.name} • {mockConciergeProfile.availability === "available" ? "Available now" : "Currently busy"}
                </p>
                <p className="text-sm text-muted-foreground">
                  &quot;I&apos;m available to assist. Tap to connect.&quot;
                </p>
              </div>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="/uhni/concierge">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Chat Now
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/uhni/concierge?action=schedule">
                    Schedule Call
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
