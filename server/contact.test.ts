import { describe, it, expect, beforeEach } from "vitest";
import { createContactSubmission, getAllContactSubmissions } from "./contactDb";

describe("Contact Form Submission", () => {
  it("should save contact form submission to database", async () => {
    const testData = {
      name: "Test User",
      company: "Test Company",
      email: "test@example.com",
      phone: "+49 123 456789",
      message: "This is a test message",
      emailSent: "pending" as const,
    };

    const result = await createContactSubmission(testData);
    
    // Check that the insert was successful
    expect(result).toBeDefined();
    expect(result.insertId).toBeGreaterThan(0);
  });

  it("should retrieve all contact submissions from database", async () => {
    const submissions = await getAllContactSubmissions();
    
    // Should return an array (may be empty if no submissions yet)
    expect(Array.isArray(submissions)).toBe(true);
  });

  it("should handle submission without company and message (optional fields)", async () => {
    const testData = {
      name: "Minimal User",
      company: null,
      email: "minimal@example.com",
      phone: "+49 987 654321",
      message: null,
      emailSent: "pending" as const,
    };

    const result = await createContactSubmission(testData);
    
    expect(result).toBeDefined();
    expect(result.insertId).toBeGreaterThan(0);
  });
});
