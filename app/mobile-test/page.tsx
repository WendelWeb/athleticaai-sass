"use client";

import { motion } from "framer-motion";
import {
  Home,
  Dumbbell,
  TrendingUp,
  Users,
  User,
  Play,
  Heart,
  Target,
  Calendar,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MobileTestPage() {
  const navItems = [
    { icon: Home, label: "Accueil", active: true },
    { icon: Dumbbell, label: "Workouts", active: false },
    { icon: TrendingUp, label: "Progrès", active: false },
    { icon: Users, label: "Social", active: false },
    { icon: User, label: "Profil", active: false },
  ];

  const quickActions = [
    { icon: Play, label: "Démarrer", color: "bg-green-500" },
    { icon: Heart, label: "Favoris", color: "bg-red-500" },
    { icon: Target, label: "Objectifs", color: "bg-blue-500" },
    { icon: Calendar, label: "Planning", color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Mobile */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
        <div className="flex items-center justify-between p-4">
          <div>
            <h1 className="text-xl font-bold">AthleticaAI</h1>
            <p className="text-sm text-muted-foreground">Test Mobile</p>
          </div>
          <Button variant="ghost" size="sm">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pb-24 space-y-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <h2 className="text-2xl font-bold mb-2">Salut Champion ! 👋</h2>
          <p className="text-muted-foreground">
            Prêt pour une nouvelle séance ?
          </p>
        </motion.div>

        {/* Quick Actions */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Actions rapides</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Button
                  className="w-full h-20 flex-col space-y-2 bg-card hover:bg-muted border border-border/50"
                  variant="ghost"
                >
                  <div
                    className={`w-8 h-8 rounded-full ${action.color} flex items-center justify-center`}
                  >
                    <action.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{action.label}</span>
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Cards */}
        <section>
          <h3 className="text-lg font-semibold mb-4">
            Tes stats aujourd&apos;hui
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-green-500">7</div>
                <div className="text-sm text-muted-foreground">
                  Jours de suite
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-blue-500">45</div>
                <div className="text-sm text-muted-foreground">Min actives</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-purple-500">3</div>
                <div className="text-sm text-muted-foreground">Workouts</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-orange-500">420</div>
                <div className="text-sm text-muted-foreground">Calories</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Workout Suggestions */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Recommandé pour toi</h3>
          <div className="space-y-3">
            {[
              {
                title: "HIIT Express",
                duration: "15 min",
                difficulty: "Intermédiaire",
                color: "bg-red-500",
              },
              {
                title: "Yoga Détente",
                duration: "30 min",
                difficulty: "Débutant",
                color: "bg-green-500",
              },
              {
                title: "Force & Cardio",
                duration: "45 min",
                difficulty: "Avancé",
                color: "bg-blue-500",
              },
            ].map((workout, index) => (
              <motion.div
                key={workout.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex">
                      <div
                        className={`w-20 h-20 ${workout.color} flex items-center justify-center`}
                      >
                        <Dumbbell className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1 p-4">
                        <h4 className="font-semibold">{workout.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {workout.duration}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {workout.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center pr-4">
                        <Button size="sm" className="rounded-full">
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Test Responsive Breakpoints */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Test Responsive</h3>
          <div className="space-y-2 text-sm">
            <div className="p-3 bg-red-100 text-red-800 rounded-lg block sm:hidden">
              📱 Mobile (&lt; 640px)
            </div>
            <div className="p-3 bg-yellow-100 text-yellow-800 rounded-lg hidden sm:block md:hidden">
              📱 Small (640px - 768px)
            </div>
            <div className="p-3 bg-green-100 text-green-800 rounded-lg hidden md:block lg:hidden">
              💻 Medium (768px - 1024px)
            </div>
            <div className="p-3 bg-blue-100 text-blue-800 rounded-lg hidden lg:block xl:hidden">
              🖥️ Large (1024px - 1280px)
            </div>
            <div className="p-3 bg-purple-100 text-purple-800 rounded-lg hidden xl:block">
              🖥️ Extra Large (&gt; 1280px)
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border/50">
        <div className="grid grid-cols-5 px-2 py-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors duration-200 ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
              {item.active && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
