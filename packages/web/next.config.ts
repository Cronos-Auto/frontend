import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

// Como o repositório é Cronos-Auto/cronos-auto.github.io,
// o site roda na RAIZ do domínio, então basePath DEVE ser vazio ("").
const basePath = ""; 

const apiUrl = process.env.API_URL ?? `http://localhost:${process.env.API_PORT ?? 4201}`;

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        // Remova basePath e assetPrefix se forem vazios, ou passe ""
        basePath: basePath,
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