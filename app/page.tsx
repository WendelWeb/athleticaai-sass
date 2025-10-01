"use client";

import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  Users,
  Brain,
  Play,
  Star,
  ArrowRight,
  Shield,
  Heart,
  Sparkles,
  Quote,
  CheckCircle,
  Activity,
  Trophy,
  Award,
  Globe,
  Rocket,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Ultra-Convertissante */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-6xl mx-auto">
            {/* Badge de Nouveauté */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 text-sm font-bold rounded-full shadow-lg">
                🚀 Nouveau : IA Générative + 3,500 Études Scientifiques
              </Badge>
            </motion.div>

            {/* Titre Principal Choc */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight"
            >
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Des résultats
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                3x plus rapides
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                grâce à l&apos;IA
              </span>
            </motion.h1>

            {/* Sous-titre avec Preuves Sociales */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto font-medium"
            >
              Plus de{" "}
              <span className="font-bold text-green-600">
                50,000 utilisateurs
              </span>{" "}
              ont déjà transformé leur corps.
              <br className="hidden md:block" />
              Validé par{" "}
              <span className="font-bold text-blue-600">des scientifiques</span>
              , basé sur{" "}
              <span className="font-bold text-purple-600">3,500+ études</span>.
            </motion.p>

            {/* CTA Principal Géant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0">
                  <Sparkles className="w-7 h-7 mr-4" />
                  Commencer Gratuitement
                  <ArrowRight className="w-7 h-7 ml-4" />
                </Button>
              </Link>

              <Link href="/demo">
                <Button
                  variant="outline"
                  className="border-2 border-slate-300 hover:border-slate-400 px-12 py-6 text-xl font-bold rounded-2xl bg-white hover:bg-slate-50"
                >
                  <Play className="w-6 h-6 mr-3" />
                  Voir la Démo
                </Button>
              </Link>
            </motion.div>

            {/* Social Proof Immédiat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500 mb-16"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-3 border-white shadow-lg"
                    ></div>
                  ))}
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="font-bold text-lg">4.9/5</span>
                  <span className="ml-1">(12,847 avis)</span>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-green-500 mr-2" />
                <span className="font-bold">+50k transformations réussies</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-bold">Validé scientifiquement</span>
              </div>
            </motion.div>

            {/* Texte "Sans carte bancaire" */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-500 text-lg font-medium"
            >
              ✅ Commence gratuitement, sans carte bancaire
            </motion.p>
          </div>
        </div>

        {/* Prompt pour image hero */}
        <div className="absolute bottom-4 left-4 text-xs text-slate-400 bg-white/80 p-2 rounded">
          📸 Prompt image : &quot;Athlète souriante en salle de sport moderne,
          lumière naturelle, énergie et performance, style Apple,
          ultra-réaliste&quot;
        </div>
      </section>

      {/* Section Preuves Scientifiques */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Appuyé par +3,500 études
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nos algorithmes analysent les dernières recherches scientifiques
              pour créer le programme parfait pour ton corps et tes objectifs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                stat: "87%",
                desc: "de progression plus rapide",
                icon: TrendingUp,
                color: "green",
              },
              {
                stat: "40%",
                desc: "de réduction des risques cardiaques",
                icon: Heart,
                color: "red",
              },
              {
                stat: "92%",
                desc: "d'utilisateurs atteignent leurs objectifs",
                icon: Target,
                color: "blue",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${item.color}-100 flex items-center justify-center`}
                    >
                      <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                    </div>
                    <div
                      className={`text-5xl font-black text-${item.color}-600 mb-2`}
                    >
                      {item.stat}
                    </div>
                    <p className="text-slate-600 font-medium">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Mockup App */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-black mb-8"
            >
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Ton coach IA personnel
              </span>
            </motion.h2>

            {/* Mockup 3D de l'app */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl max-w-md mx-auto">
                <div className="bg-white rounded-2xl p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">Programme IA</div>
                        <div className="text-sm text-slate-500">
                          Personnalisé pour toi
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Actif</Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-black text-green-600">
                        87%
                      </div>
                      <div className="text-xs text-green-600 font-semibold">
                        Progression
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-black text-blue-600">
                        12
                      </div>
                      <div className="text-xs text-blue-600 font-semibold">
                        Jours
                      </div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-black text-purple-600">
                        2.1kg
                      </div>
                      <div className="text-xs text-purple-600 font-semibold">
                        Perdus
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prompt pour image mockup */}
              <div className="text-center mt-4 text-xs text-slate-400">
                📱 Prompt image : &quot;Mockup 3D ultra-réaliste d&apos;iPhone
                15 Pro avec app de fitness, interface moderne gradients
                verts/bleus, statistiques progression, fond lumineux style
                Apple, rendu 3D professionnel&quot;
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Témoignages & Transformations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                +50,000 transformations
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Rejoins des milliers de personnes qui ont déjà transformé leur vie
              avec AthleticaAI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah M.",
                result: "-12kg en 3 mois",
                quote:
                  "L'IA a créé le programme parfait pour mon emploi du temps chargé. Résultats incroyables !",
                image: "👩‍💼",
              },
              {
                name: "Thomas L.",
                result: "+8kg de muscle",
                quote:
                  "Jamais eu de coach aussi précis. L'app s'adapte à mes progrès en temps réel.",
                image: "👨‍💻",
              },
              {
                name: "Marie K.",
                result: "Marathon en 3h45",
                quote:
                  "De zéro à marathon grâce aux programmes IA personnalisés. Incroyable !",
                image: "👩‍🏃",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{testimonial.image}</div>
                      <div>
                        <div className="font-bold text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-green-600 font-semibold">
                          {testimonial.result}
                        </div>
                      </div>
                    </div>
                    <Quote className="w-6 h-6 text-slate-300 mb-2" />
                    <p className="text-slate-600 italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Prompt pour images témoignages */}
          <div className="text-center mt-8 text-xs text-slate-400">
            📸 Prompt images : &quot;Photos avant/après transformations fitness
            réalistes, personnes souriantes, résultats visibles, style
            documentaire professionnel, éclairage naturel&quot;
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités IA */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Ton coach, nutritionniste
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                et médecin réunis
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "IA Générative",
                desc: "Programmes créés spécialement pour ton corps et tes objectifs",
                color: "purple",
              },
              {
                icon: Activity,
                title: "Analyse Temps Réel",
                desc: "Suivi de tes performances, sommeil, calories et santé",
                color: "green",
              },
              {
                icon: Target,
                title: "Nutrition Optimisée",
                desc: "Recommandations alimentaires et suppléments personnalisés",
                color: "blue",
              },
              {
                icon: Trophy,
                title: "Coaching 24/7",
                desc: "Assistant virtuel disponible à tout moment pour te motiver",
                color: "orange",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${feature.color}-100 flex items-center justify-center`}
                    >
                      <feature.icon
                        className={`w-8 h-8 text-${feature.color}-600`}
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Avantages Santé */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Santé & Longévité
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Plus qu&apos;une transformation physique, investis dans ta santé à
              long terme
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Santé Cardiovasculaire",
                desc: "Réduction des risques de maladies cardiaques et amélioration de la circulation",
                benefit: "-40% risques cardiaques",
              },
              {
                icon: Zap,
                title: "Énergie & Vitalité",
                desc: "Boost d'énergie prouvé scientifiquement, fini la fatigue chronique",
                benefit: "+200% d'énergie",
              },
              {
                icon: Shield,
                title: "Prévention Burn-out",
                desc: "Gestion du stress et prévention de l'épuisement professionnel",
                benefit: "-60% stress quotidien",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-100 flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="font-bold text-xl mb-4">{benefit.title}</h3>
                    <p className="text-slate-600 mb-4">{benefit.desc}</p>
                    <Badge className="bg-green-100 text-green-700 font-bold">
                      {benefit.benefit}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Social Proof & Confiance */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Recommandé par les experts
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Les meilleurs coachs et athlètes internationaux nous font
              confiance
            </p>
          </motion.div>

          {/* Logos partenaires fictifs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {[
              "🏥 Harvard Medical",
              "🏃‍♂️ Nike Training",
              "🧬 Stanford Research",
              "🏆 Olympic Committee",
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-slate-600">
                      {partner}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Shield, text: "Certifié ISO 27001" },
              { icon: Award, text: "Approuvé FDA" },
              { icon: Globe, text: "Standard WHO" },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg"
              >
                <cert.icon className="w-5 h-5 text-green-600 mr-2" />
                <span className="font-semibold text-slate-700">
                  {cert.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pricing Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Commence gratuitement
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Aucune carte bancaire requise. Upgrade quand tu veux pour
              débloquer tout le potentiel.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                plan: "Gratuit",
                price: "0€",
                features: [
                  "Programme IA de base",
                  "Suivi basique",
                  "Communauté",
                ],
                cta: "Commencer",
                popular: false,
              },
              {
                plan: "Premium",
                price: "19.99€",
                features: [
                  "IA Avancée",
                  "Nutrition personnalisée",
                  "Coach 24/7",
                  "Analyses détaillées",
                ],
                cta: "Essayer 7 jours",
                popular: true,
              },
              {
                plan: "Pro",
                price: "29.99€",
                features: [
                  "Tout Premium +",
                  "Programmes experts",
                  "Suivi médical",
                  "Support prioritaire",
                ],
                cta: "Essayer 7 jours",
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 font-bold">
                      ⭐ Plus Populaire
                    </Badge>
                  </div>
                )}
                <Card
                  className={`p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full ${
                    plan.popular ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <CardContent className="p-0 text-center">
                    <h3 className="font-bold text-2xl mb-2">{plan.plan}</h3>
                    <div className="text-4xl font-black mb-6">
                      {plan.price}
                      <span className="text-lg text-slate-500">/mois</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center justify-center"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full py-3 font-bold rounded-xl ${
                        plan.popular
                          ? "bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600"
                          : "border-2 border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 text-slate-500"
          >
            💡 La version Premium peut augmenter tes résultats de{" "}
            <span className="font-bold text-green-600">+200%</span>
          </motion.p>
        </div>
      </section>

      {/* CTA Final Ultra-Motivant */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Transforme-toi.
              </span>
              <br />
              <span className="text-white">Suivi. Motivation. Résultats.</span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
              Rejoins les{" "}
              <span className="font-bold text-green-400">
                50,000+ personnes
              </span>{" "}
              qui ont déjà pris le contrôle de leur santé.
              <br className="hidden md:block" />
              <span className="font-bold">Ton futur toi te remerciera.</span>
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 text-white px-16 py-8 text-2xl font-black rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0">
                  <Rocket className="w-8 h-8 mr-4" />
                  Je commence mon changement dès aujourd&apos;hui
                  <Sparkles className="w-8 h-8 ml-4" />
                </Button>
              </Link>
            </motion.div>

            <p className="text-slate-400 text-lg">
              ✅ Gratuit • ✅ Sans engagement • ✅ Résultats garantis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Complet */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                AthleticaAI
              </h3>
              <p className="text-slate-400">
                L&apos;app que même les influenceurs utilisent pour progresser.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produit</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/features" className="hover:text-white">
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="hover:text-white">
                    Démo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Aide
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    CGU
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © 2024 AthleticaAI. Tous droits réservés.
            </p>

            {/* Badge multilingue */}
            <div className="flex items-center space-x-4">
              <span className="text-slate-400">Disponible en :</span>
              <div className="flex space-x-2">
                <Badge
                  variant="outline"
                  className="border-slate-600 text-slate-300"
                >
                  🇫🇷 FR
                </Badge>
                <Badge
                  variant="outline"
                  className="border-slate-600 text-slate-300"
                >
                  🇺🇸 EN
                </Badge>
                <Badge
                  variant="outline"
                  className="border-slate-600 text-slate-300"
                >
                  🇪🇸 ES
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
