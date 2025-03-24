import { useNavigate } from "react-router-dom";
import useAppointmentFilters from "./useAppointmentFilters";
import ROUTES from "@/config/routes";
import type { SelectChangeEvHandler } from "@/config/types";
import type { AppointmentFilters } from "../domain/types";

export default function useAppointmentList() {
  const navigate = useNavigate();
  const { appointmentFiltersAsString, appointmentFilters, onFilterAppointments } =
    useAppointmentFilters();

  const handleFilterList: SelectChangeEvHandler = (e) => {
    const value = e.target.value;
    onFilterAppointments({ show: value as AppointmentFilters["show"] });
  };

  const handleNavigateToMyDay = () => {
    navigate(`${ROUTES.AGENDA_DETAIL}?${appointmentFiltersAsString}`);
  };

  return {
    listFilter: appointmentFilters.show ?? "available",
    handleNavigateToMyDay,
    handleFilterList,
  };
}
