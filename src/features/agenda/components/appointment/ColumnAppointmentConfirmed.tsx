import { useDialog } from "@/features/_core/hooks";
import { Column } from "../shared";
import { AppointmentCard, DialogAppointmentConfirmed } from "./";

export const ColumnAppointmentConfirmed = () => {
  const [isOpen, handleToogleOpen] = useDialog();
  return (
    <Column id="confirmed" title="Confirmadas" count={2}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <li
          key={idx}
          onClick={handleToogleOpen}
          className="hover:cursor-pointer"
        >
          <AppointmentCard key={idx} id="confirmed" />
        </li>
      ))}
      <DialogAppointmentConfirmed isOpen={isOpen} onClose={handleToogleOpen} />
    </Column>
  );
};
