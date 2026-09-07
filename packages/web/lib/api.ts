// Plain fetch-based API client (replaces the old oRPC client). Requests to
// /api/* are same-origin: Next.js rewrites them to the Express API
// (see next.config.ts), so this works in dev and prod without CORS.

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`/api${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!res.ok) throw new Error(`API error ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}

export const api = {
  ping: () => apiFetch<{ message: string }>("/ping"),
};
