import useQuery from "@/features/_core/hooks/useQuery";
import useAppointmentFilters from "./useAppointmentFilters";
import AppointmentService from "../services/appointment.service";
import AgendaEntity from "@/features/agenda/domain/agenda.entity";

const appointmentService = new AppointmentService();

export default function useAppointments() {
  const { appointmentsFilters } = useAppointmentFilters();
  const appointmentQuery = useQuery({
    queryKey: ["appointments", { ...appointmentsFilters }],
    queryFn: () => appointmentService.getAgendaAppointments(appointmentsFilters),
    // refetchOnMount: shouldRefetchOnMount ? "always" : false,
    initialData: AgendaEntity.appointmentsAdapter({}),
  });

  return appointmentQuery;
}
