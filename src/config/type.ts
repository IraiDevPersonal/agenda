import { LucideProps } from "lucide-react";

export type ElementAttributes<T extends HTMLElement | unknown = HTMLElement> =
  React.HTMLAttributes<T>;
export type TagElements = keyof React.JSX.IntrinsicElements;
export type IconProps = LucideProps;
