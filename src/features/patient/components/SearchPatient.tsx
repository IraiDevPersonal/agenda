import { Uid } from "@/config";
import {
  FieldRootWrapper,
  InputSearch,
  Label,
  RadioGroup,
} from "@/features/_core/components/ui";
import { useRef, useState } from "react";
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

const FILTER_ITEMS = [
  { label: "Rut paciente", showName: "rut", id: "rut" },
  { label: "Nombre paciente", showName: "nombre", id: "name" },
];

function getFilterShowName(id: string) {
  return FILTER_ITEMS.find((el) => el.id === id)?.showName ?? "";
}

type Props = {
  getPatient(patient: PatientEntity | null): void;
};

export const SearchPatient: React.FC<Props> = ({ getPatient }) => {
  const [filter, setFilter] = useState(FILTER_ITEMS[0].id);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastSearch = useRef<string>("");

  const handleFilterChange = (value: string) => {
    setFilter(value);
    lastSearch.current = "";
    inputRef.current!.value = "";
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== "Enter") return;
    const value = e.currentTarget.value;
    if (lastSearch.current === value) return;
    getPatient(value.toLocaleLowerCase() === "ignacio" ? DUMMY_PATIENT : null);
    lastSearch.current = value;
  };

  return (
    <FieldRootWrapper>
      <InputSearch
        ref={inputRef}
        onKeyDown={handleKeyDown}
        placeholder={`Buscar paciente por ${getFilterShowName(filter)}...`}
      />
      <RadioGroup
        value={filter}
        orientation="horizontal"
        onValueChange={handleFilterChange}
        // className="justify-center"
      >
        {FILTER_ITEMS.map(({ id, label }) => (
          <div
            key={id}
            className="relative flex flex-col items-start gap-4 rounded-lg border border-input p-2 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:shadow-lg has-[[data-state=checked]]:bg-accent"
          >
            <div className="flex items-center gap-2">
              <RadioGroup.Item
                id={id}
                value={id}
                className="after:absolute after:inset-0"
              />
              <Label htmlFor={id}>{label}</Label>
            </div>
          </div>
        ))}
      </RadioGroup>
    </FieldRootWrapper>
  );
};
