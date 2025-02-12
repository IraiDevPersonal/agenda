import AppointmentColumn, { AppointmentColumnProps } from "./AppointmentColumn";
import CardAppointment from "./CardAppointment";

type Props = Pick<AppointmentColumnProps, "appointments">;

const ColumnAppointmentConfirmed: React.FC<Props> = ({ appointments }) => {
  return (
    <>
      <AppointmentColumn id="confirmed" appointments={appointments}>
        {(appointment) => (
          <CardAppointment id="confirmed" appointment={appointment} />
        )}
      </AppointmentColumn>
    </>
  );
};

export default ColumnAppointmentConfirmed;
