import usePickAppointmentByDate from "../hooks/usePickAppointmentByDate";
import AgendaCalendar from "./AgendaCalendar";
import Text from "@/features/_core/components/ui/Text";
import AppointmentList from "../../appointment/components/AppointmentList";

const AgendaDatePicker = () => {
  const { date, showCalendar, handleSelectDate } = usePickAppointmentByDate();

  if (!showCalendar) {
    return (
      <div className="h-[calc(100vh-6rem)] w-[calc(100%-1rem)] grid place-content-center bg-accent rounded-2xl">
        <Text type="text">Seleccione una profesión...</Text>
      </div>
    );
  }

  return (
    <>
      <div className="flex w-full">
        <AgendaCalendar selected={date} onSelect={handleSelectDate} />
        {date && <AppointmentList date={date} />}
      </div>
    </>
  );
};

export default AgendaDatePicker;
