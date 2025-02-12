import AppointmentColumn, { AppointmentColumnProps } from "./AppointmentColumn";
import CardAppointment from "./CardAppointment";

type Props = Pick<AppointmentColumnProps, "appointments">;

const ColumnAppointmentCancelled: React.FC<Props> = ({ appointments }) => {
  return (
    <>
      <AppointmentColumn id="cancelled" appointments={appointments}>
        {(appointment) => (
          <CardAppointment id="cancelled" appointment={appointment} />
        )}
      </AppointmentColumn>
    </>
  );
};

export default ColumnAppointmentCancelled;
