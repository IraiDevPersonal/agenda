import Main from "@/features/_core/components/ui/Main";
import AgendaAppointmentSelector from "../components/agenda/AgendaAppointmentSelector";
import AgendaHeader from "../components/agenda/AgendaHeader";
import ViewProfessionalDataContext from "../context/ViewProfessionalDataContext";

const AgendaPage = () => {
  return (
    <ViewProfessionalDataContext showProfesionalData>
      <title>Agenda</title>

      <Main>
        <AgendaHeader />
        <AgendaAppointmentSelector />
      </Main>
    </ViewProfessionalDataContext>
  );
};

export default AgendaPage;
