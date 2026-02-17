import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the built index.html as template
const templatePath = path.join(__dirname, 'dist/public/index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

// Parse with JSDOM
const dom = new JSDOM(template);
const document = dom.window.document;

// Page configurations with content
const pages = [
  {
    path: '/',
    file: 'index.html',
    title: 'Voicebots für Unternehmen',
    description: 'Schluss mit verpassten Anrufen. Unsere KI-Voicebots nehmen Gespräche an, erfassen Anliegen und buchen Termine – 24/7.',
    ogTitle: 'Voicebots für Unternehmen',
    ogDescription: 'Schluss mit verpassten Anrufen. Unsere KI-Voicebots nehmen Gespräche an, erfassen Anliegen und buchen Termine – 24/7.'
  },
  {
    path: '/loesungen',
    file: 'loesungen.html',
    title: 'Lösungen | VoiceNexus',
    description: 'Entdecken Sie unsere Voicebot-Lösungen für verschiedene Branchen und Anwendungsfälle.',
    ogTitle: 'Voicebot-Lösungen für jede Branche',
    ogDescription: 'Von Terminbuchung bis Kundenservice – unsere KI-Voicebots passen sich Ihren Anforderungen an.'
  },
  {
    path: '/praxisbeispiele',
    file: 'praxisbeispiele.html',
    title: 'Praxisbeispiele | VoiceNexus',
    description: 'Erfolgsgeschichten und Praxisbeispiele: So setzen Unternehmen Voicebots erfolgreich ein.',
    ogTitle: 'Voicebot Praxisbeispiele',
    ogDescription: 'Erfolgsgeschichten und Praxisbeispiele: So setzen Unternehmen Voicebots erfolgreich ein.'
  },
  {
    path: '/blog',
    file: 'blog.html',
    title: 'Blog | VoiceNexus',
    description: 'Aktuelle Artikel, Tipps und Insights rund um Voicebots und KI-Telefonie.',
    ogTitle: 'Voicebot Blog',
    ogDescription: 'Aktuelle Artikel, Tipps und Insights rund um Voicebots und KI-Telefonie.'
  },
  {
    path: '/blog/voicebot-vs-mitarbeiter',
    file: 'blog-voicebot-vs-mitarbeiter.html',
    title: 'Voicebot vs. Mitarbeiter: Was ist besser? | VoiceNexus Blog',
    description: 'Voicebot oder Mitarbeiter? Wir vergleichen Kosten, Effizienz und Kundenzufriedenheit – mit überraschenden Ergebnissen.',
    ogTitle: 'Voicebot vs. Mitarbeiter: Der ehrliche Vergleich',
    ogDescription: 'Voicebot oder Mitarbeiter? Wir vergleichen Kosten, Effizienz und Kundenzufriedenheit – mit überraschenden Ergebnissen.'
  },
  {
    path: '/blog/voicebot-fuer-kmu',
    file: 'blog-voicebot-fuer-kmu.html',
    title: 'Voicebot für KMU: Lohnt sich das?',
    description: 'Voicebot für KMU: Kosten, ROI und Einsparpotenziale einfach erklärt. So rechnet sich Telefon-KI für kleine und mittlere Unternehmen.',
    ogTitle: 'Voicebot für KMU: Lohnt sich das?',
    ogDescription: 'Voicebot für KMU: Kosten, ROI und Einsparpotenziale einfach erklärt. So rechnet sich Telefon-KI für kleine und mittlere Unternehmen.'
  },
  {
    path: '/blog/wohnungswirtschaft-voicebot',
    file: 'blog-wohnungswirtschaft-voicebot.html',
    title: 'Voicebot in der Wohnungswirtschaft | VoiceNexus Blog',
    description: 'Wie ein Voicebot die Telefonzentrale einer Wohnungsverwaltung entlastet: Praxisbeispiel mit konkreten Ergebnissen.',
    ogTitle: 'Voicebot in der Wohnungswirtschaft: Ein Praxisbeispiel',
    ogDescription: 'Wie ein Voicebot die Telefonzentrale einer Wohnungsverwaltung entlastet: Praxisbeispiel mit konkreten Ergebnissen.'
  },
  {
    path: '/blog/hackathon-erfahrung',
    file: 'blog-hackathon-erfahrung.html',
    title: 'Unser Hackathon-Erlebnis | VoiceNexus Blog',
    description: 'Von der Idee zum Prototyp in 48 Stunden: Unsere Erfahrungen beim NFON Hackathon und was wir dabei gelernt haben.',
    ogTitle: 'Hackathon-Erlebnis: 48 Stunden Voicebot-Entwicklung',
    ogDescription: 'Von der Idee zum Prototyp in 48 Stunden: Unsere Erfahrungen beim NFON Hackathon und was wir dabei gelernt haben.'
  },
  {
    path: '/ueber-uns',
    file: 'ueber-uns.html',
    title: 'Über uns | VoiceNexus',
    description: 'Lernen Sie das Team hinter VoiceNexus kennen und erfahren Sie mehr über unsere Mission.',
    ogTitle: 'Über VoiceNexus',
    ogDescription: 'Lernen Sie das Team hinter VoiceNexus kennen und erfahren Sie mehr über unsere Mission.'
  },
  {
    path: '/kontakt',
    file: 'kontakt.html',
    title: 'Kontakt | VoiceNexus',
    description: 'Nehmen Sie Kontakt mit uns auf. Wir beraten Sie gerne zu Ihrem Voicebot-Projekt.',
    ogTitle: 'Kontakt aufnehmen',
    ogDescription: 'Nehmen Sie Kontakt mit uns auf. Wir beraten Sie gerne zu Ihrem Voicebot-Projekt.'
  },
  {
    path: '/impressum',
    file: 'impressum.html',
    title: 'Impressum | VoiceNexus',
    description: 'Impressum und rechtliche Informationen von VoiceNexus.',
    ogTitle: 'Impressum',
    ogDescription: 'Impressum und rechtliche Informationen von VoiceNexus.'
  },
  {
    path: '/datenschutz',
    file: 'datenschutz.html',
    title: 'Datenschutz | VoiceNexus',
    description: 'Datenschutzerklärung: So gehen wir mit Ihren Daten um.',
    ogTitle: 'Datenschutzerklärung',
    ogDescription: 'Datenschutzerklärung: So gehen wir mit Ihren Daten um.'
  }
];

console.log('🚀 Creating static HTML pages...\n');

const outputDir = path.join(__dirname, 'static-html-export');
if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true });
}
fs.mkdirSync(outputDir, { recursive: true });

