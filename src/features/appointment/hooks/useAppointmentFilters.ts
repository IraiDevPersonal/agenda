import { useMemo } from "react";
import { useQueryParams } from "@/features/_core/context/query-params-context";
import type { AppointmentFilters } from "../domain/types";

export default function useAppointmentFilters() {
  const queryFilters = useQueryParams<AppointmentFilters>();

  const returnValues = useMemo(() => {
    return {
      appointmentFiltersAsString: queryFilters.queryAsString,
      appointmentFilters: queryFilters.queryAsObject,
      onFilterAppointments: queryFilters.setQuery,
      getValue: queryFilters.getValue,
    };
  }, [queryFilters]);

  return returnValues;
}
