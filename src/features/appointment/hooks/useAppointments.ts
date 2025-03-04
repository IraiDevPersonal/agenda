import useQuery from "@/features/_core/hooks/useQuery";
import useAppointmentFilters from "./useAppointmentFilters";
import AppointmentService from "../services/appointment.service";
import AgendaEntity from "@/features/agenda/domain/agenda.entity";
import Notify from "@/config/notify";

const appointmentService = new AppointmentService();

export default function useAppointments() {
  const {
    appointmentFilters: { year_month, ...filters },
  } = useAppointmentFilters();
  const query = useQuery({
    queryKey: ["appointments", { ...filters }],
    queryFn: () => appointmentService.getAgenda(filters),
    // refetchOnMount: shouldRefetchOnMount ? "always" : false,
    retry: 2,
    initialData: AgendaEntity.appointmentsAdapter({}),
    throwOnError(error) {
      Notify.error(error.message, { duration: 5000 });
      // TODO: return false para que la aplicacion no caiga despues del error
      return false;
    },
  });

  return query;
}
