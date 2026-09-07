// Cross-platform port handling for `next dev`/`next start` — avoids the
// bash-only "${PORT:-4200}" syntax, which breaks on Windows cmd/PowerShell.
// dotenv-cli (invoked by the parent npm script) already loaded PORT from the
// root .env into process.env before this script runs.
import { spawn } from "node:child_process";

const mode = process.argv[2]; // "dev" or "start"
const port = process.env.PORT || "4200";

const child = spawn("next", [mode, "-p", port], {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => process.exit(code ?? 0));
