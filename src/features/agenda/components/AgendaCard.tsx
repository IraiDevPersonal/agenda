import { cn } from "@/config/tailwind-merge";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export const AgendaCard: React.FC<Props> = ({ className, ...props }) => {
  return (
    <article
      className={cn(
        "flex items-center gap-4 p-3 shadow-lg rounded-xl bg-background-default shadow-black/10",
        className
      )}
      {...props}
    />
  );
};
