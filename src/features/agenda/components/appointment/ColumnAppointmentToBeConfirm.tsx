import { useDialog } from "@/features/_core/hooks";
import { Column } from "../shared";
import { AppointmentCard } from "./AppointmentCard";
import { DialogAppointmentToBeConfirm } from "./DialogAppointmentToBeConfirm";

export const ColumnAppointmentToBeConfirm = () => {
  const [isOpen, handleToggleOpen] = useDialog();
  return (
    <Column count={2} id="to-be-confirm" title="Por Confirmar">
      {Array.from({ length: 5 }).map((_, idx) => (
        <li
          key={idx}
          onClick={handleToggleOpen}
          className="hover:cursor-pointer"
        >
          <AppointmentCard id="to-be-confirm" />
        </li>
      ))}
      <DialogAppointmentToBeConfirm
        isOpen={isOpen}
        onClose={handleToggleOpen}
      />
    </Column>
  );
};
