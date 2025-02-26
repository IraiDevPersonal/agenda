import Box from "@/features/_core/components/ui/Box";
import Button from "@/features/_core/components/ui/Button";
import IconReload from "@/features/_core/components/icons/IconReload";
import PopoverBonoFonasa from "./PopoverBonoFonasa";
import cn from "@/config/tailwind-merge";
import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";

type Props = React.PropsWithChildren<{
  title: string;
  className?: string;
  classNames?: Partial<{
    title: string;
  }>;
}>;

const Header: React.FC<Props> = ({ classNames, className, children, title }) => {
  const { onFilterAppointments } = useAppointmentFilters();
  return (
    <Box
      as="header"
      className={cn(
        "flex flex-wrap items-center sm:justify-end w-full gap-4 sticky top-0 bg-background z-50",
        className,
      )}
    >
      <h1 className={cn("mr-auto text-2xl font-bold", classNames?.title)}>{title}</h1>
      {children}
      <Button
        size="icon"
        title="Actualizar"
        variant="secondary"
        onClick={() => onFilterAppointments({})}
      >
        <IconReload />
      </Button>
      <PopoverBonoFonasa />
    </Box>
  );
};

export default Header;
