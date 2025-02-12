import AppointmentColumn, { AppointmentColumnProps } from "./AppointmentColumn";
import CardAvailableAppointment from "./CardAppointmentAvailable";

type Props = Pick<AppointmentColumnProps, "appointments">;

const ColumnAppointmentAvailable: React.FC<Props> = ({ appointments }) => {
  return (
    <AppointmentColumn id="available" appointments={appointments}>
      {(appointment) => <CardAvailableAppointment appointment={appointment} />}
    </AppointmentColumn>
  );
};

export default ColumnAppointmentAvailable;
