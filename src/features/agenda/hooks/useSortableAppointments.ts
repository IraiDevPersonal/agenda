import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { DragEndEvent } from "@dnd-kit/core";
import BrowserStorage from "@/config/browser-storage";
import { AGENDA_COLUMNS } from "../utils/constants.util";
import type { AgendaColumns } from "../domain/types";

const storage = new BrowserStorage("agenda_user_columns_order");

export default function useSortableAppointments() {
  const [columns, setColumns] = useState(
    storage.get<{ id: AgendaColumns }[]>(AGENDA_COLUMNS),
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
