import { useSyncAppointmentFilters } from "@/features/appointment/hooks/useAppointmentFilters";
import Main from "@/features/_core/components/ui/Main";
import MyDayHeader from "../components/MyDayHeader";
import Appointments from "@/features/appointment/components/Appointments";

const AgendaMyDayPage = () => {
  useSyncAppointmentFilters();
  return (
    <>
      <title>Agenda | Mi Día</title>

      <Main>
        <MyDayHeader />
        <Appointments />
      </Main>
    </>
  );
};

export default AgendaMyDayPage;
