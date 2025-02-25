import { Suspense } from "react";
import { useSyncAppointmentFilters } from "../hooks/useFilterAppointments";
import Main from "@/features/_core/components/ui/Main";
import AgendaHeader from "../components/agenda/AgendaHeader";
import AgendaService from "../services/agenda.service";
import Appointments from "@/features/appointment/components/Appointments";

const agenda = new AgendaService();

const AgendaDayPage = () => {
  useSyncAppointmentFilters();
  return (
    <>
      <title>Agenda</title>

      <Main>
        <AgendaHeader />
        <Suspense fallback="Cargando...">
          <Appointments getAppointments={agenda.getAppointments()} />
        </Suspense>
      </Main>
    </>
  );
};

export default AgendaDayPage;
