import Header from "./Header";
import AgendaFilterByPatientRut from "./AgendaFilterByPatientRut";
import AgendaFilterByDate from "./AgendaFilterByDate";
import AgendaFilterByProfession from "./AgendaFilterByProfession";
import AgendaFilterByProfessional from "./AgendaFilterByProfessional";
import { useLocation } from "react-router-dom";
import ROUTES from "@/config/routes";

const AgendaHeader = () => {
  const location = useLocation();
  return (
    <Header title="Agenda">
      <AgendaFilterByProfession />
      <AgendaFilterByProfessional />
      <AgendaFilterByPatientRut />
      {location.pathname === ROUTES.AGENDA_DETAIL && <AgendaFilterByDate />}
    </Header>
  );
};

export default AgendaHeader;
