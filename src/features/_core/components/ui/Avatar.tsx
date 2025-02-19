import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import IconUser from "../icons/IconUser";
import cn from "@/config/tailwind-merge";

type AvatarWrapperProps = {
  ref?: React.Ref<HTMLSpanElement>;
} & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;

const AvatarWrapper: React.FC<AvatarWrapperProps> = ({ className, ref, ...props }) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
);

type AvatarImageProps = {
  ref?: React.Ref<HTMLImageElement>;
} & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;

const AvatarImage: React.FC<AvatarImageProps> = ({ className, ref, ...props }) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
);

type AvatarFallbackProps = {
  ref?: React.Ref<HTMLImageElement>;
} & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;

const AvatarFallback: React.FC<AvatarFallbackProps> = ({ className, ref, ...props }) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-[inherit] bg-muted text-xs",
      className,
    )}
    {...props}
  />
);

type Props = {
  fallback?: React.ReactNode;
  src?: string;
  alt: string;
  classNames?: Partial<{
    fallback: string;
    wrapper: string;
    image: string;
  }>;
};

const Avatar: React.FC<Props> = ({ fallback, classNames, ...props }) => {
  return (
    <AvatarWrapper className={cn(classNames?.wrapper)}>
      <AvatarImage {...props} className={cn(classNames?.image)} />
      <AvatarFallback className={cn("bg-muted text-foreground", classNames?.fallback)}>
        {fallback || <IconUser aria-hidden="true" />}
      </AvatarFallback>
    </AvatarWrapper>
  );
};

export default Avatar;
