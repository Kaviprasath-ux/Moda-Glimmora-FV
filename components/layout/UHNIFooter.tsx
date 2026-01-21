"use client"

import Link from "next/link"
import { Shield, Lock } from "lucide-react"

const footerLinks = [
  {
    title: "Portal",
    links: [
      { name: "Zero-UI Commerce", href: "/uhni/zero-ui" },
      { name: "Private Sourcing", href: "/uhni/sourcing" },
      { name: "Bespoke", href: "/uhni/bespoke" },
      { name: "Experiences", href: "/uhni/experiences" },
    ],
  },
  {
    title: "Account",
    links: [
      { name: "Profile", href: "/uhni/account" },
      { name: "Security", href: "/uhni/account/security" },
      { name: "Privacy", href: "/uhni/privacy" },
      { name: "Preferences", href: "/uhni/account/preferences" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Concierge", href: "/uhni/concierge" },
      { name: "Help Center", href: "/help" },
      { name: "Contact", href: "/contact" },
    ],
  },
]

export function UHNIFooter() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="luxury-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-lg font-light">ModaGlimmora</h3>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">
                Private Portal
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" />
              <span>End-to-end encrypted</span>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="h-3 w-3" />
            <span>Your privacy is our priority. No data shared with third parties.</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <span>&copy; {new Date().getFullYear()} ModaGlimmora</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
