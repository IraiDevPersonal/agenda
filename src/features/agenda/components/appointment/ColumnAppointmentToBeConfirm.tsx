import { useDialog } from "@/features/_core/hooks";
import Column from "../shared/Column";
import CardAppointment from "./CardAppointment";
import DialogAppointmentToConfirm from "./DialogAppointmentToConfirm";

const ColumnAppointmentToBeConfirm = () => {
  const [isOpen, handleToggleOpen] = useDialog();
  return (
    <>
      <Column count={2} id="to-confirm" title="Por Confirmar">
        {Array.from({ length: 5 }).map((_, idx) => (
          <li
            key={idx}
            onClick={handleToggleOpen}
            className="hover:cursor-pointer"
          >
            <CardAppointment id="to-confirm" />
          </li>
        ))}
      </Column>
      <DialogAppointmentToConfirm isOpen={isOpen} onClose={handleToggleOpen} />
    </>
  );
};

export default ColumnAppointmentToBeConfirm;
