import { Main } from "@/features/_core/components/ui";
import { AgendaHeader, AgendaPlanner } from "../components/agenda";

const AgendaPage = () => {
  return (
    <>
      <title>Agenda</title>

      <Main>
        <AgendaHeader />
        <AgendaPlanner />
      </Main>
    </>
  );
};

export default AgendaPage;
