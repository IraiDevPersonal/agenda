import useDialog from "@/features/_core/hooks/useDialog";
import AppointmentCard from "./AppointmentCard";
import DialogAppointmentToConfirm from "./DialogAppointmentToConfirm";
import AppointmentColumn, { type AppointmentColumnProps } from "./AppointmentColumn";

type Props = Pick<AppointmentColumnProps, "appointments" | "isLoading">;

const ToConfirmAppointments: React.FC<Props> = (props) => {
  const [isOpen, onToggle] = useDialog(false);
  return (
    <AppointmentColumn
      renderCard={(item) => <AppointmentCard type="to-confirm" appointment={item} />}
      onClickCard={onToggle}
      id="to-confirm"
      {...props}
    >
      <DialogAppointmentToConfirm isOpen={isOpen} onClose={onToggle} />
    </AppointmentColumn>
  );
};

export default ToConfirmAppointments;
