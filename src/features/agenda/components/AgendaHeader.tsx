import Header from "./Header";
import AgendaFilterByPatientRut from "./AgendaFilterByPatientRut";
import AgendaFilterByDate from "./AgendaFilterByDate";
import AgendaFilterByProfession from "./AgendaFilterByProfession";
import AgendaFilterByProfessional from "./AgendaFilterByProfessional";
import { includePath } from "@/features/_core/utils/include-path";

const AgendaHeader = () => {
  return (
    <Header title="Agenda">
      <AgendaFilterByProfession />
      <AgendaFilterByProfessional />
      <AgendaFilterByPatientRut />
      {includePath(["/agenda/detalle"]) && <AgendaFilterByDate />}
    </Header>
  );
};

export default AgendaHeader;
