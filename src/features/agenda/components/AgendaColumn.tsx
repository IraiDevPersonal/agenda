import { cn } from "@/config/tailwind-merge";
import { IconReload } from "@/features/shared/components/icons/IconReload";
import { Box } from "@/features/shared/components/ui/Box";
import { Button } from "@/features/shared/components/ui/Button";

type Props = React.PropsWithChildren<{
  title: string;
  count: number;
  classNames?: Partial<{ header: string; body: string; wrapper: string }>;
}>;

export const AgendaColumn: React.FC<Props> = ({
  classNames,
  children,
  title,
  count,
}) => {
  return (
    <Box
      as="section"
      className={cn(
        "w-full bg-background-secondary p-0 rounded-2xl shadow-lg shadow-black/10 overflow-hidden h-[90vh]",
        classNames?.wrapper
      )}
    >
      <div
        className={cn(
          "px-4 py-2.5 transition-colors duration-300 hover:bg-black/5 flex justify-between items-center",
          classNames?.header
        )}
      >
        <h3 className="font-bold leading-none">
          {title} ({count})
        </h3>
        <Button size="icon-sm" variant="light" className="hover:bg-white/35">
          <IconReload />
        </Button>
      </div>
      <ul
        className={cn(
          "px-4 pt-2 space-y-2 h-[calc(100%-65px)] overflow-auto",
          classNames?.body
        )}
      >
        {children}
      </ul>
    </Box>
  );
};
