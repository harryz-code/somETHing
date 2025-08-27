import { HeroSection } from "@/components/hero-section"
import { SectionImage } from "@/components/section-image"
import { ProjectOverview } from "@/components/project-overview"
import { BuilderProfiles } from "@/components/builder-profiles"
import { BuilderImages } from "@/components/builder-images"
import { AudienceSection } from "@/components/audience-section"
import { DistributionChannels } from "@/components/distribution-profiles"
import { FundingBreakdown } from "@/components/funding-breakdown"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center">
          somETHing - Vercel Test
        </h1>
        <p className="text-center mt-4">
          If you can see this, Vercel deployment is working!
        </p>
        <div className="mt-8 text-center">
          <p>This is a test to see if Vercel can serve the page correctly.</p>
        </div>
      </div>
    </main>
  )
}
