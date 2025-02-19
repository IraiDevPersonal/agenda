import Select from "@/features/_core/components/ui/selects/Select";
import Header from "../shared/Header";
import AgendaFilterAppointmentsByPatientRut from "./AgendaFilterAppointmentsByPatientRut";
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
      <AgendaFilterAppointmentsByPatientRut defaultValue="" />
    </Header>
  );
};

export default AgendaHeader;
