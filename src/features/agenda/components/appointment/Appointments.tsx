import { Suspense } from "react";
import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import AgendaService from "../../services/agenda.service";
import ColumnAppointmentAvailable from "./ColumnAppointmentAvailable";
import ColumnAppointmentCancelled from "./ColumnAppointmentCancelled";
import ColumnAppointmentConfirmed from "./ColumnAppointmentConfirmed";
import ColumnAppointmentToBeConfirm from "./ColumnAppointmentToBeConfirm";
import useFilterAppointments from "../../hooks/useFilterAppointments";
import type { AgendaColumns } from "../../domain/types";

type Props = {
  columns: { id: AgendaColumns }[];
};

const agenda = new AgendaService();

const Appointments: React.FC<Props> = ({ columns }) => {
  const { appointmentsFilters } = useFilterAppointments();

  return (
    <>
      <ArrayMap dataset={columns}>
        {(col) => {
          switch (col.id) {
            case "available":
              return (
                <Suspense key={col.id} fallback="Cargando...">
                  <ColumnAppointmentAvailable
                    getAppointments={agenda.getAppointmentsByType(
                      "AVAILABLE",
                      appointmentsFilters,
                    )}
                  />
                </Suspense>
              );
            case "cancelled":
              return (
                <Suspense key={col.id} fallback="Cargando...">
                  <ColumnAppointmentCancelled
                    getAppointments={agenda.getAppointmentsByType(
                      "CANCELLED",
                      appointmentsFilters,
                    )}
                  />
                </Suspense>
              );
            case "confirmed":
              return (
                <Suspense key={col.id} fallback="Cargando...">
                  <ColumnAppointmentConfirmed
                    getAppointments={agenda.getAppointmentsByType(
                      "CONFIRMED",
                      appointmentsFilters,
                    )}
                  />
                </Suspense>
              );
            case "to-confirm":
              return (
                <Suspense key={col.id} fallback="Cargando...">
                  <ColumnAppointmentToBeConfirm
                    getAppointments={agenda.getAppointmentsByType(
                      "TO_CONFIRM",
                      appointmentsFilters,
                    )}
                  />
                </Suspense>
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
