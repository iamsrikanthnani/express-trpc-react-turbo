import { publicProcedure, router, t } from "../config";

export const testRouter = router({
  getTest: publicProcedure.query(() => {
    return { message: "Hello World" };
  }),
});
