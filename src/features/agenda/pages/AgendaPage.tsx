import { Main } from "@/features/_core/components/ui";
import { Header, Planner } from "../components/agenda";

const AgendaPage = () => {
  return (
    <>
      <title>Agenda | Agendar</title>

      <Main>
        <Header />
        <Planner />
      </Main>
    </>
  );
};

export default AgendaPage;
