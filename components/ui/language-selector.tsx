"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Language, useTranslations } from "@/lib/i18n";

const languages = [
  { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "es" as Language, name: "Español", flag: "🇪🇸" },
];

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  variant?: "default" | "compact";
  className?: string;
}

export function LanguageSelector({
  currentLanguage,
  onLanguageChange,
  variant = "default",
  className,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const currentLang =
    languages.find((lang) => lang.code === currentLanguage) || languages[0];

  const handleLanguageSelect = (language: Language) => {
    onLanguageChange(language);
    setIsOpen(false);
  };

  if (variant === "compact") {
    return (
      <div className={cn("relative", className)}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted transition-colors"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm">{currentLang.flag}</span>
          <ChevronDown
            className={cn(
              "w-3 h-3 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-48 bg-card border border-border/50 rounded-xl shadow-lg z-50"
            >
              <div className="p-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language.code)}
                    className={cn(
                      "w-full flex items-center justify-between p-3 rounded-lg transition-colors text-left",
                      currentLanguage === language.code
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted/50"
                    )}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{language.flag}</span>
                      <span className="font-medium">{language.name}</span>
                    </div>
                    {currentLanguage === language.code && (
                      <Check className="w-4 h-4" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 p-3 rounded-xl border border-border/50 hover:border-border transition-colors bg-card"
      >
        <Globe className="w-5 h-5 text-muted-foreground" />
        <div className="flex items-center space-x-2">
          <span className="text-xl">{currentLang.flag}</span>
          <span className="font-medium">{currentLang.name}</span>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-muted-foreground transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-card border border-border/50 rounded-xl shadow-lg z-50"
          >
            <div className="p-2">
              {languages.map((language) => (
                <motion.button
                  key={language.code}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleLanguageSelect(language.code)}
                  className={cn(
                    "w-full flex items-center justify-between p-4 rounded-lg transition-colors text-left",
                    currentLanguage === language.code
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "hover:bg-muted/50"
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{language.flag}</span>
                    <div>
                      <div className="font-semibold">{language.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {language.code.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  {currentLanguage === language.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                    >
                      <Check className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}

// Language Context Provider
import { createContext, useContext, ReactNode } from "react";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  defaultLanguage = "fr",
}: {
  children: ReactNode;
  defaultLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Hook pour les traductions avec contexte
export function useT() {
  const { language } = useLanguage();
  const translations = useTranslations(language);

  return {
    t: translations,
    language,
  };
}
