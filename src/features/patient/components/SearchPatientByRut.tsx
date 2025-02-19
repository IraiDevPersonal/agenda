import { useRef, useState } from "react";
import { prettifyRut } from "react-rut-formatter";
import FieldRootWrapper from "@/features/_core/components/ui/FieldRootWrapper";
import InputContentWrapper from "@/features/_core/components/ui/inputs/InputContentWrapper";
import InputSearch from "@/features/_core/components/ui/inputs/InputSearch";
import { PatientEntity } from "../domain/patient.entity";
import { DUMMY_PATIENT } from "../utils/constants.util";
import type { InputChangeEvHandler, InputKeyboardEventHandler } from "@/config/types";

type Props = {
  getPatient(patient: PatientEntity | null): void;
};

const SearchPatientByRut: React.FC<Props> = ({ getPatient }) => {
  const lastSearch = useRef<string>("");
  const [value, setValue] = useState("");

  const handleKeyDown: InputKeyboardEventHandler = (e) => {
    e.stopPropagation();
    if (e.key !== "Enter") return;
    const value = e.currentTarget.value;
    if (lastSearch.current === value) return;
    getPatient(prettifyRut(value) === "19.050.844-7" ? DUMMY_PATIENT : null);
    lastSearch.current = value;
  };
  const handleChange: InputChangeEvHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <FieldRootWrapper>
      <InputSearch
        className="ps-36"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={prettifyRut(value)}
        placeholder="Digite rut del paciente..."
        startContent={
          <InputContentWrapper className="start-0 px-3 bg-black/10 text-foreground rounded-s-xl italic">
            Buscar por Rut:
          </InputContentWrapper>
        }
      />
    </FieldRootWrapper>
  );
};

export default SearchPatientByRut;
