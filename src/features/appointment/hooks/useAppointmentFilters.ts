import { useQueryParams } from "@/features/_core/context/query-params-context";
import { AppointmentFilters } from "../domain/types";

export default function useAppointmentFilters() {
  const { getValue, queryAsObject, queryAsString, setQuery } =
    useQueryParams<AppointmentFilters>();

  return {
    appointmentFiltersAsString: queryAsString,
    appointmentFilters: queryAsObject,
    onFilterAppointments: setQuery,
    getValue,
  };
}

// {
//   date: DateHelper.format(date, "yyyy-mm-dd"),
//   year_month: DateHelper.format(date, "year_month"),
//   show: "available",
// }
