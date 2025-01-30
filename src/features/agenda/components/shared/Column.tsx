import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Box from "@/features/_core/components/ui/Box";
import type { AgendaColumns } from "../../domain";
import { cn } from "@/config/tailwind-merge";

const HASH_COLORS: Record<
  Props["id"],
  { header: string; body: string; wrapper: string }
> = {
  "to-confirm": {
    wrapper: "text-amber-700 bg-amber-50/60 border-amber-50",
    header: "hover:bg-amber-100 cursor-move",
    body: "scrollbar-thumb-amber-200",
  },
  available: {
    wrapper: "text-emerald-700 bg-emerald-50/60 border-emerald-50",
    header: "hover:bg-emerald-100 cursor-move",
    body: "scrollbar-thumb-emerald-200",
  },
  confirmed: {
    wrapper: "text-sky-700 bg-sky-50/60 border-sky-50",
    header: "hover:bg-sky-100",
    body: "scrollbar-thumb-sky-200 cursor-move",
  },
  cancelled: {
    wrapper: "text-red-700 bg-red-50/60 border-red-50",
    header: "hover:bg-red-100",
    body: "scrollbar-thumb-red-200 cursor-move",
  },
};

type Props = React.PropsWithChildren<{
  isHovereableHeader?: boolean;
  heightAuto?: boolean;
  className?: string;
  id: AgendaColumns;
  title: string;
  count: number;
}>;

const Column: React.FC<Props> = ({
  isHovereableHeader = true,
  heightAuto = false,
  className,
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
        "w-full bg-background-secondary p-0 rounded-2xl border overflow-hidden",
        heightAuto ? "pb-4" : "h-[90vh]",
        HASH_COLORS[id].wrapper,
        className
      )}
    >
      <div
        {...attributes}
        {...listeners}
        className={cn(
          "px-4 py-2.5 transition-colors duration-300 flex justify-between items-center cursor-default",
          isHovereableHeader && HASH_COLORS[id].header
        )}
      >
        <h3 className="text-lg font-bold cursor-text">
          {title} ({count})
        </h3>
      </div>
      <ul
        className={cn(
          "px-4 pt-2 space-y-2",
          "scrollbar-styles",
          !heightAuto && "h-[calc(100%-65px)] overflow-y-auto",
          HASH_COLORS[id].body
        )}
      >
        {children}
      </ul>
    </Box>
  );
};

export default Column;
