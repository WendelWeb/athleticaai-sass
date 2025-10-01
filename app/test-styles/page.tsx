"use client";

import { motion } from "framer-motion";
import { Zap, Heart, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TestStylesPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-display gradient-text mb-4">Test des Styles</h1>
          <p className="text-body text-muted-foreground">
            Vérification que tous les styles se chargent correctement
          </p>
        </div>

        {/* Buttons Test */}
        <section className="space-y-4">
          <h2 className="text-headline">Boutons</h2>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary">
              <Zap className="w-4 h-4 mr-2" />
              Bouton Primary
            </Button>
            <Button className="btn-secondary">Bouton Secondary</Button>
            <Button className="btn-success">
              <Heart className="w-4 h-4 mr-2" />
              Bouton Success
            </Button>
            <Button variant="outline">Bouton Outline</Button>
          </div>
        </section>

        {/* Cards Test */}
        <section className="space-y-4">
          <h2 className="text-headline">Cartes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="saas-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Carte SaaS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ceci est une carte avec le style SaaS premium.
                </p>
              </CardContent>
            </Card>

            <Card className="saas-card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Carte Élevée
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Carte avec ombre plus prononcée.
                </p>
              </CardContent>
            </Card>

            <div className="metric-card">
              <h3 className="font-bold text-lg mb-2">Métrique</h3>
              <p className="text-primary-foreground/80">
                Carte avec gradient de fond.
              </p>
            </div>
          </div>
        </section>

        {/* Colors Test */}
        <section className="space-y-4">
          <h2 className="text-headline">Couleurs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-primary text-primary-foreground rounded-xl text-center">
              Primary
            </div>
            <div className="p-4 bg-secondary text-secondary-foreground rounded-xl text-center">
              Secondary
            </div>
            <div className="p-4 bg-muted text-muted-foreground rounded-xl text-center">
              Muted
            </div>
            <div className="p-4 bg-accent text-accent-foreground rounded-xl text-center">
              Accent
            </div>
          </div>
        </section>

        {/* Gradients Test */}
        <section className="space-y-4">
          <h2 className="text-headline">Gradients</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 bg-gradient-primary text-white rounded-xl text-center">
              <h3 className="font-bold">Gradient Primary</h3>
            </div>
            <div className="p-6 bg-gradient-secondary text-white rounded-xl text-center">
              <h3 className="font-bold">Gradient Secondary</h3>
            </div>
            <div className="p-6 bg-gradient-success text-white rounded-xl text-center">
              <h3 className="font-bold">Gradient Success</h3>
            </div>
          </div>
        </section>

        {/* Typography Test */}
        <section className="space-y-4">
          <h2 className="text-headline">Typographie</h2>
          <div className="space-y-4">
            <h1 className="text-display">Display Text</h1>
            <h2 className="text-headline">Headline Text</h2>
            <h3 className="text-title">Title Text</h3>
            <p className="text-body">
              Body text avec une longueur normale pour tester la lisibilité et
              l&apos;espacement des lignes.
            </p>
            <p className="text-sm text-muted-foreground">
              Texte secondaire plus petit.
            </p>
          </div>
        </section>

        {/* Animations Test */}
        <section className="space-y-4">
          <h2 className="text-headline">Animations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="saas-card text-center"
            >
              <h3 className="font-semibold mb-2">Animation Framer Motion</h3>
              <p className="text-muted-foreground">
                Fade in avec translation Y
              </p>
            </motion.div>

            <div className="saas-card text-center">
              <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-4 animate-pulse" />
              <h3 className="font-semibold mb-2">Animation CSS</h3>
              <p className="text-muted-foreground">Pulse avec Tailwind</p>
            </div>
          </div>
        </section>

        {/* Mobile Navigation Test */}
        <section className="space-y-4">
          <h2 className="text-headline">Navigation Mobile</h2>
          <div className="flex gap-2">
            <div className="mobile-nav-item mobile-nav-active">
              <Zap className="w-5 h-5" />
              <span className="text-xs">Actif</span>
            </div>
            <div className="mobile-nav-item">
              <Heart className="w-5 h-5" />
              <span className="text-xs">Inactif</span>
            </div>
          </div>
        </section>

        {/* Status */}
        <section className="text-center py-8">
          <Badge variant="default" className="bg-green-500">
            ✅ Tous les styles se chargent correctement !
          </Badge>
        </section>
      </div>
    </div>
  );
}
