import { useCallback, useRef, useState } from "react";
import { checkRut, prettifyRut } from "react-rut-formatter";
import InputSearch from "@/features/_core/components/ui/inputs/InputSearch";
import useFilterAppointments from "../../hooks/useFilterAppointments";
import type { GetAppointmentsFilters } from "../../services/agenda.service";
import type { InputChangeEvHandler } from "@/config/types";

type Props = {
  defaultValue: string | undefined;
};

const AgendaFilterAppointmentsByPatientRut: React.FC<Props> = ({ defaultValue = "" }) => {
  const { onFilterAppointments } = useFilterAppointments();
  const [patientRut, setPatientRut] =
    useState<GetAppointmentsFilters["patient_rut"]>(defaultValue);
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
