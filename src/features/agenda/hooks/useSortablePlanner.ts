import { BrowserStorage } from "@/config/browser-storage";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";
import { AgendaColumn } from "../domain";

const AGENDA_COLUMNS: AgendaColumn[] = [
  { id: "confirmed" },
  { id: "to-be-confirm" },
  { id: "available" },
  { id: "cancelled" },
];

const storage = new BrowserStorage("user_columns_order");

export function useSortablePlanner() {
  const [columns, setColumns] = useState(
    storage.get<AgendaColumn[]>(AGENDA_COLUMNS)
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
