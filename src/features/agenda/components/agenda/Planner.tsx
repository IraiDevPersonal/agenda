import { DndContext } from "@dnd-kit/core";
import { AgendaGrid } from "../shared/AgendaGrid";
import { SortableContext } from "@dnd-kit/sortable";
import { ArrayMap } from "@/features/_core/components/utils";
import {
  ColumnAppointmentAvailable,
  ColumnAppointmentCancelled,
  ColumnAppointmentConfirmed,
  ColumnAppointmentToBeConfirm,
} from "../appointment";
import { useSortablePlanner } from "../../hooks";

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
                  return (
                    <ColumnAppointmentAvailable
                      key={col.id}
                      hideProfesionalData
                    />
                  );
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
