export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      exercises: {
        Row: {
          id: string
          name: string
          description: string | null
          instructions: string[] | null
          muscle_groups: string[] | null
          equipment: string[] | null
          exercise_type: Database["public"]["Enums"]["exercise_type"]
          difficulty: Database["public"]["Enums"]["workout_difficulty"] | null
          duration_minutes: number | null
          calories_per_minute: number | null
          video_url: string | null
          image_url: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          instructions?: string[] | null
          muscle_groups?: string[] | null
          equipment?: string[] | null
          exercise_type: Database["public"]["Enums"]["exercise_type"]
          difficulty?: Database["public"]["Enums"]["workout_difficulty"] | null
          duration_minutes?: number | null
          calories_per_minute?: number | null
          video_url?: string | null
          image_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          instructions?: string[] | null
          muscle_groups?: string[] | null
          equipment?: string[] | null
          exercise_type?: Database["public"]["Enums"]["exercise_type"]
          difficulty?: Database["public"]["Enums"]["workout_difficulty"] | null
          duration_minutes?: number | null
          calories_per_minute?: number | null
          video_url?: string | null
          image_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          id: string
          clerk_id: string
          email: string
          first_name: string | null
          last_name: string | null
          avatar_url: string | null
          fitness_level: Database["public"]["Enums"]["user_fitness_level"] | null
          primary_goal: Database["public"]["Enums"]["user_goal"] | null
          height_cm: number | null
          weight_kg: number | null
          birth_date: string | null
          gender: string | null
          preferred_workout_duration: number | null
          available_days_per_week: number | null
          preferred_workout_time: string | null
          subscription_tier: string | null
          subscription_expires_at: string | null
          created_at: string | null
          updated_at: string | null
          last_active_at: string | null
          onboarding_completed: boolean | null
        }
        Insert: {
          id?: string
          clerk_id: string
          email: string
          first_name?: string | null
          last_name?: string | null
          avatar_url?: string | null
          fitness_level?: Database["public"]["Enums"]["user_fitness_level"] | null
          primary_goal?: Database["public"]["Enums"]["user_goal"] | null
          height_cm?: number | null
          weight_kg?: number | null
          birth_date?: string | null
          gender?: string | null
          preferred_workout_duration?: number | null
          available_days_per_week?: number | null
          preferred_workout_time?: string | null
          subscription_tier?: string | null
          subscription_expires_at?: string | null
          created_at?: string | null
          updated_at?: string | null
          last_active_at?: string | null
          onboarding_completed?: boolean | null
        }
        Update: {
          id?: string
          clerk_id?: string
          email?: string
          first_name?: string | null
          last_name?: string | null
          avatar_url?: string | null
          fitness_level?: Database["public"]["Enums"]["user_fitness_level"] | null
          primary_goal?: Database["public"]["Enums"]["user_goal"] | null
          height_cm?: number | null
          weight_kg?: number | null
          birth_date?: string | null
          gender?: string | null
          preferred_workout_duration?: number | null
          available_days_per_week?: number | null
          preferred_workout_time?: string | null
          subscription_tier?: string | null
          subscription_expires_at?: string | null
          created_at?: string | null
          updated_at?: string | null
          last_active_at?: string | null
          onboarding_completed?: boolean | null
        }
        Relationships: []
      }
      user_workouts: {
        Row: {
          id: string
          user_id: string
          workout_template_id: string | null
          name: string
          scheduled_date: string | null
          started_at: string | null
          completed_at: string | null
          duration_minutes: number | null
          calories_burned: number | null
          notes: string | null
          rating: number | null
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          workout_template_id?: string | null
          name: string
          scheduled_date?: string | null
          started_at?: string | null
          completed_at?: string | null
          duration_minutes?: number | null
          calories_burned?: number | null
          notes?: string | null
          rating?: number | null
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          workout_template_id?: string | null
          name?: string
          scheduled_date?: string | null
          started_at?: string | null
          completed_at?: string | null
          duration_minutes?: number | null
          calories_burned?: number | null
          notes?: string | null
          rating?: number | null
          created_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_workouts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          date: string
          weight_kg: number | null
          body_fat_percentage: number | null
          muscle_mass_kg: number | null
          measurements: Json | null
          photos: string[] | null
          notes: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          date: string
          weight_kg?: number | null
          body_fat_percentage?: number | null
          muscle_mass_kg?: number | null
          measurements?: Json | null
          photos?: string[] | null
          notes?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          date?: string
          weight_kg?: number | null
          body_fat_percentage?: number | null
          muscle_mass_kg?: number | null
          measurements?: Json | null
          photos?: string | null
          notes?: string | null
          created_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      exercise_type: "cardio" | "strength" | "flexibility" | "balance" | "sports"
      user_fitness_level: "beginner" | "intermediate" | "advanced" | "expert"
      user_goal: "weight_loss" | "muscle_gain" | "strength" | "endurance" | "general_fitness"
      workout_difficulty: "easy" | "medium" | "hard" | "extreme"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type UserProfile = Database['public']['Tables']['users']['Row']
export type Exercise = Database['public']['Tables']['exercises']['Row']
export type UserWorkout = Database['public']['Tables']['user_workouts']['Row']
export type UserProgress = Database['public']['Tables']['user_progress']['Row']
