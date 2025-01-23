import { Main } from "@/features/_core/components/ui";
import { AgendaHeader } from "../components/agenda";
import { Appointments } from "../components/appointment";
import { ViewProfessionalDataContext } from "../context";

const AgendaPage = () => {
  return (
    <ViewProfessionalDataContext showProfesionalData>
      <title>Agenda</title>

      <Main>
        <AgendaHeader />
        <Appointments />
      </Main>
    </ViewProfessionalDataContext>
  );
};

export default AgendaPage;
