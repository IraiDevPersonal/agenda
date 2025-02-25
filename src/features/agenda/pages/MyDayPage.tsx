import { Suspense } from "react";
import { useSyncAppointmentFilters } from "../hooks/useFilterAppointments";
import Main from "@/features/_core/components/ui/Main";
import MyDayHeader from "../components/my-day/MyDayHeader";
import Appointments from "@/features/appointment/components/Appointments";
import AgendaService from "../services/agenda.service";

const agenda = new AgendaService();

const MyDayPage = () => {
  useSyncAppointmentFilters();
  return (
    <>
      <title>Agenda | Mi Día</title>

      <Main>
        <MyDayHeader />
        <Suspense fallback="Cargando...">
          <Appointments getAppointments={agenda.getAppointments()} />
        </Suspense>
      </Main>
    </>
  );
};

export default MyDayPage;
