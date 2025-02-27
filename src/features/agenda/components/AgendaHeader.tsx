import { useState } from "react";
import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import useProfessionsAsOptions from "@/features/profession/hooks/useProfessionsAsOptions";
import useProfessionalsAsOptions from "@/features/professional/hooks/useProfessionalsAsOptions";
import Select from "@/features/_core/components/ui/selects/Select";
import Header from "./Header";
import AgendaFilterAppointmentsByPatientRut from "./AgendaFilterAppointmentsByPatientRut";
import AgendaFilterAppointmentByDate from "./AgendaFilterAppointmentByDate";
import { createOptions } from "@/features/_core/utils/create-options.util";
import type { AppointmentsFilters } from "@/features/appointment/domain/types";
import type { Option, SelectChangeEvHandler } from "@/config/types";

const AgendaHeader = () => {
  const { appointmentsFilters } = useAppointmentFilters();
  const { professionOptions, isLoading: isProffesionLoading } = useProfessionsAsOptions();
  const { professionalOptions, isLoading: isProffesionalLoading } =
    useProfessionalsAsOptions();

  return (
    <Header title="Agenda">
      <FilterSelect
        key={`profession_id_${appointmentsFilters.profession_id}`}
        defaultValue={appointmentsFilters.profession_id}
        isLoading={isProffesionLoading}
        options={professionOptions}
        filterName="profession_id"
        label="Profesión"
      />
      <FilterSelect
        key={`professional_id_${appointmentsFilters.professional_id}`}
        defaultValue={appointmentsFilters.professional_id}
        isLoading={isProffesionalLoading}
        options={professionalOptions}
        filterName="professional_id"
        label="Profesional"
      />
      <AgendaFilterAppointmentsByPatientRut
        defaultValue={appointmentsFilters.patient_rut}
        key={appointmentsFilters.patient_rut}
      />
      <AgendaFilterAppointmentByDate
        defaultValue={appointmentsFilters.date}
        key={appointmentsFilters.date}
      />
    </Header>
  );
};

export default AgendaHeader;

type FilterSelectProps = {
  filterName: keyof Pick<AppointmentsFilters, "profession_id" | "professional_id">;
  defaultValue: string | undefined;
  isLoading: boolean;
  options: Option[];
  label: string;
};

const FilterSelect: React.FC<FilterSelectProps> = ({
  defaultValue = "",
  filterName,
  isLoading,
  options,
  label,
}) => {
  const { onFilterAppointments } = useAppointmentFilters();
  const [value, setValue] = useState<string>(defaultValue);

  const handleChange: SelectChangeEvHandler = (e) => {
    const value = e.target.value;
    setValue(value);
    onFilterAppointments({ [filterName]: value });
  };

  return (
    <Select
      disabled={isLoading}
      options={createOptions({
        options: options.map((opt) => ({
          label: `${label}: ${opt.label}`,
          value: opt.value,
        })),
        customLabel: `${label}: Sin selección`,
      })}
      onChange={handleChange}
      className="w-max"
      value={value}
    />
  );
};
