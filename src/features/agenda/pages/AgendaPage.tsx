import Main from "@/features/_core/components/ui/Main";
import AgendaHeader from "../components/AgendaHeader";
import Appointments from "@/features/appointment/components/Appointments";
import QueryParamProvider from "@/features/_core/context/query-params-context";
import DateHelper from "@/config/pluggins/date-helper";
import type { AppointmentFilters } from "@/features/appointment/domain/types";

const AgendaPage = () => {
  return (
    <>
      <title>Agenda</title>

      <Main>
        <QueryParamProvider<AppointmentFilters>
          defaultValues={{
            date: DateHelper.format(null, "yyyy-mm-dd"),
          }}
        >
          <AgendaHeader />
          <Appointments />
        </QueryParamProvider>
      </Main>
    </>
  );
};

export default AgendaPage;
