import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ProgressRingProps {
  progress: number
  size?: number
  strokeWidth?: number
  className?: string
  children?: React.ReactNode
  variant?: "default" | "gradient" | "success" | "warning" | "error"
  showPercentage?: boolean
  animated?: boolean
}

export function ProgressRing({
  progress,
  size = 120,
  strokeWidth = 8,
  className,
  children,
  variant = "default",
  showPercentage = true,
  animated = true,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference

  const getStrokeColor = () => {
    switch (variant) {
      case "gradient":
        return "url(#gradient)"
      case "success":
        return "hsl(var(--success))"
      case "warning":
        return "hsl(var(--warning))"
      case "error":
        return "hsl(var(--destructive))"
      default:
        return "hsl(var(--primary))"
    }
  }

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--info))" />
            <stop offset="100%" stopColor="hsl(var(--energy))" />
          </linearGradient>
        </defs>
        
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="opacity-20"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getStrokeColor()}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: circumference }}
          animate={{ 
            strokeDashoffset: animated ? strokeDashoffset : circumference - (progress / 100) * circumference 
          }}
          transition={{ 
            duration: animated ? 1.5 : 0, 
            ease: "easeOut",
            delay: animated ? 0.2 : 0
          }}
        />
      </svg>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {children || (showPercentage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: animated ? 0.5 : 0 }}
            className="text-center"
          >
            <div className="text-2xl font-bold text-foreground">
              {Math.round(progress)}%
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Multi-ring progress for complex metrics
export interface MultiProgressRingProps {
  rings: Array<{
    progress: number
    color: string
    label: string
  }>
  size?: number
  strokeWidth?: number
  className?: string
}

export function MultiProgressRing({
  rings,
  size = 160,
  strokeWidth = 6,
  className,
}: MultiProgressRingProps) {
  const spacing = strokeWidth + 4
  
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        {rings.map((ring, index) => {
          const radius = (size - strokeWidth) / 2 - (index * spacing)
          const circumference = radius * 2 * Math.PI
          const strokeDasharray = circumference
          const strokeDashoffset = circumference - (ring.progress / 100) * circumference
          
          return (
            <g key={index}>
              {/* Background circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="hsl(var(--muted))"
                strokeWidth={strokeWidth}
                fill="transparent"
                className="opacity-20"
              />
              
              {/* Progress circle */}
              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={ring.color}
                strokeWidth={strokeWidth}
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={strokeDasharray}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeOut",
                  delay: index * 0.2
                }}
              />
            </g>
          )
        })}
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-lg font-bold text-foreground">
          {Math.round(rings.reduce((sum, ring) => sum + ring.progress, 0) / rings.length)}%
        </div>
        <div className="text-xs text-muted-foreground">
          Progression
        </div>
      </div>
    </div>
  )
}

// Preset fitness progress rings
export interface FitnessProgressProps {
  workoutProgress: number
  nutritionProgress: number
  sleepProgress: number
  className?: string
}

export function FitnessProgress({
  workoutProgress,
  nutritionProgress,
  sleepProgress,
  className,
}: FitnessProgressProps) {
  const rings = [
    {
      progress: workoutProgress,
      color: "hsl(var(--primary))",
      label: "Entraînement",
    },
    {
      progress: nutritionProgress,
      color: "hsl(var(--success))",
      label: "Nutrition",
    },
    {
      progress: sleepProgress,
      color: "hsl(var(--info))",
      label: "Sommeil",
    },
  ]

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <MultiProgressRing rings={rings} />
      
      <div className="flex gap-4 text-sm">
        {rings.map((ring, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: ring.color }}
            />
            <span className="text-muted-foreground">{ring.label}</span>
            <span className="font-medium">{Math.round(ring.progress)}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
