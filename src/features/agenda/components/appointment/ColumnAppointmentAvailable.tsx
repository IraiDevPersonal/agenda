import { useDialog } from "@/features/_core/hooks";
import AvailableAppointmentToggleFormContext from "../../context/AvailableAppointmentToggleFormContext";
import Column from "../shared/Column";
import CardAvailableAppointment from "./CardAppointmentAvailable";
import DialogAppointmentAvailable from "./DialogAppointmentAvailable";

type Props = { heightAuto?: boolean; isHovereableHeader?: boolean };

const ColumnAppointmentAvailable: React.FC<Props> = (props) => {
  const [isOpen, onToggleIsOpen] = useDialog();
  const handleClose = () => {
    onToggleIsOpen();
  };

  return (
    <AvailableAppointmentToggleFormContext>
      <Column {...props} title="Disponibles" id="available" count={2}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <li key={idx} onClick={handleClose} className="hover:cursor-pointer">
            <CardAvailableAppointment />
          </li>
        ))}
        <DialogAppointmentAvailable isOpen={isOpen} onClose={handleClose} />
      </Column>
    </AvailableAppointmentToggleFormContext>
  );
};

export default ColumnAppointmentAvailable;
