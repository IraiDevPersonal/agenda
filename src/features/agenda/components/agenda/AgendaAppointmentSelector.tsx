import { useState } from "react";
import AppointmentList from "../appointment/AppointmentList";
import AgendaCalendar from "./AgendaCalendar";
import Text from "@/features/_core/components/ui/Text";

const AgendaAppointmentSelector = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const handleSelectDate = (date?: Date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="flex w-full">
        <AgendaCalendar selected={selectedDate} onSelect={handleSelectDate} />
        {selectedDate ? (
          <AppointmentList date={selectedDate} />
        ) : (
          <div className="h-[calc(100vh-6rem)] w-full grid place-content-center">
            <Text type="text">Seleccione una día...</Text>
          </div>
        )}
      </div>
    </>
  );
};

export default AgendaAppointmentSelector;
