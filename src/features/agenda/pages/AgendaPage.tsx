import Main from "@/features/_core/components/ui/Main";
import AgendaHeader from "../components/AgendaHeader";
import Appointments from "@/features/appointment/components/Appointments";
import QueryParamProvider from "@/features/_core/context/query-params-context";
import { defaultAppointmentFilters } from "@/features/appointment/utils/functions.util";
import type { AppointmentFilters } from "@/features/appointment/domain/types";

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
