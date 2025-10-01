import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import {
  MobileNavigation,
  DesktopSidebar,
} from "@/components/navigation/mobile-nav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AthleticaAI - Ton corps, optimisé par la science et l'IA",
  description:
    "L'application fitness #1 au monde. Programmes personnalisés par IA, coaching 24/7, nutrition intégrée et communauté motivante. Transforme ton corps avec la science.",
  keywords:
    "fitness, musculation, IA, coaching, nutrition, sport, santé, transformation physique",
  authors: [{ name: "AthleticaAI Team" }],
  creator: "AthleticaAI",
  publisher: "AthleticaAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  openGraph: {
    title: "AthleticaAI - Ton corps, optimisé par la science et l'IA",
    description:
      "L'application fitness #1 au monde. Programmes personnalisés par IA, coaching 24/7, nutrition intégrée.",
    url: "/",
    siteName: "AthleticaAI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AthleticaAI - Application fitness avec IA",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AthleticaAI - Ton corps, optimisé par la science et l'IA",
    description:
      "L'application fitness #1 au monde. Programmes personnalisés par IA, coaching 24/7.",
    images: ["/og-image.jpg"],
    creator: "@athleticaai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="fr" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#8B5CF6" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="AthleticaAI" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#8B5CF6" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
        </head>
        <body
          className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-background font-sans antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen">
              {/* Desktop Sidebar */}
              <DesktopSidebar />

              {/* Main Content */}
              <div className="flex-1 lg:ml-64">
                <div className="flex min-h-screen flex-col">
                  {/* Top Navigation for landing pages */}
                  <Navigation />

                  {/* Main Content */}
                  <main className="flex-1 pb-20 lg:pb-0">{children}</main>

                  {/* Footer for landing pages */}
                  <Footer />
                </div>
              </div>

              {/* Mobile Navigation */}
              <MobileNavigation />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
