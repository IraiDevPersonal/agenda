import Main from "@/features/_core/components/ui/Main";
import AppointmentsPresenter from "../components/appointment/AppoinmentsPresenter";
import MyDayHeader from "../components/my-day/MyDayHeader";
import { useSyncAppointmentFilters } from "../hooks/useFilterAppointments";

const MyDayPage = () => {
  useSyncAppointmentFilters();
  return (
    <>
      <title>Agenda | Mi Día</title>

      <Main>
        <MyDayHeader />
        <AppointmentsPresenter />
      </Main>
    </>
  );
};

export default MyDayPage;
