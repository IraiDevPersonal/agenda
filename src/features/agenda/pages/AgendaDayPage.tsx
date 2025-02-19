import Main from "@/features/_core/components/ui/Main";
import AppointmentsPresenter from "../components/appointment/AppoinmentsPresenter";
import AgendaHeader from "../components/agenda/AgendaHeader";
import { useSyncAppointmentFilters } from "../hooks/useFilterAppointments";

const AgendaDayPage = () => {
  useSyncAppointmentFilters();
  return (
    <>
      <title>Agenda</title>

      <Main>
        <AgendaHeader />
        <AppointmentsPresenter />
      </Main>
    </>
  );
};

export default AgendaDayPage;
