export type Language = "fr" | "en" | "es";

export interface Translations {
  // Navigation
  nav: {
    home: string;
    workouts: string;
    progress: string;
    social: string;
    profile: string;
    dashboard: string;
    planning: string;
    goals: string;
    community: string;
    settings: string;
  };

  // Common
  common: {
    start: string;
    continue: string;
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    loading: string;
    error: string;
    success: string;
    warning: string;
    info: string;
    close: string;
    back: string;
    next: string;
    previous: string;
    finish: string;
    search: string;
    filter: string;
    all: string;
    new: string;
    popular: string;
    recommended: string;
  };

  // Auth
  auth: {
    login: string;
    signup: string;
    logout: string;
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    forgotPassword: string;
    rememberMe: string;
    createAccount: string;
    alreadyHaveAccount: string;
    noAccount: string;
    signInWith: string;
    signUpWith: string;
  };

  // Dashboard
  dashboard: {
    welcome: string;
    readyForWorkout: string;
    todaysWorkouts: string;
    recentActivity: string;
    weeklyProgress: string;
    achievements: string;
    quickActions: string;
    streak: string;
    newSession: string;
  };

  // Workouts
  workouts: {
    title: string;
    description: string;
    duration: string;
    difficulty: string;
    category: string;
    equipment: string;
    rating: string;
    participants: string;
    bookmark: string;
    startWorkout: string;
    aiPersonalized: string;
    quickStart: string;
    noTimeToChoose: string;
    letAiCreate: string;
    expressWorkout: string;
  };

  // Progress
  progress: {
    title: string;
    description: string;
    weeklyOverview: string;
    bodyMetrics: string;
    currentGoals: string;
    achievements: string;
    health: string;
    weight: string;
    muscleMass: string;
    bodyFat: string;
    waistSize: string;
    heartRate: string;
    sleep: string;
    hydration: string;
    stress: string;
    low: string;
    moderate: string;
    high: string;
  };

  // Fitness
  fitness: {
    beginner: string;
    intermediate: string;
    advanced: string;
    cardio: string;
    strength: string;
    flexibility: string;
    hiit: string;
    yoga: string;
    pilates: string;
    running: string;
    cycling: string;
    swimming: string;
    weightLifting: string;
    bodyweight: string;
    crossfit: string;
  };

