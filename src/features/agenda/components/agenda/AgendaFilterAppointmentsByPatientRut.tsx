import { useCallback, useEffect, useState } from "react";
import { prettifyRut } from "react-rut-formatter";
import InputSearch from "@/features/_core/components/ui/inputs/InputSearch";
import useFilterAppointments from "../../hooks/useFilterAppointments";
import { GetAppointmentsFilters } from "../../services/agenda.service";
import type { InputChangeEvHandler } from "@/config/types";

type Props = {
  defaultValue: string | undefined;
};

const AgendaFilterAppointmentsByPatientRut: React.FC<Props> = ({ defaultValue = "" }) => {
  const { appointmentsFilters, onFilterAppointments } = useFilterAppointments();
  const [patientRut, setPatientRut] =
    useState<GetAppointmentsFilters["patient_rut"]>(defaultValue);

  const handleChange: InputChangeEvHandler = (e) => {
    const value = e.target.value;
    setPatientRut(value);
  };

  const handleSearch = useCallback(
    (value: string) => () => {
      const fromatedRut = prettifyRut(value);
      onFilterAppointments({ patient_rut: fromatedRut });
      setPatientRut(fromatedRut);
    },
    [onFilterAppointments],
  );

  useEffect(() => {
    setPatientRut(appointmentsFilters.patient_rut ?? "");
  }, [appointmentsFilters.patient_rut]);

  return (
    <>
      <InputSearch
        placeholder="Buscar por Rut paciente..."
        onSearch={handleSearch(patientRut)}
        onChange={handleChange}
        value={patientRut}
        className="w-60"
      />
    </>
  );
};

export default AgendaFilterAppointmentsByPatientRut;
