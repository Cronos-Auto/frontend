"use client";
import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

// Data hooks live here, one file per feature — each wraps its query/mutation
// options so components just call the hook.
export function usePing() {
  return useQuery({ queryKey: ["ping"], queryFn: api.ping });
}
