import { cn } from "@/config";

type Props = {
  children: React.ReactNode;
  title: React.ReactNode;
  className?: string;
};

export const DataWrapper: React.FC<Props> = ({
  title,
  children,
  className,
}) => {
  return (
    <section className={cn("flex flex-col gap-1.5 p-6", className)}>
      <h5 className="text-lg font-semibold leading-none mb-1">{title}</h5>
      {children}
    </section>
  );
};
