import Main from "@/modules/_core/components/ui/Main";
import AgendaHeader from "../components/AgendaHeader";
import Appointments from "@/modules/appointment/components/Appointments";
import QueryParamProvider from "@/modules/_core/context/query-params-context";
import { defaultAppointmentFilters } from "@/modules/appointment/utils/functions.util";
import type { AppointmentFilters } from "@/modules/appointment/domain/types";

const AgendaPage = () => {
  return (
    <>
      <title>Agenda</title>

      <Main>
        <QueryParamProvider<AppointmentFilters>
          defaultValues={{
            date: defaultAppointmentFilters().date,
          }}
          omit={["show", "year_month"]}
        >
          <AgendaHeader />
          <Appointments />
        </QueryParamProvider>
      </Main>
    </>
  );
};

export default AgendaPage;
