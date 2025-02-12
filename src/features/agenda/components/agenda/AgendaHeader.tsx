import InputSearch from "@/features/_core/components/ui/inputs/InputSearch";
import Select from "@/features/_core/components/ui/selects/Select";
import Header from "../shared/Header";
import { createOptions } from "@/features/_core/utils/create-options.util";

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
      <InputSearch
        className="w-80 first"
        placeholder="Buscar por Rut paciente..."
      />
      {/* <Input
        className="w-max"
        type="date"
        defaultValue={new Now().format(new Date(), "dd-mm-yyyy")}
      /> */}
    </Header>
  );
};

export default AgendaHeader;
