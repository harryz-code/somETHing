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
        caption="every breakthrough starts with somETHing..."
        images={[
          {
            src: "/images/Gemini_Generated_Image_75n8a675n8a675n8.png",
            alt: "Gemini generated image 1",
            caption: "it always starts with a builder..."
          },
          {
            src: "/images/Gemini_Generated_Image_csf87ncsf87ncsf8.png", 
            alt: "Gemini generated image 2",
            caption: "...with a community..."
          },
          {
            src: "/images/Gemini_Generated_Image_ktu6g9ktu6g9ktu6.png",
            alt: "Gemini generated image 3",
            caption: "...that changes the world."
          }
        ]}
      />
      
      <ProjectOverview />
      
      <BuilderProfiles />
      <BuilderImages />
      <AudienceSection />
      <DistributionChannels />
      <FundingBreakdown />
      
      {/* Believe in somETHing */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-balance tracking-tight font-mono">
              believe in <span className="text-primary">somETHing</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 text-balance font-mono">
              [thank you for reading through the proposal :)]
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
