"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Eye,
  Video,
  Users,
  Calendar,
  ArrowRight,
  Play
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  mockPrivateCollections,
  mockArchivePieces,
  mockBehindTheScenes,
  mockCurators
} from "@/data/mock/private-collections"
import { formatPrice } from "@/lib/utils/formatters"

export default function ExperiencesPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="luxury-container py-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="font-display text-3xl font-light mb-4">Private Experiences</h1>
          <p className="text-lg text-muted-foreground font-light">
            Exclusive access reserved for you. Pre-launch collections, heritage archives, and behind-the-scenes content.
          </p>
        </div>

        <Tabs defaultValue="collections" className="space-y-8">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="collections">Private Collections</TabsTrigger>
            <TabsTrigger value="archives">Heritage Archives</TabsTrigger>
            <TabsTrigger value="behind">Behind the Scenes</TabsTrigger>
          </TabsList>

          {/* Private Collections */}
          <TabsContent value="collections" className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="section-heading">Pre-Launch Access</h2>
                <p className="text-muted-foreground">
                  See collections before public release
                </p>
              </div>
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
                    <CardContent className="p-4 space-y-3">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {collection.description}
                      </p>

                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-1">
                          {collection.highlights.map((h) => (
                            <Badge key={h} variant="outline" className="text-xs">
                              {h}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{collection.pieceCount} pieces</span>
                        <span className="text-accent">Your access: {collection.yourAccess}</span>
                      </div>

                      <Button className="w-full" size="sm">
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Heritage Archives */}
          <TabsContent value="archives" className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="section-heading">Heritage Archives</h2>
                <p className="text-muted-foreground">
                  Connect with fashion history
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockArchivePieces.map((piece, index) => (
                <motion.div
                  key={piece.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="uhni-card overflow-hidden group">
                    <div className="aspect-square relative bg-muted">
                      <Image
                        src={piece.image || "/images/placeholder-archive.jpg"}
                        alt={piece.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="text-xs">
                          {piece.year}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4 space-y-2">
                      <p className="text-xs text-muted-foreground">{piece.brand}</p>
                      <h3 className="font-medium text-sm">{piece.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {piece.significance}
                      </p>

                      <div className="flex gap-2 pt-2">
                        {piece.viewingAvailable && (
                          <Button variant="outline" size="sm" className="flex-1 text-xs">
                            <Eye className="mr-1 h-3 w-3" />
                            View
                          </Button>
                        )}
                        {piece.purchaseAvailable && piece.price && (
                          <Button size="sm" className="flex-1 text-xs">
                            {formatPrice(piece.price)}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Behind the Scenes */}
          <TabsContent value="behind" className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="section-heading">Behind the Scenes</h2>
                <p className="text-muted-foreground">
                  Inside the ateliers and creative process
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockBehindTheScenes.map((content, index) => (
                <motion.div
                  key={content.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="uhni-card overflow-hidden group cursor-pointer">
                    <div className="aspect-video relative bg-muted">
                      <Image
                        src={content.image || "/images/placeholder-bts.jpg"}
                        alt={content.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                      {content.featured && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-accent text-accent-foreground text-xs">
                            Featured
                          </Badge>
                        </div>
                      )}
                      <div className="absolute bottom-3 left-3">
                        <Badge variant="secondary" className="text-xs">
                          <Video className="mr-1 h-3 w-3" />
                          {content.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-xs text-muted-foreground">{content.brand}</p>
                      <h3 className="font-medium">{content.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                        {content.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Curator Connections */}
            <div className="mt-12">
              <h3 className="section-heading mb-6">Curator Connections</h3>
              <p className="text-muted-foreground mb-6">
                Direct access to creative directors and brand curators
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockCurators.map((curator) => (
                  <Card key={curator.id} className="uhni-card">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                          <Users className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{curator.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {curator.role} • {curator.brand}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Specialty: {curator.specialty}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={!curator.availableForMeeting}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {curator.availableForMeeting ? "Request Meeting" : "Unavailable"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
