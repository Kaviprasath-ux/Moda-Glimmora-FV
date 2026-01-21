"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Scissors,
  ArrowRight,
  MessageCircle,
  Check
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useBespokeStore } from "@/lib/store/bespokeStore"
import { mockPastCommissions } from "@/data/mock/bespoke-projects"
import { formatPrice } from "@/lib/utils/formatters"

const categories = [
  { id: "outerwear", name: "Outerwear", description: "Coats, jackets, and capes" },
  { id: "evening", name: "Evening", description: "Gowns, formal wear" },
  { id: "tailoring", name: "Tailoring", description: "Suits, blazers, trousers" },
  { id: "leather_goods", name: "Leather Goods", description: "Bags, accessories" },
  { id: "jewelry", name: "Jewelry", description: "Fine jewelry pieces" },
  { id: "other", name: "Other", description: "Custom requests" }
]

export default function BespokePage() {
  const { getActiveProjects } = useBespokeStore()
  const activeProjects = getActiveProjects()

  return (
    <div className="pt-20 min-h-screen">
      <div className="luxury-container py-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="font-display text-3xl font-light mb-4">Bespoke Commissions</h1>
          <p className="text-lg text-muted-foreground font-light">
            One-of-a-kind pieces, created for you. Work with the world&apos;s finest ateliers.
          </p>
        </div>

        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="projects">Active Projects</TabsTrigger>
            <TabsTrigger value="past">Past Commissions</TabsTrigger>
            <TabsTrigger value="new">New Request</TabsTrigger>
          </TabsList>

          {/* Active Projects */}
          <TabsContent value="projects" className="space-y-6">
            {activeProjects.length === 0 ? (
              <Card className="uhni-card">
                <CardContent className="p-12 text-center">
                  <Scissors className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-medium mb-2">No active projects</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Start a new bespoke commission to create something unique.
                  </p>
                  <Button>Start Commission</Button>
                </CardContent>
              </Card>
            ) : (
              activeProjects.map((project) => (
                <Card key={project.id} className="uhni-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex">
                      {/* Project Image/Moodboard Preview */}
                      <div className="w-48 bg-muted relative shrink-0">
                        {project.moodboard[0]?.url ? (
                          <Image
                            src={project.moodboard[0].url}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="h-full flex items-center justify-center">
                            <Scissors className="h-8 w-8 text-muted-foreground" />
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-medium text-lg">{project.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {project.atelier.name}, {project.atelier.location}
                            </p>
                          </div>
                          <Badge variant="outline" className="capitalize">
                            {project.status}
                          </Badge>
                        </div>

                        {/* Timeline */}
                        <div className="mb-6">
                          <p className="text-xs text-muted-foreground mb-3">Timeline</p>
                          <div className="flex items-center gap-1">
                            {project.timeline.map((stage, index) => (
                              <React.Fragment key={stage.id}>
                                <div
                                  className={`timeline-dot ${stage.status}`}
                                  title={stage.name}
                                />
                                {index < project.timeline.length - 1 && (
                                  <div
                                    className={`timeline-line ${
                                      stage.status === "completed" ? "completed" : "upcoming"
                                    }`}
                                  />
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-2">
                            <span>Consultation</span>
                            <span>Delivery</span>
                          </div>
                        </div>

                        {/* Current Stage */}
                        {project.timeline.find((s) => s.status === "current") && (
                          <div className="p-4 bg-muted/30 rounded-lg mb-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-medium">
                                  Current: {project.timeline.find((s) => s.status === "current")?.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {project.timeline.find((s) => s.status === "current")?.notes}
                                </p>
                              </div>
                              {project.timeline.find((s) => s.status === "current")?.approvalRequired && (
                                <Badge variant="secondary">Approval Needed</Badge>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-3">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/uhni/bespoke/projects/${project.id}`}>
                              View Details
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Message Atelier
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Past Commissions */}
          <TabsContent value="past">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockPastCommissions.map((commission, index) => (
                <motion.div
                  key={commission.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="uhni-card overflow-hidden group">
                    <div className="aspect-square relative bg-muted">
                      <Image
                        src={commission.image || "/images/placeholder-bespoke.jpg"}
                        alt={commission.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary">
                          <Check className="mr-1 h-3 w-3" />
                          Delivered
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium">{commission.title}</h3>
                      <p className="text-sm text-muted-foreground">{commission.atelier}</p>
                      <div className="flex items-center justify-between mt-2 text-sm">
                        <span className="text-muted-foreground">
                          {new Date(commission.deliveredAt).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric"
                          })}
                        </span>
                        <span>{formatPrice(commission.price)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* New Request */}
          <TabsContent value="new">
            <Card className="uhni-card">
              <CardHeader>
                <CardTitle>Start New Commission</CardTitle>
                <CardDescription>
                  What would you like to create? Select a category to begin.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {categories.map((category) => (
                    <Card
                      key={category.id}
                      className="uhni-card cursor-pointer hover:border-accent/50 transition-colors"
                    >
                      <CardContent className="p-6 text-center">
                        <h3 className="font-medium mb-1">{category.name}</h3>
                        <p className="text-xs text-muted-foreground">{category.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                  <h4 className="font-medium mb-2">How it works</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Select a category and describe your vision</li>
                    <li>2. We match you with the perfect atelier</li>
                    <li>3. Consultation and design phase</li>
                    <li>4. Fabric selection and approval</li>
                    <li>5. Creation and fittings</li>
                    <li>6. Delivery of your one-of-a-kind piece</li>
                  </ol>
                </div>

                <Button className="w-full mt-6">
                  Continue to Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
