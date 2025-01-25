import { createOptions } from "@/features/_core/utils/helpers.util";
import Header from "../shared/Header";
import Select from "@/features/_core/components/ui/selects/Select";
import InputSearch from "@/features/_core/components/ui/inputs/InputSearch";
import Input from "@/features/_core/components/ui/inputs/Input";

const CURRENT_DATE = new Date()
  .toLocaleDateString()
  .split("-")
  .reverse()
  .join("-");

const AgendaHeader = () => {
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

export default AgendaHeader;
