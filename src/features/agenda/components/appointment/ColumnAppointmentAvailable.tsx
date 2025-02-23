import { use } from "react";
import AppointmentColumn from "./AppointmentColumn";
import CardAvailableAppointment from "./CardAppointmentAvailable";
import type { GetAppointmentsByTypeReturn } from "../../services/agenda.service";

type Props = {
  getAppointments: GetAppointmentsByTypeReturn;
};

const ColumnAppointmentAvailable: React.FC<Props> = ({ getAppointments }) => {
  const [error, appointments] = use(getAppointments);

  if (error) {
    return <p className="text-center text-3xl text-red-500">{error}</p>;
  }

  return (
    <AppointmentColumn id="available" appointments={appointments!}>
      {(appointment) => <CardAvailableAppointment appointment={appointment} />}
    </AppointmentColumn>
  );
};

export default ColumnAppointmentAvailable;
