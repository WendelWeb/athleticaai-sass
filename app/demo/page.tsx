"use client";

import { motion } from "framer-motion";
import { Dumbbell, Heart, Zap, TrendingUp } from "lucide-react";
import { MetricCard, WorkoutMetrics } from "@/components/fitness/metric-card";
import { WorkoutCard } from "@/components/fitness/workout-card";
import {
  ProgressRing,
  FitnessProgress,
} from "@/components/fitness/progress-ring";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DemoPage() {
  const sampleWorkouts = [
    {
      id: "1",
      title: "HIIT Cardio Intense",
      description:
        "Entraînement cardio haute intensité pour brûler un maximum de calories en 20 minutes.",
      duration: 20,
      difficulty: "intermediate" as const,
      category: "Cardio",
      targetMuscles: ["Cardio", "Full Body", "Core"],
      equipment: ["Aucun"],
      rating: 4.8,
      isBookmarked: true,
      completedCount: 1250,
    },
    {
      id: "2",
      title: "Force & Puissance",
      description:
        "Développez votre force avec cet entraînement complet au poids du corps.",
      duration: 45,
      difficulty: "advanced" as const,
      category: "Force",
      targetMuscles: ["Pectoraux", "Dos", "Épaules", "Bras"],
      equipment: ["Haltères", "Barre"],
      rating: 4.9,
      completedCount: 890,
    },
    {
      id: "3",
      title: "Yoga Flow Matinal",
      description:
        "Commencez votre journée en douceur avec cette séance de yoga relaxante.",
      duration: 30,
      difficulty: "beginner" as const,
      category: "Flexibilité",
      targetMuscles: ["Full Body", "Core", "Flexibilité"],
      equipment: ["Tapis de yoga"],
      rating: 4.7,
      isCompleted: true,
      completedCount: 2100,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Démo Interactive
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez l&apos;interface premium d&apos;AthleticaAI avec nos
            composants fitness avancés
          </p>
        </motion.div>

        {/* Metrics Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">
            📊 Métriques de Performance
          </h2>

          <WorkoutMetrics
            workoutsThisWeek={5}
            totalWorkouts={127}
            averageDuration={42}
            caloriesBurned={2840}
            className="mb-8"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Fréquence cardiaque"
              value={142}
              unit="bpm"
              icon={Heart}
              variant="neon"
              trend={{
                value: 5,
                label: "vs moyenne",
                isPositive: true,
              }}
            />

            <MetricCard
              title="Force développée"
              value={85}
              unit="kg"
              icon={Dumbbell}
              trend={{
                value: 12,
                label: "ce mois",
                isPositive: true,
              }}
            />

            <MetricCard
              title="Progression"
              value={78}
              unit="%"
              icon={TrendingUp}
              variant="glass"
            />

            <MetricCard
              title="Énergie"
              value={92}
              unit="%"
              icon={Zap}
              variant="gradient"
            />
          </div>
        </motion.section>

        {/* Progress Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">🎯 Progression Globale</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="glass" className="text-center">
              <CardHeader>
                <CardTitle>Objectif Hebdomadaire</CardTitle>
              </CardHeader>
              <CardContent>
                <ProgressRing
                  progress={75}
                  variant="gradient"
                  size={140}
                  className="mb-4"
                />
                <p className="text-sm text-muted-foreground">
                  3 séances sur 4 complétées
                </p>
              </CardContent>
            </Card>

            <Card variant="glass" className="text-center">
              <CardHeader>
                <CardTitle>Progression Mensuelle</CardTitle>
              </CardHeader>
              <CardContent>
                <ProgressRing
                  progress={92}
                  variant="success"
                  size={140}
                  className="mb-4"
                />
                <p className="text-sm text-muted-foreground">
                  Excellent progrès ce mois !
                </p>
              </CardContent>
            </Card>

            <Card variant="glass" className="text-center">
              <CardHeader>
                <CardTitle>Équilibre Fitness</CardTitle>
              </CardHeader>
              <CardContent>
                <FitnessProgress
                  workoutProgress={85}
                  nutritionProgress={72}
                  sleepProgress={68}
                />
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Workouts Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">🏋️ Entraînements Recommandés</h2>
            <div className="flex gap-2">
              <Badge variant="outline">Personnalisé pour toi</Badge>
              <Badge variant="gradient">IA</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleWorkouts.map((workout, index) => (
              <motion.div
                key={workout.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <WorkoutCard
                  {...workout}
                  onStart={() =>
                    console.log("Starting workout:", workout.title)
                  }
                  onBookmark={() => console.log("Bookmarking:", workout.title)}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Card variant="metric" className="p-12">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Prêt à commencer ton transformation ?
            </h3>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Rejoins des milliers d&apos;utilisateurs qui transforment déjà
              leur corps avec AthleticaAI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Zap className="w-5 h-5 mr-2" />
                Commencer gratuitement
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                En savoir plus
              </Button>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
