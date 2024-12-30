import { PropsWithChildren } from "react";
import { CreateElement } from "../utils";
import { cn } from "@/config";
import type { ElementAttributes, TagElements } from "@/config";

type Props<T extends HTMLElement | unknown = HTMLElement> = {
  as: TagElements;
  ref?: React.Ref<T>;
  shouldUseDefaultStyles?: boolean;
} & PropsWithChildren &
  ElementAttributes<T>;

export const Box = <T extends HTMLElement | unknown = HTMLElement>({
  shouldUseDefaultStyles = true,
  className,
  ...props
}: Props<T>) => {
  return (
    <CreateElement
      {...props}
      className={cn(shouldUseDefaultStyles && "p-4", className)}
    />
  );
};
