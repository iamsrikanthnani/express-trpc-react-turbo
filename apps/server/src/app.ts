import express from "express";
import cookieParser from "cookie-parser";
import * as trpcExpress from "@trpc/server/adapters/express";
import { t } from "./trpc/config";
import { trpcRouters } from "./trpc/routers";

var cors = require("cors");
require("tsconfig-paths").register();

require("dotenv").config();
const app = express();

app.use(cors({ origin: true, credentials: true }));

app.options("*", cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

export const mergeRouters = t.mergeRouters;

export const appRouter = mergeRouters(trpcRouters);

// Express
app.get("/", (req, res) => {
  res.send("Hello World");
});

// TRPC
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
