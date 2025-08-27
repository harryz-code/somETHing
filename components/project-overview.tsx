import { Card, CardContent } from "@/components/ui/card"
import { Video, Globe, Users, Calendar } from "lucide-react"

export function ProjectOverview() {
  const features = [
    {
      icon: Video,
      title: "5-15 min episodes",
      description: "short, digestible content",
    },
    {
      icon: Globe,
      title: "global platform",
      description: "website to publish content",
    },
    {
      icon: Users,
      title: "social presence",
      description: "multi-platform social media",
    },
    {
      icon: Calendar,
      title: "live events",
      description: "global events worldwide",
    },
  ]



  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-balance tracking-tight">
            the human story of <span className="text-primary">ethereum</span>
          </h2>
          
          <div className="text-left space-y-6 text-lg leading-relaxed font-medium max-w-3xl mx-auto">
            <p>
              after working with 30+ blockchain foundations on education content over 3.5 years, we realized something important.
            </p>
            
            <p>
              the key to onboarding isn't just networking events or technical documentation.
            </p>
            
            <p>
              it's persistent, high-frequency exposure to relevant, human-centered stories.
            </p>
          </div>
        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-4">
              <feature.icon className="h-6 w-6 text-primary mx-auto mb-2" />
              <h3 className="font-bold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
