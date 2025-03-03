import { useSyncAppointmentFilters } from "@/features/appointment/hooks/useAppointmentFilters";
import Main from "@/features/_core/components/ui/Main";
import AgendaHeader from "../components/AgendaHeader";
import Appointments from "@/features/appointment/components/Appointments";

const AgendaCalendarPage = () => {
  useSyncAppointmentFilters();
  return (
    <>
      <title>Agenda</title>

      <Main>
        <AgendaHeader />
        <Appointments />
      </Main>
    </>
  );
};

export default AgendaCalendarPage;
