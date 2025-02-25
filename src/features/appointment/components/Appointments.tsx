import { use } from "react";
import AppointmentsDragable from "./AppointmentsDragable";
import type { GetAppointmentsReturn } from "@/features/agenda/services/agenda.service";

type Props = {
  getAppointments: GetAppointmentsReturn;
};

const Appointments: React.FC<Props> = ({ getAppointments }) => {
  const [error, agendaAppointments] = use(getAppointments);

  if (error) return <p>{error}</p>;

  return (
    <>
      <AppointmentsDragable agendaAppointments={agendaAppointments!} />
    </>
  );
};

export default Appointments;
