import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase-types";

// Admin client with service role key for server-side operations
export const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// Client-side Supabase client
export const supabaseClient = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// User management functions
export async function createUserInSupabase(userData: {
  clerk_id: string;
  email: string;
  first_name?: string | null;
  last_name?: string | null;
  avatar_url?: string | null;
}) {
  const { data, error } = await supabaseAdmin
    .from("users")
    .insert({
      clerk_id: userData.clerk_id,
      email: userData.email,
      first_name: userData.first_name,
      last_name: userData.last_name,
      avatar_url: userData.avatar_url,
    })
    .select()
    .single();

  if (error) {
    console.error("Error creating user in Supabase:", error);
    throw error;
  }

  return data;
}

export async function updateUserInSupabase(
  clerkId: string,
  userData: {
    email?: string;
    first_name?: string | null;
    last_name?: string | null;
    avatar_url?: string | null;
  }
) {
  const { data, error } = await supabaseAdmin
    .from("users")
    .update({
      ...userData,
      updated_at: new Date().toISOString(),
    })
    .eq("clerk_id", clerkId)
    .select()
    .single();

  if (error) {
    console.error("Error updating user in Supabase:", error);
    throw error;
  }

  return data;
}

export async function deleteUserFromSupabase(clerkId: string) {
  const { error } = await supabaseAdmin
    .from("users")
    .delete()
    .eq("clerk_id", clerkId);

  if (error) {
    console.error("Error deleting user from Supabase:", error);
    throw error;
  }
}

export async function getUserByClerkId(clerkId: string) {
  const { data, error } = await supabaseAdmin
    .from("users")
    .select("*")
    .eq("clerk_id", clerkId)
    .single();

  if (error && error.code !== "PGRST116") {
    // PGRST116 = no rows returned
    console.error("Error fetching user from Supabase:", error);
    throw error;
  }

  return data;
}

// Fitness data functions
export async function updateUserFitnessProfile(
  clerkId: string,
  fitnessData: {
    fitness_level?: "beginner" | "intermediate" | "advanced" | "expert";
    primary_goal?:
      | "weight_loss"
      | "muscle_gain"
      | "strength"
      | "endurance"
      | "general_fitness";
    height_cm?: number;
    weight_kg?: number;
    birth_date?: string;
    gender?: "male" | "female" | "other";
    preferred_workout_duration?: number;
    available_days_per_week?: number;
    preferred_workout_time?: string;
  }
) {
  const { data, error } = await supabaseAdmin
    .from("users")
    .update({
      ...fitnessData,
      updated_at: new Date().toISOString(),
    })
    .eq("clerk_id", clerkId)
    .select()
    .single();

  if (error) {
    console.error("Error updating user fitness profile:", error);
    throw error;
  }

  return data;
}

export async function completeUserOnboarding(clerkId: string) {
  const { data, error } = await supabaseAdmin
    .from("users")
    .update({
      onboarding_completed: true,
      updated_at: new Date().toISOString(),
    })
    .eq("clerk_id", clerkId)
    .select()
    .single();

  if (error) {
    console.error("Error completing user onboarding:", error);
    throw error;
  }

  return data;
}

// Function to ensure user exists in Supabase (fallback for webhook issues)
export async function ensureUserExistsInSupabase(userData: {
  clerk_id: string;
  email: string;
  first_name?: string | null;
  last_name?: string | null;
  avatar_url?: string | null;
}) {
  // First, check if user already exists
  const { data: existingUser } = await supabaseAdmin
    .from("users")
    .select("id")
    .eq("clerk_id", userData.clerk_id)
    .single();

  if (existingUser) {
    console.log("User already exists in Supabase:", userData.clerk_id);
    return existingUser;
  }

  // If user doesn't exist, create them
  console.log("Creating user in Supabase:", userData.clerk_id);
  return await createUserInSupabase(userData);
}
