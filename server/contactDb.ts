import { eq } from "drizzle-orm";
import { getDb } from "./db";
import { contactSubmissions, type InsertContactSubmission } from "../drizzle/schema";

/**
 * Insert a new contact form submission into the database
 */
export async function createContactSubmission(data: InsertContactSubmission) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  const [result] = await db.insert(contactSubmissions).values(data);
  return result;
}

/**
 * Get all contact submissions (for admin dashboard)
 */
export async function getAllContactSubmissions() {
  const db = await getDb();
  if (!db) {
    return [];
  }
  return db.select().from(contactSubmissions).orderBy(contactSubmissions.createdAt);
}

/**
 * Update email sent status for a submission
 */
export async function updateEmailStatus(
  id: number,
  status: "pending" | "sent" | "failed"
) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  await db
    .update(contactSubmissions)
    .set({ emailSent: status })
    .where(eq(contactSubmissions.id, id));
}
