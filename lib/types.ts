// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  dateOfBirth: Date;
  gender: "male" | "female" | "other";
  height: number; // cm
  weight: number; // kg
  activityLevel: keyof typeof import("./constants").ACTIVITY_LEVELS;
  fitnessGoals: string[];
  preferences: UserPreferences;
  subscription: Subscription;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreferences {
  language: "fr" | "en" | "es";
  units: "metric" | "imperial";
  notifications: NotificationSettings;
  privacy: PrivacySettings;
  workoutReminders: boolean;
  nutritionTracking: boolean;
}

export interface NotificationSettings {
  workoutReminders: boolean;
  progressUpdates: boolean;
  socialInteractions: boolean;
  challenges: boolean;
  marketing: boolean;
}

export interface PrivacySettings {
  profileVisibility: "public" | "friends" | "private";
  shareWorkouts: boolean;
  shareProgress: boolean;
  allowFriendRequests: boolean;
}

// Subscription Types
export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: "active" | "canceled" | "past_due" | "unpaid";
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  stripeSubscriptionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Workout Types
export interface Workout {
  id: string;
  userId: string;
  name: string;
  description?: string;
  duration: number; // minutes
  difficulty: keyof typeof import("./constants").DIFFICULTY_LEVELS;
  category: keyof typeof import("./constants").EXERCISE_CATEGORIES;
  targetMuscleGroups: string[];
  equipment: string[];
  exercises: WorkoutExercise[];
  isCustom: boolean;
  isPublic: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkoutExercise {
  id: string;
  exerciseId: string;
  order: number;
  sets: ExerciseSet[];
  restTime: number; // seconds
  notes?: string;
}

export interface ExerciseSet {
  id: string;
  reps?: number;
  weight?: number; // kg
  duration?: number; // seconds
  distance?: number; // meters
  rpe?: number; // 1-10 scale
  completed: boolean;
}

// Exercise Types
export interface Exercise {
  id: string;
  name: string;
  description: string;
  instructions: string[];
  primaryMuscleGroups: string[];
  secondaryMuscleGroups: string[];
  equipment: string[];
  difficulty: keyof typeof import("./constants").DIFFICULTY_LEVELS;
  category: keyof typeof import("./constants").EXERCISE_CATEGORIES;
  videoUrl?: string;
  imageUrls: string[];
  variations: ExerciseVariation[];
  tips: string[];
  commonMistakes: string[];
  isApproved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ExerciseVariation {
  id: string;
  name: string;
  description: string;
  difficulty: keyof typeof import("./constants").DIFFICULTY_LEVELS;
  equipment: string[];
}

// Progress Types
export interface WorkoutSession {
  id: string;
  userId: string;
  workoutId: string;
  startTime: Date;
  endTime?: Date;
  duration?: number; // minutes
  exercises: SessionExercise[];
  notes?: string;
  rpe?: number;
  calories?: number;
  completed: boolean;
  createdAt: Date;
}

export interface SessionExercise {
  id: string;
  exerciseId: string;
  sets: CompletedSet[];
  notes?: string;
}

export interface CompletedSet {
  id: string;
  reps?: number;
  weight?: number;
  duration?: number;
  distance?: number;
  rpe?: number;
  restTime?: number;
}

// Nutrition Types
export interface Food {
  id: string;
  name: string;
  brand?: string;
  barcode?: string;
  servingSize: number;
  servingUnit: string;
  calories: number;
  macros: Macronutrients;
  micros: Micronutrients;
  category: string;
  isVerified: boolean;
  createdAt: Date;
}

export interface Macronutrients {
  protein: number; // grams
  carbs: number; // grams
  fat: number; // grams
  fiber: number; // grams
  sugar: number; // grams
}

export interface Micronutrients {
  sodium: number; // mg
  potassium: number; // mg
  calcium: number; // mg
  iron: number; // mg
  vitaminC: number; // mg
  vitaminD: number; // IU
}

export interface NutritionEntry {
  id: string;
  userId: string;
  foodId: string;
  quantity: number;
  meal: "breakfast" | "lunch" | "dinner" | "snack";
  date: Date;
  createdAt: Date;
}

// Social Types
export interface Challenge {
  id: string;
  name: string;
  description: string;
  type: keyof typeof import("./constants").CHALLENGE_TYPES;
  startDate: Date;
  endDate: Date;
  goal: ChallengeGoal;
  participants: string[]; // user IDs
  leaderboard: LeaderboardEntry[];
  isPublic: boolean;
  createdBy: string;
  createdAt: Date;
}

export interface ChallengeGoal {
  type: "workouts" | "duration" | "calories" | "distance" | "custom";
  target: number;
  unit: string;
}

export interface LeaderboardEntry {
  userId: string;
  score: number;
  rank: number;
  updatedAt: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: keyof typeof import("./constants").BADGE_TYPES;
  criteria: BadgeCriteria;
  rarity: "common" | "rare" | "epic" | "legendary";
  createdAt: Date;
}

export interface BadgeCriteria {
  type: string;
  value: number;
  timeframe?: string;
}

export interface UserBadge {
  id: string;
  userId: string;
  badgeId: string;
  earnedAt: Date;
}

// AI Types
export interface AICoachMessage {
  id: string;
  userId: string;
  message: string;
  response: string;
  context: AIContext;
  timestamp: Date;
}

export interface AIContext {
  currentWorkout?: string;
  recentProgress?: {
    workouts: number;
    calories: number;
    duration: number;
  };
  userGoals?: string[];
  mood?: string;
  energy?: number;
}

// Influencer Types
export interface Influencer {
  id: string;
  userId: string;
  status: "pending" | "approved" | "rejected";
  socialMedia: SocialMediaLinks;
  audience: AudienceMetrics;
  commission: number; // percentage
  referralCode: string;
  earnings: InfluencerEarnings;
  appliedAt: Date;
  approvedAt?: Date;
}

export interface SocialMediaLinks {
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  twitter?: string;
  website?: string;
}

export interface AudienceMetrics {
  followers: number;
  engagement: number;
  demographics: {
    ageGroups: Record<string, number>;
    genderSplit: Record<string, number>;
    locations: Record<string, number>;
  };
}

export interface InfluencerEarnings {
  totalEarnings: number;
  currentMonth: number;
  lastPayout: Date;
  pendingPayout: number;
}
