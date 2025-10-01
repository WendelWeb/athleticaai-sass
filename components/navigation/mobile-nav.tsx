"use client";

import { motion } from "framer-motion";
import {
  Home,
  Dumbbell,
  TrendingUp,
  Users,
  User,
  Calendar,
  Target,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

const navItems = [
  {
    id: "home",
    label: "Accueil",
    icon: Home,
    href: "/dashboard",
    color: "text-blue-500",
  },
  {
    id: "workouts",
    label: "Entraînements",
    icon: Dumbbell,
    href: "/workouts",
    color: "text-green-500",
  },
  {
    id: "progress",
    label: "Progrès",
    icon: TrendingUp,
    href: "/progress",
    color: "text-purple-500",
  },
  {
    id: "social",
    label: "Social",
    icon: Users,
    href: "/social",
    color: "text-orange-500",
  },
  {
    id: "profile",
    label: "Profil",
    icon: User,
    href: "/profile",
    color: "text-pink-500",
  },
];

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Bottom Navigation - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="bg-card/95 backdrop-blur-lg border-t border-border/50">
          <div className="grid grid-cols-5 px-2 py-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "mobile-nav-item relative",
                    isActive && "mobile-nav-active"
                  )}
                >
                  <div className="relative">
                    <Icon
                      className={cn(
                        "w-5 h-5 transition-colors duration-200",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    />

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="mobile-nav-indicator"
                        className="absolute -top-1 -left-1 w-7 h-7 bg-primary/20 rounded-lg -z-10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </div>

                  <span
                    className={cn(
                      "text-xs font-medium mt-1 transition-colors duration-200",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spacer for mobile navigation */}
      <div className="h-20 lg:hidden" />
    </>
  );
}

export function DesktopSidebar() {
  const pathname = usePathname();

  const sidebarItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Calendar, label: "Planning", href: "/planning" },
    { icon: Dumbbell, label: "Entraînements", href: "/workouts" },
    { icon: TrendingUp, label: "Progression", href: "/progress" },
    { icon: Target, label: "Objectifs", href: "/goals" },
    { icon: Users, label: "Communauté", href: "/social" },
    { icon: User, label: "Profil", href: "/profile" },
    { icon: Settings, label: "Paramètres", href: "/settings" },
  ];

  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      <div className="flex flex-col flex-grow bg-card border-r border-border/50">
        {/* Logo */}
        <div className="flex items-center h-16 px-6 border-b border-border/50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">AthleticaAI</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}

                {isActive && (
                  <motion.div
                    layoutId="desktop-nav-indicator"
                    className="ml-auto w-2 h-2 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-border/50">
          <SignedIn>
            <UserSection />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-muted/30">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  Invité
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  Connectez-vous
                </p>
              </div>
            </div>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

function UserSection() {
  const { user } = useUser();
  console.log(user);
  console.log("wendel");

  return (
    <div className="flex items-center space-x-3 p-3 rounded-xl bg-muted/30">
      <UserButton
        appearance={{
          elements: {
            avatarBox: "w-10 h-10",
          },
        }}
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground truncate">
          {user?.fullName || user?.firstName || "Utilisateur"}
        </p>
        <p className="text-xs text-muted-foreground truncate">Premium Member</p>
      </div>
      <div className="status-online" />
    </div>
  );
}
