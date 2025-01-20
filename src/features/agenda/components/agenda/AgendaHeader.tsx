import { Input, InputSearch, Select } from "@/features/_core/components/ui";
import { Header } from "../shared";
import { createOptions } from "@/features/_core/utils/helpers.util";

const CURRENT_DATE = new Date()
  .toLocaleDateString()
  .split("-")
  .reverse()
  .join("-");

export const AgendaHeader = () => {
  return (
    <Header title="Agenda">
      <Select
        className="w-56"
        options={createOptions({
          options: [{ label: "Profesión: opcion 1", value: "1" }],
          customLabel: "Profesión: Sin selección",
        })}
      />
      <Select
        className="w-56"
        options={createOptions({
          options: [{ label: "Profesional: opcion 1", value: "1" }],
          customLabel: "Profesional: Sin selección",
        })}
      />
      <InputSearch className="w-80 first" placeholder="Buscar paciente..." />
      <Input className="w-max" type="date" defaultValue={CURRENT_DATE} />
    </Header>
  );
};
