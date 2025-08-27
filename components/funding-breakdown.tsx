"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, Globe, Users, Plane, Shield, Eye } from "lucide-react"

export function FundingBreakdown() {
  const fundingData = [
    {
      id: "content",
      label: "content production",
      value: 5,
      color: "#10B981",
      description: "video production, editing, equipment, and post-production",
      items: ["professional cameras & audio", "video editing software", "motion graphics", "subtitles & translations"],
    },
    {
      id: "team",
      label: "team & operations",
      value: 5,
      color: "#059669",
      description: "team compensation and operational costs",
      items: ["contributor salary", "contractor / volunteer salary", "administrative costs"],
    },
    {
      id: "travel",
      label: "travel & events",
      value: 2,
      color: "#047857",
      description: "global travel for filming and event participation",
      items: ["international / local transportation", "accommodation", "event tickets & fees"],
    },
    {
      id: "platform",
      label: "platform development",
      value: 2,
      color: "#065f46",
      description: "website development and maintenance",
      items: ["web development", "hosting & infrastructure", "tools & equipments"],
    },
  ]

  const totalBudget = fundingData.reduce((sum, item) => sum + item.value, 0)

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance tracking-tight">
            <span className="text-primary">funding</span> breakdown
          </h2>
        </div>

        <div className="text-left space-y-6 text-lg leading-relaxed font-medium max-w-3xl mx-auto mb-16">
          <p>
            we believe in complete transparency—not just in what we do, but in how we use every resource entrusted to us.
          </p>
          
          <p>
            we want to follow the footsteps of legendary ethereum content creators producing podcasts, youtube videos, mooc lectures, and focus on short form human stories; the first goal is 10 episodes, then 20, 50, 100...
          </p>
          
          <p>
            we pledge to dedicate all funds raised to producing high-impact content that pushes Ethereum forward - this initiative will not end until the budget runs out.
          </p>
        </div>

        {/* Funding Breakdown List */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {fundingData.map((item) => {
              const percentage = ((item.value / totalBudget) * 100).toFixed(1)
              return (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <h3 className="text-xl font-bold">{item.label}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-primary">{item.value} ETH</div>
                        <div className="text-sm text-muted-foreground">{percentage}%</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.items.map((detail, index) => (
                        <div key={index} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          
          {/* Total Budget */}
          <div className="mt-8 text-center">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="inline-block bg-primary/10 px-8 py-4 rounded-lg">
                <div className="text-3xl font-black text-primary">14 ETH</div>
                <div className="text-sm text-muted-foreground">total requested budget</div>
              </div>
              <div className="inline-block bg-gray-100 px-6 py-3 rounded-lg border border-gray-200">
                <div className="text-lg font-semibold text-gray-700">6 - 22 ETH</div>
                <div className="text-sm text-gray-600">estimated budget range</div>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency Commitment */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="bg-accent/10 p-3 rounded-full">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">transparency commitment</h3>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto font-medium">
                all transaction details will be disclosed publicly via our website and social media channels (farcaster/x)
                for complete transparency and community verification.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
