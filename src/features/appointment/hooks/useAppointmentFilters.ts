import useFilters, { useSyncFilters } from "@/features/_core/hooks/useFilters";
import { includePath } from "@/features/_core/utils/include-path";
import DateHelper from "@/config/pluggins/date-helper";
import SearchParams from "@/config/pluggins/search-params";
import type { AppointmentFilters } from "../domain/types";

const OMITED_PATHS = [
  ...(includePath(["/agenda"]) ? [] : ["show", "year_month"]),
] as (keyof AppointmentFilters)[];

export default function useAppointmentFilters() {
  const [appointmentFilters, onFilterAppointments, appointmentFiltersAsString] =
    useFilters<AppointmentFilters>({
      defaultValues: defaultFilters(),
      omitParams: OMITED_PATHS,
    });

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
    show: "available",
  });
};
