"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { Loader2 } from "lucide-react";

interface OnboardingGuardProps {
  children: React.ReactNode;
}

// Pages qui ne nécessitent pas d'onboarding complété
const ONBOARDING_EXEMPT_PAGES = [
  "/onboarding",
  "/auth/login",
  "/auth/signup",
  "/sign-in",
  "/sign-up",
  "/api",
  "/debug-env",
  "/diagnostic",
];

export function OnboardingGuard({ children }: OnboardingGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoading, needsOnboarding, error } = useOnboardingStatus();

  useEffect(() => {
    // Ne pas rediriger si on est en train de charger
    if (isLoading) return;

    // Ne pas rediriger si on est déjà sur une page exemptée
    const isExemptPage = ONBOARDING_EXEMPT_PAGES.some(exemptPage => 
      pathname.startsWith(exemptPage)
    );
    
    if (isExemptPage) return;

    // Rediriger vers l'onboarding si nécessaire
    if (needsOnboarding) {
      console.log("Redirection vers l'onboarding - utilisateur non complété");
      router.push("/onboarding");
    }
  }, [isLoading, needsOnboarding, pathname, router]);

  // Afficher un loader pendant la vérification
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Vérification du profil...</p>
        </div>
      </div>
    );
  }

  // Afficher une erreur si nécessaire
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Erreur: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-primary text-primary-foreground rounded"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  // Ne pas afficher le contenu si on a besoin d'onboarding et qu'on n'est pas sur une page exemptée
  const isExemptPage = ONBOARDING_EXEMPT_PAGES.some(exemptPage => 
    pathname.startsWith(exemptPage)
  );
  
  if (needsOnboarding && !isExemptPage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Redirection vers l&apos;onboarding...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
