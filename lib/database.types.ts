export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          first_name: string
          last_name: string
          avatar_url: string | null
          date_of_birth: string
          gender: 'male' | 'female' | 'other'
          height: number
          weight: number
          activity_level: string
          fitness_goals: string[]
          preferences: Json
          subscription_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          first_name: string
          last_name: string
          avatar_url?: string | null
          date_of_birth: string
          gender: 'male' | 'female' | 'other'
          height: number
          weight: number
          activity_level: string
          fitness_goals: string[]
          preferences?: Json
          subscription_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string
          last_name?: string
          avatar_url?: string | null
          date_of_birth?: string
          gender?: 'male' | 'female' | 'other'
          height?: number
          weight?: number
          activity_level?: string
          fitness_goals?: string[]
          preferences?: Json
          subscription_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          plan_id: string
          status: 'active' | 'canceled' | 'past_due' | 'unpaid'
          current_period_start: string
          current_period_end: string
          cancel_at_period_end: boolean
          stripe_subscription_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          plan_id: string
          status: 'active' | 'canceled' | 'past_due' | 'unpaid'
          current_period_start: string
          current_period_end: string
          cancel_at_period_end?: boolean
          stripe_subscription_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          plan_id?: string
          status?: 'active' | 'canceled' | 'past_due' | 'unpaid'
          current_period_start?: string
          current_period_end?: string
          cancel_at_period_end?: boolean
          stripe_subscription_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      exercises: {
        Row: {
          id: string
          name: string
          description: string
          instructions: string[]
          primary_muscle_groups: string[]
          secondary_muscle_groups: string[]
          equipment: string[]
          difficulty: string
          category: string
          video_url: string | null
          image_urls: string[]
          variations: Json
          tips: string[]
          common_mistakes: string[]
          is_approved: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          instructions: string[]
          primary_muscle_groups: string[]
          secondary_muscle_groups?: string[]
          equipment: string[]
          difficulty: string
          category: string
          video_url?: string | null
          image_urls?: string[]
          variations?: Json
          tips?: string[]
          common_mistakes?: string[]
          is_approved?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          instructions?: string[]
          primary_muscle_groups?: string[]
          secondary_muscle_groups?: string[]
          equipment?: string[]
          difficulty?: string
          category?: string
          video_url?: string | null
          image_urls?: string[]
          variations?: Json
          tips?: string[]
          common_mistakes?: string[]
          is_approved?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      workouts: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          duration: number
          difficulty: string
          category: string
          target_muscle_groups: string[]
          equipment: string[]
          is_custom: boolean
          is_public: boolean
          tags: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          duration: number
          difficulty: string
          category: string
          target_muscle_groups: string[]
          equipment: string[]
          is_custom?: boolean
          is_public?: boolean
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          duration?: number
          difficulty?: string
          category?: string
          target_muscle_groups?: string[]
          equipment?: string[]
          is_custom?: boolean
          is_public?: boolean
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      workout_exercises: {
        Row: {
          id: string
          workout_id: string
          exercise_id: string
          order: number
          sets: Json
          rest_time: number
          notes: string | null
        }
        Insert: {
          id?: string
          workout_id: string
          exercise_id: string
          order: number
          sets: Json
          rest_time: number
          notes?: string | null
        }
        Update: {
          id?: string
          workout_id?: string
          exercise_id?: string
          order?: number
          sets?: Json
          rest_time?: number
          notes?: string | null
        }
      }
      workout_sessions: {
        Row: {
          id: string
          user_id: string
          workout_id: string
          start_time: string
          end_time: string | null
          duration: number | null
          notes: string | null
          rpe: number | null
          calories: number | null
          completed: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          workout_id: string
          start_time: string
          end_time?: string | null
          duration?: number | null
          notes?: string | null
          rpe?: number | null
          calories?: number | null
          completed?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          workout_id?: string
          start_time?: string
          end_time?: string | null
          duration?: number | null
          notes?: string | null
          rpe?: number | null
          calories?: number | null
          completed?: boolean
          created_at?: string
        }
      }
      session_exercises: {
        Row: {
          id: string
          session_id: string
          exercise_id: string
          sets: Json
          notes: string | null
        }
        Insert: {
          id?: string
          session_id: string
          exercise_id: string
          sets: Json
          notes?: string | null
        }
        Update: {
          id?: string
          session_id?: string
          exercise_id?: string
          sets?: Json
          notes?: string | null
        }
      }
      foods: {
        Row: {
          id: string
          name: string
          brand: string | null
          barcode: string | null
          serving_size: number
          serving_unit: string
          calories: number
          macros: Json
          micros: Json
          category: string
          is_verified: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          brand?: string | null
          barcode?: string | null
          serving_size: number
          serving_unit: string
          calories: number
          macros: Json
          micros: Json
          category: string
          is_verified?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          brand?: string | null
          barcode?: string | null
          serving_size?: number
          serving_unit?: string
          calories?: number
          macros?: Json
          micros?: Json
          category?: string
          is_verified?: boolean
          created_at?: string
        }
      }
      nutrition_entries: {
        Row: {
          id: string
          user_id: string
          food_id: string
          quantity: number
          meal: 'breakfast' | 'lunch' | 'dinner' | 'snack'
          date: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          food_id: string
          quantity: number
          meal: 'breakfast' | 'lunch' | 'dinner' | 'snack'
          date: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          food_id?: string
          quantity?: number
          meal?: 'breakfast' | 'lunch' | 'dinner' | 'snack'
          date?: string
          created_at?: string
        }
      }
      challenges: {
        Row: {
          id: string
          name: string
          description: string
          type: string
          start_date: string
          end_date: string
          goal: Json
          is_public: boolean
          created_by: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          type: string
          start_date: string
          end_date: string
          goal: Json
          is_public?: boolean
          created_by: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          type?: string
          start_date?: string
          end_date?: string
          goal?: Json
          is_public?: boolean
          created_by?: string
          created_at?: string
        }
      }
      challenge_participants: {
        Row: {
          id: string
          challenge_id: string
          user_id: string
          score: number
          joined_at: string
        }
        Insert: {
          id?: string
          challenge_id: string
          user_id: string
          score?: number
          joined_at?: string
        }
        Update: {
          id?: string
          challenge_id?: string
          user_id?: string
          score?: number
          joined_at?: string
        }
      }
      badges: {
        Row: {
          id: string
          name: string
          description: string
          icon: string
          type: string
          criteria: Json
          rarity: 'common' | 'rare' | 'epic' | 'legendary'
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          icon: string
          type: string
          criteria: Json
          rarity: 'common' | 'rare' | 'epic' | 'legendary'
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          icon?: string
          type?: string
          criteria?: Json
          rarity?: 'common' | 'rare' | 'epic' | 'legendary'
          created_at?: string
        }
      }
      user_badges: {
        Row: {
          id: string
          user_id: string
          badge_id: string
          earned_at: string
        }
        Insert: {
          id?: string
          user_id: string
          badge_id: string
          earned_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          badge_id?: string
          earned_at?: string
        }
      }
      ai_coach_messages: {
        Row: {
          id: string
          user_id: string
          message: string
          response: string
          context: Json
          timestamp: string
        }
        Insert: {
          id?: string
          user_id: string
          message: string
          response: string
          context: Json
          timestamp?: string
        }
        Update: {
          id?: string
          user_id?: string
          message?: string
          response?: string
          context?: Json
          timestamp?: string
        }
      }
      influencers: {
        Row: {
          id: string
          user_id: string
          status: 'pending' | 'approved' | 'rejected'
          social_media: Json
          audience: Json
          commission: number
          referral_code: string
          earnings: Json
          applied_at: string
          approved_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          status: 'pending' | 'approved' | 'rejected'
          social_media: Json
          audience: Json
          commission: number
          referral_code: string
          earnings?: Json
          applied_at?: string
          approved_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          status?: 'pending' | 'approved' | 'rejected'
          social_media?: Json
          audience?: Json
          commission?: number
          referral_code?: string
          earnings?: Json
          applied_at?: string
          approved_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
