import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { AgendaColumns } from "../../domain";
import Box from "@/features/_core/components/ui/Box";
import { cn } from "@/config/tailwind-merge";

const HASH_COLORS: Record<
  Props["id"],
  { header: string; body: string; wrapper: string }
> = {
  "to-confirm": {
    wrapper: "text-amber-700 bg-amber-50 border-amber-100",
    header: "hover:bg-amber-100",
    body: "scrollbar-thumb-amber-700",
  },
  available: {
    wrapper: "text-emerald-700 bg-emerald-50 border-emerald-100",
    header: "hover:bg-emerald-100",
    body: "scrollbar-thumb-emerald-700",
  },
  confirmed: {
    wrapper: "text-sky-700 bg-sky-50 border-sky-100",
    header: "hover:bg-sky-100",
    body: "scrollbar-thumb-sky-700",
  },
  cancelled: {
    wrapper: "text-red-700 bg-red-50 border-red-100",
    header: "hover:bg-red-100",
    body: "scrollbar-thumb-red-700",
  },
};

type Props = React.PropsWithChildren<{
  id: AgendaColumns;
  className?: string;
  title: string;
  count: number;
}>;

const Column: React.FC<Props> = ({ className, children, title, count, id }) => {
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
        "w-full bg-background-secondary p-0 rounded-2xl shadow-lg shadow-black/10 overflow-hidden border-2 h-[90vh]",
        HASH_COLORS[id].wrapper,
        className
      )}
    >
      <div
        {...attributes}
        {...listeners}
        className={cn(
          "px-4 py-2.5 transition-colors duration-300 hover:bg-black/5 flex justify-between items-center cursor-move",
          HASH_COLORS[id].header
        )}
      >
        <h3 className="text-lg font-bold">
          {title} ({count})
        </h3>
      </div>
      <ul
        className={cn(
          "px-4 pt-2 space-y-2 h-[calc(100%-65px)]",
          "scrollbar-styles overflow-y-auto",
          HASH_COLORS[id].body
        )}
      >
        {children}
      </ul>
    </Box>
  );
};

export default Column;
