import usePickCalendarDay from "../../calendar/hooks/usePickCalendarDate";
import AgendaCalendar from "@/modules/calendar/components/AgendaCalendar";
import Text from "@/modules/_core/components/ui/Text";
import AppointmentList from "../../appointment/components/AppointmentList";

const AgendaDatePicker = () => {
  const { day, showCalendar, handleSelectDay } = usePickCalendarDay();

  if (!showCalendar) {
    return (
      <div className="h-[calc(100vh-6rem)] w-[calc(100%-1rem)] grid place-content-center bg-accent rounded-2xl">
        <Text type="text">Seleccione una profesión...</Text>
      </div>
    );
  }

  return (
    <>
      <div className="flex w-full justify-center">
        <AgendaCalendar selected={day} onSelect={handleSelectDay} />
        {day && <AppointmentList date={day} />}
      </div>
    </>
  );
};

export default AgendaDatePicker;
