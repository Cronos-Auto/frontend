import type { NextConfig } from "next";

// Two build modes, switched by the GITHUB_PAGES env var (set only by the
// deploy workflow, .github/workflows/deploy-pages.yml):
//
// - Normal (default): SSR/dev server. Next listens on $PORT (default 4200)
//   and proxies /api/* to the standalone Express API (packages/api), which
//   listens internally on $API_PORT (default 4201).
// - GITHUB_PAGES=true: fully static export (no Node server, no API calls —
//   GitHub Pages only serves static files). Built with basePath/assetPrefix
//   set to the repo path, since a project Pages site is served from
//   https://<user>.github.io/<repo>/, not the domain root.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const apiUrl = process.env.API_URL ?? `http://localhost:${process.env.API_PORT ?? 4201}`;

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath,
        images: { unoptimized: true },
      }
    : {
        async rewrites() {
          return [{ source: "/api/:path*", destination: `${apiUrl}/api/:path*` }];
        },
      }),
};

export default nextConfig;
