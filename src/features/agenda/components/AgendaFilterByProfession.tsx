import Select from "@/features/_core/components/ui/selects/Select";
import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import useProfessionsAsOptions from "@/features/profession/hooks/useProfessionsAsOptions";
import { createOptions } from "@/features/_core/utils/create-options.util";
import type { SelectChangeEvHandler } from "@/config/types";

const AgendaFilterByProfession = () => {
  const {
    onFilterAppointments,
    appointmentsFilters: { profession_id },
  } = useAppointmentFilters();
  const { professionOptions, isLoading } = useProfessionsAsOptions();
  const handleChange: SelectChangeEvHandler = (e) => {
    const value = e.target.value;
    onFilterAppointments({ profession_id: value });
  };

  return (
    <Select
      disabled={isLoading}
      options={createOptions({
        options: professionOptions.map((opt) => ({
          label: `Profesión: ${opt.label}`,
          value: opt.value,
        })),
        customLabel: "Profesión: Sin selección",
      })}
      onChange={handleChange}
      value={profession_id}
      className="w-56"
    />
  );
};

export default AgendaFilterByProfession;
