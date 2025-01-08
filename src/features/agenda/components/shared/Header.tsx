import { cn } from "@/config";
import { Box } from "@/features/_core/components/ui";

type Props = React.PropsWithChildren<{
  title: string;
  className?: string;
  classNames?: Partial<{
    title: string;
  }>;
}>;

export const Header: React.FC<Props> = ({
  classNames,
  className,
  children,
  title,
}) => {
  return (
    <Box
      as="header"
      className={cn("flex items-center w-full gap-4", className)}
    >
      <h1 className={cn("mr-auto text-2xl font-bold", classNames?.title)}>
        {title}
      </h1>
      {children}
    </Box>
  );
};
