import { Uid } from "@/config";
import { Input } from "@/features/_core/components/ui";
import { useRef } from "react";
import { PatientEntity } from "../domain/patient.entity";

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
  const inputRef = useRef<HTMLInputElement>(null);
  const lastSearch = useRef<string>("");

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== "Enter") return;
    const value = e.currentTarget.value;
    if (lastSearch.current === value) return;
    getPatient(
      value.toLocaleLowerCase() === "19.050.844-7" ? DUMMY_PATIENT : null
    );
    lastSearch.current = value;
  };

  return (
    <Input.Root>
      <Input.Search
        ref={inputRef}
        className="ps-16"
        onKeyDown={handleKeyDown}
        placeholder="Buscar paciente por RUT..."
        startContent={
          <Input.ContentWrapper className="start-0 px-3 bg-black/10 rounded-s-lg font-semibold">
            RUT:
          </Input.ContentWrapper>
        }
      />
    </Input.Root>
  );
};
