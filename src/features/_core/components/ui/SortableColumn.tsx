import { useMemo } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Box from "@/features/_core/components/ui/Box";
import cn from "@/config/tailwind-merge";

type Props = {
  children: React.ReactNode;
  classNames?: Partial<{
    wrapper: string;
    header: string;
    body: string;
  }>;
  title: string;
  id: string;
};

const SortableColumn: React.FC<Props> = ({ classNames, children, title, id }) => {
  const { attributes, listeners, setNodeRef, transform, transition, items } = useSortable(
    { id },
  );
  const hasItems = useMemo(() => items.length > 0, [items]);
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
        "w-full p-0 rounded-2xl border overflow-hidden bg-accent",
        hasItems ? "h-[86vh]" : "pb-4",
        classNames?.wrapper,
      )}
    >
      <div
        {...attributes}
        {...listeners}
        className={cn(
          "px-4 py-2.5 transition-colors duration-300 flex justify-between items-center cursor-default",
          hasItems && classNames?.header,
        )}
      >
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <ul
        className={cn(
          "px-4 pt-2 space-y-2 scrollbar-styles",
          hasItems && "h-[calc(100%-65px)] overflow-y-auto",
          classNames?.body,
        )}
      >
        {children}
      </ul>
    </Box>
  );
};

export default SortableColumn;
