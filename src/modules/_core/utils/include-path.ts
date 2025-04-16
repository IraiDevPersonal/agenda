import { Paths } from "@/config/types";

export function includePath(paths: Paths[]): boolean {
  const pathname = window.location.pathname;
  return paths.some((path) => path === pathname);
}
