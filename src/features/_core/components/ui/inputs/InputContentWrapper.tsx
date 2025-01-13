import { cn } from "@/config";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const InputContentWrapper: React.FC<Props> = ({
  children,
  className,
}) => {
  if (!children) return null;
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-y-0 flex items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50",
        className
      )}
    >
      {children}
    </div>
  );
};
