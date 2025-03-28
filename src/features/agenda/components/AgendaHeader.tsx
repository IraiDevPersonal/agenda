import Header from "./Header";
import AgendaFilterByPatientRut from "./AgendaFilterByPatientRut";
import AgendaFilterByDate from "./AgendaFilterByDate";
import AgendaFilterByProfession from "./AgendaFilterByProfession";
import AgendaFilterByProfessional from "./AgendaFilterByProfessional";
import agendaQueryClient from "@/config/pluggins/agenda-query-client";
import { QUERY_KEYS } from "@/config/query-keys";

const AgendaHeader = () => {
  const handleReload = () => {
    agendaQueryClient.refetchQueries({ queryKey: [QUERY_KEYS.APPOINTMENTS] });
  };
  return (
    <Header title="Agenda" onReload={handleReload}>
      <AgendaFilterByProfession />
      <AgendaFilterByProfessional />
      <AgendaFilterByPatientRut />
      <AgendaFilterByDate />
    </Header>
  );
};

export default AgendaHeader;
