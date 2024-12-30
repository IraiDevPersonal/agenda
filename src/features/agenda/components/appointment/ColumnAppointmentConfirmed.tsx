import { AgendaColumn } from "../shared";
import { AppointmentCard } from "./AppointmentCard";

export const ColumnAppointmentConfirmed = () => {
  return (
    <AgendaColumn
      id="confirmed"
      title="Confirmadas"
      count={2}
      classNames={{
        wrapper: "text-sky-700 bg-sky-100",
        header: "hover:bg-sky-200",
      }}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <AppointmentCard
          key={idx}
          className="border-sky-600/10 text-sky-700 shadow-sky-700/15"
        />
      ))}
    </AgendaColumn>
  );
};
