import useFilters, { useSyncFilters } from "@/features/_core/hooks/useFilters";
import SearchParams from "@/config/search-params";
import DateHelper from "@/config/date-helper";
import type { CalendarFilters } from "../domain/types";

export default function useCalendarFilters() {
  const [calendarFilters, onFilterCalendar, calendarFiltersAsString] =
    useFilters<CalendarFilters>({ defaultValues: defaultFilters() });

  return {
    calendarFilters,
    onFilterCalendar,
    calendarFiltersAsString,
  };
}

export function useSyncCalendarFilters() {
  useSyncFilters<CalendarFilters>({ defaultValues: defaultFilters() });
}

const defaultFilters = () => {
  return SearchParams.getAsObject<CalendarFilters>({
    date: DateHelper.format(new Date(), "yyyy-mm-dd"),
  });
};
