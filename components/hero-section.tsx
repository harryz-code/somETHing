import { ArrowDown } from "lucide-react"
import { AudioPlayer } from "@/components/ui/audio-player"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-accent/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/3 w-40 h-40 border border-primary/20 rounded-full animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-8xl font-black text-balance tracking-tight">
            som<span className="text-primary">ETH</span>ing
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto font-medium">
            putting the human story at the center of ethereum education through
            <span className="text-primary font-bold"> fun, short, credible</span> episodes
          </p>

          <div className="flex flex-col items-center space-y-3">
            <AudioPlayer 
              src="/audio/whispers-of-dawn.mp3" 
              className="max-w-md"
            />
            <p className="text-sm text-muted-foreground/70 font-mono">
              [hi play above track as you read this]
            </p>
          </div>

          <div className="pt-12">
            <ArrowDown className="mx-auto h-6 w-6 text-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
