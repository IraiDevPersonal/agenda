import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";

type Props = {
  initialColumns: {
    id: string;
    comp: React.ReactNode;
    defaultPosition: number;
  }[];
};

export function useSortablePlanner({ initialColumns }: Props) {
  const [columns, setColumns] = useState(initialColumns);

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (over && active.id !== over.id) {
      setColumns((prevItems) => {
        const oldIndex = prevItems.findIndex((item) => item.id === active.id);
        const newIndex = prevItems.findIndex((item) => item.id === over.id);
        const n = arrayMove(prevItems, oldIndex, newIndex);
        return n;
      });
    }
  };

  return {
    columns,
    handleDragEnd,
  };
}
