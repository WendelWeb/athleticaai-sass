"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Target,
  Clock,
  Play,
  User,
  Plus,
  Award,
  Users,
  Zap,
} from "lucide-react";
import { FitnessProgress } from "@/components/fitness/progress-ring";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const todayWorkouts = [
    {
      id: "1",
      title: "HIIT Matinal",
      description: "Entraînement cardio intense pour bien commencer la journée",
      duration: 25,
      difficulty: "intermediate" as const,
      category: "Cardio",
      targetMuscles: ["Cardio", "Full Body"],
      equipment: ["Aucun"],
      rating: 4.8,
    },
    {
      id: "2",
      title: "Force Haut du Corps",
      description: "Développement musculaire ciblé pour le haut du corps",
      duration: 45,
      difficulty: "advanced" as const,
      category: "Force",
      targetMuscles: ["Pectoraux", "Dos", "Épaules"],
      equipment: ["Haltères"],
      rating: 4.9,
    },
  ];

  const recentAchievements = [
    { title: "Première semaine complétée", icon: "🎯", date: "Aujourd'hui" },
    { title: "5 séances cette semaine", icon: "🔥", date: "Hier" },
    { title: "Nouveau record personnel", icon: "💪", date: "Il y a 2 jours" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile-First Header */}
      <div className="bg-gradient-primary text-white">
        <div className="mobile-container mobile-section">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-title text-white">Salut, John ! 👋</h1>
                <p className="text-white/80 text-sm">
                  Prêt pour une nouvelle séance ?
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30"
              >
                <Zap className="w-3 h-3 mr-1" />7 jours
              </Badge>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                <Plus className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Nouvelle séance</span>
                <span className="sm:hidden">Nouveau</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-container py-6">
        {/* Quick Stats - Mobile Optimized */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="saas-card text-center">
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Cette semaine</div>
            </div>
            <div className="saas-card text-center">
              <div className="text-2xl font-bold text-primary">127</div>
              <div className="text-sm text-muted-foreground">Total séances</div>
            </div>
            <div className="saas-card text-center">
              <div className="text-2xl font-bold text-primary">42min</div>
              <div className="text-sm text-muted-foreground">Durée moy.</div>
            </div>
            <div className="saas-card text-center">
              <div className="text-2xl font-bold text-primary">2840</div>
              <div className="text-sm text-muted-foreground">Calories</div>
            </div>
          </div>
        </motion.section>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Workouts - Mobile Optimized */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <h2 className="text-headline">Aujourd&apos;hui</h2>
                <Badge variant="outline" className="self-start">
                  <Zap className="w-3 h-3 mr-1" />
                  IA Personnalisé
                </Badge>
              </div>

              <div className="space-y-4">
                {todayWorkouts.map((workout, index) => (
                  <motion.div
                    key={workout.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="saas-card"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {workout.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {workout.description}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {workout.duration}min
                          </span>
                          <span className="flex items-center">
                            <Target className="w-3 h-3 mr-1" />
                            {workout.category}
                          </span>
                        </div>
                      </div>
                      <Button size="sm" className="btn-success">
                        <Play className="w-3 h-3 mr-1" />
                        Start
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Recent Activity */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Activité récente</h2>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      {
                        workout: "HIIT Cardio",
                        date: "Aujourd'hui",
                        duration: "20 min",
                        calories: 280,
                      },
                      {
                        workout: "Force Jambes",
                        date: "Hier",
                        duration: "45 min",
                        calories: 320,
                      },
                      {
                        workout: "Yoga Flow",
                        date: "Il y a 2 jours",
                        duration: "30 min",
                        calories: 150,
                      },
                    ].map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <Play className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">{activity.workout}</p>
                            <p className="text-sm text-muted-foreground">
                              {activity.date}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{activity.duration}</p>
                          <p className="text-sm text-muted-foreground">
                            {activity.calories} kcal
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Progress Overview */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Progression cette semaine</CardTitle>
                </CardHeader>
                <CardContent>
                  <FitnessProgress
                    workoutProgress={85}
                    nutritionProgress={72}
                    sleepProgress={68}
                  />
                </CardContent>
              </Card>
            </motion.section>

            {/* Achievements */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Succès récents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAchievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div className="flex-1">
                          <p className="font-medium text-sm">
                            {achievement.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {achievement.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Quick Actions */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Actions rapides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Planifier une séance
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Target className="w-4 h-4 mr-2" />
                    Modifier mes objectifs
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Rejoindre un défi
                  </Button>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
