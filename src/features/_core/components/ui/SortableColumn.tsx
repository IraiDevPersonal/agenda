import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import IconLoading from "../icons/IconLoading";
import Box from "@/features/_core/components/ui/Box";
import cn from "@/config/pluggins/cn";

export type SortableColumnProps = {
  children: React.ReactNode;
  title: React.ReactNode;
  classNames?: Partial<{
    wrapper: string;
    header: string;
    body: string;
  }>;
  isLoading?: boolean;
  id: string;
};

const SortableColumn: React.FC<SortableColumnProps> = ({
  classNames,
  children,
  title,
  isLoading,
  id,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, items } = useSortable(
    { id },
  );
  const hasItems = items.length > 0;
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
        {isLoading && (
          <figure>
            <IconLoading className="animate-spin" />
          </figure>
        )}
      </div>
      <ul
        className={cn(
          "px-4 pt-2 space-y-2 scrollbar-styles scrollbar-w-0 scrollbar-thumb-transparent",
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
