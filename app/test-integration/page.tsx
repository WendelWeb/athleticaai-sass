"use client";

import { useUser } from "@clerk/nextjs";
import { useUserProfile } from "@/hooks/use-user-profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  CheckCircle,
  XCircle,
  User,
  Database,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";

export default function TestIntegrationPage() {
  const { user, isLoaded: clerkLoaded } = useUser();
  const {
    profile,
    loading: profileLoading,
    error,
    updateProfile,
  } = useUserProfile();
  const [syncing, setSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState("");

  const handleSyncUser = async () => {
    setSyncing(true);
    setSyncMessage("");

    try {
      const response = await fetch("/api/sync-user", {
        method: "POST",
      });

      const result = await response.json();

      if (response.ok) {
        setSyncMessage("✅ Utilisateur synchronisé avec succès !");
        // Refresh the profile data
        window.location.reload();
      } else {
        setSyncMessage(`❌ Erreur: ${result.error}`);
      }
    } catch (err) {
      setSyncMessage(`❌ Erreur: ${(err as Error).message}`);
    } finally {
      setSyncing(false);
    }
  };

  const handleTestUpdate = async () => {
    if (!profile) return;

    try {
      await updateProfile({
        fitness_level: "intermediate",
        primary_goal: "muscle_gain",
        preferred_workout_duration: 60,
      });
      alert("Profile updated successfully!");
    } catch (err) {
      alert("Error updating profile: " + (err as Error).message);
    }
  };

  if (!clerkLoaded || profileLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">
        Test d&apos;Intégration Clerk ↔ Supabase
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Clerk Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Statut Clerk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              {user ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Utilisateur connecté</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span>Utilisateur non connecté</span>
                </>
              )}
            </div>

            {user && (
              <div className="space-y-2 text-sm">
                <p>
                  <strong>ID:</strong> {user.id}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  {user.primaryEmailAddress?.emailAddress}
                </p>
                <p>
                  <strong>Nom:</strong> {user.fullName}
                </p>
                <p>
                  <strong>Avatar:</strong> {user.imageUrl ? "Oui" : "Non"}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Supabase Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Statut Supabase
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              {profile ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Profil synchronisé</span>
                </>
              ) : error ? (
                <>
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span>Erreur de synchronisation</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-yellow-500" />
                  <span>Profil non trouvé</span>
                </>
              )}
            </div>

            {error && (
              <div className="text-red-500 text-sm">
                <strong>Erreur:</strong> {error}
              </div>
            )}

            {profile && (
              <div className="space-y-2 text-sm">
                <p>
                  <strong>ID Supabase:</strong> {profile.id}
                </p>
                <p>
                  <strong>Clerk ID:</strong> {profile.clerk_id}
                </p>
                <p>
                  <strong>Email:</strong> {profile.email}
                </p>
                <p>
                  <strong>Niveau fitness:</strong>{" "}
                  {profile.fitness_level || "Non défini"}
                </p>
                <p>
                  <strong>Objectif:</strong>{" "}
                  {profile.primary_goal || "Non défini"}
                </p>
                <p>
                  <strong>Onboarding:</strong>{" "}
                  {profile.onboarding_completed ? "Terminé" : "En cours"}
                </p>
                <p>
                  <strong>Créé le:</strong>{" "}
                  {profile.created_at
                    ? new Date(profile.created_at).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Actions de test */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Actions de Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 flex-wrap">
            <Button
              onClick={handleSyncUser}
              disabled={syncing || !user}
              variant="default"
              className="flex items-center gap-2"
            >
              {syncing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4" />
              )}
              {syncing ? "Synchronisation..." : "Synchroniser Utilisateur"}
            </Button>

            <Button
              onClick={handleTestUpdate}
              disabled={!profile}
              variant="outline"
            >
              Tester Mise à Jour Profil
            </Button>

            <Button onClick={() => window.location.reload()} variant="outline">
              Recharger la Page
            </Button>
          </div>

          {syncMessage && (
            <div className="p-3 bg-muted rounded-md text-sm">{syncMessage}</div>
          )}

          <div className="text-sm text-muted-foreground">
            <p>
              <strong>Instructions:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                Si vous voyez &quot;Profil non trouvé&quot;, créez un webhook
                dans Clerk ou connectez-vous/déconnectez-vous
              </li>
              <li>
                Le webhook devrait automatiquement créer l&apos;utilisateur dans
                Supabase
              </li>
              <li>
                Testez la mise à jour du profil pour vérifier la synchronisation
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Instructions de configuration */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Configuration Requise</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm space-y-2">
            <p>
              <strong>Pour que l&apos;intégration fonctionne:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                Configurez vos variables d&apos;environnement Supabase dans
                .env.local
              </li>
              <li>Exécutez le schéma SQL dans votre dashboard Supabase</li>
              <li>Configurez le webhook Clerk vers /api/webhooks/clerk</li>
              <li>Ajoutez le secret webhook dans .env.local</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
