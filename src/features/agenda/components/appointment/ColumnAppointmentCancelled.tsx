import { Column } from "../shared";
import { AppointmentCard } from "./AppointmentCard";

export const ColumnAppointmentCancelled = () => {
  return (
    <Column
      id="cancelled"
      title="Canceladas"
      count={2}
      classNames={{
        wrapper: "text-red-700 bg-red-100",
        header: "hover:bg-red-200",
        body: "scrollbar-thumb-red-700",
      }}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <li key={idx}>
          <AppointmentCard className="text-red-700 border-red-600/10 shadow-red-700/15" />
        </li>
      ))}
    </Column>
  );
};
