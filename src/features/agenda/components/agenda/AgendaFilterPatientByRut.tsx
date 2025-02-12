import { useState } from "react";
import InputSearch from "@/features/_core/components/ui/inputs/InputSearch";
import { prettifyRut } from "react-rut-formatter";
import type { InputChangeEvHandler } from "@/config";

const AgendaFilterPatientByRut = () => {
  const [value, setValue] = useState("");
  const handleChange: InputChangeEvHandler = (e) => {
    const value = e.target.value;
    setValue(prettifyRut(value));
  };

  return (
    <>
      <InputSearch
        placeholder="Buscar por Rut paciente..."
        onSearch={() => alert(`Enter ${value}`)}
        onChange={handleChange}
        className="w-60"
        value={value}
      />
    </>
  );
};

export default AgendaFilterPatientByRut;
