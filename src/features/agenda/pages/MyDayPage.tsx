import { Suspense } from "react";
import Main from "@/features/_core/components/ui/Main";
import AppointmentsPresenter from "../components/appointment/AppoinmentsPresenter";
import AppointmentFallback from "../components/appointment/AppointmentFallback";
import MyDayHeader from "../components/my-day/MyDayHeader";

const MyDayPage = () => {
  return (
    <>
      <title>Agenda | Mi Día</title>

      <Main>
        <MyDayHeader />

        <Suspense fallback={<AppointmentFallback />}>
          <AppointmentsPresenter />
        </Suspense>
      </Main>
    </>
  );
};

export default MyDayPage;
