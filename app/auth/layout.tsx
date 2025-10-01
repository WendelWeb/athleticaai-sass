import { Zap } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-primary relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl" />
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-white rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-xl" />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-12 text-primary-foreground">
          <Link href="/" className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Zap className="w-7 h-7" />
            </div>
            <span className="text-3xl font-bold">AthleticaAI</span>
          </Link>

          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-6">
              Transforme ton corps avec l&apos;IA
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Rejoins des milliers d&apos;utilisateurs qui ont déjà révolutionné
              leur fitness avec nos programmes personnalisés.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Programmes IA personnalisés</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Coaching 24/7 intelligent</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Nutrition intégrée</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Communauté motivante</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Auth form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16">
        <div className="w-full max-w-md mx-auto">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="inline-flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold gradient-text">
                AthleticaAI
              </span>
            </Link>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
