// Public asset prefix — empty in normal dev/SSR, and set to the repo path
// ("/repo-name") by the GitHub Pages export build (see next.config.ts).
// next/image and next/link add this automatically; plain <img src="/..."> or
// fetch() calls to public/ files must prefix it manually.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
