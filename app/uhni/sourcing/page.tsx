"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Search,
  Upload,
  Lock,
  Clock,
  CheckCircle,
  ArrowRight,
  MapPin
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { useSourcingStore } from "@/lib/store/sourcingStore"
import { formatPrice } from "@/lib/utils/formatters"

export default function SourcingPage() {
  const { rareFinds, getActiveRequests } = useSourcingStore()
  const activeRequests = getActiveRequests()

  return (
    <div className="pt-20 min-h-screen">
      <div className="luxury-container py-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="font-display text-3xl font-light mb-4">Private Sourcing</h1>
          <p className="text-lg text-muted-foreground font-light">
            Access to the extraordinary. Our global network finds rare, off-market, and archive pieces.
          </p>
        </div>

        <Tabs defaultValue="requests" className="space-y-8">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="requests">Active Requests</TabsTrigger>
            <TabsTrigger value="rare">Rare Finds</TabsTrigger>
            <TabsTrigger value="new">New Request</TabsTrigger>
          </TabsList>

          {/* Active Requests */}
          <TabsContent value="requests" className="space-y-6">
            {activeRequests.length === 0 ? (
              <Card className="uhni-card">
                <CardContent className="p-12 text-center">
                  <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-medium mb-2">No active requests</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Start a new sourcing request to find rare pieces.
                  </p>
                  <Button>Create Request</Button>
                </CardContent>
              </Card>
            ) : (
              activeRequests.map((request) => (
                <Card key={request.id} className="uhni-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      {/* Status Icon */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        request.status === "located" ? "bg-green-500/10" :
                        request.status === "negotiating" ? "bg-yellow-500/10" :
                        "bg-muted"
                      }`}>
                        {request.status === "located" ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : request.status === "negotiating" ? (
                          <Clock className="h-6 w-6 text-yellow-500" />
                        ) : (
                          <Search className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>

                      {/* Request Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-medium">{request.description.slice(0, 60)}...</h3>
                          <Badge variant={
                            request.priority === "urgent" ? "destructive" :
                            request.priority === "standard" ? "default" : "secondary"
                          }>
                            {request.priority}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="capitalize">Status: <strong className="text-foreground">{request.status}</strong></span>
                          <span>•</span>
                          <span>Networks: {request.networksContacted}</span>
                          <span>•</span>
                          <span>Leads: {request.potentialLeads}</span>
                        </div>

                        {/* Results */}
                        {request.results && request.results.length > 0 && (
                          <div className="p-4 bg-muted/30 rounded-lg space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Located Item</span>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{request.results[0].location}</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">{request.results[0].item.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  Condition: {request.results[0].item.condition} ({request.results[0].item.conditionScore}/10)
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">{formatPrice(request.results[0].price)}</p>
                                <p className="text-sm text-muted-foreground">
                                  Confidence: {request.results[0].confidence}%
                                </p>
                              </div>
                            </div>

                            <Progress value={request.results[0].confidence} className="h-1" />

                            {request.results[0].source === "private_network" && (
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Lock className="h-3 w-3" />
                                <span>Private network source</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/uhni/sourcing/requests/${request.id}`}>
                            View Details
                          </Link>
                        </Button>
                        {request.status === "located" && (
                          <Button size="sm">Proceed</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Rare Finds */}
          <TabsContent value="rare" className="space-y-6">
            <p className="text-muted-foreground">
              Items our network has discovered that match your preferences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rareFinds.map((find, index) => (
                <motion.div
                  key={find.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="uhni-card overflow-hidden group">
                    <div className="aspect-square relative bg-muted">
                      <Image
                        src={find.item.images[0] || "/images/placeholder-product.jpg"}
                        alt={find.item.name}
                        fill
                        className="object-cover"
                      />
                      {find.exclusiveAccess && (
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-accent text-accent-foreground gap-1">
                            <Lock className="h-3 w-3" />
                            Exclusive
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground">{find.item.brand} • {find.item.era}</p>
                        <h3 className="font-medium">{find.item.name}</h3>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-medium">{formatPrice(find.price)}</span>
                        <span className="text-sm text-muted-foreground">{find.location}</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="capitalize">{find.source.replace("_", " ")}</span>
                        {find.interestedClients > 0 && (
                          <>
                            <span>•</span>
                            <span>{find.interestedClients} interested</span>
                          </>
                        )}
                      </div>

                      <Button className="w-full" size="sm">
                        Express Interest
                      </Button>
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
                <CardTitle>New Sourcing Request</CardTitle>
                <CardDescription>
                  Describe what you&apos;re looking for and our global network will search for you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">What are you looking for?</label>
                  <Textarea
                    placeholder="Describe the piece, brand, era, or any specific details..."
                    className="min-h-[120px]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Reference Images</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Drop images here or click to upload
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Budget Min</label>
                    <Input type="number" placeholder="$0" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Budget Max</label>
                    <Input type="number" placeholder="$100,000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Priority</label>
                  <div className="flex gap-4">
                    {["Standard", "Urgent", "Whenever"].map((priority) => (
                      <label key={priority} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="priority" className="accent-accent" />
                        <span className="text-sm">{priority}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button className="w-full">
                  Submit Request
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
