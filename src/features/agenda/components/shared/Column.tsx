import { cn } from "@/config/tailwind-merge";
import { Box } from "@/features/_core/components/ui";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { AgendaColumn } from "../../domain";

const HASH_COLORS: Record<
  Props["id"],
  { header: string; body: string; wrapper: string }
> = {
  "to-be-confirm": {
    wrapper: "text-amber-700 bg-amber-50",
    header: "hover:bg-amber-100",
    body: "scrollbar-thumb-amber-700",
  },
  available: {
    wrapper: "text-emerald-700 bg-emerald-50",
    header: "hover:bg-emerald-100",
    body: "scrollbar-thumb-emerald-700",
  },
  confirmed: {
    wrapper: "text-sky-700 bg-sky-50",
    header: "hover:bg-sky-100",
    body: "scrollbar-thumb-sky-700",
  },
  cancelled: {
    wrapper: "text-red-700 bg-red-50",
    header: "hover:bg-red-100",
    body: "scrollbar-thumb-red-700",
  },
};

type Props = React.PropsWithChildren<{
  id: AgendaColumn["id"];
  className?: string;
  title: string;
  count: number;
}>;

export const Column: React.FC<Props> = ({
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
        "w-full bg-background-secondary p-0 rounded-2xl shadow-lg shadow-black/10 overflow-hidden h-[90vh]",
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
        {/* <Button size="icon-sm" variant="light" className="hover:bg-white/35">
          <IconReload />
        </Button> */}
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
