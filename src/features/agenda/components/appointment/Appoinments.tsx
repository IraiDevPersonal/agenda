import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useSortableAppointments } from "../../hooks";
import Box from "@/features/_core/components/ui/Box";
import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import ColumnAppointmentAvailable from "./ColumnAppointmentAvailable";
import ColumnAppointmentCancelled from "./ColumnAppointmentCancelled";
import ColumnAppointmentConfirmed from "./ColumnAppointmentConfirmed";
import ColumnAppointmentToBeConfirm from "./ColumnAppointmentToBeConfirm";

const Appointments = () => {
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

export default Appointments;
