import { checkRut, prettifyRut } from "react-rut-formatter";
import useDebounce from "@/modules/_core/hooks/useDebounce";
import useAppointmentFilters from "@/modules/appointment/hooks/useAppointmentFilters";
import InputSearch from "@/modules/_core/components/ui/inputs/InputSearch";
import type { InputChangeEvHandler } from "@/config/types";

const AgendaFilterByPatientRut = () => {
  const { onFilterAppointments, getValue } = useAppointmentFilters();
  const { value, onValueChange, handleAction } = useDebounce({
    delay: 1000,
    defaultValue: getValue("patient_rut", "") as string,
    actionFn: (v: string) => {
      const formatedRut = prettifyRut(v);

      if (!checkRut(formatedRut) && formatedRut !== "") {
        alert("rut invalido");
        return;
      }

      onFilterAppointments({ patient_rut: formatedRut });
      onValueChange(formatedRut);
    },
  });

  const handleChange: InputChangeEvHandler = (e) => {
    const value = e.target.value;
    onValueChange(value);
  };

  return (
    <>
      <InputSearch
        placeholder="Buscar por Rut paciente..."
        onSearch={handleAction}
        onChange={handleChange}
        className="w-56"
        value={value}
      />
    </>
  );
};

export default AgendaFilterByPatientRut;
