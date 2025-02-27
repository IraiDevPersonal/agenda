import { useCallback, useRef, useState } from "react";
import { checkRut, prettifyRut } from "react-rut-formatter";
import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import InputSearch from "@/features/_core/components/ui/inputs/InputSearch";
import type { InputChangeEvHandler } from "@/config/types";

const AgendaFilterByPatientRut = () => {
  const {
    onFilterAppointments,
    appointmentsFilters: { patient_rut },
  } = useAppointmentFilters();
  const [patientRut, setPatientRut] = useState<string>(patient_rut ?? "");
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
        className="w-56"
      />
    </>
  );
};

export default AgendaFilterByPatientRut;
