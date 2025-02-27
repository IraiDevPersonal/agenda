import { useSyncAppointmentFilters } from "@/features/appointment/hooks/useAppointmentFilters";
import Main from "@/features/_core/components/ui/Main";
import AppointmentDatePicker from "../../appointment/components/AppointmentDatePicker";
import AgendaHeader from "../components/AgendaHeader";

const AgendaPage = () => {
  useSyncAppointmentFilters();
  return (
    <>
      <title>Agenda</title>

      <Main>
        <AgendaHeader />
        <AppointmentDatePicker />
      </Main>
    </>
  );
};

export default AgendaPage;
