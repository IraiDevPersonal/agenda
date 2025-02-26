import Main from "@/features/_core/components/ui/Main";
import AgendaAppointmentSelector from "../components/AgendaAppointmentSelector";
import AgendaHeader from "../components/AgendaHeader";

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
