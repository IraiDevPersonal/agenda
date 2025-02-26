import { useSyncAppointmentFilters } from "../hooks/useFilterAppointments";
import Main from "@/features/_core/components/ui/Main";
import MyDayHeader from "../components/MyDayHeader";
import Appointments from "@/features/appointment/components/Appointments";

const MyDayPage = () => {
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

export default MyDayPage;
