import { useState } from "react";
import useFilterAppointments from "../hooks/useFilterAppointments";
import useProfessionsAsOptions from "@/features/profession/hooks/useProfessionsAsOptions";
import useProfessionalsAsOptions from "@/features/professional/hooks/useProfessionalsAsOptions";
import Select from "@/features/_core/components/ui/selects/Select";
import Header from "./Header";
import AgendaFilterAppointmentsByPatientRut from "./AgendaFilterAppointmentsByPatientRut";
import AgendaFilterAppointmentByDate from "./AgendaFilterAppointmentByDate";
import { createOptions } from "@/features/_core/utils/create-options.util";
import type { Option, SelectChangeEvHandler } from "@/config/types";

const AgendaHeader = () => {
  const { appointmentsFilters } = useFilterAppointments();
  const { professionOptions, isLoading: isProffesionLoading } = useProfessionsAsOptions();
  const { professionalOptions, isLoading: isProffesionalLoading } =
    useProfessionalsAsOptions();

  return (
    <Header title="Agenda">
      <FilterSelect
        defaultValue={appointmentsFilters.profession_id}
        key={appointmentsFilters.profession_id}
        isLoading={isProffesionLoading}
        options={professionOptions}
        label="Profesión"
      />
      <FilterSelect
        defaultValue={appointmentsFilters.professional_id}
        key={appointmentsFilters.professional_id}
        isLoading={isProffesionalLoading}
        options={professionalOptions}
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
  defaultValue: string | undefined;
  isLoading: boolean;
  options: Option[];
  label: string;
};

const FilterSelect: React.FC<FilterSelectProps> = ({
  defaultValue = "",
  isLoading,
  options,
  label,
}) => {
  const { onFilterAppointments } = useFilterAppointments();
  const [value, setValue] = useState<string>(defaultValue);

  const handleChange: SelectChangeEvHandler = (e) => {
    const value = e.target.value;
    setValue(value);
    onFilterAppointments({ profession_id: value });
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
