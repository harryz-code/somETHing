import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, GraduationCap, Briefcase, Palette } from "lucide-react"

export function AudienceSection() {
  const audiences = [
    {
      icon: Target,
      title: "curious technologists",
      description: "web2 developers exploring web3",
    },
    {
      icon: GraduationCap,
      title: "university students",
      description: "students from all majors",
    },
    {
      icon: Briefcase,
      title: "early-career professionals",
      description: "professionals from all industries",
    },
    {
      icon: Palette,
      title: "creative individuals",
      description: "artists and creators",
    },
    {
      icon: Users,
      title: "existing community",
      description: "current ethereum builders",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance tracking-tight">
            our <span className="text-primary">intended</span> audiences
          </h2>
        </div>

        <div className="text-left space-y-6 text-lg leading-relaxed font-medium max-w-3xl mx-auto mb-16">
          <p>
            we've learned that the people who need this content most aren't the experts—they're the ones who sense something important is happening but haven't found their entry point yet.
          </p>
          
          <p>
            whether you're a developer curious about web3, a student exploring new technologies, or someone who just wants to understand what all the buzz is about—this is for you.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <Card key={index} className="text-center p-4 w-full max-w-xs">
              <audience.icon className="h-6 w-6 text-primary mx-auto mb-2" />
              <h3 className="font-bold mb-1">{audience.title}</h3>
              <p className="text-sm text-muted-foreground">{audience.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
