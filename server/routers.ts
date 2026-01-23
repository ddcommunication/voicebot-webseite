import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { sendContactEmail } from "./mailer";
import { createContactSubmission, updateEmailStatus } from "./contactDb";
import { z } from "zod";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
          company: z.string().optional(),
          email: z.string().email("Ungültige E-Mail-Adresse"),
          phone: z.string().min(5, "Telefonnummer muss mindestens 5 Zeichen lang sein"),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        // Save to database first
        const submission = await createContactSubmission({
          name: input.name,
          company: input.company || null,
          email: input.email,
          phone: input.phone,
          message: input.message || null,
          emailSent: "pending",
        });

        // Try to send email (non-blocking)
        try {
          const emailResult = await sendContactEmail({
            name: input.name,
            company: input.company || "",
            email: input.email,
            phone: input.phone,
            message: input.message,
          });
          if (emailResult.success) {
            await updateEmailStatus(submission.insertId as number, "sent");
          } else {
            await updateEmailStatus(submission.insertId as number, "failed");
            console.warn("[Contact] Email sending failed:", emailResult.error);
          }
        } catch (error) {
          console.error("[Contact] Email sending error:", error);
          await updateEmailStatus(submission.insertId as number, "failed");
        }

        // Always return success if database save succeeded
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
