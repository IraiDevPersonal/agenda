import DateHelper from "@/config/date-helper";
import useCalendarFilters from "@/features/agenda/hooks/useCalendarFilters";

export default function usePickAppointmentByDate() {
  const {
    calendarFilters: { date: filterDate, profession_id },
    onFilterCalendar,
  } = useCalendarFilters();
  const date = (filterDate ? DateHelper.getFullDate(filterDate) : undefined) as Date;

  const handleSelectDate = (date?: Date) => {
    if (date) {
      onFilterCalendar({ date: DateHelper.format(date, "yyyy-mm-dd") });
    }
  };

  return {
    date,
    handleSelectDate,
    showCalendar: !!profession_id,
  };
}
