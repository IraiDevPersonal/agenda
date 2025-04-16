import Select from "@/modules/_core/components/ui/selects/Select";
import useAppointmentFilters from "@/modules/appointment/hooks/useAppointmentFilters";
import useProfessionalsAsOptions from "@/modules/professional/hooks/useProfessionalsAsOptions";
import { createOptions } from "@/modules/_core/utils/create-options.util";
import type { SelectChangeEvHandler } from "@/config/types";

const AgendaFilterByProfessional = () => {
  const { onFilterAppointments, getValue } = useAppointmentFilters();
  const { professionalOptions, isLoading } = useProfessionalsAsOptions();

  const handleChange: SelectChangeEvHandler = (e) => {
    const value = e.target.value;
    onFilterAppointments({ professional_id: value ? Number(value) : undefined });
  };

  return (
    <Select
      options={createOptions({
        options: professionalOptions
          .filter((opt) => {
            const profession_id = +getValue("profession_id", "");
            return !profession_id ? true : opt.professions.includes(profession_id);
          })
          .map((opt) => ({
            label: `Profesional: ${opt.label}`,
            value: opt.value.toString(),
          })),
        customLabel: "Profesional: Sin selección",
      })}
      value={getValue("professional_id", "")}
      onChange={handleChange}
      className="w-[330px]"
      disabled={isLoading}
    />
  );
};
export default AgendaFilterByProfessional;
