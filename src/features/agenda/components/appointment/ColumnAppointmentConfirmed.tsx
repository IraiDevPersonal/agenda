import AppointmentColumn from "./AppointmentColumn";
import CardAppointment from "./CardAppointment";

const ColumnAppointmentConfirmed = () => {
  return (
    <>
      <AppointmentColumn id="confirmed" appointments={[1, 2]}>
        {() => <CardAppointment id="confirmed" />}
      </AppointmentColumn>
    </>
  );
};

export default ColumnAppointmentConfirmed;
