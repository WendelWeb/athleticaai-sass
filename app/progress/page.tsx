"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, Award, Camera, Scale, Heart } from "lucide-react";
import {
  MetricGrid,
  fitnessMetrics,
  WeeklyOverview,
  AchievementBadge,
} from "@/components/saas/metric-dashboard";
import { ProgressRing } from "@/components/fitness/progress-ring";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    title: "Première semaine",
    description: "Complète ta première semaine",
    icon: "🎯",
    earned: true,
  },
  {
    title: "Streak Master",
    description: "7 jours consécutifs",
    icon: "🔥",
    earned: true,
  },
  {
    title: "Force Warrior",
    description: "50 séances de force",
    icon: "💪",
    earned: false,
    progress: 76,
  },
  {
    title: "Cardio King",
    description: "100 séances cardio",
    icon: "🏃",
    earned: false,
    progress: 45,
  },
  {
    title: "Consistency",
    description: "30 jours d'affilée",
    icon: "⭐",
    earned: false,
    progress: 23,
  },
  {
    title: "Goal Crusher",
    description: "Atteins tous tes objectifs",
    icon: "🏆",
    earned: false,
    progress: 67,
  },
];

const bodyMetrics = [
  { label: "Poids", value: "72.5", unit: "kg", change: -2.1, target: 70 },
  {
    label: "Masse musculaire",
    value: "45.2",
    unit: "kg",
    change: +1.8,
    target: 48,
  },
  { label: "Masse grasse", value: "12.8", unit: "%", change: -3.2, target: 10 },
  { label: "Tour de taille", value: "82", unit: "cm", change: -4, target: 78 },
];

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white">
        <div className="mobile-container py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-display text-white mb-4">Tes Progrès</h1>
            <p className="text-body text-white/80 max-w-2xl mx-auto">
              Suis ton évolution et célèbre chaque victoire sur ton chemin vers
              tes objectifs
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mobile-container py-6">
        {/* Quick Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <MetricGrid metrics={fitnessMetrics} columns={4} />
        </motion.section>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weekly Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <WeeklyOverview />
            </motion.section>

            {/* Body Metrics */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="saas-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Scale className="w-5 h-5 mr-2" />
                      Métriques corporelles
                    </CardTitle>
                    <Button variant="outline" size="sm">
                      <Camera className="w-4 h-4 mr-2" />
                      Photo
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {bodyMetrics.map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="text-center p-4 bg-muted/30 rounded-xl"
                      >
                        <div className="text-2xl font-bold text-foreground mb-1">
                          {metric.value}
                          <span className="text-sm text-muted-foreground ml-1">
                            {metric.unit}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          {metric.label}
                        </div>
                        <div
                          className={`text-xs flex items-center justify-center ${
                            metric.change > 0
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {metric.change > 0 ? "+" : ""}
                          {metric.change}
                        </div>

                        {/* Progress to target */}
                        <div className="mt-2">
                          <div className="w-full bg-muted rounded-full h-1">
                            <div
                              className="bg-gradient-primary h-1 rounded-full"
                              style={{
                                width: `${Math.min(
                                  (parseFloat(metric.value) / metric.target) *
                                    100,
                                  100
                                )}%`,
                              }}
                            />
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Objectif: {metric.target}
                            {metric.unit}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Performance Chart Placeholder */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="saas-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Évolution des performances
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted/30 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Graphique des performances à venir
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Goals */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="saas-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Objectifs actuels
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <ProgressRing progress={75} size={120} variant="gradient" />
                    <h4 className="font-semibold mt-3">Perte de poids</h4>
                    <p className="text-sm text-muted-foreground">
                      2.5kg perdus / 5kg objectif
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Séances par semaine</span>
                        <span>5/7</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-primary h-2 rounded-full w-[71%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Calories quotidiennes</span>
                        <span>1850/2000</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-primary h-2 rounded-full w-[92%]" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Achievements */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="saas-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Succès
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <AchievementBadge {...achievement} />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Health Stats */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Card className="saas-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Santé
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Fréquence cardiaque</span>
                    <Badge variant="outline">72 bpm</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Sommeil</span>
                    <Badge variant="outline">7h 30min</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Hydratation</span>
                    <Badge variant="outline">2.1L / 2.5L</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Stress</span>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-700"
                    >
                      Faible
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
