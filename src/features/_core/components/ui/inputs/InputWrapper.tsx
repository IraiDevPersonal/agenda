import { cn } from "@/config";

type Props = { className?: string; children: React.ReactNode };

const InputWrapper: React.FC<Props> = ({ className, ...props }) => {
  return <div className={cn("relative", className)} {...props} />;
};

export default InputWrapper;
