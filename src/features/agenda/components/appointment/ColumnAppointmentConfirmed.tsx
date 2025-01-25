import { useDialog } from "@/features/_core/hooks";
import Column from "../shared/Column";
import AppointmentCard from "./AppointmentCard";
import DialogAppointmentConfirmed from "./DialogAppointmentConfirmed";

const ColumnAppointmentConfirmed = () => {
  const [isOpen, handleToogleOpen] = useDialog();
  return (
    <>
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
      </Column>
      <DialogAppointmentConfirmed isOpen={isOpen} onClose={handleToogleOpen} />
    </>
  );
};

export default ColumnAppointmentConfirmed;
