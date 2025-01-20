import { DndContext } from "@dnd-kit/core";
import { Grid } from "./Grid";
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
      <SortableContext items={columns}>
        <Grid>
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
        </Grid>
      </SortableContext>
    </DndContext>
  );
};
