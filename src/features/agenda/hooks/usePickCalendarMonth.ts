import { useMemo } from "react";
import DateHelper from "@/config/date-helper";
import useCalendarFilters from "./useCalendarFilters";

export default function usePickCalendarMonth() {
  const {
    calendarFilters: { month, year },
    onFilterCalendar,
  } = useCalendarFilters();
  const currentMonth = useMemo(() => {
    return (
      month && year ? DateHelper.getFullDate(`${year}-${month}-01`) : undefined
    ) as Date;
  }, [month, year]);

  const handleMonthChange = (date: Date) => {
    onFilterCalendar({
      month: DateHelper.format(date, "month_number"),
      year: DateHelper.format(date, "year_number"),
    });
  };

  return { month: currentMonth, onChangeMonth: handleMonthChange };
}
