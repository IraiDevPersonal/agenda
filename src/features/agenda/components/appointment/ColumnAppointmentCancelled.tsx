import { useDialog } from "@/features/_core/hooks";
import Column from "../shared/Column";
import CardAppointment from "./CardAppointment";
import DialogAppointmentCancelled from "./DialogAppointmentCancelled";

type Props = { heightAuto?: boolean; isHovereableHeader?: boolean };

const ColumnAppointmentCancelled: React.FC<Props> = (props) => {
  const [isOpen, handleToogleOpen] = useDialog();
  const handleClose = () => {
    handleToogleOpen();
  };

  return (
    <>
      <Column {...props} title="Canceladas" id="cancelled" count={2}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <li
            key={idx}
            className="hover:cursor-pointer"
            onClick={handleToogleOpen}
          >
            <CardAppointment id="cancelled" />
          </li>
        ))}
        <DialogAppointmentCancelled isOpen={isOpen} onClose={handleClose} />
      </Column>
    </>
  );
};

export default ColumnAppointmentCancelled;
