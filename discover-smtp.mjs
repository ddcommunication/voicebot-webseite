import nodemailer from 'nodemailer';
import dns from 'dns/promises';

const email = 'voicebots@dd-communication.de';
const password = 'pustekuchen24XXL#';
const domain = email.split('@')[1];

console.log('Auto-discovering SMTP settings for:', email);
console.log('Domain:', domain);
console.log('');

// Common SMTP server patterns to try
const hostPatterns = [
  `smtp.${domain}`,
  `mail.${domain}`,
  domain,
  'smtp.kasserver.com',
  'mail.kasserver.com',
];

// Port configurations to try
const configs = [
  { port: 587, secure: false, name: 'STARTTLS (587)' },
  { port: 465, secure: true, name: 'SSL/TLS (465)' },
  { port: 25, secure: false, name: 'Plain (25)' },
];

async function testConfig(host, port, secure, configName) {
  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: email,
        pass: password,
      },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 5000,
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.verify();
    console.log(`✓ SUCCESS: ${host}:${port} (${configName})`);
    console.log('');
    console.log('Working configuration:');
    console.log(`  Host: ${host}`);
    console.log(`  Port: ${port}`);
    console.log(`  Secure: ${secure}`);
    console.log(`  User: ${email}`);
    return true;
  } catch (error) {
    console.log(`✗ Failed: ${host}:${port} (${configName}) - ${error.message}`);
    return false;
  }
}

async function discoverSMTP() {
  // First, try to get MX records
  try {
    console.log('Looking up MX records...');
    const mxRecords = await dns.resolveMx(domain);
    if (mxRecords && mxRecords.length > 0) {
      console.log('MX records found:');
      mxRecords.forEach(mx => console.log(`  - ${mx.exchange} (priority: ${mx.priority})`));
      
      // Add MX servers to test list
      mxRecords.forEach(mx => {
        const mxHost = mx.exchange;
        // Try to derive SMTP from MX
        if (!hostPatterns.includes(mxHost)) {
          hostPatterns.push(mxHost);
        }
      });
    }
  } catch (error) {
    console.log('Could not resolve MX records:', error.message);
  }
  
  console.log('');
  console.log('Testing SMTP configurations...');
  console.log('');

  // Test all combinations
  for (const host of hostPatterns) {
    for (const config of configs) {
      const success = await testConfig(host, config.port, config.secure, config.name);
      if (success) {
        return;
      }
    }
  }

  console.log('');
  console.log('❌ Could not find working SMTP configuration');
  console.log('Please verify:');
  console.log('  - Email address is correct');
  console.log('  - Password is correct');
  console.log('  - SMTP access is enabled for this account');
}

discoverSMTP();
