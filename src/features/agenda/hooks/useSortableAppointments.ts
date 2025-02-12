import { BrowserStorage } from "@/config/browser-storage";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";
import { AgendaColumns } from "../domain";
import { AGENDA_COLUMNS } from "../utils/constants.util";

const storage = new BrowserStorage("agenda_user_columns_order");

export function useSortableAppointments() {
  const [columns, setColumns] = useState(
    storage.get<{ id: AgendaColumns }[]>(AGENDA_COLUMNS)
  );

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (over && active.id !== over.id) {
      setColumns((prevItems) => {
        if (!prevItems) return [];
        const oldIndex = prevItems.findIndex((item) => item.id === active.id);
        const newIndex = prevItems.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(prevItems, oldIndex, newIndex);
        storage.save(newItems);
        return newItems;
      });
    }
  };

  return {
    handleDragEnd,
    columns: columns ?? [],
  };
}
