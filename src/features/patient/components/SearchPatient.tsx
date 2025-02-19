import { useRef, useState } from "react";
import FieldRootWrapper from "@/features/_core/components/ui/FieldRootWrapper";
import InputSearch from "@/features/_core/components/ui/inputs/InputSearch";
import Label from "@/features/_core/components/ui/Label";
import RadioGroup from "@/features/_core/components/ui/RadioGroup";
import { PatientEntity } from "../domain/patient.entity";
import { DUMMY_PATIENT } from "../utils/constants.util";
import type { InputKeyboardEventHandler } from "@/config/types";

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

const SearchPatient: React.FC<Props> = ({ getPatient }) => {
  const [filter, setFilter] = useState(FILTER_ITEMS[0].id);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastSearch = useRef<string>("");

  const handleFilterChange = (value: string) => {
    setFilter(value);
    lastSearch.current = "";
    inputRef.current!.value = "";
  };
  const handleKeyDown: InputKeyboardEventHandler = (e) => {
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

export default SearchPatient;
