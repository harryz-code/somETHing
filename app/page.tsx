import { HeroSection } from "@/components/hero-section"
import { SectionImage } from "@/components/section-image"
import { ProjectOverview } from "@/components/project-overview"
import { BuilderProfiles } from "@/components/builder-profiles"
import { BuilderImages } from "@/components/builder-images"
import { AudienceSection } from "@/components/audience-section"
import { DistributionChannels } from "@/components/distribution-profiles"

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
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center">
          somETHing - Component Test
        </h1>
        <p className="text-center mt-4">
          Testing components one by one...
        </p>
      </div>
    </main>
  )
}
