import useQuery from "@/features/_core/hooks/useQuery";
import useAppointmentFilters from "./useAppointmentFilters";
import AppointmentService from "../services/appointment.service";
import AgendaEntity from "@/features/agenda/domain/agenda.entity";

const appointmentService = new AppointmentService();

export default function useAppointments() {
  const {
    appointmentFilters: { year_month, ...filters },
  } = useAppointmentFilters();
  const query = useQuery({
    queryKey: ["appointments", { ...filters }],
    queryFn: () => appointmentService.getAgenda(filters),
    // refetchOnMount: shouldRefetchOnMount ? "always" : false,
    initialData: AgendaEntity.appointmentsAdapter({}),
  });

  return query;
}
