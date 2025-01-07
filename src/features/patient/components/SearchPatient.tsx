import { Input, Label, RadioGroup } from "@/features/_core/components/ui";
import { SearchPatientEntity } from "../entities/search_patient.entity";
import { useState } from "react";

type Props = {
  getPatient(value: string): void;
};

export const SearchPatient: React.FC<Props> = ({ getPatient }) => {
  const [filter, setFilter] = useState(SearchPatientEntity.items[0].id);
  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  return (
    <Input.Root>
      <Input.Search
        placeholder={`Buscar paciente por ${SearchPatientEntity.getName(
          filter
        )}...`}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          getPatient(e.currentTarget.value);
        }}
      />
      <RadioGroup
        value={filter}
        orientation="horizontal"
        onValueChange={handleFilterChange}
        // className="justify-center"
      >
        {SearchPatientEntity.items.map(({ id, label }) => (
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
    </Input.Root>
  );
};
