import { createElement } from "react";
import type { HTMLAttributes, HTMLTags } from "@/config/types";

type Props<T extends HTMLElement | unknown = HTMLElement> = HTMLAttributes<T> & {
  children: React.ReactNode;
  ref?: React.Ref<T>;
  as: HTMLTags;
};

const CreateElement = <T extends HTMLElement | unknown = HTMLElement>({
  as,
  ref,
  children,
  ...props
}: Props<T>) => {
  return createElement(as, { ref, ...props }, children);
};

export default CreateElement;
