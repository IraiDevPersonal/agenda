import Input from "@/features/_core/components/ui/inputs/Input";
import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import type { InputChangeEvHandler } from "@/config/types";

const AgendaFilterByDate = () => {
  const { onFilterAppointments, getValue } = useAppointmentFilters();

  const handleChange: InputChangeEvHandler = (e) => {
    const date = e.target.value;
    onFilterAppointments({ date });
  };

  return (
    <>
      <Input
        value={getValue("date", "")}
        onChange={handleChange}
        className="w-max"
        type="date"
      />
    </>
  );
};

export default AgendaFilterByDate;
