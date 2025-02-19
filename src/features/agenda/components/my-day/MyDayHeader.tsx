import AgendaFilterAppointmentByDate from "../agenda/AgendaFilterAppointmentByDate";
import AgendaFilterAppointmentsByPatientRut from "../agenda/AgendaFilterAppointmentsByPatientRut";
import Header from "../shared/Header";
import useFilterAppointments from "../../hooks/useFilterAppointments";

const MyDayHeader = () => {
  const { appointmentsFilters } = useFilterAppointments();
  return (
    <Header title="Mi Día">
      <AgendaFilterAppointmentsByPatientRut
        defaultValue={appointmentsFilters.patient_rut}
      />
      <AgendaFilterAppointmentByDate
        key={appointmentsFilters.date}
        defaultValue={appointmentsFilters.date}
      />
    </Header>
  );
};

export default MyDayHeader;
