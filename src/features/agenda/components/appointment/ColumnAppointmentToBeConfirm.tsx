import AppointmentColumn from "./AppointmentColumn";
import CardAppointment from "./CardAppointment";

const ColumnAppointmentToBeConfirm = () => {
  return (
    <>
      <AppointmentColumn id="to-confirm" appointments={[1, 2, 3, 4, 5, 6, 7]}>
        {() => <CardAppointment id="to-confirm" />}
      </AppointmentColumn>
    </>
  );
};

export default ColumnAppointmentToBeConfirm;
