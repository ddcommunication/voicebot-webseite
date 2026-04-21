import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Anwendungsbeispiele from "./pages/Anwendungsbeispiele";
import BlogVoicebotVsMitarbeiter from "./pages/BlogVoicebotVsMitarbeiter";
import BlogZukunftKundenservice from "./pages/BlogZukunftKundenservice";
import BlogPerfekteBegruessung from "./pages/BlogPerfekteBegruessung";
import About from "./pages/About";
import Termin from "./pages/Termin";

import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

import VoicebotVsMitarbeiter from "./pages/blog/VoicebotVsMitarbeiter";
import HackathonViceMeister from "./pages/blog/HackathonViceMeister";
import WohnungswirtschaftCaseStudy from "./pages/blog/WohnungswirtschaftCaseStudy";
import VoicebotFuerKMU from "./pages/blog/VoicebotFuerKMU";
import KITagungWohnungsgenossenschaften from "./pages/blog/KITagungWohnungsgenossenschaften";
import BusinessBeats2026 from "./pages/blog/BusinessBeats2026";
import BlogNiaFrontDesk from "./pages/BlogNiaFrontDesk";
import Praxisbeispiele from "./pages/Praxisbeispiele";
import UweOrtleppCaseStudy from "./pages/praxisbeispiele/UweOrtlepp";
import TimumFuerMakler from "./pages/praxisbeispiele/TimumFuerMakler";

function Router() {
  // make sure to consider if you need authentication for certain routes
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/loesungen" component={Solutions} />
        <Route path="/anwendungsbeispiele" component={Anwendungsbeispiele} />
        <Route path="/ueber-uns" component={About} />
        <Route path="/termin" component={Termin} />

        <Route path="/kontakt" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/voicebot-vs-mitarbeiter" component={VoicebotVsMitarbeiter} />
        <Route path="/blog/hackathon-vice-meister" component={HackathonViceMeister} />
        <Route path="/blog/wohnungswirtschaft-voicebot" component={WohnungswirtschaftCaseStudy} />
        <Route path="/blog/voicebot-kmu-kosten-roi" component={VoicebotFuerKMU} />
        <Route path="/blog/ki-tagung-wohnungsgenossenschaften-2026" component={KITagungWohnungsgenossenschaften} />
        <Route path="/blog/business-beats-2026-onoffice-voicebot" component={BusinessBeats2026} />
        <Route path="/blog/zukunft-kundenservice" component={BlogZukunftKundenservice} />
        <Route path="/blog/perfekte-begruessung" component={BlogPerfekteBegruessung} />
        <Route path="/blog/nia-frontdesk-nfon" component={BlogNiaFrontDesk} />
        <Route path="/praxisbeispiele" component={Praxisbeispiele} />
        <Route path="/praxisbeispiele/uwe-ortlepp-immobilienfinanzierung" component={UweOrtleppCaseStudy} />
        <Route path="/praxisbeispiele/timum-fuer-makler" component={TimumFuerMakler} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} />

        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
