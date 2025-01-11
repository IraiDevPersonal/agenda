import { Uid } from "@/config";
import { Input } from "@/features/_core/components/ui";
import { useRef, useState } from "react";
import { PatientEntity } from "../domain/patient.entity";
import { prettifyRut } from "react-rut-formatter";

const DUMMY_PATIENT: PatientEntity = {
  id: 1,
  uid: Uid.generate(),
  rut: "10.050.844-7",
  names: "Ignacio Rodrigo",
  last_names: "Arriagada Iriarte",
  email: "ignacio.arr01@gmail.com",
  phone: "+56956980565",
};

type Props = {
  getPatient(patient: PatientEntity | null): void;
};

export const SearchPatientByRut: React.FC<Props> = ({ getPatient }) => {
  const lastSearch = useRef<string>("");
  const [value, setValue] = useState("");

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== "Enter") return;
    const value = e.currentTarget.value;
    if (lastSearch.current === value) return;
    getPatient(prettifyRut(value) === "19.050.844-7" ? DUMMY_PATIENT : null);
    lastSearch.current = value;
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <Input.Root>
      <Input.Search
        className="ps-[4.5rem]"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={prettifyRut(value)}
        placeholder="Buscar paciente por RUT..."
        startContent={
          <Input.ContentWrapper className="start-0 px-3 bg-black text-white rounded-s-xl font-semibold">
            RUT:
          </Input.ContentWrapper>
        }
      />
    </Input.Root>
  );
};
