import { useQueryParams } from "@/features/_core/context/query-params-context";
import type { AppointmentFilters } from "../domain/types";

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
