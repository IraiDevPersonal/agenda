import Main from "@/features/_core/components/ui/Main";
import AgendaHeader from "../components/AgendaHeader";
import Appointments from "@/features/appointment/components/Appointments";
import QueryParamProvider from "@/features/_core/context/query-params-context";
import { defaultAppointmentFilters } from "@/features/appointment/utils/functions.util";

const AgendaPage = () => {
  return (
    <>
      <title>Agenda</title>

      <Main>
        <QueryParamProvider
          defaultValues={{
            date: defaultAppointmentFilters().date,
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
