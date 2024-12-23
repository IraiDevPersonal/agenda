export const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  NOT_FOUND: "/not-found",
} as const;

export type RoutePaths = (typeof ROUTES)[keyof typeof ROUTES];
