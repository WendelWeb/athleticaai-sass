import * as React from "react";
import { motion } from "framer-motion";
import { LucideIcon, Calendar, Target, Clock, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
    isPositive: boolean;
  };
  variant?: "default" | "gradient" | "glass" | "neon";
  className?: string;
  onClick?: () => void;
}

export function MetricCard({
  title,
  value,
  unit,
  icon: Icon,
  trend,
  variant = "default",
  className,
  onClick,
}: MetricCardProps) {
  const cardVariant = variant === "gradient" ? "metric" : variant;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card
        variant={cardVariant}
        className={cn(
          "cursor-pointer transition-all duration-300",
          onClick && "hover:shadow-lg",
          className
        )}
        onClick={onClick}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p
              className={cn(
                "text-sm font-medium",
                variant === "gradient"
                  ? "text-primary-foreground/80"
                  : "text-muted-foreground"
              )}
            >
              {title}
            </p>
            <div className="flex items-baseline gap-1 mt-1">
              <span
                className={cn(
                  "text-2xl font-bold",
                  variant === "gradient"
                    ? "text-primary-foreground"
                    : "text-foreground"
                )}
              >
                {value}
              </span>
              {unit && (
                <span
                  className={cn(
                    "text-sm",
                    variant === "gradient"
                      ? "text-primary-foreground/60"
                      : "text-muted-foreground"
                  )}
                >
                  {unit}
                </span>
              )}
            </div>

            {trend && (
              <div className="flex items-center gap-2 mt-2">
                <Badge
                  variant={trend.isPositive ? "success" : "destructive"}
                  size="sm"
                >
                  {trend.isPositive ? "+" : ""}
                  {trend.value}%
                </Badge>
                <span
                  className={cn(
                    "text-xs",
                    variant === "gradient"
                      ? "text-primary-foreground/60"
                      : "text-muted-foreground"
                  )}
                >
                  {trend.label}
                </span>
              </div>
            )}
          </div>

          <div
            className={cn(
              "p-3 rounded-lg",
              variant === "gradient" ? "bg-white/20" : "bg-primary/10"
            )}
          >
            <Icon
              className={cn(
                "w-6 h-6",
                variant === "gradient"
                  ? "text-primary-foreground"
                  : "text-primary"
              )}
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

// Preset metric cards for common fitness metrics
export interface WorkoutMetricsProps {
  workoutsThisWeek: number;
  totalWorkouts: number;
  averageDuration: number;
  caloriesBurned: number;
  className?: string;
}

export function WorkoutMetrics({
  workoutsThisWeek,
  totalWorkouts,
  averageDuration,
  caloriesBurned,
  className,
}: WorkoutMetricsProps) {
  return (
    <div className={cn("grid grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      <MetricCard
        title="Cette semaine"
        value={workoutsThisWeek}
        unit="séances"
        icon={Calendar}
        variant="gradient"
        trend={{
          value: 12,
          label: "vs semaine dernière",
          isPositive: true,
        }}
      />

      <MetricCard
        title="Total séances"
        value={totalWorkouts}
        icon={Target}
        trend={{
          value: 8,
          label: "ce mois",
          isPositive: true,
        }}
      />

      <MetricCard
        title="Durée moyenne"
        value={averageDuration}
        unit="min"
        icon={Clock}
      />

      <MetricCard
        title="Calories brûlées"
        value={caloriesBurned}
        unit="kcal"
        icon={Flame}
        variant="neon"
        trend={{
          value: 15,
          label: "cette semaine",
          isPositive: true,
        }}
      />
    </div>
  );
}
