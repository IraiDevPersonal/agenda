import { PropsWithChildren } from "react";
import { CreateElement } from "../utils/CreateElement";
import { ElementAttributes, TagElements } from "@/config/type";
import { cn } from "@/config/tailwind-merge";

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
