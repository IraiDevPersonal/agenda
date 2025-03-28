import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import { useQuery } from "@tanstack/react-query";
import CalendarService from "../services/calendar.service";
import { QUERY_KEYS } from "@/config/query-keys";

const calendarService = new CalendarService();

export default function useCalendar() {
  const {
    appointmentFilters: { date, show, ...filters },
  } = useAppointmentFilters();
  const query = useQuery({
    queryKey: [QUERY_KEYS.CALENDAR, { ...filters }],
    queryFn: () => calendarService.getCalendar(filters),
    initialData: [],
  });

  return query;
}
