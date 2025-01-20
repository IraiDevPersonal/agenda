/* eslint-disable @typescript-eslint/no-empty-object-type */
import { LucideProps } from "lucide-react";
import { ROUTES } from "./routes";

export type HTMLAttributes<T extends HTMLElement | unknown = HTMLElement> =
  React.HTMLAttributes<T>;
export type HTMLTags = keyof React.JSX.IntrinsicElements;
export type IconProps = LucideProps;
export type Paths = (typeof ROUTES)[keyof typeof ROUTES];

type ExtractURLParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? { [K in Param | keyof ExtractURLParams<`/${Rest}`>]: string }
    : T extends `${string}:${infer Param}`
    ? { [K in Param]: string }
    : {};

export type CustomLinkProps = {
  query?: Record<string, any> | string;
  params?: ExtractURLParams<Paths>;
  to: Paths;
};

export type Option = { label: string; value: string | number };

export type DialogHandlerProps = {
  isOpen: boolean;
  onClose(): void;
};
