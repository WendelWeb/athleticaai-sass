"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { supabaseClient } from "@/lib/supabase-admin";
import { UserProfile } from "@/lib/supabase-types";

export function useUserProfile() {
  const { user, isLoaded } = useUser();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserProfile() {
      if (!isLoaded || !user) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { data, error: supabaseError } = await supabaseClient
          .from("users")
          .select("*")
          .eq("clerk_id", user.id)
          .single();

        if (supabaseError) {
          if (supabaseError.code === "PGRST116") {
            // User doesn't exist in Supabase yet, this is normal for new users
            setProfile(null);
          } else {
            throw supabaseError;
          }
        } else {
          setProfile(data);
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch user profile"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchUserProfile();
  }, [user, isLoaded]);

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user || !profile) return;

    try {
      const { data, error: supabaseError } = await supabaseClient
        .from("users")
        .update({
          ...updates,
          updated_at: new Date().toISOString(),
        })
        .eq("clerk_id", user.id)
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      setProfile(data);
      return data;
    } catch (err) {
      console.error("Error updating user profile:", err);
      setError(err instanceof Error ? err.message : "Failed to update profile");
      throw err;
    }
  };

  return {
    profile,
    loading,
    error,
    updateProfile,
    isOnboardingComplete: profile?.onboarding_completed ?? false,
  };
}
