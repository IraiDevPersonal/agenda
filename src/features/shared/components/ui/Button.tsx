import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/config/tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors duration-300 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white shadow-sm shadow-black/5 hover:bg-black/90",
        danger:
          "bg-red-500 text-white shadow-sm shadow-black/5 hover:bg-red-500/90",
        light: "hover:bg-black/5",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-10 rounded-lg px-8",
        icon: "h-9 w-9",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type Props = {
  asChild?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button: React.FC<Props> = ({
  ref,
  size,
  variant,
  className,
  type = "button",
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      type={type}
      ref={ref}
      {...props}
    />
  );
};
