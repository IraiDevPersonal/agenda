import Main from "@/features/_core/components/ui/Main";
import ViewProfessionalDataContext from "../context/ViewProfessionalDataContext";
import AgendaAppointmentSelector from "../components/agenda/AgendaAppointmentSelector";
import AgendaHeader from "../components/agenda/AgendaHeader";
import AppointmentList from "../components/appointment/AppointmentList";

const AgendaPage = () => {
  return (
    <ViewProfessionalDataContext showProfesionalData>
      <title>Agenda</title>

      <Main>
        <AgendaHeader />
        <div className="flex w-full">
          <AgendaAppointmentSelector />
          <AppointmentList />
        </div>
      </Main>
    </ViewProfessionalDataContext>
  );
};

export default AgendaPage;
