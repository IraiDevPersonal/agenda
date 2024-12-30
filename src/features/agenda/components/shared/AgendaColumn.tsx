import { cn } from "@/config/tailwind-merge";
import { IconReload } from "@/features/_core/components/icons/IconReload";
import { Box } from "@/features/_core/components/ui/Box";
import { Button } from "@/features/_core/components/ui/Button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { AgendaColumn as Column } from "../../domain/types";

type Props = React.PropsWithChildren<{
  title: string;
  count: number;
  id: Column["id"];
  classNames?: Partial<{ header: string; body: string; wrapper: string }>;
}>;

export const AgendaColumn: React.FC<Props> = ({
  classNames,
  children,
  title,
  count,
  id,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box
      as="section"
      ref={setNodeRef}
      style={style}
      className={cn(
        "w-full bg-background-secondary p-0 rounded-2xl shadow-lg shadow-black/10 overflow-hidden h-[90vh]",
        classNames?.wrapper
      )}
    >
      <div
        {...attributes}
        {...listeners}
        className={cn(
          "px-4 py-2.5 transition-colors duration-300 hover:bg-black/5 flex justify-between items-center cursor-move",
          classNames?.header
        )}
      >
        <h3 className="text-lg font-bold leading-none">
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
