import Constants from "expo-constants";

// Plain fetch-based API client (replaces the old oRPC client). Points at
// the standalone Express API (packages/api) directly — set EXPO_PUBLIC_API_URL
// (or app.json extra.apiUrl) to the API's public URL/port (default 4201).
const baseUrl =
  Constants.expoConfig?.extra?.apiUrl ?? process.env.EXPO_PUBLIC_API_URL;

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${baseUrl}/api${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!res.ok) throw new Error(`API error ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}

export const api = {
  ping: () => apiFetch<{ message: string }>("/ping"),
};
