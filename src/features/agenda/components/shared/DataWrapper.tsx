import Text from "@/features/_core/components/ui/Text";
import cn from "@/config/tailwind-merge";

type Props = {
  children: React.ReactNode;
  title: React.ReactNode;
  className?: string;
};

const DataWrapper: React.FC<Props> = ({ className, children, title }) => {
  return (
    <section className={cn("flex flex-col gap-1.5", className)}>
      <Text type="subtitle" className="font-semibold leading-none mb-1">
        {title}
      </Text>
      {children}
    </section>
  );
};

export default DataWrapper;
