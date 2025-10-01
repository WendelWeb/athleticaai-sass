# 🏋️ AthleticaAI - L'App Fitness #1 au Monde

> **Ton corps, optimisé par la science et l'IA**

AthleticaAI est l'application fitness révolutionnaire qui combine intelligence artificielle, science du sport et design premium pour créer l'expérience d'entraînement la plus avancée au monde.

## ✨ Fonctionnalités Principales

### 🧠 IA Générative

- **Programmes personnalisés** créés par l'IA selon tes objectifs, niveau et équipement
- **Adaptation en temps réel** basée sur tes performances et feedback
- **Coaching virtuel 24/7** avec motivation personnalisée

### 📊 Suivi Scientifique

- **Métriques validées** par la recherche sportive
- **Analyse complète** des performances avec RPE, charges, temps
- **Intégration wearables** (Apple Health, Google Fit, montres connectées)

### 🍎 Nutrition Intégrée

- **Plans alimentaires personnalisés** (perte de poids, prise de masse, maintien)
- **Scan codes-barres** et analyse OCR des menus
- **Base de 500 000+ aliments** vérifiés
- **Recettes adaptées** aux macros

### 👥 Communauté & Social

- **Défis entre utilisateurs** avec classements mondiaux
- **Badges et trophées** de progression
- **Groupes privés** par objectif et localisation
- **Système d'influenceurs** avec commissions

### 🌍 Multilingue

- **Support natif** : Français, Anglais, Espagnol
- **Architecture extensible** pour d'autres langues

## 🚀 Stack Technique

### Frontend

- **Next.js 15** avec App Router et Turbopack
- **React 19** avec hooks avancés
- **TypeScript** pour la sécurité des types
- **TailwindCSS 4** avec design system custom
- **Framer Motion** pour animations fluides
- **Radix UI** pour composants accessibles

### Backend & Base de Données

- **Supabase** (PostgreSQL + Auth + Storage)
- **Prisma** ORM pour la gestion des données
- **Redis** pour le cache et sessions
- **AWS S3** + Cloudflare CDN pour les médias

### IA & Machine Learning

- **OpenAI GPT-4/5** pour génération de programmes
- **TensorFlow.js** pour analyse vidéo
- **Algorithmes collaboratifs** pour recommandations

### Paiements & Monétisation

- **Stripe** (principal - 195 pays)
- **PayPal** + Apple Pay + Google Pay
- **Mobile Money** (Afrique), Alipay/WeChat (Asie)

## 💰 Modèle de Monétisation

### Abonnements

- **Basic** - 9,99€/mois : Programmes + suivi
- **Premium** - 19,99€/mois : + IA coaching + nutrition
- **Pro** - 29,99€/mois : + communauté VIP + support prioritaire

### Influenceurs

- **Commission 20-30%** lifetime sur abonnements générés
- **Dashboard dédié** avec analytics et paiements automatiques
- **Formulaire d'application** avec validation manuelle

## 🛠️ Installation & Développement

### Prérequis

- Node.js 18+
- npm ou yarn
- Git

### Installation

```bash
# Cloner le repository
git clone https://github.com/your-username/athleticaai.git
cd athleticaai

# Installer les dépendances
npm install

# Copier les variables d'environnement
cp .env.local.example .env.local

# Configurer les variables d'environnement
# Éditer .env.local avec vos clés API

# Lancer le serveur de développement
npm run dev
```

### Variables d'Environnement

Créez un fichier `.env.local` avec :

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Scripts Disponibles

```bash
# Développement
npm run dev          # Serveur de développement avec Turbopack
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting ESLint

# Base de données
npm run db:generate  # Générer le client Prisma
npm run db:push      # Pousser le schéma vers la DB
npm run db:migrate   # Créer une migration
npm run db:studio    # Interface Prisma Studio

# Tests
npm run test         # Tests unitaires
npm run test:e2e     # Tests end-to-end
npm run test:watch   # Tests en mode watch
```

## 📁 Structure du Projet

```
athleticaai/
├── app/                    # App Router Next.js
│   ├── (auth)/            # Routes d'authentification
│   ├── (dashboard)/       # Dashboard utilisateur
│   ├── api/               # API Routes
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants réutilisables
│   ├── ui/               # Composants UI de base
│   ├── fitness/          # Composants spécifiques fitness
│   ├── navigation.tsx    # Navigation principale
│   └── footer.tsx        # Footer
├── lib/                  # Utilitaires et configurations
│   ├── supabase.ts       # Client Supabase
│   ├── constants.ts      # Constantes de l'app
│   ├── types.ts          # Types TypeScript
│   └── utils.ts          # Fonctions utilitaires
├── hooks/                # Hooks React personnalisés
├── public/               # Assets statiques
└── prisma/               # Schéma et migrations DB
```
