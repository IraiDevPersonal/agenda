import useQueryParams from "@/features/_core/hooks/useQueryParams";
import DateHelper from "@/config/date-helper";
import type { AppointmentFilters } from "../domain/types";

export default function useAppointmentFilters() {
  const { queryToOject, setQueryParams } = useQueryParams<AppointmentFilters>({
    options: {
      parseNumbers: true,
      parseBooleans: true,
    },
    defaultValues: {
      date: DateHelper.format(new Date(), "yyyy-mm-dd"),
    },
  });

  return {
    appointmentFilters: queryToOject,
    onFilterAppointments: setQueryParams,
  };
}
