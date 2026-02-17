import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// All routes that need to be generated
const routes = [
  { path: '/', file: 'index.html' },
  { path: '/loesungen', file: 'loesungen.html' },
  { path: '/praxisbeispiele', file: 'praxisbeispiele.html' },
  { path: '/blog', file: 'blog.html' },
  { path: '/blog/voicebot-vs-mitarbeiter', file: 'blog-voicebot-vs-mitarbeiter.html' },
  { path: '/blog/voicebot-fuer-kmu', file: 'blog-voicebot-fuer-kmu.html' },
  { path: '/blog/wohnungswirtschaft-voicebot', file: 'blog-wohnungswirtschaft-voicebot.html' },
  { path: '/blog/hackathon-erfahrung', file: 'blog-hackathon-erfahrung.html' },
  { path: '/ueber-uns', file: 'ueber-uns.html' },
  { path: '/kontakt', file: 'kontakt.html' },
  { path: '/impressum', file: 'impressum.html' },
  { path: '/datenschutz', file: 'datenschutz.html' },
];

console.log('🚀 Starting static site generation...\n');
console.log('This script will use Puppeteer to render each page and save as static HTML.\n');

// We'll use a simpler approach: copy the built files and create a script
// that uses puppeteer to render each page

const script = `
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = ${JSON.stringify(routes, null, 2)};

async function generateStaticSite() {
  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Start a local server first
  const { spawn } = await import('child_process');
  const server = spawn('pnpm', ['preview', '--port', '4173'], {
    cwd: '${__dirname}',
    stdio: 'pipe'
  });
  
  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const outputDir = path.join(__dirname, 'static-export');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  for (const route of routes) {
    console.log(\`📄 Generating \${route.file}...\`);
    
    await page.goto(\`http://localhost:4173\${route.path}\`, {
      waitUntil: 'networkidle0'
    });
    
    const html = await page.content();
    const filePath = path.join(outputDir, route.file);
    fs.writeFileSync(filePath, html, 'utf-8');
    
    console.log(\`   ✅ Saved to \${route.file}\`);
  }
  
  // Copy assets
  console.log('\\n📦 Copying assets...');
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
  
  await browser.close();
  server.kill();
  
  console.log(\`\\n✨ Static site generated successfully in \${outputDir}\`);
}

generateStaticSite().catch(console.error);
`;

fs.writeFileSync(path.join(__dirname, 'generate-with-puppeteer.mjs'), script, 'utf-8');

console.log('✅ Generator script created: generate-with-puppeteer.mjs');
console.log('\nRun with: node generate-with-puppeteer.mjs');
