import { useNavigate } from "react-router-dom";
import useAppointmentFilters from "./useAppointmentFilters";
import ROUTES from "@/config/routes";
import type { SelectChangeEvHandler } from "@/config/types";
import type { AppointementTypes, AppointmentFilters } from "../domain/types";

export default function useAppointmentList() {
  const navigate = useNavigate();
  const { appointmentFiltersAsString, getValue, onFilterAppointments } =
    useAppointmentFilters();

  const handleFilterList: SelectChangeEvHandler = (e) => {
    const value = e.target.value as AppointmentFilters["show"];
    onFilterAppointments({ show: value });
  };

  const handleNavigateToMyDay = () => {
    navigate(`${ROUTES.AGENDA_DETAIL}?${appointmentFiltersAsString}`);
  };

  return {
    listFilter: getValue("show", "available") as AppointementTypes,
    handleNavigateToMyDay,
    handleFilterList,
  };
}
