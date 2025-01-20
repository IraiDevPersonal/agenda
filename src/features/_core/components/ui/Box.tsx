import type { HTMLAttributes, HTMLTags } from "@/config";
import { cn } from "@/config";
import { CreateElement } from "../utils";

type Props<T extends HTMLElement | unknown = HTMLElement> = {
  shouldUseDefaultStyles?: boolean;
  children: React.ReactNode;
  ref?: React.Ref<T>;
  as: HTMLTags;
} & HTMLAttributes<T>;

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
