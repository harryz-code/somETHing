import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, GraduationCap, MessageSquare, Newspaper, Share2 } from "lucide-react"

export function DistributionChannels() {
  const channels = [
    {
      icon: Globe,
      title: "project websites",
      description: "somETHing platform and partner sites",
    },
    {
      icon: GraduationCap,
      title: "university networks",
      description: "blockchain clubs and cs departments",
    },
    {
      icon: Users,
      title: "eth communities",
      description: "local ethereum chapters worldwide",
    },
    {
      icon: MessageSquare,
      title: "social media",
      description: "multi-platform presence",
    },
    {
      icon: Newspaper,
      title: "media partners",
      description: "blockchain publications",
    },
    {
      icon: Share2,
      title: "community channels",
      description: "discord servers and forums",
    },
  ]

  const languages = ["english", "hindi", "chinese", "spanish", "indonesian"]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance tracking-tight">
            <span className="text-primary">distribution</span> strategy
          </h2>
        </div>

        <div className="text-left space-y-6 text-lg leading-relaxed font-medium max-w-3xl mx-auto mb-16">
          <p>
            we believe great content deserves to be seen by the people who need it most.
          </p>
          
          <p>
            that's why we're building a distribution network that reaches across platforms, languages, and communities—because ethereum's story should be accessible to everyone, everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {channels.map((channel, index) => (
            <Card key={index} className="text-center p-4">
              <channel.icon className="h-6 w-6 text-primary mx-auto mb-2" />
              <h3 className="font-bold mb-1">{channel.title}</h3>
              <p className="text-sm text-muted-foreground">{channel.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-card p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-4">global language support</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {languages.map((language, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {language}
              </Badge>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-3 text-sm">
            content will be localized to reach diverse global communities
          </p>
        </div>
      </div>
    </section>
  )
}
