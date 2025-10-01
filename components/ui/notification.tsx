'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface NotificationProps {
  id?: string
  type?: 'success' | 'error' | 'warning' | 'info'
  title: string
  description?: string
  duration?: number
  onClose?: () => void
  action?: {
    label: string
    onClick: () => void
  }
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
}

const styles = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
}

export function Notification({
  type = 'info',
  title,
  description,
  duration = 5000,
  onClose,
  action,
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)
  const Icon = icons[type]

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => onClose?.(), 300)
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => onClose?.(), 300)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={cn(
            'relative flex items-start p-4 rounded-xl border shadow-lg backdrop-blur-sm',
            styles[type]
          )}
        >
          <Icon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm">{title}</h4>
            {description && (
              <p className="text-sm opacity-90 mt-1">{description}</p>
            )}
            
            {action && (
              <button
                onClick={action.onClick}
                className="text-sm font-medium underline mt-2 hover:no-underline"
              >
                {action.label}
              </button>
            )}
          </div>

          <button
            onClick={handleClose}
            className="ml-3 p-1 rounded-lg hover:bg-black/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Notification Container
export function NotificationContainer({ 
  notifications = [],
  position = 'top-right' 
}: {
  notifications: NotificationProps[]
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}) {
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  }

  return (
    <div className={cn(
      'fixed z-50 flex flex-col space-y-3 max-w-sm w-full',
      positionClasses[position]
    )}>
      <AnimatePresence>
        {notifications.map((notification, index) => (
          <Notification
            key={notification.id || index}
            {...notification}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

// Motivational Notification Component
export function MotivationalNotification({
  streak,
  achievement,
  onClose,
}: {
  streak?: number
  achievement?: string
  onClose?: () => void
}) {
  const messages = [
    "🔥 Tu es en feu ! Continue comme ça !",
    "💪 Chaque rep te rapproche de tes objectifs !",
    "⚡ L'énergie que tu mets aujourd'hui, tu la récolteras demain !",
    "🎯 Focus sur le processus, les résultats suivront !",
    "🚀 Tu dépasses tes limites, bravo !",
  ]

  const randomMessage = messages[Math.floor(Math.random() * messages.length)]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      className="bg-gradient-primary text-white p-6 rounded-xl shadow-xl"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">
            {achievement || "Motivation du jour"}
          </h3>
          <p className="text-white/90 mb-4">
            {randomMessage}
          </p>
          
          {streak && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">{streak}</span>
              </div>
              <span className="text-sm text-white/80">
                jours de suite !
              </span>
            </div>
          )}
        </div>
        
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 p-1 rounded-lg hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  )
}

// Progress Notification
export function ProgressNotification({
  title,
  progress,
  target,
  unit = '',
  onClose,
}: {
  title: string
  progress: number
  target: number
  unit?: string
  onClose?: () => void
}) {
  const percentage = Math.min((progress / target) * 100, 100)
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      className="bg-card border border-border/50 p-4 rounded-xl shadow-lg"
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-foreground">{title}</h4>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            {progress}{unit} / {target}{unit}
          </span>
          <span className="font-medium text-primary">
            {Math.round(percentage)}%
          </span>
        </div>
        
        <div className="w-full bg-muted rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="bg-gradient-primary h-2 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}
