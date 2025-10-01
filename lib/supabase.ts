import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

// Server-side client with service role key
export const supabaseAdmin = createClient<Database>(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// Auth helpers
export const auth = {
  signUp: async (
    email: string,
    password: string,
    userData: Record<string, unknown>
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
      },
    });
    return { data, error };
  },

  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  resetPassword: async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password`,
    });
    return { data, error };
  },

  updatePassword: async (password: string) => {
    const { data, error } = await supabase.auth.updateUser({
      password,
    });
    return { data, error };
  },

  getUser: async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    return { user, error };
  },

  getSession: async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    return { session, error };
  },
};

// Database helpers
export const db = {
  // Users
  getProfile: async (userId: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
    return { data, error };
  },

  updateProfile: async (userId: string, updates: Record<string, unknown>) => {
    const { data, error } = await supabase
      .from("profiles")
      .update(updates as never)
      .eq("id", userId)
      .select()
      .single();
    return { data, error };
  },

  // Workouts
  getWorkouts: async (userId: string) => {
    const { data, error } = await supabase
      .from("workouts")
      .select(
        `
        *,
        workout_exercises (
          *,
          exercises (*)
        )
      `
      )
      .eq("user_id", userId)
      .order("created_at", { ascending: false });
    return { data, error };
  },

  createWorkout: async (workout: Record<string, unknown>) => {
    const { data, error } = await supabase
      .from("workouts")
      .insert(workout as never)
      .select()
      .single();
    return { data, error };
  },

  // Exercises
  getExercises: async (filters?: {
    category?: string;
    muscle_group?: string;
    equipment?: string;
  }) => {
    let query = supabase.from("exercises").select("*").eq("is_approved", true);

    if (filters?.category) {
      query = query.eq("category", filters.category);
    }
    if (filters?.muscle_group) {
      query = query.contains("primary_muscle_groups", [filters.muscle_group]);
    }
    if (filters?.equipment) {
      query = query.contains("equipment", [filters.equipment]);
    }

    const { data, error } = await query.order("name");
    return { data, error };
  },

  // Progress tracking
  createWorkoutSession: async (session: Record<string, unknown>) => {
    const { data, error } = await supabase
      .from("workout_sessions")
      .insert(session as never)
      .select()
      .single();
    return { data, error };
  },

  getWorkoutSessions: async (userId: string, limit = 10) => {
    const { data, error } = await supabase
      .from("workout_sessions")
      .select(
        `
        *,
        workouts (name),
        session_exercises (
          *,
          exercises (name)
        )
      `
      )
      .eq("user_id", userId)
      .order("start_time", { ascending: false })
      .limit(limit);
    return { data, error };
  },

  // Nutrition
  searchFoods: async (query: string) => {
    const { data, error } = await supabase
      .from("foods")
      .select("*")
      .textSearch("name", query)
      .limit(20);
    return { data, error };
  },

  addNutritionEntry: async (entry: Record<string, unknown>) => {
    const { data, error } = await supabase
      .from("nutrition_entries")
      .insert(entry as never)
      .select()
      .single();
    return { data, error };
  },

  // Social features
  getChallenges: async () => {
    const { data, error } = await supabase
      .from("challenges")
      .select("*")
      .eq("is_public", true)
      .gte("end_date", new Date().toISOString())
      .order("start_date", { ascending: true });
    return { data, error };
  },

  joinChallenge: async (challengeId: string, userId: string) => {
    const { data, error } = await supabase
      .from("challenge_participants")
      .insert({ challenge_id: challengeId, user_id: userId } as never)
      .select()
      .single();
    return { data, error };
  },
};

// Real-time subscriptions
export const subscriptions = {
  workoutSession: (userId: string, callback: (payload: unknown) => void) => {
    return supabase
      .channel("workout_sessions")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "workout_sessions",
          filter: `user_id=eq.${userId}`,
        },
        callback
      )
      .subscribe();
  },

  challenges: (callback: (payload: unknown) => void) => {
    return supabase
      .channel("challenges")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "challenges",
        },
        callback
      )
      .subscribe();
  },
};
