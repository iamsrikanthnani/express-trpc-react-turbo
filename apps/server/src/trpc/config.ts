import { initTRPC, TRPCError } from "@trpc/server";
import { appRouter } from "../app";

// Initialize TRPC with context
export const t = initTRPC.context().create();

export const publicProcedure = t.procedure;

// Define router
export const router = t.router;

// Export AppRouter type
export type AppRouter = typeof appRouter;
