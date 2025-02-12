import { use } from "react";
import { useSortableAppointments } from "../../hooks";
import { SortableContext } from "@dnd-kit/sortable";
import { DndContext } from "@dnd-kit/core";
import AppointmentGrid from "./AppointmentGrid";
import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import ColumnAppointmentAvailable from "./ColumnAppointmentAvailable";
import ColumnAppointmentCancelled from "./ColumnAppointmentCancelled";
import ColumnAppointmentConfirmed from "./ColumnAppointmentConfirmed";
import ColumnAppointmentToBeConfirm from "./ColumnAppointmentToBeConfirm";
import type { GetAppointmentsReturn } from "../../services/agenda.service";

type Props = {
  getAppointments: GetAppointmentsReturn;
};

const Appointments: React.FC<Props> = ({ getAppointments }) => {
  const { columns, handleDragEnd } = useSortableAppointments();
  const [error, agenda] = use(getAppointments);

  if (error) {
    return <p className="text-center text-3xl text-red-500">{error}</p>;
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={columns}>
        <AppointmentGrid>
          <ArrayMap dataset={columns}>
            {(col) => {
              switch (col.id) {
                case "available":
                  return (
                    <ColumnAppointmentAvailable
                      key={col.id}
                      appointments={agenda!.availables}
                    />
                  );
                case "cancelled":
                  return (
                    <ColumnAppointmentCancelled
                      key={col.id}
                      appointments={agenda!.cancelled}
                    />
                  );
                case "confirmed":
                  return (
                    <ColumnAppointmentConfirmed
                      key={col.id}
                      appointments={agenda!.confirmed}
                    />
                  );
                case "to-confirm":
                  return (
                    <ColumnAppointmentToBeConfirm
                      key={col.id}
                      appointments={agenda!.toConfirm}
                    />
                  );
                default:
                  return null;
              }
            }}
          </ArrayMap>
        </AppointmentGrid>
      </SortableContext>
    </DndContext>
  );
};

export default Appointments;
