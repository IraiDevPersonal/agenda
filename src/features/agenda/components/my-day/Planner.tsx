import { ArrayMap } from "@/features/shared/components/utils/ArrayMap";
import { DndContext } from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { SortableContext } from "@dnd-kit/sortable";
import { Fragment } from "react";
import { useSortablePlanner } from "../../hooks/useSortablePlanner";
import { AgendaGrid } from "../AgendaGrid";
import { ColumnHoursAvailable } from "../ColumnHoursAvailable";
import { ColumnHoursCancelled } from "../ColumnHoursCancelled";
import { ColumnHoursConfirmed } from "../ColumnHoursConfirmed";
import { ColumnHoursToBeConfirm } from "../ColumnHoursToBeConfirm";

const COLS = [
  { defaultPosition: 0, id: "confirmed", comp: <ColumnHoursConfirmed /> },
  { defaultPosition: 1, id: "to-be-confirm", comp: <ColumnHoursToBeConfirm /> },
  { defaultPosition: 2, id: "available", comp: <ColumnHoursAvailable /> },
  { defaultPosition: 3, id: "cancelled", comp: <ColumnHoursCancelled /> },
];

export const Planner = () => {
  const { columns, handleDragEnd } = useSortablePlanner({
    initialColumns: COLS,
  });

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      modifiers={[restrictToHorizontalAxis]}
    >
      <AgendaGrid>
        <SortableContext items={columns}>
          <ArrayMap dataset={columns}>
            {(col) => <Fragment key={col.id}>{col.comp}</Fragment>}
          </ArrayMap>
        </SortableContext>
      </AgendaGrid>
    </DndContext>
  );
};
