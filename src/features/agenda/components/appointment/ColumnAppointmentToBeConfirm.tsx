import { AgendaColumn } from "../shared";
import { AppointmentCard } from "./AppointmentCard";

export const ColumnAppointmentToBeConfirm = () => {
  return (
    <AgendaColumn
      count={2}
      id="to-be-confirm"
      title="Por Confirmar"
      classNames={{
        wrapper: "text-amber-700 bg-amber-100",
        header: "hover:bg-amber-200",
        body: "scrollbar-thumb-amber-700",
      }}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <AppointmentCard
          key={idx}
          className="text-amber-700 border-amber-600/10 shadow-amber-700/15"
        />
      ))}
    </AgendaColumn>
  );
};
