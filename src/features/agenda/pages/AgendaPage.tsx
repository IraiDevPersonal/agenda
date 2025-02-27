import { useSyncAppointmentFilters } from "@/features/appointment/hooks/useAppointmentFilters";
import Main from "@/features/_core/components/ui/Main";
import AppointmentPicker from "../../appointment/components/AppointmentPicker";
import AgendaHeader from "../components/AgendaHeader";

const AgendaPage = () => {
  useSyncAppointmentFilters();
  return (
    <>
      <title>Agenda</title>

      <Main>
        <AgendaHeader />
        <AppointmentPicker />
      </Main>
    </>
  );
};

export default AgendaPage;
