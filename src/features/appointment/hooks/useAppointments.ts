import useQuery from "@/features/_core/hooks/useQuery";
import useAppointmentFilters from "./useAppointmentFilters";
import AppointmentService from "../services/appointment.service";
import AgendaEntity from "@/features/agenda/domain/agenda.entity";

const appointmentService = new AppointmentService();

export default function useAppointments() {
  const { appointmentFilters } = useAppointmentFilters();
  const appointmentQuery = useQuery({
    queryKey: ["appointments", { ...appointmentFilters }],
    queryFn: () => appointmentService.getAgendaAppointments(appointmentFilters),
    // refetchOnMount: shouldRefetchOnMount ? "always" : false,
    initialData: AgendaEntity.appointmentsAdapter({}),
  });

  return appointmentQuery;
}
