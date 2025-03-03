import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import useQuery from "@/features/_core/hooks/useQuery";
import CalendarService from "../services/calendar.service";

const calendarService = new CalendarService();

export default function useCalendar() {
  const {
    appointmentFilters: { date, ...filters },
  } = useAppointmentFilters();
  const query = useQuery({
    queryKey: ["calendar", { ...filters }],
    queryFn: () => calendarService.getCalendar(filters),
    initialData: [],
  });

  return query;
}
