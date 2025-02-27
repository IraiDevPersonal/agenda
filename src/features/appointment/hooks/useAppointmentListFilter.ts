import { useCallback, useState } from "react";
import { APPOINTMENT_OPTIONS } from "../utils/constants.util";
import type { AppointementTypes } from "../domain/types";
import type { SelectChangeEvHandler } from "@/config/types";

export default function useAppointmentListFilter() {
  const [filter, setFilter] = useState(APPOINTMENT_OPTIONS[0].value);

  const handleFilter: SelectChangeEvHandler = useCallback((e) => {
    const value = e.target.value as AppointementTypes;
    setFilter(value);
  }, []);

  return {
    filter,
    handleFilter,
  };
}
