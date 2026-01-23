import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-4 md:p-6 shadow-2xl animate-in slide-in-from-bottom-10 duration-500">
      <div className="container max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground leading-relaxed text-center md:text-left">
          <p>
            Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer
            Webseite zu bieten. Dazu zählen Cookies, die für den Betrieb der
            Seite notwendig sind, sowie solche, die zu Statistikzwecken genutzt
            werden.
          </p>
          <p className="mt-1">
            Weitere Informationen finden Sie in unserer{" "}
            <Link href="/datenschutz">
              <span className="underline cursor-pointer hover:text-primary">
                Datenschutzerklärung
              </span>
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline" onClick={declineCookies}>
            Nur Essenzielle
          </Button>
          <Button
            onClick={acceptCookies}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Alle akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}
