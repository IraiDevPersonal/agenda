import Main from "@/features/_core/components/ui/Main";
import AgendaHeader from "../components/AgendaHeader";
import Appointments from "@/features/appointment/components/Appointments";

const AgendaDayPage = () => {
  return (
    <>
      <title>Agenda</title>

      <Main>
        <AgendaHeader />
        <Appointments />
      </Main>
    </>
  );
};

export default AgendaDayPage;
