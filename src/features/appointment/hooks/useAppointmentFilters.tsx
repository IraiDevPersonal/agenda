import useQueryParams from "@/features/_core/hooks/useQueryParams";
import type { AppointmentsFilters } from "../domain/types";
import Now from "@/config/now";

export default function useAppointmentFilters() {
  const { queryToOject, setQueryParams } = useQueryParams<AppointmentsFilters>({
    options: {
      parseNumbers: true,
      parseBooleans: true,
    },
    defaultValues: {
      date: new Now().format(new Date(), "yyyy-mm-dd"),
    },
  });

  return {
    appointmentsFilters: queryToOject,
    onFilterAppointments: setQueryParams,
  };
}
