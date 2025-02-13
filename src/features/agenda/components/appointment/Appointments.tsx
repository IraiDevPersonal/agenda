import { use } from "react";
import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import ColumnAppointmentAvailable from "./ColumnAppointmentAvailable";
import ColumnAppointmentCancelled from "./ColumnAppointmentCancelled";
import ColumnAppointmentConfirmed from "./ColumnAppointmentConfirmed";
import ColumnAppointmentToBeConfirm from "./ColumnAppointmentToBeConfirm";
import type { AgendaColumns } from "../../domain/types";
import type { GetAppointmentsReturn } from "../../services/agenda.service";

type Props = {
  columns: { id: AgendaColumns }[];
  getAppointments: GetAppointmentsReturn;
};

const Appointments: React.FC<Props> = ({ columns, getAppointments }) => {
  const [error, appointments] = use(getAppointments);

  if (error) {
    return <p className="text-center text-3xl text-red-500">{error}</p>;
  }

  return (
    <>
      <ArrayMap dataset={columns}>
        {(col) => {
          switch (col.id) {
            case "available":
              return (
                <ColumnAppointmentAvailable
                  key={col.id}
                  appointments={appointments!.availables}
                />
              );
            case "cancelled":
              return (
                <ColumnAppointmentCancelled
                  key={col.id}
                  appointments={appointments!.cancelled}
                />
              );
            case "confirmed":
              return (
                <ColumnAppointmentConfirmed
                  key={col.id}
                  appointments={appointments!.confirmed}
                />
              );
            case "to-confirm":
              return (
                <ColumnAppointmentToBeConfirm
                  key={col.id}
                  appointments={appointments!.toConfirm}
                />
              );
            default:
              return null;
          }
        }}
      </ArrayMap>
    </>
  );
};

export default Appointments;
