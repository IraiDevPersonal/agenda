import { use } from "react";
import AppointmentColumn from "./AppointmentColumn";
import CardAppointment from "./CardAppointment";
import type { GetAppointmentsByTypeReturn } from "../../services/agenda.service";

type Props = {
  getAppointments: GetAppointmentsByTypeReturn;
};

const ColumnAppointmentCancelled: React.FC<Props> = ({ getAppointments }) => {
  const [error, appointments] = use(getAppointments);

  if (error) {
    return <p className="text-center text-3xl text-red-500">{error}</p>;
  }
  return (
    <>
      <AppointmentColumn id="cancelled" appointments={appointments!}>
        {(appointment) => <CardAppointment id="cancelled" appointment={appointment} />}
      </AppointmentColumn>
    </>
  );
};

export default ColumnAppointmentCancelled;
