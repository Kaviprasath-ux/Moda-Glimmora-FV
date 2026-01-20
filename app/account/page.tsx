"use client"

import * as React from "react"
import Link from "next/link"
import {
  User,
  MapPin,
  ShoppingBag,
  Heart,
  Bell,
  Shield,
  LogOut,
  ArrowRight,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { mockUserProfile, mockUserAddresses } from "@/data/mock/users"
import { useAuthStore } from "@/lib/store/authStore"
import { EmptyState } from "@/components/shared/EmptyState"

const accountLinks = [
  { icon: User, label: "Profile Settings", href: "/account/profile", description: "Manage your personal information" },
  { icon: MapPin, label: "Addresses", href: "/account/addresses", description: "Shipping and billing addresses" },
  { icon: ShoppingBag, label: "Orders", href: "/orders", description: "View your order history" },
  { icon: Heart, label: "Wishlist", href: "/wishlist", description: "Items you've saved" },
  { icon: Bell, label: "Notifications", href: "/account/notifications", description: "Email and alert preferences" },
  { icon: Shield, label: "Privacy", href: "/privacy", description: "Manage your data and privacy" },
]

export default function AccountPage() {
  const { isAuthenticated, logout } = useAuthStore()

  if (!isAuthenticated) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="luxury-container py-12">
          <EmptyState
            icon={<User className="h-16 w-16" />}
            title="Sign in to your account"
            description="Access your orders, preferences, and more."
            action={{ label: "Sign In", href: "/login" }}
          />
        </div>
      </div>
    )
  }

  const profile = mockUserProfile

  return (
    <div className="pt-20 min-h-screen">
      <div className="luxury-container py-12">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <Avatar className="h-20 w-20">
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback className="text-xl">
              {profile.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-display text-3xl font-medium">{profile.name}</h1>
            <p className="text-muted-foreground">{profile.email}</p>
            <p className="text-sm text-muted-foreground mt-1">
              Member since {new Date(profile.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Orders", value: "12" },
                { label: "Wishlist", value: "8" },
                { label: "Wardrobe Items", value: `${profile.wardrobe.length}` },
              ].map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="p-4 text-center">
                    <p className="font-display text-2xl font-medium">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Account Links */}
            <Card>
              <CardContent className="p-0">
                {accountLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <React.Fragment key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-muted">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{link.label}</p>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </Link>
                      {index < accountLinks.length - 1 && <Separator />}
                    </React.Fragment>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Style Profile */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Style Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Primary Style</p>
                <p className="font-display text-xl font-medium mb-4">
                  {profile.styleProfile.primary}
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/my-style">
                    View Full Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Default Address */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Default Address</CardTitle>
              </CardHeader>
              <CardContent>
                {mockUserAddresses.find((a) => a.isDefault) && (
                  <>
                    <p className="text-sm">
                      {mockUserAddresses[0].firstName} {mockUserAddresses[0].lastName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {mockUserAddresses[0].address1}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {mockUserAddresses[0].city}, {mockUserAddresses[0].state} {mockUserAddresses[0].postalCode}
                    </p>
                    <Button variant="link" className="px-0 mt-2" asChild>
                      <Link href="/account/addresses">Manage Addresses</Link>
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Sign Out */}
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                logout()
                window.location.href = "/"
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
