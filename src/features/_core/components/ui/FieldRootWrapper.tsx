import { cn } from "@/config";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const FieldRootWrapper: React.FC<Props> = ({ className, ...props }) => {
  return <div className={cn("space-y-1.5", className)} {...props} />;
};
