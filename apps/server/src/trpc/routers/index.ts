import { router } from "../config";
import { testRouter } from "./testRouter";

export const trpcRouters = router({
  test: testRouter,
});
