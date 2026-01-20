import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { MobileNav } from "@/components/layout/MobileNav"
import { SearchOverlay } from "@/components/layout/SearchOverlay"
import { ConciergeButton } from "@/components/layout/ConciergeButton"
import { TooltipProvider } from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: {
    default: "ModaGlimmora | Luxury Fashion Intelligence",
    template: "%s | ModaGlimmora",
  },
  description:
    "ModaGlimmora is a luxury fashion intelligence platform. Experience-first discovery, AI-powered recommendations, and curated brand universes.",
  keywords: [
    "luxury fashion",
    "fashion intelligence",
    "AI fashion",
    "designer brands",
    "personal styling",
    "fashion discovery",
  ],
  authors: [{ name: "ModaGlimmora" }],
  creator: "ModaGlimmora",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ModaGlimmora",
    title: "ModaGlimmora | Luxury Fashion Intelligence",
    description:
      "Experience-first fashion discovery. AI-powered recommendations. Curated brand universes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ModaGlimmora | Luxury Fashion Intelligence",
    description:
      "Experience-first fashion discovery. AI-powered recommendations. Curated brand universes.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@100..900&family=Playfair+Display:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <TooltipProvider>
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <MobileNav />
          <SearchOverlay />
          <ConciergeButton />
        </TooltipProvider>
      </body>
    </html>
  )
}
