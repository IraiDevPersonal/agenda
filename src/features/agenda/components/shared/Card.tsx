import { cn } from "@/config/tailwind-merge";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export const Card: React.FC<Props> = ({ className, ...props }) => {
  return (
    <article
      className={cn(
        "flex items-center gap-4 p-3 shadow-lg rounded-xl border",
        "shadow-black/10 border-black/5 bg-white/20",
        "hover:scale-105 transition-transform duration-150",
        className
      )}
      {...props}
    />
  );
};
