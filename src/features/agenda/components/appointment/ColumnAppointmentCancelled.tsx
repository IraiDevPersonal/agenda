import { useDialog } from "@/features/_core/hooks";
import { Column } from "../shared";
import { AppointmentCard } from "./AppointmentCard";
import { DialogAppointmentCancelled } from "./DialogAppointmentCancelled";

export const ColumnAppointmentCancelled = () => {
  const [isOpen, handleToogleOpen] = useDialog();
  const handleClose = () => {
    handleToogleOpen();
  };

  return (
    <Column id="cancelled" title="Canceladas" count={2}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <li
          key={idx}
          className="hover:cursor-pointer"
          onClick={handleToogleOpen}
        >
          <AppointmentCard id="cancelled" />
        </li>
      ))}
      <DialogAppointmentCancelled isOpen={isOpen} onClose={handleClose} />
    </Column>
  );
};
