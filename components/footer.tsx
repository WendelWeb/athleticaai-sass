import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Produit",
      links: [
        { href: "/features", label: "Fonctionnalités" },
        { href: "/pricing", label: "Tarifs" },
        { href: "/demo", label: "Démo" },
        { href: "/download", label: "Télécharger" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { href: "/about", label: "À propos" },
        { href: "/careers", label: "Carrières" },
        { href: "/press", label: "Presse" },
        { href: "/partners", label: "Partenaires" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/help", label: "Centre d'aide" },
        { href: "/contact", label: "Contact" },
        { href: "/community", label: "Communauté" },
        { href: "/status", label: "Statut" },
      ],
    },
    {
      title: "Légal",
      links: [
        { href: "/privacy", label: "Confidentialité" },
        { href: "/terms", label: "Conditions" },
        { href: "/cookies", label: "Cookies" },
        { href: "/security", label: "Sécurité" },
      ],
    },
  ];

  const socialLinks = [
    {
      href: "https://instagram.com/athleticaai",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://twitter.com/athleticaai",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "https://youtube.com/athleticaai",
      icon: Youtube,
      label: "YouTube",
    },
    {
      href: "https://facebook.com/athleticaai",
      icon: Facebook,
      label: "Facebook",
    },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">
                AthleticaAI
              </span>
            </Link>

            <p className="text-muted-foreground mb-6 max-w-sm">
              L&apos;application fitness #1 au monde. Transforme ton corps avec
              la science et l&apos;IA.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>contact@athletica.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-primary rounded-lg p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Reste informé des dernières nouveautés
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Reçois nos conseils fitness, nouvelles fonctionnalités et offres
              exclusives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ton adresse email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                S&apos;abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} AthleticaAI. Tous droits réservés.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* App Store Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-8 border-t border-border">
          <div className="text-sm text-muted-foreground text-center mb-4 sm:mb-0">
            Télécharge l&apos;app mobile :
          </div>
          <div className="flex gap-4">
            <Link href="#" className="block">
              <Image
                src="/app-store-badge.svg"
                alt="Télécharger sur l'App Store"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <Link href="#" className="block">
              <Image
                src="/google-play-badge.svg"
                alt="Disponible sur Google Play"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
