import { Button } from "@/components/ui/button"
import { Heart, Twitter, Github, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-balance tracking-tight">
            believe in <span className="text-primary">somETHing</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 text-balance font-medium">
            join us in making ethereum accessible through the power of human storytelling. every breakthrough starts
            with something—and that something is you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 font-bold">
              support our mission
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent font-bold">
              get involved
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
            </Button>
          </div>

          <div className="border-t pt-8">
            <p className="text-muted-foreground text-sm flex items-center justify-center font-medium">
              made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for the ethereum community
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
