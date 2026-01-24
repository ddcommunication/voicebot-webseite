import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function testSMTP() {
  console.log('Testing SMTP configuration...');
  console.log('Host:', process.env.SMTP_HOST);
  console.log('Port: 587 (STARTTLS)');
  console.log('User:', process.env.SMTP_USER);
  
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587, // Using 587 for STARTTLS
      secure: false, // false for STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false // Accept self-signed certificates if needed
      }
    });

    // Verify connection
    await transporter.verify();
    console.log('✓ SMTP connection verified successfully');

    // Send test email
    const info = await transporter.sendMail({
      from: `"Voicebot Test" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Send to self
      subject: 'SMTP Test - Voicebot Webseite',
      text: 'Dies ist eine Test-E-Mail zur Überprüfung der SMTP-Konfiguration.',
      html: '<p>Dies ist eine <strong>Test-E-Mail</strong> zur Überprüfung der SMTP-Konfiguration.</p>',
    });

    console.log('✓ Test email sent successfully');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    
  } catch (error) {
    console.error('✗ SMTP test failed:', error.message);
    if (error.code) console.error('Error code:', error.code);
    if (error.command) console.error('Failed command:', error.command);
    process.exit(1);
  }
}

testSMTP();
