import AgendaFilterByDate from "./AgendaFilterByDate";
import AgendaFilterByPatientRut from "./AgendaFilterByPatientRut";
import Header from "./Header";
import agendaQueryClient from "@/config/pluggins/agenda-query-client";
import { QUERY_KEYS } from "@/config/query-keys";

const MyDayHeader = () => {
  const handleReload = () => {
    agendaQueryClient.refetchQueries({ queryKey: [QUERY_KEYS.APPOINTMENTS] });
  };
  return (
    <Header title="Mi Día" onReload={handleReload}>
      <AgendaFilterByPatientRut />
      <AgendaFilterByDate />
    </Header>
  );
};

export default MyDayHeader;
