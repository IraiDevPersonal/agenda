import { useCallback } from "react";
import useFilters, { useSyncFilters } from "@/features/_core/hooks/useFilters";
import { includePath } from "@/features/_core/utils/include-path";
import DateHelper from "@/config/pluggins/date-helper";
import SearchParams from "@/config/pluggins/search-params";
import type { AppointmentFilters } from "../domain/types";

const OMITED_PATHS = ["show", "year_month"];

export default function useAppointmentFilters() {
  const [appointmentFilters, onFilterAppointments, appointmentFiltersAsSearchParams] =
    useFilters<AppointmentFilters>({
      defaultValues: defaultFilters(),
      omitParams: includePath(["/agenda"])
        ? []
        : (OMITED_PATHS as (keyof AppointmentFilters)[]),
    });

  const appointmentFiltersAsString = useCallback(
    (shouldRemoveOmited?: boolean) => {
      if (shouldRemoveOmited) {
        OMITED_PATHS.forEach((path) => appointmentFiltersAsSearchParams.delete(path));
      }

      return appointmentFiltersAsSearchParams.toString();
    },
    [appointmentFiltersAsSearchParams],
  );

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
