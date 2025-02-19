import cn from "@/config/tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const FieldRootWrapper: React.FC<Props> = ({ className, ...props }) => {
  return <div className={cn("space-y-1.5", className)} {...props} />;
};

export default FieldRootWrapper;
