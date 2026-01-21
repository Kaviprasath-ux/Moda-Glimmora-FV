"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  Sparkles
} from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store/cartStore"
import { useWishlistStore } from "@/lib/store/wishlistStore"
import { useUIStore } from "@/lib/store/uiStore"
import { useAuthStore } from "@/lib/store/authStore"

const navigation = [
  { name: "Explore", href: "/explore" },
  { name: "Discover", href: "/discover" },
  { name: "My Style", href: "/my-style" },
  { name: "Wardrobe", href: "/wardrobe" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { toggleMobileNav, toggleSearch, toggleConcierge } = useUIStore()
  const cartItemCount = useCartStore((state) => state.getItemCount())
  const wishlistItemCount = useWishlistStore((state) => state.getItemCount())
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

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
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="luxury-container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.span
              className="font-display text-xl md:text-2xl font-semibold text-primary tracking-tight"
              whileHover={{ scale: 1.02 }}
            >
              ModaGlimmora
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-1 md:space-x-2">
            {/* AI Concierge Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative hidden md:flex text-secondary hover:text-secondary/80"
              onClick={toggleConcierge}
              aria-label="Open AI Concierge"
            >
              <Sparkles className="h-5 w-5" />
            </Button>

            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="relative" aria-label="Wishlist">
                <Heart className="h-5 w-5" />
                {wishlistItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center">
                    {wishlistItemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative" aria-label="Shopping bag">
                <ShoppingBag className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Account */}
            <Link href={isAuthenticated ? "/account" : "/login"}>
              <Button variant="ghost" size="icon" aria-label="Account">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMobileNav}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
