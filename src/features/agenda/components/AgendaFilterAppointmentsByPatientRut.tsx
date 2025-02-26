import { useCallback, useRef, useState } from "react";
import { checkRut, prettifyRut } from "react-rut-formatter";
import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import InputSearch from "@/features/_core/components/ui/inputs/InputSearch";
import type { InputChangeEvHandler } from "@/config/types";
import type { AppointmentsFilters } from "@/features/appointment/domain/types";

type Props = {
  defaultValue: string | undefined;
};

const AgendaFilterAppointmentsByPatientRut: React.FC<Props> = ({ defaultValue = "" }) => {
  const { onFilterAppointments } = useAppointmentFilters();
  const [patientRut, setPatientRut] =
    useState<AppointmentsFilters["patient_rut"]>(defaultValue);
  const shouldSearch = useRef<boolean>(false);

  const handleChange: InputChangeEvHandler = (e) => {
    const value = e.target.value;
    setPatientRut(value);
    shouldSearch.current = true;
  };

  const handleSearch = useCallback(
    (value: string) => () => {
      const formatedRut = prettifyRut(value);

      if (!shouldSearch.current) return;

      shouldSearch.current = false;

      if (!checkRut(formatedRut) && formatedRut !== "") {
        alert("rut invalido");
        return;
      }

      onFilterAppointments({ patient_rut: formatedRut });
      setPatientRut(formatedRut);
    },
    [onFilterAppointments, shouldSearch],
  );

  return (
    <>
      <InputSearch
        placeholder="Buscar por Rut paciente..."
        onSearch={handleSearch(patientRut)}
        onBlur={handleSearch(patientRut)}
        onChange={handleChange}
        value={patientRut}
        className="w-60"
      />
    </>
  );
};

export default AgendaFilterAppointmentsByPatientRut;
