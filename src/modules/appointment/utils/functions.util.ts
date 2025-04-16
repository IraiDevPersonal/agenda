import DateHelper from "@/config/pluggins/date-helper";
import { AppointmentFilters } from "../domain/types";

export function defaultAppointmentFilters() {
  const currentDate = new Date();
  return {
    year_month: DateHelper.format(currentDate, "year_month"),
    date: DateHelper.format(currentDate, "yyyy-mm-dd"),
    show: "available",
  } as Partial<AppointmentFilters>;
}
