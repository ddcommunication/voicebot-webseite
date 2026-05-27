/**
 * Server-side SEO meta tag injection
 * Injects <title>, <meta name="description">, <link rel="canonical"> and OG/Twitter tags
 * into the HTML <head> before delivery so crawlers see them without executing JavaScript.
 */

const BASE_URL = "https://sprachassistent.net";
const DEFAULT_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/aJdwTMGgxMBLbFMd.jpg";
const SITE_NAME = "Zöllner Office";

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  type?: string;
  noSiteName?: boolean;
}

const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "Voicebots für Unternehmen",
    description: "KI Voicebot für Unternehmen ✓ 24/7 erreichbar ✓ automatisiert Anrufe, Termine & Support ✓ Mehr Leads, weniger Aufwand ✓ DSGVO-konform",
    canonical: "/",
    keywords: "Voicebot, KI-Sprachassistent, automatische Telefonzentrale, Terminvereinbarung, 24/7 Kundenservice, DSGVO-konform, Made in Germany",
  },
  "/loesungen": {
    title: "Voicebot-Lösungen für Unternehmen",
    description: "Entdecken Sie unsere KI-Voicebot-Lösungen: Telefonzentrale, Terminvereinbarung, Kundenservice und Lead-Qualifizierung – 24/7 automatisiert.",
    canonical: "/loesungen",
    keywords: "Voicebot Lösungen, KI Telefonzentrale, automatische Terminvereinbarung, Kundenservice Bot",
  },
  "/anwendungsbeispiele": {
    title: "Voicebot Anwendungsbeispiele",
    description: "Praxisnahe Anwendungsbeispiele für KI-Voicebots: Wie Unternehmen aus Handwerk, Immobilien, Gesundheit und Dienstleistung von Sprachassistenten profitieren.",
    canonical: "/anwendungsbeispiele",
    keywords: "Voicebot Anwendungsbeispiele, KI Telefonie Praxis, Sprachassistent Branchen",
  },
  "/praxisbeispiele": {
    title: "Voicebot Praxisbeispiele & Kundenstimmen",
    description: "Echte Praxisbeispiele unserer Voicebot-Lösungen: Erfahrungsberichte und Case Studies aus verschiedenen Branchen.",
    canonical: "/praxisbeispiele",
    keywords: "Voicebot Praxisbeispiele, Case Study, Kundenstimmen, Referenzen",
  },
  "/nfon-support": {
    title: "NFON Support & Service für Unternehmen ☑️ Jetzt anrufen",
    description: "Persönlicher NFON Support ✓ Voicebots, CTI-Integrationen, Cloud-Telefonie für Unternehmen ☎ +49 3533 4807-48 ✓ schnell, sicher, zuverlässig",
    canonical: "/nfon-support",
    keywords: "NFON Support, NFON Partner, Cloud-Telefonie, NFON Cloudya, CTI Integration, NFON Einrichtung",
    noSiteName: true,
  },
  "/ueber-uns": {
    title: "Über uns – Zöllner Büro- und IT-Systeme GmbH",
    description: "Lernen Sie unser Team kennen. Zöllner Büro- und IT-Systeme GmbH – Ihr Partner für KI-Voicebots, NFON-Telefonie und moderne Unternehmenskommunikation.",
    canonical: "/ueber-uns",
    keywords: "Zöllner Office, Über uns, Team, KI Voicebot Anbieter, NFON Partner",
  },
  "/kontakt": {
    title: "Kontakt – Voicebot-Beratung anfragen",
    description: "Nehmen Sie Kontakt auf und erhalten Sie eine kostenlose Voicebot-Beratung. Wir melden uns innerhalb von 24 Stunden.",
    canonical: "/kontakt",
    keywords: "Voicebot Kontakt, Beratung anfragen, KI Telefonie Beratung",
  },
  "/termin": {
    title: "Demo-Termin vereinbaren",
    description: "Vereinbaren Sie jetzt Ihren kostenlosen Demo-Termin und erleben Sie unsere KI-Voicebots live in Aktion.",
    canonical: "/termin",
    keywords: "Voicebot Demo, Termin vereinbaren, kostenlose Beratung",
  },
  "/blog": {
    title: "Blog – KI, Voicebots & Telefonie",
    description: "Aktuelle Artikel zu KI-Voicebots, automatisierter Telefonie, NFON und modernem Kundenservice. Expertenwissen für Unternehmen.",
    canonical: "/blog",
    keywords: "Voicebot Blog, KI Telefonie Artikel, NFON News, Sprachassistent Wissen",
  },
  "/blog/voicebot-vs-mitarbeiter": {
    title: "Voicebot vs. Mitarbeiter – Was lohnt sich wirklich?",
    description: "Voicebot oder menschlicher Mitarbeiter? Ein ehrlicher Vergleich von Kosten, Qualität und Einsatzbereichen für Unternehmen.",
    canonical: "/blog/voicebot-vs-mitarbeiter",
    type: "article",
  },
  "/blog/hackathon-vice-meister": {
    title: "Hackathon Vice-Meister – Unser KI-Projekt",
    description: "Wie unser Team beim Hackathon den zweiten Platz belegte und was wir dabei über KI-Voicebots gelernt haben.",
    canonical: "/blog/hackathon-vice-meister",
    type: "article",
  },
  "/blog/wohnungswirtschaft-voicebot": {
    title: "Voicebot in der Wohnungswirtschaft",
    description: "Case Study: Wie Wohnungsgenossenschaften mit KI-Voicebots Mieteranfragen automatisieren und Erreichbarkeit verbessern.",
    canonical: "/blog/wohnungswirtschaft-voicebot",
    type: "article",
  },
  "/blog/voicebot-kmu-kosten-roi": {
    title: "Voicebot für KMU – Kosten & ROI",
    description: "Was kostet ein Voicebot wirklich? ROI-Analyse für kleine und mittelständische Unternehmen mit konkreten Zahlen.",
    canonical: "/blog/voicebot-kmu-kosten-roi",
    type: "article",
  },
  "/blog/ki-tagung-wohnungsgenossenschaften-2026": {
    title: "KI-Tagung Wohnungsgenossenschaften 2026",
    description: "Rückblick auf die KI-Tagung für Wohnungsgenossenschaften 2026 – Erkenntnisse, Trends und Praxisbeispiele.",
    canonical: "/blog/ki-tagung-wohnungsgenossenschaften-2026",
    type: "article",
  },
  "/blog/business-beats-2026-onoffice-voicebot": {
    title: "Business Beats 2026 – onOffice Voicebot",
    description: "Unser Auftritt beim Business Beats 2026: Voicebot-Integration für onOffice und die Zukunft der Immobilienkommunikation.",
    canonical: "/blog/business-beats-2026-onoffice-voicebot",
    type: "article",
  },
  "/blog/zukunft-kundenservice": {
    title: "Die Zukunft des Kundenservice mit KI",
    description: "Wie KI und Voicebots den Kundenservice revolutionieren – Trends, Chancen und praktische Umsetzung für Unternehmen.",
    canonical: "/blog/zukunft-kundenservice",
    type: "article",
  },
  "/blog/perfekte-begruessung": {
    title: "Die perfekte Begrüßung am Telefon",
    description: "Wie ein KI-Voicebot die perfekte Begrüßung am Telefon gestaltet und warum das für Ihren Unternehmenserfolg entscheidend ist.",
    canonical: "/blog/perfekte-begruessung",
    type: "article",
  },
  "/blog/nia-frontdesk-nfon": {
    title: "Nia FrontDesk – KI-Rezeption auf NFON-Basis",
    description: "Nia FrontDesk: Die KI-gestützte Telefonrezeption auf Basis von NFON Cloudya – für professionellen Empfang ohne Wartezeiten.",
    canonical: "/blog/nia-frontdesk-nfon",
    type: "article",
  },
  "/blog/voicebots-gesundheitswesen-sozialwesen": {
    title: "Voicebots im Gesundheits- und Sozialwesen",
    description: "Wie KI-Voicebots in Arztpraxen, Pflegeeinrichtungen und sozialen Diensten die Erreichbarkeit verbessern und Personal entlasten.",
    canonical: "/blog/voicebots-gesundheitswesen-sozialwesen",
    type: "article",
  },
  "/praxisbeispiele/uwe-ortlepp-immobilienfinanzierung": {
    title: "Case Study: Uwe Ortlepp Immobilienfinanzierung",
    description: "Wie Uwe Ortlepp Immobilienfinanzierung mit einem KI-Voicebot die Erreichbarkeit steigert und Leads automatisch qualifiziert.",
    canonical: "/praxisbeispiele/uwe-ortlepp-immobilienfinanzierung",
    type: "article",
  },
  "/praxisbeispiele/timum-fuer-makler": {
    title: "Case Study: Timum Voicebot für Makler",
    description: "Wie Immobilienmakler mit dem Timum-Voicebot Besichtigungstermine automatisch vereinbaren und keine Anfrage mehr verpassen.",
    canonical: "/praxisbeispiele/timum-fuer-makler",
    type: "article",
  },
  "/impressum": {
    title: "Impressum",
    description: "Impressum der Zöllner Büro- und IT-Systeme GmbH – Angaben gemäß § 5 TMG.",
    canonical: "/impressum",
  },
  "/datenschutz": {
    title: "Datenschutzerklärung",
    description: "Datenschutzerklärung der Zöllner Büro- und IT-Systeme GmbH – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
    canonical: "/datenschutz",
  },
};

