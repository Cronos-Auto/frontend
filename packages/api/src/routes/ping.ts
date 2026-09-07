import { Router } from "express";

// Feature routers live here, one file per feature — composed in ./index.ts.
// Keep each file focused; split into more feature files as they grow.
export const pingRouter = Router();

pingRouter.get("/ping", (_req, res) => {
  res.json({ message: `Pong! ${Date.now()}` });
});
