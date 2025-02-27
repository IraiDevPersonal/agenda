import usePickAppointmentByDate from "../hooks/usePickAppointmentByDate";
import AgendaCalendar from "../../agenda/components/AgendaCalendar";
import Text from "@/features/_core/components/ui/Text";
import AppointmentList from "./AppointmentList";

const AppointmentDatePicker = () => {
  const { date, showCalendar, handleSelectDate } = usePickAppointmentByDate();

  if (!showCalendar) {
    return <UnselectedText text="Seleccione una profesión..." />;
  }

  return (
    <>
      <div className="flex w-full">
        <AgendaCalendar selected={date} onSelect={handleSelectDate} />
        {date ? (
          <AppointmentList date={date} />
        ) : (
          <UnselectedText text="Seleccione una día..." />
        )}
      </div>
    </>
  );
};

export default AppointmentDatePicker;

const UnselectedText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="h-[calc(100vh-6rem)] w-full grid place-content-center">
      <Text type="text">{text}</Text>
    </div>
  );
};
