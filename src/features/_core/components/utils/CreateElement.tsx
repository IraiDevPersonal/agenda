import { ElementAttributes, TagElements } from "@/config/type";
import { createElement, PropsWithChildren } from "react";

type Props<T extends HTMLElement | unknown = HTMLElement> = {
  as: TagElements;
  ref?: React.Ref<T>;
} & PropsWithChildren &
  ElementAttributes<T>;

export const CreateElement = <T extends HTMLElement | unknown = HTMLElement>({
  as,
  ref,
  children,
  ...props
}: Props<T>) => {
  return createElement(as, { ref, ...props }, children);
};
