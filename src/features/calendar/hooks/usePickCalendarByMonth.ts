import { useMemo } from "react";
import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import DateHelper from "@/config/pluggins/date-helper";

export default function usePickCalendarByMonth() {
  const { getValue, onFilterAppointments } = useAppointmentFilters();

  const currentMonth = useMemo(() => {
    const current = getValue("year_month", "");
    if (current) return DateHelper.getFullDate(`${current}-01`);
    return undefined;
  }, [getValue]);

  const handleMonthChange = (date: Date) => {
    onFilterAppointments({
      year_month: DateHelper.format(date, "year_month"),
    });
  };

  return { month: currentMonth, onMonthChange: handleMonthChange };
}
