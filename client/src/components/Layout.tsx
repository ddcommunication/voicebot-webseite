import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import CookieBanner from "./CookieBanner";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Startseite", href: "/" },
    { label: "Lösungen", href: "/loesungen" },
    { label: "Anwendungsbeispiele", href: "/anwendungsbeispiele" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Blog", href: "/blog" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
              <Phone className="h-3 w-3" /> +49 3533 4807-0
            </span>
            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
              <Mail className="h-3 w-3" /> info@zoellner-office.de
            </span>
          </div>
          <div className="flex gap-4 opacity-90">
            <span>Mo-Fr: 08:00 - 18:00 Uhr</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-white"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" x2="12" y1="19" y2="22" />
                </svg>
              </div>
              <span className="text-2xl font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                sprachassistent.net
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <span
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative group cursor-pointer",
                    location === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-full h-0.5 bg-secondary transform scale-x-0 transition-transform group-hover:scale-x-100",
                      location === item.href && "scale-x-100"
                    )}
                  />
                </span>
              </Link>
            ))}
            <Link href="/kontakt">
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold shadow-md hover:shadow-lg transition-all rounded-full px-6"
              >
                Demo anfragen
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background p-4 absolute w-full shadow-lg animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4">
              {navItems.map(item => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={cn(
                      "text-base font-medium p-2 rounded-md hover:bg-muted transition-colors cursor-pointer block",
                      location === item.href
                        ? "text-primary bg-muted/50"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/kontakt">
                <Button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold mt-2"
                >
                  Demo anfragen
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      <CookieBanner />
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-white">
              sprachassistent.net
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Professionelle Voicebot-Lösungen für Unternehmen. Wir
              automatisieren Ihre Telefonie, damit Sie mehr Zeit für das
              Wesentliche haben.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Lösungen</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <Link href="/loesungen">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Telefonzentrale
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/loesungen">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Terminvereinbarung
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/loesungen">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Kundenservice
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/loesungen">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Lead-Qualifizierung
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Unternehmen</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <Link href="/ueber-uns">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Über uns
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Blog & News
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Kontakt
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Kontakt</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 shrink-0" />
                <a href="tel:+4935334807-0" className="hover:text-white transition-colors">+49 3533 4807-0</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 shrink-0" />
                <a href="mailto:info@zoellner-office.de" className="hover:text-white transition-colors">info@zoellner-office.de</a>
              </li>
              <li className="mt-4">
                <Link href="/kontakt">
                  <Button
                    variant="outline"
                    className="border-primary-foreground/20 hover:bg-primary-foreground/10 text-white w-full"
                  >
                    Rückruf anfordern
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} sprachassistent.net. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link href="/impressum">
              <span className="hover:text-white transition-colors cursor-pointer">
                Impressum
              </span>
            </Link>
            <Link href="/datenschutz">
              <span className="hover:text-white transition-colors cursor-pointer">
                Datenschutz
              </span>
            </Link>
            <Link href="/agb">
              <span className="hover:text-white transition-colors cursor-pointer">
                AGB
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
