import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, GraduationCap, Hammer, Palette, Building } from "lucide-react"

export function BuilderProfiles() {
  const builderTypes = [
    {
      icon: Code,
      title: "core developers",
      description: "protocol engineers building ethereum's infrastructure",
    },
    {
      icon: Users,
      title: "community builders",
      description: "organizers fostering local ethereum ecosystems",
    },
    {
      icon: GraduationCap,
      title: "educators",
      description: "teachers making ethereum accessible to everyone",
    },
    {
      icon: Hammer,
      title: "builders & founders",
      description: "entrepreneurs creating the next generation of dapps",
    },
    {
      icon: Palette,
      title: "artists & creators",
      description: "creative minds exploring new economic models",
    },
    {
      icon: Building,
      title: "enterprise adopters",
      description: "organizations integrating ethereum into traditional systems",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance tracking-tight">
            featured <span className="text-primary">builder</span> categories
          </h2>
        </div>

        <div className="text-left space-y-6 text-lg leading-relaxed font-medium max-w-3xl mx-auto mb-16">
          <p>
            behind every protocol, every dapp, every breakthrough—there are real people with real stories.
          </p>
          
          <p>
            we want to shine a light on the full spectrum of builders, not just the founders and kols, but everyone who's contributing to this decentralized future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {builderTypes.map((builder, index) => (
            <Card key={index} className="text-center p-4">
              <builder.icon className="h-6 w-6 text-primary mx-auto mb-2" />
              <h3 className="font-bold mb-1">{builder.title}</h3>
              <p className="text-sm text-muted-foreground">{builder.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
