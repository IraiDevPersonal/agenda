import { useState } from "react";
import Select from "@/features/_core/components/ui/selects/Select";
import Header from "../shared/Header";
import AgendaFilterAppointmentsByPatientRut from "./AgendaFilterAppointmentsByPatientRut";
import AgendaFilterAppointmentByDate from "./AgendaFilterAppointmentByDate";
import useFilterAppointments from "../../hooks/useFilterAppointments";
import useProfessionAsOptions from "@/features/profession/hooks/useProfessionAsOptions";
import { createOptions } from "@/features/_core/utils/create-options.util";
import { GetAppointmentsFilters } from "../../services/agenda.service";
import type { Option, SelectChangeEvHandler } from "@/config/types";

const AgendaHeader = () => {
  const { appointmentsFilters } = useFilterAppointments();
  const { professionOptions } = useProfessionAsOptions({ shouldLoad: true });

  return (
    <Header title="Agenda">
      <ProfessionSelect
        defaultValue={appointmentsFilters.profession_id}
        key={appointmentsFilters.profession_id}
        options={professionOptions}
      />
      <Select
        className="w-56"
        options={createOptions({
          options: [{ label: "Profesional: opcion 1", value: "1" }],
          customLabel: "Profesional: Sin selección",
        })}
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

type ProfessionSelectProps = {
  defaultValue: string | undefined;
  options: Option[];
};

const ProfessionSelect: React.FC<ProfessionSelectProps> = ({
  defaultValue = "",
  options,
}) => {
  const { onFilterAppointments } = useFilterAppointments();
  const [value, setValue] =
    useState<GetAppointmentsFilters["profession_id"]>(defaultValue);

  const handleChange: SelectChangeEvHandler = (e) => {
    const value = e.target.value;
    setValue(value);
    onFilterAppointments({ profession_id: value });
  };

  return (
    <Select
      options={createOptions({
        options: options.map((opt) => ({
          label: `Profesión: ${opt.label}`,
          value: opt.value,
        })),
        customLabel: "Profesión: Sin selección",
      })}
      onChange={handleChange}
      className="w-56"
      value={value}
    />
  );
};
