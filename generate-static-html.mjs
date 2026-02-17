import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

async function generateStaticSite() {
  console.log('🚀 Starting static site generation...\n');
  
  // Start preview server
  console.log('📦 Starting preview server...');
  const server = spawn('pnpm', ['preview', '--port', '4173', '--host'], {
    cwd: __dirname,
    stdio: 'pipe',
    shell: true
  });
  
  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log('✅ Preview server started\n');
  
  // Launch browser
  console.log('🌐 Launching browser...');
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  console.log('✅ Browser launched\n');
  
  const outputDir = path.join(__dirname, 'static-export');
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });
  
  // Generate each page
  for (const route of routes) {
    console.log(`📄 Generating ${route.file}...`);
    
    try {
      await page.goto(`http://localhost:4173${route.path}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });
      
      // Wait a bit more for any dynamic content
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const html = await page.content();
      const filePath = path.join(outputDir, route.file);
      fs.writeFileSync(filePath, html, 'utf-8');
      
      console.log(`   ✅ Saved ${route.file} (${(html.length / 1024).toFixed(2)} KB)`);
    } catch (error) {
      console.error(`   ❌ Error generating ${route.file}:`, error.message);
    }
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
  
  // Copy favicon and other root files
  const rootFiles = ['favicon.ico', 'robots.txt', 'sitemap.xml'];
  for (const file of rootFiles) {
    const srcPath = path.join(__dirname, 'dist/public', file);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, path.join(outputDir, file));
      console.log(`   ✅ ${file} copied`);
    }
  }
  
  await browser.close();
  server.kill();
  
  console.log(`\n✨ Static site generated successfully!`);
  console.log(`📁 Output directory: ${outputDir}`);
  console.log(`\n📊 Generated ${routes.length} HTML pages`);
}

generateStaticSite().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});
