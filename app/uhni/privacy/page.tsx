"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Shield,
  Eye,
  EyeOff,
  Database,
  Download,
  Trash2,
  Lock,
  Fingerprint,
  Smartphone,
  Bell,
  MessageSquare,
  Key
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { usePrivacyStore } from "@/lib/store/privacyStore"
import { mockDigitalFootprint } from "@/data/mock/uhni-user"

export default function UHNIPrivacyPage() {
  const {
    settings,
    invisibleModeActive,
    toggleInvisibleMode,
    updateSecuritySetting,
    requestDataExport,
    requestDataDeletion
  } = usePrivacyStore()

  const footprint = mockDigitalFootprint

  const dataCategories = [
    { key: "profile", label: "Profile Information", ...footprint.profile },
    { key: "preferences", label: "Style Preferences", exists: footprint.preferences.exists, itemCount: footprint.preferences.itemCount },
    { key: "purchases", label: "Purchase History", exists: footprint.purchases.exists, itemCount: footprint.purchases.itemCount },
    { key: "browsing", label: "Browsing Intelligence", exists: footprint.browsing.exists, itemCount: footprint.browsing.sessionCount },
    { key: "conversations", label: "Concierge Conversations", exists: footprint.conversations.exists, itemCount: footprint.conversations.messageCount },
    { key: "sourcing", label: "Sourcing Requests", exists: footprint.sourcing.exists, itemCount: footprint.sourcing.requestCount }
  ]

  return (
    <div className="pt-20 min-h-screen">
      <div className="luxury-container py-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8" />
            <h1 className="font-display text-3xl font-light">Privacy & Security</h1>
          </div>
          <p className="text-lg text-muted-foreground font-light">
            Your data, your control. Complete transparency and privacy at every level.
          </p>
        </div>

        {/* Invisible Mode - Featured */}
        <Card className={`uhni-card mb-8 ${invisibleModeActive ? "border-[hsl(var(--invisible))]" : ""}`}>
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  invisibleModeActive ? "bg-[hsl(var(--invisible))/0.1]" : "bg-muted"
                }`}>
                  {invisibleModeActive ? (
                    <EyeOff className="h-8 w-8 text-[hsl(var(--invisible))]" />
                  ) : (
                    <Eye className="h-8 w-8 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-medium mb-1">Invisible Mode</h2>
                  <p className="text-muted-foreground">
                    {invisibleModeActive
                      ? "Active — No data is being recorded"
                      : "Enable for zero digital footprint"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={`text-sm font-medium ${invisibleModeActive ? "text-[hsl(var(--invisible))]" : "text-muted-foreground"}`}>
                  {invisibleModeActive ? "ON" : "OFF"}
                </span>
                <Switch
                  checked={invisibleModeActive}
                  onCheckedChange={toggleInvisibleMode}
                  className="data-[state=checked]:bg-[hsl(var(--invisible))]"
                />
              </div>
            </div>

            {invisibleModeActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-6 pt-6 border-t border-border"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--invisible))]" />
                    <span>Browsing not recorded</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--invisible))]" />
                    <span>AI learning paused</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--invisible))]" />
                    <span>Discreet packaging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--invisible))]" />
                    <span>No transaction trail</span>
                  </div>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Digital Footprint */}
            <Card className="uhni-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Digital Footprint
                </CardTitle>
                <CardDescription>
                  All data we hold about you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {dataCategories.map((category) => (
                  <div
                    key={category.key}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{category.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {"itemCount" in category
                          ? `${category.itemCount} items`
                          : `Last updated: ${new Date(category.lastUpdated).toLocaleDateString()}`}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() => requestDataDeletion(category.key)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}

                <Separator className="my-4" />

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => requestDataExport(["all"], "json")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Export All Data
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Everything
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="uhni-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Security Settings
                </CardTitle>
                <CardDescription>
                  Protect your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Fingerprint className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label>Biometric for purchases</Label>
                      <p className="text-sm text-muted-foreground">
                        Require fingerprint or face ID for all purchases
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.biometricRequired}
                    onCheckedChange={(checked) => updateSecuritySetting("biometricRequired", checked)}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label>Two-factor authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.twoFactorEnabled}
                    onCheckedChange={(checked) => updateSecuritySetting("twoFactorEnabled", checked)}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label>Login notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified of new sign-ins
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.loginNotifications}
                    onCheckedChange={(checked) => updateSecuritySetting("loginNotifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label>End-to-end encryption</Label>
                      <p className="text-sm text-muted-foreground">
                        All messages encrypted
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.e2eEncryption}
                    onCheckedChange={(checked) => updateSecuritySetting("e2eEncryption", checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Secure Vault */}
            <Card className="uhni-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  Secure Vault
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Biometric-protected storage for sensitive information.
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Measurements</span>
                    <span className="text-green-500">Stored</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Payment info</span>
                    <span className="text-green-500">Stored</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Addresses</span>
                    <span className="text-green-500">Stored</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Fingerprint className="mr-2 h-4 w-4" />
                  Access Vault
                </Button>
              </CardContent>
            </Card>

            {/* Privacy Commitment */}
            <Card className="uhni-card bg-muted/30">
              <CardContent className="p-6">
                <h3 className="font-medium mb-4">Our Commitment</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 mt-0.5 text-green-500" />
                    <span>No data shared with third parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 mt-0.5 text-green-500" />
                    <span>No data sold, ever</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 mt-0.5 text-green-500" />
                    <span>Full transparency always</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 mt-0.5 text-green-500" />
                    <span>Your control, always</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
