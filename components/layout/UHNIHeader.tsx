"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Search,
  User,
  Shield,
  Sparkles,
  Eye,
  EyeOff
} from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { Button } from "@/components/ui/button"
import { useUIStore } from "@/lib/store/uiStore"
import { usePrivacyStore } from "@/lib/store/privacyStore"

const navigation = [
  { name: "Home", href: "/uhni" },
  { name: "Zero-UI", href: "/uhni/zero-ui" },
  { name: "Sourcing", href: "/uhni/sourcing" },
  { name: "Bespoke", href: "/uhni/bespoke" },
  { name: "Experiences", href: "/uhni/experiences" },
]

export function UHNIHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { toggleSearch } = useUIStore()
  const { invisibleModeActive, toggleInvisibleMode } = usePrivacyStore()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="luxury-container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/uhni" className="flex items-center space-x-2 group">
            <motion.span
              className="font-display text-xl md:text-2xl font-light text-foreground tracking-tight"
              whileHover={{ scale: 1.02 }}
            >
              ModaGlimmora
            </motion.span>
            <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
              Private
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-light text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Invisible Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "relative gap-2 text-xs",
                invisibleModeActive && "text-[hsl(var(--invisible))]"
              )}
              onClick={toggleInvisibleMode}
            >
              {invisibleModeActive ? (
                <>
                  <EyeOff className="h-4 w-4" />
                  <span className="hidden md:inline">Invisible</span>
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4" />
                  <span className="hidden md:inline">Visible</span>
                </>
              )}
            </Button>

            {/* Concierge */}
            <Link href="/uhni/concierge">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-accent"
                aria-label="Concierge"
              >
                <Sparkles className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full" />
              </Button>
            </Link>

            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Privacy */}
            <Link href="/uhni/privacy">
              <Button variant="ghost" size="icon" aria-label="Privacy">
                <Shield className="h-5 w-5" />
              </Button>
            </Link>

            {/* Account */}
            <Link href="/uhni/account">
              <Button variant="ghost" size="icon" aria-label="Account">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Invisible Mode Banner */}
      {invisibleModeActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-[hsl(var(--invisible)/0.1)] border-b border-[hsl(var(--invisible)/0.2)]"
        >
          <div className="luxury-container py-2 flex items-center justify-center gap-2 text-sm">
            <EyeOff className="h-4 w-4 text-[hsl(var(--invisible))]" />
            <span className="text-[hsl(var(--invisible))]">
              Invisible Mode Active — No browsing or purchase data is being recorded
            </span>
          </div>
        </motion.div>
      )}
    </header>
  )
}
