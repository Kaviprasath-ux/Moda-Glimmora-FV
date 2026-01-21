import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  explore: [
    { name: "Brands", href: "/explore" },
    { name: "Collections", href: "/explore" },
    { name: "Craftsmanship", href: "/explore/craft" },
    { name: "Art & Culture", href: "/explore/art" },
  ],
  services: [
    { name: "AI Discovery", href: "/discover" },
    { name: "Virtual Try-On", href: "/try-on" },
    { name: "Fashion Agent", href: "/my-style/agent" },
    { name: "Wardrobe Analysis", href: "/wardrobe/gaps" },
  ],
  account: [
    { name: "My Style Profile", href: "/my-style" },
    { name: "Orders", href: "/orders" },
    { name: "Wishlist", href: "/wishlist" },
    { name: "Account Settings", href: "/account" },
  ],
  company: [
    { name: "About ModaGlimmora", href: "/about" },
    { name: "Privacy Center", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="luxury-container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Explore */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Intelligence</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Your Account</h3>
            <ul className="space-y-3">
              {footerLinks.account.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">ModaGlimmora</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="font-display text-xl font-semibold">
            ModaGlimmora
          </Link>

          {/* Tagline */}
          <p className="text-sm text-primary-foreground/70 text-center">
            Luxury Fashion Intelligence Platform
          </p>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/70">
            &copy; {new Date().getFullYear()} ModaGlimmora. All rights reserved.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-primary-foreground/50">
            <span>No Dark Patterns</span>
            <span>•</span>
            <span>Transparent AI</span>
            <span>•</span>
            <span>Privacy First</span>
            <span>•</span>
            <span>Sustainable Luxury</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
