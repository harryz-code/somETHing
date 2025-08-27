"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface PieChartData {
  id: string
  label: string
  value: number
  color: string
  description: string
  items: string[]
}

interface PieChartProps {
  data: PieChartData[]
  total: number
  className?: string
}

export function PieChart({ data, total, className = "" }: PieChartProps) {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null)

  const calculatePath = (startAngle: number, endAngle: number, radius: number) => {
    const x1 = radius * Math.cos(startAngle)
    const y1 = radius * Math.sin(startAngle)
    const x2 = radius * Math.cos(endAngle)
    const y2 = radius * Math.sin(endAngle)
    
    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0
    
    return [
      `M ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      `L 0 0`
    ].join(" ")
  }

  let currentAngle = -Math.PI / 2 // Start from top
  const radius = 120
  const centerX = 150
  const centerY = 150

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-8 ${className}`}>
      {/* Pie Chart */}
      <div className="relative">
        <svg width="300" height="300" viewBox="0 0 300 300" className="transform -rotate-90">
          {data.map((segment) => {
            const percentage = segment.value / total
            const startAngle = currentAngle
            const endAngle = currentAngle + (percentage * 2 * Math.PI)
            
            const path = calculatePath(startAngle, endAngle, radius)
            const isHovered = hoveredSegment === segment.id
            
            currentAngle = endAngle

            return (
              <g key={segment.id}>
                <path
                  d={path}
                  fill={segment.color}
                  opacity={isHovered ? 0.8 : 1}
                  className="transition-all duration-200 cursor-pointer hover:opacity-80"
                  onMouseEnter={() => setHoveredSegment(segment.id)}
                  onMouseLeave={() => setHoveredSegment(null)}
                />
              </g>
            )
          })}
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{total} ETH</div>
            <div className="text-sm text-muted-foreground">total budget</div>
          </div>
        </div>
      </div>

      {/* Legend and Details */}
      <div className="flex-1 space-y-4">
        {data.map((segment) => {
          const percentage = ((segment.value / total) * 100).toFixed(1)
          const isHovered = hoveredSegment === segment.id
          
          return (
            <Card 
              key={segment.id} 
              className={`transition-all duration-200 cursor-pointer ${
                isHovered ? "ring-2 ring-primary shadow-lg" : ""
              }`}
              onMouseEnter={() => setHoveredSegment(segment.id)}
              onMouseLeave={() => setHoveredSegment(null)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: segment.color }}
                    />
                    <span className="font-semibold">{segment.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{segment.value} ETH</div>
                    <div className="text-sm text-muted-foreground">{percentage}%</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{segment.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
