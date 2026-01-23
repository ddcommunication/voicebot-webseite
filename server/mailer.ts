import nodemailer from "nodemailer";

/**
 * Sends contact form data via email
 * Uses SMTP configuration from environment variables
 */
export async function sendContactEmail(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  message?: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    // Create transporter with SMTP configuration
    // For production, configure SMTP credentials via environment variables
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.strato.de",
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "voicebot@dd-communication.de",
        pass: process.env.SMTP_PASS || "",
      },
      tls: {
        // Do not fail on invalid certs (for development)
        rejectUnauthorized: false,
      },
      debug: true, // Enable debug output
      logger: true, // Log to console
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER || "voicebot@dd-communication.de",
      to: "voicebot@dd-communication.de",
      subject: `Neue Kontaktanfrage von ${data.name} (${data.company})`,
      html: `
        <h2>Neue Kontaktanfrage über sprachassistent.net</h2>
        <p><strong>Ansprechpartner:</strong> ${data.name}</p>
        <p><strong>Firma:</strong> ${data.company}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Telefon:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        ${data.message ? `<p><strong>Nachricht:</strong><br/>${data.message.replace(/\n/g, "<br/>")}</p>` : ""}
        <hr/>
        <p style="color: #666; font-size: 12px;">Gesendet am: ${new Date().toLocaleString("de-DE")}</p>
      `,
      text: `
Neue Kontaktanfrage über sprachassistent.net

Ansprechpartner: ${data.name}
Firma: ${data.company}
E-Mail: ${data.email}
Telefon: ${data.phone}
${data.message ? `Nachricht: ${data.message}` : ""}

Gesendet am: ${new Date().toLocaleString("de-DE")}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("[Mailer] Failed to send email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
