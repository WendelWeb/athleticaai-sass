# 🚀 Guide Complet : Intégration Clerk ↔ Supabase

## ✅ Ce qui a été fait

1. **Schéma de base de données créé** (`supabase/schema.sql`)
2. **Webhook endpoint créé** (`/api/webhooks/clerk`)
3. **Fonctions utilitaires Supabase** (`lib/supabase-admin.ts`)
4. **Hook React pour profil utilisateur** (`hooks/use-user-profile.ts`)
5. **Types TypeScript** (`lib/supabase-types.ts`)
6. **Page de test** (`/test-integration`)

## 🔧 Configuration Étape par Étape

### Étape 1: Configuration Supabase

1. **Créer un projet Supabase**
   - Allez sur [supabase.com](https://supabase.com)
   - Créez un nouveau projet
   - Notez l'URL et les clés API

2. **Exécuter le schéma de base de données**
   - Dans votre dashboard Supabase, allez dans "SQL Editor"
   - Copiez le contenu de `supabase/schema.sql`
   - Exécutez le script

3. **Configurer les variables d'environnement**
   ```bash
   # Dans votre .env.local, remplacez les valeurs par les vraies :
   NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...votre-clé-anon
   SUPABASE_SERVICE_ROLE_KEY=eyJ...votre-clé-service-role
   ```

### Étape 2: Configuration des Webhooks Clerk

1. **Installer ngrok pour le développement local**
   ```bash
   # Téléchargez ngrok depuis https://ngrok.com/download
   # Puis exposez votre serveur local :
   ngrok http 3001
   ```

2. **Configurer le webhook dans Clerk**
   - Dashboard Clerk → Webhooks → Add Endpoint
   - URL: `https://votre-ngrok-url.ngrok.io/api/webhooks/clerk`
   - Events: `user.created`, `user.updated`, `user.deleted`
   - Copiez le "Signing Secret"

3. **Ajouter le secret webhook**
   ```bash
   # Dans .env.local :
   CLERK_WEBHOOK_SECRET=whsec_...votre-secret-webhook
   ```

### Étape 3: Test de l'Intégration

1. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

2. **Tester la page d'intégration**
   - Allez sur `http://localhost:3001/test-integration`
   - Vérifiez les statuts Clerk et Supabase

3. **Tester la synchronisation**
   - Créez un nouveau compte via Clerk
   - Vérifiez que l'utilisateur apparaît dans Supabase
   - Testez les mises à jour de profil

## 🔍 Dépannage

### Problème: "Profil non trouvé" dans Supabase

**Solutions:**
1. Vérifiez que le webhook est correctement configuré
2. Vérifiez les logs de votre serveur Next.js
3. Testez le webhook manuellement
4. Créez l'utilisateur manuellement dans Supabase

### Problème: Erreurs de webhook

**Solutions:**
1. Vérifiez que `CLERK_WEBHOOK_SECRET` est correct
2. Vérifiez que l'URL du webhook est accessible
3. Vérifiez les logs dans le dashboard Clerk

### Problème: Erreurs de base de données

**Solutions:**
1. Vérifiez que le schéma SQL a été exécuté correctement
2. Vérifiez les permissions RLS (Row Level Security)
3. Vérifiez les clés API Supabase

## 📊 Structure de la Base de Données

### Table `users`
- **clerk_id**: ID unique de Clerk
- **email**: Email de l'utilisateur
- **fitness_level**: Niveau de fitness (beginner, intermediate, advanced, expert)
- **primary_goal**: Objectif principal (weight_loss, muscle_gain, etc.)
- **onboarding_completed**: Statut de l'onboarding

### Tables Connexes
- **exercises**: Catalogue d'exercices
- **user_workouts**: Séances d'entraînement des utilisateurs
- **user_progress**: Suivi des progrès
- **user_achievements**: Réalisations des utilisateurs

## 🔐 Sécurité

### Row Level Security (RLS)
- Activé sur toutes les tables utilisateur
- Les utilisateurs ne peuvent voir que leurs propres données
- Utilise les JWT Clerk pour l'authentification

### Permissions
- **anon key**: Lecture publique limitée
- **service_role key**: Accès admin pour les webhooks
- **JWT tokens**: Authentification utilisateur

## 🚀 Prochaines Étapes

1. **Finaliser l'onboarding**
   - Créer le formulaire d'onboarding
   - Sauvegarder les données fitness dans Supabase

2. **Dashboard personnalisé**
   - Afficher les données utilisateur réelles
   - Intégrer les métriques de fitness

3. **Gestion des workouts**
   - Créer/modifier des séances d'entraînement
   - Suivre les progrès

## 📝 Commandes Utiles

```bash
# Démarrer le serveur de développement
npm run dev

# Exposer le serveur local avec ngrok
ngrok http 3001

# Vérifier les logs du webhook
# Regardez la console de votre serveur Next.js

# Tester l'API webhook manuellement
curl -X POST http://localhost:3001/api/webhooks/clerk \
  -H "Content-Type: application/json" \
  -d '{"test": true}'
```

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifiez les logs de votre serveur Next.js
2. Vérifiez les logs dans le dashboard Clerk
3. Vérifiez les logs dans le dashboard Supabase
4. Utilisez la page `/test-integration` pour diagnostiquer

L'intégration est maintenant prête ! 🎉
