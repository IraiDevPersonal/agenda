import Main from "@/features/_core/components/ui/Main";
import AgendaDatePicker from "../components/AgendaDatePicker";
import QueryParamProvider from "@/features/_core/context/query-params-context";
import CalendarHeader from "../components/CalendarHeader";
import { defaultAppointmentFilters } from "@/features/appointment/utils/functions.util";

const AgendaCalendarPage = () => {
  return (
    <>
      <title>Agenda | Calendario</title>

      <Main>
        <QueryParamProvider defaultValues={defaultAppointmentFilters()}>
          <CalendarHeader />
          <AgendaDatePicker />
        </QueryParamProvider>
      </Main>
    </>
  );
};

export default AgendaCalendarPage;
