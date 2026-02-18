// Meta tag injection script - runs before React loads
// This script sets page-specific meta tags based on the current URL path

(function() {
  const path = window.location.pathname;
  const siteTitle = "Zöllner Office";
  
  // Define meta tags for each route
  const metaConfig = {
    '/': {
      title: `Voicebots für Unternehmen | ${siteTitle}`,
      description: 'Schluss mit verpassten Anrufen. Unsere KI-Voicebots nehmen Gespräche an, erfassen Anliegen und buchen Termine – 24/7.',
      keywords: 'Voicebot, KI-Sprachassistent, automatische Telefonzentrale, Terminvereinbarung, 24/7 Kundenservice, DSGVO-konform, Made in Germany'
    },
    '/loesungen': {
      title: `Anwendungsbeispiele für intelligente Sprachassistenten | ${siteTitle}`,
      description: 'Entdecken Sie, wie Voicebots in verschiedenen Branchen eingesetzt werden: Arztpraxen, Handwerk, E-Commerce, Immobilien und mehr.',
      keywords: 'Voicebot Anwendungsbeispiele, Arztpraxen, Handwerk, E-Commerce, Immobilien, Branchen'
    },
    '/anwendungsbeispiele': {
      title: `Anwendungsbeispiele | ${siteTitle}`,
      description: 'Entdecken Sie, wie Voicebots in verschiedenen Branchen eingesetzt werden: Arztpraxen, Handwerk, E-Commerce, Immobilien und mehr.',
      keywords: 'Voicebot Anwendungsbeispiele, Arztpraxen, Handwerk, E-Commerce, Immobilien, Branchen'
    },
    '/praxisbeispiele': {
      title: `Praxisbeispiele - Erfolgreiche Voicebot-Implementierungen | ${siteTitle}`,
      description: 'Erfahren Sie, wie Unternehmen aus verschiedenen Branchen mit Voicebots ihre Erreichbarkeit verbessern und Prozesse automatisieren.',
      keywords: 'Praxisbeispiele, Case Studies, Voicebot Erfolge, Wohnungswirtschaft, Immobilienfinanzierung, Referenzen'
    },
    '/blog': {
      title: `Blog & News | ${siteTitle}`,
      description: 'Aktuelle Artikel, Praxistipps und Neuigkeiten rund um Voicebots, KI-Telefonie und Automatisierung im Kundenservice.',
      keywords: 'Voicebot Blog, KI Telefonie News, Automatisierung Tipps, Kundenservice Trends'
    },
    '/blog/voicebot-kmu-kosten-roi': {
      title: `Voicebot für KMU: Lohnt sich das? | ${siteTitle}`,
      description: 'Voicebot für KMU: Kosten, ROI und Einsparpotenziale einfach erklärt. So rechnet sich Telefon-KI für kleine und mittlere Unternehmen.',
      keywords: 'Voicebot Kosten, KI Telefonassistent, Voicebot Mittelstand, automatisierte Telefonzentrale, Telefon KI für Unternehmen, Voicebot ROI, KMU Digitalisierung'
    },
    '/ueber-uns': {
      title: `Über uns | ${siteTitle}`,
      description: 'Erfahren Sie mehr über Zöllner Office und unser Team. Wir entwickeln intelligente Voicebot-Lösungen für moderne Unternehmen.',
      keywords: 'Zöllner Office, Über uns, Team, Voicebot Entwicklung, KI Telefonie'
    },
    '/kontakt': {
      title: `Kontakt | ${siteTitle}`,
      description: 'Nehmen Sie Kontakt mit uns auf. Wir beraten Sie gerne zu Voicebot-Lösungen für Ihr Unternehmen.',
      keywords: 'Kontakt, Beratung, Voicebot Anfrage, Demo'
    },
    '/impressum': {
      title: `Impressum | ${siteTitle}`,
      description: 'Impressum und Anbieterkennzeichnung von Zöllner Office.',
      keywords: 'Impressum, Anbieterkennzeichnung'
    },
    '/datenschutz': {
      title: `Datenschutz | ${siteTitle}`,
      description: 'Datenschutzerklärung von Zöllner Office. Informationen zum Umgang mit Ihren Daten.',
      keywords: 'Datenschutz, Datenschutzerklärung, DSGVO'
    },
    '/praxisbeispiele/timum-fuer-makler': {
      title: `Timum für Immobilienmakler: Terminautomation mit onOffice & Voicebot | ${siteTitle}`,
      description: 'Was kann Timum für Makler? So automatisierst du Besichtigungstermine mit onOffice, Voicebot und Zöllner Office effizient.',
      keywords: 'Timum, Immobilienmakler, onOffice, Terminautomation, Besichtigungstermine, CRM Integration, Voicebot Immobilien'
    }
  };
  
  // Get meta config for current path, fallback to homepage
  const config = metaConfig[path] || metaConfig['/'];
  
  // Function to set or update a meta tag
  function setMetaTag(attr, attrValue, content) {
    let element = document.querySelector(`meta[${attr}="${attrValue}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attr, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  }
  
  // Set title
  document.title = config.title;
  
  // Set standard meta tags
  setMetaTag('name', 'description', config.description);
  if (config.keywords) {
    setMetaTag('name', 'keywords', config.keywords);
  }
  
  // Set Open Graph tags
  setMetaTag('property', 'og:title', config.title);
  setMetaTag('property', 'og:description', config.description);
  setMetaTag('property', 'og:type', 'website');
  setMetaTag('property', 'og:url', `https://www.sprachassistent.net${path}`);
  setMetaTag('property', 'og:site_name', siteTitle);
  setMetaTag('property', 'og:image', 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/aJdwTMGgxMBLbFMd.jpg');
  
  // Set Twitter Card tags
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', config.title);
  setMetaTag('name', 'twitter:description', config.description);
  setMetaTag('name', 'twitter:image', 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/aJdwTMGgxMBLbFMd.jpg');
})();
