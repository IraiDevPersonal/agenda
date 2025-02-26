import useQuery from "@/features/_core/hooks/useQuery";
import AgendaService from "@/features/agenda/services/agenda.service";
import useAppointmentFilters from "./useAppointmentFilters";

const agenda = new AgendaService();

export default function useAppointments() {
  const { appointmentsFilters } = useAppointmentFilters();
  const appointmentQuery = useQuery({
    queryKey: ["appointments", { ...appointmentsFilters }],
    queryFn: () => agenda.getAppointments(appointmentsFilters),
  });

  return appointmentQuery;
}
