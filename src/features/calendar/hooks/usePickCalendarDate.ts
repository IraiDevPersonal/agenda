import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import DateHelper from "@/config/date-helper";

export default function usePickCalendarDate() {
  const {
    appointmentFilters: { date: filterDate, profession_id },
    onFilterAppointments,
  } = useAppointmentFilters();
  const date = (filterDate ? DateHelper.getFullDate(filterDate) : undefined) as Date;

  const handleSelectDate = (date?: Date) => {
    if (date) {
      onFilterAppointments({ date: DateHelper.format(date, "yyyy-mm-dd") });
    }
  };

  return {
    date,
    handleSelectDate,
    showCalendar: !!profession_id,
  };
}
