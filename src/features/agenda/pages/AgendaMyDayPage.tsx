import Main from "@/features/_core/components/ui/Main";
import MyDayHeader from "../components/MyDayHeader";
import Appointments from "@/features/appointment/components/Appointments";
import QueryParamProvider from "@/features/_core/context/query-params-context";
import { defaultAppointmentFilters } from "@/features/appointment/utils/functions.util";
import type { AppointmentFilters } from "@/features/appointment/domain/types";

const AgendaMyDayPage = () => {
  return (
    <>
      <title>Agenda | Mi Día</title>

      <Main>
        <QueryParamProvider<AppointmentFilters>
          defaultValues={{
            date: defaultAppointmentFilters().date,
          }}
          omit={["show", "year_month"]}
        >
          <MyDayHeader />
          <Appointments />
        </QueryParamProvider>
      </Main>
    </>
  );
};

export default AgendaMyDayPage;
