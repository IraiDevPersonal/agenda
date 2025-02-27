import useAppointmentFilters from "@/features/appointment/hooks/useAppointmentFilters";
import AgendaCalendar from "../../agenda/components/AgendaCalendar";
import Text from "@/features/_core/components/ui/Text";
import AppointmentList from "./AppointmentList";
import DateHelper from "@/config/date-helper";

const AppointmentPicker = () => {
  // const [date, setDate] = useState<Date>();
  const { appointmentsFilters, onFilterAppointments } = useAppointmentFilters();
  const date = appointmentsFilters.date ? new Date(appointmentsFilters.date) : undefined;

  console.log({ date, d: appointmentsFilters.date });
  // FIXME: problema al formatear fechas en este punto, se muestra con un dia menos

  const handleSelectDate = (date?: Date) => {
    // setDate(date);
    if (date) {
      onFilterAppointments({ date: DateHelper.format(date, "yyyy-mm-dd") });
    }
  };

  if (!appointmentsFilters.profession_id) {
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

export default AppointmentPicker;

const UnselectedText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="h-[calc(100vh-6rem)] w-full grid place-content-center">
      <Text type="text">{text}</Text>
    </div>
  );
};
