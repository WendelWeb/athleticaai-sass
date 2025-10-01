"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export interface OnboardingStatus {
  isLoading: boolean;
  needsOnboarding: boolean;
  userProfile: any;
  error: string | null;
}

export function useOnboardingStatus(): OnboardingStatus {
  const { user, isLoaded } = useUser();
  const [status, setStatus] = useState<OnboardingStatus>({
    isLoading: true,
    needsOnboarding: false,
    userProfile: null,
    error: null,
  });

  useEffect(() => {
    async function checkOnboardingStatus() {
      if (!isLoaded || !user) {
        setStatus(prev => ({ ...prev, isLoading: false }));
        return;
      }

      try {
        // Récupérer le profil utilisateur depuis Supabase
        const { data: userProfile, error } = await supabase
          .from("users")
          .select("*")
          .eq("clerk_id", user.id)
          .single();

        if (error) {
          console.error("Erreur lors de la récupération du profil:", error);
          setStatus({
            isLoading: false,
            needsOnboarding: false,
            userProfile: null,
            error: "Erreur lors de la récupération du profil",
          });
          return;
        }

        // Vérifier si l'onboarding est nécessaire
        const needsOnboarding = !userProfile?.onboarding_completed;

        setStatus({
          isLoading: false,
          needsOnboarding,
          userProfile,
          error: null,
        });
      } catch (err) {
        console.error("Erreur inattendue:", err);
        setStatus({
          isLoading: false,
          needsOnboarding: false,
          userProfile: null,
          error: "Erreur inattendue",
        });
      }
    }

    checkOnboardingStatus();
  }, [user, isLoaded]);

  return status;
}

// Hook pour marquer l'onboarding comme complété
export function useCompleteOnboarding() {
  const { user } = useUser();

  const completeOnboarding = async () => {
    if (!user) {
      throw new Error("Utilisateur non connecté");
    }

    const { error } = await supabase
      .from("users")
      .update({ onboarding_completed: true })
      .eq("clerk_id", user.id);

    if (error) {
      console.error("Erreur lors de la mise à jour de l'onboarding:", error);
      throw error;
    }

    console.log("Onboarding marqué comme complété pour l'utilisateur:", user.id);
  };

  return { completeOnboarding };
}
