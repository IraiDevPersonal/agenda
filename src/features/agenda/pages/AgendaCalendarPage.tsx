import { useSyncAppointmentFilters } from "@/features/appointment/hooks/useAppointmentFilters";
import Main from "@/features/_core/components/ui/Main";
import AgendaDatePicker from "../components/AgendaDatePicker";
import AgendaHeader from "../components/AgendaHeader";

const AgendaCalendarPage = () => {
  useSyncAppointmentFilters();
  return (
    <>
      <title>Agenda | Calendario</title>

      <Main>
        <AgendaHeader />
        <AgendaDatePicker />
      </Main>
    </>
  );
};

export default AgendaCalendarPage;
