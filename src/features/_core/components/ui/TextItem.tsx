import { cn } from "@/config";

type Props = {
  children: React.ReactNode;
  className?: string;
  label: string;
  classNames?: Partial<{
    children: string;
    label: string;
  }>;
};

export const TextItem: React.FC<Props> = ({
  label,
  children,
  className,
  classNames,
}) => {
  return (
    <div className={cn("text-base leading-none", className)}>
      <strong className={cn("font-semibold", classNames?.label)}>
        {label}:{" "}
      </strong>
      <span className={cn("opacity-75 font-normal", classNames?.children)}>
        {children}
      </span>
    </div>
  );
};
