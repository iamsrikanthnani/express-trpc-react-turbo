import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../server/src/trpc/config";

export const trpc = createTRPCReact<AppRouter>();
