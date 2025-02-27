import Input from "@/features/_core/components/ui/inputs/Input";
import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import type { InputChangeEvHandler } from "@/config/types";

const AgendaFilterByDate = () => {
  const {
    onFilterAppointments,
    appointmentFilters: { date },
  } = useAppointmentFilters();

  const handleChange: InputChangeEvHandler = (e) => {
    const date = e.target.value;
    onFilterAppointments({ date });
  };

  return (
    <>
      <Input onChange={handleChange} className="w-max" value={date} type="date" />
    </>
  );
};

export default AgendaFilterByDate;
