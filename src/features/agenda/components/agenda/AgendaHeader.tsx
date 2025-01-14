import { Input, InputSearch, Select } from "@/features/_core/components/ui";
import { Header } from "../shared";

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
        options={[{ label: "Profesión: opcion 1", value: "1" }]}
      />
      <Select
        className="w-56"
        options={[{ label: "Profesional: opcion 1", value: "1" }]}
      />
      <InputSearch className="w-80 first" placeholder="Buscar paciente..." />
      <Input className="w-max" type="date" defaultValue={CURRENT_DATE} />
    </Header>
  );
};
