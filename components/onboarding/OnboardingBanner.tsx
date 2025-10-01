"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import Link from "next/link";

export function OnboardingBanner() {
  const { needsOnboarding, isLoading } = useOnboardingStatus();
  const [isDismissed, setIsDismissed] = useState(false);

  // Ne pas afficher si pas besoin d'onboarding, en cours de chargement, ou si dismissé
  if (!needsOnboarding || isLoading || isDismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-blue-500/5">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    Complétez votre profil
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Aidez-nous à personnaliser votre expérience en complétant quelques informations sur vos objectifs fitness.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button asChild size="sm" className="flex items-center">
                  <Link href="/onboarding">
                    Compléter
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDismissed(true)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
