import { useMemo } from "react";
import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import DateHelper from "@/config/date-helper";

export default function usePickCalendarByMonth() {
  const {
    appointmentFilters: { year_month },
    onFilterAppointments,
  } = useAppointmentFilters();

  const currentMonth = useMemo(() => {
    if (year_month) return DateHelper.getFullDate(`${year_month}-01`);
    return undefined;
  }, [year_month]);

  const handleMonthChange = (date: Date) => {
    onFilterAppointments({
      year_month: DateHelper.format(date, "year_month"),
    });
  };

  return { month: currentMonth, onMonthChange: handleMonthChange };
}