  // Onboarding
  onboarding: {
    welcome: string;
    personalInfo: string;
    goals: string;
    experience: string;
    availability: string;
    equipment: string;
    health: string;
    motivation: string;
    age: string;
    gender: string;
    height: string;
    weight: string;
    male: string;
    female: string;
    other: string;
    primaryGoal: string;
    weightLoss: string;
    muscleGain: string;
    strengthGain: string;
    enduranceImprovement: string;
    flexibilityGain: string;
    generalFitness: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      workouts: "Entraînements",
      progress: "Progrès",
      social: "Social",
      profile: "Profil",
      dashboard: "Dashboard",
      planning: "Planning",
      goals: "Objectifs",
      community: "Communauté",
      settings: "Paramètres",
    },
    common: {
      start: "Commencer",
      continue: "Continuer",
      save: "Sauvegarder",
      cancel: "Annuler",
      delete: "Supprimer",
      edit: "Modifier",
      loading: "Chargement...",
      error: "Erreur",
      success: "Succès",
      warning: "Attention",
      info: "Information",
      close: "Fermer",
      back: "Retour",
      next: "Suivant",
      previous: "Précédent",
      finish: "Terminer",
      search: "Rechercher",
      filter: "Filtrer",
      all: "Tous",
      new: "Nouveau",
      popular: "Populaire",
      recommended: "Recommandé",
    },
    auth: {
      login: "Se connecter",
      signup: "S'inscrire",
      logout: "Se déconnecter",
      email: "Email",
      password: "Mot de passe",
      confirmPassword: "Confirmer le mot de passe",
      firstName: "Prénom",
      lastName: "Nom",
      forgotPassword: "Mot de passe oublié ?",
      rememberMe: "Se souvenir de moi",
      createAccount: "Créer un compte",
      alreadyHaveAccount: "Déjà un compte ?",
      noAccount: "Pas encore de compte ?",
      signInWith: "Se connecter avec",
      signUpWith: "S'inscrire avec",
    },
    dashboard: {
      welcome: "Salut",
      readyForWorkout: "Prêt pour une nouvelle séance ?",
      todaysWorkouts: "Aujourd'hui",
      recentActivity: "Activité récente",
      weeklyProgress: "Progression cette semaine",
      achievements: "Succès récents",
      quickActions: "Actions rapides",
      streak: "jours",
      newSession: "Nouvelle séance",
    },
    workouts: {
      title: "Entraînements",
      description:
        "Découvre des programmes personnalisés créés par notre IA pour atteindre tes objectifs",
      duration: "Durée",
      difficulty: "Difficulté",
      category: "Catégorie",
      equipment: "Équipement",
      rating: "Note",
      participants: "Participants",
      bookmark: "Sauvegarder",
      startWorkout: "Commencer",
      aiPersonalized: "IA Personnalisé",
      quickStart: "Démarrage rapide",
      noTimeToChoose: "Pas le temps de choisir ?",
      letAiCreate: "Laisse notre IA créer le programme parfait pour toi",
      expressWorkout: "Entraînement Express",
    },
    progress: {
      title: "Tes Progrès",
      description:
        "Suis ton évolution et célèbre chaque victoire sur ton chemin vers tes objectifs",
      weeklyOverview: "Cette semaine",
      bodyMetrics: "Métriques corporelles",
      currentGoals: "Objectifs actuels",
      achievements: "Succès",
      health: "Santé",
      weight: "Poids",
      muscleMass: "Masse musculaire",
      bodyFat: "Masse grasse",
      waistSize: "Tour de taille",
      heartRate: "Fréquence cardiaque",
      sleep: "Sommeil",
      hydration: "Hydratation",
      stress: "Stress",
      low: "Faible",
      moderate: "Modéré",
      high: "Élevé",
    },
    fitness: {
      beginner: "Débutant",
      intermediate: "Intermédiaire",
      advanced: "Avancé",
      cardio: "Cardio",
      strength: "Force",
      flexibility: "Souplesse",
      hiit: "HIIT",
      yoga: "Yoga",
      pilates: "Pilates",
      running: "Course",
      cycling: "Vélo",
      swimming: "Natation",
      weightLifting: "Musculation",
      bodyweight: "Poids du corps",
      crossfit: "CrossFit",
    },
    onboarding: {
      welcome: "Bienvenue",
      personalInfo: "Informations personnelles",
      goals: "Objectifs fitness",
      experience: "Niveau d'expérience",
      availability: "Disponibilité",
      equipment: "Équipement",
      health: "Santé",
      motivation: "Motivation",
      age: "Âge",
      gender: "Genre",
      height: "Taille",
      weight: "Poids",
      male: "Homme",
      female: "Femme",
      other: "Autre",
      primaryGoal: "Objectif principal",
      weightLoss: "Perdre du poids",
      muscleGain: "Prendre du muscle",
      strengthGain: "Gagner en force",
      enduranceImprovement: "Améliorer l'endurance",
      flexibilityGain: "Gagner en souplesse",
      generalFitness: "Forme générale",
    },
  },
  en: {
    nav: {
      home: "Home",
      workouts: "Workouts",
      progress: "Progress",
      social: "Social",
      profile: "Profile",
      dashboard: "Dashboard",
      planning: "Planning",
      goals: "Goals",
      community: "Community",
      settings: "Settings",
    },
    common: {
      start: "Start",
      continue: "Continue",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      warning: "Warning",
      info: "Information",
      close: "Close",
      back: "Back",
      next: "Next",
      previous: "Previous",
      finish: "Finish",
      search: "Search",
      filter: "Filter",
      all: "All",
      new: "New",
      popular: "Popular",
      recommended: "Recommended",
    },
    auth: {
      login: "Login",
      signup: "Sign Up",
      logout: "Logout",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      firstName: "First Name",
      lastName: "Last Name",
      forgotPassword: "Forgot Password?",
      rememberMe: "Remember Me",
      createAccount: "Create Account",
      alreadyHaveAccount: "Already have an account?",
      noAccount: "Don't have an account?",
      signInWith: "Sign in with",
      signUpWith: "Sign up with",
    },
    dashboard: {
      welcome: "Hi",
      readyForWorkout: "Ready for a new workout?",
      todaysWorkouts: "Today",
      recentActivity: "Recent Activity",
      weeklyProgress: "Weekly Progress",
      achievements: "Recent Achievements",
      quickActions: "Quick Actions",
      streak: "days",
      newSession: "New Session",
    },
    workouts: {
      title: "Workouts",
      description:
        "Discover personalized programs created by our AI to reach your goals",
      duration: "Duration",
      difficulty: "Difficulty",
      category: "Category",
      equipment: "Equipment",
      rating: "Rating",
      participants: "Participants",
      bookmark: "Bookmark",
      startWorkout: "Start",
      aiPersonalized: "AI Personalized",
      quickStart: "Quick Start",
      noTimeToChoose: "No time to choose?",
      letAiCreate: "Let our AI create the perfect program for you",
      expressWorkout: "Express Workout",
    },
    progress: {
      title: "Your Progress",
      description:
        "Track your evolution and celebrate every victory on your path to your goals",
      weeklyOverview: "This Week",
      bodyMetrics: "Body Metrics",
      currentGoals: "Current Goals",
      achievements: "Achievements",
      health: "Health",
      weight: "Weight",
      muscleMass: "Muscle Mass",
      bodyFat: "Body Fat",
      waistSize: "Waist Size",
      heartRate: "Heart Rate",
      sleep: "Sleep",
      hydration: "Hydration",
      stress: "Stress",
      low: "Low",
      moderate: "Moderate",
      high: "High",
    },
    fitness: {
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      cardio: "Cardio",
      strength: "Strength",
      flexibility: "Flexibility",
      hiit: "HIIT",
      yoga: "Yoga",
      pilates: "Pilates",
      running: "Running",
      cycling: "Cycling",
      swimming: "Swimming",
      weightLifting: "Weight Lifting",
      bodyweight: "Bodyweight",
      crossfit: "CrossFit",
    },
    onboarding: {
      welcome: "Welcome",
      personalInfo: "Personal Information",
      goals: "Fitness Goals",
      experience: "Experience Level",
      availability: "Availability",
      equipment: "Equipment",
      health: "Health",
      motivation: "Motivation",
      age: "Age",
      gender: "Gender",
      height: "Height",
      weight: "Weight",
      male: "Male",
      female: "Female",
      other: "Other",
      primaryGoal: "Primary Goal",
      weightLoss: "Lose Weight",
      muscleGain: "Gain Muscle",
      strengthGain: "Gain Strength",
      enduranceImprovement: "Improve Endurance",
      flexibilityGain: "Gain Flexibility",
      generalFitness: "General Fitness",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      workouts: "Entrenamientos",
      progress: "Progreso",
      social: "Social",
      profile: "Perfil",
      dashboard: "Panel",
      planning: "Planificación",
      goals: "Objetivos",
      community: "Comunidad",
      settings: "Configuración",
    },
    common: {
      start: "Comenzar",
      continue: "Continuar",
      save: "Guardar",
      cancel: "Cancelar",
      delete: "Eliminar",
      edit: "Editar",
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      warning: "Advertencia",
      info: "Información",
      close: "Cerrar",
      back: "Atrás",
      next: "Siguiente",
      previous: "Anterior",
      finish: "Terminar",
      search: "Buscar",
      filter: "Filtrar",
      all: "Todos",
      new: "Nuevo",
      popular: "Popular",
      recommended: "Recomendado",
    },
    auth: {
      login: "Iniciar Sesión",
      signup: "Registrarse",
      logout: "Cerrar Sesión",
      email: "Email",
      password: "Contraseña",
      confirmPassword: "Confirmar Contraseña",
      firstName: "Nombre",
      lastName: "Apellido",
      forgotPassword: "¿Olvidaste tu contraseña?",
      rememberMe: "Recordarme",
      createAccount: "Crear Cuenta",
      alreadyHaveAccount: "¿Ya tienes una cuenta?",
      noAccount: "¿No tienes una cuenta?",
      signInWith: "Iniciar sesión con",
      signUpWith: "Registrarse con",
    },
    dashboard: {
      welcome: "Hola",
      readyForWorkout: "¿Listo para un nuevo entrenamiento?",
      todaysWorkouts: "Hoy",
      recentActivity: "Actividad Reciente",
      weeklyProgress: "Progreso Semanal",
      achievements: "Logros Recientes",
      quickActions: "Acciones Rápidas",
      streak: "días",
      newSession: "Nueva Sesión",
    },
    workouts: {
      title: "Entrenamientos",
      description:
        "Descubre programas personalizados creados por nuestra IA para alcanzar tus objetivos",
      duration: "Duración",
      difficulty: "Dificultad",
      category: "Categoría",
      equipment: "Equipamiento",
      rating: "Calificación",
      participants: "Participantes",
      bookmark: "Guardar",
      startWorkout: "Comenzar",
      aiPersonalized: "IA Personalizada",
      quickStart: "Inicio Rápido",
      noTimeToChoose: "¿No tienes tiempo para elegir?",
      letAiCreate: "Deja que nuestra IA cree el programa perfecto para ti",
      expressWorkout: "Entrenamiento Express",
    },
    progress: {
      title: "Tu Progreso",
      description:
        "Sigue tu evolución y celebra cada victoria en tu camino hacia tus objetivos",
      weeklyOverview: "Esta Semana",
      bodyMetrics: "Métricas Corporales",
      currentGoals: "Objetivos Actuales",
      achievements: "Logros",
      health: "Salud",
      weight: "Peso",
      muscleMass: "Masa Muscular",
      bodyFat: "Grasa Corporal",
      waistSize: "Cintura",
      heartRate: "Frecuencia Cardíaca",
      sleep: "Sueño",
      hydration: "Hidratación",
      stress: "Estrés",
      low: "Bajo",
      moderate: "Moderado",
      high: "Alto",
    },
    fitness: {
      beginner: "Principiante",
      intermediate: "Intermedio",
      advanced: "Avanzado",
      cardio: "Cardio",
      strength: "Fuerza",
      flexibility: "Flexibilidad",
      hiit: "HIIT",
      yoga: "Yoga",
      pilates: "Pilates",
      running: "Correr",
      cycling: "Ciclismo",
      swimming: "Natación",
      weightLifting: "Levantamiento de Pesas",
      bodyweight: "Peso Corporal",
      crossfit: "CrossFit",
    },
    onboarding: {
      welcome: "Bienvenido",
      personalInfo: "Información Personal",
      goals: "Objetivos de Fitness",
      experience: "Nivel de Experiencia",
      availability: "Disponibilidad",
      equipment: "Equipamiento",
      health: "Salud",
      motivation: "Motivación",
      age: "Edad",
      gender: "Género",
      height: "Altura",
      weight: "Peso",
      male: "Masculino",
      female: "Femenino",
      other: "Otro",
      primaryGoal: "Objetivo Principal",
      weightLoss: "Perder Peso",
      muscleGain: "Ganar Músculo",
      strengthGain: "Ganar Fuerza",
      enduranceImprovement: "Mejorar Resistencia",
      flexibilityGain: "Ganar Flexibilidad",
      generalFitness: "Fitness General",
    },
  },
};

// Hook pour utiliser les traductions
export function useTranslations(language: Language = "fr") {
  return translations[language];
}

// Fonction utilitaire pour obtenir une traduction
export function t(key: string, language: Language = "fr"): string {
  const keys = key.split(".");
  let value: unknown = translations[language];

  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }

  return typeof value === "string" ? value : key;
}
