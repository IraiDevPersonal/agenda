import useDialog from "@/features/_core/hooks/useDialog";
import AppointmentAvailableCard from "./AppointmentAvailableCard";
import DialogAppointmentAvailable from "./DialogAppointmentAvailable";
import AppointmentColumn, { type AppointmentColumnProps } from "./AppointmentColumn";

type Props = Pick<AppointmentColumnProps, "appointments" | "isLoading">;

const AvailableAppointments: React.FC<Props> = (props) => {
  const [isOpen, onToggle] = useDialog(false);
  return (
    <AppointmentColumn
      renderCard={(item) => <AppointmentAvailableCard appointment={item} />}
      onClickCard={onToggle}
      id="available"
      {...props}
    >
      <DialogAppointmentAvailable isOpen={isOpen} onClose={onToggle} />
    </AppointmentColumn>
  );
};

export default AvailableAppointments;
