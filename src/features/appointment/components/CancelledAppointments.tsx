import useDialog from "@/features/_core/hooks/useDialog";
import AppointmentCard from "./AppointmentCard";
import DialogAppointmentCancelled from "./DialogAppointmentCancelled";
import AppointmentColumn, { type AppointmentColumnProps } from "./AppointmentColumn";

type Props = Pick<AppointmentColumnProps, "appointments" | "isLoading">;

const CancelledAppointments: React.FC<Props> = (props) => {
  const [isOpen, onToggle] = useDialog(false);
  return (
    <AppointmentColumn
      renderCard={(item) => <AppointmentCard type="cancelled" appointment={item} />}
      onClickCard={onToggle}
      id="cancelled"
      {...props}
    >
      <DialogAppointmentCancelled isOpen={isOpen} onClose={onToggle} />
    </AppointmentColumn>
  );
};

export default CancelledAppointments;
