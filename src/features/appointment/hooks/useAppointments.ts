import useQuery from "@/features/_core/hooks/useQuery";
import useFilterAppointments from "@/features/agenda/hooks/useFilterAppointments";
import AgendaService from "@/features/agenda/services/agenda.service";

const agenda = new AgendaService();

export default function useAppointments() {
  const { appointmentsFilters } = useFilterAppointments();
  const appointmentQuery = useQuery({
    queryKey: ["appointments", { ...appointmentsFilters }],
    queryFn: () => agenda.getAppointments(appointmentsFilters),
  });

  return appointmentQuery;
}
