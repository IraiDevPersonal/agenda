import { useDialog } from "@/features/_core/hooks";
import Column from "../shared/Column";
import CardAppointment from "./CardAppointment";
import DialogAppointmentCancelled from "./DialogAppointmentCancelled";

const ColumnAppointmentCancelled = () => {
  const [isOpen, handleToogleOpen] = useDialog();
  const handleClose = () => {
    handleToogleOpen();
  };

  return (
    <>
      <Column id="cancelled" title="Canceladas" count={2}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <li
            key={idx}
            className="hover:cursor-pointer"
            onClick={handleToogleOpen}
          >
            <CardAppointment id="cancelled" />
          </li>
        ))}
      </Column>
      <DialogAppointmentCancelled isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default ColumnAppointmentCancelled;
