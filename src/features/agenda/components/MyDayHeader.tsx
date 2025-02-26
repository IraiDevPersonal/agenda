import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import AgendaFilterAppointmentByDate from "./AgendaFilterAppointmentByDate";
import AgendaFilterAppointmentsByPatientRut from "./AgendaFilterAppointmentsByPatientRut";
import Header from "./Header";

const MyDayHeader = () => {
  const { appointmentsFilters } = useAppointmentFilters();
  return (
    <Header title="Mi Día">
      <AgendaFilterAppointmentsByPatientRut
        key={appointmentsFilters.patient_rut}
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
