import useFilters, { useSyncFilters } from "@/features/_core/hooks/useFilters";
import DateHelper from "@/config/date-helper";
import SearchParams from "@/config/search-params";
import type { AppointmentFilters } from "../domain/types";

export default function useAppointmentFilters() {
  const [appointmentFilters, onFilterAppointments, appointmentFiltersAsString] =
    useFilters<AppointmentFilters>({ defaultValues: defaultFilters() });

  return {
    appointmentFilters,
    onFilterAppointments,
    appointmentFiltersAsString,
  };
}

export function useSyncAppointmentFilters() {
  useSyncFilters<AppointmentFilters>({ defaultValues: defaultFilters() });
}

const defaultFilters = () => {
  const date = new Date();
  return SearchParams.getAsObject<AppointmentFilters>({
    date: DateHelper.format(date, "yyyy-mm-dd"),
    year_month: DateHelper.format(date, "year_month"),
  });
};
