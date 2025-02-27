import useQueryParams from "@/features/_core/hooks/useQueryParams";
import DateHelper from "@/config/date-helper";
import type { AppointmentsFilters } from "../domain/types";

export default function useAppointmentFilters() {
  const { queryToOject, setQueryParams } = useQueryParams<AppointmentsFilters>({
    options: {
      parseNumbers: true,
      parseBooleans: true,
    },
    defaultValues: {
      date: DateHelper.format(new Date(), "yyyy-mm-dd"),
    },
  });

  return {
    appointmentsFilters: queryToOject,
    onFilterAppointments: setQueryParams,
  };
}
