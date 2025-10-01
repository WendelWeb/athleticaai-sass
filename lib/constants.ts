// App Configuration
export const APP_CONFIG = {
  name: 'AthleticaAI',
  description: 'Ton corps, optimisé par la science et l\'IA',
  version: '1.0.0',
  url: 'https://athletica.ai',
  supportedLanguages: ['fr', 'en', 'es'],
  defaultLanguage: 'fr',
} as const

// Subscription Plans
export const SUBSCRIPTION_PLANS = {
  BASIC: {
    id: 'basic',
    name: 'Basic',
    price: 9.99,
    currency: 'USD',
    interval: 'month',
    features: [
      'Programmes personnalisés',
      'Suivi des performances',
      'Bibliothèque d\'exercices',
      'Support communautaire'
    ]
  },
  PREMIUM: {
    id: 'premium',
    name: 'Premium',
    price: 19.99,
    currency: 'USD',
    interval: 'month',
    features: [
      'Tout du plan Basic',
      'Coaching IA 24/7',
      'Plans nutrition personnalisés',
      'Analyse vidéo IA',
      'Suivi avancé'
    ]
  },
  PRO: {
    id: 'pro',
    name: 'Pro',
    price: 29.99,
    currency: 'USD',
    interval: 'month',
    features: [
      'Tout du plan Premium',
      'Communauté VIP',
      'Coaching personnel',
      'Accès anticipé aux nouvelles fonctionnalités',
      'Support prioritaire'
    ]
  }
} as const

// Fitness Goals
export const FITNESS_GOALS = {
  WEIGHT_LOSS: 'weight_loss',
  MUSCLE_GAIN: 'muscle_gain',
  STRENGTH: 'strength',
  ENDURANCE: 'endurance',
  FLEXIBILITY: 'flexibility',
  GENERAL_FITNESS: 'general_fitness',
  REHABILITATION: 'rehabilitation',
  SPORTS_SPECIFIC: 'sports_specific'
} as const

// Exercise Categories
export const EXERCISE_CATEGORIES = {
  STRENGTH: 'strength',
  CARDIO: 'cardio',
  FLEXIBILITY: 'flexibility',
  BALANCE: 'balance',
  PLYOMETRIC: 'plyometric',
  FUNCTIONAL: 'functional'
} as const

// Muscle Groups
export const MUSCLE_GROUPS = {
  CHEST: 'chest',
  BACK: 'back',
  SHOULDERS: 'shoulders',
  ARMS: 'arms',
  CORE: 'core',
  LEGS: 'legs',
  GLUTES: 'glutes',
  FULL_BODY: 'full_body'
} as const

// Equipment Types
export const EQUIPMENT_TYPES = {
  BODYWEIGHT: 'bodyweight',
  DUMBBELLS: 'dumbbells',
  BARBELL: 'barbell',
  RESISTANCE_BANDS: 'resistance_bands',
  KETTLEBELL: 'kettlebell',
  CABLE_MACHINE: 'cable_machine',
  CARDIO_MACHINE: 'cardio_machine',
  YOGA_MAT: 'yoga_mat',
  PULL_UP_BAR: 'pull_up_bar'
} as const

// Difficulty Levels
export const DIFFICULTY_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  EXPERT: 'expert'
} as const

// Workout Duration Options
export const WORKOUT_DURATIONS = [15, 30, 45, 60, 75, 90] as const

// RPE Scale (Rate of Perceived Exertion)
export const RPE_SCALE = {
  1: 'Très facile',
  2: 'Facile',
  3: 'Modéré',
  4: 'Quelque peu difficile',
  5: 'Difficile',
  6: 'Difficile',
  7: 'Très difficile',
  8: 'Très difficile',
  9: 'Extrêmement difficile',
  10: 'Maximum'
} as const

// Nutrition Macros
export const MACRO_TARGETS = {
  WEIGHT_LOSS: { protein: 0.3, carbs: 0.35, fat: 0.35 },
  MUSCLE_GAIN: { protein: 0.25, carbs: 0.45, fat: 0.3 },
  MAINTENANCE: { protein: 0.2, carbs: 0.5, fat: 0.3 },
  KETO: { protein: 0.25, carbs: 0.05, fat: 0.7 }
} as const

// Activity Levels
export const ACTIVITY_LEVELS = {
  SEDENTARY: { multiplier: 1.2, label: 'Sédentaire' },
  LIGHTLY_ACTIVE: { multiplier: 1.375, label: 'Légèrement actif' },
  MODERATELY_ACTIVE: { multiplier: 1.55, label: 'Modérément actif' },
  VERY_ACTIVE: { multiplier: 1.725, label: 'Très actif' },
  EXTREMELY_ACTIVE: { multiplier: 1.9, label: 'Extrêmement actif' }
} as const

// Badge Types
export const BADGE_TYPES = {
  STREAK: 'streak',
  ACHIEVEMENT: 'achievement',
  MILESTONE: 'milestone',
  SOCIAL: 'social',
  SPECIAL: 'special'
} as const

// Challenge Types
export const CHALLENGE_TYPES = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  CUSTOM: 'custom'
} as const
