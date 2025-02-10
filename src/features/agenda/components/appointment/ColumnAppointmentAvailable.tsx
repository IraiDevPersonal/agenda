import AppointmentColumn from "./AppointmentColumn";
import CardAvailableAppointment from "./CardAppointmentAvailable";

const ColumnAppointmentAvailable = () => {
  return (
    <AppointmentColumn id="available" appointments={[1, 2, 3]}>
      {() => <CardAvailableAppointment />}
    </AppointmentColumn>
  );
};

export default ColumnAppointmentAvailable;
