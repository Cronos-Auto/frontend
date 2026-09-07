import express from "express";
import cors from "cors";
import { pingRouter } from "./routes/ping";

// API features are Express routers, one file per feature in ./routes/,
// composed into this app. Served at /api/*, called through the plain
// fetch-based clients (web: src/lib/api.ts, mobile: lib/api.ts).

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", pingRouter);

const port = Number(process.env.API_PORT ?? 4201);
app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});

export default app;
