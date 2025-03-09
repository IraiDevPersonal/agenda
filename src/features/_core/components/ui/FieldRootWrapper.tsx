import cn from "@/config/pluggins/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const FieldRootWrapper: React.FC<Props> = ({ className, ...props }) => {
  return <div className={cn("space-y-1.5", className)} {...props} />;
};

export default FieldRootWrapper;
