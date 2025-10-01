import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Clock,
  Target,
  Zap,
  Users,
  Play,
  Bookmark,
  BookmarkCheck,
  Star,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface WorkoutCardProps {
  id: string;
  title: string;
  description: string;
  duration: number;
  difficulty: "beginner" | "intermediate" | "advanced" | "expert";
  category: string;
  targetMuscles: string[];
  equipment: string[];
  image?: string;
  rating?: number;
  isBookmarked?: boolean;
  isCompleted?: boolean;
  completedCount?: number;
  className?: string;
  onStart?: () => void;
  onBookmark?: () => void;
}

const difficultyColors = {
  beginner: "bg-green-500",
  intermediate: "bg-yellow-500",
  advanced: "bg-orange-500",
  expert: "bg-red-500",
};

const difficultyLabels = {
  beginner: "Débutant",
  intermediate: "Intermédiaire",
  advanced: "Avancé",
  expert: "Expert",
};

export function WorkoutCard({
  title,
  description,
  duration,
  difficulty,
  category,
  targetMuscles,
  equipment,
  image,
  rating,
  isBookmarked = false,
  isCompleted = false,
  completedCount,
  className,
  onStart,
  onBookmark,
}: WorkoutCardProps) {
  const [bookmarked, setBookmarked] = React.useState(isBookmarked);

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    onBookmark?.();
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card variant="workout" className={cn("overflow-hidden", className)}>
        {/* Image Header */}
        <div className="relative h-48 bg-gradient-primary">
          {image ? (
            <Image
              src={image}
              alt={title}
              width={400}
              height={192}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Target className="w-16 h-16 text-primary-foreground/50" />
            </div>
          )}

          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-black/20 flex items-end justify-between p-4">
            <div className="flex gap-2">
              <Badge variant="secondary" size="sm">
                {category}
              </Badge>
              <Badge
                variant="outline"
                size="sm"
                className={cn(
                  "text-white border-white/50",
                  difficultyColors[difficulty]
                )}
              >
                {difficultyLabels[difficulty]}
              </Badge>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={handleBookmark}
            >
              {bookmarked ? (
                <BookmarkCheck className="w-5 h-5" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg leading-tight mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {description}
              </p>
            </div>

            {rating && (
              <div className="flex items-center gap-1 ml-4">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Workout Stats */}
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duration} min</span>
            </div>

            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4" />
              <span>{targetMuscles.length} groupes</span>
            </div>

            {completedCount && (
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{completedCount}+ complétés</span>
              </div>
            )}
          </div>

          {/* Target Muscles */}
          <div className="mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">
              MUSCLES CIBLÉS
            </p>
            <div className="flex flex-wrap gap-1">
              {targetMuscles.slice(0, 3).map((muscle) => (
                <Badge key={muscle} variant="outline" size="sm">
                  {muscle}
                </Badge>
              ))}
              {targetMuscles.length > 3 && (
                <Badge variant="outline" size="sm">
                  +{targetMuscles.length - 3}
                </Badge>
              )}
            </div>
          </div>

          {/* Equipment */}
          {equipment.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                ÉQUIPEMENT
              </p>
              <div className="flex flex-wrap gap-1">
                {equipment.slice(0, 2).map((item) => (
                  <Badge key={item} variant="secondary" size="sm">
                    {item}
                  </Badge>
                ))}
                {equipment.length > 2 && (
                  <Badge variant="secondary" size="sm">
                    +{equipment.length - 2}
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* Action Button */}
          <Button
            variant={isCompleted ? "outline" : "gradient"}
            className="w-full"
            onClick={onStart}
          >
            <Play className="w-4 h-4 mr-2" />
            {isCompleted ? "Refaire" : "Commencer"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
