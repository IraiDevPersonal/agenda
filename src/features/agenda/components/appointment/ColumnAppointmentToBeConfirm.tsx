import AppointmentColumn, { AppointmentColumnProps } from "./AppointmentColumn";
import CardAppointment from "./CardAppointment";

type Props = Pick<AppointmentColumnProps, "appointments">;

const ColumnAppointmentToBeConfirm: React.FC<Props> = ({ appointments }) => {
  return (
    <>
      <AppointmentColumn id="to-confirm" appointments={appointments}>
        {(appointment) => (
          <CardAppointment id="to-confirm" appointment={appointment} />
        )}
      </AppointmentColumn>
    </>
  );
};

export default ColumnAppointmentToBeConfirm;
