import { Box } from "@/features/_core/components/ui";
import { ArrayMap } from "@/features/_core/components/utils";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useSortableAppointments } from "../../hooks";
import {
  ColumnAppointmentAvailable,
  ColumnAppointmentCancelled,
  ColumnAppointmentConfirmed,
  ColumnAppointmentToBeConfirm,
} from ".";

export const Appointments = () => {
  const { columns, handleDragEnd } = useSortableAppointments();

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={columns}>
        <Box as="div" className="flex flex-wrap p-0 gap-4 *:max-w-96">
          <ArrayMap dataset={columns}>
            {(col) => {
              switch (col.id) {
                case "available":
                  return <ColumnAppointmentAvailable key={col.id} />;
                case "cancelled":
                  return <ColumnAppointmentCancelled key={col.id} />;
                case "confirmed":
                  return <ColumnAppointmentConfirmed key={col.id} />;
                case "to-confirm":
                  return <ColumnAppointmentToBeConfirm key={col.id} />;
                default:
                  return null;
              }
            }}
          </ArrayMap>
        </Box>
      </SortableContext>
    </DndContext>
  );
};
