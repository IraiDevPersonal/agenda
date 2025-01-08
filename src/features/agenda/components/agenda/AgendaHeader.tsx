import { Input, Select } from "@/features/_core/components/ui";
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
        placeholder="Buscar por Profesión..."
        options={[{ label: "opcion 1", value: "1" }]}
      />
      <Select
        className="w-56"
        placeholder="Buscar por Profesional..."
        options={[{ label: "opcion 1", value: "1" }]}
      />
      <Input.Search className="w-80" placeholder="Buscar paciente..." />
      <Input className="w-max" type="date" defaultValue={CURRENT_DATE} />
    </Header>
  );
};
