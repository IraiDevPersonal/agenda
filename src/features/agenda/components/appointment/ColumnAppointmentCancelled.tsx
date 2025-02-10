import AppointmentColumn from "./AppointmentColumn";
import CardAppointment from "./CardAppointment";

const ColumnAppointmentCancelled = () => {
  return (
    <>
      <AppointmentColumn id="cancelled" appointments={[1, 2, 3, 4, 5]}>
        {() => <CardAppointment id="cancelled" />}
      </AppointmentColumn>
    </>
  );
};

export default ColumnAppointmentCancelled;
