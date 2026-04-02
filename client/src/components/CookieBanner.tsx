import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown, ChevronUp, Shield } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [youtubeEnabled, setYoutubeEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const openBanner = () => {
    // Aktuelle Einstellungen laden, bevor Banner geöffnet wird
    setAnalyticsEnabled(localStorage.getItem("analytics-consent") === "true");
    setYoutubeEnabled(localStorage.getItem("youtube-consent") === "true");
    setShowDetails(true);
    setIsVisible(true);
  };

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    localStorage.setItem("analytics-consent", "true");
    localStorage.setItem("youtube-consent", "true");
    setAnalyticsEnabled(true);
    setYoutubeEnabled(true);
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    localStorage.setItem("analytics-consent", "false");
    localStorage.setItem("youtube-consent", "false");
    setAnalyticsEnabled(false);
    setYoutubeEnabled(false);
    setIsVisible(false);
  };

  const saveSelection = () => {
    localStorage.setItem("cookie-consent", analyticsEnabled || youtubeEnabled ? "all" : "essential");
    localStorage.setItem("analytics-consent", analyticsEnabled ? "true" : "false");
    localStorage.setItem("youtube-consent", youtubeEnabled ? "true" : "false");
    setIsVisible(false);
  };

  return (
    <>
      {/* Persistenter Datenschutz-Button unten links */}
      {!isVisible && (
        <button
          onClick={openBanner}
          title="Datenschutzeinstellungen ändern"
          aria-label="Datenschutzeinstellungen ändern"
          className="fixed bottom-5 left-5 z-40 w-11 h-11 rounded-full bg-slate-700 hover:bg-primary text-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <Shield className="h-5 w-5" />
        </button>
      )}

      {/* Cookie-Banner */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-2xl animate-in slide-in-from-bottom-10 duration-500">
          <div className="container max-w-6xl p-6">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Cookies & Datenschutz
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wir nutzen Cookies und externe Dienste auf unserer Website. Einige
                sind technisch notwendig, andere helfen uns, die Website zu
                verbessern. Sie können selbst entscheiden, welche Kategorien Sie
                zulassen möchten.
              </p>
            </div>

            {/* Details Toggle */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-4"
            >
              {showDetails ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Details ausblenden
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Details anzeigen
                </>
              )}
            </button>

            {/* Service Details */}
            {showDetails && (
              <div className="space-y-4 mb-6 p-4 bg-muted/30 rounded-lg border border-border">
                {/* Technisch notwendig */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                        Technisch notwendig
                        <span className="text-xs font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded">
                          immer aktiv
                        </span>
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Diese Dienste sind für die Grundfunktionen der Website
                        erforderlich und können nicht deaktiviert werden.
                      </p>
                    </div>
                  </div>
                  <div className="ml-4 space-y-2 text-xs text-muted-foreground">
                    <div className="p-2 bg-background rounded border border-border/50">
                      <p className="font-medium text-foreground">
                        Manus Hosting-Plattform
                      </p>
                      <p className="mt-1">
                        Butterfly Effect Pte. Ltd., Singapore. Umfasst API-Zugriffe
                        (api.manus.im) und CDN-Auslieferung (files.manuscdn.com).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-foreground">
                        Analytics & Statistik
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Diese Dienste helfen uns, die Nutzung unserer Website zu
                        verstehen und zu verbessern.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={analyticsEnabled}
                        onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="ml-4 space-y-2 text-xs text-muted-foreground">
                    <div className="p-2 bg-background rounded border border-border/50">
                      <p className="font-medium text-foreground">
                        Amplitude Analytics
                      </p>
                      <p className="mt-1">
                        Analysedienst zur Erfassung von Nutzerverhalten. Domains:
                        api2.amplitude.com, sr-client-cfg.amplitude.com
                      </p>
                    </div>
                    <div className="p-2 bg-background rounded border border-border/50">
                      <p className="font-medium text-foreground">
                        Plausible Analytics
                      </p>
                      <p className="mt-1">
                        Datenschutzfreundlicher Analysedienst. Domain: plausible.io
                      </p>
                    </div>
                  </div>
                </div>

                {/* YouTube */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-foreground">
                        Externe Medien (YouTube)
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Einbindung von YouTube-Videos im erweiterten Datenschutzmodus. Es werden keine personalisierten Cookies gesetzt, jedoch Local Storage Elemente zur Wiedererkennung.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={youtubeEnabled}
                        onChange={(e) => setYoutubeEnabled(e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="ml-4 space-y-2 text-xs text-muted-foreground">
                    <div className="p-2 bg-background rounded border border-border/50">
                      <p className="font-medium text-foreground">YouTube (Google Ireland Limited)</p>
                      <p className="mt-1">
                        Gordon House, Barrow Street, Dublin 4, Irland. Erweiterter Datenschutzmodus aktiv. Domain: youtube-nocookie.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-end">
              <Link href="/datenschutz">
                <Button variant="ghost" size="sm" className="text-xs">
                  Datenschutzerklärung
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={acceptEssential}
                className="text-sm"
              >
                Nur Essenzielle
              </Button>
              {showDetails && (
                <Button onClick={saveSelection} className="text-sm">
                  Auswahl speichern
                </Button>
              )}
              <Button
                onClick={acceptAll}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
              >
                Alle akzeptieren
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
