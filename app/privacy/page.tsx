"use client"

import * as React from "react"
import Link from "next/link"
import {
  Shield,
  Eye,
  Database,
  Download,
  Trash2,
  Settings,
  Check,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { mockUserProfile } from "@/data/mock/users"
import { useAuthStore } from "@/lib/store/authStore"
import { EmptyState } from "@/components/shared/EmptyState"

export default function PrivacyPage() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const [settings, setSettings] = React.useState(mockUserProfile.privacySettings)

  if (!isAuthenticated) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="luxury-container py-12">
          <EmptyState
            icon={<Shield className="h-16 w-16" />}
            title="Privacy Center"
            description="Sign in to manage your privacy settings and data."
            action={{ label: "Sign In", href: "/login" }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="luxury-container py-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="font-display text-3xl font-medium mb-4">Your Privacy</h1>
          <p className="text-lg text-muted-foreground">
            At ModaGlimmora, we believe you should have complete control over your data.
            No dark patterns, no hidden tracking, no data sales. Your information is yours.
          </p>
        </div>

        {/* Our Commitment */}
        <Card className="mb-8 bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <h2 className="font-display text-xl font-medium mb-4">Our Commitment</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "No Dark Patterns",
                "No Data Sales",
                "Full Transparency",
                "Your Control Always"
              ].map((commitment) => (
                <div key={commitment} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-secondary" />
                  <span className="text-sm">{commitment}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* What We Know */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  What We Know About You
                </CardTitle>
                <CardDescription>
                  Here&apos;s a summary of the information we&apos;ve collected
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Style Profile</p>
                    <p className="font-medium">{mockUserProfile.styleProfile.primary}</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Favorite Brands</p>
                    <p className="font-medium">{mockUserProfile.preferences.favoritesBrands.length} brands</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Wardrobe Items</p>
                    <p className="font-medium">{mockUserProfile.wardrobe.length} items</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Preferences</p>
                    <p className="font-medium">{mockUserProfile.preferences.favoriteColors.length} colors saved</p>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/privacy/data">
                    View Full Data
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Learning Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  AI Learning Controls
                </CardTitle>
                <CardDescription>
                  Control what data our AI uses to personalize your experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="learn-browsing">Learn from my browsing</Label>
                    <p className="text-sm text-muted-foreground">
                      Use your browsing patterns to improve recommendations
                    </p>
                  </div>
                  <Switch
                    id="learn-browsing"
                    checked={settings.learnFromBrowsing}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, learnFromBrowsing: checked })
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="learn-purchases">Learn from my purchases</Label>
                    <p className="text-sm text-muted-foreground">
                      Use your purchase history to understand your preferences
                    </p>
                  </div>
                  <Switch
                    id="learn-purchases"
                    checked={settings.learnFromPurchases}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, learnFromPurchases: checked })
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="learn-wardrobe">Learn from my wardrobe</Label>
                    <p className="text-sm text-muted-foreground">
                      Analyze your digital wardrobe for better suggestions
                    </p>
                  </div>
                  <Switch
                    id="learn-wardrobe"
                    checked={settings.learnFromWardrobe}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, learnFromWardrobe: checked })
                    }
                  />
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="text-destructive hover:text-destructive">
                    Reset AI Memory
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    This will clear all learned preferences. Your style profile will start fresh.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Data Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Data Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Export All Data
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-destructive hover:text-destructive"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete My Account
                </Button>
                <p className="text-xs text-muted-foreground">
                  Deleting your account will permanently remove all your data from our systems.
                </p>
              </CardContent>
            </Card>

            {/* Communication Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Communications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="marketing" className="text-sm">Marketing emails</Label>
                  <Switch
                    id="marketing"
                    checked={settings.marketingEmails}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, marketingEmails: checked })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="alerts" className="text-sm">Product alerts</Label>
                  <Switch
                    id="alerts"
                    checked={settings.productAlerts}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, productAlerts: checked })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-1">
                  <Link
                    href="/privacy/consent"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <span className="text-sm">Consent Settings</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="/terms"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <span className="text-sm">Terms of Service</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </nav>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
