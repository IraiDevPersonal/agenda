import { Column } from "../shared";
import { AppointmentCard } from "./AppointmentCard";

export const ColumnAppointmentCancelled = () => {
  return (
    <Column id="cancelled" title="Canceladas" count={2}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <li key={idx}>
          <AppointmentCard id="cancelled" />
        </li>
      ))}
    </Column>
  );
};
