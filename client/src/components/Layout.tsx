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
    { label: "Lösungen", href: "/loesungen" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Preise", href: "/preise" },
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
              <Phone className="h-3 w-3" /> +49 (0) 30 123 456 78
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
            <span className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tight text-primary hover:opacity-90 transition-opacity cursor-pointer">
              Zöllner Office
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
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
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-full h-0.5 bg-secondary transform scale-x-0 transition-transform group-hover:scale-x-100",
                    location === item.href && "scale-x-100"
                  )} />
                </span>
              </Link>
            ))}
            <Link href="/kontakt">
              <Button variant="default" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium rounded-sm px-6">
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
              {navItems.map((item) => (
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
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-2">
                  Demo anfragen
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      <CookieBanner />
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-white">Zöllner Office</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Professionelle Voicebot-Lösungen für Unternehmen. Wir automatisieren Ihre Telefonie, damit Sie mehr Zeit für das Wesentliche haben.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Lösungen</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/loesungen"><span className="hover:text-white transition-colors cursor-pointer">Telefonzentrale</span></Link></li>
              <li><Link href="/loesungen"><span className="hover:text-white transition-colors cursor-pointer">Terminvereinbarung</span></Link></li>
              <li><Link href="/loesungen"><span className="hover:text-white transition-colors cursor-pointer">Kundenservice</span></Link></li>
              <li><Link href="/loesungen"><span className="hover:text-white transition-colors cursor-pointer">Lead-Qualifizierung</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Unternehmen</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/ueber-uns"><span className="hover:text-white transition-colors cursor-pointer">Über uns</span></Link></li>
              <li><Link href="/blog"><span className="hover:text-white transition-colors cursor-pointer">Blog & News</span></Link></li>
              <li><Link href="/karriere"><span className="hover:text-white transition-colors cursor-pointer">Karriere</span></Link></li>
              <li><Link href="/kontakt"><span className="hover:text-white transition-colors cursor-pointer">Kontakt</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Kontakt</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 shrink-0" />
                <span>+49 (0) 30 123 456 78</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 shrink-0" />
                <span>info@zoellner-office.de</span>
              </li>
              <li className="mt-4">
                <Button variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10 text-white w-full">
                  Rückruf anfordern
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Zöllner Office. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum"><span className="hover:text-white transition-colors cursor-pointer">Impressum</span></Link>
            <Link href="/datenschutz"><span className="hover:text-white transition-colors cursor-pointer">Datenschutz</span></Link>
            <Link href="/agb"><span className="hover:text-white transition-colors cursor-pointer">AGB</span></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
