"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

// App-level providers — add theme/context providers here, wrapping children.
// QueryClientProvider must stay (all API calls run through TanStack Query).
// One QueryClient instance per component tree (avoids leaking state across
// requests on the server, per Next.js App Router guidance).
export function Provider({ children }: ProviderProps) {
  const [queryClient] = useState(() => new QueryClient());
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
