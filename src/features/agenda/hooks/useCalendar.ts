import useQuery from "@/features/_core/hooks/useQuery";
import CalendarService from "../services/calendar.service";
import useCalendarFilters from "./useCalendarFilters";

const calendarService = new CalendarService();

export default function useCalendar() {
  const {
    calendarFilters: { date, ...filters },
  } = useCalendarFilters();
  const query = useQuery({
    queryKey: ["calendar"],
    queryFn: () => calendarService.getCalendar(filters),
    initialData: [],
  });

  return query;
}
