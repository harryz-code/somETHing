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
      <HeroSection />
      {/* Collage of Gemini Images */}
      <SectionImage 
        layout="collage"
        images={[
          {
            src: "/images/Gemini_Generated_Image_75n8a675n8a675n8.png",
            alt: "Builder working at desk",
            caption: "it always starts with a builder..."
          },
          {
            src: "/images/Gemini_Generated_Image_csf87ncsf87ncsf8.png",
            alt: "Community gathering",
            caption: "...with a community..."
          },
          {
            src: "/images/Gemini_Generated_Image_ktu6g9ktu6g9ktu6.png",
            alt: "World-changing impact",
            caption: "...that changes the world."
          }
        ]}
        caption="every breakthrough starts with somETHing..."
      />
      <ProjectOverview />
      <BuilderProfiles />
      <BuilderImages />
      <AudienceSection />
      <DistributionChannels />
      <FundingBreakdown />
      {/* believe in somETHing */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            believe in <span className="text-primary">somETHing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            thank you for reading through the proposal :)
          </p>
        </div>
      </section>
    </main>
  )
}
