import { Main } from "@/features/_core/components/ui";
import { AgendaHeader } from "../components/agenda";
import { Planner } from "../components/shared";
import { ViewProfessionalInfoProvider } from "../components/stores";

const AgendaPage = () => {
  return (
    <ViewProfessionalInfoProvider showProfesionalData>
      <title>Agenda</title>

      <Main>
        <AgendaHeader />
        <Planner />
      </Main>
    </ViewProfessionalInfoProvider>
  );
};

export default AgendaPage;
