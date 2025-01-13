import { cn } from "@/config";

type Props = { className?: string; children: React.ReactNode };

export const InputWrapper: React.FC<Props> = ({ className, ...props }) => {
  return <div className={cn("relative", className)} {...props} />;
};
