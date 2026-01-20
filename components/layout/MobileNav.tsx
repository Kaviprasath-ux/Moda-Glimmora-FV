"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Compass,
  Sparkles,
  User,
  Shirt,
  Heart,
  ShoppingBag,
  Settings,
  Shield,
  LogIn
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useUIStore } from "@/lib/store/uiStore"
import { useAuthStore } from "@/lib/store/authStore"

const mainNavigation = [
  { name: "Explore", href: "/explore", icon: Compass, description: "Discover brands & culture" },
  { name: "Discover", href: "/discover", icon: Sparkles, description: "AI-powered discovery" },
  { name: "My Style", href: "/my-style", icon: User, description: "Your fashion identity" },
  { name: "Wardrobe", href: "/wardrobe", icon: Shirt, description: "Digital wardrobe" },
]

const accountNavigation = [
  { name: "Wishlist", href: "/wishlist", icon: Heart },
  { name: "Shopping Bag", href: "/cart", icon: ShoppingBag },
  { name: "Account", href: "/account", icon: Settings },
  { name: "Privacy", href: "/privacy", icon: Shield },
]

export function MobileNav() {
  const { isMobileNavOpen, setMobileNavOpen } = useUIStore()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  const closeNav = () => setMobileNavOpen(false)

  return (
    <AnimatePresence>
      {isMobileNavOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={closeNav}
          />

          {/* Slide-out Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background shadow-xl lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <Link href="/" onClick={closeNav} className="font-display text-xl font-semibold">
                  ModaGlimmora
                </Link>
                <Button variant="ghost" size="icon" onClick={closeNav} aria-label="Close menu">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Main Navigation */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-4">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    Explore
                  </h3>
                  <ul className="space-y-1">
                    {mainNavigation.map((item) => {
                      const Icon = item.icon
                      return (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={closeNav}
                            className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-muted transition-colors"
                          >
                            <Icon className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>

                  <Separator className="my-6" />

                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    Your Account
                  </h3>
                  <ul className="space-y-1">
                    {accountNavigation.map((item) => {
                      const Icon = item.icon
                      return (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={closeNav}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                          >
                            <Icon className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">{item.name}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </div>

              {/* Footer */}
              <div className="p-4 border-t">
                {isAuthenticated ? (
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Welcome back</p>
                    <Button variant="outline" className="w-full" onClick={closeNav} asChild>
                      <Link href="/account">My Account</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button className="w-full" onClick={closeNav} asChild>
                      <Link href="/login">
                        <LogIn className="h-4 w-4 mr-2" />
                        Sign In
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" onClick={closeNav} asChild>
                      <Link href="/register">Create Account</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
