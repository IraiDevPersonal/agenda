import useDialog from "@/features/_core/hooks/useDialog";
import AppointmentCard from "./AppointmentCard";
import DialogAppointmentConfirmed from "./DialogAppointmentConfirmed";
import AppointmentColumn, { type AppointmentColumnProps } from "./AppointmentColumn";

type Props = Pick<AppointmentColumnProps, "appointments" | "isLoading">;

const ConfirmedAppointments: React.FC<Props> = (props) => {
  const [isOpen, onToggle] = useDialog(false);
  return (
    <AppointmentColumn
      renderCard={(item) => <AppointmentCard type="confirmed" appointment={item} />}
      onClickCard={onToggle}
      id="confirmed"
      {...props}
    >
      <DialogAppointmentConfirmed isOpen={isOpen} onClose={onToggle} />
    </AppointmentColumn>
  );
};

export default ConfirmedAppointments;
