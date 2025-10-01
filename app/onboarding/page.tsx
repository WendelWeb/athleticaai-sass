"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Target,
  User,
  Activity,
  Dumbbell,
  Clock,
  Heart,
  Zap,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

interface OnboardingData {
  // Personal Info
  age: string;
  gender: string;
  height: string;
  weight: string;

  // Fitness Goals
  primaryGoal: string;
  secondaryGoals: string[];

  // Experience Level
  experienceLevel: string;
  currentActivity: string;

  // Availability
  workoutDays: string[];
  sessionDuration: string;
  preferredTime: string;

  // Equipment & Location
  workoutLocation: string;
  availableEquipment: string[];

  // Health & Limitations
  injuries: string[];
  healthConditions: string[];

  // Motivation
  motivationFactors: string[];
  previousAttempts: string;
}

const steps = [
  { id: "personal", title: "Informations personnelles", icon: User },
  { id: "goals", title: "Objectifs fitness", icon: Target },
  { id: "experience", title: "Niveau d'expérience", icon: Activity },
  { id: "availability", title: "Disponibilité", icon: Clock },
  { id: "equipment", title: "Équipement", icon: Dumbbell },
  { id: "health", title: "Santé", icon: Heart },
  { id: "motivation", title: "Motivation", icon: Zap },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({
    age: "",
    gender: "",
    height: "",
    weight: "",
    primaryGoal: "",
    secondaryGoals: [],
    experienceLevel: "",
    currentActivity: "",
    workoutDays: [],
    sessionDuration: "",
    preferredTime: "",
    workoutLocation: "",
    availableEquipment: [],
    injuries: [],
    healthConditions: [],
    motivationFactors: [],
    previousAttempts: "",
  });

  const updateData = (
    field: keyof OnboardingData,
    value: string | string[]
  ) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      handleComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Save data and redirect to dashboard
    console.log("Onboarding data:", data);
    window.location.href = "/dashboard";
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">
                AthleticaAI
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Étape {currentStep + 1} sur {steps.length}
              </span>
              <div className="w-32">
                <Progress value={progress} variant="gradient" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors
                  ${
                    index <= currentStep
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-border text-muted-foreground"
                  }
                `}
                >
                  {index < currentStep ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`
                    w-12 h-0.5 mx-2 transition-colors
                    ${index < currentStep ? "bg-primary" : "bg-border"}
                  `}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="p-8">{renderStepContent()}</CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Précédent
            </Button>

            <Button
              variant="gradient"
              onClick={nextStep}
              className="flex items-center"
            >
              {currentStep === steps.length - 1 ? "Terminer" : "Suivant"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  function renderStepContent() {
    switch (currentStep) {
      case 0: // Personal Info
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Parlons de toi</h2>
              <p className="text-muted-foreground">
                Ces informations nous aident à créer ton programme parfait
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Âge</label>
                <Input
                  type="number"
                  placeholder="25"
                  value={data.age}
                  onChange={(e) => updateData("age", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Genre</label>
                <div className="grid grid-cols-3 gap-2">
                  {["Homme", "Femme", "Autre"].map((gender) => (
                    <Button
                      key={gender}
                      variant={data.gender === gender ? "default" : "outline"}
                      size="sm"
                      onClick={() => updateData("gender", gender)}
                    >
                      {gender}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Taille (cm)</label>
                <Input
                  type="number"
                  placeholder="175"
                  value={data.height}
                  onChange={(e) => updateData("height", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Poids (kg)</label>
                <Input
                  type="number"
                  placeholder="70"
                  value={data.weight}
                  onChange={(e) => updateData("weight", e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 1: // Goals
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">
                Quel est ton objectif principal ?
              </h2>
              <p className="text-muted-foreground">
                Choisis ton objectif prioritaire pour personnaliser ton
                programme
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { id: "weight_loss", label: "Perdre du poids", icon: "🔥" },
                { id: "muscle_gain", label: "Prendre du muscle", icon: "💪" },
                { id: "strength", label: "Gagner en force", icon: "⚡" },
                { id: "endurance", label: "Améliorer l'endurance", icon: "🏃" },
                { id: "flexibility", label: "Gagner en souplesse", icon: "🧘" },
                { id: "general_fitness", label: "Forme générale", icon: "✨" },
              ].map((goal) => (
                <Button
                  key={goal.id}
                  variant={data.primaryGoal === goal.id ? "default" : "outline"}
                  className="h-20 flex flex-col items-center justify-center space-y-2"
                  onClick={() => updateData("primaryGoal", goal.id)}
                >
                  <span className="text-2xl">{goal.icon}</span>
                  <span className="text-sm">{goal.label}</span>
                </Button>
              ))}
            </div>
          </div>
        );

      // Add other steps here...
      default:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Étape {currentStep + 1}</h2>
            <p className="text-muted-foreground">
              Contenu de l&apos;étape en cours de développement...
            </p>
          </div>
        );
    }
  }
}
