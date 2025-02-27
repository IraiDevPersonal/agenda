import Header from "./Header";
import AgendaFilterByPatientRut from "./AgendaFilterByPatientRut";
import AgendaFilterByDate from "./AgendaFilterByDate";
import AgendaFilterByProfession from "./AgendaFilterByProfession";
import AgendaFilterByProfessional from "./AgendaFilterByProfessional";

const AgendaHeader = () => {
  return (
    <Header title="Agenda">
      <AgendaFilterByProfession />
      <AgendaFilterByProfessional />
      <AgendaFilterByPatientRut />
      <AgendaFilterByDate />
    </Header>
  );
};

export default AgendaHeader;
