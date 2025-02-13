import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { prettifyRut } from "react-rut-formatter";
import InputSearch from "@/features/_core/components/ui/inputs/InputSearch";
import type { InputChangeEvHandler } from "@/config";

const AgendaFilterPatientByRut = () => {
  const [query, setQuery] = useSearchParams();
  const [value, setValue] = useState(query.get("patient_rut") ?? "");

  const handleChange: InputChangeEvHandler = (e) => {
    const value = e.target.value;
    setValue(value);
  };
  const handleSearch = () => {
    if (value) query.set("patient_rut", prettifyRut(value));
    else query.delete("patient_rut");
    setQuery(query);
  };

  return (
    <>
      <InputSearch
        placeholder="Buscar por Rut paciente..."
        onSearch={handleSearch}
        onChange={handleChange}
        className="w-60"
        value={value}
      />
    </>
  );
};

export default AgendaFilterPatientByRut;
