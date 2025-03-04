import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import useQuery from "@/features/_core/hooks/useQuery";
import CalendarService from "../services/calendar.service";
import Notify from "@/config/notify";

const calendarService = new CalendarService();

export default function useCalendar() {
  const {
    appointmentFilters: { date, ...filters },
  } = useAppointmentFilters();
  const query = useQuery({
    queryKey: ["calendar", { ...filters }],
    queryFn: () => calendarService.getCalendar(filters),
    initialData: [],
    throwOnError(error) {
      Notify.error(error.message, { duration: 5000 });
      // TODO: return false para que la aplicacion no caiga despues del error
      return false;
    },
  });

  return query;
}
