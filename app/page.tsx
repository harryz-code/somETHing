import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
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
