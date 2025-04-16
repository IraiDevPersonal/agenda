import useAppointmentFilters from "@/modules/appointment/hooks/useAppointmentFilters";
import DateHelper from "@/config/pluggins/date-helper";

export default function usePickCalendarDay() {
  const {
    appointmentFilters: { date, profession_id },
    onFilterAppointments,
  } = useAppointmentFilters();
  const day = date ? DateHelper.getFullDate(date) : undefined;

  const handleSelectDay = (date?: Date) => {
    if (date) {
      onFilterAppointments({ date: DateHelper.format(date, "yyyy-mm-dd") });
    }
  };

  return {
    day,
    handleSelectDay,
    showCalendar: !!profession_id,
  };
}
