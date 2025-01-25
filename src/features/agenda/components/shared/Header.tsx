import Box from "@/features/_core/components/ui/Box";
import DialogBonoFonasa from "./DialogBonoFonasa";
import { cn } from "@/config";

type Props = React.PropsWithChildren<{
  title: string;
  className?: string;
  classNames?: Partial<{
    title: string;
  }>;
}>;

const Header: React.FC<Props> = ({
  classNames,
  className,
  children,
  title,
}) => {
  return (
    <Box
      as="header"
      className={cn(
        "flex flex-wrap items-center sm:justify-end w-full gap-4 sticky top-0 bg-background z-50",
        className
      )}
    >
      <h1 className={cn("mr-auto text-2xl font-bold", classNames?.title)}>
        {title}
      </h1>
      {children}
      <DialogBonoFonasa />
    </Box>
  );
};

export default Header;
