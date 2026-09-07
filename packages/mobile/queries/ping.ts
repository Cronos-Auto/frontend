import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

// Data hooks live here, one file per feature — each wraps its query/mutation
// options. Mirrors packages/web/queries/.
export function usePing() {
  return useQuery({ queryKey: ["ping"], queryFn: api.ping });
}
