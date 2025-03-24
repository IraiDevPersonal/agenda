import Main from "@/features/_core/components/ui/Main";
import AgendaDatePicker from "../components/AgendaDatePicker";
import AgendaHeader from "../components/AgendaHeader";
import QueryParamProvider from "@/features/_core/context/query-params-context";
import DateHelper from "@/config/pluggins/date-helper";
import type { AppointmentFilters } from "@/features/appointment/domain/types";

const AgendaCalendarPage = () => {
  return (
    <>
      <title>Agenda | Calendario</title>

      <Main>
        <QueryParamProvider<AppointmentFilters>
          defaultValues={{
            year_month: DateHelper.format(null, "year_month"),
            date: DateHelper.format(null, "yyyy-mm-dd"),
            show: "available",
          }}
        >
          <AgendaHeader />
          <AgendaDatePicker />
        </QueryParamProvider>
      </Main>
    </>
  );
};

export default AgendaCalendarPage;
