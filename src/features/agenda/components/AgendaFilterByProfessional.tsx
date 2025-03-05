import Select from "@/features/_core/components/ui/selects/Select";
import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import useProfessionalsAsOptions from "@/features/professional/hooks/useProfessionalsAsOptions";
import { createOptions } from "@/features/_core/utils/create-options.util";
import type { SelectChangeEvHandler } from "@/config/types";

const AgendaFilterByProfessional = () => {
  const {
    onFilterAppointments,
    appointmentFilters: { professional_id, profession_id },
  } = useAppointmentFilters();
  const { professionalOptions, isLoading } = useProfessionalsAsOptions();

  const handleChange: SelectChangeEvHandler = (e) => {
    const value = e.target.value;
    onFilterAppointments({ professional_id: value ? Number(value) : undefined });
  };

  return (
    <Select
      disabled={isLoading}
      options={createOptions({
        options: professionalOptions
          .filter((opt) =>
            !profession_id ? true : opt.professions.includes(profession_id),
          )
          .map((opt) => ({
            label: `Profesional: ${opt.label}`,
            value: opt.value.toString(),
          })),
        customLabel: "Profesional: Sin selección",
      })}
      value={professional_id ?? ""}
      onChange={handleChange}
      className="w-[330px]"
    />
  );
};
export default AgendaFilterByProfessional;
