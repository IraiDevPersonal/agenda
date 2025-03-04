import usePickCalendarDate from "../../calendar/hooks/usePickCalendarDate";
import AgendaCalendar from "@/features/calendar/components/AgendaCalendar";
import Text from "@/features/_core/components/ui/Text";
import AppointmentList from "../../appointment/components/AppointmentList";

const AgendaDatePicker = () => {
  const { date, showCalendar, handleSelectDate } = usePickCalendarDate();

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
