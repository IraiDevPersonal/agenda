import Main from "@/features/_core/components/ui/Main";
import AgendaAppointmentSelector from "../components/agenda/AgendaAppointmentSelector";
import AgendaHeader from "../components/agenda/AgendaHeader";

const AgendaPage = () => {
  return (
    <>
      <title>Agenda</title>

      <Main>
        <AgendaHeader />
        <AgendaAppointmentSelector />
      </Main>
    </>
  );
};

export default AgendaPage;
