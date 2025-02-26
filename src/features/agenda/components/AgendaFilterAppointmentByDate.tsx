import { useState } from "react";
import Input from "@/features/_core/components/ui/inputs/Input";
import useFilterAppointments from "../hooks/useFilterAppointments";
import type { InputChangeEvHandler } from "@/config/types";

type Props = {
  defaultValue: string | undefined;
};

const AgendaFilterAppointmentByDate: React.FC<Props> = ({ defaultValue = "" }) => {
  const { onFilterAppointments } = useFilterAppointments();
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
