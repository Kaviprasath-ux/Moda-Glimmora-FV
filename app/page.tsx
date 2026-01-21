import { HeroExperience } from "@/components/home/HeroExperience"
import { CuratedExperiences } from "@/components/home/CuratedExperiences"
import { BrandUniversePortals } from "@/components/home/BrandUniversePortals"
import { CraftsmanshipSpotlight } from "@/components/home/CraftsmanshipSpotlight"
import { PersonalizedDiscovery } from "@/components/home/PersonalizedDiscovery"

export default function HomePage() {
  return (
    <>
      {/* Full-viewport Hero Experience */}
      <HeroExperience />

      {/* Curated Experiences - Story-focused cards */}
      <CuratedExperiences />

      {/* Brand Universe Portals - Entry to brand worlds */}
      <BrandUniversePortals />

      {/* Craftsmanship Spotlight - Deep dive into artisanal techniques */}
      <CraftsmanshipSpotlight />

      {/* Personalized Discovery - AI-curated content */}
      <PersonalizedDiscovery />
    </>
  )
}
