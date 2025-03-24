import Select from "@/features/_core/components/ui/selects/Select";
import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import useProfessionsAsOptions from "@/features/profession/hooks/useProfessionsAsOptions";
import { createOptions } from "@/features/_core/utils/create-options.util";
import type { SelectChangeEvHandler } from "@/config/types";

const AgendaFilterByProfession = () => {
  const { onFilterAppointments, getValue } = useAppointmentFilters();
  const { professionOptions, isLoading } = useProfessionsAsOptions();

  const handleChange: SelectChangeEvHandler = (e) => {
    const value = e.target.value;
    onFilterAppointments({
      profession_id: value ? Number(value) : undefined,
      professional_id: undefined,
    });
  };

  return (
    <Select
      options={createOptions({
        options: professionOptions.map((opt) => ({
          label: `Profesión: ${opt.label}`,
          value: opt.value,
        })),
        customLabel: "Profesión: Sin selección",
      })}
      value={getValue("profession_id", "")}
      onChange={handleChange}
      disabled={isLoading}
      className="w-56"
    />
  );
};

export default AgendaFilterByProfession;
