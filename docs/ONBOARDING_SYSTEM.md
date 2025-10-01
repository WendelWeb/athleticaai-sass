# 🎯 Système d'Onboarding Intelligent

Ce système détecte automatiquement les nouveaux utilisateurs et les guide vers le processus d'onboarding, tout en laissant tranquilles les utilisateurs existants.

## 🚀 Fonctionnalités

### ✅ Détection automatique des nouveaux utilisateurs
- Les nouveaux utilisateurs sont automatiquement marqués avec `onboarding_completed: false`
- Les utilisateurs existants sont considérés comme ayant déjà complété l'onboarding

### ✅ Redirection intelligente
- Redirection automatique vers `/onboarding` pour les nouveaux utilisateurs
- Pages exemptées : `/onboarding`, `/auth/*`, `/sign-*`, `/api/*`, `/debug-env`, `/diagnostic`
- Les utilisateurs expérimentés ne sont jamais dérangés

### ✅ Interface utilisateur intuitive
- Banner d'onboarding dismissible dans le dashboard
- Indicateurs de progression visuels
- États de chargement et gestion d'erreurs

## 📁 Structure des fichiers

```
├── hooks/
│   └── useOnboardingStatus.ts          # Hook pour vérifier le statut d'onboarding
├── components/onboarding/
│   ├── OnboardingGuard.tsx             # Composant de redirection automatique
│   └── OnboardingBanner.tsx            # Banner pour le dashboard
├── app/
│   ├── layout.tsx                      # Intégration du OnboardingGuard
│   ├── onboarding/page.tsx             # Page d'onboarding mise à jour
│   ├── dashboard/page.tsx              # Dashboard avec banner
│   └── api/webhooks/clerk/route.ts     # Webhook mis à jour
└── sql/
    └── add_onboarding_column.sql       # Script SQL pour la base de données
```

## 🛠️ Installation

### 1. Mise à jour de la base de données

Exécutez le script SQL dans votre dashboard Supabase :

```sql
-- Ajouter la colonne onboarding_completed
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT false;

-- Marquer les utilisateurs existants comme ayant complété l'onboarding
UPDATE users 
SET onboarding_completed = true 
WHERE onboarding_completed IS NULL;
```

### 2. Variables d'environnement

Assurez-vous que ces variables sont configurées dans `.env.local` :

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
```

### 3. Configuration Clerk

Configurez le webhook Clerk pour pointer vers `/api/webhooks/clerk` avec les événements :
- `user.created`
- `user.updated`
- `user.deleted`

## 🎮 Utilisation

### Hook useOnboardingStatus

```tsx
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";

function MyComponent() {
  const { isLoading, needsOnboarding, userProfile, error } = useOnboardingStatus();
  
  if (needsOnboarding) {
    return <div>Veuillez compléter votre onboarding</div>;
  }
  
  return <div>Bienvenue !</div>;
}
```

### Hook useCompleteOnboarding

```tsx
import { useCompleteOnboarding } from "@/hooks/useOnboardingStatus";

function OnboardingForm() {
  const { completeOnboarding } = useCompleteOnboarding();
  
  const handleSubmit = async () => {
    try {
      await completeOnboarding();
      router.push("/dashboard");
    } catch (error) {
      console.error("Erreur:", error);
    }
  };
}
```

### Composant OnboardingBanner

```tsx
import { OnboardingBanner } from "@/components/onboarding/OnboardingBanner";

function Dashboard() {
  return (
    <div>
      <OnboardingBanner />
      {/* Reste du contenu */}
    </div>
  );
}
```

## 🔄 Flux utilisateur

### Nouvel utilisateur
1. **Inscription** → Clerk crée l'utilisateur
2. **Webhook** → Supabase reçoit `user.created` avec `onboarding_completed: false`
3. **Première connexion** → OnboardingGuard détecte `needsOnboarding: true`
4. **Redirection** → Utilisateur redirigé vers `/onboarding`
5. **Completion** → `completeOnboarding()` marque `onboarding_completed: true`
6. **Accès libre** → L'utilisateur peut naviguer normalement

### Utilisateur existant
1. **Connexion** → OnboardingGuard vérifie `onboarding_completed: true`
2. **Accès libre** → Aucune redirection, navigation normale
3. **Banner optionnel** → Peut voir le banner s'il n'a jamais complété l'onboarding

## 🎨 Personnalisation

### Modifier les pages exemptées

```tsx
// Dans OnboardingGuard.tsx
const ONBOARDING_EXEMPT_PAGES = [
  "/onboarding",
  "/auth/login",
  "/auth/signup",
  "/your-custom-page", // Ajouter vos pages
];
```

### Personnaliser le banner

```tsx
// Dans OnboardingBanner.tsx
<Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-blue-500/5">
  {/* Personnaliser le style */}
</Card>
```

## 🐛 Dépannage

### L'utilisateur est toujours redirigé
- Vérifiez que `onboarding_completed` est bien `true` dans Supabase
- Vérifiez que le `clerk_id` correspond entre Clerk et Supabase

### Le banner ne s'affiche pas
- Vérifiez que `OnboardingBanner` est bien importé dans votre composant
- Vérifiez que l'utilisateur a bien `onboarding_completed: false`

### Erreurs de webhook
- Vérifiez que `CLERK_WEBHOOK_SECRET` est correct
- Vérifiez que l'endpoint `/api/webhooks/clerk` est accessible
- Consultez les logs Clerk et Supabase

## 📊 Métriques

Vous pouvez suivre l'efficacité de votre onboarding avec ces requêtes :

```sql
-- Taux de completion d'onboarding
SELECT 
  COUNT(*) FILTER (WHERE onboarding_completed = true) * 100.0 / COUNT(*) as completion_rate
FROM users;

-- Utilisateurs ayant besoin d'onboarding
SELECT COUNT(*) as pending_onboarding 
FROM users 
WHERE onboarding_completed = false;
```
