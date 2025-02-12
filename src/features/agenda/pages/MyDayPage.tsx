import { Suspense } from "react";
import Main from "@/features/_core/components/ui/Main";
import Appointments from "../components/appointment/Appoinments";
import MyDayHeader from "../components/my-day/MyDayHeader";
import ViewProfessionalDataContext from "../context/ViewProfessionalDataContext";
import AppointmentFallback from "../components/appointment/AppointmentFallback";
import AgendaService from "../services/agenda.service";

const agenda = new AgendaService();

const MyDayPage = () => {
  return (
    <>
      <title>Agenda | Mi Día</title>

      <Main>
        <MyDayHeader />
        <ViewProfessionalDataContext>
          <Suspense fallback={<AppointmentFallback />}>
            <Appointments getAppointments={agenda.getAppointments()} />
          </Suspense>
        </ViewProfessionalDataContext>
      </Main>
    </>
  );
};

export default MyDayPage;
