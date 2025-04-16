import { useQuery } from "@tanstack/react-query";
import useAppointmentFilters from "./useAppointmentFilters";
import AppointmentService from "../services/appointment.service";
import AgendaEntity from "@/modules/agenda/domain/agenda.entity";
import { QUERY_KEYS } from "@/config/query-keys";

const appointmentService = new AppointmentService();

export default function useAppointments() {
  const {
    appointmentFilters: { year_month, show, ...filters },
  } = useAppointmentFilters();
  const query = useQuery({
    queryKey: [QUERY_KEYS.APPOINTMENTS, { ...filters }],
    queryFn: () => appointmentService.getAgenda(filters),
    initialData: AgendaEntity.adaper({}),
  });

  return query;
}
