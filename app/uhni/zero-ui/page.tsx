"use client"

import * as React from "react"
import Link from "next/link"
import {
  Pause,
  Play,
  DollarSign,
  Tag,
  Building2,
  Calendar,
  Sun,
  Plane,
  Clock,
  Check,
  X,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useZeroUIStore } from "@/lib/store/zeroUIStore"
import { formatPrice } from "@/lib/utils/formatters"

export default function ZeroUIPage() {
  const {
    settings,
    isPaused,
    setSpendingThreshold,
    toggleCategory,
    toggleBrand,
    pauseAutonomous,
    resumeAutonomous,
    setSettings
  } = useZeroUIStore()

  const pendingApprovals = useZeroUIStore((state) => state.getPendingApprovals())

  return (
    <div className="pt-20 min-h-screen">
      <div className="luxury-container py-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="font-display text-3xl font-light mb-4">Zero-UI Commerce</h1>
          <p className="text-lg text-muted-foreground font-light">
            Your wardrobe, prepared invisibly. Control how your AI concierge manages autonomous purchases.
          </p>
        </div>

        {/* Status Card */}
        <Card className="uhni-card mb-8">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className={`w-4 h-4 rounded-full ${settings.enabled && !isPaused ? "bg-green-500 animate-pulse" : "bg-muted"}`} />
                <div>
                  <h2 className="text-xl font-medium">
                    {settings.enabled && !isPaused ? "Active" : "Paused"}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {settings.lastAutonomousAction
                      ? `Last action: ${Math.floor((Date.now() - new Date(settings.lastAutonomousAction).getTime()) / (1000 * 60 * 60 * 24))} days ago`
                      : "No recent autonomous actions"}
                  </p>
                </div>
              </div>

              <Button
                variant={settings.enabled && !isPaused ? "destructive" : "default"}
                onClick={settings.enabled && !isPaused ? pauseAutonomous : resumeAutonomous}
                className="gap-2"
              >
                {settings.enabled && !isPaused ? (
                  <>
                    <Pause className="h-4 w-4" />
                    Pause All
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    Resume
                  </>
                )}
              </Button>
            </div>

            <Separator className="my-6" />

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-3xl font-light">{settings.itemsPreparedThisMonth}</p>
                <p className="text-sm text-muted-foreground">Prepared this month</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-light text-green-500">{settings.itemsApproved}</p>
                <p className="text-sm text-muted-foreground">Approved</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-light text-muted-foreground">{settings.itemsDeclined}</p>
                <p className="text-sm text-muted-foreground">Declined</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pending Approvals Quick Link */}
        {pendingApprovals.length > 0 && (
          <Card className="uhni-card mb-8 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>{pendingApprovals.length} items awaiting approval</span>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/uhni/zero-ui/approvals">
                    Review
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Spending Threshold */}
          <Card className="uhni-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-medium">
                <DollarSign className="h-5 w-5" />
                Spending Threshold
              </CardTitle>
              <CardDescription>
                Auto-approve items up to this amount
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Slider
                  value={[settings.spendingThreshold]}
                  onValueChange={(value) => setSpendingThreshold(value[0])}
                  max={25000}
                  step={500}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>$0</span>
                  <span className="text-foreground font-medium">
                    {formatPrice(settings.spendingThreshold)}
                  </span>
                  <span>$25,000</span>
                </div>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Items above <strong>{formatPrice(settings.spendingThreshold)}</strong> will require manual approval.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Category Permissions */}
          <Card className="uhni-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-medium">
                <Tag className="h-5 w-5" />
                Category Permissions
              </CardTitle>
              <CardDescription>
                Select categories eligible for auto-approval
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {settings.categoryPermissions.map((cp) => (
                  <div
                    key={cp.category}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                  >
                    <Label htmlFor={`cat-${cp.category}`} className="text-sm">
                      {cp.category}
                    </Label>
                    <Switch
                      id={`cat-${cp.category}`}
                      checked={cp.autoApprove}
                      onCheckedChange={() => toggleCategory(cp.category)}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Brand Permissions */}
          <Card className="uhni-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-medium">
                <Building2 className="h-5 w-5" />
                Trusted Brands
              </CardTitle>
              <CardDescription>
                Brands eligible for autonomous purchasing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {settings.brandPermissions.map((bp) => (
                  <Badge
                    key={bp.brandId}
                    variant={bp.autoApprove ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleBrand(bp.brandId)}
                  >
                    {bp.brandName}
                    {bp.autoApprove ? (
                      <Check className="ml-1 h-3 w-3" />
                    ) : (
                      <X className="ml-1 h-3 w-3" />
                    )}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" size="sm">
                + Add Brand
              </Button>

              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  New brands always require manual approval.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Event Anticipation */}
          <Card className="uhni-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-medium">
                <Calendar className="h-5 w-5" />
                Event Anticipation
              </CardTitle>
              <CardDescription>
                Let AI prepare for your schedule
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="event-anticipation">Prepare for calendar events</Label>
                </div>
                <Switch
                  id="event-anticipation"
                  checked={settings.eventAnticipation}
                  onCheckedChange={(checked) =>
                    setSettings({ eventAnticipation: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Sun className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="seasonal">Seasonal wardrobe updates</Label>
                </div>
                <Switch
                  id="seasonal"
                  checked={settings.seasonalPreparation}
                  onCheckedChange={(checked) =>
                    setSettings({ seasonalPreparation: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Plane className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="travel">Travel destination preparation</Label>
                </div>
                <Switch
                  id="travel"
                  checked={settings.travelPreparation}
                  onCheckedChange={(checked) =>
                    setSettings({ travelPreparation: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="mt-8 flex gap-4">
          <Button variant="outline" asChild>
            <Link href="/uhni/zero-ui/wardrobe">
              View Invisible Wardrobe
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/uhni/zero-ui/history">
              View Approval History
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
