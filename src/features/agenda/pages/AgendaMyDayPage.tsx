import Main from "@/features/_core/components/ui/Main";
import MyDayHeader from "../components/MyDayHeader";
import Appointments from "@/features/appointment/components/Appointments";
import QueryParamProvider from "@/features/_core/context/query-params-context";
import { defaultAppointmentFilters } from "@/features/appointment/utils/functions.util";

const AgendaMyDayPage = () => {
  return (
    <>
      <title>Agenda | Mi Día</title>

      <Main>
        <QueryParamProvider
          defaultValues={{
            date: defaultAppointmentFilters().date,
          }}
        >
          <MyDayHeader />
          <Appointments />
        </QueryParamProvider>
      </Main>
    </>
  );
};

export default AgendaMyDayPage;
