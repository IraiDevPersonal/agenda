import Main from "@/features/_core/components/ui/Main";
import ViewProfessionalDataContext from "../context/ViewProfessionalDataContext";
import AgendaHeader from "../components/agenda/AgendaHeader";
import Appointments from "../components/appointment/Appoinments";

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
