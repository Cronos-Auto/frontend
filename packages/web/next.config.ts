import type { NextConfig } from "next";

// Fixed conventions the root contract relies on: Next listens on $PORT
// (default 4200) and proxies /api/* to the standalone Express API
// (packages/api), which listens internally on $API_PORT (default 4201).
// This keeps a single public-facing port and origin for the browser.
const apiUrl = process.env.API_URL ?? `http://localhost:${process.env.API_PORT ?? 4201}`;

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${apiUrl}/api/:path*` }];
  },
};

export default nextConfig;
