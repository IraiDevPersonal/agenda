import { useState } from "react";
import Input from "@/features/_core/components/ui/inputs/Input";
import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import type { InputChangeEvHandler } from "@/config/types";

type Props = {
  defaultValue: string | undefined;
};

const AgendaFilterAppointmentByDate: React.FC<Props> = ({ defaultValue = "" }) => {
  const { onFilterAppointments } = useAppointmentFilters();
  const [date, setDate] = useState(defaultValue);

  const handleChange: InputChangeEvHandler = (e) => {
    const date = e.target.value;
    setDate(date);
    onFilterAppointments({ date });
  };

  return (
    <>
      <Input onChange={handleChange} className="w-max" value={date} type="date" />
    </>
  );
};

export default AgendaFilterAppointmentByDate;
