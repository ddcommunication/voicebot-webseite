import { describe, it, expect } from 'vitest';
import nodemailer from 'nodemailer';

describe('SMTP Configuration', () => {
  it('should successfully verify SMTP connection with updated credentials', async () => {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
    });

    // This will throw if credentials are invalid
    await expect(transporter.verify()).resolves.toBe(true);
  }, 15000); // 15 second timeout for network operation
});
