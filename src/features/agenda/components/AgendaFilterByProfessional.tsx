import Select from "@/features/_core/components/ui/selects/Select";
import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import useProfessionalsAsOptions from "@/features/professional/hooks/useProfessionalsAsOptions";
import { createOptions } from "@/features/_core/utils/create-options.util";
import type { SelectChangeEvHandler } from "@/config/types";

const AgendaFilterByProfessional = () => {
  const {
    onFilterAppointments,
    appointmentFilters: { professional_id = "" },
  } = useAppointmentFilters();
  const { professionalOptions, isLoading } = useProfessionalsAsOptions();

  const handleChange: SelectChangeEvHandler = (e) => {
    const value = e.target.value;
    onFilterAppointments({ professional_id: value });
  };

  return (
    <Select
      disabled={isLoading}
      options={createOptions({
        options: professionalOptions.map((opt) => ({
          label: `Profesional: ${opt.label}`,
          value: opt.value,
        })),
        customLabel: "Profesional: Sin selección",
      })}
      onChange={handleChange}
      value={professional_id}
      className="w-[330px]"
    />
  );
};
export default AgendaFilterByProfessional;
