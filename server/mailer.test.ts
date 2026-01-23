import { describe, expect, it } from "vitest";
import { sendContactEmail } from "./mailer";

describe("Contact Form Mailer", () => {
  it("validates SMTP credentials by sending a test email", async () => {
    const testData = {
      name: "Test User",
      company: "Test Company GmbH",
      email: "test@example.com",
      phone: "+49 123 456789",
      message: "Dies ist eine Test-Nachricht zur Validierung der SMTP-Konfiguration.",
    };

    const result = await sendContactEmail(testData);

    // If SMTP credentials are correct, the email should be sent successfully
    expect(result.success).toBe(true);
    expect(result.error).toBeUndefined();
  }, 30000); // 30 second timeout for email sending
});
