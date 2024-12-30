/* eslint-disable @typescript-eslint/no-empty-object-type */
import { LucideProps } from "lucide-react";
import { ROUTES } from "./routes";

export type ElementAttributes<T extends HTMLElement | unknown = HTMLElement> =
  React.HTMLAttributes<T>;
export type TagElements = keyof React.JSX.IntrinsicElements;
export type IconProps = LucideProps;
export type RoutePaths = (typeof ROUTES)[keyof typeof ROUTES];

type ExtractRouteParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? { [K in Param | keyof ExtractRouteParams<`/${Rest}`>]: string }
    : T extends `${string}:${infer Param}`
    ? { [K in Param]: string }
    : {};

export type LinkRouteProps = {
  to: RoutePaths;
  params?: ExtractRouteParams<RoutePaths>;
  query?: Record<string, any> | string;
};
