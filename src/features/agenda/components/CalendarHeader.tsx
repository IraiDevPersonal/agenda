import AgendaFilterByPatientRut from "./AgendaFilterByPatientRut";
import AgendaFilterByProfession from "./AgendaFilterByProfession";
import AgendaFilterByProfessional from "./AgendaFilterByProfessional";
import Header from "./Header";
import agendaQueryClient from "@/config/pluggins/agenda-query-client";
import { QUERY_KEYS } from "@/config/query-keys";

const CalendarHeader = () => {
  const handleReload = async () => {
    await agendaQueryClient.refetchQueries({ queryKey: [QUERY_KEYS.CALENDAR] });
    await agendaQueryClient.refetchQueries({ queryKey: [QUERY_KEYS.APPOINTMENTS] });
  };
  return (
    <>
      <Header title="Agenda" onReload={handleReload}>
        <AgendaFilterByProfession />
        <AgendaFilterByProfessional />
        <AgendaFilterByPatientRut />
      </Header>
    </>
  );
};

export default CalendarHeader;