function buildMetaTags(meta: PageMeta): string {
  const fullTitle = meta.noSiteName ? meta.title : `${meta.title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${meta.canonical}`;
  const type = meta.type || "website";

  return `
    <title>${fullTitle}</title>
    <meta name="description" content="${meta.description.replace(/"/g, "&quot;")}">
    <link rel="canonical" href="${canonicalUrl}">
    ${meta.keywords ? `<meta name="keywords" content="${meta.keywords.replace(/"/g, "&quot;")}">` : ""}
    <meta property="og:type" content="${type}">
    <meta property="og:title" content="${fullTitle.replace(/"/g, "&quot;")}">
    <meta property="og:description" content="${meta.description.replace(/"/g, "&quot;")}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:image" content="${DEFAULT_IMAGE}">
    <meta property="og:site_name" content="${SITE_NAME}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${fullTitle.replace(/"/g, "&quot;")}">
    <meta name="twitter:description" content="${meta.description.replace(/"/g, "&quot;")}">
    <meta name="twitter:image" content="${DEFAULT_IMAGE}">
  `.trim();
}

/**
 * Injects SEO meta tags into the HTML string based on the request path.
 * Replaces the closing </head> tag with meta tags + </head>.
 */
export function injectSeoMeta(html: string, path: string): string {
  // Normalize path: remove trailing slash (except root)
  const normalizedPath = path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
  
  // Remove query strings and hashes
  const cleanPath = normalizedPath.split("?")[0].split("#")[0];

  const meta = PAGE_META[cleanPath];
  if (!meta) {
    // Fallback for unknown routes
    const fallback: PageMeta = {
      title: "Voicebots für Unternehmen",
      description: "KI Voicebot für Unternehmen – 24/7 erreichbar, DSGVO-konform, Made in Germany.",
      canonical: cleanPath,
    };
    const tags = buildMetaTags(fallback);
    return html.replace("</head>", `${tags}\n  </head>`);
  }

  const tags = buildMetaTags(meta);
  return html.replace("</head>", `${tags}\n  </head>`);
}
