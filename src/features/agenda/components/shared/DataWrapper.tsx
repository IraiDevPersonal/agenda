import { cn } from "@/config";
import { Text } from "@/features/_core/components/ui";

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
    <section className={cn("flex flex-col gap-1.5", className)}>
      <Text type="subtitle" className="font-semibold leading-none mb-1">
        {title}
      </Text>
      {children}
    </section>
  );
};
