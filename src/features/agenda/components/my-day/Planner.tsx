import { ArrayMap } from "@/features/_core/components/utils/ArrayMap";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useSortablePlanner } from "../../hooks/useSortablePlanner";
import { AgendaGrid } from "../shared/AgendaGrid";
import { ColumnAppointmentAvailable } from "../appointment/ColumnAppointmentAvailable";
import { ColumnAppointmentCancelled } from "../appointment/ColumnAppointmentCancelled";
import { ColumnAppointmentConfirmed } from "../appointment/ColumnAppointmentConfirmed";
import { ColumnAppointmentToBeConfirm } from "../appointment/ColumnAppointmentToBeConfirm";

export const Planner = () => {
  const { columns, handleDragEnd } = useSortablePlanner();

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      // modifiers={[restrictToHorizontalAxis]}
    >
      <AgendaGrid>
        <SortableContext items={columns}>
          <ArrayMap dataset={columns}>
            {(col) => {
              switch (col.id) {
                case "available":
                  return <ColumnAppointmentAvailable key={col.id} />;
                case "cancelled":
                  return <ColumnAppointmentCancelled key={col.id} />;
                case "confirmed":
                  return <ColumnAppointmentConfirmed key={col.id} />;
                case "to-be-confirm":
                  return <ColumnAppointmentToBeConfirm key={col.id} />;
                default:
                  return null;
              }
            }}
          </ArrayMap>
        </SortableContext>
      </AgendaGrid>
    </DndContext>
  );
};
