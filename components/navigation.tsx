"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "/features", label: "Fonctionnalités" },
    { href: "/pricing", label: "Tarifs" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  const themeOptions = [
    { value: "light", icon: Sun, label: "Clair" },
    { value: "dark", icon: Moon, label: "Sombre" },
    { value: "system", icon: Monitor, label: "Système" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">AthleticaAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Switcher */}
            <div className="relative group">
              <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                {theme === "light" && <Sun className="w-5 h-5" />}
                {theme === "dark" && <Moon className="w-5 h-5" />}
                {theme === "system" && <Monitor className="w-5 h-5" />}
              </button>

              <div className="absolute right-0 top-full mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setTheme(option.value)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    <option.icon className="w-4 h-4" />
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                  Connexion
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="btn-primary">Commencer</button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  },
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border/40 py-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="border-t border-border/40 pt-4 space-y-4">
                  {/* Theme Switcher Mobile */}
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      Thème
                    </span>
                    <div className="flex gap-2">
                      {themeOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setTheme(option.value)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                            theme === option.value
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted hover:bg-muted/80"
                          }`}
                        >
                          <option.icon className="w-4 h-4" />
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <SignedOut>
                    <SignInButton mode="modal">
                      <button
                        className="btn-secondary w-full text-center"
                        onClick={() => setIsOpen(false)}
                      >
                        Connexion
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button
                        className="btn-primary w-full text-center"
                        onClick={() => setIsOpen(false)}
                      >
                        Commencer
                      </button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <div className="flex items-center justify-center">
                      <UserButton
                        appearance={{
                          elements: {
                            avatarBox: "w-10 h-10",
                          },
                        }}
                        afterSignOutUrl="/"
                      />
                    </div>
                  </SignedIn>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
