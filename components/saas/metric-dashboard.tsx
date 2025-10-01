"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Target,
  Calendar,
  Clock,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface MetricData {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  change?: {
    value: number;
    period: string;
    isPositive?: boolean;
  };
  target?: {
    value: number;
    unit?: string;
  };
  icon?: React.ComponentType<{ className?: string }>;
  color?: "primary" | "success" | "warning" | "info";
}

const colorStyles = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
  },
  success: {
    bg: "bg-green-500/10",
    text: "text-green-600",
    border: "border-green-500/20",
  },
  warning: {
    bg: "bg-orange-500/10",
    text: "text-orange-600",
    border: "border-orange-500/20",
  },
  info: {
    bg: "bg-blue-500/10",
    text: "text-blue-600",
    border: "border-blue-500/20",
  },
};

export function MetricCard({
  metric,
  className,
  size = "default",
}: {
  metric: MetricData;
  className?: string;
  size?: "sm" | "default" | "lg";
}) {
  const Icon = metric.icon;
  const color = colorStyles[metric.color || "primary"];

  const getTrendIcon = () => {
    if (!metric.change) return null;

    if (metric.change.isPositive === undefined) {
      return metric.change.value > 0
        ? TrendingUp
        : metric.change.value < 0
        ? TrendingDown
        : Minus;
    }

    return metric.change.isPositive ? TrendingUp : TrendingDown;
  };

  const TrendIcon = getTrendIcon();

  const sizeClasses = {
    sm: "p-4",
    default: "p-6",
    lg: "p-8",
  };

  const valueSizes = {
    sm: "text-xl",
    default: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={cn("saas-card", sizeClasses[size], className)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {Icon && (
            <div
              className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center",
                color.bg,
                color.border,
                "border"
              )}
            >
              <Icon className={cn("w-5 h-5", color.text)} />
            </div>
          )}
          <div>
            <h3 className="font-medium text-muted-foreground text-sm">
              {metric.title}
            </h3>
          </div>
        </div>

        {metric.change && TrendIcon && (
          <div
            className={cn(
              "flex items-center space-x-1 text-xs px-2 py-1 rounded-full",
              metric.change.isPositive !== false
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            )}
          >
            <TrendIcon className="w-3 h-3" />
            <span>{Math.abs(metric.change.value)}%</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-baseline space-x-1">
          <span className={cn("font-bold", valueSizes[size])}>
            {metric.value}
          </span>
          {metric.unit && (
            <span className="text-sm text-muted-foreground">{metric.unit}</span>
          )}
        </div>

        {metric.change && (
          <p className="text-xs text-muted-foreground">
            {metric.change.period}
          </p>
        )}

        {metric.target && (
          <div className="pt-2">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Objectif</span>
              <span>
                {metric.target.value}
                {metric.target.unit}
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5">
              <div
                className="bg-gradient-primary h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(
                    (Number(metric.value) / metric.target.value) * 100,
                    100
                  )}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function MetricGrid({
  metrics,
  columns = 4,
  className,
}: {
  metrics: MetricData[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const gridClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-4", gridClasses[columns], className)}>
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <MetricCard metric={metric} />
        </motion.div>
      ))}
    </div>
  );
}

// Predefined fitness metrics
export const fitnessMetrics: MetricData[] = [
  {
    id: "workouts-week",
    title: "Séances cette semaine",
    value: 5,
    unit: "/7",
    change: { value: 25, period: "vs semaine dernière", isPositive: true },
    target: { value: 7 },
    icon: Calendar,
    color: "primary",
  },
  {
    id: "total-workouts",
    title: "Total séances",
    value: 127,
    change: { value: 8, period: "ce mois", isPositive: true },
    icon: Target,
    color: "success",
  },
  {
    id: "avg-duration",
    title: "Durée moyenne",
    value: 42,
    unit: "min",
    change: { value: 5, period: "vs mois dernier", isPositive: true },
    icon: Clock,
    color: "info",
  },
  {
    id: "calories-burned",
    title: "Calories brûlées",
    value: "2.8k",
    unit: "kcal",
    change: { value: 15, period: "cette semaine", isPositive: true },
    target: { value: 3000, unit: "kcal" },
    icon: Flame,
    color: "warning",
  },
];

// Weekly Overview Component
export function WeeklyOverview() {
  const weekDays = ["L", "M", "M", "J", "V", "S", "D"];
  const completedDays = [true, true, false, true, true, false, false];

  return (
    <div className="saas-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Cette semaine</h3>
        <span className="text-sm text-muted-foreground">5/7 jours</span>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day, index) => (
          <div key={day} className="text-center">
            <div className="text-xs text-muted-foreground mb-2">{day}</div>
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors",
                completedDays[index]
                  ? "bg-gradient-primary text-white"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Progression</span>
          <span className="font-medium text-primary">71%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mt-2">
          <div className="bg-gradient-primary h-2 rounded-full w-[71%]" />
        </div>
      </div>
    </div>
  );
}

// Achievement Badge Component
export function AchievementBadge({
  title,
  description,
  icon,
  earned = false,
  progress,
}: {
  title: string;
  description: string;
  icon: string;
  earned?: boolean;
  progress?: number;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        "saas-card text-center transition-all duration-300",
        earned ? "bg-gradient-primary text-white" : "opacity-60"
      )}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <h4
        className={cn(
          "font-semibold text-sm mb-1",
          earned ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h4>
      <p
        className={cn(
          "text-xs",
          earned ? "text-white/80" : "text-muted-foreground"
        )}
      >
        {description}
      </p>

      {!earned && progress && (
        <div className="mt-3">
          <div className="w-full bg-muted rounded-full h-1">
            <div
              className="bg-primary h-1 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-muted-foreground mt-1 block">
            {progress}%
          </span>
        </div>
      )}
    </motion.div>
  );
}
