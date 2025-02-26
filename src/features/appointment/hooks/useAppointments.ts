import useQuery from "@/features/_core/hooks/useQuery";
import useAppointmentFilters from "./useAppointmentFilters";
import AppointmentService from "../services/appointment.service";

const appointmentService = new AppointmentService();

export default function useAppointments() {
  const { appointmentsFilters } = useAppointmentFilters();
  const appointmentQuery = useQuery({
    queryKey: ["appointments", { ...appointmentsFilters }],
    queryFn: () => appointmentService.getAgendaAppointments(appointmentsFilters),
  });

  return appointmentQuery;
}
