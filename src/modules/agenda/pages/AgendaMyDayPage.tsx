import Main from "@/modules/_core/components/ui/Main";
import MyDayHeader from "../components/MyDayHeader";
import Appointments from "@/modules/appointment/components/Appointments";
import QueryParamProvider from "@/modules/_core/context/query-params-context";
import { defaultAppointmentFilters } from "@/modules/appointment/utils/functions.util";
import type { AppointmentFilters } from "@/modules/appointment/domain/types";

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