// Function to update meta tags in HTML
function updateMetaTags(html, page) {
  let updated = html;
  
  // Update title
  updated = updated.replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`);
  
  // Update or add meta description
  if (updated.includes('<meta name="description"')) {
    updated = updated.replace(
      /<meta name="description" content=".*?">/,
      `<meta name="description" content="${page.description}">`
    );
  } else {
    updated = updated.replace(
      '</head>',
      `  <meta name="description" content="${page.description}">\n</head>`
    );
  }
  
  // Update or add og:title
  if (updated.includes('property="og:title"')) {
    updated = updated.replace(
      /<meta property="og:title" content=".*?">/,
      `<meta property="og:title" content="${page.ogTitle}">`
    );
  } else {
    updated = updated.replace(
      '</head>',
      `  <meta property="og:title" content="${page.ogTitle}">\n</head>`
    );
  }
  
  // Update or add og:description
  if (updated.includes('property="og:description"')) {
    updated = updated.replace(
      /<meta property="og:description" content=".*?">/,
      `<meta property="og:description" content="${page.ogDescription}">`
    );
  } else {
    updated = updated.replace(
      '</head>',
      `  <meta property="og:description" content="${page.ogDescription}">\n</head>`
    );
  }
  
  // Update canonical URL
  const canonicalUrl = `https://voicebotweb-jqo46mgj.manus.space${page.path === '/' ? '' : page.path}`;
  if (updated.includes('rel="canonical"')) {
    updated = updated.replace(
      /<link rel="canonical" href=".*?">/,
      `<link rel="canonical" href="${canonicalUrl}">`
    );
  } else {
    updated = updated.replace(
      '</head>',
      `  <link rel="canonical" href="${canonicalUrl}">\n</head>`
    );
  }
  
  return updated;
}

// Create each page
for (const page of pages) {
  const html = updateMetaTags(template, page);
  const filePath = path.join(outputDir, page.file);
  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(`✅ Created ${page.file} with correct meta tags`);
}

// Copy assets
console.log('\n📦 Copying assets...');
const assetsDir = path.join(__dirname, 'dist/public/assets');
const outputAssetsDir = path.join(outputDir, 'assets');

if (fs.existsSync(assetsDir)) {
  fs.cpSync(assetsDir, outputAssetsDir, { recursive: true });
  console.log('   ✅ Assets copied');
}

// Copy images
const imagesDir = path.join(__dirname, 'dist/public/images');
const outputImagesDir = path.join(outputDir, 'images');

if (fs.existsSync(imagesDir)) {
  fs.cpSync(imagesDir, outputImagesDir, { recursive: true });
  console.log('   ✅ Images copied');
}

// Copy root files
const rootFiles = ['favicon.ico', 'robots.txt', 'sitemap.xml'];
for (const file of rootFiles) {
  const srcPath = path.join(__dirname, 'dist/public', file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, path.join(outputDir, file));
    console.log(`   ✅ ${file} copied`);
  }
}

console.log(`\n✨ Static HTML pages created successfully!`);
console.log(`📁 Output directory: ${outputDir}`);
console.log(`📊 Generated ${pages.length} HTML pages with unique meta tags`);
console.log(`\n💡 Each HTML file contains the full React app with correct meta tags.`);
console.log(`   The content will be rendered by React on page load.`);
