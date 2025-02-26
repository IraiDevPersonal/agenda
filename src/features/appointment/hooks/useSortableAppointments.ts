import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { DragEndEvent } from "@dnd-kit/core";
import BrowserStorage from "@/config/browser-storage";
import type { AppointementTypes } from "@/features/appointment/domain/types";

export type AgendaColumns = { id: AppointementTypes };
const storage = new BrowserStorage("agenda_user_columns_order");

export default function useSortableAppointments() {
  const [columns, setColumns] = useState(storage.get<AgendaColumns[]>(AGENDA_COLUMNS));

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
    columns: columns ?? AGENDA_COLUMNS,
  };
}

const AGENDA_COLUMNS: AgendaColumns[] = [
  { id: "available" },
  { id: "to-confirm" },
  { id: "confirmed" },
  { id: "cancelled" },
];
