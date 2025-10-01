'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Clock, 
  Target, 
  Dumbbell,
  Play,
  Bookmark,
  Star,
  Users
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const workoutCategories = [
  { id: 'all', label: 'Tous', count: 150 },
  { id: 'cardio', label: 'Cardio', count: 45 },
  { id: 'strength', label: 'Force', count: 60 },
  { id: 'flexibility', label: 'Souplesse', count: 25 },
  { id: 'hiit', label: 'HIIT', count: 20 },
]

const featuredWorkouts = [
  {
    id: '1',
    title: 'HIIT Brûle-Graisse',
    description: 'Entraînement intense pour maximiser la perte de calories',
    duration: 20,
    difficulty: 'Intermédiaire',
    category: 'Cardio',
    rating: 4.8,
    participants: 1250,
    image: '/api/placeholder/300/200',
    isPopular: true,
  },
  {
    id: '2',
    title: 'Force Complète',
    description: 'Développement musculaire pour tout le corps',
    duration: 45,
    difficulty: 'Avancé',
    category: 'Force',
    rating: 4.9,
    participants: 890,
    image: '/api/placeholder/300/200',
    isNew: true,
  },
  {
    id: '3',
    title: 'Yoga Flow',
    description: 'Séance relaxante pour améliorer la flexibilité',
    duration: 30,
    difficulty: 'Débutant',
    category: 'Souplesse',
    rating: 4.7,
    participants: 2100,
    image: '/api/placeholder/300/200',
  },
]

export default function WorkoutsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white">
        <div className="mobile-container py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-display text-white mb-4">
              Entraînements
            </h1>
            <p className="text-body text-white/80 max-w-2xl mx-auto">
              Découvre des programmes personnalisés créés par notre IA pour atteindre tes objectifs
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mobile-container py-6">
        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un entraînement..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filtres
            </Button>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {workoutCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.label}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Featured Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-title mb-4">Recommandés pour toi</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorkouts.map((workout, index) => (
              <motion.div
                key={workout.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="saas-card-elevated overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-secondary rounded-t-xl" />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {workout.isPopular && (
                        <Badge variant="default" className="bg-orange-500">
                          🔥 Populaire
                        </Badge>
                      )}
                      {workout.isNew && (
                        <Badge variant="default" className="bg-green-500">
                          ✨ Nouveau
                        </Badge>
                      )}
                    </div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="lg" className="rounded-full">
                        <Play className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{workout.title}</h3>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {workout.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {workout.duration}min
                      </span>
                      <span className="flex items-center">
                        <Target className="w-3 h-3 mr-1" />
                        {workout.difficulty}
                      </span>
                      <span className="flex items-center">
                        <Dumbbell className="w-3 h-3 mr-1" />
                        {workout.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs ml-1">{workout.rating}</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Users className="w-3 h-3 mr-1" />
                          {workout.participants}
                        </div>
                      </div>
                      
                      <Button size="sm" className="btn-success">
                        Commencer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quick Start */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <div className="saas-card bg-gradient-primary text-white text-center">
            <h3 className="text-title text-white mb-2">
              Pas le temps de choisir ?
            </h3>
            <p className="text-white/80 mb-4">
              Laisse notre IA créer le programme parfait pour toi
            </p>
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              <Target className="w-4 h-4 mr-2" />
              Entraînement Express
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
